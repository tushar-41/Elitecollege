import { NextRequest, NextResponse } from "next/server";

/* =======================
   Gemini Configuration
======================= */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

/* =======================
   Type Definitions
======================= */

interface CollegeMetrics {
  academics: string | number;
  placements: string | number;
  infrastructure: string | number;
  faculty: string | number;
}

interface CollegeData {
  name: string;
  score: number;
  metrics: CollegeMetrics;
}

interface CompareRequest {
  college1: CollegeData;
  college2: CollegeData;
}

/* =======================
   Prompt Generator
======================= */

function generateComparisonPrompt(
  college1: CollegeData,
  college2: CollegeData
): string {
  return `
You are an expert college counselor.

Compare the following two colleges and give a clear, fair, and helpful comparison in **2–3 concise sentences** to help a student decide.

College 1:
Name: ${college1.name}
Overall Score: ${college1.score}/100
Academics: ${college1.metrics.academics}
Placements: ${college1.metrics.placements}
Infrastructure: ${college1.metrics.infrastructure}
Faculty: ${college1.metrics.faculty}

College 2:
Name: ${college2.name}
Overall Score: ${college2.score}/100
Academics: ${college2.metrics.academics}
Placements: ${college2.metrics.placements}
Infrastructure: ${college2.metrics.infrastructure}
Faculty: ${college2.metrics.faculty}

Highlight strengths of both colleges and keep the tone balanced.
`;
}

/* =======================
   Gemini API Caller
======================= */

async function callGeminiAPI(prompt: string): Promise<string> {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 200,
        topP: 0.9,
        topK: 40,
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Gemini API Error:", data);
    throw new Error(data.error?.message || "Gemini API failed");
  }

  const text = data?.candidates?.[0]?.content?.parts
    ?.map((p: any) => p.text)
    ?.join(" ")
    ?.trim();

  if (!text) {
    console.error("Empty Gemini response:", JSON.stringify(data, null, 2));
    return "No comparison could be generated at this time.";
  }

  return text;
}

/* =======================
   POST Handler
======================= */

export async function POST(request: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as CompareRequest;
    const { college1, college2 } = body;

    if (!college1 || !college2) {
      return NextResponse.json(
        { error: "Both college1 and college2 are required" },
        { status: 400 }
      );
    }

    const prompt = generateComparisonPrompt(college1, college2);
    const insight = await callGeminiAPI(prompt);

    return NextResponse.json({ insight }, { status: 200 });
  } catch (error) {
    console.error("College Comparison API Error:", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

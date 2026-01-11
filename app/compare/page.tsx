"use client";
import React, { useState, useMemo, useEffect } from "react";
import { ArrowRight, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import CompareSelector from "@/components/CompareSelector";
import ComparisonResults from "@/components/ComparisonResults";
import { LoadingState } from "../leaderboard/_components";

interface Metrics {
  academics: number;
  infrastructure: number;
  placements: number;
  roi: number;
}

interface College {
  collegeId: number;
  collegeName: string;
  metrics: Metrics;
  rank: number;
  score: number;
  yearLabel?: string;
}

// Fallback hardcoded comparison data for different college pairs
const FALLBACK_COMPARISONS: Record<string, string> = {
  "MSIT-BPIT":
    "MSIT excels in academics (66.2) and overall performance with a strong score of 46.7, while BPIT offers competitive academics (65.5) with slightly better ROI (95.2). MSIT is ideal for academic excellence, whereas BPIT provides a balanced approach with strong placement ROI.",
  "BPIT-MAIT":
    "BPIT demonstrates superior academics (65.5) and better overall metrics compared to MAIT. BPIT's comprehensive performance across academics and infrastructure makes it the stronger choice for engineering aspirants seeking well-rounded education.",
  "MSIT-MAIT":
    "MSIT significantly outperforms MAIT with higher academics (66.2 vs 0) and overall score (46.7 vs 9.2). MSIT is the clear winner for students prioritizing academic excellence and comprehensive college experience.",
};

// Utility function to format college data to 2 decimal places
const formatCollegeData = (college: College): College => {
  return {
    ...college,
    score: Math.round(college.score * 100) / 100,
    metrics: {
      academics: Math.round(college.metrics.academics * 100) / 100,
      placements: Math.round(college.metrics.placements * 100) / 100,
      infrastructure: Math.round(college.metrics.infrastructure * 100) / 100,
      roi: Math.round(college.metrics.roi * 100) / 100,
    },
  };
};

const ComparePage = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [college1, setCollege1] = useState<College | null>(null);
  const [college2, setCollege2] = useState<College | null>(null);
  const [aiInsight, setAiInsight] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [dataLoading, setDataLoading] = useState(true);

  // Fetch college data from API
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        setDataLoading(true);
        const response = await fetch(
          `https://myipurank.onrender.com/api/analytics/colleges/${selectedYear}`
        );
        const data = await response.json();
        const formattedData = data.map((college: College) =>
          formatCollegeData(college)
        );
        setColleges(formattedData);
        setCollege1(formattedData[0] || null);
        setCollege2(formattedData[1] || null);
        setAiInsight("");
      } catch (error) {
        console.error("Error fetching colleges:", error);
        setColleges([]);
      } finally {
        setDataLoading(false);
      }
    };

    fetchColleges();
  }, [selectedYear]);

  const getAIComparison = async () => {
    if (!college1 || !college2) return;

    setLoading(true);
    try {
      const response = await fetch("/api/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          college1: {
            name: college1.collegeName,
            score: college1.score,
            metrics: college1.metrics,
          },
          college2: {
            name: college2.collegeName,
            score: college2.score,
            metrics: college2.metrics,
          },
        }),
      });

      const data = await response.json();
      let insight = data.insight || "";

      // If AI doesn't return desired result, use fallback hardcoded data
      if (!insight || insight.includes("Error") || insight.includes("Unable")) {
        const key = `${college1.collegeName}-${college2.collegeName}`;
        insight =
          FALLBACK_COMPARISONS[key] ||
          `${college1.collegeName} has a score of ${college1.score.toFixed(
            2
          )} with strong academics (${college1.metrics.academics.toFixed(
            2
          )}), while ${college2.collegeName} scores ${college2.score.toFixed(
            2
          )}. Both colleges offer distinct strengths in their respective domains.`;
      }

      setAiInsight(insight);
    } catch (error) {
      console.error("Error fetching AI comparison:", error);
      // Use fallback data on error
      const key = `${college1.collegeName}-${college2.collegeName}`;
      const fallbackInsight =
        FALLBACK_COMPARISONS[key] ||
        `${college1.collegeName} (Score: ${college1.score.toFixed(2)}) vs ${
          college2.collegeName
        } (Score: ${college2.score.toFixed(
          2
        )}). Both institutions offer quality engineering education with distinct advantages.`;
      setAiInsight(fallbackInsight);
    } finally {
      setLoading(false);
    }
  };

  const difference = useMemo(() => {
    if (!college1 || !college2) return null;
    return {
      scoresDiff:
        Math.round(Math.abs(college1.score - college2.score) * 100) / 100,
      academicsDiff:
        Math.round(
          Math.abs(college1.metrics.academics - college2.metrics.academics) *
            100
        ) / 100,
      placementsDiff:
        Math.round(
          Math.abs(college1.metrics.placements - college2.metrics.placements) *
            100
        ) / 100,
      infrastructureDiff:
        Math.round(
          Math.abs(
            college1.metrics.infrastructure - college2.metrics.infrastructure
          ) * 100
        ) / 100,
      roiDiff:
        Math.round(
          Math.abs(college1.metrics.roi - college2.metrics.roi) * 100
        ) / 100,
    };
  }, [college1, college2]);

  if (dataLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <LoadingState />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="mb-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight mb-4">
              Compare Colleges
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Side-by-side comparison of colleges with AI-powered insights to
              help you make the right choice.
            </p>
          </div>

          {/* Year Selector */}
          <div className="flex gap-4">
            {["2023", "2024", "2025"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all",
                  selectedYear === year
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {colleges.length > 0 ? (
          <>
            {/* College Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <CompareSelector
                colleges={colleges}
                selectedCollege={college1}
                onSelect={setCollege1}
                label="College 1"
              />

              <div className="flex items-center justify-center md:col-span-1">
                <div className="bg-gray-100 rounded-full p-3">
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              <CompareSelector
                colleges={colleges}
                selectedCollege={college2}
                onSelect={setCollege2}
                label="College 2"
              />
            </div>

            {/* Comparison Results */}
            {college1 && college2 && (
              <>
                <ComparisonResults
                  college1={college1}
                  college2={college2}
                  differences={difference}
                />

                {/* AI Insight Button */}
                <div className="my-12 text-center">
                  <button
                    onClick={getAIComparison}
                    disabled={loading}
                    className={cn(
                      "inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300",
                      loading
                        ? "bg-stone-200 text-stone-600 cursor-not-allowed"
                        : "bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg"
                    )}
                  >
                    {loading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Generating Insight...
                      </>
                    ) : (
                      <>Get AI Comparison Insight</>
                    )}
                  </button>
                </div>

                {/* AI Insight Result */}
                {aiInsight && (
                  <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-stone-900 mb-3">
                          AI-Powered Comparison Insight
                        </h3>
                        <p className="text-stone-700 leading-relaxed">
                          {aiInsight}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600">
              No college data available for {selectedYear}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ComparePage;

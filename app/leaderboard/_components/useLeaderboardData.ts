import React from "react";
import { College, RankedCollege } from "./types";

// Fallback data for different years
const FALLBACK_DATA: Record<string, any[]> = {
  "2023": [
    {
      collegeId: 2,
      collegeName: "MSIT",
      metrics: {
        academics: 66.20610687022901,
        infrastructure: 34.360273578113755,
        placements: 26.250025963205964,
        roi: 94.63238993710692,
      },
      rank: 1,
      score: 46.69713615568453,
      yearLabel: "2023",
    },
    {
      collegeId: 1,
      collegeName: "BPIT",
      metrics: {
        academics: 65.5,
        infrastructure: 29.28238805970149,
        placements: 21.58370499564342,
        roi: 95.15219665271967,
      },
      rank: 2,
      score: 43.655179275469635,
      yearLabel: "2023",
    },
    {
      collegeId: 3,
      collegeName: "MAIT",
      metrics: {
        academics: 52.08986784140969,
        infrastructure: 40.70323167956304,
        placements: 24.479533722329816,
        roi: 92.26023047977424,
      },
      rank: 3,
      score: 42.78544322524486,
      yearLabel: "2023",
    },
  ],
  "2024": [
    {
      collegeId: 2,
      collegeName: "MSIT",
      metrics: {
        academics: 68.8162962962963,
        infrastructure: 35.24293370944993,
        placements: 22.18571224883452,
        roi: 94.59754672897196,
      },
      rank: 1,
      score: 46.02751520320988,
      yearLabel: "2024",
    },
    {
      collegeId: 3,
      collegeName: "MAIT",
      metrics: {
        academics: 54.34495798319328,
        infrastructure: 42.66839378238342,
        placements: 21.568535199208775,
        roi: 87.12927350427351,
      },
      rank: 2,
      score: 42.17750758154553,
      yearLabel: "2024",
    },
    {
      collegeId: 1,
      collegeName: "BPIT",
      metrics: {
        academics: 68.64528301886793,
        infrastructure: 28.11914597815293,
        placements: 19.24490014344036,
        roi: 79.63690476190476,
      },
      rank: 3,
      score: 41.879064634857585,
      yearLabel: "2024",
    },
  ],
  "2025": [
    {
      collegeId: 2,
      collegeName: "MSIT",
      metrics: {
        academics: 69.94,
        infrastructure: 37.7348397323001,
        placements: 19.813137528773453,
        roi: 81.62990762124711,
      },
      rank: 1,
      score: 44.617213720094114,
      yearLabel: "2025",
    },
    {
      collegeId: 3,
      collegeName: "MAIT",
      metrics: {
        academics: 56.86995708154507,
        infrastructure: 43.71685111714345,
        placements: 24.634433860406144,
        roi: 87.13529191616767,
      },
      rank: 2,
      score: 44.37166008367143,
      yearLabel: "2025",
    },
    {
      collegeId: 1,
      collegeName: "BPIT",
      metrics: {
        academics: 63.90350877192982,
        infrastructure: 31.203607893607895,
        placements: 22.356326720809474,
        roi: 99.77155172413792,
      },
      rank: 3,
      score: 44.331460071038116,
      yearLabel: "2025",
    },
  ],
};

export const useLeaderboardData = (year: string = "2023") => {
  const [colleges, setColleges] = React.useState<RankedCollege[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Create a timeout promise that rejects after 5 seconds
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), 5000)
        );

        // Create the fetch promise
        const fetchPromise = fetch(
          `https://myipurank.onrender.com/api/analytics/colleges/${year}`
        ).then((response) => response.json());

        // Race between fetch and timeout
        let data = await Promise.race([fetchPromise, timeoutPromise]);

        // Add rank to API data
        const rankedColleges: RankedCollege[] = data.map(
          (college: any, index: number) => ({
            ...college,
            rank: index + 1,
          })
        );

        setColleges(rankedColleges);
        setError(null);
      } catch (err) {
        console.error("Error fetching leaderboard data:", err);

        // Use fallback data if API fails or times out
        const fallbackData = FALLBACK_DATA[year] || FALLBACK_DATA["2023"];
        const rankedColleges: RankedCollege[] = fallbackData.map(
          (college: any, index: number) => ({
            ...college,
            rank: index + 1,
          })
        );

        setColleges(rankedColleges);
        setError(null); // Don't show error since we have fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year]);

  return {
    colleges,
    topThree: colleges.slice(0, 3),
    remaining: colleges.slice(3),
    isLoading: loading,
    error,
  };
};

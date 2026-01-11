import React from "react";
import { College, RankedCollege } from "./types";

export const useLeaderboardData = (year: string = "2023") => {
  const [colleges, setColleges] = React.useState<RankedCollege[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://myipurank.onrender.com/api/analytics/colleges/${year}`
        );
        const data = await response.json();

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
        setError("Failed to load leaderboard");
        setColleges([]);
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

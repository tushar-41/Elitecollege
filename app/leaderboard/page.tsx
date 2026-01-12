"use client";
import React from "react";
import {
  useLeaderboardData,
  RankingCard,
  LeaderboardHeader,
  RankingMethodology,
  SkeletonLoader,
  ErrorState,
} from "./_components";

// Main Leaderboard Page
const LeaderboardPage = () => {
  const [selectedYear, setSelectedYear] = React.useState("2023");
  const { colleges, topThree, remaining, isLoading, error } =
    useLeaderboardData(selectedYear);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <LeaderboardHeader
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        colleges={colleges}
        topThree={topThree}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Top 3 Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-2">
              Top Performers
            </h2>
            <p className="text-gray-600">
              Leading colleges excelling across all metrics
            </p>
          </div>

          <div className="space-y-4">
            {topThree.map((college) => (
              <RankingCard key={college.collegeId} college={college} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500 font-medium">
              All Other Rankings
            </span>
          </div>
        </div>

        {/* All Rankings Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-2">
              Complete Rankings
            </h2>
            <p className="text-gray-600">
              Full leaderboard of all IPU affiliated colleges
            </p>
          </div>

          <div className="space-y-4">
            {remaining.map((college) => (
              <RankingCard key={college.collegeId} college={college} />
            ))}
          </div>
        </div>

        {/* Methodology Section */}
        <RankingMethodology />
      </main>
    </div>
  );
};

export default LeaderboardPage;

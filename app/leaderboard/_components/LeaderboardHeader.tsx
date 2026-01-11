"use client";
import React from "react";
import { Trophy, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatsCard } from "./StatsCard";
import { RankedCollege } from "./types";

interface LeaderboardHeaderProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
  colleges: RankedCollege[];
  topThree: RankedCollege[];
}

export const LeaderboardHeader = ({
  selectedYear,
  onYearChange,
  colleges,
  topThree,
}: LeaderboardHeaderProps) => {
  const avgScore =
    colleges.reduce((sum, c) => sum + c.score, 0) / colleges.length;

  return (
    <div className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-start justify-between gap-8 mb-8">
          <div className="flex-1">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight">
              LeaderBoard
            </h1>
          </div>
          <div className="flex-none hidden md:block text-6xl opacity-10">
            📊
          </div>
        </div>

        {/* Year Selector */}
        <div className="flex gap-3 mb-8">
          {["2023", "2024", "2025"].map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all",
                selectedYear === year
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard
            title="Total Colleges"
            value={colleges.length}
            icon={<Trophy className="w-5 h-5 text-amber-500" />}
            subtitle="Ranked & Analyzed"
          />
          <StatsCard
            title="Top Performer"
            value={topThree[0]?.collegeName.split(" ")[0] || "—"}
            icon={<Sparkles className="w-5 h-5 text-blue-500" />}
            subtitle={`Score: ${topThree[0]?.score.toFixed(2) || 0}`}
          />
          <StatsCard
            title="Average Score"
            value={avgScore.toFixed(2)}
            icon={<TrendingUp className="w-5 h-5 text-green-500" />}
            subtitle="Network Average"
          />
        </div>
      </div>
    </div>
  );
};

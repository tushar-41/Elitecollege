"use client";
import {
  Trophy,
  Award,
  Medal,
  TrendingUp,
  Users,
  Building2,
  BookOpen,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RankedCollege } from "./types";

interface RankingCardProps {
  college: RankedCollege;
}

export const RankingCard = ({ college }: RankingCardProps) => {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-amber-500" />;
    if (rank === 2) return <Award className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-700" />;
    return <span className="text-sm font-bold text-gray-400">{rank}</span>;
  };

  const getCardStyles = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-amber-50/30 to-white";
    if (rank === 2) return "bg-gradient-to-r from-slate-50/30 to-white";
    if (rank === 3) return "bg-gradient-to-r from-orange-50/30 to-white";
    return "bg-white";
  };

  return (
    <Link href={`/college/${college.collegeId}`}>
      <div
        className={cn(
          "group relative px-6 py-5 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer border border-gray-200 mb-2",
          getCardStyles(college.rank)
        )}
        style={{
          boxShadow:
            "0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.5)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 8px 16px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.5)";
        }}
      >
        <div className="flex items-center gap-4">
          {/* Rank Icon */}
          <div className="flex-none flex items-center justify-center w-5">
            {getRankIcon(college.rank)}
          </div>

          {/* College Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {college.collegeName}
              </h3>
              {college.rank <= 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 whitespace-nowrap">
                  Top {college.rank}
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>A: {college.metrics.academics.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>P: {college.metrics.placements.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                <span>I: {college.metrics.infrastructure.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>ROI: {college.metrics.roi.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Score Section */}
          <div className="flex-none text-right ml-4">
            <div className="text-2xl font-bold text-gray-900">
              {college.score.toFixed(2)}
            </div>
            <div className="text-xs text-gray-400 font-medium">Score</div>
            {college.rank <= 3 && (
              <div className="mt-2 inline-flex items-center gap-1 text-amber-600 text-xs font-semibold">
                <Sparkles className="w-3 h-3" />
                Elite
              </div>
            )}
          </div>

          {/* Arrow Icon */}
          <ArrowUpRight className="flex-none w-5 h-5 text-gray-300 group-hover:text-gray-400 transition-colors ml-2" />
        </div>
      </div>
    </Link>
  );
};

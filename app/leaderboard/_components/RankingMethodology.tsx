"use client";
import React from "react";
import { TrendingUp, Building2, BookOpen, Users } from "lucide-react";

export const RankingMethodology = () => {
  return (
    <div
      className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200"
      style={{
        boxShadow:
          "0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.5)",
      }}
    >
      <h3 className="font-serif text-3xl font-medium text-gray-900 mb-4">
        Ranking Methodology
      </h3>
      <p className="text-gray-600 mb-8">
        Our comprehensive ranking system evaluates colleges across four key
        parameters, each contributing equally to the final score:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex gap-4">
          <div>
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Academics (25%)
            </h4>
            <p className="text-gray-600 text-sm">
              Curriculum quality, research output, and academic excellence
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Placements (25%)
            </h4>
            <p className="text-gray-600 text-sm">
              Job placement rates, average packages, and recruiter reputation
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-100">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Infrastructure (25%)
            </h4>
            <p className="text-gray-600 text-sm">
              Campus facilities, labs, libraries, and technological resources
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-100">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">ROI (25%)</h4>
            <p className="text-gray-600 text-sm">
              Return on investment and career growth potential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

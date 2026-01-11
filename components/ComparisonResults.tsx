"use client";
import React from "react";
import { BookOpen, TrendingUp, Building2, Users } from "lucide-react";

interface Metrics {
  academics: number;
  placements: number;
  infrastructure: number;
  roi: number;
}

interface College {
  collegeId: number;
  collegeName: string;
  score: number;
  metrics: Metrics;
  rank: number;
  yearLabel?: string;
}

interface ComparisonResultsProps {
  college1: College;
  college2: College;
  differences: {
    scoresDiff: number;
    academicsDiff: number;
    placementsDiff: number;
    infrastructureDiff: number;
    roiDiff: number;
  } | null;
}

const MetricComparison = ({
  label,
  icon: Icon,
  value1,
  value2,
  diff,
}: {
  label: string;
  icon: React.ReactNode;
  value1: number;
  value2: number;
  diff: number;
}) => {
  const winner = value1 > value2 ? 1 : value2 > value1 ? 2 : 0;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        {Icon}
        <h4 className="font-semibold text-gray-900">{label}</h4>
      </div>

      <div className="space-y-3">
        {/* College 1 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">College 1</span>
          <span
            className={`font-bold ${
              winner === 1 ? "text-stone-900" : "text-gray-700"
            }`}
          >
            {value1}
          </span>
        </div>

        {/* College 2 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">College 2</span>
          <span
            className={`font-bold ${
              winner === 2 ? "text-stone-900" : "text-gray-700"
            }`}
          >
            {value2}
          </span>
        </div>

        {/* Difference */}
        {diff > 0 && (
          <div className="text-xs text-gray-500 text-center pt-2">
            Difference: {diff.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

const ComparisonResults = ({
  college1,
  college2,
  differences,
}: ComparisonResultsProps) => {
  return (
    <div>
      {/* Overall Score Comparison */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[college1, college2].map((college, idx) => (
          <div
            key={college?.collegeId}
            className="bg-white rounded-xl p-8 border border-gray-200"
          >
            <h3 className="font-semibold text-gray-600 mb-2">
              College {idx + 1}
            </h3>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {college.collegeName}
            </h2>
            <div>
              <p className="text-sm text-gray-500 mb-1">Overall Score</p>
              <p className="text-5xl font-bold text-gray-900">
                {college.score}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Metrics Comparison */}
      <div className="mb-8">
        <h3 className="font-serif text-2xl font-medium text-gray-900 mb-6">
          Detailed Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MetricComparison
            label="Academics"
            icon={<BookOpen className="w-5 h-5 text-blue-600" />}
            value1={college1.metrics.academics}
            value2={college2.metrics.academics}
            diff={differences?.academicsDiff || 0}
          />
          <MetricComparison
            label="Placements"
            icon={<TrendingUp className="w-5 h-5 text-green-600" />}
            value1={college1.metrics.placements}
            value2={college2.metrics.placements}
            diff={differences?.placementsDiff || 0}
          />
          <MetricComparison
            label="Infrastructure"
            icon={<Building2 className="w-5 h-5 text-purple-600" />}
            value1={college1.metrics.infrastructure}
            value2={college2.metrics.infrastructure}
            diff={differences?.infrastructureDiff || 0}
          />
          <MetricComparison
            label="ROI"
            icon={<Users className="w-5 h-5 text-orange-600" />}
            value1={college1.metrics.roi}
            value2={college2.metrics.roi}
            diff={differences?.roiDiff || 0}
          />
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-6">Comparison Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Metric
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  {college1.collegeName}
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  {college2.collegeName}
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Difference
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">
                  Overall Score
                </td>
                <td className="py-3 px-4 text-center text-gray-900 font-bold">
                  {college1.score}
                </td>
                <td className="py-3 px-4 text-center text-gray-900 font-bold">
                  {college2.score}
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  {differences?.scoresDiff.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">
                  Academics
                </td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college1.metrics.academics}
                </td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college2.metrics.academics}
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  {differences?.academicsDiff.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">
                  Placements
                </td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college1.metrics.placements}
                </td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college2.metrics.placements}
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  {differences?.placementsDiff.toFixed(1)}
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">
                  Infrastructure
                </td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college1.metrics.infrastructure}
                </td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college2.metrics.infrastructure}
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  {differences?.infrastructureDiff.toFixed(1)}
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">ROI</td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college1.metrics.roi.toFixed(2)}
                </td>
                <td className="py-3 px-4 text-center text-gray-900">
                  {college2.metrics.roi.toFixed(2)}
                </td>
                <td className="py-3 px-4 text-center text-gray-600">
                  {differences?.roiDiff.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonResults;

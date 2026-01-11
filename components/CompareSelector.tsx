"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

interface Metrics {
  academics: number;
  infrastructure: number;
  placements: number;
  roi: number;
}

interface College {
  collegeId: number;
  collegeName: string;
  score: number;
  metrics: Metrics;
  rank: number;
  yearLabel?: string;
  description?: string;
}

interface CompareSelectorProps {
  colleges: College[];
  selectedCollege: College | null;
  onSelect: (college: College) => void;
  label: string;
}

const CompareSelector = ({
  colleges,
  selectedCollege,
  onSelect,
  label,
}: CompareSelectorProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className="relative w-full px-4 py-3 border border-gray-200 rounded-xl bg-white cursor-pointer hover:border-gray-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 truncate">
              {selectedCollege?.collegeName || "Select a college"}
            </p>
            {selectedCollege && (
              <p className="text-xs text-gray-500 truncate">
                Score: {selectedCollege.score}
              </p>
            )}
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          <div className="max-h-60 overflow-y-auto">
            {colleges.map((college) => (
              <div
                key={college.collegeId}
                onClick={() => {
                  onSelect(college);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  selectedCollege?.collegeId === college.collegeId
                    ? "bg-stone-50 border-l-2 border-l-stone-900"
                    : "hover:bg-stone-50"
                }`}
              >
                <p className="font-semibold text-gray-900">
                  {college.collegeName}
                </p>
                <p className="text-xs text-gray-500">Score: {college.score}</p>
                {college.description && (
                  <p className="text-xs text-gray-600 mt-1">
                    {college.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareSelector;

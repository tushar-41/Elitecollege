"use client";
import React from "react";

interface ErrorStateProps {
  error: string;
}

export const ErrorState = ({ error }: ErrorStateProps) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-600 mb-2">Error loading leaderboard</p>
        <p className="text-gray-500 text-sm">{error}</p>
      </div>
    </div>
  );
};

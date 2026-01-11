"use client";
import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  subtitle?: string;
}

export const StatsCard = ({
  title,
  value,
  icon: Icon,
  subtitle,
}: StatsCardProps) => {
  return (
    <div
      className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
      style={{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-400 mt-2">{subtitle}</p>}
        </div>
        <div className="flex-none p-3 bg-gray-100 rounded-lg">{Icon}</div>
      </div>
    </div>
  );
};

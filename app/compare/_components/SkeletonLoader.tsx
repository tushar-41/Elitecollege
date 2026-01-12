import { ArrowRight } from "lucide-react";

const ComparePageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white animate-pulse w-full">
      {/* Header Section */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="mb-8">
            {/* Title skeleton */}
            <div className="h-16 md:h-20 lg:h-24 bg-gray-200 rounded-lg mb-4 max-w-2xl"></div>
            {/* Description skeleton */}
            <div className="h-6 bg-gray-200 rounded-lg max-w-xl"></div>
          </div>

          {/* Year Selector skeleton */}
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-20 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* College Selectors skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* College 1 Selector */}
          <div className="space-y-3">
            <div className="h-5 w-24 bg-gray-200 rounded"></div>
            <div className="h-14 bg-gray-200 rounded-xl"></div>
          </div>

          {/* Arrow Icon */}
          <div className="flex items-center justify-center md:col-span-1">
            <div className="bg-gray-100 rounded-full p-3">
              <ArrowRight className="w-6 h-6 text-gray-300" />
            </div>
          </div>

          {/* College 2 Selector */}
          <div className="space-y-3">
            <div className="h-5 w-24 bg-gray-200 rounded"></div>
            <div className="h-14 bg-gray-200 rounded-xl"></div>
          </div>
        </div>

        {/* Comparison Results skeleton */}
        <div className="space-y-8">
          {/* Overall Score Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200"
              >
                <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-16 w-24 bg-gray-200 rounded-lg mb-3"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          {/* Metrics Comparison */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
            {/* Header */}
            <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
              <div className="h-6 w-48 bg-gray-200 rounded"></div>
            </div>

            {/* Metrics rows */}
            <div className="divide-y divide-stone-200">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6">
                  <div className="grid grid-cols-3 gap-6 items-center">
                    {/* College 1 value */}
                    <div className="text-right">
                      <div className="h-8 w-16 bg-gray-200 rounded ml-auto"></div>
                    </div>

                    {/* Metric name and bar */}
                    <div className="space-y-3">
                      <div className="h-5 w-24 bg-gray-200 rounded mx-auto"></div>
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                    </div>

                    {/* College 2 value */}
                    <div className="text-left">
                      <div className="h-8 w-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Difference Summary */}
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <div className="h-6 w-40 bg-amber-200 rounded mb-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-20 bg-amber-200 rounded"></div>
                  <div className="h-6 w-16 bg-amber-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insight Button skeleton */}
        <div className="my-12 text-center">
          <div className="inline-block h-12 w-64 bg-gray-200 rounded-xl"></div>
        </div>
      </main>
    </div>
  );
};

export default ComparePageSkeleton;

"use client";

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Header Skeleton */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
            <div className="h-6 w-96 bg-gray-200 rounded-lg animate-pulse mb-8"></div>
            <div className="h-5 w-48 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          {/* Top 3 Cards Skeleton */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-5 w-40 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="h-8 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Divider with loading text */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500 font-medium">
              Loading Rankings...
            </span>
          </div>
        </div>

        {/* Complete Rankings Section Skeleton */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="h-9 w-72 bg-gray-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-5 w-96 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          {/* Ranking Cards Skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-5 w-48 bg-gray-200 rounded mb-3"></div>
                      <div className="flex gap-8">
                        {[1, 2, 3, 4].map((j) => (
                          <div key={j}>
                            <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                            <div className="h-4 w-16 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Section Skeleton */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="h-8 w-64 bg-gray-200 rounded-lg animate-pulse mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-5 w-48 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-1 animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkeletonLoader;

const CollegePageSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-white from-blue-50 to-white mt-20">
      {/* Header Section */}
      <div className="relative overflow-hidde bg-blue-500 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-20 w-60 h-60 bg-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 animate-pulse">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="flex-1">
              {/* College Profile label */}
              <div className="h-4 w-32 bg-blue-300 bg-opacity-50 rounded mb-2"></div>
              {/* College name */}
              <div className="h-14 md:h-16 lg:h-20 bg-blue-300 bg-opacity-50 rounded-lg mb-4 max-w-2xl"></div>
              {/* Description */}
              <div className="h-5 bg-blue-300 bg-opacity-50 rounded max-w-md"></div>
            </div>

            {/* Overall Score Card */}
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="h-4 w-28 bg-blue-200 bg-opacity-50 rounded mb-2"></div>
              <div className="h-14 w-32 bg-blue-200 bg-opacity-50 rounded mb-4"></div>
              <div className="h-1 w-full bg-white bg-opacity-30 rounded-full">
                <div className="h-1 w-2/3 bg-white bg-opacity-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 animate-pulse duration-300">
        {/* Metrics Grid Section */}
        <div className="mb-16">
          <div className="mb-8">
            {/* Section title */}
            <div className="h-8 w-64 bg-gray-200 rounded-lg mb-2"></div>
            {/* Section description */}
            <div className="h-5 w-96 bg-gray-200 rounded"></div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    {/* Label */}
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    {/* Value */}
                    <div className="h-8 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="mb-8">
            {/* Section title */}
            <div className="h-8 w-72 bg-gray-200 rounded-lg mb-2"></div>
            {/* Section description */}
            <div className="h-5 w-full max-w-xl bg-gray-200 rounded"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Pie Chart placeholder */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gray-200"></div>
            </div>

            {/* Legend Details */}
            <div className="w-full lg:w-1/2 space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    {/* Metric name */}
                    <div className="h-5 w-24 bg-gray-200 rounded"></div>
                    {/* Metric value */}
                    <div className="h-7 w-16 bg-gray-200 rounded"></div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-gray-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-blue-100 rounded-2xl p-8 border border-gray-200">
          {/* Section title */}
          <div className="h-7 w-48 bg-gray-200 rounded-lg mb-4"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                {/* Label */}
                <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                {/* Value */}
                <div className="h-6 w-24 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegePageSkeleton;

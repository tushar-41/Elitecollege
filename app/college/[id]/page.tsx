"use client";
import React, { use } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowLeft, Award, BookOpen, Building2, Users } from "lucide-react";
import Link from "next/link";
import CollegePageSkeleton from "../_components/SkeletonLoader";

// Fallback data for different years
const FALLBACK_DATA: Record<string, any[]> = {
  "2023": [
    {
      collegeId: 2,
      collegeName: "MSIT",
      metrics: {
        academics: 66.20610687022901,
        infrastructure: 34.360273578113755,
        placements: 26.250025963205964,
        roi: 94.63238993710692,
      },
      rank: 1,
      score: 46.69713615568453,
      yearLabel: "2023",
    },
    {
      collegeId: 1,
      collegeName: "BPIT",
      metrics: {
        academics: 65.5,
        infrastructure: 29.28238805970149,
        placements: 21.58370499564342,
        roi: 95.15219665271967,
      },
      rank: 2,
      score: 43.655179275469635,
      yearLabel: "2023",
    },
    {
      collegeId: 3,
      collegeName: "MAIT",
      metrics: {
        academics: 52.08986784140969,
        infrastructure: 40.70323167956304,
        placements: 24.479533722329816,
        roi: 92.26023047977424,
      },
      rank: 3,
      score: 42.78544322524486,
      yearLabel: "2023",
    },
  ],
  "2024": [
    {
      collegeId: 2,
      collegeName: "MSIT",
      metrics: {
        academics: 68.8162962962963,
        infrastructure: 35.24293370944993,
        placements: 22.18571224883452,
        roi: 94.59754672897196,
      },
      rank: 1,
      score: 46.02751520320988,
      yearLabel: "2024",
    },
    {
      collegeId: 3,
      collegeName: "MAIT",
      metrics: {
        academics: 54.34495798319328,
        infrastructure: 42.66839378238342,
        placements: 21.568535199208775,
        roi: 87.12927350427351,
      },
      rank: 2,
      score: 42.17750758154553,
      yearLabel: "2024",
    },
    {
      collegeId: 1,
      collegeName: "BPIT",
      metrics: {
        academics: 68.64528301886793,
        infrastructure: 28.11914597815293,
        placements: 19.24490014344036,
        roi: 79.63690476190476,
      },
      rank: 3,
      score: 41.879064634857585,
      yearLabel: "2024",
    },
  ],
  "2025": [
    {
      collegeId: 2,
      collegeName: "MSIT",
      metrics: {
        academics: 69.94,
        infrastructure: 37.7348397323001,
        placements: 19.813137528773453,
        roi: 81.62990762124711,
      },
      rank: 1,
      score: 44.617213720094114,
      yearLabel: "2025",
    },
    {
      collegeId: 3,
      collegeName: "MAIT",
      metrics: {
        academics: 56.86995708154507,
        infrastructure: 43.71685111714345,
        placements: 24.634433860406144,
        roi: 87.13529191616767,
      },
      rank: 2,
      score: 44.37166008367143,
      yearLabel: "2025",
    },
    {
      collegeId: 1,
      collegeName: "BPIT",
      metrics: {
        academics: 63.90350877192982,
        infrastructure: 31.203607893607895,
        placements: 22.356326720809474,
        roi: 99.77155172413792,
      },
      rank: 3,
      score: 44.331460071038116,
      yearLabel: "2025",
    },
  ],
};

// Fetch college data from API with timeout and fallback
const fetchCollegeById = async (id: string, year: string = "2023") => {
  try {
    // Create a timeout promise that rejects after 5 seconds
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), 5000)
    );

    // Create the fetch promise
    const fetchPromise = fetch(
      `https://myipurank.onrender.com/api/analytics/colleges/${year}`
    ).then((response) => response.json());

    // Race between fetch and timeout
    const colleges = await Promise.race([fetchPromise, timeoutPromise]);
    return colleges.find((college: any) => college.collegeId === parseInt(id));
  } catch (error) {
    console.error("Error fetching college, using fallback data:", error);

    // Use fallback data if API fails or times out
    const fallbackData = FALLBACK_DATA[year] || FALLBACK_DATA["2023"];
    return fallbackData.find(
      (college: any) => college.collegeId === parseInt(id)
    );
  }
};

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}

const MetricCard = ({ icon, label, value, color }: MetricCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 border-2 ${color} shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-full ${color} bg-opacity-20 flex items-center justify-center`}
        >
          {icon}
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-900">
            {typeof value === "number" ? value.toFixed(2) : value}
          </p>
        </div>
      </div>
    </div>
  );
};

const CollegePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [college, setCollege] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadCollege = async () => {
      const data = await fetchCollegeById(id);
      setCollege(data);
      setLoading(false);
    };
    loadCollege();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center">
        <CollegePageSkeleton />
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4 text-lg font-semibold">
            College not found
          </p>
          <Link
            href="/leaderboard"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mt-16" />
            Back to Leaderboard
          </Link>
        </div>
      </div>
    );
  }

  const metricsData = [
    {
      name: "Academics",
      value: parseFloat(college.metrics.academics.toFixed(2)),
    },
    {
      name: "Placements",
      value: parseFloat(college.metrics.placements.toFixed(2)),
    },
    {
      name: "Infra",
      value: parseFloat(college.metrics.infrastructure.toFixed(2)),
    },
    { name: "ROI", value: parseFloat(college.metrics.roi.toFixed(2)) },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#a855f7", "#f97316"];

  const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{props.payload[0].name}</p>
          <p
            className="text-lg font-bold"
            style={{ color: props.payload[0].fill }}
          >
            {typeof props.payload[0].value === "number"
              ? props.payload[0].value.toFixed(2)
              : props.payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-20">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-20 w-60 h-60 bg-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p className="text-blue-100 text-sm font-semibold mb-2 uppercase tracking-wider">
                College Profile
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {college.collegeName}
              </h1>
              <p className="text-blue-100 text-lg">
                Comprehensive college performance analysis
              </p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <p className="text-blue-400 text-sm mb-2">Overall Score</p>
              <p className="text-5xl font-bold text-black">
                {college.score.toFixed(2)}
              </p>
              <div className="mt-4 h-1 bg-white bg-opacity-30 rounded-full">
                <div
                  className="h-1 bg-white rounded-full"
                  style={{ width: `${(college.score / 100) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Metrics Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Performance Metrics
            </h2>
            <p className="text-gray-600">
              Breakdown of the four key factors that determine the college's
              overall score
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              icon={<BookOpen className="w-6 h-6 text-blue-600" />}
              label="Academics"
              value={college.metrics.academics}
              color="border-blue-200"
            />
            <MetricCard
              icon={<Award className="w-6 h-6 text-green-600" />}
              label="Placements"
              value={college.metrics.placements}
              color="border-green-200"
            />
            <MetricCard
              icon={<Building2 className="w-6 h-6 text-purple-600" />}
              label="Infrastructure"
              value={college.metrics.infrastructure}
              color="border-purple-200"
            />
            <MetricCard
              icon={<Users className="w-6 h-6 text-orange-600" />}
              label="ROI"
              value={college.metrics.roi}
              color="border-orange-200"
            />
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Metrics Distribution
            </h2>
            <p className="text-gray-600">
              Visual representation of how each metric contributes to the
              overall score
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Pie Chart */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={metricsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {metricsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend Details */}
            <div className="w-full lg:w-1/2 space-y-4">
              {metricsData.map((metric, index) => (
                <div
                  key={metric.name}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900">
                        {metric.name}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      {typeof metric.value === "number"
                        ? metric.value.toFixed(2)
                        : metric.value}
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(metric.value / 100) * 100}%`,
                        backgroundColor: COLORS[index],
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            College Summary
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-600 text-sm mb-2">Strongest Area</p>
              <p className="text-lg font-bold text-gray-900">
                {
                  metricsData.reduce((prev, current) =>
                    prev.value > current.value ? prev : current
                  ).name
                }
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2">Average Metric Score</p>
              <p className="text-lg font-bold text-gray-900">
                {(
                  metricsData.reduce((sum, m) => sum + m.value, 0) /
                  metricsData.length
                ).toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2">Overall Performance</p>
              <p className="text-lg font-bold text-blue-600">
                {college.score.toFixed(2)}/100
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegePage;

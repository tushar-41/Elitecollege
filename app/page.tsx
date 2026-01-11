"use client";
import React, { useState } from "react";
import {
  ArrowDown,
  Plus,
  Minus,
  BarChart3,
  Scale,
  DollarSign,
  Grid3x3,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { manropeFont, manropeFontWeight } from "@/lib/fonts";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How are colleges ranked?",
    answer:
      "Our rankings are based on four key metrics: academics (curriculum quality and research), placements (average packages and recruiter reputation), infrastructure (facilities and technology), and ROI (return on investment). Each metric contributes equally to the final score.",
  },
  {
    question: "Which colleges are included?",
    answer:
      "We currently rank 50+ IPU-affiliated colleges across Delhi-NCR. Our database includes engineering, management, and specialized institutions recognized by IP University.",
  },
  {
    question: "How often are rankings updated?",
    answer:
      "Rankings are updated annually with the latest placement data, fee structures, and infrastructure improvements. We also monitor real-time developments and update accordingly.",
  },
  {
    question: "Can I compare two colleges?",
    answer:
      "Yes! Use our Compare Colleges feature to get a detailed side-by-side comparison with AI-powered insights. You can analyze metrics, placements, ROI, and get personalized recommendations.",
  },
  {
    question: "How accurate is the placement data?",
    answer:
      "Our data is sourced from official college statistics, placement committees, and verified alumni feedback. However, placement outcomes can vary by branch and year.",
  },
  {
    question: "Is there a filter by branch or specialization?",
    answer:
      "Currently, our rankings are college-wide aggregates. Branch-specific rankings are coming soon as we expand our database.",
  },
];

const App: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-black/10">
            IPU College Rankings
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
            EliteCollege
            <br />
            <span
              className={`${manropeFontWeight(
                "normal",
                "text-3xl md:text-5xl block mt-4"
              )} text-stone-600 italic`}
            >
              Your Guide to IPU Colleges
            </span>
          </h1>
          <p
            className={`${manropeFont(
              "max-w-2xl mx-auto text-lg md:text-xl text-stone-700 leading-relaxed mb-12"
            )}`}
          >
            Comprehensive rankings based on placement records, return on
            investment, academics, and infrastructure quality.
          </p>

          <div className="flex justify-center">
            <a
              href="#features"
              onClick={scrollToSection("features")}
              className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <span className="p-2 border border-stone-800 rounded-full text-black/80 transition-colors bg-white/50 group-hover:bg-black/20 animate-bounce duration-300">
                <ArrowDown size={16} />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-nobel-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full">
                Features
              </div>
              <h2
                className={`${manropeFontWeight(
                  "semibold",
                  "text-4xl md:text-5xl text-stone-900 mb-6"
                )}`}
              >
                Why Choose EliteCollege
              </h2>
              <div className="w-16 h-0.5 bg-nobel-gold mx-auto opacity-60"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <BarChart3 className="w-10 h-10 text-nobel-gold mb-6" />
                <h3
                  className={`${manropeFontWeight(
                    "semibold",
                    "text-xl text-stone-900 mb-3"
                  )}`}
                >
                  Data-Driven Rankings
                </h3>
                <p
                  className={`${manropeFont(
                    "text-sm text-stone-600 leading-relaxed"
                  )}`}
                >
                  Real placement data, verified alumni reviews, and official
                  statistics ensure accurate, transparent rankings you can
                  trust.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <Scale className="w-10 h-10 text-nobel-gold mb-6" />
                <h3
                  className={`${manropeFontWeight(
                    "semibold",
                    "text-xl text-stone-900 mb-3"
                  )}`}
                >
                  Smart Comparisons
                </h3>
                <p
                  className={`${manropeFont(
                    "text-sm text-stone-600 leading-relaxed"
                  )}`}
                >
                  Compare any two colleges side-by-side with AI-powered insights
                  to make the best decision for your future.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <DollarSign className="w-10 h-10 text-nobel-gold mb-6" />
                <h3
                  className={`${manropeFontWeight(
                    "semibold",
                    "text-xl text-stone-900 mb-3"
                  )}`}
                >
                  ROI Focus
                </h3>
                <p
                  className={`${manropeFont(
                    "text-sm text-stone-600 leading-relaxed"
                  )}`}
                >
                  Understand the value proposition of each college by analyzing
                  fees against placement outcomes and career growth.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <Grid3x3 className="w-10 h-10 text-nobel-gold mb-6" />
                <h3
                  className={`${manropeFontWeight(
                    "semibold",
                    "text-xl text-stone-900 mb-3"
                  )}`}
                >
                  Multi-Metric Analysis
                </h3>
                <p
                  className={`${manropeFont(
                    "text-sm text-stone-600 leading-relaxed"
                  )}`}
                >
                  Evaluate colleges across academics, placements,
                  infrastructure, and ROI to find your perfect match.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-8 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <RefreshCw className="w-10 h-10 text-nobel-gold mb-6" />
                <h3
                  className={`${manropeFontWeight(
                    "semibold",
                    "text-xl text-stone-900 mb-3"
                  )}`}
                >
                  Regular Updates
                </h3>
                <p
                  className={`${manropeFont(
                    "text-sm text-stone-600 leading-relaxed"
                  )}`}
                >
                  Rankings are updated annually with fresh placement data and
                  infrastructure improvements.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-8 bg-white rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <TrendingUp className="w-10 h-10 text-nobel-gold mb-6" />
                <h3
                  className={`${manropeFontWeight(
                    "semibold",
                    "text-xl text-stone-900 mb-3"
                  )}`}
                >
                  Year-wise Trends
                </h3>
                <p
                  className={`${manropeFont(
                    "text-sm text-stone-600 leading-relaxed"
                  )}`}
                >
                  Track college performance across multiple years to identify
                  growth patterns and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 md:py-32 bg-stone-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full">
                FAQ
              </div>
              <h2
                className={`${manropeFontWeight(
                  "semibold",
                  "text-4xl md:text-5xl text-stone-900 mb-6"
                )}`}
              >
                Frequently Asked Questions
              </h2>
              <p
                className={`${manropeFont(
                  "text-lg text-stone-600 max-w-2xl mx-auto"
                )}`}
              >
                Find answers to common questions about EliteCollege rankings and
                features.
              </p>
              <div className="w-16 h-0.5 bg-nobel-gold mx-auto opacity-60 mt-6"></div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50/50 transition-colors duration-200"
                  >
                    <h3
                      className={`${manropeFontWeight(
                        "semibold",
                        "text-lg text-stone-900 pr-4"
                      )}`}
                    >
                      {item.question}
                    </h3>
                    <div className="flex-shrink-000 text-nobel-gold">
                      {expandedFAQ === index ? (
                        <Minus size={24} />
                      ) : (
                        <Plus size={24} />
                      )}
                    </div>
                  </button>

                  {expandedFAQ === index && (
                    <div className="border-t border-stone-200 bg-stone-50/30 p-6">
                      <p
                        className={`${manropeFont(
                          "text-base text-stone-700 leading-relaxed"
                        )}`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`${manropeFontWeight(
                "semibold",
                "text-3xl md:text-4xl text-stone-900 mb-6"
              )}`}
            >
              Ready to Find Your Perfect College?
            </h2>
            <p
              className={`${manropeFont(
                "text-lg text-stone-600 mb-10 leading-relaxed"
              )}`}
            >
              Explore detailed rankings, compare colleges side-by-side, and make
              an informed decision backed by data and AI insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/leaderboard"
                className={`${manropeFontWeight(
                  "semibold",
                  "px-8 py-3 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors duration-300 inline-block"
                )}`}
              >
                View Leaderboard
              </a>
              <a
                href="/compare"
                className={`${manropeFontWeight(
                  "semibold",
                  "px-8 py-3 border border-stone-900 text-stone-900 rounded-xl hover:bg-stone-50 transition-colors duration-300 inline-block"
                )}`}
              >
                Compare Colleges
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

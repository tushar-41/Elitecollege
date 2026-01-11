"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-gray-600 font-serif font-bold text-xl shadow-sm pb-1">
              α
            </div>

            <Link
              href="/"
              className={`font-serif font-bold text-lg tracking-wide transition-opacity ${
                scrolled ? "opacity-100" : "opacity-0 md:opacity-100"
              }`}
            >
              {"EliteCollege".toUpperCase()}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <Link
              href="#features"
              className="nav-link hover:text-stone-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/compare"
              className="nav-link hover:text-stone-900 transition-colors"
            >
              Compare Colleges
            </Link>
            <Link
              href="/leaderboard"
              className="nav-link hover:text-stone-900 transition-colors"
            >
              <button className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm hover:cursor-pointer">
                LeaderBoard
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-stone-900 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-6 text-lg font-serif animate-fade-in pt-20">
          <Link
            href="/leaderboard"
            onClick={() => setMenuOpen(false)}
            className="nav-link hover:text-stone-900 transition-colors"
          >
            Leaderboard
          </Link>
          <Link
            href="/compare"
            onClick={() => setMenuOpen(false)}
            className="nav-link hover:text-stone-900 transition-colors"
          >
            Compare Colleges
          </Link>
          <a
            href="/leaderboard"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg hover:bg-stone-800 transition-colors mt-4"
          >
            LeaderBoard
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;

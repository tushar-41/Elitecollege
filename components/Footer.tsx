"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex justify-evenly md:justify-between gap-8 flex-wrap mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2">
              EliteCollege
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Comprehensive college rankings for informed decisions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Github"
              >
                <Github className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="mailto:contact@techsprint.com"
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mr-14">
            <h4 className="font-serif text-2xl font-medium text-gray-900 mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/leaderboard"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Compare Colleges
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Rankings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} EliteCollege. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Made with <span className="text-red-500">❤️</span> for college
              aspirants
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

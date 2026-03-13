"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Heart,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";

const DEFAULT_SELECTED_FILTERS = new Set([
  "Full-time",
  "Senior Level",
  "Remote",
  "$100K - $150K",
  "H1B Sponsor",
]);

import { COMPANY_LOGOS, JOBS } from "./jobs-data";

const FILTER_OPTIONS = {
  "Job Type": ["Full-time", "Part-time", "Contract", "Internship", "Freelance"],
  "Experience": ["Entry Level", "Mid Level", "Senior Level", "Lead", "Director"],
  "Salary Range": ["$0 - $50K", "$50K - $100K", "$100K - $150K", "$150K - $200K", "$200K+"],
  "Work Mode": ["Remote", "Hybrid", "On-site"],
  "Date Posted": ["Past 24 hours", "Past week", "Past month", "Any time"],
  "Visa Sponsor": ["H1B Sponsor", "Green Card Sponsor", "No Sponsorship"],
};

export default function JobsPage() {
  const [likedCount] = useState(0);
  const [appliedCount] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    () => new Set(DEFAULT_SELECTED_FILTERS)
  );

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        next.add(filter);
      }
      return next;
    });
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev);
      next.delete(filter);
      return next;
    });
  };

  const selectedArray = Array.from(selectedFilters);

  // Suppress unused variable warnings
  void likedCount;
  void appliedCount;

  return (
    <div
      className="flex-1 min-h-0 bg-[#fdf8e8] overflow-y-auto scrollbar-hide p-4 sm:p-6 md:p-8 lg:p-[52px]"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="bg-white rounded-2xl mx-auto w-full px-8 md:px-14 py-10">
        {/* Title */}
        <h1 className="font-black text-[#333] text-[40px] tracking-[3px] mb-1">
          JOBS
        </h1>
        <p className="text-base font-semibold text-[#999] mb-6">
          Discover jobs that match your skills and career goals
        </p>

        {/* Search bar */}
        <div className="mb-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex items-center flex-1 border border-gray-200 rounded-xl px-5 py-3.5">
            <Search className="w-5 h-5 text-[#999] mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Job title, company, or keyword..."
              className="flex-1 text-sm text-[#555] placeholder:text-[#bbb] outline-none bg-transparent"
            />
            <div className="w-px h-5 bg-gray-200 mx-4 shrink-0 hidden sm:block" />
            <MapPin className="w-5 h-5 text-[#999] mr-3 shrink-0 hidden sm:block" />
            <input
              type="text"
              placeholder="City, state, or remote..."
              className="flex-1 text-sm text-[#555] placeholder:text-[#bbb] outline-none bg-transparent hidden sm:block"
            />
          </div>
          <button className="bg-[#e2752c] text-white font-bold text-sm w-full sm:w-[118px] py-3.5 rounded-xl hover:brightness-110 transition shrink-0 flex items-center justify-center gap-1.5">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>

        {/* Filter bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 flex-1 overflow-x-auto scrollbar-hide w-full sm:w-auto" style={{ scrollbarWidth: "none" }}>
              {selectedArray.map((tag) => (
                <button
                  key={tag}
                  onClick={() => removeFilter(tag)}
                  className="shrink-0 bg-[#fef3e2] text-[#333] text-sm font-medium pl-4 pr-2.5 py-2 rounded-lg hover:bg-[#fde8c8] transition cursor-pointer flex items-center gap-1.5"
                >
                  {tag}
                  <X className="w-3.5 h-3.5 text-[#999]" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className={`flex items-center gap-1.5 shrink-0 border rounded-lg px-4 py-2.5 text-sm font-medium transition cursor-pointer ${
                showFilters
                  ? "border-[#e2752c] text-[#e2752c] bg-[#fef3e2]"
                  : "border-gray-200 text-[#555] hover:border-[#e2752c] hover:text-[#e2752c]"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {/* Filter dropdown panel */}
        {showFilters && (
          <div className="mb-8 border border-gray-200 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(FILTER_OPTIONS).map(([category, options]) => (
              <div key={category}>
                <p className="text-sm font-bold text-[#333] mb-3">{category}</p>
                <div className="space-y-2">
                  {options.map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.has(option)}
                        onChange={() => toggleFilter(option)}
                        className="w-4 h-4 rounded border-gray-300 text-[#e2752c] accent-[#e2752c]"
                      />
                      <span className="text-sm text-[#555]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Job Cards */}
        <div className="space-y-4">
          {JOBS.map((job, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl px-4 sm:px-6 py-5 flex flex-col md:flex-row gap-5"
            >
            {/* Left: Logo – flat geometric */}
            {(() => {
              const logo = COMPANY_LOGOS[job.company] || { letter: job.company[0], bg: "#f3f4f6", accent: "#666", shape: "square" };
              const shapeClasses: Record<string, string> = {
                circle: "rounded-full",
                diamond: "rounded-xl rotate-45",
                hexagon: "rounded-2xl",
                triangle: "rounded-2xl",
                square: "rounded-xl",
              };
              return (
                <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center">
                  <div
                    className={`w-[52px] h-[52px] flex items-center justify-center ${shapeClasses[logo.shape] || "rounded-xl"}`}
                    style={{ backgroundColor: logo.bg }}
                  >
                    <span
                      className={`text-xl font-black ${logo.shape === "diamond" ? "-rotate-45" : ""}`}
                      style={{ color: logo.accent }}
                    >
                      {logo.letter}
                    </span>
                  </div>
                </div>
              );
            })()}

            {/* Middle: Job Info */}
            <div className="flex-1 min-w-0">
              <Link href={`/ai-explorations/jobhatch/jobs/${i}`} className="text-lg font-bold text-[#333] mb-0.5 hover:text-[#e2752c] transition block">
                {job.title}
              </Link>
              <p className="text-sm text-[#555] mb-3">
                <Link href={`/ai-explorations/jobhatch/jobs/${i}`} className="font-bold hover:text-[#e2752c] transition cursor-pointer">
                  {job.company}
                </Link>
                {"  "}
                {job.industry}
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-3">
                <div className="border-l-2 border-[#fcd038] pl-3 py-2">
                  <p className="text-sm text-[#333]">{job.location}</p>
                  <p className="text-sm text-[#333] mt-3">{job.workMode}</p>
                </div>
                <div className="border-l-2 border-[#fcd038] pl-3 py-2">
                  <p className="text-sm text-[#333]">{job.type}</p>
                  <p className="text-sm text-[#333] mt-3">{job.level}</p>
                </div>
                <div className="border-l-2 border-[#fcd038] pl-3 py-2">
                  <p className="text-sm text-[#333]">{job.salary}</p>
                  <p className="text-sm text-[#333] mt-3">{job.experience}</p>
                </div>
              </div>

              {/* Bottom row */}
              <p className="text-sm text-[#888]">{job.applicants}</p>
            </div>

            {/* Right: Buttons */}
            <div className="shrink-0 flex flex-row md:flex-col gap-2 self-center">
              <Link href={`/ai-explorations/jobhatch/jobs/${i}`} className="bg-[#e2752c] text-white font-bold text-sm px-6 py-2 rounded-full hover:brightness-110 transition cursor-pointer uppercase tracking-wide text-center">
                Apply Now
              </Link>
              <button className="flex items-center justify-center gap-2 border border-gray-300 text-[#333] font-medium text-sm px-6 py-2 rounded-full hover:bg-gray-50 transition cursor-pointer">
                <Heart className="w-4 h-4" />
                Like
              </button>
            </div>

            {/* Right: Match Score */}
            <div className="shrink-0 w-full md:w-[140px] bg-gradient-to-b from-[#fef3e2] to-[#fff9f0] border border-[#f5deb3] rounded-xl flex flex-col items-center justify-center p-3 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#e2752c]/20" />
              <div className="absolute top-2 right-5 w-1 h-1 rounded-full bg-[#2f327d]/15" />
              <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-[#e2752c]/15" />

              {/* Circular progress ring */}
              <div className="relative w-[70px] h-[70px] mb-1.5">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#f0e6d2" strokeWidth="6" />
                  <circle
                    cx="40" cy="40" r="34" fill="none"
                    stroke="url(#matchGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34 * job.matchScore / 100} ${2 * Math.PI * 34}`}
                  />
                  <defs>
                    <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e2752c" />
                      <stop offset="100%" stopColor="#f4a261" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-black text-[#333]">
                    {job.matchScore}
                    <span className="text-xs font-bold">%</span>
                  </span>
                </div>
              </div>

              <p className="text-[10px] font-bold text-[#e2752c] uppercase tracking-wider mb-1">Match Score</p>

              <img
                src="/images/jobhatch/tips-mascot.png"
                alt="Match mascot"
                className="w-[40px] h-auto"
              />
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

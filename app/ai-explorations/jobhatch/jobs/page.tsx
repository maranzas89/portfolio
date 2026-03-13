"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  FileText,
  Briefcase,
  CalendarDays,
  Users,
  Mail,
  Monitor,
  MessageCircle,
  Settings,
  Bell,
  ChevronDown,
  Search,
  Heart,
  SlidersHorizontal,
  X,
} from "lucide-react";

const DEFAULT_SELECTED_FILTERS = new Set([
  "Full-time",
  "Senior Level",
  "Remote",
  "$100K - $150K",
  "H1B Sponsor",
]);

const SIDEBAR_TOP = [
  { icon: Home, label: "Home", href: "/ai-explorations/jobhatch/dashboard" },
  { icon: User, label: "Profile", href: "/ai-explorations/jobhatch/profile" },
  { icon: FileText, label: "Resume", href: "/ai-explorations/jobhatch/resume" },
  { icon: Briefcase, label: "Jobs", active: true },
  { icon: CalendarDays, label: "Planner" },
  { icon: Users, label: "Buddies" },
];

const SIDEBAR_BOTTOM = [
  { icon: Mail, label: "Message" },
  { icon: Monitor, label: "Download APP" },
  { icon: MessageCircle, label: "Feedback" },
  { icon: Settings, label: "Setting" },
];

import { COMPANY_LOGOS, JOBS } from "./jobs-data";
import { useTokens } from "../use-tokens";

const FILTER_OPTIONS = {
  "Job Type": ["Full-time", "Part-time", "Contract", "Internship", "Freelance"],
  "Experience": ["Entry Level", "Mid Level", "Senior Level", "Lead", "Director"],
  "Salary Range": ["$0 - $50K", "$50K - $100K", "$100K - $150K", "$150K - $200K", "$200K+"],
  "Work Mode": ["Remote", "Hybrid", "On-site"],
  "Date Posted": ["Past 24 hours", "Past week", "Past month", "Any time"],
  "Visa Sponsor": ["H1B Sponsor", "Green Card Sponsor", "No Sponsorship"],
};

export default function JobsPage() {
  const [tokens] = useTokens();
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

  return (
    <div className="relative bg-white h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-[220px] h-full border-r border-gray-100 bg-white px-4 py-6 shrink-0 justify-between overflow-y-auto">
        <div>
          {SIDEBAR_TOP.map((item) => {
            const Icon = item.icon;
            return item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  item.active
                    ? "bg-[#fff3e0] text-[#e2752c]"
                    : "text-[#666] hover:text-[#e2752c] hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            ) : (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium cursor-default ${
                  item.active
                    ? "bg-[#fff3e0] text-[#e2752c]"
                    : "text-[#666] hover:text-[#e2752c]"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </div>
            );
          })}
        </div>

        <div>
          {/* Refer card */}
          <div className="bg-[#fef3e2] rounded-xl p-4 mb-3">
            <p className="font-bold text-[#333] text-sm underline">
              Refer and Earn
            </p>
            <p className="text-xs text-[#666] mt-1">
              Invite friends or share on LinkedIn to earn extra rewards!
            </p>
          </div>
          {/* AI card */}
          <div className="bg-[#2f327d] rounded-xl p-4 mb-4">
            <span className="text-xl">🌟</span>
            <p className="font-bold text-white text-sm mt-1">
              Get Hired Faster with AI Jobhacth!
            </p>
          </div>

          {SIDEBAR_BOTTOM.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#666] font-medium hover:text-[#e2752c] transition cursor-default"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 min-h-0 flex flex-col">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-100 bg-white shrink-0">
          <div className="flex items-center gap-4">
            <Link
              href="/ai-explorations/jobhatch"
              className="flex items-end gap-2"
            >
              <div className="bg-[#fcd038] border border-[#2f327d] rounded-lg shadow-[-3px_3px_0px_0px_#2f327d] w-10 h-10 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/jobhatch/logo-chick.png"
                  alt="JobHatch"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-black text-[#2f327d] text-lg tracking-[3px]">
                JOBHATCH
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-sm font-medium text-[#333]">
              <span>
                Liked{" "}
                <span className="bg-[#2f327d] text-white text-xs font-bold px-2 py-0.5 rounded">
                  {likedCount}
                </span>
              </span>
              <span>
                Applied{" "}
                <span className="bg-[#2f327d] text-white text-xs font-bold px-2 py-0.5 rounded">
                  {appliedCount}
                </span>
              </span>
            </div>
            <button className="relative text-[#999] hover:text-[#333] transition">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
              <Settings className="w-4 h-4 text-[#999]" />
              <span className="text-sm font-medium text-[#333]">
                Mia Yue ({tokens} tokens)
              </span>
              <ChevronDown className="w-3 h-3 text-[#999]" />
            </div>
          </div>
        </header>

        {/* Content area with cream bg */}
        <div
          className="flex-1 min-h-0 bg-[#fdf8e8] overflow-y-auto scrollbar-hide p-[52px]"
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
            <div className="mb-4">
              <div className="flex items-center border border-gray-200 rounded-xl px-5 py-3.5">
                <input
                  type="text"
                  placeholder="Search by job title, company, or keyword..."
                  className="flex-1 text-sm text-[#555] placeholder:text-[#bbb] outline-none bg-transparent"
                />
                <Search className="w-5 h-5 text-[#999]" />
              </div>
            </div>

            {/* Filter bar */}
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 flex-1 overflow-x-auto">
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
              <div className="mb-8 border border-gray-200 rounded-xl p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
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
                  className="border border-gray-200 rounded-xl px-6 py-5 flex gap-5"
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
                  <div className="grid grid-cols-3 gap-0 mb-3">
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
                <div className="shrink-0 flex flex-col gap-2 self-center">
                  <Link href={`/ai-explorations/jobhatch/jobs/${i}`} className="bg-[#e2752c] text-white font-bold text-sm px-6 py-2 rounded-full hover:brightness-110 transition cursor-pointer uppercase tracking-wide text-center">
                    Apply Now
                  </Link>
                  <button className="flex items-center justify-center gap-2 border border-gray-300 text-[#333] font-medium text-sm px-6 py-2 rounded-full hover:bg-gray-50 transition cursor-pointer">
                    <Heart className="w-4 h-4" />
                    Like
                  </button>
                </div>

                {/* Right: Match Score */}
                <div className="shrink-0 w-[140px] bg-gradient-to-b from-[#fef3e2] to-[#fff9f0] border border-[#f5deb3] rounded-xl flex flex-col items-center justify-center p-3 relative overflow-hidden">
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
      </div>
    </div>
  );
}

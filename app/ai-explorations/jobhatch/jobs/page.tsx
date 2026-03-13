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
} from "lucide-react";

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

const JOBS = [
  {
    logo: null,
    title: "Digital Product Designer Lead- Credit ...",
    company: "PNC",
    industry: "Banking - Finance - Public Company",
    location: "Madison Avenue NY (NY019)",
    workMode: "Hybrid",
    type: "Full-time",
    level: "Senior Level",
    salary: "$65K/yr - $164k/yr",
    experience: "5+ years exp",
    applicants: "Less than 25 applicants",
    matchScore: 89,
  },
  {
    logo: null,
    title: "Digital Product Designer Lead- Credit ...",
    company: "PNC",
    industry: "Banking - Finance - Public Company",
    location: "Madison Avenue NY (NY019)",
    workMode: "Hybrid",
    type: "Full-time",
    level: "Senior Level",
    salary: "$65K/yr - $164k/yr",
    experience: "5+ years exp",
    applicants: "Less than 25 applicants",
    matchScore: 89,
  },
  {
    logo: null,
    title: "Digital Product Designer Lead- Credit ...",
    company: "PNC",
    industry: "Banking - Finance - Public Company",
    location: "Madison Avenue NY (NY019)",
    workMode: "Hybrid",
    type: "Full-time",
    level: "Senior Level",
    salary: "$65K/yr - $164k/yr",
    experience: "5+ years exp",
    applicants: "Less than 25 applicants",
    matchScore: 89,
  },
];

export default function JobsPage() {
  const [tokens] = useState(10);
  const [likedCount] = useState(0);
  const [appliedCount] = useState(0);

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
            <span className="font-black text-[#333] text-[28px] tracking-[2px] ml-2">
              JOBS
            </span>
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
          {/* Search bar */}
          <div className="mb-6 max-w-[700px]">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-3">
              <input
                type="text"
                placeholder="Search jobs..."
                className="flex-1 text-sm text-[#555] placeholder:text-[#bbb] outline-none bg-transparent"
              />
              <Search className="w-5 h-5 text-[#999]" />
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {JOBS.map((job, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl px-8 py-8 flex gap-6"
              >
                {/* Left: Logo */}
                <div className="w-[80px] h-[80px] bg-gray-100 rounded-lg shrink-0" />

                {/* Middle: Job Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-[#333] mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-[#555] mb-4">
                    <span className="font-bold">{job.company}</span>
                    {"  "}
                    {job.industry}
                  </p>

                  {/* Info grid */}
                  <div className="grid grid-cols-3 gap-0 mb-4">
                    <div className="border-l-2 border-gray-200 pl-3 py-1">
                      <p className="text-sm text-[#333]">{job.location}</p>
                      <p className="text-sm text-[#333]">{job.workMode}</p>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-3 py-1">
                      <p className="text-sm text-[#333]">{job.type}</p>
                      <p className="text-sm text-[#333]">{job.level}</p>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-3 py-1">
                      <p className="text-sm text-[#333]">{job.salary}</p>
                      <p className="text-sm text-[#333]">{job.experience}</p>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#888]">{job.applicants}</p>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 border border-gray-300 text-[#333] font-medium text-sm px-6 py-2 rounded-full hover:bg-gray-50 transition cursor-pointer">
                        <Heart className="w-4 h-4" />
                        Like
                      </button>
                      <button className="bg-[#e2752c] text-white font-bold text-sm px-6 py-2 rounded-full hover:brightness-110 transition cursor-pointer uppercase tracking-wide">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Match Score */}
                <div className="shrink-0 w-[120px] border border-gray-200 rounded-xl flex flex-col items-center justify-center p-4">
                  <span className="text-3xl font-bold text-[#333]">
                    {job.matchScore}
                    <span className="text-lg">%</span>
                  </span>
                  <img
                    src="/images/jobhatch/tips-mascot.png"
                    alt="Match mascot"
                    className="w-[70px] h-auto mt-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

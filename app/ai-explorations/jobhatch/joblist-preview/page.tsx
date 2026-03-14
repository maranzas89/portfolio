"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, DollarSign } from "lucide-react";
import LoginModal from "@/components/jobhatch/LoginModal";
import SignupModal from "@/components/jobhatch/SignupModal";

const PREVIEW_JOBS = [
  {
    company: "Company Name",
    logo: { letter: "S", bg: "#fff4ec", accent: "#ea580c" },
    posted: "2 hours ago",
    tags: ["New Grad", "Entry Level"],
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    industry: "Architecture · E-Commerce · Late Stage",
    location: "Remote · US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
  },
  {
    company: "Company Name",
    logo: { letter: "S", bg: "#fff4ec", accent: "#ea580c" },
    posted: "2 hours ago",
    tags: ["New Grad", "Entry Level"],
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    industry: "Architecture · E-Commerce · Late Stage",
    location: "Remote · US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
  },
  {
    company: "Company Name",
    logo: { letter: "S", bg: "#fff4ec", accent: "#ea580c" },
    posted: "2 hours ago",
    tags: ["New Grad", "Entry Level"],
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    industry: "Architecture · E-Commerce · Late Stage",
    location: "Remote · US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
  },
  {
    company: "Company Name",
    logo: { letter: "S", bg: "#fff4ec", accent: "#ea580c" },
    posted: "2 hours ago",
    tags: ["New Grad", "Entry Level"],
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    industry: "Architecture · E-Commerce · Late Stage",
    location: "Remote · US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
  },
];

export default function JobListPreviewPage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignupModal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSwitchToLogin={() => { setSignupOpen(false); setLoginOpen(true); }}
      />

      {/* Top Nav */}
      <header className="relative px-6 md:px-20 py-5 md:py-6 flex items-center justify-between border-b border-gray-200">
        {/* Logo */}
        <Link href="/ai-explorations/jobhatch" className="flex items-end gap-3">
          <div className="bg-[#fcd038] border-2 border-[#2f327d] rounded-lg w-12 h-12 md:w-14 md:h-14 overflow-hidden flex items-center justify-center">
            <img
              src="/images/jobhatch/logo.png"
              alt="JobHatch"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <span className="hidden sm:inline font-black text-[#2f327d] text-2xl md:text-3xl tracking-[5px]">
            JOBHATCH
          </span>
        </Link>

        {/* Login / Sign Up */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLoginOpen(true)}
            className="px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold text-[#333] bg-white shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)] cursor-pointer hover:bg-[#e2752c] hover:text-white transition"
          >
            Login
          </button>
          <button
            onClick={() => setSignupOpen(true)}
            className="px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold text-white bg-[#e2752c] cursor-pointer hover:brightness-110 transition"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-16 pt-10 md:pt-14 pb-20">
        {/* Title row */}
        <div className="flex items-start justify-between mb-8 md:mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[#333] mb-2">
              Our Popular Jobs
            </h1>
            <p className="text-base text-[#999]">
              Be one of the first 10 to apply
            </p>
          </div>

          {/* Tips card */}
          <div className="hidden sm:flex items-start gap-3 border border-gray-200 rounded-xl px-5 py-4 shadow-sm max-w-[300px]">
            <img
              src="/images/jobhatch/tips-mascot.png"
              alt="Tips"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <p className="font-bold text-[#333] text-sm mb-0.5">Tips</p>
              <p className="text-xs text-[#888]">
                Register with US to unlock more features!
              </p>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="space-y-6">
          {PREVIEW_JOBS.map((job, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 md:p-6 flex gap-4 md:gap-6"
            >
              {/* Left: Logo + Job Info */}
              <div className="flex gap-4 flex-1 min-w-0">
                {/* Company logo */}
                <div className="shrink-0 flex flex-col items-center gap-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: job.logo.bg }}
                  >
                    <span
                      className="text-lg font-black"
                      style={{ color: job.logo.accent }}
                    >
                      {job.logo.letter}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#999] font-medium">
                    {job.company}
                  </span>
                </div>

                {/* Job details */}
                <div className="flex-1 min-w-0">
                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] text-[#999]">{job.posted}</span>
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#2f327d] bg-[#e8ecff] px-2 py-0.5 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-[#e2752c] mb-0.5 cursor-pointer hover:underline"
                    onClick={() => setLoginOpen(true)}
                  >
                    {job.title}
                  </h3>
                  <p className="text-sm text-[#999] mb-2">
                    {job.pitch} <span className="mx-1">/</span>{" "}
                    <span className="text-[#888]">{job.industry}</span>
                  </p>

                  {/* Location / Type / Salary — stacked on mobile, inline on sm+ */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-[#555] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#999]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#999]" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#999]" />
                      {job.salary}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#888] leading-relaxed">
                    {job.description}
                  </p>

                  {/* Apply Now button */}
                  <div className="mt-4">
                    <button
                      onClick={() => setLoginOpen(true)}
                      className="bg-[#e2752c] text-white font-bold text-xs px-6 py-2 rounded-full uppercase tracking-wider cursor-pointer hover:brightness-110 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Blurred match score + Blurred funder card */}
              <div className="hidden md:flex items-center gap-4 shrink-0">
                {/* Match score (blurred) */}
                <div className="w-[130px] flex flex-col items-center gap-2 blur-[5px] select-none pointer-events-none">
                  {/* Score circles */}
                  <div className="flex gap-1">
                    <div className="w-8 h-8 rounded-full bg-[#e2752c]/80" />
                    <div className="w-8 h-8 rounded-full bg-[#f4a261]/60" />
                  </div>
                  {/* Strong match label */}
                  <p className="text-xs font-black text-[#e2752c] uppercase tracking-wider">
                    Strong Match
                  </p>
                  <p className="text-[10px] text-[#999]">
                    ★★★★ H1B Sponsor Likely
                  </p>
                </div>

                {/* Funder card (blurred) */}
                <div className="w-[120px] flex flex-col items-center gap-2 blur-[5px] select-none pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-[#4a90d9]/70" />
                  <p className="text-xs font-bold text-[#333]">Funder Name</p>
                  <p className="text-[10px] text-[#999] text-center">
                    Description of Funder...
                  </p>
                  <span className="text-[10px] font-bold text-[#e2752c] border border-[#e2752c] rounded-full px-3 py-1 uppercase">
                    Let&apos;s Chat
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d4ecfb] pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="bg-[#fcd038] rounded-xl w-20 h-20 overflow-hidden flex items-center justify-center mb-4">
              <img
                src="/images/jobhatch/logo.png"
                alt="JobHatch"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="font-black text-[#2f327d] text-3xl tracking-[5px] mb-12">
              JOBHATCH
            </span>

            <div className="flex flex-col md:flex-row gap-20 md:gap-32 mb-16 text-left">
              <div>
                <h4 className="font-bold text-[#2f327d] text-2xl mb-4">
                  Quick Link
                </h4>
                <ul className="space-y-2 text-[#2f327d]">
                  {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map(
                    (link, i) => (
                      <li key={i}>{link}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#2f327d] text-2xl mb-4">
                  Resources
                </h4>
                <ul className="space-y-2 text-[#2f327d]">
                  <li>Privacy Policy</li>
                  <li>Tearms or Conditions of Use</li>
                  <li>Cookie Advertising Policy</li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#333] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">d</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#0077b5] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">in</span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">@</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[560px]">
              <h3 className="font-extrabold text-[#2f327d] text-2xl md:text-3xl mb-6">
                Learn More or Contribute?
              </h3>
              <div className="bg-white rounded-full flex items-center p-2 pl-6 shadow-sm">
                <span className="text-[#686868] text-base flex-1 text-left">
                  Enter your Email
                </span>
                <button className="bg-[#e2752c] text-white font-bold px-6 py-3 rounded-full hover:brightness-110 transition">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Decorative stars */}
            <div className="flex items-center gap-2 mt-8">
              <span className="text-[#2f327d] text-sm">✦</span>
              <span className="text-[#2f327d] text-xl">✦</span>
              <span className="text-[#2f327d] text-sm">✦</span>
            </div>

            <p className="mt-6 text-[#2f327d] text-sm tracking-wide">
              &copy; 2025 JobHatch
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

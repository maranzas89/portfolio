"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Clock, DollarSign } from "lucide-react";
import LoginModal from "@/components/jobhatch/LoginModal";

const JOBS = [
  {
    company: "Company Name",
    logo: "/images/jobhatch/company-logo.png",
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    tags: ["Architecture", "E-Commerce", "Late Stage"],
    postedAgo: "2 hours ago",
    level: "New Grad, Entry Level",
    location: "Remote - US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
    matchScore: 89,
    sponsorLikely: true,
  },
  {
    company: "Company Name",
    logo: "/images/jobhatch/company-logo.png",
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    tags: ["Architecture", "E-Commerce", "Late Stage"],
    postedAgo: "2 hours ago",
    level: "New Grad, Entry Level",
    location: "Remote - US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
    matchScore: 89,
    sponsorLikely: true,
  },
  {
    company: "Company Name",
    logo: "/images/jobhatch/company-logo.png",
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    tags: ["Architecture", "E-Commerce", "Late Stage"],
    postedAgo: "2 hours ago",
    level: "New Grad, Entry Level",
    location: "Remote - US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
    matchScore: 89,
    sponsorLikely: true,
  },
  {
    company: "Company Name",
    logo: "/images/jobhatch/company-logo.png",
    title: "Product Designer",
    pitch: "One sentence pitch of the co...",
    tags: ["Architecture", "E-Commerce", "Late Stage"],
    postedAgo: "2 hours ago",
    level: "New Grad, Entry Level",
    location: "Remote - US",
    type: "Full-time",
    salary: "$120K/yr - $135K/yr",
    description:
      "The Hive Data team plays a central role at Hive in enabling massive amounts of data to be labeled in an accurate, efficient, and scalable way. You'll take a critical part in improving a platform of services and tools used by millions, and which is paramount to the success of...",
    matchScore: 89,
    sponsorLikely: true,
  },
];

export default function JobsPage() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      {/* Top Nav */}
      <header className="relative px-6 md:px-20 py-6 md:py-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/ai-explorations/jobhatch"
          className="flex items-end gap-3"
        >
          <div className="bg-[#fcd038] border border-[#2f327d] rounded-lg shadow-[-4px_4px_0px_0px_#2f327d] w-12 h-12 md:w-14 md:h-14 overflow-hidden flex items-center justify-center">
            <img
              src="/images/jobhatch/logo-chick.png"
              alt="JobHatch"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <span className="font-black text-[#2f327d] text-xl md:text-2xl tracking-[4px]">
            JOBHATCH
          </span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          {["Home", "About", "Download"].map((label, i) => (
            <Link
              key={label}
              href={i === 0 ? "/ai-explorations/jobhatch" : "#"}
              className="px-8 py-3 rounded-full text-lg tracking-wide font-medium text-[#6c6c6c] hover:bg-[#e2752c] hover:text-white transition cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setLoginOpen(true)} className="px-8 py-3 rounded-full text-lg font-bold text-[#333] bg-white shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)] cursor-pointer hover:bg-[#f48c06] hover:text-white transition">
            Login
          </button>
          <a href="/ai-explorations/jobhatch/signup" className="px-8 py-3 rounded-full text-lg font-bold text-white bg-[#f48c06] cursor-pointer hover:brightness-110 transition">
            Sign Up
          </a>
        </div>
      </header>

      {/* Page Title + Tips */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-20 mt-4 md:mt-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2f327d]">
              Our Popular Jobs
            </h1>
            <p className="mt-2 text-lg md:text-2xl font-semibold text-[#757575]">
              Be one of the first 10 to apply
            </p>
          </div>

          {/* Tips Card */}
          <div className="hidden lg:flex items-start gap-3 bg-white rounded-xl p-4 shadow-lg border border-gray-100 max-w-[340px]">
            <img
              src="/images/jobhatch/tips-mascot.png"
              alt=""
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="font-extrabold text-[#2f327d] text-xl">Tips</p>
              <p className="text-[#333] text-sm mt-1">
                Register with US to unlock more features!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-20 mt-8 pb-20">
        <div className="space-y-0 divide-y divide-gray-200">
          {JOBS.map((job, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row gap-6 py-8 first:pt-4"
            >
              {/* Left: Job Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-4">
                  {/* Company Logo */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-lg border border-gray-200 overflow-hidden">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-black mt-1 text-center">
                      {job.company}
                    </p>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[rgba(0,240,160,0.1)] text-black text-xs font-medium px-2 py-1 rounded-md">
                        {job.postedAgo}
                      </span>
                      <span className="bg-[rgba(140,120,255,0.1)] text-black text-xs font-medium px-3 py-1 rounded-md">
                        {job.level}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#e2752c] mt-1">
                      <a href="/ai-explorations/jobhatch/signup" className="hover:underline">
                        {job.title}
                      </a>
                    </h3>

                    {/* Pitch & Tags */}
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <span className="text-[#525769]">{job.pitch}</span>
                      <span className="text-black">/</span>
                      <span className="text-black/45">
                        {job.tags.join(" · ")}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mt-2 text-sm text-black">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs text-[#757575] leading-relaxed max-w-[600px]">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Match Score + Action (blurred) */}
              <div className="shrink-0 flex flex-row lg:flex-col items-center gap-4 lg:gap-2 lg:w-[160px] blur-[6px] select-none pointer-events-none">
                {/* Score Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-[70px] h-[70px] rounded-full bg-[#abe5ff] flex items-center justify-center">
                    <span className="text-2xl font-normal text-black">
                      {job.matchScore}
                      <span className="text-xs font-extrabold">%</span>
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-black mt-2">
                    STRONG MATCH
                  </p>
                  {job.sponsorLikely && (
                    <p className="text-xs font-medium text-black mt-1">
                      H1B Sponsor Likely
                    </p>
                  )}
                </div>
                <span className="bg-[#e2752c] text-white text-sm font-bold uppercase px-6 py-2 rounded-full mt-2 inline-block">
                  APPLY NOW
                </span>
              </div>

              {/* Far Right: Funder Card (blurred) */}
              <div className="hidden xl:block shrink-0 w-[180px] blur-[6px] select-none pointer-events-none">
                <div className="bg-[#abe5ff] rounded-xl p-5 h-full flex flex-col items-center justify-center">
                  <div className="w-[70px] h-[70px] rounded-full bg-[#abe5ff] border-4 border-white/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#2f327d]">
                      {job.matchScore}%
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#2f327d] mt-3">
                    Funder Name
                  </p>
                  <p className="text-xs font-medium text-[#2f327d] mt-1">
                    Description of Funder..
                  </p>
                  <span className="bg-white text-[#e2752c] text-xs font-bold uppercase px-5 py-2 rounded-full mt-4 inline-block">
                    Let&apos;s chat
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, #e8f4fd 0%, #d4ecfb 40%, #fef3e2 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="bg-[#fcd038] rounded-xl w-20 h-20 overflow-hidden flex items-center justify-center mb-4 shadow-[inset_-4px_-4px_4px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(0,0,0,0.25)]">
              <img
                src="/images/jobhatch/logo-chick.png"
                alt="JobHatch"
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="font-black text-[#2f327d] text-2xl tracking-[4px] mb-12">
              JOBHATCH
            </span>

            <div className="flex flex-col md:flex-row gap-20 md:gap-32 mb-16 text-left">
              <div>
                <h4 className="font-bold text-[#2f327d] text-2xl mb-4">
                  Quick Link
                </h4>
                <ul className="space-y-2 text-[#2f327d]">
                  {["Home", "About", "Features", "Pricing", "Blog"].map(
                    (link) => (
                      <li key={link}>{link}</li>
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
                  <li>Terms of Use</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
              {/* Social Icons */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/jobhatch/social-1.png"
                  alt=""
                  className="w-16 h-16 object-contain"
                />
                <img
                  src="/images/jobhatch/social-2.png"
                  alt=""
                  className="w-16 h-16 object-contain"
                />
                <img
                  src="/images/jobhatch/social-3.png"
                  alt=""
                  className="w-16 h-16 object-contain"
                />
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

            {/* Footer Stars */}
            <div className="mt-8">
              <img
                src="/images/jobhatch/footer-stars.png"
                alt=""
                className="w-20 h-auto mx-auto"
              />
            </div>

            <p className="mt-8 text-[#2f327d] text-sm tracking-wide">
              &copy; 2025 JobHatch
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";

export default function JobHatchOnboardingPage() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Top Nav */}
      <header className="relative px-6 md:px-20 py-6 md:py-8 flex items-center justify-between border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-end gap-3">
          <div className="bg-[#fcd038] border-2 border-[#2f327d] rounded-lg w-12 h-12 md:w-14 md:h-14 overflow-hidden flex items-center justify-center">
            <img
              src="/images/jobhatch/logo.png"
              alt="JobHatch"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <span className="font-black text-[#2f327d] text-2xl md:text-3xl tracking-[5px]">
            JOBHATCH
          </span>
        </div>

        {/* User Avatar */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
          <span className="text-[#333] font-medium">Mia Yue</span>
          <span className="text-[#999] text-xs">›</span>
        </div>
      </header>

      {/* Content */}
      <section className="flex flex-col items-center text-center px-6 pt-16 md:pt-24 pb-32">
        <h1 className="text-3xl md:text-[42px] font-semibold text-[#333] leading-tight mb-6">
          Are you currently looking for a new job?
        </h1>

        <div className="max-w-[700px] mb-12">
          <p className="text-lg text-[#aaa] leading-relaxed">
            Thousands of the world&apos;s best tech companies and startups are
            hiring on Job Hatch
          </p>
          <p className="text-lg text-[#aaa]">
            Apply privately · See salary upfront · No middlemen
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[440px]">
          <Link
            href="/ai-explorations/jobhatch/upload-resume"
            className="border-2 border-[#e2752c] text-[#e2752c] font-medium text-lg py-4 px-8 rounded-full text-center hover:bg-[#e2752c] hover:text-white transition"
          >
            I&apos;m actively seeking a job
          </Link>
          <Link
            href="/ai-explorations/jobhatch/upload-resume"
            className="border-2 border-[#e2752c] text-[#e2752c] font-medium text-lg py-4 px-8 rounded-full text-center hover:bg-[#e2752c] hover:text-white transition"
          >
            I&apos;d like to mentor others
          </Link>
        </div>
      </section>
    </div>
  );
}

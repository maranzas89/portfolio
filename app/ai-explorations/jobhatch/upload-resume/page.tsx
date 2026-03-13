"use client";

import React from "react";
import Link from "next/link";

export default function UploadResumePage() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Top Nav */}
      <header className="relative px-6 md:px-20 py-6 md:py-8 flex items-center justify-between border-b border-gray-100">
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

        <div className="hidden md:flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
          <span className="text-[#333] font-medium">Mia Yue</span>
          <span className="text-[#999] text-xs">›</span>
        </div>
      </header>

      {/* Content */}
      <section className="flex flex-col items-center text-center px-6 pt-14 md:pt-20 pb-32">
        <h1 className="text-3xl md:text-[40px] font-semibold text-[#333] leading-tight mb-4">
          Upload a recent resume or CV
        </h1>
        <p className="text-lg text-[#aaa] mb-10">
          Autocomplete your profile in just a few seconds by uploading a resume.
        </p>

        {/* Upload Box */}
        <div className="w-full max-w-[640px] border border-gray-200 rounded-2xl py-12 px-8 flex flex-col items-center mb-8">
          <img
            src="/images/jobhatch/tips-mascot.png"
            alt="Upload mascot"
            className="w-[140px] md:w-[160px] h-auto mb-6"
          />
          <p className="text-sm text-[#777] mb-6">
            Click the button below to upload your resume as a .pdf, .doc, .docx,
            .rtf, .wp or .txt file
          </p>
          <Link
            href="/ai-explorations/jobhatch/resume-result"
            className="bg-[#e2752c] text-white font-bold text-lg px-16 py-4 rounded-full hover:brightness-110 transition inline-block"
          >
            Upload Resume
          </Link>
        </div>

        {/* Skip */}
        <Link
          href="/ai-explorations/jobhatch/feature-profile?skipped=resume"
          className="border border-gray-200 text-[#555] font-medium text-lg py-4 px-16 rounded-full hover:bg-gray-50 transition inline-block"
        >
          Skip for now
        </Link>
      </section>
    </div>
  );
}

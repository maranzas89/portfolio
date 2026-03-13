"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const OPTIONS = ["In two weeks", "In a month", "In 3 month", "I'm not sure"];

export default function InterviewTimelinePage() {
  return (
    <Suspense>
      <InterviewTimelineContent />
    </Suspense>
  );
}

function InterviewTimelineContent() {
  const searchParams = useSearchParams();
  const skipped = searchParams.get("skipped");
  const suffix = skipped ? `?skipped=${skipped}` : "";

  return (
    <div className="min-h-screen bg-[#4a4a5a] flex items-center justify-center p-4">
      <div className="w-full max-w-[680px] bg-white rounded-2xl shadow-xl px-8 md:px-12 pt-10 pb-10">
        {/* Mascot */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/jobhatch/hero-mascot.png"
            alt="JobHatch Mascots"
            className="w-[180px] h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-[28px] font-semibold text-[#333] text-center mb-8">
          We want to feature you to recruiters!
        </h1>

        {/* Body */}
        <p className="text-[#888] text-base leading-relaxed mb-6">
          No problem! We can extend your invite until you&apos;re ready to get pitched by top startups.
        </p>

        <p className="text-[#333] font-semibold text-base mb-5">
          When will you be ready to interview?
        </p>

        <div className="flex flex-col gap-3">
          {OPTIONS.map((option) => (
            <Link
              key={option}
              href={`/ai-explorations/jobhatch/dashboard${suffix}`}
              className="w-full border border-gray-200 rounded-full py-4 text-center text-base text-[#555] font-medium hover:bg-gray-50 transition"
            >
              {option}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

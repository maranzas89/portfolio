"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function FeatureProfilePage() {
  return (
    <Suspense>
      <FeatureProfileContent />
    </Suspense>
  );
}

function FeatureProfileContent() {
  const searchParams = useSearchParams();
  const skipped = searchParams.get("skipped");
  const suffix = skipped ? `?skipped=${skipped}` : "";

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const bothChecked = check1 && check2;

  return (
    <div className="min-h-screen bg-[#4a4a5a] flex items-center justify-center p-4">
      <div className="w-full max-w-[680px] bg-white rounded-2xl shadow-xl px-8 md:px-12 pt-10 pb-8">
        {/* Mascot */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/jobhatch/hero-mascot.png"
            alt="JobHatch Mascots"
            className="w-[180px] h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-[28px] font-semibold text-[#333] text-center mb-6">
          We want to feature you to recruiters!
        </h1>

        {/* Body */}
        <div className="space-y-4 text-[#888] text-base leading-relaxed mb-6">
          <p>Hey Mia,</p>
          <p>
            Your skills are in demand! We&apos;d love to potentially feature your profile even further to
            companies that are hiring for your skills and preferences. All you have to do is opt in and
            we&apos;ll shoot you an email beforehand if your profile is about to be featured. Your current
            and past employers will not see your profile and you can opt out at anytime.
          </p>
        </div>

        {/* Confirm section */}
        <p className="text-[#333] font-semibold text-base mb-4">
          Interested? We&apos;ll just need you to confirm the following:
        </p>

        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={check1}
              onChange={() => setCheck1(!check1)}
              className="w-5 h-5 accent-[#e2752c] rounded border-gray-300"
            />
            <span className="text-sm text-[#555]">
              I&apos;m ready to take calls with companies
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={check2}
              onChange={() => setCheck2(!check2)}
              className="w-5 h-5 accent-[#e2752c] rounded border-gray-300"
            />
            <span className="text-sm text-[#555]">
              I&apos;ll respond to messages from companies in a timely manner
            </span>
          </label>
        </div>

        {/* Feature my profile button */}
        <Link
          href={`/ai-explorations/jobhatch/dashboard${suffix}`}
          className={`block w-full text-center py-4 rounded-full text-base font-medium transition ${
            bothChecked
              ? "bg-[#e2752c] text-white hover:brightness-110"
              : "bg-[#e8e8e8] text-[#bbb] pointer-events-none"
          }`}
          aria-disabled={!bothChecked}
          tabIndex={bothChecked ? 0 : -1}
        >
          Feature my profile
        </Link>

        {/* Skip */}
        <Link
          href={`/ai-explorations/jobhatch/interview-timeline${suffix}`}
          className="block text-center text-sm text-[#999] mt-4 hover:text-[#666] transition"
        >
          Skip for now
        </Link>
      </div>
    </div>
  );
}

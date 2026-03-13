"use client";

import React from "react";
import Link from "next/link";

const SKILLS = [
  { label: "Organizational", angle: 270 },
  { label: "Communication", angle: 210 },
  { label: "Problem-Solving", angle: 150 },
  { label: "Strong Work Ethic", angle: 90 },
  { label: "Teamwork", angle: 30 },
  { label: "Adaptability", angle: 330 },
];

const ROLE_MATCHES = [
  {
    fitLabel: "You are perfect fit in",
    title: "Product Designer",
    score: 89,
    scoreColor: "bg-[#2f327d]",
  },
  {
    fitLabel: "You are also fit in",
    title: "UX Designer",
    score: 82,
    scoreColor: "bg-[#e2752c]",
  },
  {
    fitLabel: "You are also fit in",
    title: "Product Manager",
    score: 75,
    scoreColor: "bg-[#2ebb5e]",
  },
];

function RadarChart() {
  const cx = 150;
  const cy = 150;
  const levels = 5;
  const sides = 6;
  const maxR = 100;

  const angles = Array.from({ length: sides }, (_, i) => (Math.PI * 2 * i) / sides - Math.PI / 2);

  const getPoint = (angle: number, r: number) => ({
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  });

  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const r = (maxR / levels) * (i + 1);
    return angles.map((a) => getPoint(a, r));
  });

  // Data values (out of 5)
  const values = [4, 2.5, 2, 3.5, 2, 3];
  const dataPoints = values.map((v, i) => getPoint(angles[i], (v / 5) * maxR));

  return (
    <svg width="300" height="300" viewBox="0 0 300 300" className="mx-auto">
      {/* Grid */}
      {gridLevels.map((pts, i) => (
        <polygon
          key={i}
          points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="1"
        />
      ))}
      {/* Axis lines */}
      {angles.map((a, i) => {
        const p = getPoint(a, maxR);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#e0e0e0" strokeWidth="1" />;
      })}
      {/* Data polygon */}
      <polygon
        points={dataPoints.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="rgba(59,130,246,0.2)"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="#3b82f6" />
      ))}
    </svg>
  );
}

export default function ResumeResultPage() {
  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Top Nav */}
      <header className="relative px-6 md:px-20 py-6 md:py-8 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-end gap-3">
          <div className="bg-[#fcd038] border-2 border-[#2f327d] rounded-lg w-12 h-12 md:w-14 md:h-14 overflow-hidden flex items-center justify-center">
            <img src="/images/jobhatch/logo.png" alt="JobHatch" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </div>
          <span className="font-black text-[#2f327d] text-2xl md:text-3xl tracking-[5px]">JOBHATCH</span>
        </div>
        <div className="hidden md:flex items-center gap-2" />
      </header>

      {/* Content */}
      <section className="max-w-[720px] mx-auto px-6 pt-10 md:pt-16 pb-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-[38px] font-bold text-[#333] mb-3">
            Your Resume Analyze Result
          </h1>
          <p className="text-base text-[#aaa]">
            We have generated content from your resume and analyze report!
          </p>
        </div>

        {/* Report Card */}
        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#333]">
              Your Job Hatch Analyze Report
            </h2>
            <img
              src="/images/jobhatch/tips-mascot.png"
              alt=""
              className="w-20 h-20 object-contain shrink-0"
            />
          </div>

          <div className="space-y-5 text-sm text-[#555] leading-relaxed">
            <div>
              <p className="font-bold text-[#333] text-base mb-1">Hi Mia,</p>
              <p>
                Your resume demonstrates strong design experience and user-centered
                thinking. However, it could be clearer about measurable impact, design
                process details, and collaboration with cross-functional teams.
              </p>
            </div>

            <div>
              <p className="font-bold text-[#333] mb-1">Your Strengths</p>
              <p>
                Your resume demonstrates strong visual design skills with a modern, clear layout that is easy to
                read. It effectively showcases your experience with industry-standard design tools such as Figma,
                Sketch, and Adobe XD, making your technical proficiency clear to employers. Additionally, your
                use of relevant design terminology and inclusion of a portfolio link highlight...
              </p>
            </div>

            {/* Radar Chart */}
            <div className="relative py-4">
              <RadarChart />
              <div className="absolute top-[10px] left-1/2 -translate-x-1/2 text-xs font-semibold text-[#333]">Organizational</div>
              <div className="absolute top-[38%] left-[12%] text-xs font-semibold text-[#333]">Communication</div>
              <div className="absolute top-[38%] right-[12%] text-xs font-semibold text-[#333]">Adaptability</div>
              <div className="absolute bottom-[38%] left-[10%] text-xs font-semibold text-[#333]">Problem-Solving</div>
              <div className="absolute bottom-[38%] right-[14%] text-xs font-semibold text-[#333]">Teamwork</div>
              <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 text-xs font-semibold text-[#333]">Strong Work Ethic</div>
            </div>

            <div>
              <p className="font-bold text-[#333] mb-1">Conclusion</p>
              <p>
                Your resume shows potential but needs clearer, more specific details. It doesn&apos;t strongly
                demonstrate communication or problem-solving skills, and adaptability isn&apos;t well supported.
                Teamwork examples are limited, and your work ethic and organizational skills could be better
                highlighted with concrete achievements. Strengthening these areas will make your resume more
                compelling to employers.
              </p>
            </div>

            <p className="font-bold text-[#333]">
              Please feel free to use Jobhatch to refine your resume, highlight your strengths, and ensure you
              stand out to recruiters.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-10" />

        {/* Role Matches */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-8">
          From Your Resume, We Fund...
        </h2>

        <div className="space-y-10">
          {ROLE_MATCHES.map((role, i) => (
            <div key={i}>
              <p className="text-sm text-[#777] mb-1">{role.fitLabel}</p>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-[#333]">
                  {role.title}
                </h3>
                <div className={`w-14 h-14 rounded-full ${role.scoreColor} flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold text-sm">{role.score}%</span>
                </div>
              </div>
              <p className="text-sm font-bold text-[#2f327d] underline mb-2 cursor-pointer">
                Job Hatch Insights
              </p>
              <p className="text-sm text-[#777] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo ex, maximus sed ligula quis,
                mattis placerat mauris. Morbi sagittis sodales erat at aliquam. Nam accumsan auctor erat, eget
                porta nisl fringilla sit amet. Curabitur sit amet lorem molestie, viverra nulla non, tempus magna. In
                ipsum lorem, eleifend eu turpis non, lobortis vulputate arcu. Vivamus sem neque, volutpat quis
                dapibus ac, volutpat nec ex. Sed nec sem ornare,
              </p>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/ai-explorations/jobhatch/feature-profile"
            className="bg-[#e2752c] text-white font-bold text-lg px-16 py-4 rounded-full hover:brightness-110 transition inline-block"
          >
            Continue
          </Link>
        </div>
      </section>
    </div>
  );
}

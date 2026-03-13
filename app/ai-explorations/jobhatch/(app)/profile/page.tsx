"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Pencil,
  Plus,
} from "lucide-react";
import { PROFILE, EDUCATION, WORK_EXPERIENCE, SKILLS } from "../../profile-data";

const TABS = [
  { label: "Personal", anchor: "personal" },
  { label: "Education", anchor: "education" },
  { label: "Work Experience", anchor: "work-experience" },
  { label: "Skills", anchor: "skills" },
  { label: "Equal Employment", anchor: "equal-employment" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabBarRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  function scrollToSection(anchor: string) {
    const container = scrollRef.current;
    const tabBar = tabBarRef.current;
    if (!container || !tabBar) return;
    isClickScrolling.current = true;
    if (anchor === "personal") {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(anchor);
      if (!el) return;
      // Calculate how far the tab bar bottom is from the container top
      const containerRect = container.getBoundingClientRect();
      const tabBarBottom = tabBar.getBoundingClientRect().bottom - containerRect.top;
      const elTop = el.getBoundingClientRect().top - containerRect.top;
      const offset = container.scrollTop + (elTop - tabBarBottom) - 16;
      container.scrollTo({ top: offset, behavior: "smooth" });
    }
    const onScrollEnd = () => {
      isClickScrolling.current = false;
      container.removeEventListener("scrollend", onScrollEnd);
    };
    container.addEventListener("scrollend", onScrollEnd, { once: true });
    setTimeout(() => { isClickScrolling.current = false; }, 1500);
  }

  // Track active tab on scroll (only when user manually scrolls)
  useEffect(() => {
    const container = scrollRef.current;
    const tabBar = tabBarRef.current;
    if (!container || !tabBar) return;
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const anchors = TABS.map((t) => t.anchor);
      const containerRect = container.getBoundingClientRect();
      const tabBarBottom = tabBar.getBoundingClientRect().bottom - containerRect.top;
      for (let i = anchors.length - 1; i >= 0; i--) {
        const el = document.getElementById(anchors[i]);
        if (el) {
          const relativeTop = el.getBoundingClientRect().top - containerRect.top;
          if (relativeTop <= tabBarBottom + 20) {
            setActiveTab(anchors[i]);
            return;
          }
        }
      }
      setActiveTab(anchors[0]);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex-1 min-h-0 bg-[#fdf8e8] flex flex-col overflow-hidden">
      {/* White card */}
      <div className="flex-1 min-h-0 flex flex-col p-4 sm:p-6 md:p-8 lg:p-[52px]">
      <div className="bg-white rounded-2xl mx-auto w-full flex flex-col min-h-0 flex-1">
        {/* Fixed header: PROFILE title + tab bar */}
        <div className="bg-white rounded-t-2xl px-4 sm:px-6 md:px-8 lg:px-14 pt-6 sm:pt-8 shrink-0">
          <h1 className="font-black text-[#333] text-2xl sm:text-[32px] lg:text-[40px] tracking-[3px] mb-1">
            PROFILE
          </h1>
          <p className="text-base font-semibold text-[#999] mb-4">
            Your Profile data is kept private and secure
          </p>
          <div ref={tabBarRef} className="flex gap-3 sm:gap-4 lg:gap-6 border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {TABS.map((tab) => (
              <button
                key={tab.anchor}
                onClick={() => { setActiveTab(tab.anchor); scrollToSection(tab.anchor); }}
                className={`px-3 sm:px-4 lg:px-5 py-3 text-sm sm:text-base font-black transition border-b-2 -mb-[2px] cursor-pointer shrink-0 ${
                  activeTab === tab.anchor
                    ? "border-[#e2752c] text-[#333]"
                    : "border-transparent text-[#999] hover:text-[#e2752c]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto scrollbar-hide px-4 sm:px-6 md:px-8 lg:px-14 py-6 sm:py-8 lg:py-10" style={{ scrollbarWidth: 'none' }}>
        {/* Complete profile CTA */}
        <div className="bg-[#fdf8e8] rounded-xl p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p className="text-base font-bold text-[#555] leading-relaxed">
              Complete your profile to boost job matching accuracy and enable
              Autofill extension to autofill your applications.
            </p>
            <button className="mt-5 bg-[#e2752c] text-white font-bold text-base px-10 py-3.5 rounded-full hover:brightness-110 transition">
              Complete Profile
            </button>
          </div>
          <img
            src="/images/jobhatch/hero-mascot.png"
            alt="Profile mascot"
            className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto sm:ml-8 shrink-0 order-first sm:order-last"
          />
        </div>

        {/* Personal Info */}
        <section id="personal" className="mb-8 sm:mb-12 scroll-mt-[140px]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-5">
            <h2 className="text-4xl font-black text-[#333]">
              {PROFILE.name}
            </h2>
            <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
              <ExternalLink className="w-5 h-5" />
              Share My Profile
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-10 text-sm sm:text-base text-[#555]">
              <span>{PROFILE.email}</span>
              <span>{PROFILE.phone}</span>
            </div>
            <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
              <Pencil className="w-5 h-5" />
              Edit
            </button>
          </div>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Education */}
        <section id="education" className="mb-12 scroll-mt-[140px]">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-xl font-black text-[#333]">
              Education
            </h2>
            <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
              <Pencil className="w-5 h-5" />
              Edit
            </button>
          </div>
          <div className="flex items-stretch gap-5">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 bg-white" />
              <div className="w-[1px] flex-1 bg-gray-200 mt-1" />
            </div>
            <div>
              <p className="text-sm text-[#999] mb-1">{EDUCATION[0].period}</p>
              <p className="font-bold text-[#333] text-base tracking-wide uppercase mb-1">
                {EDUCATION[0].school}
              </p>
              <p className="text-base text-[#555]">
                {EDUCATION[0].degree}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Work Experience */}
        <section id="work-experience" className="mb-12 scroll-mt-[140px]">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-xl font-black text-[#333]">
              Work Experience
            </h2>
            <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
              <Pencil className="w-5 h-5" />
              Edit
            </button>
          </div>
          <div className="relative">
            {WORK_EXPERIENCE.map((job, i) => (
              <div key={i} className="flex items-stretch gap-5 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white relative z-10 shrink-0" />
                  <div className="w-[1px] bg-gray-200 flex-1 mb-10" />
                </div>
                <div className="flex-1 pb-10">
                  <p className="text-sm text-[#999] mb-1">{job.period}</p>
                  <p className="font-bold text-[#333] text-lg mb-0.5">
                    {job.company}
                  </p>
                  <p className="font-semibold text-[#555] text-base mb-3">
                    {job.title}
                  </p>
                  <ul className="space-y-1.5">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-base text-[#555] leading-relaxed flex items-center gap-2"
                      >
                        <span className="shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Skills */}
        <section id="skills" className="mb-12 scroll-mt-[140px]">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-xl font-black text-[#333]">
              Skills
            </h2>
            <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
              <Pencil className="w-5 h-5" />
              Edit
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="border border-gray-300 rounded-full px-6 py-2.5 text-base text-[#555] font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 mb-12" />

        {/* Equal Employment */}
        <section id="equal-employment" className="mb-10 scroll-mt-[140px]">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black text-[#333]">
              Equal Employment
            </h2>
            <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
              <Pencil className="w-5 h-5" />
              Edit
            </button>
          </div>
          <p className="text-base text-[#888] mb-5">
            Add your Employment history for better job matches tailored to
            your background
          </p>
          <button className="flex items-center gap-2 text-base font-medium text-[#555] hover:text-[#333] transition">
            <Plus className="w-5 h-5" />
            Employment
          </button>
        </section>
      </div>
      </div>
      </div>
    </div>
  );
}

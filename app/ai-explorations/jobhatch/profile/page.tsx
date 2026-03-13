"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ExternalLink,
  Pencil,
  Plus,
} from "lucide-react";
import { PROFILE, EDUCATION, WORK_EXPERIENCE, SKILLS } from "../profile-data";

const SIDEBAR_TOP = [
  { icon: Home, label: "Home", href: "/ai-explorations/jobhatch/dashboard" },
  { icon: User, label: "Profile", active: true },
  { icon: FileText, label: "Resume", href: "/ai-explorations/jobhatch/resume" },
  { icon: Briefcase, label: "Jobs", href: "/ai-explorations/jobhatch/jobs" },
  { icon: CalendarDays, label: "Planner" },
  { icon: Users, label: "Buddies" },
];

const SIDEBAR_BOTTOM = [
  { icon: Mail, label: "Message" },
  { icon: Monitor, label: "Download APP" },
  { icon: MessageCircle, label: "Feedback" },
  { icon: Settings, label: "Setting" },
];

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
            <button className="relative text-[#999] hover:text-[#333] transition">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
              <Settings className="w-4 h-4 text-[#999]" />
              <span className="text-sm font-medium text-[#333]">
                Mia Yue (40 tokens)
              </span>
              <ChevronDown className="w-3 h-3 text-[#999]" />
            </div>
          </div>
        </header>

        {/* Content area with cream bg */}
        <div className="flex-1 min-h-0 bg-[#fdf8e8] flex flex-col overflow-hidden">
          {/* White card */}
          <div className="flex-1 min-h-0 flex flex-col p-[52px]">
          <div className="bg-white rounded-2xl mx-auto w-full flex flex-col min-h-0 flex-1">
            {/* Fixed header: PROFILE title + tab bar */}
            <div className="bg-white rounded-t-2xl px-8 md:px-14 pt-8 shrink-0">
              <h1 className="font-black text-[#333] text-[40px] tracking-[3px] mb-1">
                PROFILE
              </h1>
              <p className="text-base font-semibold text-[#999] mb-4">
                Your Profile data is kept private and secure
              </p>
              <div ref={tabBarRef} className="flex gap-0 border-b border-gray-200">
                {TABS.map((tab) => (
                  <button
                    key={tab.anchor}
                    onClick={() => { setActiveTab(tab.anchor); scrollToSection(tab.anchor); }}
                    className={`px-5 py-3 text-base font-bold transition border-b-2 -mb-[2px] tracking-[1.2px] cursor-pointer ${
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
            <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto scrollbar-hide px-8 md:px-14 py-10" style={{ scrollbarWidth: 'none' }}>
            {/* Complete profile CTA */}
            <div className="bg-[#fdf8e8] rounded-xl p-8 flex items-center justify-between mb-12">
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
                className="w-[120px] h-auto ml-8 shrink-0"
              />
            </div>

            {/* Personal Info */}
            <section id="personal" className="mb-12 scroll-mt-[140px]">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-3xl font-bold text-[#2f327d] tracking-wide">
                  {PROFILE.name}
                </h2>
                <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
                  <ExternalLink className="w-5 h-5" />
                  Share My Profile
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-10 text-base text-[#555]">
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
                <h2 className="text-2xl font-bold text-[#2f327d] tracking-wide">
                  Education
                </h2>
                <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
                  <Pencil className="w-5 h-5" />
                  Edit
                </button>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 bg-white" />
                  <div className="w-[1px] h-10 bg-gray-200 mt-1" />
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
                <h2 className="text-2xl font-bold text-[#2f327d] tracking-wide">
                  Work Experience
                </h2>
                <button className="flex items-center gap-2 text-base text-[#555] hover:text-[#333] transition">
                  <Pencil className="w-5 h-5" />
                  Edit
                </button>
              </div>
              <div className="relative">
                {WORK_EXPERIENCE.map((job, i) => (
                  <div key={i} className="flex items-start gap-5 relative">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white relative z-10" />
                      <div className={`w-[1px] bg-gray-200 flex-1 ${i < WORK_EXPERIENCE.length - 1 ? "min-h-[140px]" : "min-h-[80px]"}`} />
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
                <h2 className="text-2xl font-bold text-[#2f327d] tracking-wide">
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
                <h2 className="text-2xl font-bold text-[#2f327d] tracking-wide">
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
      </div>
    </div>
  );
}

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
  ExternalLink,
  Pencil,
  Plus,
} from "lucide-react";

const SIDEBAR_TOP = [
  { icon: Home, label: "Home", href: "/ai-explorations/jobhatch/dashboard" },
  { icon: User, label: "Profile", active: true },
  { icon: FileText, label: "Resume" },
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

const TABS = ["Personal", "Education", "Work Experience", "Skills", "Equal Employment"] as const;

const SKILLS = [
  "UI/UX Design",
  "Interaction Design",
  "User Research",
  "Adobe XD",
  "HTML",
  "CSS",
  "Invision",
  "Programming",
  "Figma",
  "Axure RP",
];

const WORK_EXPERIENCE = [
  {
    period: "03/2022 - Present",
    company: "DiDi",
    title: "Product Designer",
    bullets: [
      "Simplify complicated inspector page and optimize the user experience on filtering result",
      "Design admin page to capture network-wide device state and configuration",
      "Create SmartEvents page that pinpoints deviations from the intent and remediation steps",
      "UX Research on advantages of verification-driven, agile, proactive operations",
      "Usability test on the dashboard, ensure the user can capture, analyze and correlate the data",
      "Completed user stories and delivered UI design updates in each product release",
    ],
  },
  {
    period: "05/2019 - 02/2022",
    company: "TikTok",
    title: "UI Designer",
    bullets: [
      "Created data visualizations for study material dashboard with drill down to the detail",
      "Established new product design pattern, GUI elements, and assets library assets library",
      "Produce corporate presentations, videos and flow visualization reports",
    ],
  },
  {
    period: "07/2018 - 04/2019",
    company: "CISCO",
    title: "UI Designer Intern",
    bullets: [
      "UX Research on advantages of verification-driven, agile, proactive operations",
      "Usability test on the dashboard, ensure the user can capture, analyze and correlate the data",
      "Completed user stories and delivered UI design updates in each product release",
    ],
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Personal");

  return (
    <div className="relative bg-[#fdf8f0] min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-[220px] min-h-screen border-r border-gray-200 bg-white px-4 py-6 shrink-0 justify-between">
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
                    : "text-[#666] hover:bg-gray-50"
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
                    : "text-[#666]"
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
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#666] font-medium"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-200 bg-white">
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
            <span className="font-black text-[#333] text-lg tracking-[3px] ml-2">
              PROFILE
            </span>
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

        {/* Content */}
        <div className="px-6 md:px-10 py-8 max-w-[900px]">
          {/* Privacy notice */}
          <p className="text-sm font-semibold text-[#555] mb-6">
            Your Profile data is kept private and secure
          </p>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-gray-200 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-medium transition border-b-2 -mb-[2px] ${
                  activeTab === tab
                    ? "border-[#333] text-[#333]"
                    : "border-transparent text-[#999] hover:text-[#666]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Complete profile CTA */}
          <div className="bg-[#fef3e2] rounded-xl p-6 flex items-center justify-between mb-10">
            <div>
              <p className="text-sm text-[#555] leading-relaxed">
                Complete your profile to boost job matching accuracy and enable
                Autofill extension to autofill your applications.
              </p>
              <button className="mt-4 bg-[#e2752c] text-white font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 transition">
                Complete Profile
              </button>
            </div>
            <img
              src="/images/jobhatch/hero-mascot.png"
              alt="Profile mascot"
              className="w-[100px] h-auto ml-6 shrink-0"
            />
          </div>

          {/* Personal Info */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#2f327d] tracking-wide">
                MIA YUE
              </h2>
              <button className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#333] transition">
                <ExternalLink className="w-4 h-4" />
                Share My Profile
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 text-sm text-[#555]">
                <span>mia.yue@gmail.com</span>
                <span>415-223-3528</span>
              </div>
              <button className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#333] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>

          <hr className="border-gray-200 mb-10" />

          {/* Education */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#2f327d] tracking-wide">
                Education
              </h2>
              <button className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#333] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </button>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-1 shrink-0" />
              <div>
                <p className="text-xs text-[#999] mb-1">09/2016 - 09/2018</p>
                <p className="font-bold text-[#333] text-sm tracking-wide uppercase mb-1">
                  Standford University
                </p>
                <p className="text-sm text-[#555]">
                  Master of Arts (B.A.) in Multimedia Option
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-200 mb-10" />

          {/* Work Experience */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#2f327d] tracking-wide">
                Work Experience
              </h2>
              <button className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#333] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </button>
            </div>
            <div className="space-y-8">
              {WORK_EXPERIENCE.map((job, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-[#999] mb-1">{job.period}</p>
                    <p className="font-bold text-[#333] text-base mb-0.5">
                      {job.company}
                    </p>
                    <p className="font-semibold text-[#555] text-sm mb-2">
                      {job.title}
                    </p>
                    <ul className="space-y-1">
                      {job.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-[#555] leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-1.5 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {i < WORK_EXPERIENCE.length - 1 && (
                      <hr className="border-gray-200 mt-8" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200 mb-10" />

          {/* Skills */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#2f327d] tracking-wide">
                Skills
              </h2>
              <button className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#333] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="border border-gray-300 rounded-full px-5 py-2 text-sm text-[#555] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-gray-200 mb-10" />

          {/* Equal Employment */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#2f327d] tracking-wide">
                Equal Employment
              </h2>
              <button className="flex items-center gap-1.5 text-sm text-[#555] hover:text-[#333] transition">
                <Pencil className="w-4 h-4" />
                Edit
              </button>
            </div>
            <p className="text-sm text-[#888] mb-4">
              Add your Employment history for better job matches tailored to
              your background
            </p>
            <button className="flex items-center gap-2 text-sm font-medium text-[#555] hover:text-[#333] transition">
              <Plus className="w-4 h-4" />
              Employment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

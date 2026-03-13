"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  Rocket,
  CheckSquare,
  Square,
  X,
} from "lucide-react";

const SIDEBAR_TOP = [
  { icon: Home, label: "Home", active: true },
  { icon: User, label: "Profile" },
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

const MISSIONS = [
  { label: "Finish onboarding at Jobhatch (10 tokens)", done: true },
  { label: "Upload your resume (20 tokens)", done: true },
  { label: "Complete daily check-in (10 tokens)", done: false, highlight: true },
  { label: "Connect with 3 people at Linkedin (10 tokens)", done: false },
  { label: "Apply to 2 job openings (20 tokens)", done: false },
  { label: "Practice answering 5 interview questions (30 tokens)", done: false },
];

const JOURNEY_STEPS = [
  { label: "Goal Setting", active: true },
  { label: "Resume Building", active: false },
  { label: "Job Applications", active: false },
  { label: "Networking", active: false },
  { label: "Job Offers", active: false },
];

const SKILL_LABELS = [
  { label: "Organizational", color: "bg-green-500" },
  { label: "Communication", color: "bg-purple-500" },
  { label: "Adaptability", color: "bg-yellow-400" },
  { label: "Problem-Solving", color: "bg-blue-500" },
  { label: "Teamwork", color: "bg-red-500" },
  { label: "Strong Work Ethic", color: "bg-pink-500" },
];

function RadarChart() {
  const cx = 120;
  const cy = 120;
  const levels = 5;
  const sides = 6;
  const maxR = 90;
  const angles = Array.from({ length: sides }, (_, i) => (Math.PI * 2 * i) / sides - Math.PI / 2);
  const getPoint = (angle: number, r: number) => ({
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  });
  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const r = (maxR / levels) * (i + 1);
    return angles.map((a) => getPoint(a, r));
  });
  const values = [4.2, 2.5, 3, 2.2, 2.8, 3.5];
  const dataPoints = values.map((v, i) => getPoint(angles[i], (v / 5) * maxR));
  const colors = ["#22c55e", "#a855f7", "#facc15", "#3b82f6", "#ef4444", "#ec4899"];

  return (
    <svg width="240" height="240" viewBox="0 0 240 240">
      {gridLevels.map((pts, i) => (
        <polygon key={i} points={pts.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#e5e7eb" strokeWidth="1" />
      ))}
      {angles.map((a, i) => {
        const p = getPoint(a, maxR);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#e5e7eb" strokeWidth="1" />;
      })}
      <polygon points={dataPoints.map((p) => `${p.x},${p.y}`).join(" ")} fill="rgba(59,130,246,0.15)" stroke="#6366f1" strokeWidth="2" />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="5" fill={colors[i]} />
      ))}
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardContent />
    </Suspense>
  );
}

function UploadResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[700px] mx-4 px-8 md:px-12 pt-10 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#999] hover:text-[#333] transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-[32px] font-semibold text-[#333] leading-tight mb-3">
            Upload a recent resume or CV
          </h2>
          <p className="text-base text-[#aaa] mb-8">
            Autocomplete your profile in just a few seconds by uploading a resume.
          </p>

          <div className="w-full max-w-[540px] border border-gray-200 rounded-2xl py-10 px-8 flex flex-col items-center mb-6">
            <img
              src="/images/jobhatch/tips-mascot.png"
              alt="Upload mascot"
              className="w-[120px] md:w-[140px] h-auto mb-5"
            />
            <p className="text-sm text-[#777] mb-5">
              Click the button below to upload your resume as a .pdf, .doc, .docx, .rtf, .wp or .txt file
            </p>
            <Link
              href="/ai-explorations/jobhatch/resume-result"
              className="bg-[#e2752c] text-white font-bold text-lg px-14 py-3.5 rounded-full hover:brightness-110 transition inline-block"
            >
              Upload Resume
            </Link>
          </div>

          <button
            onClick={onClose}
            className="border border-gray-200 text-[#555] font-medium text-base py-3 px-14 rounded-full hover:bg-gray-50 transition"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckInModal({ open, onDismiss, onContinue }: { open: boolean; onDismiss: () => void; onContinue: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onDismiss}>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[560px] mx-4 px-10 pt-10 pb-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 text-[#999] hover:text-[#333] transition"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-[#333] mb-3">
          Thanks for checking in today! You earned 10 tokens!
        </h2>
        <p className="text-sm text-[#888] mb-6">
          You can continue exploring and enjoy your job search journey with tailored career advice from JobHatch.
        </p>
        <button
          onClick={onContinue}
          className="bg-[#e2752c] text-white font-bold text-base px-8 py-3.5 rounded-full hover:brightness-110 transition inline-block"
        >
          Continue my journey at Jobhatch
        </button>
      </div>
    </div>
  );
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const skippedResume = searchParams.get("skipped") === "resume";
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckInClose = () => {
    setCheckedIn(true);
    setCheckInOpen(false);
  };

  const missions = MISSIONS.map((m) => {
    if (skippedResume && m.label.startsWith("Upload your resume")) {
      return { ...m, done: false };
    }
    if (checkedIn && m.label.startsWith("Complete daily check-in")) {
      return { ...m, done: true, highlight: false };
    }
    if (checkedIn && m.label.startsWith("Connect with 3 people")) {
      return { ...m, highlight: true };
    }
    return m;
  });
  const [uploadResumeOpen, setUploadResumeOpen] = useState(false);

  // If resume skipped, also mark onboarding as not done (0% state), highlight first
  const activeMissions = skippedResume
    ? missions.map((m, i) => ({ ...m, done: false, highlight: i === 0 }))
    : missions;

  const completedCount = activeMissions.filter((m) => m.done).length;
  const progress = Math.round((completedCount / activeMissions.length) * 100);

  return (
    <div className="relative bg-white min-h-screen flex">
      <CheckInModal open={checkInOpen} onDismiss={() => setCheckInOpen(false)} onContinue={handleCheckInClose} />
      <UploadResumeModal open={uploadResumeOpen} onClose={() => setUploadResumeOpen(false)} />
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-[220px] min-h-screen border-r border-gray-100 px-4 py-6 shrink-0 justify-between">
        <div>
          {SIDEBAR_TOP.map((item) => {
            const Icon = item.icon;
            return item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  item.active ? "bg-[#fff3e0] text-[#e2752c]" : "text-[#666] hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            ) : (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium cursor-default ${
                  item.active ? "bg-[#fff3e0] text-[#e2752c]" : "text-[#666]"
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
            <p className="font-bold text-[#333] text-sm underline">Refer and Earn</p>
            <p className="text-xs text-[#666] mt-1">Invite friends or share on LinkedIn to earn extra rewards!</p>
          </div>
          {/* AI card */}
          <div className="bg-[#2f327d] rounded-xl p-4 mb-4">
            <span className="text-xl">🌟</span>
            <p className="font-bold text-white text-sm mt-1">Get Hired Faster with AI Jobhacth!</p>
          </div>

          {SIDEBAR_BOTTOM.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#666] font-medium">
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
        <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <Link href="/ai-explorations/jobhatch" className="flex items-end gap-2">
              <div className="bg-[#fcd038] border border-[#2f327d] rounded-lg shadow-[-3px_3px_0px_0px_#2f327d] w-10 h-10 overflow-hidden flex items-center justify-center">
                <img src="/images/jobhatch/logo-chick.png" alt="JobHatch" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-black text-[#2f327d] text-lg tracking-[3px]">JOBHATCH</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-[#999] hover:text-[#333] transition">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
              <Settings className="w-4 h-4 text-[#999]" />
              <span className="text-sm font-medium text-[#333]">Mia Yue (40 tokens)</span>
              <span className="text-xs text-[#999]">▼</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-6 md:px-10 py-8">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#999] mb-2">Your Dashboard</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2f327d] mb-2">Welcome, Mia!</h1>
              <p className="text-sm text-[#888] mb-8">
                Complete Today&apos;s Mission to let recruiter catch you quickly!
              </p>

              {/* Today's Missions */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#e2752c] text-lg">■</span>
                  <h2 className="text-xl font-bold text-[#333]">Today&apos;s Missions</h2>
                  <span className="text-sm text-[#888] ml-1">{progress}% complete</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-3 bg-gray-100 rounded-full mb-6 overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>

                {/* Checklist */}
                <div className="space-y-4 relative">
                  {/* Timeline line */}
                  <div className="absolute left-[9px] top-4 bottom-4 w-[2px] bg-gray-200" />
                  {activeMissions.map((m, i) => {
                    const isClickable = m.highlight && !m.done;
                    const handleMissionClick = () => {
                      if (!isClickable) return;
                      if (skippedResume && m.label.startsWith("Finish onboarding")) {
                        setUploadResumeOpen(true);
                      } else if (m.label.startsWith("Complete daily check-in")) {
                        setCheckInOpen(true);
                      }
                    };
                    return (
                    <div
                      key={i}
                      className={`flex items-start gap-3 relative ${isClickable ? "cursor-pointer" : ""}`}
                      onClick={handleMissionClick}
                    >
                      {m.done ? (
                        <CheckSquare className="w-5 h-5 text-[#2f327d] shrink-0 relative z-10 bg-white" />
                      ) : (
                        <Square className={`w-5 h-5 shrink-0 relative z-10 bg-white ${m.highlight ? "text-[#e2752c]" : "text-gray-300"}`} />
                      )}
                      <span
                        className={`text-sm ${
                          m.done ? "font-semibold text-[#333]" : m.highlight ? "font-semibold text-[#e2752c] hover:underline" : "text-[#888]"
                        }`}
                      >
                        {m.label}
                      </span>
                    </div>
                    );
                  })}
                </div>
              </div>

              {/* Career Journey */}
              <div className="border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-[#2f327d] mb-1">Your Career Journey:</h3>
                <p className="text-sm text-[#888] mb-6">The Tech Explorer&apos;s Path</p>
                <div className="flex items-center justify-between relative">
                  {/* Connecting line */}
                  <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0" />
                  {JOURNEY_STEPS.map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1 relative z-10">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          step.active ? "bg-[#e2752c]" : "bg-gray-100"
                        }`}
                      >
                        <Rocket className={`w-5 h-5 ${step.active ? "text-white" : "text-gray-400"}`} />
                      </div>
                      <span className={`text-xs font-medium text-center ${step.active ? "text-[#e2752c]" : "text-[#999]"}`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recently Applied Jobs */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-[#e2752c] mb-3">Recently Applied Jobs</h3>
                <div className="border border-gray-100 rounded-xl p-8 text-center">
                  <p className="text-sm text-[#999]">It appears you haven&apos;t applied to any jobs</p>
                </div>
              </div>

              {/* Followed Jobs */}
              <div>
                <h3 className="text-base font-bold text-[#e2752c] mb-3">Followed Jobs</h3>
                <div className="border border-gray-100 rounded-xl p-8 text-center">
                  <p className="text-sm text-[#999]">You have not followed any Jobs yet!</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full xl:w-[320px] shrink-0 space-y-6">
              {/* Welcome card */}
              <div className="border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-[#555] leading-relaxed mb-3">
                  Welcome to Jobhatch today! Your goals are waiting! Do your{" "}
                  <span className="font-bold">daily check-in</span> and keep moving forward.
                </p>
                <button
                  onClick={() => setCheckInOpen(true)}
                  className="w-full bg-[#e2752c] text-white font-bold text-sm py-3 rounded-lg hover:brightness-110 transition cursor-pointer"
                >
                  Check-in Now
                </button>
              </div>

              {/* Your Strengths */}
              <div>
                <h3 className="text-lg font-bold text-[#e2752c] mb-2">Your Strengths</h3>
                <div className="flex justify-center">
                  <RadarChart />
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-3">
                  {SKILL_LABELS.map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${s.color}`} />
                      <span className="text-xs text-[#555]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhance Strengths */}
              <div>
                <h3 className="text-base font-bold text-[#2f327d] mb-3">Looking to Enhance Strengths?</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 border-l-4 border-[#2f327d] pl-3">
                    <span className="text-sm text-[#555]">Get Started with skills training &gt;</span>
                  </div>
                  <div className="flex items-center gap-2 border-l-4 border-[#2f327d] pl-3">
                    <span className="text-sm text-[#555]">Review your resume &gt;</span>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <img src="/images/jobhatch/tips-mascot.png" alt="" className="w-20 h-20 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";
import { TokensProvider, useTokensContext } from "./tokens-context";

const SIDEBAR_TOP = [
  { icon: Home, label: "Home", href: "/ai-explorations/jobhatch/dashboard" },
  { icon: User, label: "Profile", href: "/ai-explorations/jobhatch/profile" },
  { icon: FileText, label: "Resume", href: "/ai-explorations/jobhatch/resume" },
  { icon: Briefcase, label: "Jobs", href: "/ai-explorations/jobhatch/jobs" },
  { icon: CalendarDays, label: "Planner", href: "/ai-explorations/jobhatch/planner" },
  { icon: Users, label: "Buddies", href: "/ai-explorations/jobhatch/buddies" },
];

const SIDEBAR_BOTTOM = [
  { icon: Mail, label: "Message" },
  { icon: Monitor, label: "Download APP" },
  { icon: MessageCircle, label: "Feedback" },
  { icon: Settings, label: "Setting" },
];

function JobHatchHeader() {
  const { tokens } = useTokensContext();

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-100 bg-white shrink-0">
      <div className="flex items-center gap-4">
        <Link href="/ai-explorations/jobhatch" className="flex items-end gap-2">
          <div className="bg-[#fcd038] border border-[#2f327d] rounded-lg shadow-[-3px_3px_0px_0px_#2f327d] w-10 h-10 overflow-hidden flex items-center justify-center">
            <img src="/images/jobhatch/logo-chick.png" alt="JobHatch" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-black text-[#2f327d] text-lg tracking-[3px]">JOBHATCH</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-base font-medium text-[#333]">
          <span>
            Liked{" "}
            <span className="bg-[#2f327d] text-white text-sm font-bold px-2 py-0.5 rounded">0</span>
          </span>
          <span>
            Applied{" "}
            <span className="bg-[#2f327d] text-white text-sm font-bold px-2 py-0.5 rounded">0</span>
          </span>
        </div>
        <button className="relative text-[#999] hover:text-[#333] transition">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
          <Settings className="w-4 h-4 text-[#999]" />
          <span className="text-base font-medium text-[#333]">Mia Yue ({tokens} tokens)</span>
          <ChevronDown className="w-3 h-3 text-[#999]" />
        </div>
      </div>
    </header>
  );
}

function JobHatchSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-[220px] h-full bg-white shadow-[1px_0_6px_rgba(0,0,0,0.04)] z-10 px-4 py-6 shrink-0 justify-between overflow-y-auto">
      <div>
        {SIDEBAR_TOP.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.label === "Home"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-4 rounded-lg text-base font-medium transition ${
                isActive
                  ? "bg-[#fff3e0] text-[#e2752c]"
                  : "text-[#666] hover:text-[#e2752c] hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
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
            <div
              key={item.label}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#666] font-medium hover:text-[#e2752c] transition cursor-pointer"
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default function JobHatchAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <TokensProvider>
      <div className="relative bg-white h-screen flex overflow-hidden [&_button]:cursor-pointer [&_a]:cursor-pointer">
        <JobHatchSidebar />
        <div className="flex-1 min-w-0 min-h-0 flex flex-col">
          <JobHatchHeader />
          {children}
        </div>
      </div>
    </TokensProvider>
  );
}

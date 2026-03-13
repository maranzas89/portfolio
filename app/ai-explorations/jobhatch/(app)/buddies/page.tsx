"use client";

import React, { useState } from "react";
import {
  X,
  Send,
  MapPin,
  Coins,
  Target,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Briefcase,
  Users,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Bookmark,
  UserPlus,
  Handshake,
  CalendarCheck,
  FileText,
  Mic,
  Eye,
  BarChart3,
  Zap,
  Info,
  GraduationCap,
  TrendingUp,
  Calendar,
  Search,
} from "lucide-react";

interface MatchReason {
  label: string;
  icon: React.ElementType;
  score: number;
}

interface Buddy {
  name: string;
  initials: string;
  color: string;
  title: string;
  location: string;
  skills: string[];
  tokens: number;
  matchPercent: number;
  status: string;
  recentActivity: { type: "applied" | "interview" | "offer" | "rejected"; text: string; date: string }[];
  applicationsThisWeek: number;
  interviewsScheduled: number;
  currentStage: string;
  bio: string;
  supportStyles: string[];
  matchReasons: MatchReason[];
  sharedGoals: string[];
  availability: string;
}

const BUDDIES: Buddy[] = [
  {
    name: "Alex Rivera",
    initials: "AR",
    color: "#6366f1",
    title: "Product Designer · 4 yrs exp",
    location: "San Francisco, CA",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    tokens: 35,
    matchPercent: 92,
    status: "Active this week",
    recentActivity: [
      { type: "interview", text: "2nd round interview at Notion", date: "2 days ago" },
      { type: "applied", text: "Applied to Figma — Staff Designer", date: "3 days ago" },
      { type: "applied", text: "Applied to Linear — Product Designer", date: "5 days ago" },
    ],
    applicationsThisWeek: 5,
    interviewsScheduled: 2,
    currentStage: "Interview Stage",
    bio: "Transitioning from agency to product. Looking for design peers to practice whiteboard challenges and share feedback.",
    supportStyles: ["Mock Interview Practice", "Portfolio Feedback", "Weekly Check-ins"],
    matchReasons: [
      { label: "Similar Role", icon: Target, score: 40 },
      { label: "Same Industry", icon: Briefcase, score: 30 },
      { label: "Shared Skills", icon: Sparkles, score: 12 },
      { label: "Similar Interview Stage", icon: GraduationCap, score: 10 },
    ],
    sharedGoals: ["Mock interviews", "Portfolio review"],
    availability: "Tue & Thu evenings",
  },
  {
    name: "Jordan Lee",
    initials: "JL",
    color: "#e11d48",
    title: "UX Researcher · 3 yrs exp",
    location: "New York, NY",
    skills: ["User Interviews", "Usability Testing", "Data Analysis", "Figma"],
    tokens: 22,
    matchPercent: 85,
    status: "Active today",
    recentActivity: [
      { type: "offer", text: "Received offer from Spotify!", date: "1 day ago" },
      { type: "interview", text: "Final round at Duolingo", date: "4 days ago" },
      { type: "applied", text: "Applied to Pinterest — UX Researcher", date: "1 week ago" },
    ],
    applicationsThisWeek: 3,
    interviewsScheduled: 1,
    currentStage: "Offer Stage",
    bio: "Just wrapped up a bootcamp and pivoting into UX research. Love connecting with fellow career changers.",
    supportStyles: ["Accountability Partner", "Resume Review", "Referral Exchange"],
    matchReasons: [
      { label: "Same Industry", icon: Briefcase, score: 35 },
      { label: "Similar Role", icon: Target, score: 25 },
      { label: "Shared Skills", icon: Sparkles, score: 15 },
      { label: "Similar Goals", icon: TrendingUp, score: 10 },
    ],
    sharedGoals: ["Resume feedback", "Offer negotiation prep"],
    availability: "Mon & Wed mornings",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    color: "#0284c7",
    title: "Frontend Engineer · 5 yrs exp",
    location: "Seattle, WA",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    tokens: 48,
    matchPercent: 78,
    status: "Active 2 days ago",
    recentActivity: [
      { type: "applied", text: "Applied to Vercel — Frontend Engineer", date: "1 day ago" },
      { type: "rejected", text: "Rejected from Stripe — moved to next", date: "3 days ago" },
      { type: "interview", text: "Phone screen at Shopify", date: "5 days ago" },
    ],
    applicationsThisWeek: 8,
    interviewsScheduled: 3,
    currentStage: "Actively Applying",
    bio: "Senior frontend dev exploring new opportunities. Happy to do mock interviews and code reviews with peers.",
    supportStyles: ["Mock Interview Practice", "Weekly Check-ins", "Portfolio Feedback"],
    matchReasons: [
      { label: "Shared Skills", icon: Sparkles, score: 35 },
      { label: "Same Industry", icon: Briefcase, score: 20 },
      { label: "Similar Stage", icon: GraduationCap, score: 13 },
      { label: "Same Location", icon: MapPin, score: 10 },
    ],
    sharedGoals: ["Weekly application check-ins", "Mock interviews"],
    availability: "Weekday evenings",
  },
  {
    name: "Chris Nakamura",
    initials: "CN",
    color: "#16a34a",
    title: "Product Manager · 6 yrs exp",
    location: "Austin, TX",
    skills: ["Product Strategy", "SQL", "A/B Testing", "Roadmapping"],
    tokens: 15,
    matchPercent: 71,
    status: "Active today",
    recentActivity: [
      { type: "interview", text: "Case study presentation at Airbnb", date: "Today" },
      { type: "applied", text: "Applied to Coinbase — Sr. PM", date: "2 days ago" },
      { type: "applied", text: "Applied to Block — PM Lead", date: "4 days ago" },
    ],
    applicationsThisWeek: 4,
    interviewsScheduled: 2,
    currentStage: "Interview Stage",
    bio: "Ex-Amazon PM looking for my next chapter. Big on structured prep and accountability partnerships.",
    supportStyles: ["Accountability Partner", "Mock Interview Practice", "Resume Review"],
    matchReasons: [
      { label: "Similar Interview Stage", icon: GraduationCap, score: 30 },
      { label: "Same Industry", icon: Briefcase, score: 22 },
      { label: "Similar Goals", icon: TrendingUp, score: 12 },
      { label: "Similar Role", icon: Target, score: 7 },
    ],
    sharedGoals: ["Structured prep sessions", "Accountability check-ins"],
    availability: "Sat mornings",
  },
  {
    name: "Taylor Kim",
    initials: "TK",
    color: "#ea580c",
    title: "UI/Visual Designer · 2 yrs exp",
    location: "Los Angeles, CA",
    skills: ["Visual Design", "Illustration", "Figma", "Motion Design"],
    tokens: 30,
    matchPercent: 88,
    status: "Active yesterday",
    recentActivity: [
      { type: "applied", text: "Applied to Apple — Visual Designer", date: "1 day ago" },
      { type: "applied", text: "Applied to Netflix — UI Designer", date: "3 days ago" },
      { type: "interview", text: "Portfolio review at Google", date: "1 week ago" },
    ],
    applicationsThisWeek: 6,
    interviewsScheduled: 1,
    currentStage: "Actively Applying",
    bio: "Visual designer with a love for motion. Looking for buddies to trade portfolio feedback and stay motivated.",
    supportStyles: ["Portfolio Feedback", "Weekly Check-ins", "Referral Exchange"],
    matchReasons: [
      { label: "Similar Role", icon: Target, score: 38 },
      { label: "Shared Skills", icon: Sparkles, score: 28 },
      { label: "Same Industry", icon: Briefcase, score: 14 },
      { label: "Similar Goals", icon: TrendingUp, score: 8 },
    ],
    sharedGoals: ["Portfolio review", "Application motivation"],
    availability: "Flexible schedule",
  },
];

const MATCH_CRITERIA = [
  { label: "Same Industry", icon: Briefcase },
  { label: "Similar Role", icon: Target },
  { label: "Same Location", icon: MapPin },
  { label: "Shared Skills", icon: Sparkles },
  { label: "Similar Stage", icon: GraduationCap },
  { label: "Similar Goals", icon: TrendingUp },
];

const PRIORITY_OPTIONS = ["High", "Medium", "Low"] as const;

const SUGGESTED_ACTIVITIES = [
  { label: "Mock Interviews", icon: Mic },
  { label: "Resume Feedback", icon: FileText },
  { label: "Portfolio Review", icon: Eye },
  { label: "Weekly Check-ins", icon: CalendarCheck },
  { label: "Application Accountability", icon: BarChart3 },
  { label: "Offer Negotiation Prep", icon: Handshake },
];

const activityIcon = (type: string) => {
  switch (type) {
    case "applied": return <ArrowRight className="w-4 h-4 text-[#3b82f6]" strokeWidth={3} />;
    case "interview": return <Clock className="w-4 h-4 text-[#e2752c]" strokeWidth={3} />;
    case "offer": return <CheckCircle2 className="w-4 h-4 text-[#16a34a]" strokeWidth={3} />;
    case "rejected": return <X className="w-4 h-4 text-[#ef4444]" strokeWidth={3} />;
    default: return null;
  }
};

const stageColor = (stage: string) => {
  if (stage.includes("Offer")) return "bg-[#ecfdf5] text-[#16a34a]";
  if (stage.includes("Interview")) return "bg-[#fef3e2] text-[#e2752c]";
  return "bg-[#f3f4f6] text-[#555]";
};

const supportStyleIcon = (style: string) => {
  if (style.includes("Mock")) return Mic;
  if (style.includes("Portfolio")) return Eye;
  if (style.includes("Resume")) return FileText;
  if (style.includes("Accountability")) return CalendarCheck;
  if (style.includes("Check-in")) return CalendarCheck;
  if (style.includes("Referral")) return Handshake;
  return Zap;
};

export default function BuddiesPage() {
  const [selectedBuddy, setSelectedBuddy] = useState<number | null>(null);
  const [matchedBuddies, setMatchedBuddies] = useState<Set<number>>(new Set());
  const [skippedBuddies, setSkippedBuddies] = useState<Set<number>>(new Set());
  const [savedBuddies, setSavedBuddies] = useState<Set<number>>(new Set());
  const [messageText, setMessageText] = useState("");
  const [chatMessages, setChatMessages] = useState<Record<number, { from: string; text: string; time: string }[]>>({});
  const [activeView, setActiveView] = useState<"discover" | "matched" | "chat">("discover");
  const [selectedCriteria, setSelectedCriteria] = useState<Set<string>>(new Set(["Same Industry", "Similar Role"]));
  const [criteriaPriority, setCriteriaPriority] = useState<Record<string, string>>({
    "Same Industry": "High",
    "Similar Role": "High",
    "Same Location": "Medium",
    "Shared Skills": "Medium",
    "Similar Stage": "Low",
    "Similar Goals": "Low",
  });
  const [showMatchDetails, setShowMatchDetails] = useState(true);
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(new Set(["Mock Interviews", "Resume Feedback"]));

  const currentBuddyIndex = BUDDIES.findIndex((_, i) => !matchedBuddies.has(i) && !skippedBuddies.has(i));
  const currentBuddy = currentBuddyIndex >= 0 ? BUDDIES[currentBuddyIndex] : null;

  const handleMatch = (index: number) => {
    setMatchedBuddies((prev) => new Set([...prev, index]));
    setShowMatchDetails(false);
  };

  const handleSkip = (index: number) => {
    setSkippedBuddies((prev) => new Set([...prev, index]));
    setShowMatchDetails(false);
  };

  const handleSave = (index: number) => {
    setSavedBuddies((prev) => new Set([...prev, index]));
    setShowMatchDetails(false);
  };

  const sendMessage = (buddyIndex: number) => {
    if (!messageText.trim()) return;
    const buddy = BUDDIES[buddyIndex];
    setChatMessages((prev) => ({
      ...prev,
      [buddyIndex]: [...(prev[buddyIndex] || []), { from: "you", text: messageText, time: "Just now" }],
    }));
    setMessageText("");
    setTimeout(() => {
      setChatMessages((prev) => ({
        ...prev,
        [buddyIndex]: [...(prev[buddyIndex] || []), {
          from: buddy.name,
          text: "Hey! Great to connect. I'd love to do a mock interview session sometime this week. What topics are you focusing on?",
          time: "Just now",
        }],
      }));
    }, 1500);
  };

  return (
    <div className="flex-1 min-h-0 bg-[#fdf8e8] overflow-y-auto scrollbar-hide p-[52px]" style={{ scrollbarWidth: "none" }}>
      <div className="bg-white rounded-2xl mx-auto w-full px-8 md:px-14 py-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-black text-[#333] text-[40px] tracking-[3px] mb-1">BUDDIES</h1>
            <p className="text-base font-semibold text-[#999]">Match with peers on similar career paths and support each other&apos;s journey</p>
          </div>
          <div className="flex bg-[#f3f4f6] rounded-lg overflow-hidden">
            {(["discover", "matched", "chat"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveView(tab)} className={`px-5 py-2.5 text-base font-semibold capitalize transition cursor-pointer ${activeView === tab ? "bg-[#e2752c] text-white" : "text-[#555] hover:bg-gray-50"}`}>
                {tab === "discover" ? "Discover" : tab === "matched" ? `Matched (${matchedBuddies.size})` : "Chat"}
              </button>
            ))}
          </div>
        </div>

        {activeView === "discover" && (
          <div className="grid grid-cols-3 gap-6">
            {/* Left: Match Preferences & Stats */}
            <div className="col-span-1 space-y-6">
              <h2 className="text-xl font-black text-[#333]">Match Preferences</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
                {MATCH_CRITERIA.map((criteria) => {
                  const Icon = criteria.icon;
                  const isSelected = selectedCriteria.has(criteria.label);
                  const priority = criteriaPriority[criteria.label] || "Medium";
                  return (
                    <div key={criteria.label} className="space-y-1.5">
                      <button
                        onClick={() => {
                          const next = new Set(selectedCriteria);
                          if (isSelected) next.delete(criteria.label); else next.add(criteria.label);
                          setSelectedCriteria(next);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition cursor-pointer ${isSelected ? "bg-[#fef3e2] text-[#e2752c]" : "text-[#555] hover:bg-gray-50"}`}
                      >
                        <Icon className="w-4 h-4" />
                        {criteria.label}
                        {isSelected && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                      </button>
                      {isSelected && (
                        <div className="flex gap-1.5 pl-11">
                          {PRIORITY_OPTIONS.map((p) => (
                            <button
                              key={p}
                              onClick={() => setCriteriaPriority((prev) => ({ ...prev, [criteria.label]: p }))}
                              className={`text-xs font-medium px-2.5 py-1 rounded-md transition cursor-pointer ${
                                priority === p
                                  ? p === "High" ? "bg-[#e2752c] text-white" : p === "Medium" ? "bg-[#fef3e2] text-[#e2752c]" : "bg-gray-100 text-[#555]"
                                  : "bg-gray-50 text-[#aaa] hover:bg-gray-100"
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Buddy Stats */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-[#333] mb-4">Your Buddy Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-[#fef3e2] flex items-center justify-center shrink-0">
                      <UserPlus className="w-4 h-4 text-[#e2752c]" />
                    </div>
                    <span className="text-[#555] flex-1">Matches this week</span>
                    <span className="font-bold text-[#333]">{matchedBuddies.size}</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#6366f1]" />
                    </div>
                    <span className="text-[#555] flex-1">Conversations started</span>
                    <span className="font-bold text-[#333]">{Object.keys(chatMessages).length}</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-[#ecfdf5] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[#16a34a]" />
                    </div>
                    <span className="text-[#555] flex-1">Active buddies</span>
                    <span className="font-bold text-[#333]">{matchedBuddies.size}</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-[#fef3e2] flex items-center justify-center shrink-0">
                      <Bookmark className="w-4 h-4 text-[#e2752c]" />
                    </div>
                    <span className="text-[#555] flex-1">Saved for later</span>
                    <span className="font-bold text-[#333]">{savedBuddies.size}</span>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <div className="w-9 h-9 rounded-lg bg-[#f3f4f6] flex items-center justify-center shrink-0">
                      <X className="w-4 h-4 text-[#888]" />
                    </div>
                    <span className="text-[#555] flex-1">Skipped today</span>
                    <span className="font-bold text-[#333]">{skippedBuddies.size}</span>
                  </div>
                </div>
              </div>

              {/* Shared Goals Preview */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-lg font-bold text-[#333] mb-4">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#e2752c]" /> Buddy Activities</span>
                </h3>
                <p className="text-sm text-[#888] mb-5">Select what you want to do with buddies</p>
                <div className="flex flex-wrap gap-3">
                  {SUGGESTED_ACTIVITIES.map((activity) => {
                    const Icon = activity.icon;
                    const isSelected = selectedActivities.has(activity.label);
                    return (
                      <button
                        key={activity.label}
                        onClick={() => {
                          const next = new Set(selectedActivities);
                          if (isSelected) next.delete(activity.label); else next.add(activity.label);
                          setSelectedActivities(next);
                        }}
                        className={`flex items-center gap-1.5 text-sm font-medium px-3.5 py-2.5 rounded-lg transition cursor-pointer ${
                          isSelected ? "bg-[#e2752c] text-white" : "bg-[#f3f4f6] text-[#555] hover:bg-[#e8e9eb]"
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        {activity.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Middle + Right: Current Buddy Card */}
            <div className="col-span-2">
              <h2 className="text-xl font-black text-[#333] mb-6">Buddie</h2>
              {currentBuddy ? (
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  {/* Info bar */}
                  <div className="px-8 pt-6">
                    <div className="flex items-start gap-3 bg-[#f0f4ff] rounded-lg px-5 py-4">
                      <Info className="w-5 h-5 text-[#6366f1] mt-0.5 shrink-0" />
                      <p className="text-sm text-[#555] leading-relaxed">
                        If you connect, you can start a chat, share weekly goals, exchange feedback, and stay accountable together.
                      </p>
                    </div>
                  </div>
                  {/* Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-5">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0" style={{ backgroundColor: currentBuddy.color }}>
                        {currentBuddy.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="-mt-[10px]">
                            <h2 className="text-4xl font-black text-[#333]">{currentBuddy.name}</h2>
                            <p className="text-lg text-[#888] mt-0.5 font-bold">{currentBuddy.title}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="relative w-[80px] h-[80px] shrink-0">
                              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                                <defs>
                                  <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#f59e0b" />
                                    <stop offset="100%" stopColor="#e2752c" />
                                  </linearGradient>
                                </defs>
                                <circle cx="40" cy="40" r="34" fill="none" stroke="#f0e6d2" strokeWidth="5" />
                                <circle cx="40" cy="40" r="34" fill="none" stroke="url(#matchGradient)" strokeWidth="5" strokeLinecap="round"
                                  strokeDasharray={`${2 * Math.PI * 34 * currentBuddy.matchPercent / 100} ${2 * Math.PI * 34}`} />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-black text-[#333]">{currentBuddy.matchPercent}%</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <button
                                onClick={() => handleMatch(currentBuddyIndex)}
                                className="flex items-center justify-center gap-2 w-[120px] py-2.5 rounded-xl bg-[#e2752c] text-white text-sm font-bold hover:brightness-110 transition cursor-pointer"
                              >
                                <UserPlus className="w-4 h-4" />
                                Connect
                              </button>
                              <button
                                onClick={() => handleSkip(currentBuddyIndex)}
                                className="flex items-center justify-center gap-2 w-[120px] py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-[#888] hover:bg-red-50 hover:border-red-200 hover:text-red-400 transition cursor-pointer"
                              >
                                <X className="w-4 h-4" />
                                Skip
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-base text-[#888]"><MapPin className="w-4 h-4" />{currentBuddy.location}</span>
                      <span className="flex items-center gap-1.5 text-base text-[#888]"><Coins className="w-4 h-4" />{currentBuddy.tokens} tokens</span>
                      <span className={`text-base font-semibold px-3 py-1 rounded-full ${stageColor(currentBuddy.currentStage)}`}>{currentBuddy.currentStage}</span>
                    </div>
                    <p className="text-lg text-[#888] mt-5 leading-relaxed font-semibold">{currentBuddy.bio}</p>

                    {/* Support Style Tags */}
                    <div className="mt-5">
                      <p className="text-lg font-bold text-[#333] mb-4 flex items-center gap-2"><Search className="w-5 h-5 text-[#e2752c]" />Looking for</p>
                      <div className="flex flex-wrap gap-2">
                        {currentBuddy.supportStyles.map((style) => {
                          const Icon = supportStyleIcon(style);
                          return (
                            <span key={style} className="flex items-center gap-2 text-base font-medium bg-[#eef2ff] text-[#4f46e5] px-5 py-3 rounded-lg">
                              <Icon className="w-4 h-4" />
                              {style}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="px-8 pb-6">
                    <h3 className="text-lg font-bold text-[#333] mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5 text-[#e2752c]" />Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentBuddy.skills.map((skill) => (
                        <span key={skill} className="text-base font-medium bg-[#fef3e2] text-[#e2752c] px-4 py-2 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Why You Match */}
                  <div className="px-8 pb-6">
                    <h3 className="text-lg font-bold text-[#333] mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#e2752c]" />
                      Why you match
                    </h3>
                      <div className="rounded-xl p-5 space-y-5 mt-3 border border-gray-200">
                        <p className="text-sm font-semibold text-[#888] mb-4">Match score breakdown</p>
                        {currentBuddy.matchReasons.map((reason) => {
                          const Icon = reason.icon;
                          return (
                            <div key={reason.label} className="flex items-center gap-3">
                              <Icon className="w-4 h-4 text-[#e2752c] shrink-0" />
                              <span className="text-sm font-medium text-[#555] w-[170px] shrink-0 whitespace-nowrap">{reason.label}</span>
                              <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full rounded-full transition-all" style={{ width: `${reason.score * 2.5}%`, background: "linear-gradient(to right, #f59e0b, #e2752c)" }} />
                              </div>
                              <span className="text-sm font-bold text-[#333] w-10 text-right">{reason.score}%</span>
                            </div>
                          );
                        })}
                        {/* Shared goals */}
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-sm font-semibold text-[#888] mb-2">Shared goals</p>
                          <div className="flex gap-2">
                            {currentBuddy.sharedGoals.map((goal) => (
                              <span key={goal} className="text-sm font-medium bg-white text-[#555] px-3 py-1.5 rounded-md border border-gray-200">{goal}</span>
                            ))}
                          </div>
                        </div>
                        {/* Availability */}
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-sm text-[#888]">
                            <span className="font-semibold">Best overlap:</span> <span className="font-bold text-[#333]">{currentBuddy.availability}</span>
                          </p>
                        </div>
                      </div>
                  </div>

                  {/* Job Search Activity */}
                  <div className="px-8 pb-6">
                    <h3 className="text-lg font-bold text-[#333] mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#e2752c]" />Job Search Activity</h3>
                    <div className="grid grid-cols-3 gap-4 mb-5">
                      <div className="bg-[#f9fafb] rounded-lg p-4 text-center">
                        <p className="text-4xl font-black text-[#333]">{currentBuddy.applicationsThisWeek}</p>
                        <p className="text-base text-[#888] font-medium mt-1">Applied this week</p>
                      </div>
                      <div className="bg-[#f9fafb] rounded-lg p-4 text-center">
                        <p className="text-4xl font-black text-[#333]">{currentBuddy.interviewsScheduled}</p>
                        <p className="text-base text-[#888] font-medium mt-1">Interviews scheduled</p>
                      </div>
                      <div className="bg-[#f9fafb] rounded-lg p-4 text-center">
                        <p className="text-4xl font-black text-[#e2752c]">{currentBuddy.status.includes("today") ? "Active" : "Recent"}</p>
                        <p className="text-base text-[#888] font-medium mt-1">{currentBuddy.status}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {currentBuddy.recentActivity.map((activity, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1">{activityIcon(activity.type)}</div>
                          <div className="flex-1">
                            <p className="text-[#333] text-sm font-bold">{activity.text}</p>
                            <p className="text-sm text-[#aaa] font-medium">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
                  <Users className="w-16 h-16 text-[#ddd] mx-auto mb-4" />
                  <h2 className="text-xl font-black text-[#333] mb-2">All caught up!</h2>
                  <p className="text-base text-[#888]">You&apos;ve reviewed all available buddies. Check back later for new matches.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeView === "matched" && (
          <div className="grid grid-cols-2 gap-4">
            {matchedBuddies.size === 0 ? (
              <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-16 text-center">
                <UserPlus className="w-12 h-12 text-[#ddd] mx-auto mb-3" />
                <h2 className="text-xl font-black text-[#333] mb-2">No matches yet</h2>
                <p className="text-base text-[#888]">Start discovering buddies to find your match!</p>
                <button onClick={() => setActiveView("discover")} className="mt-4 bg-[#e2752c] text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:brightness-110 transition cursor-pointer">Discover Buddies</button>
              </div>
            ) : (
              Array.from(matchedBuddies).map((i) => {
                const buddy = BUDDIES[i];
                return (
                  <div key={buddy.name} className="bg-white rounded-xl border border-gray-200 p-7">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: buddy.color }}>
                        {buddy.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-[#333] text-sm">{buddy.name}</p>
                          <span className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${stageColor(buddy.currentStage)}`}>{buddy.currentStage}</span>
                        </div>
                        <p className="text-sm text-[#888] mt-0.5">{buddy.title}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {buddy.supportStyles.map((style) => (
                            <span key={style} className="text-xs font-medium bg-[#eef2ff] text-[#4f46e5] px-2 py-0.5 rounded-full">{style}</span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {buddy.skills.map((skill) => (
                            <span key={skill} className="text-xs font-medium bg-[#fef3e2] text-[#e2752c] px-2 py-0.5 rounded-full">{skill}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-sm text-[#888]">
                          <span>{buddy.applicationsThisWeek} apps this week</span>
                          <span>{buddy.interviewsScheduled} interviews</span>
                        </div>
                        <button
                          onClick={() => { setSelectedBuddy(i); setActiveView("chat"); }}
                          className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-[#e2752c] hover:underline cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />Send a message
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {activeView === "chat" && (
          <div className="grid grid-cols-3 gap-6 h-[calc(100vh-240px)]">
            {/* Contact List */}
            <div className="col-span-1 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-[#333]">Matched Buddies</h3>
              </div>
              <div className="flex-1 overflow-y-auto">
                {matchedBuddies.size === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-sm text-[#888]">Match with buddies first to chat</p>
                  </div>
                ) : (
                  Array.from(matchedBuddies).map((i) => {
                    const buddy = BUDDIES[i];
                    return (
                      <div
                        key={buddy.name}
                        onClick={() => setSelectedBuddy(i)}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${selectedBuddy === i ? "bg-[#fef3e2]" : "hover:bg-gray-50"}`}
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: buddy.color }}>
                          {buddy.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-semibold text-[#333] truncate">{buddy.name}</p>
                          <p className="text-sm text-[#888] truncate">{buddy.currentStage}</p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
              {selectedBuddy !== null && matchedBuddies.has(selectedBuddy) ? (
                <>
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: BUDDIES[selectedBuddy].color }}>
                      {BUDDIES[selectedBuddy].initials}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#333] text-sm">{BUDDIES[selectedBuddy].name}</p>
                      <p className="text-xs text-[#16a34a]">{BUDDIES[selectedBuddy].status}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#888]">
                      <span className={`font-semibold px-2 py-0.5 rounded-full ${stageColor(BUDDIES[selectedBuddy].currentStage)}`}>{BUDDIES[selectedBuddy].currentStage}</span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {(!chatMessages[selectedBuddy] || chatMessages[selectedBuddy].length === 0) && (
                      <div className="text-center py-10">
                        <MessageCircle className="w-10 h-10 text-[#ddd] mx-auto mb-3" />
                        <p className="text-base text-[#888]">Say hi to {BUDDIES[selectedBuddy].name}!</p>
                        <p className="text-sm text-[#aaa] mt-1">You both matched — start the conversation</p>
                      </div>
                    )}
                    {(chatMessages[selectedBuddy] || []).map((msg, i) => (
                      <div key={i} className={`flex ${msg.from === "you" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm ${msg.from === "you" ? "bg-[#e2752c] text-white rounded-br-sm" : "bg-[#f3f4f6] text-[#333] rounded-bl-sm"}`}>
                          <p>{msg.text}</p>
                          <p className={`text-xs mt-1 ${msg.from === "you" ? "text-white/60" : "text-[#aaa]"}`}>{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-100 flex gap-2">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage(selectedBuddy)}
                      placeholder="Type a message..."
                      className="flex-1 bg-[#f9fafb] rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#e2752c]/30"
                    />
                    <button onClick={() => sendMessage(selectedBuddy)} className="bg-[#e2752c] text-white p-2.5 rounded-lg hover:brightness-110 transition cursor-pointer">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-base text-[#888]">Select a matched buddy to start chatting</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

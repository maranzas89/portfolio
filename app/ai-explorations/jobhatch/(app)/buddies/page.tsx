"use client";

import React, { useState } from "react";
import {
  Heart,
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
} from "lucide-react";

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
  },
];

const MATCH_CRITERIA = [
  { label: "Same Industry", icon: Briefcase },
  { label: "Similar Role", icon: Target },
  { label: "Same Location", icon: MapPin },
  { label: "Shared Skills", icon: Sparkles },
];

const activityIcon = (type: string) => {
  switch (type) {
    case "applied": return <ArrowRight className="w-3 h-3 text-[#3b82f6]" />;
    case "interview": return <Clock className="w-3 h-3 text-[#e2752c]" />;
    case "offer": return <CheckCircle2 className="w-3 h-3 text-[#16a34a]" />;
    case "rejected": return <X className="w-3 h-3 text-[#ef4444]" />;
    default: return null;
  }
};

const stageColor = (stage: string) => {
  if (stage.includes("Offer")) return "bg-[#ecfdf5] text-[#16a34a]";
  if (stage.includes("Interview")) return "bg-[#fef3e2] text-[#e2752c]";
  return "bg-[#f3f4f6] text-[#555]";
};

export default function BuddiesPage() {
  const [selectedBuddy, setSelectedBuddy] = useState<number | null>(null);
  const [matchedBuddies, setMatchedBuddies] = useState<Set<number>>(new Set());
  const [skippedBuddies, setSkippedBuddies] = useState<Set<number>>(new Set());
  const [messageText, setMessageText] = useState("");
  const [chatMessages, setChatMessages] = useState<Record<number, { from: string; text: string; time: string }[]>>({});
  const [activeView, setActiveView] = useState<"discover" | "matched" | "chat">("discover");
  const [selectedCriteria, setSelectedCriteria] = useState<Set<string>>(new Set(["Same Industry", "Similar Role"]));

  const currentBuddyIndex = BUDDIES.findIndex((_, i) => !matchedBuddies.has(i) && !skippedBuddies.has(i));
  const currentBuddy = currentBuddyIndex >= 0 ? BUDDIES[currentBuddyIndex] : null;

  const handleMatch = (index: number) => {
    setMatchedBuddies((prev) => new Set([...prev, index]));
  };

  const handleSkip = (index: number) => {
    setSkippedBuddies((prev) => new Set([...prev, index]));
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
              <button key={tab} onClick={() => setActiveView(tab)} className={`px-5 py-2.5 text-base font-semibold capitalize transition ${activeView === tab ? "bg-[#e2752c] text-white" : "text-[#555] hover:bg-gray-50"}`}>
                {tab === "discover" ? "Discover" : tab === "matched" ? `Matched (${matchedBuddies.size})` : "Chat"}
              </button>
            ))}
          </div>
        </div>

        {activeView === "discover" && (
          <div className="grid grid-cols-3 gap-6">
            {/* Left: Match Criteria */}
            <div className="col-span-1 space-y-4">
              <h2 className="text-xl font-black text-[#333]">Match Preferences</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-7 space-y-4">
                {MATCH_CRITERIA.map((criteria) => {
                  const Icon = criteria.icon;
                  const isSelected = selectedCriteria.has(criteria.label);
                  return (
                    <button
                      key={criteria.label}
                      onClick={() => {
                        const next = new Set(selectedCriteria);
                        if (isSelected) next.delete(criteria.label); else next.add(criteria.label);
                        setSelectedCriteria(next);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition ${isSelected ? "bg-[#fef3e2] text-[#e2752c]" : "text-[#555] hover:bg-gray-50"}`}
                    >
                      <Icon className="w-4 h-4" />
                      {criteria.label}
                      {isSelected && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                    </button>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="bg-white rounded-xl border border-gray-200 p-7">
                <h3 className="text-lg font-bold text-[#333] mb-3">Your Buddy Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#888]">Matched</span>
                    <span className="font-bold text-[#333]">{matchedBuddies.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#888]">Skipped</span>
                    <span className="font-bold text-[#333]">{skippedBuddies.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#888]">Remaining</span>
                    <span className="font-bold text-[#333]">{BUDDIES.length - matchedBuddies.size - skippedBuddies.size}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle + Right: Current Buddy Card */}
            <div className="col-span-2">
              {currentBuddy ? (
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="p-7 pb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0" style={{ backgroundColor: currentBuddy.color }}>
                        {currentBuddy.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-xl font-black text-[#333]">{currentBuddy.name}</h2>
                            <p className="text-base text-[#888] mt-0.5">{currentBuddy.title}</p>
                          </div>
                          {/* Match Score */}
                          <div className="flex items-center gap-2">
                            <div className="relative w-[50px] h-[50px]">
                              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="34" fill="none" stroke="#f0e6d2" strokeWidth="5" />
                                <circle cx="40" cy="40" r="34" fill="none" stroke="#e2752c" strokeWidth="5" strokeLinecap="round"
                                  strokeDasharray={`${2 * Math.PI * 34 * currentBuddy.matchPercent / 100} ${2 * Math.PI * 34}`} />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-sm font-black text-[#333]">{currentBuddy.matchPercent}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-sm text-[#888]"><MapPin className="w-3 h-3" />{currentBuddy.location}</span>
                          <span className="flex items-center gap-1 text-sm text-[#888]"><Coins className="w-3 h-3" />{currentBuddy.tokens} tokens</span>
                          <span className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${stageColor(currentBuddy.currentStage)}`}>{currentBuddy.currentStage}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-[#64748b] mt-4 leading-relaxed">{currentBuddy.bio}</p>
                  </div>

                  {/* Skills */}
                  <div className="px-7 pb-5">
                    <h3 className="text-sm font-bold text-[#aaa] uppercase tracking-wider mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentBuddy.skills.map((skill) => (
                        <span key={skill} className="text-base font-medium bg-[#fef3e2] text-[#e2752c] px-3 py-1.5 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Job Search Activity */}
                  <div className="px-7 pb-5">
                    <h3 className="text-sm font-bold text-[#aaa] uppercase tracking-wider mb-3">Job Search Activity</h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-[#f9fafb] rounded-lg p-3 text-center">
                        <p className="text-xl font-black text-[#333]">{currentBuddy.applicationsThisWeek}</p>
                        <p className="text-xs text-[#888] font-medium">Applied this week</p>
                      </div>
                      <div className="bg-[#f9fafb] rounded-lg p-3 text-center">
                        <p className="text-xl font-black text-[#333]">{currentBuddy.interviewsScheduled}</p>
                        <p className="text-xs text-[#888] font-medium">Interviews scheduled</p>
                      </div>
                      <div className="bg-[#f9fafb] rounded-lg p-3 text-center">
                        <p className="text-xl font-black text-[#e2752c]">{currentBuddy.status.includes("today") ? "Active" : "Recent"}</p>
                        <p className="text-xs text-[#888] font-medium">{currentBuddy.status}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {currentBuddy.recentActivity.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm">
                          <div className="mt-1">{activityIcon(activity.type)}</div>
                          <div className="flex-1">
                            <p className="text-[#333] text-xs">{activity.text}</p>
                            <p className="text-xs text-[#aaa]">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-7 py-5 bg-[#f9fafb] border-t border-gray-100 flex items-center justify-center gap-4">
                    <button
                      onClick={() => handleSkip(currentBuddyIndex)}
                      className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition shadow-sm"
                    >
                      <X className="w-6 h-6 text-[#999]" />
                    </button>
                    <button
                      onClick={() => handleMatch(currentBuddyIndex)}
                      className="w-16 h-16 rounded-full bg-[#e2752c] flex items-center justify-center hover:brightness-110 transition shadow-lg shadow-[#e2752c]/20"
                    >
                      <Heart className="w-7 h-7 text-white fill-white" />
                    </button>
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
                <Heart className="w-12 h-12 text-[#ddd] mx-auto mb-3" />
                <h2 className="text-xl font-black text-[#333] mb-2">No matches yet</h2>
                <p className="text-base text-[#888]">Start discovering buddies to find your match!</p>
                <button onClick={() => setActiveView("discover")} className="mt-4 bg-[#e2752c] text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:brightness-110 transition">Discover Buddies</button>
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
                          {buddy.skills.map((skill) => (
                            <span key={skill} className="text-xs font-medium bg-[#fef3e2] text-[#e2752c] px-2 py-0.5 rounded-full">{skill}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-sm text-[#888]">
                          <span>{buddy.applicationsThisWeek} apps this week</span>
                          <span>{buddy.interviewsScheduled} interviews</span>
                          <span>{buddy.tokens} tokens</span>
                        </div>
                        <button
                          onClick={() => { setSelectedBuddy(i); setActiveView("chat"); }}
                          className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-[#e2752c] hover:underline"
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
                      <span>{BUDDIES[selectedBuddy].tokens} tokens</span>
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
                    <button onClick={() => sendMessage(selectedBuddy)} className="bg-[#e2752c] text-white p-2.5 rounded-lg hover:brightness-110 transition">
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

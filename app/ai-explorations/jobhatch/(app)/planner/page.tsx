"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Video,
  Star,
  Send,
  Linkedin,
  MessageSquare,
  Mail,
  Users,
  Phone,
  Presentation,
  CircleCheckBig,
  CalendarDays,
  X,
} from "lucide-react";
import { useTokensContext } from "../tokens-context";

const MENTORS = [
  {
    name: "Sarah Chen",
    initials: "SC",
    color: "#6366f1",
    title: "Senior Product Manager @ Google",
    rating: 4.9,
    sessions: 128,
    expertise: ["Product Strategy", "Career Pivot", "FAANG Prep"],
    cost: 15,
    availability: "Available this week",
    bio: "10+ years in product management. Helped 50+ mentees land PM roles at top tech companies.",
  },
  {
    name: "Marcus Johnson",
    initials: "MJ",
    color: "#e11d48",
    title: "Engineering Director @ Meta",
    rating: 4.8,
    sessions: 95,
    expertise: ["System Design", "Leadership", "Interview Prep"],
    cost: 20,
    availability: "Next available: Thu",
    bio: "Former startup CTO turned big tech leader. Specializes in senior/staff level interview coaching.",
  },
  {
    name: "Emily Park",
    initials: "EP",
    color: "#0284c7",
    title: "UX Design Lead @ Airbnb",
    rating: 5.0,
    sessions: 73,
    expertise: ["Portfolio Review", "Design Systems", "UX Strategy"],
    cost: 12,
    availability: "Available today",
    bio: "Passionate about helping designers tell their story. Expert in portfolio optimization.",
  },
  {
    name: "David Kim",
    initials: "DK",
    color: "#16a34a",
    title: "Staff Engineer @ Stripe",
    rating: 4.7,
    sessions: 61,
    expertise: ["Coding Interview", "System Design", "Negotiation"],
    cost: 18,
    availability: "Available tomorrow",
    bio: "Stripe staff engineer with 12 years of experience. Strong track record in compensation negotiation.",
  },
];

const TOPICS = [
  "Resume Review",
  "Mock Interview",
  "Portfolio Review",
  "Career Strategy",
  "Salary Negotiation",
  "System Design Prep",
  "Behavioral Interview",
  "Job Search Strategy",
];

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function PlannerPage() {
  const { tokens, spendTokens } = useTokensContext();
  const [showInsufficientTokens, setShowInsufficientTokens] = useState(false);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null);
  const [showBookingConfirm, setShowBookingConfirm] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<{ from: string; text: string; time: string }[]>([]);
  const [sessionMode, setSessionMode] = useState<"video" | "inperson" | "phone" | "workshop">("video");
  const [activeTab, setActiveTab] = useState<"book" | "upcoming" | "chat">("book");

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const [bookedSessions, setBookedSessions] = useState<
    { mentor: string; topic: string; date: string; time: string; status: "confirmed" | "pending"; mode: string }[]
  >([
    { mentor: "Emily Park", topic: "Portfolio Review", date: "Mar 15, 2026", time: "2:00 PM", status: "confirmed", mode: "Video Call" },
    { mentor: "Sarah Chen", topic: "Career Strategy", date: "Mar 18, 2026", time: "10:00 AM", status: "pending", mode: "Video Call" },
  ]);

  const handleBook = () => {
    if (selectedMentor !== null && selectedDate && selectedTime && selectedTopic) {
      setShowBookingConfirm(true);
    }
  };

  const SESSION_MODE_LABELS: Record<string, string> = { video: "Video Call", inperson: "In Person", phone: "Phone Call", workshop: "Workshop" };

  const confirmBooking = () => {
    if (selectedMentor !== null && selectedDate && selectedTime && selectedTopic) {
      const cost = MENTORS[selectedMentor].cost;
      if (tokens < cost) {
        setShowBookingConfirm(false);
        setShowInsufficientTokens(true);
        return;
      }
      spendTokens(cost);

      // Build date string
      const dateStr = `${MONTH_NAMES[currentMonth].slice(0, 3)} ${selectedDate}, ${currentYear}`;

      // Add to booked sessions
      setBookedSessions((prev) => [
        { mentor: MENTORS[selectedMentor].name, topic: selectedTopic!, date: dateStr, time: selectedTime!, status: "confirmed", mode: SESSION_MODE_LABELS[sessionMode] },
        ...prev,
      ]);

      setShowBookingConfirm(false);
      setActiveTab("upcoming");
      setBookingComplete(true);
      setTimeout(() => setBookingComplete(false), 3000);

      // Reset selections
      setSelectedMentor(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setSelectedTopic(null);
    }
  };

  const sendMessage = () => {
    if (messageText.trim() && selectedMentor !== null) {
      setMessages([...messages, { from: "you", text: messageText, time: "Just now" }]);
      setMessageText("");
      setTimeout(() => {
        setMessages((prev) => [...prev, {
          from: MENTORS[selectedMentor!].name,
          text: "Thanks for reaching out! I'd be happy to help. Let me review your profile and get back to you shortly.",
          time: "Just now",
        }]);
      }, 1500);
    }
  };

  return (
    <>
      {/* Content */}
      <div className="flex-1 min-h-0 bg-[#fdf8e8] overflow-y-auto scrollbar-hide p-4 sm:p-6 md:p-8 lg:p-[52px]" style={{ scrollbarWidth: "none" }}>
        <div className="bg-white rounded-2xl mx-auto w-full px-4 sm:px-8 md:px-14 py-6 sm:py-8 lg:py-10">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-black text-[#333] text-2xl sm:text-[32px] lg:text-[40px] tracking-[3px] mb-1">PLANNER</h1>
              <p className="text-sm sm:text-base font-semibold text-[#999]">Book 1:1 mentor sessions to accelerate your career</p>
            </div>
            <div className="flex bg-[#f3f4f6] rounded-lg overflow-hidden w-full sm:w-auto">
              {(["book", "upcoming", "chat"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold capitalize transition ${activeTab === tab ? "bg-[#e2752c] text-white" : "text-[#555] hover:bg-gray-50"}`}>
                  {tab === "book" ? "Book Session" : tab === "upcoming" ? "Upcoming" : "Messages"}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "book" && (
            <div className="space-y-12">
              {/* Top: Session Topic + Session Mode (full width, horizontal) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl border border-gray-200 pt-5 pb-10 px-7">
                  <h2 className="text-xl font-black text-[#333] mb-5">Session Topic</h2>
                  <div className="flex flex-wrap gap-3">
                    {TOPICS.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`text-base font-medium px-3 py-2 rounded-full transition ${selectedTopic === topic ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] hover:bg-[#fef3e2]"}`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 pt-5 pb-10 px-7">
                  <h2 className="text-xl font-black text-[#333] mb-5">Session Mode</h2>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setSessionMode("video")} className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg transition ${sessionMode === "video" ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] hover:bg-gray-100"}`}>
                      <Video className="w-4 h-4" />Video Call
                    </button>
                    <button onClick={() => setSessionMode("inperson")} className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg transition ${sessionMode === "inperson" ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] hover:bg-gray-100"}`}>
                      <Users className="w-4 h-4" />In Person
                    </button>
                    <button onClick={() => setSessionMode("phone")} className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg transition ${sessionMode === "phone" ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] hover:bg-gray-100"}`}>
                      <Phone className="w-4 h-4" />Phone Call
                    </button>
                    <button onClick={() => setSessionMode("workshop")} className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg transition ${sessionMode === "workshop" ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] hover:bg-gray-100"}`}>
                      <Presentation className="w-4 h-4" />Workshop
                    </button>
                  </div>
                </div>
              </div>

              {/* Rows wrapper */}
              <div className="space-y-6">
              {/* Headings row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <h2 className="text-xl font-black text-[#333]">Choose a Mentor</h2>
                <h2 className="text-xl font-black text-[#333] hidden md:block">Select Date & Time</h2>
                <h2 className="text-xl font-black text-[#333] hidden lg:block">Available Times</h2>
              </div>
              {/* Row 1: First 2 mentors | Calendar | Booking Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                {/* Left: First 2 mentor cards */}
                <div className="space-y-4 sm:space-y-6">
                  {MENTORS.slice(0, 2).map((mentor, i) => (
                    <div
                      key={mentor.name}
                      onClick={() => setSelectedMentor(i)}
                      className={`bg-white rounded-xl py-[27px] px-6 cursor-pointer border transition-colors ${selectedMentor === i ? "border-[#e2752c] border-2" : "border-gray-200 hover:border-[#e2752c] hover:border-2"}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: mentor.color }}>
                          {mentor.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-[#333] text-sm">{mentor.name}</p>
                            <div className="flex items-center gap-0.5">
                              <Star className="w-3 h-3 fill-[#fcd038] text-[#fcd038]" />
                              <span className="text-sm text-[#888]">{mentor.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-[#888] mt-0.5">{mentor.title}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {mentor.expertise.map((skill) => (
                              <span key={skill} className="text-xs font-medium bg-[#f3f4f6] text-[#555] px-2 py-0.5 rounded-full">{skill}</span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-[#16a34a] font-medium">{mentor.availability}</span>
                            <span className="text-sm font-bold text-[#e2752c]">{mentor.cost} tokens/session</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-[#64748b] mt-3 pt-3 border-t border-gray-100">{mentor.bio}</p>
                      {selectedMentor === i && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-xs font-bold text-[#333] mb-2">Quick Contact</p>
                          <div className="flex gap-2">
                            <button onClick={(e) => { e.stopPropagation(); setActiveTab("chat"); }} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#f9fafb] text-[#555] text-xs font-semibold rounded-lg hover:bg-gray-100 transition">
                              <MessageSquare className="w-3.5 h-3.5" />Chat
                            </button>
                            <button onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#f9fafb] text-[#555] text-xs font-semibold rounded-lg hover:bg-gray-100 transition">
                              <Mail className="w-3.5 h-3.5" />Email
                            </button>
                            <button onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#f9fafb] text-[#555] text-xs font-semibold rounded-lg hover:bg-gray-100 transition">
                              <Linkedin className="w-3.5 h-3.5 fill-[#2f327d] text-[#2f327d]" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Middle: Calendar card */}
                <div className="md:hidden">
                  <h2 className="text-xl font-black text-[#333] mb-2">Select Date & Time</h2>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 lg:p-7 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={() => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); } else setCurrentMonth(currentMonth - 1); }} className="p-1 hover:bg-gray-100 rounded transition"><ChevronLeft className="w-4 h-4 text-[#555]" /></button>
                    <span className="text-lg font-bold text-[#333]">{MONTH_NAMES[currentMonth]} {currentYear}</span>
                    <button onClick={() => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); } else setCurrentMonth(currentMonth + 1); }} className="p-1 hover:bg-gray-100 rounded transition"><ChevronRight className="w-4 h-4 text-[#555]" /></button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center flex-1 auto-rows-fr">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <div key={d} className="text-xs font-bold text-[#aaa] py-1">{d}</div>
                    ))}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                      const isSelected = day === selectedDate;
                      const isPast = currentYear === today.getFullYear() && currentMonth === today.getMonth() && day < today.getDate();
                      return (
                        <button
                          key={day}
                          disabled={isPast}
                          onClick={() => setSelectedDate(day)}
                          className={`w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto rounded-md text-sm lg:text-base font-medium transition flex items-center justify-center aspect-square ${
                            isSelected ? "bg-[#e2752c] text-white" : isToday ? "bg-[#fef3e2] text-[#e2752c] font-bold" : isPast ? "text-[#ddd] cursor-not-allowed" : "text-[#333] hover:bg-[#fef3e2]"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Available Times card */}
                <div className="lg:hidden">
                  <h2 className="text-xl font-black text-[#333] mb-2">Available Times</h2>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 lg:p-7 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-[#333] mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-[#e2752c]" />Select a time</h3>
                  <div className="grid grid-cols-2 gap-2 flex-1 auto-rows-fr">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`text-base font-medium rounded-lg transition flex items-center justify-center ${selectedTime === time ? "bg-[#e2752c] text-white" : "bg-[#f9fafb] text-[#555] hover:bg-[#fef3e2] hover:text-[#e2752c]"}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Mentor cards 3-4 | Booking Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
                {/* Left: Remaining mentor cards */}
                <div className="space-y-4 sm:space-y-6">
                  {MENTORS.slice(2).map((mentor, i) => {
                    const actualIndex = i + 2;
                    return (
                      <div
                        key={mentor.name}
                        onClick={() => setSelectedMentor(actualIndex)}
                        className={`bg-white rounded-xl py-[27px] px-6 cursor-pointer border transition-colors ${selectedMentor === actualIndex ? "border-[#e2752c] border-2" : "border-gray-200 hover:border-[#e2752c] hover:border-2"}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: mentor.color }}>
                            {mentor.initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-[#333] text-sm">{mentor.name}</p>
                              <div className="flex items-center gap-0.5">
                                <Star className="w-3 h-3 fill-[#fcd038] text-[#fcd038]" />
                                <span className="text-sm text-[#888]">{mentor.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-[#888] mt-0.5">{mentor.title}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {mentor.expertise.map((skill) => (
                                <span key={skill} className="text-xs font-medium bg-[#f3f4f6] text-[#555] px-2 py-0.5 rounded-full">{skill}</span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-[#16a34a] font-medium">{mentor.availability}</span>
                              <span className="text-sm font-bold text-[#e2752c]">{mentor.cost} tokens/session</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-[#64748b] mt-3 pt-3 border-t border-gray-100">{mentor.bio}</p>
                        {selectedMentor === actualIndex && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-xs font-bold text-[#333] mb-2">Quick Contact</p>
                            <div className="flex gap-2">
                              <button onClick={(e) => { e.stopPropagation(); setActiveTab("chat"); }} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#f9fafb] text-[#555] text-xs font-semibold rounded-lg hover:bg-gray-100 transition">
                                <MessageSquare className="w-3.5 h-3.5" />Chat
                              </button>
                              <button onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#f9fafb] text-[#555] text-xs font-semibold rounded-lg hover:bg-gray-100 transition">
                                <Mail className="w-3.5 h-3.5" />Email
                              </button>
                              <button onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#f9fafb] text-[#555] text-xs font-semibold rounded-lg hover:bg-gray-100 transition">
                                <Linkedin className="w-3.5 h-3.5 fill-[#2f327d] text-[#2f327d]" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Booking Summary */}
                <div className="col-span-1 lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5 sm:p-7 min-h-[300px] flex flex-col">
                  <h3 className="text-lg font-bold text-[#333] mb-4">Booking Summary</h3>
                  <div className="space-y-[14px] text-base flex-1">
                    <div className="flex justify-between">
                      <span className="text-[#888]">Session Topic</span>
                      <span className="font-semibold text-[#333]">{selectedTopic || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Session Mode</span>
                      <span className="font-semibold text-[#333]">{{ video: "Video Call", inperson: "In Person", phone: "Phone Call", workshop: "Workshop" }[sessionMode]}</span>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between">
                      <span className="text-[#888]">Mentor</span>
                      <span className="font-semibold text-[#333]">{selectedMentor !== null ? MENTORS[selectedMentor].name : "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Date</span>
                      <span className="font-semibold text-[#333]">{selectedDate ? `${MONTH_NAMES[currentMonth]} ${selectedDate}, ${currentYear}` : "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Time</span>
                      <span className="font-semibold text-[#333]">{selectedTime || "—"}</span>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between">
                      <span className="text-[#888]">Cost</span>
                      <span className="font-bold text-[#e2752c] text-lg">{selectedMentor !== null ? `${MENTORS[selectedMentor].cost} tokens` : "—"}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleBook}
                    disabled={selectedMentor === null || !selectedDate || !selectedTime || !selectedTopic}
                    className="w-full mt-5 bg-[#e2752c] text-white font-bold text-base py-3.5 rounded-xl hover:brightness-110 transition disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Book Session
                  </button>
                </div>
              </div>
              </div>
            </div>
          )}

          {activeTab === "upcoming" && (
            <div className="space-y-6 w-full">
              <h2 className="text-2xl font-black text-[#333]">Upcoming Sessions</h2>
              {bookedSessions.map((session, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-7 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#fef3e2] flex items-center justify-center shrink-0">
                      <CalendarDays className="w-5 h-5 sm:w-7 sm:h-7 text-[#e2752c]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#333] text-base sm:text-xl">{session.topic}</p>
                      <p className="text-sm sm:text-base text-[#888] mt-1">with {session.mentor} · {session.mode}</p>
                      <p className="text-xs sm:text-sm text-[#555] mt-1.5">{session.date} at {session.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-16 sm:ml-0">
                    <span className={`text-sm sm:text-base font-semibold px-3 sm:px-4 py-1.5 rounded-full ${session.status === "confirmed" ? "bg-[#ecfdf5] text-[#16a34a]" : "bg-[#fef3e2] text-[#e2752c]"}`}>
                      {session.status === "confirmed" ? "Confirmed" : "Pending"}
                    </span>
                    <button className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#e2752c] hover:underline">
                      <Video className="w-4 h-4 sm:w-5 sm:h-5" />Join
                    </button>
                  </div>
                </div>
              ))}
              {bookedSessions.length === 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-14 text-center">
                  <CalendarDays className="w-14 h-14 text-[#ddd] mx-auto mb-4" />
                  <p className="text-lg text-[#888]">No upcoming sessions. Book one to get started!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "chat" && (
            <div>
              <button onClick={() => setActiveTab("book")} className="flex items-center gap-2 text-[#555] hover:text-[#e2752c] font-medium text-base mb-4 transition">
                <ChevronLeft className="w-4 h-4" />Back to Book Session
              </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 h-[calc(100vh-200px)] sm:h-[calc(100vh-240px)] lg:h-[calc(100vh-280px)]">
              {/* Contact List */}
              <div className="col-span-1 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col max-h-[200px] md:max-h-none">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-[#333]">Mentors</h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {MENTORS.map((mentor, i) => (
                    <div
                      key={mentor.name}
                      onClick={() => setSelectedMentor(i)}
                      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${selectedMentor === i ? "bg-[#fef3e2]" : "hover:bg-gray-50"}`}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ backgroundColor: mentor.color }}>
                        {mentor.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-[#333] truncate">{mentor.name}</p>
                        <p className="text-sm text-[#888] truncate">{mentor.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="col-span-1 md:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
                {selectedMentor !== null ? (
                  <>
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: MENTORS[selectedMentor].color }}>
                        {MENTORS[selectedMentor].initials}
                      </div>
                      <div>
                        <p className="font-bold text-[#333] text-sm">{MENTORS[selectedMentor].name}</p>
                        <p className="text-xs text-[#16a34a]">Online</p>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-5 space-y-4 flex flex-col">
                      {messages.length === 0 && (
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center">
                            <MessageSquare className="w-16 h-16 text-[#ddd] mx-auto mb-4" />
                            <p className="text-base text-[#888]">Start a conversation with {MENTORS[selectedMentor].name}</p>
                          </div>
                        </div>
                      )}
                      {messages.map((msg, i) => (
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
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type a message..."
                        className="flex-1 bg-[#f9fafb] rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#e2752c]/30"
                      />
                      <button onClick={sendMessage} className="bg-[#e2752c] text-white p-2.5 rounded-lg hover:brightness-110 transition">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-base text-[#888]">Select a mentor to start chatting</p>
                  </div>
                )}
              </div>
            </div>
            </div>
          )}
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingConfirm && selectedMentor !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowBookingConfirm(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-black text-[#333] mb-2">Confirm Booking</h3>
            <p className="text-base text-[#888] mb-6">
              Session with <span className="font-bold text-[#333]">{MENTORS[selectedMentor].name}</span> on{" "}
              <span className="font-bold text-[#333]">{MONTH_NAMES[currentMonth]} {selectedDate}</span> at{" "}
              <span className="font-bold text-[#333]">{selectedTime}</span>
            </p>
            <p className="text-base text-[#555] mb-6">This will cost <span className="font-bold text-[#e2752c]">{MENTORS[selectedMentor].cost} tokens</span>.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowBookingConfirm(false)} className="flex-1 py-3 border border-gray-300 rounded-xl text-base font-semibold text-[#333] hover:bg-gray-50 transition">Cancel</button>
              <button onClick={confirmBooking} className="flex-1 py-3 bg-[#e2752c] text-white rounded-xl text-sm font-bold hover:brightness-110 transition">Confirm & Pay</button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Complete Toast */}
      {bookingComplete && (
        <div className="fixed top-[76px] right-6 z-50 animate-[slideInRight_0.4s_ease-out]">
          <div className="flex items-center gap-3 bg-white rounded-lg shadow-lg border-l-4 border-[#e2752c] px-5 py-4">
            <CircleCheckBig className="w-6 h-6 text-[#2ebb5e] shrink-0" />
            <p className="text-sm font-semibold text-[#333]">Session booked successfully!</p>
          </div>
        </div>
      )}

      {/* Insufficient Tokens Modal */}
      {showInsufficientTokens && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50" onClick={() => setShowInsufficientTokens(false)}>
          <div className="bg-white rounded-2xl w-full max-w-[480px] mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowInsufficientTokens(false)}
              className="absolute top-5 right-5 text-[#999] hover:text-[#333] transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="px-10 py-10 flex flex-col items-center text-center">
              <img src="/images/jobhatch/tips-mascot.png" alt="Mascot" className="w-[100px] h-auto mb-6" />
              <h2 className="text-xl font-bold text-[#333] mb-3">Not enough tokens</h2>
              <p className="text-sm text-[#888] mb-6">
                You need {selectedMentor !== null ? MENTORS[selectedMentor].cost : 0} tokens to book this session but you only have <span className="font-bold text-[#e2752c]">{tokens} tokens</span>. Complete daily missions or recharge to earn more tokens.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowInsufficientTokens(false)}
                  className="border border-gray-300 text-[#555] font-bold text-sm px-8 py-3 rounded-full hover:bg-gray-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <Link
                  href="/ai-explorations/jobhatch/dashboard"
                  className="bg-[#e2752c] text-white font-bold text-sm px-8 py-3 rounded-full hover:brightness-110 transition"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

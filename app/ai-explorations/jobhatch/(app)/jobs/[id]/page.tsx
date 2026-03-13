"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  X,
  Heart,
  Share2,
  Bookmark,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  FileCheck,
  Globe,
  Linkedin,
  Newspaper,
} from "lucide-react";
import { COMPANY_LOGOS, JOBS } from "../jobs-data";

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const jobIndex = parseInt(id, 10);
  const job = JOBS[jobIndex];
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  if (!job) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-[#888]">Job not found.</p>
      </div>
    );
  }

  const logo = COMPANY_LOGOS[job.company] || {
    letter: job.company[0],
    bg: "#f3f4f6",
    accent: "#666",
    shape: "square",
  };

  const shapeClasses: Record<string, string> = {
    circle: "rounded-full",
    diamond: "rounded-xl rotate-45",
    hexagon: "rounded-2xl",
    triangle: "rounded-2xl",
    square: "rounded-xl",
  };

  // Get 2 similar jobs (excluding current)
  const similarJobs = JOBS.filter((_, i) => i !== jobIndex).slice(0, 3);

  // Company details data
  const companyDetails: Record<string, { founded: string; hq: string; employees: string; website: string; description: string; funding: { stage: string; ipoDate?: string; totalFunding: string; valuationAtIPO?: string; stockExchange?: string }; leadership: { name: string; role: string; initials: string; color: string }[]; news: { source: string; headline: string; date: string }[] }> = {
    PNC: {
      founded: "1845", hq: "Pittsburgh, Pennsylvania, USA", employees: "10001+", website: "http://www.pnc.com",
      description: "PNC is a financial service company providing bank deposits products and services to its community.",
      funding: { stage: "Public Company", ipoDate: "1975-11-17", totalFunding: "unknown", valuationAtIPO: "$1.2B", stockExchange: "NYSE: PNC" },
      leadership: [
        { name: "William Demchak", role: "CEO", initials: "WD", color: "#2f327d" },
        { name: "Keith Hayes", role: "Senior Vice President, PNC Aviation Finance", initials: "KH", color: "#64748b" },
      ],
      news: [
        { source: "Seattle TechFlash", headline: "PNC set to report Q2 earnings, analysts expect strong...", date: "2025-07-11" },
        { source: "Morningstar.com", headline: "PNC Raises Common Stock Dividend To $1.70 Per Share", date: "2025-07-04" },
        { source: "PYMNTS.com", headline: "3 Lawmakers Ask Banks About Peer-to-Peer Payments and Social...", date: "2025-07-04" },
      ],
    },
    Salesforce: {
      founded: "1999", hq: "San Francisco, California, USA", employees: "70000+", website: "http://www.salesforce.com",
      description: "Salesforce is a cloud-based software company providing CRM solutions and enterprise applications.",
      funding: { stage: "Public Company", ipoDate: "2004-06-23", totalFunding: "$110M", valuationAtIPO: "$1.1B", stockExchange: "NYSE: CRM" },
      leadership: [
        { name: "Marc Benioff", role: "CEO & Co-Founder", initials: "MB", color: "#0284c7" },
        { name: "Brian Millham", role: "President & COO", initials: "BM", color: "#64748b" },
      ],
      news: [
        { source: "TechCrunch", headline: "Salesforce announces new AI-powered features for enterprise...", date: "2025-06-28" },
        { source: "Bloomberg", headline: "Salesforce revenue beats estimates amid AI push...", date: "2025-06-15" },
        { source: "Reuters", headline: "Salesforce expands data cloud partnerships...", date: "2025-06-10" },
      ],
    },
    Stripe: {
      founded: "2010", hq: "San Francisco, California, USA", employees: "8000+", website: "http://www.stripe.com",
      description: "Stripe is a financial infrastructure platform for businesses to accept payments and manage operations online.",
      funding: { stage: "Private Company", totalFunding: "$8.7B" },
      leadership: [
        { name: "Patrick Collison", role: "CEO & Co-Founder", initials: "PC", color: "#7c3aed" },
        { name: "John Collison", role: "President & Co-Founder", initials: "JC", color: "#64748b" },
      ],
      news: [
        { source: "Forbes", headline: "Stripe valuation reaches new heights with latest funding...", date: "2025-07-01" },
        { source: "TechCrunch", headline: "Stripe launches new payment tools for global expansion...", date: "2025-06-20" },
        { source: "WSJ", headline: "Stripe processes record transaction volume in Q2...", date: "2025-06-15" },
      ],
    },
    Figma: {
      founded: "2012", hq: "San Francisco, California, USA", employees: "1500+", website: "http://www.figma.com",
      description: "Figma is a collaborative design platform for building meaningful products together.",
      funding: { stage: "Private Company", totalFunding: "$332M" },
      leadership: [
        { name: "Dylan Field", role: "CEO & Co-Founder", initials: "DF", color: "#e11d48" },
        { name: "Sho Kuwamoto", role: "VP of Product", initials: "SK", color: "#64748b" },
      ],
      news: [
        { source: "The Verge", headline: "Figma unveils new AI design features at Config 2025...", date: "2025-06-25" },
        { source: "TechCrunch", headline: "Figma's developer tools see rapid enterprise adoption...", date: "2025-06-18" },
        { source: "Wired", headline: "How Figma is reshaping the future of design collaboration...", date: "2025-06-10" },
      ],
    },
    Spotify: {
      founded: "2006", hq: "Stockholm, Sweden", employees: "9000+", website: "http://www.spotify.com",
      description: "Spotify is a digital music streaming service giving access to millions of songs and podcasts worldwide.",
      funding: { stage: "Public Company", ipoDate: "2018-04-03", totalFunding: "$2.7B", valuationAtIPO: "$26.5B", stockExchange: "NYSE: SPOT" },
      leadership: [
        { name: "Daniel Ek", role: "CEO & Co-Founder", initials: "DE", color: "#16a34a" },
        { name: "Alex Norström", role: "Co-President", initials: "AN", color: "#64748b" },
      ],
      news: [
        { source: "Billboard", headline: "Spotify surpasses 600M monthly active users milestone...", date: "2025-07-08" },
        { source: "TechCrunch", headline: "Spotify expands AI DJ feature to new markets...", date: "2025-06-22" },
        { source: "Reuters", headline: "Spotify posts third consecutive profitable quarter...", date: "2025-06-15" },
      ],
    },
  };
  const companyInfo = companyDetails[job.company];

  return (
    <>
      {/* Content */}
      <div
          className="flex-1 min-h-0 bg-[#fdf8e8] overflow-y-auto scrollbar-hide p-6 md:p-[52px]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="bg-white rounded-2xl mx-auto w-full px-8 md:px-14 py-10">
            {/* Back + Actions bar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => router.push("/ai-explorations/jobhatch/jobs")}
                className="flex items-center gap-2 text-base font-semibold text-[#888] hover:text-[#333] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
                Back to Jobs
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSaved(!saved)}
                  className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border transition cursor-pointer ${
                    saved ? "border-[#e2752c] text-[#e2752c] bg-[#fef3e2]" : "border-gray-200 text-[#555] hover:border-[#e2752c]"
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  {saved ? "Saved" : "Save"}
                </button>
                <button className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 text-[#555] hover:border-[#e2752c] transition cursor-pointer">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={() => setShowApplyModal(true)}
                  className="bg-[#e2752c] text-white font-bold text-sm px-8 py-2.5 rounded-full hover:brightness-110 transition cursor-pointer uppercase tracking-wide"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Orange accent bar */}
            <div className="h-[2px] bg-gradient-to-r from-[#e2752c] to-[#f4a261] rounded-full mb-8" />

            {/* Job Header */}
            <div className="flex gap-6 mb-4">
              {/* Logo – flat geometric */}
              <div className="w-[80px] h-[80px] shrink-0 flex items-center justify-center">
                <div
                  className={`w-[68px] h-[68px] flex items-center justify-center ${shapeClasses[logo.shape] || "rounded-xl"}`}
                  style={{ backgroundColor: logo.bg }}
                >
                  <span
                    className={`text-2xl font-black ${logo.shape === "diamond" ? "-rotate-45" : ""}`}
                    style={{ color: logo.accent }}
                  >
                    {logo.letter}
                  </span>
                </div>
              </div>

              {/* Title + Company */}
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-black text-[#333] mb-1">{job.title}</h1>
                <p className="text-base text-[#555] mb-2">
                  <span className="font-bold">{job.company}</span>
                  {"  ·  "}
                  {job.industry}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#888]">
                  {job.posted && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Posted {job.posted}
                    </span>
                  )}
                  <span>{job.applicants}</span>
                </div>
              </div>

              {/* Score Cards */}
              <div className="shrink-0 flex gap-3">
                {/* Exp. Level */}
                <div className="w-[110px] bg-gradient-to-b from-[#fefce8] to-[#fefdf0] border border-[#fde68a] rounded-xl flex flex-col items-center justify-center p-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#eab308]/15" />
                  <div className="relative w-[55px] h-[55px] mb-1">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#fde68a" strokeWidth="6" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="url(#expGradient)" strokeWidth="6" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 34 * 75 / 100} ${2 * Math.PI * 34}`} />
                      <defs>
                        <linearGradient id="expGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#eab308" />
                          <stop offset="100%" stopColor="#fde047" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-black text-[#333]">75<span className="text-[9px] font-bold">%</span></span>
                    </div>
                  </div>
                  <p className="text-[9px] font-bold text-[#a16207] uppercase tracking-wider">Exp. Level</p>
                </div>

                {/* Skills */}
                <div className="w-[110px] bg-gradient-to-b from-[#fefce8] to-[#fefdf0] border border-[#fde68a] rounded-xl flex flex-col items-center justify-center p-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#eab308]/15" />
                  <div className="relative w-[55px] h-[55px] mb-1">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#fde68a" strokeWidth="6" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="url(#skillsGradient)" strokeWidth="6" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 34 * 85 / 100} ${2 * Math.PI * 34}`} />
                      <defs>
                        <linearGradient id="skillsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#eab308" />
                          <stop offset="100%" stopColor="#fde047" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-black text-[#333]">85<span className="text-[9px] font-bold">%</span></span>
                    </div>
                  </div>
                  <p className="text-[9px] font-bold text-[#a16207] uppercase tracking-wider">Skills</p>
                </div>

                {/* Industry Exp. */}
                <div className="w-[110px] bg-gradient-to-b from-[#fefce8] to-[#fefdf0] border border-[#fde68a] rounded-xl flex flex-col items-center justify-center p-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#eab308]/15" />
                  <div className="relative w-[55px] h-[55px] mb-1">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#fde68a" strokeWidth="6" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="url(#industryGradient)" strokeWidth="6" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 34 * 60 / 100} ${2 * Math.PI * 34}`} />
                      <defs>
                        <linearGradient id="industryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#eab308" />
                          <stop offset="100%" stopColor="#fde047" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-black text-[#333]">60<span className="text-[9px] font-bold">%</span></span>
                    </div>
                  </div>
                  <p className="text-[9px] font-bold text-[#a16207] uppercase tracking-wider whitespace-nowrap">Industry Exp.</p>
                </div>

                {/* Match Score */}
                <div className="w-[110px] bg-gradient-to-b from-[#fef3e2] to-[#fff9f0] border border-[#f5deb3] rounded-xl flex flex-col items-center justify-center p-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#e2752c]/20" />
                  <div className="relative w-[55px] h-[55px] mb-1">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="#f0e6d2" strokeWidth="6" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke="url(#detailMatchGradient)" strokeWidth="6" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 34 * job.matchScore / 100} ${2 * Math.PI * 34}`} />
                      <defs>
                        <linearGradient id="detailMatchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e2752c" />
                          <stop offset="100%" stopColor="#f4a261" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-black text-[#333]">
                        {job.matchScore}<span className="text-[9px] font-bold">%</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[9px] font-bold text-[#e2752c] uppercase tracking-wider">Match</p>
                </div>
              </div>
            </div>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 bg-[#fef3e2] text-[#333] text-sm font-medium px-4 py-2 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-[#e2752c]" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5 bg-[#fef3e2] text-[#333] text-sm font-medium px-4 py-2 rounded-lg">
                <Building2 className="w-3.5 h-3.5 text-[#e2752c]" />
                {job.workMode}
              </span>
              <span className="flex items-center gap-1.5 bg-[#fef3e2] text-[#333] text-sm font-medium px-4 py-2 rounded-lg">
                <Briefcase className="w-3.5 h-3.5 text-[#e2752c]" />
                {job.type}
              </span>
              <span className="flex items-center gap-1.5 bg-[#fef3e2] text-[#333] text-sm font-medium px-4 py-2 rounded-lg">
                <GraduationCap className="w-3.5 h-3.5 text-[#e2752c]" />
                {job.level}
              </span>
              <span className="flex items-center gap-1.5 bg-[#fef3e2] text-[#333] text-sm font-medium px-4 py-2 rounded-lg">
                <DollarSign className="w-3.5 h-3.5 text-[#e2752c]" />
                {job.salary}
              </span>
              <span className="flex items-center gap-1.5 bg-[#fef3e2] text-[#333] text-sm font-medium px-4 py-2 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-[#e2752c]" />
                {job.experience}
              </span>
            </div>

            {/* Promotional Banner */}
            <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#dbeafe] via-[#e0e7ff] to-[#ede9fe] px-7 py-7 flex items-center justify-between">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-30%] right-[10%] w-40 h-40 rounded-full bg-[#6366f1]/10 blur-3xl" />
                <div className="absolute bottom-[-40%] left-[15%] w-48 h-48 rounded-full bg-[#3b82f6]/8 blur-3xl" />
              </div>
              {/* Left content */}
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#6366f1] flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1e293b] font-extrabold text-lg tracking-wide">Maximize your interview chances</h3>
                  <p className="text-[#64748b] text-sm font-medium mt-1">AI-powered resume tailored to this job description</p>
                </div>
              </div>
              {/* Right button */}
              <button className="relative z-10 shrink-0 flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] hover:from-[#2563eb] hover:to-[#4f46e5] text-white text-base font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#3b82f6]/20">
                <FileCheck className="w-5 h-5" />
                Generate Custom Resume
              </button>
            </div>

            {/* Insider Connection */}
            <div className="mb-8">
              {/* Header */}
              <div className="flex items-end justify-between mb-5">
                <div>
                  <h2 className="text-lg font-black text-[#1e293b] tracking-wide mb-2">Insider Connection <span className="text-[#3b82f6]">@{job.company}</span></h2>
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    Discover valuable connections within the company who might provide insights and potential referrals.<br />
                    Get 3x more responses when you reach out via email instead of LinkedIn.
                  </p>
                </div>
                <button className="shrink-0 ml-6 text-sm font-semibold text-[#e2752c] border border-[#e2752c] rounded-full px-5 py-2 hover:bg-[#fef3e2] transition-colors">
                  Use 30 Token to send emails
                </button>
              </div>
              {/* Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Beyond Your Network", initials: [["JW", "#6366f1"], ["AL", "#e11d48"]], blurred: [["RK", "#0891b2"], ["MH", "#d946ef"], ["NP", "#059669"]] },
                  { title: "From Your Previous Company", initials: [["KM", "#0284c7"], ["SR", "#16a34a"]], blurred: [["YZ", "#e11d48"], ["BT", "#7c3aed"], ["CF", "#ea580c"]] },
                  { title: "From Your School", initials: [["TL", "#ea580c"], ["DP", "#7c3aed"]], blurred: [["WL", "#0284c7"], ["GS", "#16a34a"], ["HJ", "#6366f1"]] },
                ].map((card) => (
                  <div key={card.title} className="border border-[#e5e7eb] rounded-xl p-5">
                    <h3 className="text-sm font-bold text-[#333] mb-4">{card.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      {/* Real avatars */}
                      {card.initials.map(([initials, color], i) => (
                        <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: color as string }}>
                          {initials}
                        </div>
                      ))}
                      {/* Blurred avatars */}
                      {card.blurred.map(([initials, color], i) => (
                        <div key={`blur-${i}`} className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: color as string, filter: `blur(${2 + i * 2}px)` }}>
                          {initials}
                        </div>
                      ))}
                    </div>
                    <button className="text-sm font-semibold text-[#333] border border-[#d1d5db] rounded-full px-6 py-1.5 hover:bg-[#f9fafb] transition-colors">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* About This Role */}
            {job.description && (
              <section className="mb-8">
                <h2 className="text-lg font-black text-[#333] mb-3 tracking-wide">About This Role</h2>
                <p className="text-sm text-[#555] leading-relaxed">{job.description}</p>
              </section>
            )}

            {/* Responsibilities */}
            {job.responsibilities && (
              <section className="mb-8">
                <h2 className="text-lg font-black text-[#333] mb-3 tracking-wide">Responsibilities</h2>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <CheckCircle2 className="w-4 h-4 text-[#e2752c] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Requirements */}
            {job.requirements && (
              <section className="mb-8">
                <h2 className="text-lg font-black text-[#333] mb-3 tracking-wide">Requirements</h2>
                <ul className="space-y-2.5">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <CheckCircle2 className="w-4 h-4 text-[#2f327d] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills */}
            {job.skills && (
              <section className="mb-8">
                <h2 className="text-lg font-black text-[#333] mb-3 tracking-wide">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className={`text-sm font-medium px-4 py-2 rounded-full ${
                        i < 6 ? "bg-[#fef3e2] text-[#e2752c]" : "bg-gray-100 text-[#333]"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Benefits */}
            {job.benefits && (
              <section className="mb-10">
                <h2 className="text-lg font-black text-[#333] mb-3 tracking-wide">Benefits & Perks</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {job.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2.5 bg-[#f8f9fa] rounded-xl px-4 py-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#fcd038]" />
                      <span className="text-sm text-[#555] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Divider */}
            <hr className="border-gray-100 mb-8" />

            {/* Company Info Card */}
            <section className="mb-10">
              <h2 className="text-lg font-black text-[#333] mb-4 tracking-wide">About {job.company}</h2>
              <div className="flex items-center gap-5 bg-[#fdf8e8] rounded-xl p-6">
                <div className="w-[52px] h-[52px] shrink-0 flex items-center justify-center">
                  <div
                    className={`w-[46px] h-[46px] flex items-center justify-center ${shapeClasses[logo.shape] || "rounded-xl"}`}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <span
                      className={`text-lg font-black ${logo.shape === "diamond" ? "-rotate-45" : ""}`}
                      style={{ color: logo.accent }}
                    >
                      {logo.letter}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[#333] text-base">{job.company}</p>
                  <p className="text-sm text-[#888]">{job.industry}</p>
                </div>
                <button className="flex items-center gap-1.5 text-sm font-medium text-[#e2752c] hover:underline cursor-pointer">
                  View Company
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </section>

            {/* Company Detail Section */}
            {companyInfo && (
              <section className="mb-10">
                <h2 className="text-lg font-black text-[#2f327d] mb-4 tracking-wide">Company</h2>

                {/* Company Overview */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-[#e5e7eb] rounded-xl p-5">
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-lg font-black text-[#333]">{job.company}</p>
                      <div
                        className={`w-10 h-10 flex items-center justify-center shrink-0 ${shapeClasses[logo.shape] || "rounded-xl"}`}
                        style={{ backgroundColor: logo.bg }}
                      >
                        <span className={`text-sm font-black ${logo.shape === "diamond" ? "-rotate-45" : ""}`} style={{ color: logo.accent }}>{logo.letter}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      {["Finance", "Banking", "B2C", job.workMode].slice(0, 4).map((tag) => (
                        <span key={tag} className="bg-[#f3f4f6] text-[#555] text-xs font-medium px-2.5 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed">{companyInfo.description}</p>
                  </div>
                  <div className="border border-[#e5e7eb] rounded-xl p-5 flex flex-col justify-center gap-3">
                    <p className="text-sm text-[#555]"><span className="font-bold text-[#333]">Founded in</span> {companyInfo.founded}</p>
                    <p className="text-sm text-[#555]">{companyInfo.hq}</p>
                    <p className="text-sm text-[#555]">{companyInfo.employees} employees</p>
                    <a href={companyInfo.website} className="text-sm text-[#3b82f6] hover:underline break-all">{companyInfo.website}</a>
                  </div>
                </div>

                {/* Funding */}
                <h3 className="text-base font-black text-[#333] mb-3">Funding</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-[#e5e7eb] rounded-xl p-4">
                    <p className="text-xs font-bold text-[#333] mb-1">Current Stage</p>
                    <p className="text-sm text-[#64748b]">{companyInfo.funding.stage}</p>
                    <p className="text-xs font-bold text-[#333] mt-3 mb-1">Total Funding</p>
                    <p className="text-sm text-[#64748b]">{companyInfo.funding.totalFunding}</p>
                  </div>
                  {companyInfo.funding.ipoDate && (
                    <div className="border border-[#e5e7eb] rounded-xl p-4">
                      <p className="text-xs font-bold text-[#333] mb-1">IPO Date</p>
                      <p className="text-sm text-[#64748b]">{companyInfo.funding.ipoDate}</p>
                      <p className="text-xs font-bold text-[#333] mt-3 mb-1">Stock Exchange</p>
                      <p className="text-sm text-[#64748b]">{companyInfo.funding.stockExchange}</p>
                    </div>
                  )}
                </div>

                {/* Leadership Team */}
                <h3 className="text-base font-black text-[#333] mb-3">Leadership Team</h3>
                <div className="flex gap-4 mb-6">
                  {companyInfo.leadership.map((leader) => (
                    <div key={leader.name} className="border border-[#e5e7eb] rounded-xl p-5 min-w-[200px] flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: leader.color }}>
                          {leader.initials}
                        </div>
                        <div className="w-8 h-8 border border-[#e5e7eb] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#f3f4f6] transition-colors">
                          <Linkedin className="w-4 h-4 text-[#2f327d] fill-[#2f327d]" />
                        </div>
                      </div>
                      <p className="font-bold text-[#333] text-sm">{leader.name}</p>
                      <p className="text-xs text-[#64748b] mt-0.5">{leader.role}</p>
                    </div>
                  ))}
                </div>

                {/* Recent News */}
                <h3 className="text-base font-black text-[#333] mb-3">Recent News</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {companyInfo.news.map((article, i) => (
                    <div key={i} className="border border-[#e5e7eb] rounded-xl p-4 hover:shadow-sm transition-shadow cursor-pointer">
                      <p className="font-bold text-[#333] text-sm mb-2">{article.source}</p>
                      <p className="text-sm text-[#64748b] leading-relaxed mb-3">{article.headline}</p>
                      <p className="text-xs text-[#aaa]">{article.date}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <p className="text-xs text-[#aaa] italic mb-8">Company data provided by <span className="font-bold text-[#2f327d] not-italic">crunchbase</span></p>
                <hr className="border-gray-100" />
              </section>
            )}

            {/* Action Bar (bottom sticky) */}
            <div className="flex items-center justify-between bg-[#f3f4f6] rounded-xl px-6 py-4 mb-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 font-medium text-sm px-5 py-2.5 rounded-full transition cursor-pointer ${
                    liked ? "text-[#e2752c] bg-[#fef3e2]" : "text-[#333] bg-white hover:bg-[#e2752c] hover:text-white"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? "fill-[#e2752c]" : ""}`} />
                  {liked ? "Liked" : "Like"}
                </button>
                <button
                  onClick={() => setSaved(!saved)}
                  className={`flex items-center gap-2 font-medium text-sm px-5 py-2.5 rounded-full transition cursor-pointer ${
                    saved ? "text-[#2f327d] bg-[#eef0ff]" : "text-[#333] bg-white hover:bg-[#e2752c] hover:text-white"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${saved ? "fill-[#2f327d]" : ""}`} />
                  {saved ? "Saved" : "Save"}
                </button>
              </div>
              <button
                onClick={() => setShowApplyModal(true)}
                className="bg-[#e2752c] text-white font-bold text-sm px-10 py-2.5 rounded-full hover:brightness-110 transition cursor-pointer uppercase tracking-wide"
              >
                Apply Now
              </button>
            </div>

            {/* Similar Jobs */}
            <section>
              <h2 className="text-lg font-black text-[#333] mb-4 tracking-wide">Similar Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarJobs.map((sJob, i) => {
                  const sLogo = COMPANY_LOGOS[sJob.company] || { letter: sJob.company[0], bg: "#f3f4f6", accent: "#666", shape: "square" };
                  const realIndex = JOBS.indexOf(sJob);
                  const sShapeClasses: Record<string, string> = {
                    circle: "rounded-full",
                    diamond: "rounded-lg rotate-45",
                    hexagon: "rounded-xl",
                    triangle: "rounded-xl",
                    square: "rounded-lg",
                  };
                  return (
                    <Link
                      key={i}
                      href={`/ai-explorations/jobhatch/jobs/${realIndex}`}
                      className="border border-gray-200 rounded-xl p-5 hover:border-[#e2752c] transition group cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-[36px] h-[36px] shrink-0 flex items-center justify-center">
                          <div
                            className={`w-[32px] h-[32px] flex items-center justify-center ${sShapeClasses[sLogo.shape] || "rounded-lg"}`}
                            style={{ backgroundColor: sLogo.bg }}
                          >
                            <span
                              className={`text-sm font-black ${sLogo.shape === "diamond" ? "-rotate-45" : ""}`}
                              style={{ color: sLogo.accent }}
                            >
                              {sLogo.letter}
                            </span>
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#333] truncate">{sJob.title}</p>
                          <p className="text-xs text-[#888]">{sJob.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#888] mb-2">
                        <span>{sJob.location}</span>
                        <span>·</span>
                        <span>{sJob.workMode}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-[#555]">{sJob.salary}</span>
                        <span className="text-xs font-bold text-[#e2752c] flex items-center gap-0.5 group-hover:underline">
                          {sJob.matchScore}% Match
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 text-[#999] hover:text-[#333] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fef3e2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-7 h-7 text-[#e2752c]" />
              </div>
              <h3 className="text-xl font-black text-[#333] mb-2">Apply to {job.company}</h3>
              <p className="text-sm text-[#888] mb-6">{job.title}</p>
              <p className="text-sm text-[#555] mb-6 whitespace-nowrap">Your optimized resume and profile will be shared with the employer.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 border border-gray-300 text-[#333] font-medium text-sm py-3 rounded-full hover:bg-gray-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 bg-[#e2752c] text-white font-bold text-sm py-3 rounded-full hover:brightness-110 transition cursor-pointer uppercase tracking-wide"
                >
                  Confirm Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

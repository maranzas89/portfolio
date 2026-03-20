"use client";

import React, { useEffect, useState } from "react";
import { CONTENT_CONTAINER_CLASS } from "@/lib/layout";
import {
  Briefcase,
  Calendar,
  Building2,
  ShieldCheck,
  Network,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Zap,
  Award,
  Users,
  Cpu,
  LineChart,
  Compass,
  Rocket,
  Bot,
  Cloud,
  Target,
  Layers,
  PenTool,
  Code2,
  BarChart3,
  Kanban,
  FlaskRound,
  Download,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import { ResumeLink } from "@/components/ResumeLink";

const summaries = [
  {
    icon: Award,
    text: "Product designer with 10+ years shaping workflow-heavy products across enterprise SaaS, cybersecurity, and education platforms.",
  },
  {
    icon: Users,
    text: (
      <>
        Combine systems thinking, prototyping, front-end collaboration, <br />
        and implementation-aware design to turn complexity into testable products.
      </>
    ),
  },
  {
    icon: Compass,
    text: "Work spans enterprise platforms, operational workflows, and complex systems where clarity, scalability, and cross-functional execution matter.",
  },
  {
    icon: LineChart,
    text: (
      <>
        Deliver proven business outcomes: <br />
        +75% conversion, +40% engagement, $15M+ revenue.
      </>
    ),
  },
];

const competencies = [
  { icon: Target, label: "Product Strategy & Direction" },
  { icon: Layers, label: "Systems Thinking & Workflow Architecture" },
  { icon: Rocket, label: "0→1 Product Exploration & Validation" },
  { icon: Code2, label: "Implementation-Aware Design & Front-End Fluency" },
  { icon: Compass, label: "Information Architecture & Scalable Patterns" },
  { icon: Users, label: "Cross-Functional Collaboration & Execution" },
  { icon: Sparkles, label: "Rapid Prototyping & Modern Tooling" },
];

const toolkitDescriptions = [
  "Rapidly prototype and validate product concepts using front-end tooling, design systems, and modern workflows.",
  "I use AI to accelerate exploration and prototyping, but the core of my work is product judgment, systems thinking, and cross-functional execution.",
];

const skillCategories = [
  {
    name: "Research & Strategy",
    icon: FlaskRound,
    skills: ["Workshops", "User Testing", "Synthesis", "Discovery", "Critique", "Strategy", "Validation", "Iteration"],
  },
  {
    name: "Design & Prototyping",
    icon: PenTool,
    skills: ["Figma (Dev Mode, Variables, AI)", "Adobe XD", "Adobe CC", "Axure RP", "Sketch"],
  },
  {
    name: "Front-End & Dev",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Next.js", "Vercel", "GitHub"],
  },
  {
    name: "Analytics & Testing",
    icon: BarChart3,
    skills: ["GA4", "Hotjar", "Maze", "Amplitude", "Mixpanel", "FullStory", "Looker Studio", "Tableau"],
  },
  {
    name: "Collaboration",
    icon: Kanban,
    skills: ["Jira", "Asana", "Miro", "Notion", "Slack", "Loom", "FigJam", "Confluence", "Zoom"],
  },
  {
    name: "AI & Automation",
    icon: Sparkles,
    skills: ["ChatGPT", "Claude", "Gemini", "Cursor", "Lovable", "v0", "Figma AI", "Adobe Firefly"],
  },
];

const experiences = [
  {
    id: "calbright",
    company: "Calbright College",
    companyFull: "Calbright College - Statewide Digital Learning Platform",
    logoIcon: GraduationCap,
    logoImg: "/images/calbright-logo.png",
    logoColor: "from-blue-500 to-indigo-500",
    logoBg: "bg-white",
    logoTextColor: "text-blue-600",
    role: "Senior UI/UX Designer",
    scope: "(Sole Designer, Staff-Level Scope)",
    date: "May 2023 - Present",
    description:
      "Scaled from ~2,000 to 8,000+ students and 3 to 7 programs in under 2 years.",
    metrics: [
      { label: "Hotjar satisfaction", value: "4.6 / 5", icon: BarChart3 },
      { label: "Engagement rate", value: "67%", icon: Zap },
      { label: "Staff time-to-action", value: "+35%", icon: TrendingUp },
      { label: "Common-case actions", value: "+30%", icon: Sparkles },
    ],
    highlights: [
      "Rebuilt student journey into adaptive, signal-driven pathways. Faster common-case actions by 30%.",
      "Supported DEAC accreditation and credit-bearing program transition.",
      "Replaced Salesforce CRM with a custom Staff Portal. Staff time-to-action improved 35%.",
      "Introduced Credit for Prior Learning and state compliance reporting.",
    ],
    tags: ["0→1 Redesign", "Workflow Architecture", "Accreditation", "Staff Portal"],
  },
  {
    id: "didi",
    company: "DiDi",
    logoIcon: ShieldCheck,
    logoImg: "/images/didi-logo.png",
    logoColor: "from-blue-500 to-indigo-500",
    logoBg: "bg-white",
    logoTextColor: "text-blue-600",
    role: "UX Design Lead / Design Expert",
    scope: "(Sole designer, Promoted in 1.5 yrs)",
    date: "Apr 2020 - May 2023",
    description:
      "Built foundational design language. Grew team to 2 designers + 1 product intern.",
    highlights: [
      "EagleEye — Evolved a single DLP tool into a five-hub security platform. +75% trial conversion, +40% engagement lift.",
      "Translated ML threat models into explainable operator interfaces.",
      "Led junior team shipping a real-time security monitoring dashboard.",
      "IDR — Launched live incident detection platform with automated reporting.",
      "DiDi International Privacy Center — Created a global breach monitoring platform with real-time incident tracking.",
    ],
    metrics: [
      { label: "Trial Conversion", value: "+75%", icon: TrendingUp },
      { label: "Engagement Lift", value: "+40%", icon: Zap },
    ],
    tags: ["DLP → Security Platform", "Incident Response", "Privacy Center"],
  },
  {
    id: "cisco",
    company: "Cisco",
    logoIcon: Network,
    logoImg: "/images/cisco-logo.png",
    logoColor: "from-blue-500 to-indigo-500",
    logoBg: "bg-white",
    logoTextColor: "text-blue-600",
    role: "Senior UI/UX Designer",
    scope: "(4-person design team)",
    date: "Jun 2015 - Apr 2020",
    description: "Co-built shared component library. Worked across three products.",
    highlights: [
      "CNAE — Core designer for Radial View, dashboard, and search token experience. +25% operational efficiency, -20% task time.",
      "Contributed to product line generating $15M+ in revenue. Featured at Cisco Live keynote.",
      "CLN — Built a CCIE/CCNA certification platform — first deep EdTech experience, through-line to Calbright.",
      "Atlas — Network ops platform translating telemetry into actionable dashboards. Feature deployment accelerated 30%.",
    ],
    metrics: [
      { label: "Operational Efficiency", value: "+25%", icon: TrendingUp },
      { label: "Task Time", value: "-20%", icon: Zap },
      { label: "Revenue Impact", value: "$15M+", icon: Sparkles },
    ],
    tags: ["Telemetry Dashboards", "Design System", "EdTech", "Network Ops"],
  },
];

const MOBILE_BREAKPOINT = 768;

function PdfPreviewContainer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden aspect-[3/4] max-h-[1100px] min-h-[600px] mb-8">
      <iframe
        src="/FJ/WenLiu_Resume.pdf"
        title="Resume preview"
        className="w-full h-full min-h-[600px] border-0"
      />
    </div>
  );
}

const EMAIL = "wenliu.ux@gmail.com";

function EmailWithCopyButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback ignored
    }
  };
  return (
    <div className="flex items-center gap-2 mt-3">
      <span className="text-lg text-slate-500">
        Email:{" "}
        <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:text-blue-700 hover:underline">
          {EMAIL}
        </a>
      </span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <Check size={14} strokeWidth={2.5} className="text-green-600" />
            Copied!
          </>
        ) : (
          <>
            <Copy size={14} strokeWidth={2} />
            Copy
          </>
        )}
      </button>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 py-24 font-sans selection:bg-blue-200 relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

      <div className={`${CONTENT_CONTAINER_CLASS} relative z-10`}>
        {/* Header Section */}
        <section id="career-profile" className="mb-12">
          <div className="font-accent inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4">
            <Briefcase size={14} />
            <span>Career Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Wen Liu
          </h2>
          <p className="text-lg text-slate-500 max-w-4xl leading-relaxed">
            Senior Product Designer — Complex Enterprise Systems · Workflow Architecture · Product Strategy
          </p>
          <EmailWithCopyButton />
        </section>

        {/* Summary Section */}
        <section id="summary" className="mb-16">
          <h3 className="font-accent text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="text-blue-500" size={22} /> Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {summaries.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-start md:flex-row gap-4 md:items-center group cursor-default"
                >
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 group-hover:bg-blue-100 transition-all shrink-0">
                    <Icon size={20} />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Core Competencies Section */}
        <section id="core-competencies" className="mb-20">
          <h3 className="font-accent text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="text-blue-500" size={22} /> Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {competencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-3 bg-white rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default group"
                >
                  <Icon
                    className="text-slate-400 group-hover:text-blue-500 transition-colors"
                    size={18}
                  />
                  <span className="font-accent text-sm font-semibold text-slate-700">{comp.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Header Section */}
        <section id="professional-experience">
        <div className="mb-12 flex items-center gap-4">
          <h3 className="font-accent text-3xl font-extrabold tracking-tight text-slate-900">
            Professional Experience
          </h3>
          <div className="h-px bg-slate-200 flex-1 mt-2" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - centered with icon column (w-20=80px, w-24=96px, line center at 40px/48px) */}
          <div className="absolute left-[40px] md:left-[48px] top-4 bottom-0 w-[2px] bg-slate-200 rounded-full -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp) => {
              const LogoIcon = exp.logoIcon;

              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-10 group cursor-default"
                >
                  {/* Left Column: Logo & Timeline Node - fixed width, centered content */}
                  <div className="relative z-10 flex-shrink-0 w-20 md:w-24 flex items-start justify-center">
                    {exp.logoImg ? (
                      <img
                        src={exp.logoImg}
                        alt={exp.company}
                        className="w-[58px] h-[58px] md:w-[67px] md:h-[67px] object-contain rounded-2xl group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 z-10"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${exp.logoBg} border border-white flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md z-10 ring-4 ring-[#FAFAFA]`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${exp.logoColor} opacity-10`}
                        />
                        <LogoIcon
                          size={24}
                          strokeWidth={1.5}
                          className={`${exp.logoTextColor} relative z-10`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column: Content Card */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-white rounded-3xl p-6 md:p-8 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 ease-out transform group-hover:-translate-y-1 cursor-default">
                      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                            {"companyFull" in exp && exp.companyFull ? (
                              <>{exp.company}<span className="hidden md:inline"> - {exp.companyFull.split(" - ")[1]}</span></>
                            ) : exp.company}
                          </h3>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-slate-600 font-medium">
                            <span className="text-blue-600">{exp.role}</span>
                            {exp.scope && (
                              <span className="text-slate-400 text-sm font-normal">
                                {exp.scope}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shrink-0 w-fit">
                          <Calendar size={14} />
                          <span className="font-medium">{exp.date}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 text-sm md:text-base italic font-semibold">{exp.description}</p>

                      {exp.metrics && (
                        <div className="flex flex-wrap gap-3 mb-6">
                          {exp.metrics.map((metric, idx) => {
                            const MetricIcon = metric.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-xl text-blue-900 group/metric transition-colors"
                              >
                                <div className="p-1.5 bg-white rounded-md">
                                  <MetricIcon size={14} className="text-blue-600" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-accent text-[10px] uppercase tracking-wider text-blue-500 font-semibold">
                                    {metric.label}
                                  </span>
                                  <span className="font-accent text-sm font-bold">{metric.value}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <ul className="space-y-3 mb-6">
                        {exp.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed group/item"
                          >
                            <div className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-slate-300 group-hover/item:bg-blue-500 group-hover/item:scale-150 transition-all duration-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="font-accent px-3 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Early Career Note */}
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 mt-12 group cursor-default">
            <div className="relative z-10 flex-shrink-0 flex items-start pl-2 md:pl-4">
              <div className="w-[58px] h-[58px] md:w-[67px] md:h-[67px] rounded-2xl bg-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 z-10">
                <Building2 size={30} strokeWidth={1.5} className="text-blue-600 relative z-10" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-3xl p-6 md:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 mb-3">
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                    Early Career
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shrink-0 w-fit">
                    <Calendar size={14} />
                    <span className="font-medium">Jun 2011 - Jun 2015</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
                  UX roles across EdTech and enterprise platforms, including Tynker, SunSpec Alliance, New Cyberian Systems and Global Courier Express.
                </p>

                <div className="flex flex-col gap-2 pt-6 border-t border-slate-100 md:flex-row md:flex-wrap md:items-center">
                  <span className="text-sm font-bold text-slate-700 mr-1">Company:</span>
                  {["Tynker", "SunSpec Alliance", "New Cyberian Systems", "Global Courier Express"].map(
                    (company, idx) => (
                      <span
                        key={idx}
                    className="font-accent px-3 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-default"
                    >
                      {company}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* AI-Native Builder & Technical Toolkit Section */}
        <section id="toolkit" className="mt-24">
          <div className="mb-12 flex items-center gap-4">
            <h3 className="font-accent text-3xl font-extrabold tracking-tight text-slate-900">
              Design Practice & Toolkit
            </h3>
            <div className="h-px bg-slate-200 flex-1 mt-2" />
          </div>

          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl p-6 md:p-8 mb-8">
            <ul className="space-y-4">
              {toolkitDescriptions.map((desc, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 md:text-lg leading-relaxed font-medium"
                >
                  <div className="shrink-0 p-1.5 bg-white rounded-lg text-blue-500">
                    <Sparkles size={18} />
                  </div>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-50 text-slate-500 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <CatIcon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800">{cat.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-accent px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-50 text-slate-600 hover:bg-white hover:text-blue-700 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-24">
          <div className="mb-12 flex items-center gap-4">
            <h3 className="font-accent text-3xl font-extrabold tracking-tight text-slate-900">Education</h3>
            <div className="h-px bg-slate-200 flex-1 mt-2" />
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start sm:items-center gap-4 sm:gap-6 cursor-default">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-1 sm:mt-0">
              <GraduationCap size={28} className="sm:w-8 sm:h-8" />
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full">
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  B.A. Multimedia & Art
                </h4>
                <p className="text-slate-500 mt-1 sm:mt-2 text-base sm:text-lg">
                  California State University, East Bay
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shrink-0 w-fit">
                <Calendar size={14} />
                <span className="font-medium">01/2014</span>
              </div>
            </div>
          </div>
        </section>

        {/* Download Resume Section */}
        <section id="resume" className="mt-24 pb-12">
          <div className="mb-12 flex items-center gap-4">
            <h3 className="font-accent text-3xl font-extrabold tracking-tight text-slate-900">Resume</h3>
            <div className="h-px bg-slate-200 flex-1 mt-2" />
          </div>

          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6">
            A concise overview of my experience, scope, and selected impact across product design, systems thinking, and platform work.
          </p>
          <ResumeLink
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition hover:bg-blue-700 mb-8"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </ResumeLink>
          <PdfPreviewContainer />
        </section>
      </div>
    </div>
  );
}

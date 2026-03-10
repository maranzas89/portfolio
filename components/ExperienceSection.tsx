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
} from "lucide-react";
import Link from "next/link";
import { ResumeLink } from "@/components/ResumeLink";

const summaries = [
  {
    icon: Award,
    text: "Senior Product Designer with 10+ years leading AI-driven enterprise systems across complex, regulated environments.",
  },
  {
    icon: Users,
    text: (
      <>
        Partner with Product & Engineering in Agile environments <br />
        to drive 0→1 transformations and scalable workflows.
      </>
    ),
  },
  {
    icon: Cpu,
    text: "Design operational AI systems that turn complex models and data signals into actionable workflows.",
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
  { icon: Compass, label: "Product Strategy & Roadmap Influence" },
  { icon: Rocket, label: "0→1 & Scalable Product Architecture" },
  { icon: Bot, label: "AI-Human Collaborative Systems" },
  { icon: Cloud, label: "Enterprise SaaS & Governance Architecture" },
  { icon: Users, label: "Cross-Functional Leadership & Stakeholder Alignment" },
  { icon: Target, label: "KPI-Driven Experimentation, PLG & Agile Delivery" },
  { icon: Layers, label: "Organizational Design Systems" },
];

const toolkitDescriptions = [
  "Rapidly prototype AI-native product concepts using front-end tooling and vibe coding.",
  "Design AI-human collaborative systems balancing automation, explainability, and user trust.",
];

const skillCategories = [
  {
    name: "AI",
    icon: Bot,
    skills: ["ChatGPT", "Claude", "Gemini", "Cursor", "Lovable", "Stitch", "v0", "Figma AI", "Adobe Firefly"],
  },
  {
    name: "Practice",
    icon: FlaskRound,
    skills: ["Workshops", "Testing", "Synthesis", "Iteration", "Critique", "Strategy", "Discovery", "Validation"],
  },
  {
    name: "Design & Video Editing",
    icon: PenTool,
    skills: ["Figma (Dev Mode, Variables, AI)", "Adobe XD", "Adobe CC", "Axure RP", "Sketch", "Final Cut", "CapCut"],
  },
  {
    name: "Front-End & Dev",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Next.js", "Vercel", "GitHub"],
  },
  {
    name: "Analytics",
    icon: BarChart3,
    skills: ["GA4", "Hotjar", "Maze", "Amplitude", "Mixpanel", "FullStory", "Looker Studio", "Tableau"],
  },
  {
    name: "Collaboration",
    icon: Kanban,
    skills: ["Jira", "Asana", "Miro", "Notion", "Slack", "Loom", "FigJam", "Confluence", "Zoom"],
  },
];

const experiences = [
  {
    id: "calbright",
    company: "Calbright College",
    logoIcon: GraduationCap,
    logoImg: "/images/calbright-logo.png",
    logoColor: "from-blue-500 to-indigo-500",
    logoBg: "bg-white",
    logoTextColor: "text-blue-600",
    role: "Senior UI/UX Designer",
    scope: "(Operating at Staff-Level Scope)",
    date: "05/2023 - Present",
    description:
      "Statewide Digital Learning Platform serving 8,000+ students and 200+ staff users.",
    metrics: [
      { label: "Hotjar satisfaction", value: "4.6 / 5", icon: BarChart3 },
      { label: "Engagement rate", value: "67%", icon: Zap },
      { label: "Staff Faster time-to-action", value: "35%", icon: TrendingUp },
      { label: "Faster common-case actions", value: "30%", icon: Sparkles },
    ],
    highlights: [
      "Led 0-1 redesign of Student Journey lifecycle architecture across a multi-program institution, improving enrollment and engagement.",
      "Designed AI-assisted recommendation workflows, translating behavioral signals into adaptive academic pathways.",
      "Replaced legacy Salesforce CRM with a custom Staff Portal supporting cross-functional teams.",
      "Established a hypothesis-driven product discovery framework adopted across Product and Engineering.",
    ],
    tags: ["0-1 Redesign", "AI Recommendations", "Workflow Architecture", "Agile/Scrum"],
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
    scope: "(Promoted within 1.5 years)",
    date: "04/2020 - 05/2023",
    description:
      "Enterprise cybersecurity SaaS platform spanning threat monitoring, incident response, and governance.",
    highlights: [
      "Designed human-in-the-loop AI workflows, translating machine learning threat models into explainable security interfaces.",
      "Architected scalable permission models and governance systems for enterprise deployment.",
      "Influenced roadmap prioritization through KPI analysis, usability testing, and cross-functional collaboration.",
    ],
    metrics: [
      { label: "Trial Conversion", value: "+75%", icon: TrendingUp },
      { label: "Engagement Lift", value: "+40%", icon: Zap },
    ],
    tags: ["Cybersecurity SaaS", "Human-in-the-loop AI", "Governance Systems"],
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
    scope: "",
    date: "06/2015 - 04/2020",
    description: "AI-driven Network Assurance Engine, an enterprise network intelligence platform.",
    highlights: [
      "Led UX for complex telemetry dashboards and model-driven alert systems supporting anomaly detection.",
      "Built a scalable enterprise design system, accelerating feature deployment by 30%.",
      "Contributed to enterprise customers globally and initiatives featured in an executive keynote at Cisco Live.",
    ],
    metrics: [
      { label: "Operational Efficiency", value: "+25%", icon: TrendingUp },
      { label: "Task Time", value: "-20%", icon: Zap },
      { label: "Revenue Impact", value: "$15M+", icon: Sparkles },
    ],
    tags: ["Telemetry Dashboards", "Design System", "Anomaly Detection"],
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
            Senior Product Designer | AI Systems, Enterprise Workflow Architecture & Product Strategy
          </p>
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
                  className="bg-white rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex gap-4 items-center group cursor-default"
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
                            {exp.company}
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

                      <p className="text-slate-500 mb-6 text-sm md:text-base">{exp.description}</p>

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
                            className="flex items-center gap-3 text-slate-600 text-sm md:text-base leading-relaxed group/item"
                          >
                            <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-blue-500 group-hover/item:scale-150 transition-all duration-300" />
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
              <div className="w-[58px] h-[58px] md:w-[67px] md:h-[67px] rounded-2xl bg-white flex items-center justify-center group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 z-10">
                <Building2 size={24} strokeWidth={1.5} className="text-slate-400 relative z-10" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-3xl p-6 md:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  Early Career
                </h4>

                <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
                  UX roles across EdTech and enterprise platforms. Developed foundation in onboarding
                  flows, data-heavy interfaces, enterprise dashboards, and stakeholder collaboration.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
                  <span className="text-sm font-bold text-slate-700 mr-1">Company:</span>
                  {["Tynker", "SunSpec Alliance", "New Cyberian Systems", "GLOBAL COURIER EXPRESS LTD"].map(
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
              AI-Native Design Practice & Toolkit
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

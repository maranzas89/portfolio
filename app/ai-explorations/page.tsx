"use client";

import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import SectionNav from "@/components/SectionNav";
import { AI_EXPLORATIONS_SECTIONS } from "@/lib/section-nav-config";
import Link from "next/link";
import {
  Layout,
  Layers,
  Rocket,
  Users,
  Phone,
  RefreshCw,
  Box,
  Wrench,
  Brain,
  GitCompareArrows,
  Lightbulb,
  SlidersHorizontal,
  Swords,
  BarChart3,
  Sparkles,
  Link2,
  ClipboardCheck,
  Eye,
  PhoneCall,
  Contact,
  Workflow,
  Palette,
  Briefcase,
  FileSearch,
  Target,
  Coins,
  Activity,
  Shield,
  Bug,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";

const AiMarketLandscapeWhiteModule = dynamic(
  () => import("@/components/ai-explorations/AiMarketLandscapeWhiteModule"),
  {
    loading: () => (
      <div className="w-full py-14 md:py-16" aria-hidden="true">
        <div className="mx-auto w-full max-w-[1600px] px-8 md:px-16 lg:px-24 space-y-6">
          <div className="h-3 w-48 rounded bg-slate-200/60 animate-pulse" />
          <div className="h-5 w-80 rounded bg-slate-200/40 animate-pulse" />
          <div className="h-3 w-64 rounded bg-slate-100/60 animate-pulse" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-36 rounded-xl bg-slate-100/50 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: false,
  }
);
import AiExplorationsSubnav from "@/components/ai-explorations/AiExplorationsSubnav";

const EXPLORATIONS = [
  {
    id: 13,
    title: "PRISM Prototype (MITRE ATT&CK Framework)",
    category: "Early Prototype Experiments",
    description:
      "Walk through a real threat investigation — from morning dashboard to incident containment. Six screens, one unified SOC workflow.",
    icon: Shield,
    gradient: "from-blue-500/20 to-indigo-500/20",
    image: "/images/007.png",
    mobileImageClass: "object-cover object-center",
    backText: "",
    backHighlights: [
      { icon: Shield, label: "Full SOC workflow", text: "Six interactive screens covering detection, investigation, ATT&CK mapping, automated response, summary generation, and case closure." },
      { icon: Target, label: "Automated response", text: "Watch the system execute a five-step response playbook in real time — credentials reset, sessions revoked, device isolated, indicators blocked." },
      { icon: Zap, label: "Production-grade UI", text: "Built as a working prototype with sidebar navigation, real-time status updates, and enterprise-level information density." },
    ],
    href: "/ai-explorations/prism-demo",
    prdHref: "/prd/prism/prd_v1.0.html",
    figmaHref: "",
  },
  {
    id: 12,
    title: "PRISM Case Study",
    category: "Cybersecurity Platform",
    description:
      "The systems thinking behind PRISM — how MITRE ATT&CK becomes architecture, not decoration, in a unified SOC investigation surface.",
    icon: Shield,
    gradient: "from-blue-500/20 to-indigo-500/20",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=500&fit=crop&q=80",
    mobileImageClass: "object-cover object-center",
    backText: "",
    backHighlights: [
      { icon: Shield, label: "MITRE ATT&CK mapping", text: "Maps attack chains to the MITRE framework as the structural backbone — not labels, but the organizing principle for layered investigation." },
      { icon: Target, label: "Unified SOC workflow", text: "Connects detection, investigation, and response into a single surface — eliminating tool fragmentation and context loss." },
      { icon: Zap, label: "AI-powered triage", text: "Generates risk summaries, recommends response actions, and produces incident reports to compress analyst time-to-action." },
    ],
    href: "/ai-explorations/prism",
    figmaHref: "",
  },
  {
    id: 11,
    title: "Pulse — Error Monitoring",
    category: "Developer Tool",
    description:
      "An application monitoring prototype featuring real-time error capture, session replay, and end-to-end root cause tracing.",
    icon: Activity,
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
    mobileImageClass: "object-cover object-center",
    backText: "",
    backHighlights: [
      { icon: Bug, label: "Live error capture", text: "Triggers a real JavaScript error in a storefront checkout flow, then surfaces it in a Sentry-style dashboard with full stack trace and context." },
      { icon: Eye, label: "Session replay", text: "Reconstructs the user's journey step-by-step — from product browse to checkout crash — with a timeline-synced playback interface." },
      { icon: Shield, label: "Root cause tracing", text: "Connects breadcrumbs, tags, and code snippets to show exactly which coupon code, function, and line number caused the failure." },
    ],
    href: "/pulse/store",
    figmaHref: "",
  },
  {
    id: 10,
    title: "Project Liquid Glass",
    category: "Design Infrastructure",
    description:
      "A coded design system that replaces tool-only visual workflows with reusable UI foundations for modern digital products.",
    icon: Palette,
    gradient: "from-sky-500/20 to-indigo-500/20",
    image: "/images/ds.png",
    mobileImageClass: "object-cover object-top",
    backText: "",
    backHighlights: [],
    href: "/ai-explorations/liquid",
    figmaHref: "",
  },
  {
    id: 9,
    title: "JobHatch",
    category: "Career Platform",
    description:
      "A career platform concept combining resume analysis, match scoring, and gamified incentives to improve job search clarity and momentum.",
    icon: Briefcase,
    gradient: "from-emerald-500/20 to-teal-500/20",
    image: "/images/01q.png",
    mobileImageClass: "object-contain object-top",
    backText: "",
    backHighlights: [
      { icon: FileSearch, label: "Resume analysis", text: "Parses resumes to surface improvement opportunities and help users better position their background against the expectations of specific roles." },
      { icon: Target, label: "Match-based tracking", text: "Combines application management with match scoring so users can monitor progress, evaluate job fit more clearly, and prioritize stronger opportunities." },
      { icon: Coins, label: "Token-driven optimization", text: "Introduces a gamified feedback loop where completed actions earn tokens that unlock added value, from resume upgrades to AI-assisted CV creation and job search support." },
    ],
    href: "/ai-explorations/jobhatch",
    figmaHref: "https://www.figma.com/proto/fsYoyR0QL0Q3AvoB7jf84Z/%F0%9F%90%A5-JobHatch-Design?node-id=696-1945&t=rfjUY082xjC3K5Vp-1",
  },
  {
    id: 5,
    title: "Where AI Excels Today",
    category: "Research System",
    description:
      "A structured evaluation of where current AI tools are most reliable for real product work — across prototyping, workflow support, and design execution.",
    icon: Layers,
    gradient: "from-amber-500/20 to-orange-500/20",
    image: "/images/1q.png",
    backText: "",
    backHighlights: [
      { icon: GitCompareArrows, label: "Cross-capability comparison", text: "Compares where current AI tools perform best across ideation, reasoning, visual generation, and workflow support." },
      { icon: Lightbulb, label: "Practical use cases", text: "Highlights practical use cases for applying AI in everyday product design, creative exploration, and rapid prototyping." },
      { icon: SlidersHorizontal, label: "Tool-stage fit", text: "Shows how different tools fit different stages of work, helping translate current AI strengths into real design decisions." },
    ],
    href: "/ai-explorations/where-ai-excels",
    figmaHref: "",
  },
  {
    id: 6,
    title: "World Cup Data Lab",
    category: "Prototyping",
    description:
      "An interactive prototype exploring how AI and structured data can transform complex information into a navigable, insight-driven product experience.",
    icon: Rocket,
    gradient: "from-orange-500/20 to-rose-500/20",
    image: "/images/2q.png",
    backText: "",
    backHighlights: [
      { icon: Swords, label: "Matchup Intelligence", text: "Uses structured team data and comparison logic to surface strengths, patterns, and storylines across tournament matchups." },
      { icon: BarChart3, label: "Interactive experience", text: "Transforms match information into a more interactive experience through dashboards, comparisons, and data-led exploration." },
      { icon: Sparkles, label: "Data-driven insights", text: "Demonstrates how structured data and intelligent filtering can make sports information more engaging and easier to navigate." },
    ],
    href: "/ai-explorations/world-cup-data-lab",
    figmaHref: "",
  },
  {
    id: 7,
    title: "Synchronize Orientation",
    category: "Student-Staff Sync",
    description:
      "A prototype for real-time student-staff sync, improving visibility across orientation progress and support.",
    icon: Users,
    gradient: "from-rose-500/20 to-violet-500/20",
    image: "/images/3q.png",
    backText: "",
    backHighlights: [
      { icon: Link2, label: "Student–staff sync", text: "Prototyped shared visibility across the student experience and staff portal, enabling file and status continuity between both sides." },
      { icon: ClipboardCheck, label: "Enrollment support", text: "Designed orientation and onboarding flows around student needs, including enrollment steps, checklist progress, and key to-dos." },
      { icon: Eye, label: "Rethinking staff tracking", text: "Explored a more connected alternative to traditional progress tracking by giving staff clearer, more real-time visibility into student completion states." },
    ],
    href: "/ai-explorations/synchronize-orientation",
    figmaHref: "",
  },
];

export default function AIExplorationsPage() {
  return (
    <div className="relative max-md:bg-black bg-bg text-text min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <WorkNav embed />
        <AiExplorationsSubnav />
      </header>
      <SectionNav sections={AI_EXPLORATIONS_SECTIONS} />

      <div className="pt-[96px] md:pt-[128px]">
      <PageHero
        eyebrow="From product judgment to working prototype. Fast."
        headline="Prototyping ideas, testing assumptions, and shaping product direction"
        paragraph="Selected explorations across workflow design, interface prototyping, and early-stage product investigation — showing how I turn emerging ideas into testable structures and working concepts."
        backgroundVariant="ai-explorations"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 -mt-[30px] w-full max-w-5xl">
          <div className="hero-card group p-3 sm:p-5 rounded-xl">
            <Box className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-xl sm:text-2xl text-white mb-1">6–7</h3>
            <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide font-medium">End-to-End Prototypes</p>
          </div>
          <div className="hero-card group p-3 sm:p-5 rounded-xl">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-xl sm:text-2xl text-white mb-1">3+</h3>
            <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide font-medium">Reusable Frameworks</p>
          </div>
          <div className="hero-card group p-3 sm:p-5 rounded-xl">
            <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-xl sm:text-2xl text-white mb-1">10+</h3>
            <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide font-medium">Tools & Flows Integrated</p>
          </div>
          <div className="hero-card group p-3 sm:p-5 rounded-xl">
            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-xl sm:text-2xl text-white mb-1">30+</h3>
            <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide font-medium">Design Iterations Shipped</p>
          </div>
        </div>
      </PageHero>

      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24">

          {/* Latest Work */}
          <section className="pt-12 md:pt-16 pb-[60px] md:pb-[80px]">
            <ScrollReveal direction="up" className="mb-6 md:mb-8">
              <div id="ai-latest-work" className="mb-2 flex items-center gap-2 scroll-mt-[190px]">
                <Zap className="h-4 w-4 shrink-0 text-blue-600" />
                <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  01. Latest Work
                </h2>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-text md:text-4xl">
                What I&apos;ve Been Building
              </h3>
              <p className="max-w-5xl text-base text-slate-600 md:text-lg">
                The most recent prototypes — built to push boundaries and test new product directions.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {EXPLORATIONS.slice(0, 2).map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.id} direction="up" delay={i * 50} className="h-full">
                    <div className="flex flex-col h-full rounded-2xl bg-[#fafbfc] overflow-hidden">
                      {item.image ? (
                        <div className="h-[200px] md:h-[280px] overflow-hidden shrink-0">
                          <img src={item.image} alt={item.title} className={`w-full h-full md:object-cover md:object-center ${item.mobileImageClass || "object-cover object-top"}`} />
                        </div>
                      ) : (
                        <div className={`h-[200px] md:h-[280px] bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0`}>
                          <Icon className="w-14 h-14 md:w-16 md:h-16 text-text/40" />
                        </div>
                      )}
                      <div className="px-5 pt-5 pb-6 md:p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{item.category}</span>
                          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">New</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text mb-3 flex items-center gap-2">
                          <Icon className="h-5 w-5 shrink-0 text-text" strokeWidth={2.5} />
                          {item.title}
                        </h3>
                        <p className="text-muted text-sm md:text-base leading-relaxed flex-1">
                          {item.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <Link href={item.href} className="text-sm font-semibold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors no-underline hover:no-underline">
                            {item.id === 12 ? "View Case Study →" : item.id === 13 ? "Try Demo →" : "View Demo →"}
                          </Link>
                          {item.prdHref && (
                            <Link href={item.prdHref} className="text-sm font-semibold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors no-underline hover:no-underline">
                              View PRD →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        </div>

        <AiMarketLandscapeWhiteModule />

        <div className="max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24">
          {/* Full Showcase */}
          <section className="pt-8 md:pt-16 pb-[80px] md:pb-[146px]">
            <ScrollReveal direction="up" className="mb-10 md:mb-16">
              <div id="ai-product-experiments" className="mb-2 flex items-center gap-2 scroll-mt-[190px]">
                <Layout className="h-4 w-4 shrink-0 text-blue-600" />
                <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  04. Showcase
                </h2>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-text md:text-4xl">
                Earlier Explorations
              </h3>
              <p className="max-w-5xl text-base text-slate-600 md:text-lg">
                Past explorations across workflow design, data visualization, and product concepts — each one testing a different hypothesis.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {EXPLORATIONS.slice(2).map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.id} direction="up" delay={i * 50} className="h-full">
                    <div className="flex flex-col h-full rounded-2xl bg-[#fafbfc] overflow-hidden">
                      {item.image ? (
                        <div className="h-[180px] md:h-[240px] overflow-hidden shrink-0">
                          <img src={item.image} alt={item.title} className={`w-full h-full md:object-cover md:object-center ${item.mobileImageClass || "object-cover object-top"}`} />
                        </div>
                      ) : (
                        <div className={`h-[160px] md:h-[240px] bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0`}>
                          <Icon className="w-12 h-12 md:w-14 md:h-14 text-text/40" />
                        </div>
                      )}
                      <div className="px-5 pt-4 pb-5 md:p-8 flex flex-col flex-1">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text mb-3 flex items-center gap-2">
                          <Icon className="h-5 w-5 shrink-0 text-text" strokeWidth={2.5} />
                          {item.title}
                        </h3>
                        <p className="text-muted text-sm md:text-base leading-relaxed flex-1">
                          {item.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <Link href={item.href} className="text-sm font-semibold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors no-underline hover:no-underline">
                            View Demo →
                          </Link>
                          {item.prdHref && (
                            <Link href={item.prdHref} className="text-sm font-semibold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors no-underline hover:no-underline">
                              View PRD →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

        </div>
        <div className="h-[40px] md:h-[80px]" />
      </main>

      <section
        className="relative w-full overflow-hidden py-20 md:py-28 border-t border-white/10"
        style={{
          background:
            "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24 flex justify-center">
          <ScrollReveal direction="up" className="w-full flex justify-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-2">
              <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed mb-6 text-balance">
                See how product thinking and prototyping come together across my featured work — from enterprise systems and education platforms to workflow design and testable product concepts.
              </p>
              <Link
                href="/#work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60 shrink-0"
              >
                View Featured Projects
                <span aria-hidden>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PageFooter />
      </div>
    </div>
  );
}

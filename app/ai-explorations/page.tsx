"use client";

import React, { useState, useCallback } from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import SectionNav from "@/components/SectionNav";
import { AI_EXPLORATIONS_SECTIONS } from "@/lib/section-nav-config";
import Link from "next/link";
import {
  Sparkles,
  Layout,
  Palette,
  Zap,
  Layers,
  Rocket,
  Users,
  Phone,
  RefreshCw,
  Box,
  Wrench,
  Brain,
} from "lucide-react";
import AiMarketLandscapeWhiteModule from "@/components/ai-explorations/AiMarketLandscapeWhiteModule";
import AiExplorationsSubnav from "@/components/ai-explorations/AiExplorationsSubnav";

const EXPLORATIONS = [
  {
    id: 1,
    title: "AI-Assisted Product Concepts",
    category: "Concept Generation",
    description:
      "Exploring early-stage product directions through structured prompts, rapid framing, and iterative synthesis.",
    icon: Sparkles,
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Prompt-to-Interface Studies",
    category: "Interface Ideation",
    description:
      "Translating abstract prompts into interface patterns, flows, and interaction concepts with product-level intent.",
    icon: Layout,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Generative Visual Directions",
    category: "Visual Exploration",
    description:
      "Using AI-supported image and composition workflows to test visual territories, mood, and storytelling.",
    icon: Palette,
    gradient: "from-cyan-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Workflow Acceleration Experiments",
    category: "Process",
    description:
      "Reducing friction in research synthesis, concept framing, and content generation to accelerate design velocity.",
    icon: Zap,
    gradient: "from-emerald-500/20 to-amber-500/20",
  },
  {
    id: 5,
    title: "AI-Enhanced Design Systems Thinking",
    category: "Systems",
    description:
      "Exploring how AI can support scalable systems, pattern generation, and component thinking.",
    icon: Layers,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 6,
    title: "Rapid Prototype Explorations",
    category: "Prototyping",
    description:
      "Testing ideas quickly through lightweight, high-feedback prototypes that help validate direction earlier.",
    icon: Rocket,
    gradient: "from-orange-500/20 to-rose-500/20",
  },
  {
    id: 7,
    title: "Synchronize Orientation",
    category: "Student-Staff Sync",
    description:
      "A Calbright-style orientation checklist demonstrating student-staff state sync via localStorage—students complete steps while staff monitors progress in real time.",
    icon: Users,
    gradient: "from-rose-500/20 to-violet-500/20",
    href: "/ai-explorations/synchronize-orientation",
  },
  {
    id: 8,
    title: "Dialpad Modal",
    category: "Staff Portal",
    description:
      "A staff-facing dialpad modal for calling students directly from the portal—streamlining outreach, case follow-ups, and student support without leaving the workflow.",
    icon: Phone,
    gradient: "from-teal-500/20 to-blue-500/20",
    href: "/ai-explorations/dialpad-modal",
    ctaLabel: "Try demo",
  },
];

export default function AIExplorationsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = useCallback((id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <WorkNav embed />
        <AiExplorationsSubnav />
      </header>
      <SectionNav sections={AI_EXPLORATIONS_SECTIONS} />

      <div className="pt-16 md:pt-32">
      <PageHero
        eyebrow="AI Projects"
        headline="Designing with AI across systems, workflows, and product thinking"
        paragraph="Explorations across AI-assisted workflows, rapid prototyping, and generative design—showing how I use AI to think broader, test faster, and expand design possibilities."
        backgroundVariant="ai-explorations"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 -mt-[30px] w-full max-w-5xl">
          <div className="hero-card group p-5 rounded-xl">
            <RefreshCw className="w-5 h-5 text-blue-400 mb-3" />
            <h3 className="font-semibold text-2xl text-white mb-1">30+</h3>
            <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Research Loops</p>
          </div>
          <div className="hero-card group p-5 rounded-xl">
            <Box className="w-5 h-5 text-blue-400 mb-3" />
            <h3 className="font-semibold text-2xl text-white mb-1">4–5</h3>
            <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Prototype Concepts</p>
          </div>
          <div className="hero-card group p-5 rounded-xl">
            <Wrench className="w-5 h-5 text-blue-400 mb-3" />
            <h3 className="font-semibold text-2xl text-white mb-1">10+</h3>
            <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Tools in Practice</p>
          </div>
          <div className="hero-card group p-5 rounded-xl">
            <Brain className="w-5 h-5 text-blue-400 mb-3" />
            <h3 className="font-semibold text-2xl text-white mb-1">100+</h3>
            <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Skill-based Uses</p>
          </div>
        </div>
      </PageHero>

      <main className="bg-white">
        <AiMarketLandscapeWhiteModule />
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Featured exploration grid */}
          <section id="ai-product-experiments" className="scroll-mt-[260px] py-16 md:py-24">
            <ScrollReveal direction="up" className="mb-16">
              <div className="mb-2 flex items-center gap-2">
                <Layout className="h-4 w-4 shrink-0 text-blue-600" />
                <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  03. AI Project Showcase
                </h2>
              </div>
              <h3 className="mb-4 text-3xl font-semibold text-text md:text-4xl">
                Testing Product Hypotheses Through AI-Native Prototyping
              </h3>
              <p className="max-w-5xl text-base text-slate-600 md:text-lg">
                A portfolio of experimental builds used to explore product behaviors, validate
                emerging opportunities, and translate early concepts into working prototypes that
                may inform future applications or commercial products.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {EXPLORATIONS.map((item, i) => {
                const Icon = item.icon;
                const isExpanded = !("href" in item) && expandedId === item.id;
                const hasHref = "href" in item && typeof (item as { href?: string }).href === "string";
                const href = hasHref ? (item as { href: string }).href : null;
                const ctaLabel = "ctaLabel" in item ? (item as { ctaLabel?: string }).ctaLabel : null;

                const cardContent = (
                  <>
                    <div
                      className={`h-32 md:h-40 bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]`}
                    >
                      <Icon className="w-12 h-12 md:w-14 md:h-14 text-text/40" />
                    </div>
                    <div className="p-6 md:p-8">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                      {!hasHref && isExpanded && (
                        <div className="mt-6 pt-6 border-t border-line">
                          <p className="text-muted text-sm leading-relaxed">
                            This exploration combines structured prompting with iterative refinement to surface product directions that balance feasibility and ambition.
                          </p>
                        </div>
                      )}
                      <p className="mt-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                        {hasHref ? `${ctaLabel || "Try demo"} →` : isExpanded ? "Collapse" : "Expand"} →
                      </p>
                    </div>
                  </>
                );

                return (
                  <ScrollReveal key={item.id} direction="up" delay={i * 50}>
                    {href ? (
                      <Link
                        href={href}
                        className={`group bg-card border border-line rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#999999] hover:shadow-lg hover:-translate-y-1 block`}
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div
                        onClick={() => toggleExpand(item.id)}
                        className={`group bg-card border border-line rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#999999] hover:shadow-lg hover:-translate-y-1 ${
                          isExpanded ? "ring-2 ring-blue-500/30 border-blue-200" : ""
                        }`}
                      >
                        {cardContent}
                      </div>
                    )}
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          {/* 04. In Practice */}
          <section id="in-practice" className="scroll-mt-[260px] py-16 md:py-24">
            <ScrollReveal direction="up" className="mb-16">
              <div className="mb-2 flex items-center gap-2">
                <Layout className="h-4 w-4 shrink-0 text-blue-600" />
                <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  04. In Practice
                </h2>
              </div>
              <h3 className="mb-4 text-3xl font-semibold text-text md:text-4xl">
                Applying AI in Everyday Product Design
              </h3>
              <p className="max-w-5xl text-base text-slate-600 md:text-lg mb-8">
                Interested in how I put AI into practice in everyday product design? Browse selected
                work to see how these tools inform strategy, workflow, and execution in real
                projects.
              </p>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                View Featured Work
                <span aria-hidden>→</span>
              </Link>
            </ScrollReveal>
          </section>
        </div>
      </main>

      <PageFooter />
      </div>
    </div>
  );
}

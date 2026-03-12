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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AiMarketLandscapeWhiteModule from "@/components/ai-explorations/AiMarketLandscapeWhiteModule";
import AiExplorationsSubnav from "@/components/ai-explorations/AiExplorationsSubnav";

const EXPLORATIONS = [
  {
    id: 5,
    title: "Where AI Excels Today",
    category: "Research System",
    description:
      "A practical look at where current AI tools are strongest across creative exploration, workflow support, and execution.",
    icon: Layers,
    gradient: "from-amber-500/20 to-orange-500/20",
    backText: "",
    backHighlights: [
      { icon: GitCompareArrows, label: "Cross-capability comparison", text: "Compares where current AI tools perform best across ideation, reasoning, visual generation, and workflow support." },
      { icon: Lightbulb, label: "Practical use cases", text: "Highlights practical use cases for applying AI in everyday product design, creative exploration, and rapid prototyping." },
      { icon: SlidersHorizontal, label: "Tool-stage fit", text: "Shows how different tools fit different stages of work, helping translate current AI strengths into real design decisions." },
    ],
    href: "/ai-explorations/where-ai-excels",
  },
  {
    id: 6,
    title: "World Cup Data Lab",
    category: "Prototyping",
    description:
      "An interactive concept exploring how AI and live match data can turn tournament signals into a more dynamic, insight-driven fan experience.",
    icon: Rocket,
    gradient: "from-orange-500/20 to-rose-500/20",
    backText: "",
    backHighlights: [
      { icon: Swords, label: "Matchup Intelligence", text: "Uses structured team data and comparison logic to surface strengths, patterns, and storylines across tournament matchups." },
      { icon: BarChart3, label: "Interactive experience", text: "Transforms match information into a more interactive experience through dashboards, comparisons, and data-led exploration." },
      { icon: Sparkles, label: "AI-driven insights", text: "Demonstrates how AI can make sports data more engaging by helping users navigate complexity and discover insights faster." },
    ],
    href: "/ai-explorations/world-cup-data-lab",
  },
  {
    id: 7,
    title: "Synchronize Orientation",
    category: "Student-Staff Sync",
    description:
      "A Calbright-style orientation checklist demonstrating student-staff state sync via localStorage—students complete steps while staff monitors progress in real time.",
    icon: Users,
    gradient: "from-rose-500/20 to-violet-500/20",
    backText: "",
    backHighlights: [
      { icon: Link2, label: "Student–staff sync", text: "Used AI to prototype shared visibility across the student experience and staff portal, enabling file and status continuity between both sides." },
      { icon: ClipboardCheck, label: "Enrollment support", text: "Designed orientation and onboarding flows around student needs, including enrollment steps, checklist progress, and key to-dos." },
      { icon: Eye, label: "Rethinking staff tracking", text: "Explored a more connected alternative to traditional progress tracking by giving staff clearer, more real-time visibility into student completion states." },
    ],
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
    backText: "",
    backHighlights: [
      { icon: PhoneCall, label: "Direct calling", text: "A fully interactive dialpad modal enabling staff to call students directly from the portal without switching tools or losing context." },
      { icon: Contact, label: "Recent contacts", text: "Supports quick access to recent contacts and contextual student info, streamlining follow-ups and case management." },
      { icon: Workflow, label: "Workflow integration", text: "Designed to reduce task-switching by keeping outreach actions embedded within the staff portal experience." },
    ],
    href: "/ai-explorations/dialpad-modal",
  },
];

export default function AIExplorationsPage() {
  const [flippedIds, setFlippedIds] = useState<Set<number>>(new Set());

  const toggleFlip = useCallback((id: number) => {
    setFlippedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
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
          <section id="ai-product-experiments" className="scroll-mt-[260px] pt-16 md:pt-24 pb-[114px] md:pb-[146px]">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {EXPLORATIONS.map((item, i) => {
                const Icon = item.icon;
                const isFlipped = flippedIds.has(item.id);
                const hasHighlights = "backHighlights" in item && Array.isArray((item as { backHighlights?: { icon?: LucideIcon; label: string; text: string }[] }).backHighlights);
                const highlights = hasHighlights ? (item as { backHighlights: { icon?: LucideIcon; label: string; text: string }[] }).backHighlights : null;

                /* Back face content */
                const backContent = highlights ? (
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text mb-4">
                      {item.title}
                    </h3>
                    <div className="space-y-3 flex-1">
                      {highlights.map((h, idx) => {
                        const HIcon = h.icon;
                        return (
                          <div key={idx} className="bg-white rounded-xl p-4 border border-slate-100">
                            <div className="flex items-center gap-2 mb-1">
                              {HIcon && <HIcon className="h-3.5 w-3.5 text-blue-500 shrink-0" strokeWidth={2.5} />}
                              <p className="text-sm font-semibold text-text">{h.label}</p>
                            </div>
                            <p className="text-muted text-xs leading-relaxed">{h.text}</p>
                          </div>
                        );
                      })}
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 self-end text-sm font-semibold text-blue-600 uppercase tracking-widest hover:text-blue-700 hover:bg-[#f1f5f9] px-3 py-1.5 rounded-lg transition-colors duration-200"
                    >
                      Try demo →
                    </a>
                  </div>
                ) : (
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed flex-1">
                      {item.backText}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 self-end text-sm font-semibold text-blue-600 uppercase tracking-widest hover:text-blue-700 hover:bg-[#f1f5f9] px-3 py-1.5 rounded-lg transition-colors duration-200"
                    >
                      Try demo →
                    </a>
                  </div>
                );

                /* Ghost content for sizing — renders both front and back, takes the taller */
                const ghostFront = (
                  <div>
                    <div className="h-[208px] md:h-[240px]" />
                    <div className="p-6 md:p-8">
                      <span className="text-xs font-semibold uppercase tracking-widest block mb-2">&nbsp;</span>
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed">{item.description}</p>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-widest">Learn more →</p>
                    </div>
                  </div>
                );
                const ghostBack = highlights ? (
                  <div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">{item.title}</h3>
                      <div className="space-y-3">
                        {highlights.map((h, idx) => (
                          <div key={idx} className="rounded-xl p-4">
                            <p className="text-sm font-semibold mb-1">{h.label}</p>
                            <p className="text-xs leading-relaxed">{h.text}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-widest">Try demo →</p>
                    </div>
                  </div>
                ) : null;

                return (
                  <ScrollReveal key={item.id} direction="up" delay={i * 50}>
                    <div
                      className="cursor-pointer [perspective:1200px]"
                      onClick={() => toggleFlip(item.id)}
                    >
                      <div className="relative">
                        {/* Sizing ghost — render both, CSS grid overlap takes the taller */}
                        <div className="invisible grid [&>*]:col-start-1 [&>*]:row-start-1" aria-hidden="true">
                          {ghostFront}
                          {ghostBack}
                        </div>

                        {/* Rotating layer */}
                        <div
                          className={`absolute inset-0 [transform-style:preserve-3d] transition-transform duration-600 ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
                        >
                          {/* Front face */}
                          <div className="absolute inset-0 bg-[#fafbfc] rounded-2xl overflow-hidden shadow-sm [backface-visibility:hidden] transition-shadow duration-300 hover:shadow-lg">
                            <div
                              className={`h-[208px] md:h-[240px] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                            >
                              <Icon className="w-12 h-12 md:w-14 md:h-14 text-text/40" />
                            </div>
                            <div className="p-6 md:p-8">
                              <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-2">
                                {item.category}
                              </span>
                              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-text mb-3 flex items-center gap-2">
                                <Icon className="h-5 w-5 shrink-0 text-text" strokeWidth={2.5} />
                                {item.title}
                              </h3>
                              <p className="text-muted text-sm md:text-base leading-relaxed">
                                {item.description}
                              </p>
                              <p className="mt-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                                Learn more →
                              </p>
                            </div>
                          </div>
                          {/* Back face */}
                          <div className="absolute inset-0 bg-[#fafbfc] rounded-2xl overflow-hidden shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col transition-shadow duration-300 hover:shadow-lg">
                            {backContent}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <section
        className="relative w-full overflow-hidden py-20 md:py-28 border-t border-white/10"
        style={{
          background:
            "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 flex justify-center">
          <ScrollReveal direction="up" className="w-full flex justify-center">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-2">
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-6 text-balance">
                Explore how I apply AI in everyday product design through selected work that shows how these tools shape strategy, streamline workflows, and support execution across real projects.
              </p>
              <Link
                href="/#work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60 shrink-0"
              >
                View Featured Work
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

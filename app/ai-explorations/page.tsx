"use client";

import React, { useState, useCallback } from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import { ScrollReveal, ScrollRevealStagger } from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Sparkles,
  Layout,
  Palette,
  Zap,
  Layers,
  Rocket,
  Lightbulb,
  Compass,
  Gauge,
  Users,
  Phone,
} from "lucide-react";
import AiMarketLandscapeWhiteModule from "@/components/ai-explorations/AiMarketLandscapeWhiteModule";

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

const METHOD_CARDS = [
  {
    icon: Lightbulb,
    title: "Augment, not automate",
    body: "I use AI to extend exploration and reduce repetitive effort while keeping product judgment and design intent at the center.",
  },
  {
    icon: Compass,
    title: "Explore broadly, refine selectively",
    body: "AI helps generate breadth quickly, but strong outcomes still depend on careful curation, synthesis, and prioritization.",
  },
  {
    icon: Gauge,
    title: "Speed up the right stages",
    body: "The biggest value often comes from accelerating early framing, iteration, and pattern testing, not skipping thinking.",
  },
  {
    icon: Users,
    title: "Treat it as a collaborator, not an answer",
    body: "The most useful outputs come from active direction, critical evaluation, and repeated shaping.",
  },
];

export default function AIExplorationsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = useCallback((id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      <PageHero
        eyebrow="AI Explorations"
        headline="Designing with AI as a creative and systems-thinking partner"
        paragraph="A curated selection of explorations across AI-assisted workflows, rapid prototyping, interface concepts, generative visual directions, and design process experiments. These studies reflect how I use AI not just to move faster, but to think more broadly, test more directions, and expand the range of what design can do."
        backgroundVariant="ai-explorations"
      />

      <main className="bg-white">
        <AiMarketLandscapeWhiteModule />
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Intro / framing */}
          <section className="py-24 md:py-32">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Selected explorations
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-8 max-w-3xl">
                At the intersection of design, systems, and AI
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
                <p className="text-muted text-base md:text-lg font-medium leading-relaxed">
                  From concept generation to interface ideation and workflow acceleration, these explorations show how AI can support stronger product thinking when paired with design judgment.
                </p>
                <p className="text-muted text-base md:text-lg font-medium leading-relaxed">
                  Rather than treating AI as novelty, I use it as a tool for expanding options, compressing iteration cycles, and uncovering new directions worth refining.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Featured exploration grid */}
          <section className="py-16 md:py-24">
            <ScrollReveal direction="up" className="mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-4">
                Explorations
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text">
                Featured work
              </h2>
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

          {/* Methodology section */}
          <section className="py-24 md:py-32 border-t border-line">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Practice
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-16 max-w-3xl">
                How I approach AI in design
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {METHOD_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <ScrollReveal key={card.title} direction="up" delay={i * 80}>
                    <div className="bg-card border border-line rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#999999] hover:shadow-md hover:-translate-y-1">
                      <Icon className="w-8 h-8 text-blue-600 mb-4" />
                      <h3 className="text-lg font-semibold tracking-tight text-text mb-3">
                        {card.title}
                      </h3>
                      <p className="text-muted text-sm md:text-base leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="py-24 md:py-32">
            <ScrollReveal direction="up">
              <div className="bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 text-center max-w-4xl mx-auto">
                <p className="text-muted text-base md:text-lg font-medium leading-relaxed mb-8">
                  These explorations complement my product work by showing how emerging tools can strengthen systems thinking, accelerate iteration, and unlock new design possibilities.
                </p>
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                  View Featured Work
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}

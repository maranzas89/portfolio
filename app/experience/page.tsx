"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Target,
  Workflow,
  Sparkles,
  Users,
  FileText,
  Download,
  Eye,
} from "lucide-react";

const SNAPSHOT_ITEMS = [
  {
    icon: Target,
    label: "End-to-end product design across ambiguous problem spaces",
  },
  {
    icon: Workflow,
    label: "Complex workflows, systems thinking, and platform design",
  },
  {
    icon: Sparkles,
    label: "AI-augmented design practice and rapid prototyping",
  },
  {
    icon: Users,
    label: "Cross-functional leadership across product, engineering, and stakeholders",
  },
];

const EXPERIENCE_ITEMS = [
  {
    company: "Calbright College",
    role: "Senior Product Designer",
    timeframe: "2022 – Present",
    summary:
      "Designed and led major platform initiatives across student and staff experiences, helping shape more intuitive, service-oriented workflows across the institution.",
    highlights: [
      "Led end-to-end design across key student and staff platform initiatives",
      "Improved usability and clarity across critical educational workflows",
      "Helped establish a stronger foundation for scalable product thinking",
    ],
  },
  {
    company: "DiDi",
    role: "Product Designer",
    timeframe: "2019 – 2022",
    summary:
      "Designed enterprise-facing operational experiences for complex systems, translating ambiguity into clearer workflows, dashboards, and decision-support interfaces.",
    highlights: [
      "Worked on large-scale platform experiences for operational efficiency",
      "Simplified complex information flows into actionable product surfaces",
      "Supported product direction through systems-oriented design thinking",
    ],
  },
  {
    company: "Cisco",
    role: "Product Designer",
    timeframe: "2017 – 2019",
    summary:
      "Contributed to enterprise security product experiences with a focus on dashboards, workflows, and scalable design patterns for sophisticated user needs.",
    highlights: [
      "Designed for complex enterprise environments and expert users",
      "Supported dashboard, workflow, and systems-level design decisions",
      "Contributed to scalable interface patterns in a technical domain",
    ],
  },
];

const STRENGTH_CARDS = [
  {
    title: "Product strategy through design",
    body: "I connect user needs, business goals, and system constraints to shape product direction with clarity.",
  },
  {
    title: "Systems-level thinking",
    body: "I design beyond screens, considering flows, relationships, dependencies, and long-term scalability.",
  },
  {
    title: "AI-enhanced workflow",
    body: "I use AI as part of a modern design practice to accelerate exploration, synthesis, and prototyping.",
  },
  {
    title: "Cross-functional influence",
    body: "I work closely with partners across product, engineering, and stakeholders to move complex work forward.",
  },
];

export default function ExperiencePage() {

  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      <PageHero
        eyebrow="Experience"
        headline="Designing products, systems, and platforms with staff-level scope"
        paragraph="I'm a product designer focused on complex systems, service experiences, and AI-driven platforms. My work spans enterprise tools, operational workflows, and user-centered experiences that connect strategy, execution, and measurable impact."
      />

      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Professional snapshot */}
          <section className="py-24 md:py-32">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Selected strengths
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-16 max-w-3xl">
                What I bring
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {SNAPSHOT_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.label} direction="up" delay={i * 60}>
                    <div className="bg-card border border-line rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#999999] hover:shadow-md hover:-translate-y-1">
                      <Icon className="w-8 h-8 text-blue-600 mb-4" />
                      <p className="text-text font-medium leading-relaxed">{item.label}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          {/* Experience timeline */}
          <section className="py-24 md:py-32 border-t border-line">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Career
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-16 max-w-3xl">
                Experience
              </h2>
            </ScrollReveal>
            <div className="space-y-8 md:space-y-12">
              {EXPERIENCE_ITEMS.map((item, i) => (
                <ScrollReveal key={item.company} direction="up" delay={i * 80}>
                  <div className="bg-card border border-line rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-[#999999] hover:shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-text">
                          {item.company}
                        </h3>
                        <p className="text-lg font-medium text-muted mt-1">{item.role}</p>
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-widest text-muted shrink-0">
                        {item.timeframe}
                      </div>
                    </div>
                    <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                      {item.summary}
                    </p>
                    <ul className="space-y-3">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-muted text-base md:text-lg"
                        >
                          <span className="text-blue-600 mt-1.5 shrink-0">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Strengths / what I bring */}
          <section className="py-24 md:py-32 border-t border-line">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-16 max-w-3xl">
                What I bring
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {STRENGTH_CARDS.map((card, i) => (
                <ScrollReveal key={card.title} direction="up" delay={i * 60}>
                  <div className="bg-card border border-line rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-[#999999] hover:shadow-md hover:-translate-y-1">
                    <h3 className="text-xl font-semibold tracking-tight text-text mb-4">
                      {card.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed">{card.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Resume preview */}
          <section className="py-24 md:py-32 border-t border-line">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Download
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-8 max-w-3xl">
                Resume
              </h2>
              <p className="text-muted text-base md:text-lg font-medium leading-relaxed max-w-2xl mb-12">
                A concise overview of my experience, scope, and selected impact across product design, systems thinking, and platform work.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* TODO: Replace with actual resume file path when available */}
                <a
                  href="/WenLiu_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition hover:bg-blue-700"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                {/* TODO: Wire to actual resume path when file is available */}
                <a
                  href="/WenLiu_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-line px-10 py-5 text-lg font-semibold text-text transition hover:border-[#999999] hover:bg-card"
                >
                  <Eye className="w-5 h-5" />
                  Preview Resume
                </a>
              </div>
              <div className="mt-16 bg-card border border-line rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px] flex items-center justify-center">
                <div className="text-center p-12">
                  <FileText className="w-16 h-16 text-muted mx-auto mb-6" />
                  <p className="text-muted font-medium text-lg">
                    Resume preview placeholder
                  </p>
                  <p className="text-sm text-muted mt-2">
                    {/* TODO: Add embedded PDF or image preview when resume file is ready */}
                    Click &quot;Download Resume&quot; to view the full document.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Closing */}
          <section className="py-24 md:py-32">
            <ScrollReveal direction="up">
              <div className="bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 text-center max-w-4xl mx-auto">
                <p className="text-muted text-base md:text-lg font-medium leading-relaxed mb-8">
                  For a closer look at how this experience translates into product outcomes, explore the selected work throughout the portfolio.
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

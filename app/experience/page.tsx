"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import ExperienceSection from "@/components/ExperienceSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CONTENT_CONTAINER_CLASS } from "@/lib/layout";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      <PageHero
        eyebrow="About Me"
        avatar="/images/avatar.png"
        headline="Designing products, systems, and platforms with staff-level scope"
        paragraph="I'm a product designer focused on complex systems, service experiences, and AI-driven platforms. My work spans enterprise tools, operational workflows, and user-centered experiences that connect strategy, execution, and measurable impact."
      />

      <main>
        <ExperienceSection />

        {/* Closing */}
        <section className="py-24 md:py-32 bg-white">
          <div className={CONTENT_CONTAINER_CLASS}>
            <ScrollReveal direction="up">
              <div className="bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 text-center max-w-4xl mx-auto">
                <p className="text-muted text-base md:text-lg font-medium leading-relaxed mb-8">
                  For a closer look at how this experience translates into product outcomes, explore
                  the selected work throughout the portfolio.
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
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}

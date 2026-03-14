"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import ExperienceSection from "@/components/ExperienceSection";
import SectionNav from "@/components/SectionNav";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { EXPERIENCE_SECTIONS } from "@/lib/section-nav-config";

const EXPERIENCE_SECTIONS_DISPLAY = EXPERIENCE_SECTIONS.map(({ id, label }) => ({
  id,
  label: label.replace(/^\d+\.\s*/, ""),
}));

export default function ExperiencePage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />
      <SectionNav sections={EXPERIENCE_SECTIONS_DISPLAY} />

      <PageHero
        eyebrow="About Me"
        avatar="/images/avatar.png"
        headline="Designing AI-driven products, prototyping workflows, and bridging design with implementation"
        paragraph="Product designer focused on complex systems, workflow-heavy products, and AI-assisted prototyping across enterprise experiences."
        paragraphVariant="compact"
        primaryCta={{ label: "View Work", href: "/#work" }}
        secondaryCta={{ label: "Download Resume", href: "/FJ/WenLiu-Resume.pdf", download: "WenLiu-Resume.pdf" }}
      />

      <main>
        <ExperienceSection />
      </main>

      <PageFooter />
    </div>
  );
}

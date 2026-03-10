"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import ExperienceSection from "@/components/ExperienceSection";
import SectionNav from "@/components/SectionNav";
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
        headline="Designing products, systems, and AI-driven platforms with staff-level scope"
        paragraph="Product designer focused on complex systems, operational workflows, and user-centered experiences."
        paragraphVariant="compact"
        primaryCta={{ label: "View Work", href: "/#work" }}
        secondaryCta={{ label: "Download Resume", href: "/FJ/WenLiu_Resume.pdf", download: "WenLiu_Resume.pdf" }}
      />

      <main>
        <ExperienceSection />
      </main>

      <PageFooter />
    </div>
  );
}

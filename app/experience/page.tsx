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
        eyebrow={<>Think deeply. Build fast.<br className="md:hidden" /> Ship with purpose.</>}
        avatar="/images/avatar.png"
        headline="Designing enterprise products, workflows, and implementation-aware experiences"
        paragraph="Product designer with 10+ years of experience turning ambiguity into clear product direction across enterprise SaaS, education platforms, and operational systems."
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

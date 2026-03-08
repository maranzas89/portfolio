"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageHero from "@/components/PageHero";
import PageFooter from "@/components/PageFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { Quote } from "lucide-react";

const FEATURED_QUOTES = [
  {
    quote:
      "Wen brings an unusual mix of strong visual judgment, systems thinking, and product intuition. She has a sharp ability to turn complexity into clarity.",
    name: "Former Product Partner",
    role: "Cross-functional Collaborator",
    relationship: "Product partner",
  },
  {
    quote:
      "She consistently elevated the work beyond the initial ask and brought thoughtful structure to problems that were still undefined.",
    name: "Cross-functional Collaborator",
    role: "Design & Product",
    relationship: "Collaborator",
  },
  {
    quote:
      "What stood out most was her ability to move fluidly between strategic thinking and design execution without losing rigor in either.",
    name: "Former Manager",
    role: "Design & Product",
    relationship: "Manager",
  },
  {
    quote:
      "She has a strong instinct for simplifying complexity and shaping experiences that feel both elegant and operationally grounded.",
    name: "Engineering Partner",
    role: "Engineering",
    relationship: "Engineering partner",
  },
  {
    quote:
      "Wen brings initiative, taste, and follow-through. She doesn't just respond to direction — she helps define the path.",
    name: "Design Colleague",
    role: "Design",
    relationship: "Design colleague",
  },
  {
    quote:
      "She was able to create alignment across stakeholders while still protecting the integrity of the user experience.",
    name: "Product Leader",
    role: "Product",
    relationship: "Product leader",
  },
];

const THEMES = [
  { title: "Craft & clarity", ids: [0, 3] },
  { title: "Strategy & systems", ids: [0, 2] },
  { title: "Leadership & collaboration", ids: [1, 5] },
  { title: "Ownership & trust", ids: [4, 5] },
];

export default function KindWordsPage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      <PageHero
        eyebrow="Kind Words"
        headline="Feedback from collaborators, partners, and leaders"
        paragraph="Some of the most meaningful signals come from the people you build with. These notes reflect how I show up across collaboration, systems thinking, craft, and the ability to bring clarity to complex work."
      />

      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          {/* Featured testimonials */}
          <section className="py-24 md:py-32">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-16 max-w-3xl">
                What people say
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {FEATURED_QUOTES.map((item, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 60}>
                  <div className="bg-card border border-line rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-[#999999] hover:shadow-lg hover:-translate-y-1">
                    <Quote className="w-10 h-10 text-blue-600/40 mb-6" />
                    <blockquote className="text-xl md:text-2xl font-medium tracking-tight text-text leading-relaxed mb-8">
                      &quot;{item.quote}&quot;
                    </blockquote>
                    <footer className="flex flex-col gap-1">
                      <cite className="not-italic font-semibold text-text">
                        — {item.name}
                      </cite>
                      <span className="text-sm text-muted font-medium uppercase tracking-widest">
                        {item.relationship}
                      </span>
                    </footer>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Themes section */}
          <section className="py-24 md:py-32 border-t border-line">
            <ScrollReveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
                Themes
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text mb-16 max-w-3xl">
                Recurring themes
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {THEMES.map((theme, i) => (
                <ScrollReveal key={theme.title} direction="up" delay={i * 80}>
                  <div className="bg-card border border-line rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#999999] hover:shadow-md hover:-translate-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-text mb-4">
                      {theme.title}
                    </h3>
                    <div className="space-y-4">
                      {theme.ids.map((id) => (
                        <p
                          key={id}
                          className="text-muted text-sm leading-relaxed line-clamp-2"
                        >
                          &quot;{FEATURED_QUOTES[id].quote}&quot;
                        </p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section className="py-24 md:py-32">
            <ScrollReveal direction="up">
              <div className="bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 text-center max-w-4xl mx-auto">
                <p className="text-muted text-base md:text-lg font-medium leading-relaxed mb-8">
                  Great products are built through thoughtful collaboration. I value the trust, candor, and shared ambition that make strong teams and meaningful work possible.
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

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Layout, Sparkles, GitBranch, FileText, Menu, X } from "lucide-react";
import HeroBackgroundFX from "@/components/HeroBackgroundFX";
import { WORK_SUB_LINKS } from "@/lib/nav-config";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const workSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="relative bg-bg text-text">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full min-w-0 border-b border-gray-200 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1600px] mx-auto w-full min-w-0 px-4 py-4 sm:px-6 sm:py-5 md:px-16 lg:px-24 md:py-8 flex justify-between items-center gap-4">
          <a href="#" className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight uppercase text-text shrink-0">
            Wen Liu
          </a>
          {/* Desktop nav - hidden below 768px */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm lg:text-base font-semibold uppercase tracking-widest text-muted shrink-0">
            <a href="#work" className="nav-link-underline active text-text">
              Work
            </a>
            <Link href="/ai-explorations" className="nav-link-underline">
              AI Explorations
            </Link>
            <Link href="/experience" className="nav-link-underline">
              Experience
            </Link>
            <Link href="/kind-words" className="nav-link-underline">
              Kind Words
            </Link>
          </div>
          {/* Mobile hamburger - visible below 768px */}
          <button
            type="button"
            className="flex md:hidden p-2 -mr-2 text-text hover:text-muted transition-colors shrink-0 items-center justify-center"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile menu dropdown - visible below 768px when open */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="max-w-[1600px] mx-auto w-full px-4 py-5 flex flex-col gap-4">
              <div>
                <a
                  href="#work"
                  className="nav-link-underline active text-text font-semibold uppercase tracking-widest text-sm block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </a>
                <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-gray-200 pl-4">
                  {WORK_SUB_LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-muted font-medium text-sm hover:text-text transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/ai-explorations"
                className="nav-link-underline text-muted font-semibold uppercase tracking-widest text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Explorations
              </Link>
              <Link
                href="/experience"
                className="nav-link-underline text-muted font-semibold uppercase tracking-widest text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="/kind-words"
                className="nav-link-underline text-muted font-semibold uppercase tracking-widest text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kind Words
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - FX background */}
      <header
        className="relative overflow-hidden min-h-[592px] border-b border-white/14 isolate"
        style={{
          background:
            "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
        }}
      >
        <HeroBackgroundFX />
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-6xl">
              <p className="text-xs font-bold tracking-[0.09em] text-[rgba(235,241,255,0.85)] mb-5">
                Product Design · AI-Native Building · Systems
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold leading-[1.05] tracking-[-0.04em] text-[#f6f7fb] mb-0">
                Hi, I&apos;m Wen,<br />
                a product designer and AI-native builder
              </h1>
              <p className="text-base md:text-lg text-[rgba(232,238,249,0.82)] font-normal leading-relaxed mt-5 md:mt-6 mb-0 max-w-[920px]">
                I design at staff-level scope across complex systems and enterprise experiences, using AI to prototype, explore, and build faster while bridging product thinking, design craft, front-end fluency, and iterative testing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 mb-0 w-full max-w-[1184px]">
                <div className="hero-card group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Layout className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">Product Design</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Complex systems & platforms</p>
                </div>
                <div className="hero-card group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">AI-Native Builder</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Prototype, explore, build</p>
                </div>
                <div className="hero-card group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <GitBranch className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">Systems Thinking</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Flows, logic, scalability</p>
                </div>
                <div className="hero-card group">
                  <div className="flex items-center gap-3 mb-2.5">
                    <FileText className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">Research-Driven Design</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Insights, testing, iteration</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-[18px] mt-8">
                <a
                  href="mailto:williamliu_1989@hotmail.com"
                  className="inline-block rounded-[14px] bg-[#2563ff] px-8 py-4 text-base font-bold text-white transition hover:bg-[#1d4ed8]"
                >
                  Let&apos;s talk
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-white font-medium text-base hover:underline transition-colors"
                >
                  View Featured Work
                  <span className="inline-block" aria-hidden>↓</span>
                </a>
              </div>
            </div>
        </div>
      </header>

      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Work Section */}
        <section
          id="work"
          ref={workSectionRef}
          className="relative overflow-visible py-32"
        >
          <div className="relative z-10 mb-20 bg-transparent">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text">
              Design that gets results
            </h2>
          </div>
          <div className="relative z-10 flex flex-col gap-12 md:gap-16 bg-transparent">
            {/* Project 1: Calbright (图在右) */}
            <a
              href="/work/calbright/student-portal"
              className="feature-card bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 cursor-pointer group transition-colors hover:border-[#999999] block"
            >
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-[340px]">
                <div className="-mt-2">
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 leading-snug">
                    Shaping a More Guided Student Portal Experience
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Designing a more supportive student experience around clarity, action, and progress—helping learners better understand what matters, what comes next, and how to move forward.
                  </p>
                </div>
                <div className="mt-28 md:mt-auto flex items-center gap-6">
                  <span className="text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    8k+
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[280px] leading-snug block">
                    Students supported statewide<br />across learning programs
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#8a9bb8] rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-gray-200">
                <img
                  src="/images/calbright/calbright-landing.svg"
                  alt="Calbright Student Portal redesigned dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-[30%_center] bg-[#8a9bb8] group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
            </a>

            {/* Project 2: Calbright Staff Portal (图在左) */}
            <a
              href="/work/calbright/staff-portal"
              className="feature-card bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 cursor-pointer group transition-colors hover:border-[#999999] block"
            >
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-[340px]">
                <div className="-mt-2">
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 leading-snug">
                    Shaping the Staff Portal for Operational Workflows
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Designed a 0→1 staff platform to support cross-functional workflows,
                    improve visibility into student context, and create a more effective
                    operational experience for internal teams.
                  </p>
                </div>
                <div className="mt-14 md:mt-auto flex items-center gap-6">
                  <span className="text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    35%
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[280px] leading-snug block">
                    Measured efficiency gains across <span className="whitespace-nowrap">core staff workflows</span>
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#8a9bb8] rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-gray-200">
                <img
                  src="/images/calbright/staff-portal-mock.png"
                  alt="Calbright Staff Portal - Student profile view"
                  className="absolute inset-0 w-full h-full object-cover object-center bg-[#8a9bb8] group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
            </a>

            {/* Project 3: DiDi (图在右) */}
            <a
              href="/work/didi"
              className="feature-card bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 cursor-pointer group transition-colors hover:border-[#999999] block"
            >
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-[340px]">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 leading-snug">
                    DiDi · EagleEye Endpoint Protection Platform
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg -mt-1">
                    Designed investigation and governance workflows for an
                    enterprise security platform. Turned ML threat signals into
                    triage and response interfaces that analysts use during
                    live incidents.
                  </p>
                </div>
                <div className="mt-36 md:mt-auto flex items-center gap-6">
                  <span className="text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    +75%
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[280px] leading-snug block">
                    Increase in enterprise trial-to-paid<br />conversion performance
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-white rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center">
                <img
                  src="/images/didi/eagleeye-dashboard.png"
                  alt="EagleEye enterprise security platform dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
            </a>

          </div>

        </section>
        </div>
      </main>

      {/* Approach & About Section - Full width dark bg like Hero */}
      <section id="approach" className="bg-black text-white py-32 border-t border-white/20">
          <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
                  Playbook &<br />
                  Capabilities.
                </h2>
                <a
                  href="#methodology"
                  className="inline-block mt-16 rounded-xl bg-blue-600 px-10 py-5 text-xl font-semibold text-white transition hover:bg-blue-700"
                >
                  View My Design Methodology
                </a>
              </div>
              <div className="lg:col-span-8">
                <div id="methodology" className="mb-24">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 border-b-2 border-white/20 pb-5 mb-10">
                    Methodology
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-2xl font-bold mb-4 text-white">Hypothesis-Driven</h4>
                      <p className="text-base text-white leading-relaxed font-light">
                        Turn ambiguous product problems into testable hypotheses.
                        Ship the smallest workflow that can prove value before
                        investing in scale.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-4 text-white">AI-Human Synergy</h4>
                      <p className="text-base text-white leading-relaxed font-light">
                        Design workflows that balance automation with clarity.
                        Users see why the system recommends an action, what state
                        they&apos;re in, and how to override when needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="about">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white/60 border-b-2 border-white/20 pb-5 mb-10">
                    Technical Toolkit
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-5 py-3 border-2 border-white/30 rounded-full text-base font-medium text-white hover:border-white/60 transition-colors cursor-default bg-white/5">
                      Figma Variables & Dev Mode
                    </span>
                    <span className="px-5 py-3 border-2 border-white/30 rounded-full text-base font-medium text-white hover:border-white/60 transition-colors cursor-default bg-white/5">
                      Cursor & AI-assisted prototyping
                    </span>
                    <span className="px-5 py-3 border-2 border-white/30 rounded-full text-base font-medium text-white hover:border-white/60 transition-colors cursor-default bg-white/5">
                      HTML / CSS / JavaScript
                    </span>
                    <span className="px-5 py-3 border-2 border-white/30 rounded-full text-base font-medium text-white hover:border-white/60 transition-colors cursor-default bg-white/5">
                      Claude & ChatGPT
                    </span>
                    <span className="px-5 py-3 border-2 border-white/30 rounded-full text-base font-medium text-white hover:border-white/60 transition-colors cursor-default bg-white/5">
                      GA4 / Maze usability testing
                    </span>
                    <span className="px-5 py-3 border-2 border-white/30 rounded-full text-base font-medium text-white hover:border-white/60 transition-colors cursor-default bg-white/5">
                      Agile Product Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Footer - continues dark theme */}
      <footer className="bg-black text-white py-32 md:py-40">
        <div className="border-b border-white/20 pb-20 mb-20">
          <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-8">
                Open to new opportunities
              </p>
              <a
                href="mailto:williamliu_1989@hotmail.com"
                className="text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-tighter leading-none text-white hover:opacity-70 transition-opacity"
              >
                Let&apos;s Connect
              </a>
            </div>
            <div className="flex gap-10 text-sm font-semibold uppercase tracking-widest text-white/60">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a
                href="/WenLiu_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                resume
              </a>
            </div>
          </div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center text-sm font-semibold uppercase tracking-widest text-white/60">
            <p>© 2026 Wen Liu</p>
            <p>Designed with Logic</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

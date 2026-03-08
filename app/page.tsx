"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroGlow from "@/components/HeroGlow";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-semibold tracking-tight uppercase text-text">
            Wen Liu
          </a>
          <div className="hidden md:flex items-center gap-12 text-base font-semibold uppercase tracking-widest text-muted">
            <a
              href="#work"
              className="nav-link-underline"
            >
              Work
            </a>
            <a
              href="#approach"
              className="nav-link-underline"
            >
              Approach
            </a>
            <a
              href="#about"
              className="nav-link-underline"
            >
              About
            </a>
            <a
              href="/WenLiu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav-link-underline"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - full width black */}
      <header className="relative overflow-hidden bg-black text-white border-b border-white/20">
        <HeroGlow />
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-bold tracking-widest text-white/80 mb-3">
                Product Design
                <span className="inline-block text-2xl mx-2 align-middle">·</span>
                Web Design
                <span className="inline-block text-2xl mx-2 align-middle">·</span>
                Mobile Design
                <span className="inline-block text-2xl mx-2 align-middle">·</span>
                User Research
                <span className="inline-block text-2xl mx-2 align-middle">·</span>
                Webflow
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-snug text-white mb-10 max-w-2xl lg:max-w-none">
                Hi, I&apos;m Wen, a product designer
                <br />
                working at staff-level scope
                <br />
                across complex systems and AI-driven enterprise platforms.
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="mailto:williamliu_1989@hotmail.com"
                  className="inline-block rounded-xl bg-blue-600 px-10 py-5 text-xl font-semibold text-white transition hover:bg-blue-700"
                >
                  Let&apos;s talk
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-white font-semibold hover:underline transition-colors"
                >
                  View Featured Work
                  <span className="inline-block" aria-hidden>↓</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 flex items-end justify-center lg:justify-end">
              <img
                src="/avatar.png"
                alt="Wen Liu"
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-2xl object-cover"
              />
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
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-snug">
                    Calbright · Student & Staff Portal, and AI works
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Design work spanning a large-scale student portal redesign, a 0→1 staff platform, and AI-driven product explorations.
                  </p>
                </div>
                <div className="mt-14 md:mt-auto flex items-end gap-6">
                  <span className="text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    8k+
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[180px] leading-snug pb-2">
                    Students supported statewide across learning programs
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#8a9bb8] rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-gray-200">
                <img
                  src="/images/calbright/calbright-landing.svg"
                  alt="Calbright Student Portal redesigned dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-center bg-[#8a9bb8] group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
            </a>

            {/* Project 2: DiDi (图在左) */}
            <a
              href="/work/didi"
              className="feature-card bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 cursor-pointer group transition-colors hover:border-[#999999] block"
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
                <div className="mt-36 md:mt-auto flex items-end gap-6">
                  <span className="text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    +75%
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[180px] leading-snug pb-2">
                    Increase in enterprise trial-to-paid conversion
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-white rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center">
                <div className="mockup-image absolute inset-0 overflow-hidden group-hover:scale-[1.05] transition-transform duration-500">
                  <img
                    src="/images/didi/aa.svg"
                    alt="EagleEye enterprise security platform on laptop"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </a>

            {/* Project 3: Cisco (图在右) */}
            <div className="feature-card bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 cursor-pointer group transition-colors hover:border-[#999999]">
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-[340px]">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-snug">
                    Cisco · Network Assurance Intelligence
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Designed telemetry dashboards and alert-to-resolution workflows
                    for Cisco&apos;s network assurance platform. Built a design system
                    that improved consistency and sped up delivery across the
                    product suite.
                  </p>
                </div>
                <div className="mt-14 md:mt-auto flex items-end gap-6">
                  <span className="text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    $15M+
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[180px] leading-snug pb-2">
                    Business impact attributed to product adoption
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#E8EBED] rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-gray-200">
                <div className="mockup-image absolute inset-4 bg-white rounded-xl shadow-sm flex flex-row gap-4 p-4 border border-gray-200 group-hover:scale-[1.05]">
                  <div className="w-1/4 h-full bg-gray-50 rounded" />
                  <div className="flex-1 h-full bg-slate-100/50 rounded flex items-center justify-center">
                    <span className="text-slate-400 font-medium tracking-widest text-sm text-center">
                      [ CISCO MOCKUP ]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4: Enterprise Design System */}
            <div className="feature-card bg-card border border-line rounded-[40px] p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 cursor-pointer group transition-colors hover:border-[#999999]">
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-[340px]">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-snug">
                    Enterprise Design System
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Built a design system for complex, data-heavy applications.
                    Introduced reusable components, design tokens, and guidelines
                    that cut UI inconsistency and aligned design and engineering
                    on shared patterns.
                  </p>
                </div>
                <div className="mt-14 md:mt-auto flex items-end gap-6">
                  <span className="text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    30%
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[180px] leading-snug pb-2">
                    Reduction in design-to-development cycle time
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#303833] rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center border border-gray-200">
                <div className="mockup-image absolute inset-4 bg-[#1A1F1C] rounded-xl shadow-2xl flex flex-col p-6 border border-gray-200 group-hover:scale-[1.05]">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="w-full h-full bg-[#242A27] rounded flex items-center justify-center">
                    <span className="text-green-400/50 font-medium tracking-widest text-sm">
                      [ DESIGN SYSTEM MOCKUP ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
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

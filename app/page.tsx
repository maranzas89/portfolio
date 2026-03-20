"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Layout, Sparkles, GitBranch, FileText, Menu, X } from "lucide-react";
import HeroBackgroundFX from "@/components/HeroBackgroundFX";
import PlaybookMethodology from "@/components/PlaybookMethodology";
import { WORK_SUB_LINKS, AI_SUB_LINKS, MAILTO_LETS_CONNECT } from "@/lib/nav-config";
import { ResumeLink } from "@/components/ResumeLink";


export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWorkActive, setIsWorkActive] = useState(false);
  const workSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkHash = () => setIsWorkActive(typeof window !== "undefined" && window.location.hash === "#work");
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Handle hash-based scroll with nav offset
  useEffect(() => {
    if (window.location.hash === "#work") {
      requestAnimationFrame(() => {
        const el = document.getElementById("work");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, []);

  return (
    <div className="relative bg-bg text-text">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full min-w-0 md:border-b md:border-gray-200 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 md:backdrop-blur-xl md:backdrop-saturate-150"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1600px] mx-auto w-full min-w-0 px-4 py-4 sm:px-6 sm:py-5 md:px-16 lg:px-24 md:py-8 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight uppercase text-text shrink-0">
              Wen Liu
            </a>
          </div>
          {/* Desktop nav - hidden below 768px */}
          <div className="font-accent hidden md:flex items-center gap-8 lg:gap-12 text-sm lg:text-base font-semibold uppercase tracking-widest text-muted shrink-0">
            <a href="#work" className={`nav-link-underline hover:text-gray-700 transition-colors ${isWorkActive ? "active text-text" : "text-muted"}`}>
              Projects
            </a>
            <Link href="/ai-explorations" className="nav-link-underline text-muted hover:text-gray-700 transition-colors">
              EXPLORATIONS
            </Link>
            <Link href="/experience" className="nav-link-underline text-muted hover:text-gray-700 transition-colors">
              ABOUT ME
            </Link>
            <Link href="/kind-words" className="nav-link-underline text-muted hover:text-gray-700 transition-colors">
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
        {/* Mobile menu - full-page overlay when open (md:hidden) */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-[60] bg-white">
            <button
              type="button"
              className="absolute top-4 right-4 p-2 -m-2 text-text hover:text-muted transition-colors z-10"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="h-full overflow-y-auto flex flex-col pt-[calc(1rem+1.75rem+0.625rem)] px-6 gap-8">
              <a
                href="/"
                className="font-accent text-text font-bold uppercase tracking-widest text-base hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <div className="flex flex-col gap-8">
                <a
                  href="#work"
                  className="font-accent text-muted font-semibold uppercase tracking-widest text-base block hover:text-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <div className="flex flex-col gap-8 ml-4 border-l-2 border-gray-200 pl-5">
                  {WORK_SUB_LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-muted font-medium text-base hover:text-text transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <Link
                  href="/ai-explorations"
                  className="font-accent text-muted font-semibold uppercase tracking-widest text-base hover:text-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EXPLORATIONS
                </Link>
                <div className="flex flex-col gap-8 ml-4 border-l-2 border-gray-200 pl-5">
                  {AI_SUB_LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-muted font-medium text-base hover:text-text transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/experience"
                className="font-accent text-muted font-semibold uppercase tracking-widest text-base hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT ME
              </Link>
              <Link
                href="/kind-words"
                className="font-accent text-muted font-semibold uppercase tracking-widest text-base hover:text-gray-700 transition-colors"
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
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <p className="font-accent text-sm text-white/60 font-bold tracking-widest uppercase mb-5">
                Systems Thinking. Product Judgment. Fast Prototyping.
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.2] tracking-[-0.04em] mb-0">
                Hi, I&apos;m Wen,<br />
                a product designer for complex systems<br />
                and enterprise workflows
              </h1>
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 mb-0 w-full">
                <div className="hero-card group text-left">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Layout className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">Product Design</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Complex systems, workflows & platforms</p>
                </div>
                <div className="hero-card group text-left">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">Rapid Prototyping</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Prototype, test, and validate early</p>
                </div>
                <div className="hero-card group text-left">
                  <div className="flex items-center gap-3 mb-2.5">
                    <GitBranch className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">Systems Thinking</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Workflow logic & scalable system structure</p>
                </div>
                <div className="hero-card group text-left">
                  <div className="flex items-center gap-3 mb-2.5">
                    <FileText className="w-5 h-5 text-blue-400 shrink-0" />
                    <p className="text-[#f6f7fb] font-bold text-base">Implementation-Aware</p>
                  </div>
                  <p className="text-[rgba(232,238,249,0.64)] text-sm leading-[1.45]">Front-end fluency, dev collaboration</p>
                </div>
              </div>
              <div className="relative z-20 flex justify-center mt-8">
                <a
                  href="#work"
                  className="inline-block cursor-pointer rounded-[14px] bg-[#2563ff] px-10 py-5 text-lg font-bold text-white transition hover:bg-[#1d4ed8]"
                >
                  View Featured Projects
                </a>
              </div>
            </div>
        </div>
      </header>

      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Work Section */}
        <section
          ref={workSectionRef}
          className="relative overflow-visible py-32"
        >
          <div id="work" className="relative z-10 mb-20 bg-transparent scroll-mt-[130px]">
            <span className="font-accent text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text">
              Design that gets results
            </h2>
          </div>
          <div className="relative z-10 flex flex-col gap-12 md:gap-16 bg-transparent">
            {/* Project 1: DiDi (图在右) */}
            <a
              href="/work/didi"
              className="feature-card bg-card rounded-[40px] p-8 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
            >
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-0">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 leading-snug">
                    DiDi · EagleEye Endpoint Protection Platform
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Designed investigation and governance workflows for an
                    enterprise security platform. Turned ML threat signals into
                    triage and response interfaces that analysts use during
                    live incidents.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                  <span className="font-accent text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
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

            {/* Project 2: Calbright Staff Portal (图在左) */}
            <a
              href="/work/calbright/staff-portal"
              className="feature-card bg-card rounded-[40px] p-8 md:p-10 lg:p-14 flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
            >
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-0">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 leading-snug">
                    Shaping the Staff Portal for Operational Workflows
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Designed a 0→1 staff platform to support cross-functional workflows,
                    improve visibility into student context, and create a more effective
                    operational experience for internal teams.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                  <span className="font-accent text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    35%
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[280px] leading-snug block">
                    Measured efficiency gains across <span className="whitespace-nowrap">core staff workflows</span>
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#8a9bb8] rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center">
                <img
                  src="/images/calbright/staff-portal-mock.png"
                  alt="Calbright Staff Portal - Student profile view"
                  className="absolute inset-0 w-full h-full object-cover object-center bg-[#8a9bb8] group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
            </a>

            {/* Project 3: Calbright Student Portal (图在右) */}
            <a
              href="/work/calbright/student-portal"
              className="feature-card bg-card rounded-[40px] p-8 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 cursor-pointer group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block"
            >
              <div className="flex-1 flex flex-col h-full justify-between w-full min-h-0">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 leading-snug">
                    Shaping a More Guided Student Portal Experience
                  </h3>
                  <p className="text-muted leading-relaxed font-light text-base md:text-lg">
                    Designing a more supportive student experience around clarity, action, and progress—helping learners better understand what matters, what comes next, and how to move forward.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                  <span className="font-accent text-6xl md:text-[6rem] font-medium tracking-tighter leading-none text-text">
                    8k+
                  </span>
                  <span className="text-sm md:text-base text-muted max-w-[280px] leading-snug block">
                    Students supported statewide<br />across learning programs
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#8a9bb8] rounded-[24px] overflow-hidden aspect-[4/3] relative flex items-center justify-center">
                <img
                  src="/images/calbright/calbright-landing.svg"
                  alt="Calbright Student Portal redesigned dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-[30%_center] bg-[#8a9bb8] group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
            </a>

          </div>

        </section>
        </div>
      </main>

      {/* Playbook & Capabilities - AI Design Methodology */}
      <PlaybookMethodology />

      {/* Footer - continues dark theme */}
      <footer className="bg-black text-white py-32 md:py-40">
        <div className="border-b border-white/20 pb-20 mb-20">
          <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div>
              <p className="font-accent text-sm font-semibold uppercase tracking-widest text-white/60 mb-8">
                Open to new opportunities
              </p>
              <a
                href={MAILTO_LETS_CONNECT}
                className="cursor-pointer text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-tighter leading-none text-white hover:text-blue-400 transition-colors"
                aria-label="Open email to connect"
              >
                Let&apos;s Connect
              </a>
            </div>
            <div className="font-accent flex gap-10 text-sm font-semibold uppercase tracking-widest text-white/60">
              <a href="https://www.linkedin.com/in/wen-liu-157aaa82/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/maranzas89" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                GitHub
              </a>
              <ResumeLink className="hover:text-blue-400 transition-colors">
                resume
              </ResumeLink>
            </div>
          </div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="font-accent flex justify-between items-center text-sm font-semibold uppercase tracking-widest text-white/60">
            <p>© 2026 Wen Liu</p>
            <p className="font-accent">Shaped with craft, systems thinking, and product judgment</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

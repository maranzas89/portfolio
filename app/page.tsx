"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import PlaybookMethodology from "@/components/PlaybookMethodology";
import dynamic from "next/dynamic";
const HeroBackgroundFX = dynamic(() => import("@/components/HeroBackgroundFX"), {
  ssr: false,
  loading: () => null,
});

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
          {/* Mobile hamburger - left side, visible below 768px */}
          <button
            type="button"
            className="flex md:hidden p-2 -ml-2 text-text hover:text-muted transition-colors shrink-0 items-center justify-center"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          {/* Desktop: william on left */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a href="#" className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight uppercase text-text shrink-0">
              Wen Liu
            </a>
          </div>
          {/* Desktop nav */}
          <div className="font-accent hidden md:flex items-center gap-8 lg:gap-12 text-sm lg:text-base font-semibold uppercase tracking-widest text-muted shrink-0">
            <a href="#work" className={`nav-link-underline hover:text-gray-700 transition-colors ${isWorkActive ? "active text-text" : "text-muted"}`}>
              Projects
            </a>
            <Link href="/ai-explorations" className="nav-link-underline text-muted hover:text-gray-700 transition-colors">
              AI EXPLORATIONS
            </Link>
            <Link href="/experience" className="nav-link-underline text-muted hover:text-gray-700 transition-colors">
              ABOUT ME
            </Link>
            <Link href="/kind-words" className="nav-link-underline text-muted hover:text-gray-700 transition-colors">
              Kind Words
            </Link>
          </div>
          {/* Mobile: william on right, visible below 768px */}
          <a href="#" className="md:hidden text-lg sm:text-xl font-semibold tracking-tight uppercase text-text shrink-0">
            Wen Liu
          </a>
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
                  AI EXPLORATIONS
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
        className="relative overflow-hidden border-b border-white/14 isolate"
        style={{
          background:
            "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
        }}
      >
        <HeroBackgroundFX />
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-[98px] pb-8 md:pt-[130px] md:pb-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <p className="font-accent text-[13px] md:text-[14px] text-white/60 font-medium tracking-[0.2em] uppercase mb-5">
                Systems Thinking. Product Judgment. Fast Prototyping.
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.2] tracking-[-0.04em] mb-0">
                Hi, I&apos;m Wen, a product designer<br />
                for complex systems and enterprise workflows
              </h1>
            </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-8 mb-0 w-full max-w-[1060px] mx-auto">
                <div className="text-center rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] px-6 py-5 transition-transform duration-300 hover:-translate-y-1 cursor-default">
                  <p className="font-accent text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">+75%</p>
                  <p className="text-white/80 text-sm font-medium mt-2 tracking-wide uppercase">Trial Conversion</p>
                  <p className="text-white/70 text-[11px] font-medium mt-1">DiDi</p>
                </div>
                <div className="text-center rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] px-6 py-5 transition-transform duration-300 hover:-translate-y-1 cursor-default">
                  <p className="font-accent text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">8K+</p>
                  <p className="text-white/80 text-sm font-medium mt-2 tracking-wide uppercase">Users Scaled</p>
                  <p className="text-white/70 text-[11px] font-medium mt-1">Calbright</p>
                </div>
                <div className="text-center rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] px-6 py-5 transition-transform duration-300 hover:-translate-y-1 cursor-default">
                  <p className="font-accent text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">35%</p>
                  <p className="text-white/80 text-sm font-medium mt-2 tracking-wide uppercase">Efficiency Gains</p>
                  <p className="text-white/70 text-[11px] font-medium mt-1">Calbright</p>
                </div>
                <div className="text-center rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] px-6 py-5 transition-transform duration-300 hover:-translate-y-1 cursor-default">
                  <p className="font-accent text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">$15M+</p>
                  <p className="text-white/80 text-sm font-medium mt-2 tracking-wide uppercase">Product Revenue</p>
                  <p className="text-white/70 text-[11px] font-medium mt-1">Cisco</p>
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
          className="relative overflow-visible pt-8 pb-32"
        >
          <div id="work" className="relative z-10 mb-12 bg-transparent scroll-mt-[130px]">
            <span className="font-accent text-sm font-semibold uppercase tracking-widest text-muted block mb-6">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text">
              Design that gets results
            </h2>
          </div>
          <div className="relative z-10 flex flex-col gap-12 md:gap-16 bg-transparent">
            {/* Project 1: DiDi (image dominant) */}
            <a
              href="/work/didi"
              className="feature-card bg-card rounded-[40px] p-6 md:p-8 lg:p-10 flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-400 block"
            >
              <div className="w-full bg-white rounded-[24px] overflow-hidden aspect-[16/9] relative mb-6">
                <img
                  src="/images/didi/eagleeye-dashboard.png"
                  alt="EagleEye enterprise security platform dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1.5 leading-snug">
                    DiDi · EagleEye Endpoint Protection Platform
                  </h3>
                  <p className="text-muted font-light text-base md:text-lg leading-relaxed">
                    Designed investigation and governance workflows for an enterprise security platform.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-accent text-5xl md:text-6xl font-medium tracking-tighter leading-none text-text">
                    +75%
                  </span>
                  <span className="text-sm text-muted max-w-[140px] leading-snug block">
                    Trial-to-paid conversion
                  </span>
                </div>
              </div>
            </a>

            {/* Project 2: Calbright Student Portal (image dominant) */}
            <a
              href="/work/calbright/student-portal"
              className="feature-card bg-card rounded-[40px] p-6 md:p-8 lg:p-10 flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-400 block"
            >
              <div className="w-full bg-[#8a9bb8] rounded-[24px] overflow-hidden aspect-[16/9] relative mb-6">
                <img
                  src="/images/calbright/calbright-landing.svg"
                  alt="Calbright Student Portal redesigned dashboard"
                  className="absolute inset-0 w-full h-full object-cover object-[30%_center] bg-[#8a9bb8] group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1.5 leading-snug">
                    Calbright · Shaping a More Guided Student Portal Experience
                  </h3>
                  <p className="text-muted font-light text-base md:text-lg leading-relaxed">
                    Designing a supportive student experience around clarity, action, and progress.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-accent text-5xl md:text-6xl font-medium tracking-tighter leading-none text-text">
                    8K+
                  </span>
                  <span className="text-sm text-muted max-w-[140px] leading-snug block">
                    Students supported statewide
                  </span>
                </div>
              </div>
            </a>

            {/* Project 3: Calbright Staff Portal (image dominant) */}
            <a
              href="/work/calbright/staff-portal"
              className="feature-card bg-card rounded-[40px] p-6 md:p-8 lg:p-10 flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-400 block"
            >
              <div className="w-full bg-[#8a9bb8] rounded-[24px] overflow-hidden aspect-[16/9] relative mb-6">
                <img
                  src="/images/calbright/staff-portal-mock.png"
                  alt="Calbright Staff Portal - Student profile view"
                  className="absolute inset-0 w-full h-full object-cover object-center bg-[#8a9bb8] group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1.5 leading-snug">
                    Calbright · Shaping the Staff Portal for Operational Workflows
                  </h3>
                  <p className="text-muted font-light text-base md:text-lg leading-relaxed">
                    Designed a 0-to-1 staff platform to support cross-functional workflows.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-accent text-5xl md:text-6xl font-medium tracking-tighter leading-none text-text">
                    35%
                  </span>
                  <span className="text-sm text-muted max-w-[140px] leading-snug block">
                    Staff workflow efficiency gains
                  </span>
                </div>
              </div>
            </a>

            {/* Project 4: Cisco NAE (image dominant) */}
            <a
              href="/work/cisco"
              className="feature-card bg-card rounded-[40px] p-6 md:p-8 lg:p-10 flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-400 block"
            >
              <div className="w-full bg-[#1B2A3D] rounded-[24px] overflow-hidden aspect-[16/9] relative mb-6">
                <img
                  src="/images/cisco/cisco-cover-mockup.png"
                  alt="Cisco NAE Security Adherence dashboard"
                  className="absolute inset-0 w-full h-auto m-auto object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1.5 leading-snug">
                    Cisco · Network Assurance Security Platform
                  </h3>
                  <p className="text-muted font-light text-base md:text-lg leading-relaxed">
                    Designed the security compliance dashboard for enterprise network monitoring at scale.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-accent text-5xl md:text-6xl font-medium tracking-tighter leading-none text-text">
                    $15M+
                  </span>
                  <span className="text-sm text-muted max-w-[140px] leading-snug block">
                    Product revenue generated
                  </span>
                </div>
              </div>
            </a>

            {/* Project 5: AI Explorations (image dominant) */}
            <a
              href="/ai-explorations"
              className="feature-card bg-card rounded-[40px] p-6 md:p-8 lg:p-10 flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-400 block"
            >
              <div className="w-full bg-gray-100 rounded-[24px] overflow-hidden aspect-[16/9] relative mb-6">
                <img
                  src="/images/AI_explore.jpg"
                  alt="AI Explorations — prototyping and design iterations"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1.5 leading-snug">
                    AI · Shaping Product Direction Through Prototyping
                  </h3>
                  <p className="text-muted font-light text-base md:text-lg leading-relaxed">
                    Turned early ideas into testable concepts through rapid explorations, interface prototypes, and workflow experiments.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-accent text-5xl md:text-6xl font-medium tracking-tighter leading-none text-text">
                    30+
                  </span>
                  <span className="text-sm text-muted max-w-[140px] leading-snug block">
                    Design iterations shipped
                  </span>
                </div>
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
          {/* Desktop: single row */}
          <div className="hidden sm:flex font-accent justify-between items-center text-sm font-semibold uppercase tracking-widest text-white/60">
            <p>© 2026 Wen Liu</p>
            <p>Shaped with craft, systems thinking, and product judgment</p>
          </div>
          {/* Mobile: stacked layout */}
          <div className="sm:hidden font-accent text-sm font-semibold uppercase tracking-widest text-white/60 flex justify-between items-end">
            <div>
              <p>2026</p>
              <p>Wen Liu</p>
            </div>
            <div className="text-right">
              <p>Shaped with</p>
              <p>systems thinking</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

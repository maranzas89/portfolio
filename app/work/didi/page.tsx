"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import Link from "next/link";
import HeroGlow from "@/components/HeroGlow";
import WorkNav from "@/components/WorkNav";
import CalbrightCaseStudyTabs from "@/components/CalbrightCaseStudyTabs";
import SectionNav from "@/components/SectionNav";
import { DIDI_SECTIONS } from "@/lib/section-nav-config";
import AnimatedWorkflowHero from "@/components/AnimatedWorkflowHero";
import { EyeOff, GitMerge, TrendingDown, AlertCircle, Shield, GitBranch, BarChart3, Layers, LayoutGrid, Crown, Quote, Target, CheckCircle, TrendingUp, Zap, Rocket } from "lucide-react";

/* --- Image Preview Modal --- */
function ImagePreviewModal({
  open,
  onClose,
  src,
  placeholder,
  caption,
  fillImage,
}: {
  open: boolean;
  onClose: () => void;
  src?: string;
  placeholder?: string;
  caption?: string;
  fillImage?: boolean;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2"
    >
      <div className="relative w-[98vw] max-w-[1800px] max-h-[96vh] flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-white/80 text-4xl leading-none z-10"
          aria-label="Close"
        >
          ×
        </button>
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col w-full">
          {src ? (
            fillImage ? (
              <div className="relative w-full h-[78vh] overflow-hidden">
                <img
                  src={src}
                  alt={caption ?? ""}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            ) : (
              <img src={src} alt={caption ?? ""} className="w-full h-auto max-h-[88vh] object-contain" />
            )
          ) : (
            <div className="w-full min-h-[50vh] max-h-[88vh] aspect-video flex items-center justify-center bg-[#E4E4E7] p-8">
              <span className="text-muted text-center">{placeholder ?? "Image placeholder"}</span>
            </div>
          )}
          {caption && (
            <p className="text-sm text-muted font-medium p-4 text-center bg-white border-t border-line">{caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* --- Reveal: scroll-into-view fade animation (no external deps) --- */
/* On mobile (reduceMotion): render immediately to avoid scroll-linked reflows and Safari instability */
function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  reduceMotion = false,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  reduceMotion?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(reduceMotion);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const hiddenTransform =
    direction === "up"
      ? "translate-y-12"
      : direction === "left"
        ? "-translate-x-12"
        : "translate-x-12";

  return (
    <div
      ref={ref}
      style={reduceMotion ? undefined : { transitionDelay: `${delay}ms`, willChange: isVisible ? "auto" : "transform, opacity, filter" }}
      className={reduceMotion ? `opacity-100 ${className}` : `transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0 blur-none" : `opacity-0 blur-[4px] ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* --- Simple inline SVG icons (no lucide) --- */
function IconTrendingUp({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function IconZap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg className="w-6 h-6 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
function IconBox({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}
function IconUsers({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
function IconCalendar({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function IconBriefcase({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function IconAlert({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-red-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}
function IconGitBranch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
    </svg>
  );
}
function IconLightbulb({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
function IconCheckCircle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconWorkflow({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconLayers({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}
function IconAward({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

type PreviewState = { open: true; src?: string; placeholder?: string; caption?: string; fillImage?: boolean } | { open: false };

export default function DidiCaseStudyPage() {
  const [preview, setPreview] = useState<PreviewState>({ open: false });

  const openPreview = useCallback((opts: { src?: string; placeholder?: string; caption?: string; fillImage?: boolean }) => {
    setPreview({ open: true, ...opts });
  }, []);
  const closePreview = useCallback(() => setPreview({ open: false }), []);
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-bg text-text min-h-screen min-h-[100dvh] overflow-x-hidden touch-manipulation">
      <ImagePreviewModal
        open={preview.open}
        onClose={closePreview}
        src={preview.open ? preview.src : undefined}
        placeholder={preview.open ? preview.placeholder : undefined}
        caption={preview.open ? preview.caption : undefined}
        fillImage={preview.open && preview.fillImage}
      />
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <WorkNav embed />
        <CalbrightCaseStudyTabs />
      </header>
      <SectionNav sections={DIDI_SECTIONS} />
      <div className="pt-16 md:pt-32">
      {/* Hero Section */}
      <header className="hero-image bg-black text-white pt-6 pb-12 md:pt-8 md:pb-16 relative overflow-hidden border-b border-white/20 min-h-[540px] md:min-h-[580px]">
        <HeroGlow />
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 pt-8 md:pt-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8">
            <Reveal reduceMotion={false} direction="up" delay={0}>
              <p className="font-accent text-sm text-white/60 font-bold tracking-widest uppercase mb-5">DiDi · Shaping an Enterprise Security Platform</p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-4 max-w-4xl">
                EagleEye Policy Center 2.0
              </h1>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={200}>
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-6 max-w-5xl">
                Designed a unified policy engine that drove $6M in revenue while improving operational efficiency for enterprise security teams.
              </p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={210}>
              <div className="mb-6">
                <p className="text-white/50 uppercase tracking-widest font-medium mb-1 text-sm">Security Operator Voice</p>
                <p className="text-lg md:text-xl text-white/75 font-semibold italic max-w-5xl">&quot;Policy management across devices and departments is finally streamlined.&quot;</p>
              </div>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={225}>
              <div className="grid grid-cols-1 gap-6 text-sm mb-12">
                <div>
                  <p className="text-white/50 uppercase tracking-widest font-medium mb-1">Scope</p>
                  <p className="text-white/90 font-medium">Staff-level platform design</p>
                </div>
              </div>
            </Reveal>
            <div className="mt-[44px] grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal reduceMotion={false} direction="up" delay={300}>
              <div className="group bg-white/5 hover:bg-white/10 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <IconTrendingUp />
                <h3 className="font-medium text-2xl mb-1 mt-3">83%</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Trial Conversion</p>
              </div>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={400}>
              <div className="group bg-white/5 hover:bg-white/10 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <IconShield />
                <h3 className="font-medium text-2xl mb-1 mt-3">100K+</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Endpoints Managed</p>
              </div>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={500}>
              <div className="group bg-white/5 hover:bg-white/10 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <IconZap />
                <h3 className="font-medium text-2xl mb-1 mt-3">-65%</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Task Time (20m→7m)</p>
              </div>
            </Reveal>
          </div>
            </div>
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end min-h-0">
              <Reveal reduceMotion={false} direction="left" delay={200}>
                <AnimatedWorkflowHero className="w-full max-w-[720px] min-h-[480px]" reduceMotion={false} />
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto py-24 px-8 md:px-16 lg:px-24 space-y-32">
        {/* Project Snapshot */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-line pb-12">
            <Reveal reduceMotion={false} direction="up" delay={100}>
              <div className="flex items-center gap-3 mb-2">
                <IconBox />
                <p className="text-xs text-muted uppercase tracking-widest font-medium">Product</p>
              </div>
              <p className="font-medium text-lg text-text">EagleEye EPP</p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={200}>
              <div className="flex items-center gap-3 mb-2">
                <IconUsers />
                <p className="text-xs text-muted uppercase tracking-widest font-medium">Users</p>
              </div>
              <p className="font-medium text-lg text-text">SecOps Operators</p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={300}>
              <div className="flex items-center gap-3 mb-2">
                <IconCalendar />
                <p className="text-xs text-muted uppercase tracking-widest font-medium">Timeline</p>
              </div>
              <p className="font-medium text-lg text-text">2020 – 2023</p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={400}>
              <div className="flex items-center gap-3 mb-2">
                <IconBriefcase />
                <p className="text-xs text-muted uppercase tracking-widest font-medium">Role</p>
              </div>
              <p className="font-medium text-lg text-text">
              <span className="md:hidden">UX DL (Design Expert)</span>
              <span className="hidden md:inline">UX Design Lead (Design Expert)</span>
            </p>
            </Reveal>
          </div>
        </section>

        {/* 1. Problem Section */}
        <section id="challenge" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
          <Reveal reduceMotion={false} direction="right" className="md:col-span-5 pr-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">01. Challenge</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Fragmented. Error-prone</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-6">A fragmented policy setup made configuration difficult to scan, easy to misconfigure, and costly to complete.</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Blind Spots: No department-level visibility.", icon: EyeOff },
                  { label: "Conflicts: Logic clashes & validation errors.", icon: GitMerge },
                  { label: "Abandonment: 40% task drop-off rate.", icon: TrendingDown },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 text-red-700/90 text-sm font-medium"
                  >
                    <Icon className="w-5 h-5 shrink-0 text-red-600" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="left" className="md:col-span-7 md:border-l-2 md:border-line md:pl-12">
            <div
              className="group cursor-pointer"
              onClick={() => openPreview({ src: "/images/didi/pdfpage17.svg", caption: "Fig 1. The legacy 4-day configuration process." })}
            >
              <div className="overflow-hidden aspect-video relative rounded-2xl ">
                <img
                  src="/images/didi/pdfpage17.svg"
                  alt="Legacy 4-day configuration workflow showing Day 1-4 process with validation and failure points"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-5 text-center">Fig 1. The legacy 4-day configuration process.</p>
            </div>
          </Reveal>
        </section>

        {/* 2. System Thinking */}
        <section id="system-thinking" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
          <Reveal reduceMotion={false} direction="right" className="md:col-span-7 order-2 md:order-1 md:border-r-2 md:border-line md:pr-12">
            <div
              className="group cursor-pointer"
              onClick={() => openPreview({ src: "/images/didi/pdfpage14.svg", caption: "Fig 2. Device-centric vs. People-centric architecture." })}
            >
              <div className="overflow-hidden aspect-video relative rounded-2xl ">
                <img
                  src="/images/didi/pdfpage14.svg"
                  alt="Device-centric vs. People-centric architecture framework diagram"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-5 text-center">Fig 2. Device-centric vs. People-centric architecture.</p>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="left" className="md:col-span-5 order-1 md:order-2 md:pl-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <IconGitBranch />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">02. System Thinking</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">Re-architecting governance</h3>
              <p className="text-muted text-base md:text-lg mb-8 font-medium">
                Legacy systems mapped policies to devices, causing clashes. <span className="whitespace-nowrap">I introduced an <strong className="text-text">&quot;Aggregated Policies&quot;</strong> framework:</span>
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-5 bg-blue-50 rounded-2xl">
                  <Shield className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
                  <div>
                    <strong className="text-text block mb-1">Default Rules</strong>
                    <span className="text-muted text-sm font-medium">Inheritable organizational baselines.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 bg-blue-50 rounded-2xl">
                  <GitBranch className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
                  <div>
                    <strong className="text-text block mb-1">Exception Rules</strong>
                    <span className="text-muted text-sm font-medium">Safe overrides bound to specific departments.</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 3. Approach & IA */}
        <section id="approach-ia" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
          <Reveal reduceMotion={false} direction="right" className="md:col-span-5 pr-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <IconLightbulb />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">03. Approach & IA</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-8">Prioritization at scale</h3>
              <ul className="space-y-8 text-base md:text-lg text-muted font-medium relative pl-10 before:absolute before:inset-y-2 before:left-[15px] before:w-[2px] before:bg-blue-600">
                <li className="relative pl-3">
                  <span className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-blue-600 text-blue-600">
                    <BarChart3 className="w-4 h-4" />
                  </span>
                  <strong className="text-text block mb-1">UX Benchmarking</strong>
                  <span className="font-medium">HEART model baseline (4.12).</span>
                </li>
                <li className="relative pl-3">
                  <span className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-blue-600 text-blue-600">
                    <Layers className="w-4 h-4" />
                  </span>
                  <strong className="text-text block mb-1">P0/P1/P2 Categorization</strong>
                  <span className="font-medium">Strict element hierarchy reducing cognitive load.</span>
                </li>
                <li className="relative pl-3">
                  <span className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-blue-600 text-blue-600">
                    <LayoutGrid className="w-4 h-4" />
                  </span>
                  <strong className="text-text block mb-1">Unified Hub</strong>
                  <span className="font-medium">Consolidated device IDs into departmental structures.</span>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="left" className="md:col-span-7 md:border-l-2 md:border-line md:pl-12">
            <div
              className="group cursor-pointer"
              onClick={() => openPreview({ src: "/images/didi/pdfpage15.svg", caption: "Fig 3. Wireframes defining the P0/P1/P2 hierarchy." })}
            >
              <div className="overflow-hidden aspect-video relative rounded-2xl ">
                <img
                  src="/images/didi/pdfpage15.svg"
                  alt="IA Wireframes defining the P0/P1/P2 hierarchy"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-5 text-center">Fig 3. Wireframes defining the P0/P1/P2 hierarchy.</p>
            </div>
          </Reveal>
        </section>

        {/* 3b. Systematized for Scale — bridge between framing and execution */}
        <section id="systematized" className="space-y-10 [overflow-anchor:auto]">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <IconLayers />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">04. Design System</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Systematized for Scale</h3>
            <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-5xl">
              Extended a self-authored design system across iterations to improve consistency, speed up delivery, and support more scalable product evolution.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="max-w-4xl">
              <div className="overflow-hidden rounded-none aspect-video cursor-pointer group border border-line min-h-[200px] [overflow-anchor:none]">
                <img
                  src="/images/didi/design-system-model.png"
                  alt="Design System Model"
                  loading="lazy"
                  decoding="async"
                  className="md:hidden block w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onClick={() => openPreview({ src: "/images/didi/design-system-model.png", caption: "Design System Model" })}
                />
                <img
                  src="/images/didi/pdfpage22.svg"
                  alt="EagleEye Design System"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width={800}
                  height={450}
                  className="hidden md:block w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onClick={() => openPreview({ src: "/images/didi/pdfpage22.svg", caption: "EagleEye Design System" })}
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">EagleEye Design System</p>
            </div>
          </Reveal>
        </section>

        {/* 5. Solutions */}
        <section id="solutions" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <IconCheckCircle />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">05. Solutions</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Streamlining the enterprise</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-4 max-w-5xl">Reduced policy configuration complexity to create a more scannable experience and improve administrative efficiency across devices and departments.</p>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="overflow-hidden rounded-none aspect-video cursor-pointer group border border-line">
              <img
                src="/images/didi/streamlining-enterprise-mobile.png"
                alt="From Cluttered to Scannable"
                loading="lazy"
                className="md:hidden block w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onClick={() => openPreview({ src: "/images/didi/streamlining-enterprise-mobile.png", caption: "From Cluttered to Scannable" })}
              />
              <img
                src="/images/didi/pdfpage923.svg"
                alt="From Cluttered to Scannable"
                loading="lazy"
                className="hidden md:block w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onClick={() => openPreview({ src: "/images/didi/pdfpage923.svg", caption: "From Cluttered to Scannable" })}
              />
            </div>
          </Reveal>
        </section>

        {/* 4a. Simplifying the Flow — staff-level workflow redesign */}
        <section id="simplifying-flow" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
          <Reveal reduceMotion={false} direction="right" className="md:col-span-8 order-2 md:order-1 md:border-r-2 md:border-line md:pr-10">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-none aspect-video">
                <img
                  src="/images/didi/simplified-workflow-mobile.png"
                  alt="Simplified Workflow"
                  loading="lazy"
                  className="md:hidden block w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onClick={() => openPreview({ src: "/images/didi/simplified-workflow-mobile.png", caption: "Single-session configuration flow" })}
                />
                <img
                  src="/images/didi/pdfpage20.svg"
                  alt="Single-Session Workflow"
                  loading="lazy"
                  className="hidden md:block w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onClick={() => openPreview({ src: "/images/didi/pdfpage20.svg", caption: "Single-Session Workflow" })}
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">Single-session configuration flow</p>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="left" className="md:col-span-4 order-1 md:order-2 md:pl-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <IconWorkflow />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">06. Workflow Simplification</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Simplifying the Flow for Operational Efficiency</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-6">
                Redesigned the configuration flow from 7 steps to 3, reducing interaction overhead and creating a faster, more scalable administrative experience.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "7 → 3 steps", icon: Layers },
                  { label: "Clearer task flow", icon: GitBranch },
                  { label: "Higher efficiency", icon: TrendingUp },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 text-blue-700/90 text-sm font-medium"
                  >
                    <Icon className="w-5 h-5 shrink-0 text-blue-600" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* 4b. Guided Survey Modal — between Solutions and Impact */}
        <section id="survey-modal" className="space-y-10">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <IconLightbulb />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">07. Reframing Feedback</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
              Reframing Feedback Through a Guided Survey Modal
            </h3>
            <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-5xl">
              Building on the Heart Modal interaction pattern, I created a more structured survey modal that improved clarity, reduced response friction, and generated more actionable feedback—raising the experience score from 4.12 to 7.48.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Foundation</p>
                </div>
                <p className="font-medium text-text">Heart Modal pattern</p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Measured Lift</p>
                </div>
                <p className="font-medium text-text">4.12 → 7.48</p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Design Impact</p>
                </div>
                <p className="font-medium text-text">Lower friction, stronger signal</p>
              </div>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <p className="text-muted text-base md:text-lg font-medium mb-6 max-w-5xl">
              Rather than simply reusing the existing modal, I adapted the pattern into a more guided survey flow—making the interaction feel lighter for users while producing feedback that teams could actually act on.
            </p>
            <div
              className="overflow-hidden rounded-none aspect-video cursor-pointer group border border-line"
              role="button"
              tabIndex={0}
            >
              <img
                src="/images/didi/survey-modal-ux-validation-mobile.png"
                alt="UX Validation Survey Model"
                loading="lazy"
                className="md:hidden block w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onClick={() => openPreview({ src: "/images/didi/survey-modal-ux-validation-mobile.png", caption: "Survey Modal for UX Validation" })}
              />
              <img
                src="/images/didi/pdfpage28.svg"
                alt="Commercial Impact"
                loading="lazy"
                className="hidden md:block w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onClick={() => openPreview({ src: "/images/didi/pdfpage28.svg", caption: "Commercial Impact" })}
              />
            </div>
            <p className="text-sm text-muted font-medium mt-4">Survey Modal for UX Validation</p>
          </Reveal>
        </section>

        {/* 8. System Expansion — live security command */}
        <section id="system-expansion" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
          <Reveal reduceMotion={false} direction="right" className="md:col-span-4 md:pr-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-blue-600 shrink-0" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">08. System Expansion</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">From Strategy Center to Live Security Command</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-6">
                The strategy center redesign improved the product and extended its system logic into a real-time security dashboard for more dynamic, decision-ready monitoring.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Real-Time Visibility", icon: Zap },
                  { label: "System-Level Extension", icon: Layers },
                  { label: "Operational Decision Support", icon: Target },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 text-blue-700/90 text-sm font-medium"
                  >
                    <Icon className="w-5 h-5 shrink-0 text-blue-600" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="left" className="md:col-span-8 md:border-l-2 md:border-line md:pl-10">
            <div>
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => openPreview({ src: "/images/didi/Untitled-212.svg", caption: "Designed as a system extension, the live screen made security signals more visible, dynamic, and decision-ready.", fillImage: true })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openPreview({ src: "/images/didi/Untitled-212.svg", caption: "Designed as a system extension, the live screen made security signals more visible, dynamic, and decision-ready.", fillImage: true })}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/didi/Untitled-212.svg"
                    alt="EagleEye live monitoring screen"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <p className="text-sm text-muted font-medium mt-4 text-left">
                Designed as a system extension, the live screen made security signals more visible, dynamic, and decision-ready.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Staff-Level Ownership */}
        <Reveal reduceMotion={false} direction="up">
          <section id="staff-ownership" className="space-y-10">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">09. Staff-Level Ownership</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">From Ambiguity to Validated Outcomes</h3>
            <p className="text-muted text-base md:text-lg font-medium max-w-5xl">
              Drove the work from ambiguous problem framing to validated outcomes—shaping strategy, defining reusable patterns, aligning stakeholders, and grounding decisions in data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Strategy</p>
                </div>
                <p className="font-medium text-text">
                  Framed the problem, identified feedback gaps, and translated business needs into product direction.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Systems Thinking</p>
                </div>
                <p className="font-medium text-text">
                  Extended modal patterns into a reusable feedback framework with clearer, actionable signals.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Validation</p>
                </div>
                <p className="font-medium text-text">
                  Connected design decisions to measurable outcomes, including the score lift from 4.12 to 7.48.
                </p>
              </div>
            </div>
            <div className="pt-4">
            <a
              href="/FJ/WenLiu_DiDi_Full_Case_Study.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-lg font-medium text-white transition hover:bg-blue-700"
            >
              View DiDi Full Case Study
              <span className="inline-block" aria-hidden>→</span>
            </a>
            </div>
          </section>
        </Reveal>

        {/* 9. Commercial Impact — full-bleed on desktop; contained on mobile to avoid Safari scroll bugs */}
        <Reveal reduceMotion={false} direction="up">
          <section
            id="impact"
            className="relative w-full max-md:max-w-[1600px] max-md:mx-auto md:left-1/2 md:-translate-x-1/2 md:w-screen md:max-w-none text-white py-24 md:py-32 overflow-hidden border-t border-b border-white/10"
            style={{
              background:
                "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            {!isMobile && <HeroGlow />}
            <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
              <div className="flex items-center gap-3 mb-4">
                <IconTrendingUp className="w-5 h-5 text-blue-400" />
                <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest">10. Impact</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">Commercial Impact</h3>
              <p className="text-white/80 font-medium mb-10 max-w-4xl md:whitespace-nowrap">
                Measurable improvements in UX score, efficiency, and error reduction across the EagleEye platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">UX Score</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">+81%</span>
                      <span className="text-xl lg:text-2xl text-white/60 mb-2">improvement</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium mb-4">4.12 → 7.48</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                        <span>Before</span>
                        <span>After</span>
                      </div>
                      <div className="h-3 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 rounded-l-full" style={{ width: "81%" }} />
                        <div className="bg-white/20 rounded-r-full" style={{ width: "19%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Efficiency</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">65%</span>
                      <span className="text-xl lg:text-2xl text-white/60 mb-2">time reduction</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium mb-4">20 mins → 7 mins</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                        <span>Before</span>
                        <span>After</span>
                      </div>
                      <div className="h-3 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 rounded-l-full" style={{ width: "65%" }} />
                        <div className="bg-white/20 rounded-r-full" style={{ width: "35%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Error Drop</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">90%</span>
                      <span className="text-xl lg:text-2xl text-white/60 mb-2">reduction</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium mb-4">10 → 1 error per user</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                        <span>Before</span>
                        <span>After</span>
                      </div>
                      <div className="h-3 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 rounded-l-full" style={{ width: "10%" }} />
                        <div className="bg-white/20 rounded-r-full" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">NPS</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">8.3</span>
                      <span className="text-xl lg:text-2xl text-white/60 mb-2">score</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium mb-4">Net Promoter Score (0–10)</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                        <span>0</span>
                        <span>10</span>
                      </div>
                      <div className="h-3 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 rounded-l-full" style={{ width: "83%" }} />
                        <div className="bg-white/20 rounded-r-full" style={{ width: "17%" }} />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Reflection — editorial, matches Staff Portal 0→1 */}
        <Reveal reduceMotion={false} direction="up">
          <section id="reflection">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="w-4 h-4 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">11. Reflection</h2>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-text leading-relaxed max-w-5xl italic mt-4">
              &quot;This work was a reminder that staff-level design is not just about shipping polished interfaces—it is about identifying where clarity breaks down, creating frameworks that scale, and ensuring design decisions hold up through measurable outcomes. The strongest impact often comes from redesigning the signal, not just the surface.&quot;
            </blockquote>
          </section>
        </Reveal>

        {/* Back link */}
        <div className="pt-2 pb-20 text-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-muted hover:text-text transition-colors text-sm font-medium uppercase tracking-widest"
          >
            <span>←</span> Back to Selected Work
          </Link>
        </div>
        </div>
      </main>
      </div>
    </div>
  );
}

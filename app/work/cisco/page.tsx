"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import Link from "next/link";
import HeroGlow from "@/components/HeroGlow";
import WorkNav from "@/components/WorkNav";
import CalbrightCaseStudyTabs from "@/components/CalbrightCaseStudyTabs";
import SectionNav from "@/components/SectionNav";
import { CISCO_SECTIONS } from "@/lib/section-nav-config";
import { AlertCircle, Shield, Search, FileWarning, GitBranch, Layers, BarChart3, Eye, Network, Component, Table, SlidersHorizontal, Quote, CheckCircle, Users, TrendingUp, Zap } from "lucide-react";

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
          &times;
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

/* --- Inline SVG icons --- */
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

type PreviewState = { open: true; src?: string; placeholder?: string; caption?: string; fillImage?: boolean } | { open: false };

export default function CiscoCaseStudyPage() {
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
      <SectionNav sections={CISCO_SECTIONS} />
      <div className="pt-16 md:pt-32">
      {/* ===== Hero Section ===== */}
      <header className="hero-image bg-black text-white pt-6 pb-12 md:pt-8 md:pb-16 relative overflow-hidden border-b border-white/20">
        <HeroGlow />
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-8 md:pt-10 relative z-10">
          <Reveal reduceMotion={false} direction="up" delay={0}>
            <p className="font-accent text-sm text-white/60 font-bold tracking-widest uppercase mb-5">Cisco &middot; Enterprise Network Security</p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-4">
              Unified Security Adherence Interface
            </h1>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={150}>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-6 max-w-5xl">
              Designed the security compliance dashboard for Cisco NAE — enabling network engineers to detect, triage, and resolve policy violations across enterprise data centers at scale.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={175}>
            <div className="mb-6">
              <p className="text-white/50 uppercase tracking-widest font-medium mb-1 text-sm">Network Engineer Voice</p>
              <p className="text-lg md:text-xl text-white/75 font-semibold italic max-w-5xl">&quot;Policy violations across tenants and endpoints are finally visible in one place.&quot;</p>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={200}>
            <div className="grid grid-cols-1 gap-6 text-sm mb-12">
              <div>
                <p className="text-white/50 uppercase tracking-widest font-medium mb-1">Scope</p>
                <p className="text-white/90 font-medium">Security compliance visibility for ACI data centers</p>
              </div>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <IconShield className="w-6 h-6" />
                <h3 className="font-semibold text-3xl mb-1 mt-4">200+</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Policy Issues Surfaced</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <IconZap className="w-6 h-6" />
                <h3 className="font-semibold text-3xl mb-1 mt-4">5&times;</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Faster Violation Identification</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <IconTrendingUp className="w-6 h-6" />
                <h3 className="font-semibold text-3xl mb-1 mt-4">6</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Visualization Types</p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ===== Main Content ===== */}
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
              <p className="font-medium text-lg text-text">Network Assurance Engine</p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={200}>
              <div className="flex items-center gap-3 mb-2">
                <IconUsers />
                <p className="text-xs text-muted uppercase tracking-widest font-medium">Users</p>
              </div>
              <p className="font-medium text-lg text-text">NetOps &amp; SecOps Engineers</p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={300}>
              <div className="flex items-center gap-3 mb-2">
                <IconCalendar />
                <p className="text-xs text-muted uppercase tracking-widest font-medium">Timeline</p>
              </div>
              <p className="font-medium text-lg text-text">2018 &ndash; 2020</p>
            </Reveal>
            <Reveal reduceMotion={false} direction="up" delay={400}>
              <div className="flex items-center gap-3 mb-2">
                <IconBriefcase />
                <p className="text-xs text-muted uppercase tracking-widest font-medium">Role</p>
              </div>
              <p className="font-medium text-lg text-text">
                <span className="md:hidden">UX/UI Designer</span>
                <span className="hidden md:inline">UX/UI Designer</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* ===== 01. Challenge ===== */}
        <section id="challenge" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">01. Challenge</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Fragmented Visibility</h3>
            <p className="text-muted text-base md:text-lg font-medium">No unified view of security compliance. Engineers cross-referenced CLI outputs, APIC logs, and spreadsheets — critical misconfigurations went undetected for days.</p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { label: "Blind Spots", desc: "Violations hidden across tenants.", icon: Eye },
                { label: "Manual Triage", desc: "Hours spent correlating logs.", icon: Search },
                { label: "Missed Context", desc: "No root-cause tracing.", icon: FileWarning },
              ].map(({ label, desc, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-700/90 text-sm font-medium"
                >
                  <Icon className="w-4 h-4 shrink-0 text-red-600" />
                  <span><strong>{label}:</strong> {desc}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={200}>
            <div className="group cursor-pointer" onClick={() => openPreview({ src: "/images/cisco/fig1-legacy-workflow.svg", caption: "Fig 1. The legacy fragmented workflow for security compliance." })}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/cisco/fig1-legacy-workflow.svg"
                  alt="Legacy fragmented workflow for security compliance triage"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">Fig 1. The legacy fragmented workflow for security compliance.</p>
            </div>
          </Reveal>
        </section>

        {/* ===== 02. System Thinking ===== */}
        <section id="system-thinking" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">02. System Thinking</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Multi-Axis Assurance</h3>
            <p className="text-muted text-base md:text-lg font-medium">
              Designed a multi-axis leaderboard model surfacing compliance across five dimensions — engineers spot systemic patterns instead of chasing individual violations.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl">
                <Shield className="w-4 h-4 shrink-0 text-blue-600" />
                <span className="text-sm font-medium"><strong className="text-text">Security Policies</strong> <span className="text-muted">— Contract, tenant, and endpoint compliance.</span></span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl">
                <Network className="w-4 h-4 shrink-0 text-blue-600" />
                <span className="text-sm font-medium"><strong className="text-text">Topology Awareness</strong> <span className="text-muted">— Relationships between fabric nodes and policies.</span></span>
              </div>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={200}>
            <div className="group cursor-pointer" onClick={() => openPreview({ src: "/images/cisco/fig2-multi-axis-model.svg", caption: "Fig 2. Multi-axis assurance leaderboard model." })}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/cisco/fig2-multi-axis-model.svg"
                  alt="Multi-axis assurance leaderboard model with five compliance axes"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">Fig 2. Multi-axis assurance leaderboard model.</p>
            </div>
          </Reveal>
        </section>

        {/* ===== 03. Approach & IA ===== */}
        <section id="approach-ia" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">03. Approach &amp; IA</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Progressive Disclosure at Scale</h3>
            <p className="text-muted text-base md:text-lg font-medium">
              3-tier model: summary dashboard → event table → violation drill-down. Engineers triage at the right altitude without losing context.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={200}>
            <div className="group cursor-pointer" onClick={() => openPreview({ src: "/images/cisco/fig3-progressive-disclosure.svg", caption: "Fig 3. Three-tier progressive disclosure model." })}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/cisco/fig3-progressive-disclosure.svg"
                  alt="Three-tier progressive disclosure model from summary to detail"
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">Fig 3. Three-tier progressive disclosure model.</p>
            </div>
          </Reveal>
        </section>

        {/* ===== 04. Data Visualization ===== */}
        <section id="data-viz" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">04. Data Visualization</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Making Topology Visible</h3>
            <p className="text-muted text-base md:text-lg font-medium">
              Radial view for cross-tenant violations — invisible relationships between endpoints, contracts, and fabric nodes become immediately scannable.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl">
                <Network className="w-4 h-4 shrink-0 text-blue-600" />
                <span className="text-sm font-medium"><strong className="text-text">Cross-Tenant Mapping</strong> <span className="text-muted">— Visual links between source and destination violations.</span></span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl">
                <Eye className="w-4 h-4 shrink-0 text-blue-600" />
                <span className="text-sm font-medium"><strong className="text-text">Pattern Recognition</strong> <span className="text-muted">— Systemic issues visible at a glance.</span></span>
              </div>
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={200}>
            <div className="group cursor-pointer" onClick={() => openPreview({ src: "/images/cisco/fig4-chord-diagram-annotated.svg", caption: "Fig 4. Radial view mapping policy violations across fabric topology." })}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/cisco/fig4-chord-diagram-annotated.svg"
                  alt="Radial view mapping policy violations across fabric topology"
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">Fig 4. Radial view mapping policy violations across fabric topology.</p>
            </div>
          </Reveal>
        </section>

        {/* ===== 05. Design System ===== */}
        <section id="design-system" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <Component className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">05. Design System</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">CNAE Visual Style Guide</h3>
            <p className="text-muted text-base md:text-lg font-medium">
              Built the design system from 0→1 for Cisco NAE.
            </p>
            <p className="text-muted text-sm md:text-base mt-2">
              Defining color tokens, severity standards, typography, component patterns, and interaction guidelines into a unified visual style guide.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-3">
              {[
                { label: "Severity system", desc: "5-level color (From US Homeland Security)", icon: AlertCircle },
                { label: "Data tables", desc: "Sortable, filterable violations", icon: Table },
                { label: "Filter panel", desc: "Multi-axis faceted filtering", icon: SlidersHorizontal },
              ].map(({ label, desc, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl"
                >
                  <Icon className="w-4 h-4 shrink-0 text-blue-600" />
                  <span className="text-sm font-medium"><strong className="text-text">{label}</strong> <span className="text-muted">— {desc}</span></span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={200}>
            <a href="/CNAE_UI_Master.pdf" target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/cisco/fig5-design-system.svg"
                  alt="CNAE Visual Style Guide — click to view full PDF"
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">Fig 5. CNAE Visual Style Guide — click to view full PDF →</p>
            </a>
          </Reveal>
        </section>

        {/* ===== 06. Solutions ===== */}
        <section id="solutions" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">06. Solutions</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">From Fragmented to Unified</h3>
            <p className="text-muted text-base md:text-lg font-medium">
              Single pane of glass for violation detection, triage, and resolution — replaces the fragmented multi-tool workflow entirely.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div>
              <div className="rounded-2xl">
                <img
                  src="/images/cisco/fig6-final-dashboard.svg"
                  alt="Unified Security Adherence Interface"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-muted font-medium mt-4">Fig 6. Unified Security Adherence Interface.</p>
            </div>
          </Reveal>
        </section>

        {/* ===== 07. Key Decisions ===== */}
        <section id="key-decisions" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">07. Key Decisions</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Decisions That Shaped the Product</h3>
            <p className="text-muted text-base md:text-lg font-medium">
              Four choices that defined how engineers interact with the NAE security adherence module.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Decision 1</p>
                </div>
                <strong className="text-text block mb-2 text-lg">Root cause as first-class entity</strong>
                <p className="text-muted text-sm font-medium">
                  Violations surfaced by root cause, not as flat events — engineers fix the source, not the symptom.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Decision 2</p>
                </div>
                <strong className="text-text block mb-2 text-lg">Every number is a doorway</strong>
                <p className="text-muted text-sm font-medium">
                  Every metric is clickable — drilling into filtered violations turns static data into navigable context.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Decision 3</p>
                </div>
                <strong className="text-text block mb-2 text-lg">Least Used Policies as proactive signal</strong>
                <p className="text-muted text-sm font-medium">
                  Underutilized policies surfaced proactively — teams catch stale rules before they become risk.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Network className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Decision 4</p>
                </div>
                <strong className="text-text block mb-2 text-lg">Radial over table for topology</strong>
                <p className="text-muted text-sm font-medium">
                  Radial view over flat table — relationship patterns across tenants that tabular data would obscure.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== 08. Usability ===== */}
        <section id="usability" className="space-y-8">
          <Reveal reduceMotion={false} direction="up">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">08. Usability</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Testing With Real Engineers</h3>
            <p className="text-muted text-base md:text-lg font-medium">
              Usability sessions with network engineers surfaced three refinements that directly improved triage clarity and adoption.
            </p>
          </Reveal>
          <Reveal reduceMotion={false} direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Finding 1</p>
                </div>
                <strong className="text-text block mb-2">Severity colors</strong>
                <p className="text-muted text-sm font-medium">
                  Color was the primary scan signal. Refined palette to AA contrast, consistent across all chart types.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3">
                  <Table className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Finding 2</p>
                </div>
                <strong className="text-text block mb-2">Table defaults</strong>
                <p className="text-muted text-sm font-medium">
                  Default sort and columns mismatched triage patterns. Adjusted to match the most common investigation flow.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                <div className="flex items-center gap-2 mb-3">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Finding 3</p>
                </div>
                <strong className="text-text block mb-2">Filter discoverability</strong>
                <p className="text-muted text-sm font-medium">
                  Multi-axis filters were powerful but buried. Promoted entry points and added persistent filter chips.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== 09. Impact ===== */}
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
                <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest">09. Impact</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">Measurable Outcomes</h3>
              <p className="text-white/80 font-medium mb-10 max-w-4xl">
                Quantified improvements across triage speed, policy coverage, enterprise adoption, and visualization capabilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Triage Efficiency</p>
                  </div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">5&times;</span>
                    <span className="text-xl lg:text-2xl text-white/60 mb-2">faster</span>
                  </div>
                  <p className="text-white/60 text-sm font-medium mb-4">Violation identification speed</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                      <span>Before</span>
                      <span>After</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 rounded-l-full" style={{ width: "80%" }} />
                      <div className="bg-white/20 rounded-r-full" style={{ width: "20%" }} />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Coverage</p>
                  </div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">100%</span>
                    <span className="text-xl lg:text-2xl text-white/60 mb-2">visibility</span>
                  </div>
                  <p className="text-white/60 text-sm font-medium mb-4">Full policy coverage across tenants</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                      <span>Partial</span>
                      <span>Complete</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 rounded-l-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Adoption</p>
                  </div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">40+</span>
                    <span className="text-xl lg:text-2xl text-white/60 mb-2">customers</span>
                  </div>
                  <p className="text-white/60 text-sm font-medium mb-4">Enterprise organizations adopted</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                      <span>Launch</span>
                      <span>Current</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 rounded-l-full" style={{ width: "75%" }} />
                      <div className="bg-white/20 rounded-r-full" style={{ width: "25%" }} />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Visualization</p>
                  </div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">6</span>
                    <span className="text-xl lg:text-2xl text-white/60 mb-2">types</span>
                  </div>
                  <p className="text-white/60 text-sm font-medium mb-4">Custom visualization components</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                      <span>0</span>
                      <span>6</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 rounded-l-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ===== 10. Reflection ===== */}
        <Reveal reduceMotion={false} direction="up">
          <section id="reflection">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="w-4 h-4 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">10. Reflection</h2>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-text leading-relaxed max-w-5xl italic mt-4">
              &quot;Designing for enterprise security taught me that clarity is the product. When engineers can see the full scope of violations in one place, trust in the system rises and response times shrink. The hardest design problems were not about aesthetics — they were about making invisible relationships visible and giving operators confidence in what they are seeing.&quot;
            </blockquote>
          </section>
        </Reveal>

        {/* ===== Bottom Links ===== */}
        <Reveal reduceMotion={false} direction="up">
          <section className="space-y-10">
            <div className="pt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-lg font-medium text-white transition hover:bg-blue-700"
              >
                View Cisco Design Showcase
                <span className="inline-block" aria-hidden>&rarr;</span>
              </a>
            </div>
          </section>
        </Reveal>

        <div className="pt-2 pb-20 text-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-muted hover:text-text transition-colors text-sm font-medium uppercase tracking-widest"
          >
            <span>&larr;</span> Back to Selected Work
          </Link>
        </div>
        </div>
      </main>
      </div>
    </div>
  );
}

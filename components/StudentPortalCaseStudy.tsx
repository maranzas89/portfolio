"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import CalbrightCaseStudyLayout from "@/components/CalbrightCaseStudyLayout";
import HeroGlow from "@/components/HeroGlow";
import AnnotatedImage, { AnnotatedImageModal } from "@/components/AnnotatedImage";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import {
  TrendingUp,
  ArrowRight,
  Layout,
  Users,
  Target,
  BarChart3,
  MessageSquare,
  Compass,
  Map,
  IterationCw,
  Info,
  GitBranch,
  Route,
  Brain,
  Lightbulb,
  MousePointerClick,
  Calendar,
  CheckCircle,
} from "lucide-react";

const PLACEHOLDER_IMG = "https://placehold.co/1200x800/f8fafc/64748b?text=Replace+Me";

const LEGACY_HOMEPAGE_IMG = "/images/calbright/artboard-1.svg";
const ONBOARDING_JOURNEY_IMG = "/images/calbright/onboarding-journey.svg";
const DESIGN_SYSTEM_OVERVIEW_IMG = "/images/calbright/design-system-overview.svg";
const COMPONENT_LIBRARY_IMG = "/images/calbright/component-library.svg";
const DESIGN_TOKENS_IMG = "/images/calbright/design-tokens.svg";
const IA_DIAGRAM_IMG = "/images/calbright/blank-diagram.svg";
const WIREFRAME_IMG = "/images/calbright/wireframe.svg";
const EARLY_PROTOTYPE_IMG = "/images/calbright/early-prototype.svg";
const REVIEW_WORKSHOP_BOARD_IMG = "/images/calbright/review-workshop-board.svg";
const FEEDBACK_CLUSTERING_IMG = "/images/calbright/feedback-clustering.svg";
const BEFORE_REDESIGN_IMG = "/images/calbright/before-redesign.svg";
const AFTER_REDESIGN_IMG = "/images/calbright/after-redesign.svg";
const HEATMAP_IMG = "/images/calbright/heatmap.svg";
const RAGE_CLICK_IMG = "/images/calbright/rage-click.svg";
const FUNNEL_DROPOFF_IMG = "/images/calbright/funnel-dropoff.svg";
const AFFINITY_MAPPING_IMG = "/images/calbright/affinity-mapping.svg";
const INTERVIEW_NOTES_CLUSTER_IMG = "/images/calbright/interview-notes-cluster.svg";
const STRATEGY_DIAGRAM_IMG = "/images/calbright/cover-mvp-dashboard-flow-1.svg";
const ITERATION_1_IMG = "/images/calbright/a1.svg";
const ITERATION_2_IMG = "/images/calbright/a2.svg";
const ITERATION_3_IMG = "/images/calbright/a3.svg";
const ITERATION_4_IMG = "/images/calbright/a4.svg";
const OLD_DYNAMIC_JOURNEY_MAP_IMG = "/images/calbright/cover-mvp-dashboard-flow-3.svg";
const NEW_DYNAMIC_JOURNEY_MAP_IMG = "/images/calbright/page-interaction-10.svg";
const JOURNEY_MODEL_DIAGRAM_IMG = "/images/calbright/Snipaste_2026-03-05_18-41-50.svg";
const MILESTONE_DASHBOARD_IMG = "/images/calbright/adobe-stock-milestones.svg";
const LUCAS_DESOUZA_IMG = "/images/calbright/lucas-desouza.svg";
const KIMBERLEY_FLORES_IMG = "/images/calbright/kimberley-flores.svg";
const STUDENT_JOURNEY_1_IMG = "/images/calbright/student-journey-1.svg";

const LEGACY_PORTAL_ANNOTATIONS = [
  { id: 1, title: "Information ≠ Guidance", explanation: "Students could see their coursework and updates, but the portal rarely told them what action to take next.", x: 43, y: 24, side: "left" as const },
  { id: 2, title: "System-Driven Navigation", explanation: "The navigation reflected internal service categories instead of how students actually progress through learning.", x: 10, y: 20, side: "right" as const },
  { id: 3, title: "Missing Next-Step Signals", explanation: "Critical moments like onboarding, orientation, and course start lacked clear next-step cues.", x: 75, y: 22, side: "left" as const },
  { id: 4, title: "High Cognitive Load", explanation: "New students had to interpret multiple pieces of information before understanding how to move forward.", x: 52, y: 60, side: "bottom" as const },
];

function ImagePreviewModal({
  open,
  onClose,
  src,
  caption,
}: {
  open: boolean;
  onClose: () => void;
  src?: string;
  caption?: string;
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
            <img
              src={src}
              alt={caption ?? ""}
              className="w-full h-auto max-h-[88vh] object-contain"
            />
          ) : (
            <div className="w-full min-h-[50vh] max-h-[88vh] aspect-video flex items-center justify-center bg-[#E4E4E7] p-8">
              <span className="text-muted text-center">Image placeholder</span>
            </div>
          )}
          {caption && (
            <p className="text-sm text-muted font-medium p-4 text-center bg-white border-t border-line">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function IconBox({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={`${className} text-blue-500`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
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

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
  }, []);
  const hiddenTransform =
    direction === "up"
      ? "translate-y-12"
      : direction === "left"
        ? "-translate-x-12"
        : "translate-x-12";
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 blur-none"
          : `opacity-0 blur-[4px] ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

function VisualPlaceholder({
  onClick,
  caption,
  aspect = "aspect-[16/10]",
  children,
  noBorder,
  bgWhite,
  bgColor,
  border,
  lightBorder,
}: {
  onClick?: () => void;
  caption: string;
  aspect?: string;
  children?: React.ReactNode;
  noBorder?: boolean;
  bgWhite?: boolean;
  bgColor?: string;
  border?: boolean;
  lightBorder?: boolean;
}) {
  const bgClass = bgColor
    ? ""
    : noBorder
      ? "bg-transparent"
      : bgWhite
        ? "bg-white"
        : "bg-[#E4E4E7]";
  const bgStyle = bgColor ? { backgroundColor: bgColor } : undefined;
  const borderClass = noBorder ? "border-0" : lightBorder ? "border border-slate-100" : "border border-gray-200";
  return (
    <div className={onClick ? "cursor-pointer group" : ""} onClick={onClick}>
      <div
        className={`relative overflow-hidden ${aspect} rounded-2xl flex items-center justify-center ${borderClass} ${bgClass} ${
          onClick ? "transition-transform duration-500 group-hover:scale-[1.02]" : ""
        }`}
        style={bgStyle}
      >
        {children ?? (
          <span className="text-muted font-medium text-center px-4">Image placeholder</span>
        )}
      </div>
      <p className="text-sm text-muted font-medium mt-4">{caption}</p>
    </div>
  );
}

type BackLink = { href: string; label: string };

export default function StudentPortalCaseStudy({ backLink = { href: "/#work", label: "Back to Selected Work" } }: { backLink?: BackLink }) {
  const [preview, setPreview] = useState<{ open: boolean; src?: string; caption?: string }>({
    open: false,
  });
  const [legacyAnnotatedModalOpen, setLegacyAnnotatedModalOpen] = useState(false);
  const [designDirectionsModal, setDesignDirectionsModal] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });
  const openDesignDirectionsModal = useCallback((index: number) => {
    setDesignDirectionsModal({ open: true, index });
  }, []);
  const openPreview = useCallback(
    (opts: { src?: string; caption?: string }) => setPreview({ open: true, ...opts }),
    []
  );
  const closePreview = useCallback(() => setPreview({ open: false }), []);

  return (
    <div className="relative bg-white text-text min-h-screen overflow-x-hidden">
      <ImagePreviewModal
        open={preview.open}
        onClose={closePreview}
        src={preview.src}
        caption={preview.caption}
      />
      <AnnotatedImageModal
        open={legacyAnnotatedModalOpen}
        onClose={() => setLegacyAnnotatedModalOpen(false)}
        src={LEGACY_HOMEPAGE_IMG}
        alt="Legacy student portal homepage"
        annotations={LEGACY_PORTAL_ANNOTATIONS}
        storageKey="legacy-portal-annotations"
      />
      <ImageGalleryModal
        open={designDirectionsModal.open}
        onClose={() => setDesignDirectionsModal({ open: false, index: 0 })}
        images={[ITERATION_1_IMG, ITERATION_2_IMG, ITERATION_3_IMG, ITERATION_4_IMG]}
        initialIndex={designDirectionsModal.index}
      />
      <CalbrightCaseStudyLayout>
      {/* Hero */}
      <header className="hero-image bg-black text-white pt-6 pb-12 md:pt-8 md:pb-16 relative overflow-hidden border-b border-white/20 min-h-[540px] md:min-h-[580px] min-h-[540px] md:min-h-[580px]">
        <HeroGlow />
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-8 md:pt-10 relative z-10">
          <Reveal direction="up" delay={0}>
            <p className="font-accent text-sm text-white/60 font-bold tracking-widest uppercase mb-5">
              Calbright · Student Portal Redesign
            </p>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-4 max-w-4xl">
              Student Journey 2.0
            </h1>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-6 max-w-3xl">
              Transforming a static homepage into a dynamic journey system guiding students from enrollment to completion.
            </p>
          </Reveal>
          <Reveal direction="up" delay={175}>
            <div className="mb-6">
              <p className="text-white/50 uppercase tracking-widest font-medium mb-1 text-sm">Student Voice</p>
              <p className="text-lg md:text-xl text-white/75 font-semibold italic max-w-3xl">&quot;I always knew what my next step was.&quot;</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <div className="grid grid-cols-1 gap-6 text-sm mb-12">
              <div>
                <p className="text-white/50 uppercase tracking-widest font-medium mb-1">Scope</p>
                <p className="text-white/90 font-medium">Homepage redesign → Dynamic Journey System</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <TrendingUp className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-semibold text-3xl mb-1">4.6 / 5</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Hotjar satisfaction</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <Target className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-semibold text-3xl mb-1">67%</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Engagement rate</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <Target className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-semibold text-3xl mb-1">84%</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Orientation scheduling</p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto py-24 px-8 md:px-16 lg:px-24 space-y-32">
          {/* Snapshot */}
          <section className="bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-b border-line pb-12">
              <Reveal direction="up" delay={100} className="min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <IconBox />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Product</p>
                </div>
                <p className="font-medium text-lg text-text">Student Portal</p>
              </Reveal>
              <Reveal direction="up" delay={200} className="min-w-0 -translate-x-10">
                <div className="flex items-center gap-3 mb-2">
                  <IconUsers />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Users</p>
                </div>
                <p className="font-medium text-lg text-text">Adult Learners</p>
              </Reveal>
              <Reveal direction="up" delay={250} className="min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <IconCalendar />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Timeline</p>
                </div>
                <p className="font-medium text-lg text-text">2023 – Present</p>
              </Reveal>
              <Reveal direction="up" delay={300} className="min-w-0 -translate-x-[10px]">
                <div className="flex items-center gap-3 mb-2">
                  <IconBriefcase />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Role</p>
                </div>
                <p className="font-medium text-lg text-text whitespace-nowrap">
                  <span className="md:hidden">Sr. PD (Staff-Level)</span>
                  <span className="hidden md:inline">Sr. Product Designer (Staff-Level)</span>
                </p>
              </Reveal>
            </div>
          </section>

          {/* Section 1 — Early User Research */}
          <section id="early-user-research">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">01. Early User Research</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Understanding Student Needs Through Interviews
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                Early interviews revealed common onboarding challenges, informing the creation of a representative persona and an early-stage student journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: LUCAS_DESOUZA_IMG, caption: "Student Persona 1" })}
                  caption="Student Persona 1"
                  bgWhite
                  noBorder
                >
                  <img
                    src={LUCAS_DESOUZA_IMG}
                    alt="Student Persona 1"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: KIMBERLEY_FLORES_IMG, caption: "Student Persona 2" })}
                  caption="Student Persona 2"
                  bgWhite
                  noBorder
                >
                  <img
                    src={KIMBERLEY_FLORES_IMG}
                    alt="Student Persona 2"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: STUDENT_JOURNEY_1_IMG, caption: "Early stage student journey" })}
                  caption="Early stage student journey"
                  bgWhite
                  noBorder
                >
                  <img
                    src={STUDENT_JOURNEY_1_IMG}
                    alt="Early stage student journey"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-[1.35] transition-transform duration-500 group-hover:scale-[1.42]"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 2 — Legacy Experience */}
          <section id="legacy-experience" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-stretch divide-y md:divide-y-0 md:divide-x divide-line">
            <Reveal direction="right" className="md:col-span-6 md:pr-6 flex flex-col">
              <AnnotatedImage
                src={LEGACY_HOMEPAGE_IMG}
                alt="Legacy student portal homepage"
                annotations={LEGACY_PORTAL_ANNOTATIONS}
                storageKey="legacy-portal-annotations"
                onClick={() => setLegacyAnnotatedModalOpen(true)}
                className="flex-1 min-h-0 flex flex-col min-w-0"
                thumbnailContainerClass="aspect-[4/3] min-h-[280px] md:min-h-[360px] flex-1 min-h-0"
                objectFit="contain"
                noBorder
              />
            </Reveal>
            <Reveal direction="left" className="md:col-span-6 md:pl-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">02. Legacy Experience</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6 md:whitespace-nowrap">
                Legacy Student<br className="md:hidden" /> Portal Experience
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-6">
                The original homepage surfaced useful information, but offered little guidance on what students should actually do next.
              </p>
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-muted uppercase tracking-widest mb-4">Key Insights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-card/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-5 h-5 text-blue-500 shrink-0" />
                    <h5 className="text-sm font-semibold text-text">Information ≠ Guidance</h5>
                  </div>
                  <p className="text-sm text-muted font-medium leading-relaxed">
                    Students could see their coursework and updates, but the portal rarely told them what action to take next.
                  </p>
                </div>
                <div className="p-4 bg-card/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Map className="w-5 h-5 text-blue-500 shrink-0" />
                    <h5 className="text-sm font-semibold text-text">System-Driven Navigation</h5>
                  </div>
                  <p className="text-sm text-muted font-medium leading-relaxed">
                    The navigation reflected internal service categories instead of how students actually progress through learning.
                  </p>
                </div>
                <div className="p-4 bg-card/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Route className="w-5 h-5 text-blue-500 shrink-0" />
                    <h5 className="text-sm font-semibold text-text">Missing Next-Step Signals</h5>
                  </div>
                  <p className="text-sm text-muted font-medium leading-relaxed">
                    Critical moments like onboarding, orientation, and course start lacked clear next-step cues.
                  </p>
                </div>
                <div className="p-4 bg-card/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-blue-500 shrink-0" />
                    <h5 className="text-sm font-semibold text-text">High Cognitive Load</h5>
                  </div>
                  <p className="text-sm text-muted font-medium leading-relaxed">
                    New students had to interpret multiple pieces of information before understanding how to move forward.
                  </p>
                </div>
              </div>
              </div>
            </Reveal>
          </section>

          {/* Section 3 — Opportunity */}
          <section id="opportunity" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-start -mt-[10px] md:divide-x md:divide-line">
            <Reveal direction="right" className="md:col-span-5 md:pr-12 order-1">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">03. Opportunity</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Kick-starting the Student <span className="md:whitespace-nowrap">Experience Through</span><br className="md:hidden" /> Onboarding
              </h3>
              <ul className="space-y-3 text-muted text-base md:text-lg font-medium mb-6">
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden />
                  <span>Partnered with cross-functional teams to map onboarding</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden />
                  <span>Onboarding tasks spread across multiple systems</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden />
                  <span>&quot;My Tasks&quot; behaved as a static checklist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden />
                  <span>Students lacked visibility into onboarding milestones</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden />
                  <span>Key actions required leaving the portal</span>
                </li>
              </ul>
              <div className="px-5 pt-5 pb-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                <h4 className="flex items-center gap-2 font-semibold text-emerald-800 mb-2 text-base">
                  <Lightbulb className="w-5 h-5 shrink-0 text-emerald-600" />
                  Opportunity
                </h4>
                <p className="text-emerald-700/90 font-medium text-base">
                  Opportunity to redesign the portal around a milestone-driven onboarding journey.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" className="md:col-span-7 md:pl-12 order-2">
              <VisualPlaceholder
                onClick={() => openPreview({ src: ONBOARDING_JOURNEY_IMG, caption: "Cross-functional mapping of the student onboarding journey" })}
                caption="Cross-functional mapping of the student onboarding journey"
                bgWhite
                noBorder
              >
                <img
                  src={ONBOARDING_JOURNEY_IMG}
                  alt="Cross-functional mapping of the student onboarding journey"
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </VisualPlaceholder>
            </Reveal>
          </section>

          {/* Section 4 — Design System (0→1) */}
          <section id="design-system">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">04. Design System</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Building the Design System from Scratch
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                There was no design system and a scalable foundation was required. Experience from previous work (DiDi) informed the approach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: DESIGN_SYSTEM_OVERVIEW_IMG, caption: "Design system overview board" })}
                  caption="Design system overview board"
                  noBorder
                >
                  <img
                    src={DESIGN_SYSTEM_OVERVIEW_IMG}
                    alt="Design system overview board"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: COMPONENT_LIBRARY_IMG, caption: "Component library (On Left Nav)" })}
                  caption="Component library (On Left Nav)"
                  noBorder
                >
                  <img
                    src={COMPONENT_LIBRARY_IMG}
                    alt="Component library (On Left Nav)"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: DESIGN_TOKENS_IMG, caption: "Design tokens" })}
                  caption="Design tokens"
                  noBorder
                >
                  <img
                    src={DESIGN_TOKENS_IMG}
                    alt="Design tokens"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
              <a
                href="https://xd.adobe.com/view/29c11358-51ea-442c-a9e5-33e91a9ae66e-7c92/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-sm md:text-xl font-medium text-white transition hover:bg-blue-700 mt-8"
              >
                View Calbright Design System
                <ArrowRight className="w-5 h-5" />
              </a>
            </Reveal>
          </section>

          {/* Section 5 — IA & Early Prototypes */}
          <section id="ia-prototypes">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">05. IA & Early Prototypes</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Information Architecture & Early Prototyping
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                Early prototypes tested a dashboard-driven experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: IA_DIAGRAM_IMG, caption: "Information architecture diagram" })}
                  caption="Information architecture diagram"
                  bgWhite
                  noBorder
                >
                  <img
                    src={IA_DIAGRAM_IMG}
                    alt="Information architecture diagram"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: WIREFRAME_IMG, caption: "Low fidelity wireframes" })}
                  caption="Low fidelity wireframes"
                  bgWhite
                  noBorder
                >
                  <img
                    src={WIREFRAME_IMG}
                    alt="Low fidelity wireframes"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: EARLY_PROTOTYPE_IMG, caption: "Early dashboard prototype" })}
                  caption="Early dashboard prototype"
                  bgWhite
                  noBorder
                >
                  <img
                    src={EARLY_PROTOTYPE_IMG}
                    alt="Early dashboard prototype"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 6 — Cross Team Reviews */}
          <section id="cross-team">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">06. Cross Team Collaboration</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Iterating Through Cross-Team Collaboration
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                Collaboration with product leadership, engineering, Student Success team, and academic advisors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: REVIEW_WORKSHOP_BOARD_IMG, caption: "Review workshop board" })}
                  caption="Review workshop board"
                  bgWhite
                  noBorder
                >
                  <img
                    src={REVIEW_WORKSHOP_BOARD_IMG}
                    alt="Review workshop board"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: FEEDBACK_CLUSTERING_IMG, caption: "Feedback clustering diagram" })}
                  caption="Feedback clustering diagram"
                  bgWhite
                  noBorder
                >
                  <img
                    src={FEEDBACK_CLUSTERING_IMG}
                    alt="Feedback clustering diagram"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 7 — First Release */}
          <section id="first-release">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">07. First Release</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Launching the First Portal Redesign
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                The redesigned homepage improved visual clarity and structured onboarding tasks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div>
                  <div
                    className="aspect-[16/10] min-h-[200px] md:min-h-[480px] rounded-2xl overflow-hidden cursor-pointer group bg-[#E4E4E7] flex items-center justify-center"
                    onClick={() => openPreview({ src: BEFORE_REDESIGN_IMG, caption: "Before redesign" })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openPreview({ src: BEFORE_REDESIGN_IMG, caption: "Before redesign" })}
                  >
                    <img
                      src={BEFORE_REDESIGN_IMG}
                      alt="Before redesign"
                      className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-muted font-medium mt-4">Before redesign</p>
                </div>
                <div>
                  <div
                    className="aspect-[16/10] min-h-[200px] md:min-h-[480px] rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg hover:shadow-gray-300/60"
                    onClick={() => openPreview({ src: AFTER_REDESIGN_IMG, caption: "After redesign" })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openPreview({ src: AFTER_REDESIGN_IMG, caption: "After redesign" })}
                  >
                    <img
                      src={AFTER_REDESIGN_IMG}
                      alt="After redesign"
                      className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-muted font-medium mt-4">After redesign</p>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Section 8 — Behavioral Data (Hotjar) */}
          <section id="behavioral-data">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">08. Behavioral Data</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Early Signals from Behavioral Data (Hotjar)
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                Analytics revealed onboarding issues.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="p-6 bg-card rounded-2xl">
                  <TrendingUp className="w-5 h-5 text-blue-500 mb-2" />
                  <p className="text-2xl font-semibold text-text mb-1">41%</p>
                  <p className="text-sm text-muted font-medium">Engagement rate</p>
                </div>
                <div className="p-6 bg-card rounded-2xl">
                  <MousePointerClick className="w-5 h-5 text-blue-500 mb-2" />
                  <p className="text-2xl font-semibold text-text mb-1">12%</p>
                  <p className="text-sm text-muted font-medium">Rage click rate</p>
                </div>
                <div className="p-6 bg-card rounded-2xl">
                  <Calendar className="w-5 h-5 text-blue-500 mb-2" />
                  <p className="text-2xl font-semibold text-text mb-1">58%</p>
                  <p className="text-sm text-muted font-medium">Orientation scheduling completion</p>
                </div>
                <div className="p-6 bg-card rounded-2xl">
                  <CheckCircle className="w-5 h-5 text-blue-500 mb-2" />
                  <p className="text-2xl font-semibold text-text mb-1">46%</p>
                  <p className="text-sm text-muted font-medium">Onboarding completion</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: HEATMAP_IMG, caption: "Heatmap" })}
                  caption="Heatmap"
                  bgWhite
                  noBorder
                >
                  <img
                    src={HEATMAP_IMG}
                    alt="Heatmap"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: RAGE_CLICK_IMG, caption: "Rage click visualization" })}
                  caption="Rage click visualization"
                  bgWhite
                  lightBorder
                >
                  <img
                    src={RAGE_CLICK_IMG}
                    alt="Rage click visualization"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: FUNNEL_DROPOFF_IMG, caption: "Funnel drop-off chart" })}
                  caption="Funnel drop-off chart"
                  bgWhite
                  noBorder
                >
                  <img
                    src={FUNNEL_DROPOFF_IMG}
                    alt="Funnel drop-off chart"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 9 — Qualitative Research */}
          <section id="qualitative-research">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">09. Qualitative Research</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Student Interviews & Qualitative Insights
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-6 max-w-3xl">
                Student focus groups were conducted. Students liked the visual redesign but struggled with progress clarity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-line">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: AFFINITY_MAPPING_IMG, caption: "Affinity mapping board" })}
                  caption="Affinity mapping board"
                  bgWhite
                  noBorder
                >
                  <img
                    src={AFFINITY_MAPPING_IMG}
                    alt="Affinity mapping board"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: INTERVIEW_NOTES_CLUSTER_IMG, caption: "Interview notes cluster" })}
                  caption="Interview notes cluster"
                  bgWhite
                  noBorder
                >
                  <img
                    src={INTERVIEW_NOTES_CLUSTER_IMG}
                    alt="Interview notes cluster"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 10 — Strategic Shift */}
          <section id="strategic-shift">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">10. Strategic Shift</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Aligning with Institutional Strategy
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                The redesigned journey introduces a structured entry point that guides students from onboarding into their program dashboard and learning path.
              </p>
              <div className="max-w-4xl">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: STRATEGY_DIAGRAM_IMG, caption: "A redesigned student journey aligning onboarding with the institution's competency-based learning model." })}
                  caption="A redesigned student journey aligning onboarding with the institution's competency-based learning model."
                  aspect="aspect-[21/9]"
                  bgWhite
                  noBorder
                >
                  <img
                    src={STRATEGY_DIAGRAM_IMG}
                    alt="A redesigned student journey aligning onboarding with the institution's competency-based learning model."
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 11 — Design Iterations */}
          <section id="design-iterations">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <IterationCw className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">11. Design Iterations</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Exploring Multiple Design Directions
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                Before arriving at the final Student Journey model, multiple design directions were explored and iterated. These iterations focused on improving onboarding clarity, visualizing learning progress, and guiding students toward their next action.
              </p>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                The design exploration included several prototype variations that tested different approaches to organizing the dashboard experience and presenting student milestones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <VisualPlaceholder
                  onClick={() => openDesignDirectionsModal(0)}
                  caption="Iteration 1"
                  bgWhite
                  noBorder
                >
                  <img
                    src={ITERATION_1_IMG}
                    alt="Iteration 1"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openDesignDirectionsModal(1)}
                  caption="Iteration 2"
                  bgWhite
                  noBorder
                >
                  <img
                    src={ITERATION_2_IMG}
                    alt="Iteration 2"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openDesignDirectionsModal(2)}
                  caption="Iteration 3"
                  bgWhite
                  noBorder
                >
                  <img
                    src={ITERATION_3_IMG}
                    alt="Iteration 3"
                    className="w-full h-full object-cover object-center scale-[1.2] transition-transform duration-500 group-hover:scale-[1.26]"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openDesignDirectionsModal(3)}
                  caption="Iteration 4"
                  bgWhite
                  noBorder
                >
                  <img
                    src={ITERATION_4_IMG}
                    alt="Iteration 4"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 12 — Student Journey 2.0 */}
          <section id="student-journey">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Map className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">12. Student Journey 2.0</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Introducing Student Journey 2.0
              </h3>
              <div className="text-muted text-base md:text-lg font-medium mb-6 max-w-3xl space-y-1">
                <p>Inspiration from platforms such as Canvas and Salesforce Trailhead.</p>
                <p>Milestone framework introduced.</p>
              </div>
              <div className="mb-6 flex flex-wrap gap-2">
                {["Onboarding", "First Assessment", "Paced Timeline", "Competencies", "Diligent Milestone"].map((m) => (
                  <span key={m} className="rounded-full border border-line/60 px-3 py-1 text-sm font-medium text-text bg-zinc-50/80">
                    {m}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start divide-y md:divide-y-0 md:divide-x divide-line">
                <VisualPlaceholder
                  onClick={() => openPreview({ src: OLD_DYNAMIC_JOURNEY_MAP_IMG, caption: "Old Journey Map" })}
                  caption="Old Journey Map"
                  aspect="aspect-[16/10]"
                  bgWhite
                  noBorder
                >
                  <img
                    src={OLD_DYNAMIC_JOURNEY_MAP_IMG}
                    alt="Old Journey Map"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: NEW_DYNAMIC_JOURNEY_MAP_IMG, caption: "New Dynamic Journey Map" })}
                  caption="New Dynamic Journey Map"
                  aspect="aspect-[16/10]"
                  bgWhite
                  noBorder
                >
                  <img
                    src={NEW_DYNAMIC_JOURNEY_MAP_IMG}
                    alt="New Dynamic Journey Map"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
                <VisualPlaceholder
                  onClick={() => openPreview({ src: JOURNEY_MODEL_DIAGRAM_IMG, caption: "Journey model diagram showing the milestone system" })}
                  caption="Journey model diagram showing the milestone system"
                  aspect="aspect-[16/10]"
                  bgWhite
                  noBorder
                >
                  <img
                    src={JOURNEY_MODEL_DIAGRAM_IMG}
                    alt="Journey model diagram showing the milestone system"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </VisualPlaceholder>
              </div>
            </Reveal>
          </section>

          {/* Section 13 — Milestone Dashboard */}
          <section id="milestone-dashboard">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">13. Milestone Dashboard</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Milestone-Driven Student Journey
              </h3>
              <p className="text-muted text-base md:text-lg font-medium mb-8 max-w-3xl">
                To reduce onboarding confusion and improve progress visibility, the dashboard was redesigned around a milestone model that surfaces key learning checkpoints and actionable next steps.
              </p>
              <VisualPlaceholder
                onClick={() => openPreview({ src: MILESTONE_DASHBOARD_IMG, caption: "Milestones visualize progress across the learning journey and guide students toward the next critical action." })}
                caption="Milestones visualize progress across the learning journey and guide students toward the next critical action."
                aspect="aspect-[21/9]"
                bgWhite
              >
                <img
                  src={MILESTONE_DASHBOARD_IMG}
                  alt="Milestones visualize progress across the learning journey and guide students toward the next critical action."
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </VisualPlaceholder>
            </Reveal>
          </section>

          {/* Section 14 — Impact */}
          <Reveal direction="up">
            <section
              id="impact"
              className="relative left-1/2 -translate-x-1/2 w-screen max-w-none text-white py-24 md:py-32 overflow-hidden border-t border-b border-white/10"
              style={{
                background:
                  "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.22), transparent 26%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              <HeroGlow />
              <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest">14. Impact</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  Impact & Outcomes
                </h3>
                <p className="text-white/80 font-medium mb-10 max-w-2xl">
                  The improved journey supported institutional initiatives and new academic programs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Engagement rate</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">67%</span>
                      <span className="text-xl lg:text-2xl text-white/50 line-through mb-2">41%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full flex">
                        <div className="bg-emerald-300/70 rounded-l-full" style={{ width: "41%" }} />
                        <div className="bg-emerald-700 rounded-r-full" style={{ width: "26%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Orientation scheduling</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">84%</span>
                      <span className="text-xl lg:text-2xl text-white/50 line-through mb-2">58%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full flex">
                        <div className="bg-emerald-300/70 rounded-l-full" style={{ width: "58%" }} />
                        <div className="bg-emerald-700 rounded-r-full" style={{ width: "26%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Onboarding completion</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">78%</span>
                      <span className="text-xl lg:text-2xl text-white/50 line-through mb-2">46%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full flex">
                        <div className="bg-emerald-300/70 rounded-l-full" style={{ width: "46%" }} />
                        <div className="bg-emerald-700 rounded-r-full" style={{ width: "32%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Hotjar satisfaction</p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">4.6</span>
                      <span className="text-xl text-white/60 mb-2">/ 5</span>
                      <span className="text-xl lg:text-2xl text-white/50 line-through mb-2">3.8</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full flex">
                        <div className="bg-emerald-300/70 rounded-l-full" style={{ width: "76%" }} />
                        <div className="bg-emerald-700 rounded-r-full" style={{ width: "16%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Section 15 — Interactive Prototype */}
          <section id="interactive-prototype" className="text-center max-w-2xl mx-auto">
            <Reveal direction="up">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Target className="w-6 h-6 text-blue-500" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">15. Interactive Prototype</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                Interactive Prototype
              </h3>
              <p className="text-muted text-base font-medium mb-8">
                Explore the interactive prototype to experience the redesigned student journey.
              </p>
              <a
                href="https://xd.adobe.com/view/e1dbb3d2-600f-43c9-86ea-3d1c762a74fb-b488/?fullscreen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-xl font-medium text-white transition hover:bg-blue-700"
              >
                Explore Prototype
                <ArrowRight className="w-5 h-5" />
              </a>
            </Reveal>
          </section>

          {/* Back link */}
          <div className="pt-2 pb-20 text-center">
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-2 text-muted hover:text-text transition-colors text-sm font-medium uppercase tracking-widest"
            >
              <span>←</span> {backLink.label}
            </Link>
          </div>
        </div>
      </main>
      </CalbrightCaseStudyLayout>
    </div>
  );
}

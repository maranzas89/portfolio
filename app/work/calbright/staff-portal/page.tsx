"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

function PlaceholderModal({
  open,
  onClose,
  caption,
  children,
}: {
  open: boolean;
  onClose: () => void;
  caption?: string;
  children?: React.ReactNode;
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
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col w-full flex-1 min-h-0">
          <div className="w-full flex-1 min-h-0 overflow-y-auto bg-white max-h-[88vh]">
            <div className="flex justify-center items-start">
              {children ?? <p className="text-muted text-lg p-4">占位图</p>}
            </div>
          </div>
          {caption && (
            <p className="text-sm text-muted font-medium p-4 text-center bg-white border-t border-line shrink-0">{caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { motion } from "framer-motion";
import AnnotatedImage from "@/components/AnnotatedImage";
import CalbrightCaseStudyLayout from "@/components/CalbrightCaseStudyLayout";
import CplDecisionLifecycleFlowchart from "@/components/CplDecisionLifecycleFlowchart";
import HeroGlow from "@/components/HeroGlow";
import { ScrollReveal, ScrollRevealStagger } from "@/components/ScrollReveal";
import {
  Layout,
  Users,
  Target,
  TrendingUp,
  BarChart3,
  FileCheck,
  MessageSquare,
  Search,
  GitMerge,
  Puzzle,
  ArrowLeftRight,
  ArrowRight,
  HelpCircle,
  Rocket,
  Workflow,
  RefreshCw,
  MousePointer,
  Quote,
  AlertCircle,
  Lightbulb,
  Eye,
} from "lucide-react";
import ImageGalleryModal from "@/components/ImageGalleryModal";

/* --- Snapshot icons (match DiDi / Student Portal) --- */
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

// Prototype section — swap these when ready (file expected at public/videos/cpl.mp4)
const PROTOTYPE_VIDEO_SRC = "/videos/cpl.mp4";
const PROTOTYPE_URL = "https://xd.adobe.com/view/cf29073b-7df1-41c8-8e84-bf8b891396cd-9a7a/?fullscreen";
const PROTOTYPE_VIDEO_PLAYBACK_RATE = 0.5; // 1 = 正常, 0.75 = 稍慢, 0.5 = 半速

const EXISTING_REALITY_IMG = "/images/calbright/existing-reality-vs-opportunity.svg";
const EXISTING_REALITY_ANNOTATIONS = [
  { id: 1, title: "Scattered context", explanation: "Key student information is spread across multiple horizontal bands.", x: 32, y: 10, side: "right" as const },
  { id: 2, title: "Fragmented links", explanation: "Routine records and actions are split across too many destinations.", x: 22, y: 22, side: "left" as const },
  { id: 3, title: "Dense fields", explanation: "Important details are buried in a form-heavy layout.", x: 28, y: 48, side: "left" as const },
  { id: 4, title: "Buried actions", explanation: "High-frequency actions exist, but lack workflow priority.", x: 88, y: 16, side: "left" as const },
  { id: 5, title: "Disconnected history", explanation: "Follow-up activity is separated from the main case context.", x: 88, y: 58, side: "left" as const },
  { id: 6, title: "Record-keeping focus", explanation: "The system captures data well, but offers limited workflow guidance.", x: 50, y: 92, side: "right" as const },
];
const CPL_CROSS_PORTAL_IMG = "/images/calbright/CPL2234.svg";
const STUDENT_VIEW_IMG = "/images/calbright/student-submission.svg";
const STAFF_VIEW_IMG = "/images/calbright/staff-view.svg";
const STAFF_MANAGER_VIEW_IMG = "/images/calbright/staff-manager-view.svg";
const STAFF_PORTAL_DASHBOARD_IMG = "/images/calbright/staff-portal-dashboard.svg";
const ITERATION_IMGS = [
  "/images/calbright/12728.svg",
  "/images/calbright/iteration-1.svg",
  "/images/calbright/iteration-2.svg",
  "/images/calbright/iteration-4.svg",
];

function StaffDashboardMockup() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
      <div className="aspect-[16/10] p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="h-3 w-32 rounded bg-white/20" />
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-full bg-white/20" />
            <div className="h-6 w-6 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="flex gap-6 flex-1">
          <div className="w-48 rounded-xl bg-white/10 p-4 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-2 rounded bg-white/20" />
            ))}
          </div>
          <div className="flex-1 rounded-xl bg-white/5 p-6 space-y-4">
            <div className="flex gap-4">
              <div className="h-20 w-32 rounded-lg bg-white/15" />
              <div className="h-20 flex-1 rounded-lg bg-white/15" />
            </div>
            <div className="h-24 rounded-lg bg-white/10" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 rounded-lg bg-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ANNOTATE_STORAGE_KEY = "staff-portal-cpl-annotate-positions";

function DraggableAnnotate({
  id,
  markerId,
  label,
  explanation,
  left,
  top,
  onDragEnd,
  containerRef,
}: {
  id: string;
  markerId: number;
  label: string;
  explanation: string;
  left: number;
  top: number;
  onDragEnd: (left: number, top: number) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [pos, setPos] = useState({ left, top });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const lastPosRef = useRef({ left, top });

  useEffect(() => {
    setPos({ left, top });
    lastPosRef.current = { left, top };
  }, [left, top]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.stopPropagation();
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY, left: pos.left, top: pos.top };
    },
    [pos]
  );

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: PointerEvent) => {
      if (!containerRef.current || !dragStartRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dx = ((e.clientX - dragStartRef.current.x) / rect.width) * 100;
      const dy = ((e.clientY - dragStartRef.current.y) / rect.height) * 100;
      let newLeft = dragStartRef.current.left + dx;
      let newTop = dragStartRef.current.top + dy;
      newLeft = Math.max(0, Math.min(100, newLeft));
      newTop = Math.max(0, Math.min(100, newTop));
      setPos({ left: newLeft, top: newTop });
      lastPosRef.current = { left: newLeft, top: newTop };
    };
    const onUp = () => {
      onDragEnd(lastPosRef.current.left, lastPosRef.current.top);
      setIsDragging(false);
      dragStartRef.current = null;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [isDragging, onDragEnd, containerRef]);

  return (
    <div
      data-annotation
      onPointerDown={handlePointerDown}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onClick={(e) => e.stopPropagation()}
      className={`absolute z-10 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={{
        left: `${pos.left}%`,
        top: `${pos.top}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative flex flex-col items-center">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-xs font-bold text-blue-600 shadow-sm">
          {markerId}
        </div>
        <span className="mt-1 whitespace-nowrap text-xs font-medium text-text">
          {label}
        </span>
        {isHovered && !isDragging && (
          <div
            className={`absolute left-1/2 z-20 w-56 -translate-x-1/2 rounded-lg border border-line bg-white p-3 text-left text-xs font-medium text-muted shadow-lg ${
              pos.top > 60 ? "bottom-full mb-2" : "top-full mt-2"
            }`}
          >
            {explanation}
          </div>
        )}
      </div>
    </div>
  );
}

function StaffViewModalContent({
  annotate1,
  annotate2,
  onAnnotate1DragEnd,
  onAnnotate2DragEnd,
}: {
  annotate1: { left: number; top: number };
  annotate2: { left: number; top: number };
  onAnnotate1DragEnd: (left: number, top: number) => void;
  onAnnotate2DragEnd: (left: number, top: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} className="relative w-full flex justify-center items-center min-h-[50vh]">
      <img src={STAFF_VIEW_IMG} alt="Staff View" className="w-full h-auto max-h-[88vh] object-contain" />
      <DraggableAnnotate
        id="modal-annotate-1"
        markerId={1}
        label="Staff review to approve/deny"
        explanation="Staff can approve or deny CPL requests directly from this interface."
        left={annotate1.left}
        top={annotate1.top}
        onDragEnd={onAnnotate1DragEnd}
        containerRef={containerRef}
      />
      <DraggableAnnotate
        id="modal-annotate-2"
        markerId={2}
        label="Staff review student uploaded docs"
        explanation="Staff reviews documents uploaded by students for CPL validation."
        left={annotate2.left}
        top={annotate2.top}
        onDragEnd={onAnnotate2DragEnd}
        containerRef={containerRef}
      />
    </div>
  );
}

export default function StaffPortalCaseStudyPage() {
  const [cplTab, setCplTab] = useState<"student" | "cpl-diagram" | "staff" | "manager">("cpl-diagram");
  const [placeholderModal, setPlaceholderModal] = useState<{ open: boolean; caption?: string; content?: React.ReactNode }>({ open: false });
  const [iterationModal, setIterationModal] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });
  const cplContainerRef = useRef<HTMLDivElement>(null);

  const [annotate1, setAnnotate1] = useState({ left: 25, top: 35 });
  const [annotate2, setAnnotate2] = useState({ left: 25, top: 55 });

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" && localStorage.getItem(ANNOTATE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { annotate1?: { left: number; top: number }; annotate2?: { left: number; top: number } };
        if (parsed.annotate1) setAnnotate1(parsed.annotate1);
        if (parsed.annotate2) setAnnotate2(parsed.annotate2);
      }
    } catch (_) {}
  }, []);

  const saveAnnotatePositions = useCallback((a1: { left: number; top: number }, a2: { left: number; top: number }) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(ANNOTATE_STORAGE_KEY, JSON.stringify({ annotate1: a1, annotate2: a2 }));
  }, []);

  const handleAnnotate1DragEnd = useCallback(
    (left: number, top: number) => {
      const next = { left, top };
      setAnnotate1(next);
      saveAnnotatePositions(next, annotate2);
    },
    [annotate2, saveAnnotatePositions]
  );

  const handleAnnotate2DragEnd = useCallback(
    (left: number, top: number) => {
      const next = { left, top };
      setAnnotate2(next);
      saveAnnotatePositions(annotate1, next);
    },
    [annotate1, saveAnnotatePositions]
  );

  const openPlaceholder = useCallback((caption: string, content?: React.ReactNode) => {
    setPlaceholderModal({ open: true, caption, content });
  }, []);

  const openIterationModal = useCallback((index: number) => {
    setIterationModal({ open: true, index });
  }, []);

  return (
    <div className="relative bg-[#FAFAFA] text-text min-h-screen overflow-x-hidden">
      <CalbrightCaseStudyLayout>
      {/* Hero */}
      <header
        id="hero"
        className="hero-image bg-black text-white pt-6 pb-12 md:pt-8 md:pb-16 relative overflow-hidden border-b border-white/20"
      >
        <HeroGlow />
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-8 md:pt-10 relative z-10">
          <ScrollReveal delay={0}>
            <p className="font-accent text-sm text-white/60 font-bold tracking-widest uppercase mb-5">
              Calbright · Staff Portal 0→1
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-4 max-w-4xl">
              Operational Workspace 1.0
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-6 max-w-5xl">
              Transforming a fragmented Salesforce-based experience into a clearer staff portal for student operations, approvals, and cross-team workflows.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={175}>
            <div className="mb-6">
              <p className="text-white/50 uppercase tracking-widest font-medium mb-1 text-sm">Staff Voice</p>
              <p className="text-lg md:text-xl text-white/75 font-semibold italic max-w-5xl">&quot;I could find what I needed and act faster.&quot;</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 gap-6 text-sm mb-12">
              <div>
                <p className="text-white/50 uppercase tracking-widest font-medium mb-1">Scope</p>
                <p className="text-white/90 font-medium">Legacy Salesforce → Unified Staff Portal</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <Target className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-semibold text-3xl mb-1">35%</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Faster time-to-action</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <RefreshCw className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-semibold text-3xl mb-1">30%</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Time-to-action for common cases reduction</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <Users className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-semibold text-3xl mb-1">3 teams</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-medium">Supported in MVP rollout</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Main */}
      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto py-24 px-8 md:px-16 lg:px-24 space-y-32">
          {/* Snapshot */}
          <section className="bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-b border-line pb-12">
              <ScrollReveal direction="up" delay={100}>
                <div className="flex items-center gap-3 mb-2">
                  <IconBox />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Product</p>
                </div>
                <p className="font-medium text-lg text-text">Staff Portal</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200}>
                <div className="flex items-center gap-3 mb-2">
                  <IconUsers />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Users</p>
                </div>
                <p className="font-medium text-lg text-text">Staff across ops teams</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={250}>
                <div className="flex items-center gap-3 mb-2">
                  <IconCalendar />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Timeline</p>
                </div>
                <p className="font-medium text-lg text-text">2023 – Present</p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={300}>
                <div className="flex items-center gap-3 mb-2">
                  <IconBriefcase />
                  <p className="text-xs text-muted uppercase tracking-widest font-medium">Role</p>
                </div>
                <p className="font-medium text-lg text-text whitespace-nowrap">
                <span className="md:hidden">Sr. PD (Staff-Level)</span>
                <span className="hidden md:inline">Sr. Product Designer (Staff-Level)</span>
              </p>
              </ScrollReveal>
            </div>
          </section>

          {/* 2. Context / Overview */}
          <section id="context">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
                <Layout className="w-4 h-4 text-blue-600 shrink-0" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">01. Context</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-12">Overview</h3>
              <ScrollRevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" direction="up" staggerDelay={80}>
                {[
                  {
                    title: "Problem",
                    icon: Target,
                    text: "Too fragmented and complex for everyday staff workflows.",
                  },
                  {
                    title: "Audience",
                    icon: Users,
                    text: "Accessibility, Student Success, Enrollment, and managers.",
                  },
                  {
                    title: "Scope",
                    icon: Layout,
                    text: "0→1 staff portal MVP and cross-portal workflows.",
                  },
                  {
                    title: "Ownership",
                    icon: FileCheck,
                    text: "Led end-to-end design from workflow discovery to MVP rollout.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="h-full flex flex-col p-6 bg-card rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-200 ease-out"
                  >
                    <card.icon className="w-6 h-6 text-blue-500 mb-4" />
                    <h4 className="font-semibold text-text mb-2">{card.title}</h4>
                    <p className="text-muted text-sm font-medium leading-relaxed flex-1 min-h-0">{card.text}</p>
                  </div>
                ))}
              </ScrollRevealStagger>
            </ScrollReveal>
          </section>

          {/* 3. Why This Portal Was Needed */}
          <section id="why-needed">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">02. Why This Portal</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-12">Existing Salesforce</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
                <ScrollReveal direction="left" className="flex-1 min-w-0 flex flex-col min-h-0 md:order-1">
                  <AnnotatedImage
                    className="flex-1 min-h-0 flex flex-col min-w-0"
                    src={EXISTING_REALITY_IMG}
                    alt="Calbright Staff — Keith Charles Smith contact profile (Existing Reality)"
                    caption="Legacy Salesforce was powerful, but too dense and fragmented for everyday staff workflows."
                    storageKey="existing-reality-annotations"
                    annotations={EXISTING_REALITY_ANNOTATIONS}
                    variant="neutral"
                    thumbnailContainerClass="flex-1 min-h-[200px] md:min-h-[320px] w-full min-h-0"
                    objectFit="cover"
                    noBorder
                    onClick={() =>
                      setPlaceholderModal({
                        open: true,
                        caption: "Legacy Salesforce was powerful, but too dense and fragmented for everyday staff workflows.",
                        content: (
                          <AnnotatedImage
                            className="w-full"
                            src={EXISTING_REALITY_IMG}
                            alt="Calbright Staff — Keith Charles Smith contact profile (Existing Reality)"
                            annotations={EXISTING_REALITY_ANNOTATIONS}
                            storageKey="existing-reality-annotations"
                            inModal
                            thumbnailContainerClass="w-full max-h-[88vh]"
                          />
                        ),
                      })
                    }
                  />
                </ScrollReveal>
                <ScrollReveal direction="right" className="md:order-2 flex flex-col gap-6">
                  <div className="p-8 py-10 rounded-2xl bg-red-50 min-h-[140px]">
                    <h4 className="flex items-center gap-2 font-semibold text-red-800 mb-4">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                      Existing Reality
                    </h4>
                    <p className="text-red-700/90 font-medium mb-4">
                      Salesforce-heavy, fragmented tools, high learning curve. Staff juggled multiple systems to complete routine student operations.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Hard-to-track ownership", icon: Search },
                      { label: "Inconsistent workflows across teams", icon: GitMerge },
                      { label: "Fragmented student context", icon: Puzzle },
                      { label: "High context switching", icon: ArrowLeftRight },
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
                  <div className="px-8 pt-8 pb-[calc(2rem+5px)] rounded-2xl bg-emerald-50">
                    <h4 className="flex items-center gap-2 font-semibold text-emerald-800 mb-4">
                      <Lightbulb className="w-5 h-5 shrink-0 text-emerald-600" />
                      Opportunity
                    </h4>
                    <p className="text-emerald-700/90 font-medium">
                      Role-aware internal portal optimized for student operations — one place for critical actions and context.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </section>

          {/* 4. 0→1 MVP Foundation */}
          <section id="mvp-foundation">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-4 h-4 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">03. 0→1 MVP Foundation</h2>
            </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">Lightweight MVP Iteration</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-10 max-w-5xl">
                A simplified MVP iteration that retained the core goal of surfacing critical student information and centralizing frequent staff actions, while improving clarity and usability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}>
                    <div
                      onClick={() => openIterationModal(i - 1)}
                      className="aspect-[4/3] min-h-[160px] md:min-h-[280px] rounded-2xl overflow-hidden w-full cursor-pointer bg-white hover:scale-[1.02] transition-transform duration-200 ease-out"
                    >
                      <img
                        src={ITERATION_IMGS[i - 1]}
                        alt={`Iteration ${i}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <p className="text-sm text-muted font-medium mt-3">Iteration {i}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 rounded-2xl bg-amber-50/80 max-w-4xl">
                <p className="text-amber-900 font-medium italic">
                  &quot;The initial design challenge looked like a dashboard problem, but stakeholder feedback revealed
                  it was really a workflow orchestration problem.&quot;
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* 5. Research + Workflow Complexity */}
          <section id="research">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
              <Workflow className="w-4 h-4 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">04. Research + Workflow Complexity</h2>
            </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-12">Staff Responsibilities Identified Through Internal Conversations</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-line mb-12 overflow-hidden">
                {[
                  {
                    title: "Case Management",
                    icon: FileCheck,
                    items: ["approve / deny", "drop / withdraw", "re-enroll / reinstate", "account suspension", "veteran-related support"],
                  },
                  {
                    title: "Student Operations",
                    icon: Users,
                    items: ["outreach", "notes", "appointments", "tasks"],
                  },
                  {
                    title: "Communication & Follow-up",
                    icon: MessageSquare,
                    items: ["outreach", "notes", "appointments"],
                  },
                  {
                    title: "Workflow Visibility",
                    icon: Eye,
                    items: ["approval history", "ownership", "escalations"],
                  },
                ].map((col, index) => (
                  <div key={col.title} className="p-6">
                    <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
                      <col.icon className="w-5 h-5 shrink-0 text-blue-600" />
                      {col.title}
                    </h4>
                    <ul className={`space-y-2 ${index < 2 ? "pl-[3px]" : "pl-[7px]"}`}>
                      {col.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted font-medium">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="px-8 pt-8 pb-[calc(2rem+5px)] rounded-2xl bg-emerald-50 max-w-5xl">
                <h4 className="flex items-center gap-2 font-semibold text-emerald-800 mb-4">
                  <Lightbulb className="w-5 h-5 shrink-0 text-emerald-600" />
                  Key insights
                </h4>
                <ul className="space-y-2 text-emerald-700/90 text-base font-medium pl-[7px]">
                  <li className="flex items-center gap-[12px]"><span className="shrink-0">•</span><span>Information was visible, but not prioritized around decision-making</span></li>
                  <li className="flex items-center gap-[12px]"><span className="shrink-0">•</span><span>Similar workflows were handled differently across teams</span></li>
                  <li className="flex items-center gap-[12px]"><span className="shrink-0">•</span><span>High-frequency actions were still too buried</span></li>
                  <li className="flex items-center gap-[12px]"><span className="shrink-0">•</span><span>Manager visibility and auditability were missing</span></li>
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* 05. Finalizing the Staff Portal Dashboard */}
          <section id="dashboard-direction">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
                <Layout className="w-4 h-4 text-blue-600 shrink-0" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">05. Finalizing the Staff Portal Dashboard</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Translating research into an operational workspace</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-10 max-w-5xl">
                Combining four iterations, workflow insights, and Salesforce findings, I refined the dashboard into a clearer operational workspace for staff decision-making and daily casework.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div>
                  <div
                    className="aspect-[16/10] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden cursor-pointer group bg-[#E4E4E7] flex items-center justify-center"
                    onClick={() => openPlaceholder("Legacy Salesforce", <div className="w-[94vw] max-w-[1800px]"><img src={EXISTING_REALITY_IMG} alt="Legacy Salesforce" className="w-full h-auto" /></div>)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openPlaceholder("Legacy Salesforce", <div className="w-[94vw] max-w-[1800px]"><img src={EXISTING_REALITY_IMG} alt="Legacy Salesforce" className="w-full h-auto" /></div>)}
                  >
                    <img
                      src={EXISTING_REALITY_IMG}
                      alt="Legacy Salesforce"
                      className="w-full h-full object-cover object-left transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-muted font-medium mt-4">Legacy Salesforce</p>
                </div>
                <div>
                  <div
                    className="aspect-[16/10] min-h-[360px] md:min-h-[480px] rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg hover:shadow-gray-300/60"
                    onClick={() => openPlaceholder("New Staff Portal", <div className="w-[94vw] max-w-[1800px]"><img src={STAFF_PORTAL_DASHBOARD_IMG} alt="New Staff Portal" className="w-full h-auto" /></div>)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openPlaceholder("New Staff Portal", <div className="w-[94vw] max-w-[1800px]"><img src={STAFF_PORTAL_DASHBOARD_IMG} alt="New Staff Portal" className="w-full h-auto" /></div>)}
                  >
                    <img
                      src={STAFF_PORTAL_DASHBOARD_IMG}
                      alt="New Staff Portal"
                      className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-muted font-medium mt-4">New Staff Portal</p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* 06. Project Deep Dive: CPL */}
          <section id="cpl">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">06. Project Deep Dive: CPL</h2>
            </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">A Cross-Role Workflow</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-10 max-w-5xl">
                For the launch of the Community Health Worker (CHW) program, Calbright needed a new cross-role workflow
                to support Credit for Prior Learning (CPL), from student submission to staff review to manager oversight.
              </p>
              <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
                <ScrollReveal direction="left" className="flex flex-col gap-6 lg:w-72 shrink-0">
                  {(
                    [
                      {
                        id: "cpl-diagram" as const,
                        label: "CPL Cross-Portal Workflow",
                        desc: <>A unified CPL flow across student<br />and staff portals.</>,
                      },
                      {
                        id: "student" as const,
                        label: "Student View",
                        desc: "Apply, upload, waiting approval, approved, rejected and appeal.",
                      },
                      {
                        id: "staff" as const,
                        label: "Staff View",
                        desc: "Review, validate, decide, and escalate.",
                      },
                      {
                        id: "manager" as const,
                        label: "Staff Manager View",
                        desc: "Monitor volume, review history, and track ownership.",
                      },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setCplTab(tab.id)}
                      className={`text-left p-6 rounded-xl cursor-pointer hover:translate-x-1 transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        cplTab === tab.id
                          ? "bg-blue-100"
                          : "bg-slate-50/80"
                      }`}
                    >
                      <span className={`block mb-3 ${cplTab === tab.id ? "text-[#333] font-bold" : "text-text font-semibold"}`}>{tab.label}</span>
                      <p className={`text-sm leading-relaxed ${cplTab === tab.id ? "text-[#555] font-semibold" : "text-muted"}`}>{(tab as { desc?: React.ReactNode }).desc}</p>
                    </button>
                  ))}
                </ScrollReveal>
                <ScrollReveal direction="right" className="flex-1 min-w-0 flex flex-col min-h-0">
                <motion.div
                  ref={cplContainerRef}
                  key={cplTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex-1 min-h-[480px] rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform duration-200 ease-out ${cplTab === "cpl-diagram" ? "bg-slate-200" : "bg-white"}`}
                  onClick={() => openPlaceholder(
                    cplTab === "cpl-diagram" ? "CPL Cross-Portal Workflow" : cplTab === "student" ? "Student View" : cplTab === "staff" ? "Staff View" : cplTab === "manager" ? "Staff Manager View" : `Product mockup — ${cplTab} view`,
                    cplTab === "cpl-diagram" ? (
                      <div className="w-full bg-slate-200 flex justify-center items-center min-h-[50vh]">
                        <img src={CPL_CROSS_PORTAL_IMG} alt="CPL Cross-Portal Workflow" className="w-full h-auto max-h-[88vh] object-contain" />
                      </div>
                    ) : cplTab === "student" ? (
                      <div className="w-full bg-white flex justify-center items-center min-h-[50vh]">
                        <img src={STUDENT_VIEW_IMG} alt="Student View" className="w-full h-auto max-h-[88vh] object-contain" />
                      </div>
                    ) : cplTab === "staff" ? (
                      <StaffViewModalContent
                        annotate1={annotate1}
                        annotate2={annotate2}
                        onAnnotate1DragEnd={handleAnnotate1DragEnd}
                        onAnnotate2DragEnd={handleAnnotate2DragEnd}
                      />
                    ) : cplTab === "manager" ? (
                      <div className="w-full bg-white flex justify-center items-center min-h-[50vh]">
                        <img src={STAFF_MANAGER_VIEW_IMG} alt="Staff Manager View" className="w-full h-auto max-h-[88vh] object-contain" />
                      </div>
                    ) : undefined
                  )}
                >
                  {cplTab === "cpl-diagram" ? (
                    <div className="absolute inset-0 bg-slate-200 overflow-hidden flex items-center justify-center">
                      <img
                        src={CPL_CROSS_PORTAL_IMG}
                        alt="CPL Cross-Portal Workflow"
                        className="w-full h-full object-contain object-center scale-[1.32]"
                      />
                    </div>
                  ) : cplTab === "student" ? (
                    <div className="absolute inset-0 bg-white overflow-hidden">
                      <img
                        src={STUDENT_VIEW_IMG}
                        alt="Student View"
                        className="w-full h-full object-cover object-center scale-[1.2]"
                      />
                    </div>
                  ) : cplTab === "staff" ? (
                    <div className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={STAFF_VIEW_IMG}
                        alt="Staff View"
                        className="w-full h-full object-contain object-center scale-[1.08]"
                      />
                    </div>
                  ) : cplTab === "manager" ? (
                    <div className="absolute inset-0 bg-white overflow-hidden">
                      <img
                        src={STAFF_MANAGER_VIEW_IMG}
                        alt="Staff Manager View"
                        className="w-full h-full object-cover object-center scale-[1.2]"
                      />
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <p className="text-2xl font-semibold text-text mb-2">Product mockup</p>
                      <p className="text-muted">Product mockup — {cplTab} view</p>
                    </div>
                  )}
                  {cplTab === "staff" && (
                    <>
                      <DraggableAnnotate
                        id="annotate-1"
                        markerId={1}
                        label="Staff review to approve/deny"
                        explanation="Staff can approve or deny CPL requests directly from this interface."
                        left={annotate1.left}
                        top={annotate1.top}
                        onDragEnd={handleAnnotate1DragEnd}
                        containerRef={cplContainerRef}
                      />
                      <DraggableAnnotate
                        id="annotate-2"
                        markerId={2}
                        label="Staff review student uploaded docs"
                        explanation="Staff reviews documents uploaded by students for CPL validation."
                        left={annotate2.left}
                        top={annotate2.top}
                        onDragEnd={handleAnnotate2DragEnd}
                        containerRef={cplContainerRef}
                      />
                    </>
                  )}
                </motion.div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </section>

          {/* 07. CPL Decision Lifecycle */}
          <section id="workflow">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="w-4 h-4 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">07. CPL DECISION LIFECYCLE</h2>
            </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">CPL Decision Lifecycle</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-10 max-w-5xl">
                A closed-loop process showing how student requests move through review, reporting, and program evolution.
              </p>

              <div className="-mt-[40px]">
                <div className="mb-[10px]">
                  <CplDecisionLifecycleFlowchart />
                </div>

                <p className="text-muted text-sm font-medium max-w-4xl -mt-[30px]">
                  Individual CPL decisions can surface broader signals that inform future program design.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* 08. Interactive Prototype */}
          <section id="interaction" className="py-4">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer className="w-4 h-4 text-blue-600 shrink-0" />
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">08. Interactive Prototype</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text mb-4">Explore the CPL Workflow</h3>
              <p className="text-muted text-base md:text-lg font-medium mb-10 max-w-4xl">
                An interactive prototype showcasing how CPL moves across the student portal, staff portal, and manager view — from submission and review to approval, visibility, and status updates.
              </p>
              <div className="max-w-4xl overflow-hidden">
                {/* Video showcase — swap PROTOTYPE_VIDEO_SRC in constants above */}
                <div className="relative aspect-video min-h-[240px] w-full bg-slate-900 overflow-hidden">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedMetadata={(e) => {
                      (e.target as HTMLVideoElement).playbackRate = PROTOTYPE_VIDEO_PLAYBACK_RATE;
                    }}
                  >
                    <source src={PROTOTYPE_VIDEO_SRC} type="video/mp4" />
                  </video>
                </div>
                {/* CTA — swap PROTOTYPE_URL in constants above */}
                <div className="pt-6">
                  <Link
                    href={PROTOTYPE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-5 text-xl font-medium text-white transition hover:bg-blue-700"
                  >
                    Explore Prototype
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* 9. Outcomes */}
          <ScrollReveal direction="up">
            <section
              id="outcomes"
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
                  <TrendingUp className="w-5 h-5 text-blue-400 shrink-0" />
                  <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest">09. Impact</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">Impact & Outcomes</h3>
                <p className="text-white/80 font-medium mb-10 max-w-2xl">
                  The staff portal improved operational efficiency and established a foundation for cross-role workflows.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                        Access to critical student information
                      </p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">35%</span>
                      <span className="text-xl lg:text-2xl text-white/60 mb-2">faster</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium mb-4">Compared with the legacy Salesforce workflow</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                        <span>Legacy</span>
                        <span>Redesigned</span>
                      </div>
                      <div className="h-3 rounded-full overflow-hidden flex">
                        <div className="bg-white/20 rounded-l-full" style={{ width: "61%" }} title="Legacy baseline" />
                        <div className="bg-emerald-500 rounded-r-full" style={{ width: "39%" }} title="35% faster" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                        Time-to-action for common cases
                      </p>
                    </div>
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-bold text-white tabular-nums">30%</span>
                      <span className="text-xl lg:text-2xl text-white/60 mb-2">reduction</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium mb-4">Compared with previous case-handling flow</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-white/50 uppercase tracking-wide font-medium">
                        <span>Legacy</span>
                        <span>Redesigned</span>
                      </div>
                      <div className="h-3 rounded-full overflow-hidden flex">
                        <div className="bg-white/20 rounded-l-full" style={{ width: "59%" }} title="Legacy baseline" />
                        <div className="bg-emerald-500 rounded-r-full" style={{ width: "41%" }} title="30% reduction" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                        Visibility across workflows
                      </p>
                    </div>
                    <p className="text-white font-medium text-lg">Improved visibility across staff and manager workflows</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 group hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Foundation</p>
                    </div>
                    <p className="text-white font-medium text-lg">
                      Established a reusable foundation for internal portal expansion
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* 10. Final Reflection */}
          <section id="reflection">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-2">
              <Quote className="w-4 h-4 text-blue-600 shrink-0" />
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">10. Reflection</h2>
            </div>
              <blockquote className="text-xl md:text-2xl font-medium text-text leading-relaxed max-w-5xl italic">
                &quot;This project started as an internal dashboard effort, but evolved into a broader systems design
                challenge — aligning student operations, staff decision-making, and managerial oversight in one
                connected experience. My role was not just to improve usability, but to translate institutional
                complexity into workflows people could trust.&quot;
              </blockquote>
            </ScrollReveal>
          </section>

          <div className="pt-12 pb-20 text-center">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-muted hover:text-text transition-colors text-sm font-medium uppercase tracking-widest"
            >
              <span>←</span> BACK TO SELECTED WORK
            </Link>
          </div>
        </div>
      </main>
      <PlaceholderModal
        open={placeholderModal.open}
        onClose={() => setPlaceholderModal({ open: false })}
        caption={placeholderModal.caption}
      >
        {placeholderModal.content}
      </PlaceholderModal>
      <ImageGalleryModal
        open={iterationModal.open}
        onClose={() => setIterationModal({ open: false, index: 0 })}
        images={ITERATION_IMGS}
        initialIndex={iterationModal.index}
      />
      </CalbrightCaseStudyLayout>
    </div>
  );
}


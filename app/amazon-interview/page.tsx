"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

/* ─── Constants ─── */
const TOTAL_SLIDES = 22;
const IMG_BASE = "https://www.wensproject.com/images/";
const BLUE = "#0073BB";
const GREEN = "#037F0C";
const RED = "#D13212";
const TEXT_PRIMARY = "#16191F";
const TEXT_SECONDARY = "#5F6B7A";
const BORDER = "#E9EBED";
const CARD_BG = "#F2F3F3";
const PURPLE = "#6941C6";

/* ─── Image with fallback ─── */
function SlideImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [error, setError] = useState(false);
  const fullSrc = src.startsWith("http") ? src : `${IMG_BASE}${src}`;

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-[#F2F3F3] border border-[#E9EBED] rounded-xl ${className}`}
        style={{ minHeight: 120 }}
      >
        <p className="text-sm text-[#5F6B7A] px-4 text-center">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={fullSrc}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`rounded-xl ${className}`}
      style={{ maxHeight: "62vh", objectFit: "contain" }}
    />
  );
}

/* ─── Reusable card ─── */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-[#E9EBED] bg-[#F2F3F3] rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Section label ─── */
function SectionLabel({
  children,
  color = BLUE,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <p
      className="text-base font-extrabold uppercase tracking-[3px] mb-5"
      style={{ color }}
    >
      {children}
    </p>
  );
}

/* ─── Slide title ─── */
function SlideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[52px] leading-tight font-extrabold mb-8"
      style={{ color: TEXT_PRIMARY }}
    >
      {children}
    </h2>
  );
}

/* ─── Metric card ─── */
function MetricCard({
  value,
  label,
  desc,
  color = BLUE,
}: {
  value: string;
  label: string;
  desc?: string;
  color?: string;
}) {
  return (
    <Card className="flex-1 text-center p-8">
      <p className="text-[56px] font-bold leading-none mb-3" style={{ color }}>
        {value}
      </p>
      <p
        className="text-lg font-semibold mb-1"
        style={{ color: TEXT_PRIMARY }}
      >
        {label}
      </p>
      {desc && (
        <p className="text-base" style={{ color: TEXT_SECONDARY }}>
          {desc}
        </p>
      )}
    </Card>
  );
}

/* ─── Comparison pill ─── */
function ComparisonPill({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  return (
    <Card className="flex-1 text-center py-5 px-4">
      <p
        className="text-base font-semibold mb-3"
        style={{ color: TEXT_SECONDARY }}
      >
        {label}
      </p>
      <div className="flex items-center justify-center gap-4">
        <span className="line-through text-xl" style={{ color: RED }}>
          {before}
        </span>
        <span className="text-xl" style={{ color: BLUE }}>→</span>
        <span className="text-xl font-bold" style={{ color: GREEN }}>
          {after}
        </span>
      </div>
    </Card>
  );
}

/* ─── Bridge row ─── */
function BridgeRow({
  left,
  right,
  arrowColor = BLUE,
}: {
  left: string;
  right: string;
  arrowColor?: string;
}) {
  return (
    <div className="flex items-center gap-8 py-5 border-b border-[#E9EBED] last:border-b-0">
      <p
        className="flex-1 text-right text-xl"
        style={{ color: TEXT_SECONDARY }}
      >
        {left}
      </p>
      <span className="text-3xl" style={{ color: arrowColor }}>
        →
      </span>
      <p className="flex-1 text-xl font-semibold" style={{ color: TEXT_PRIMARY }}>
        {right}
      </p>
    </div>
  );
}

/* ─── Slide wrapper ─── */
function Slide({
  children,
  visible,
  center = false,
}: {
  children: React.ReactNode;
  visible: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-300 flex ${center ? "items-center justify-center" : "items-start justify-start"}`}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className={`w-full h-full overflow-y-auto px-24 py-14 ${center ? "flex flex-col items-center justify-center" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── Timeline item ─── */
function TimelineItem({
  num,
  color,
  title,
  desc,
}: {
  num: number;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold shrink-0 mt-0.5"
        style={{ backgroundColor: color }}
      >
        {num}
      </div>
      <div>
        <p className="text-xl font-semibold" style={{ color: TEXT_PRIMARY }}>
          {title}
        </p>
        <p className="text-lg" style={{ color: TEXT_SECONDARY }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                            */
/* ═══════════════════════════════════════════════════════════ */

export default function AmazonInterviewDeck() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => setCurrent((c) => Math.min(c + 1, TOTAL_SLIDES - 1)),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => Math.max(c - 1, 0)),
    [],
  );

  /* Fullscreen */
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  /* Keyboard nav */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
      if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  /* Touch swipe */
  const touchStart = useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (diff < -50) next();
    if (diff > 50) prev();
    touchStart.current = null;
  }

  /* Section color for progress bar */
  function sectionColor(idx: number): string {
    if (idx >= 2 && idx <= 11) return BLUE; // EagleEye slides
    if (idx >= 12 && idx <= 19) return GREEN; // Calbright slides
    return TEXT_SECONDARY; // intro / closing
  }

  const progress = ((current + 1) / TOTAL_SLIDES) * 100;

  return (
    <div
      className="fixed inset-0 bg-white flex flex-col"
      style={{ fontFamily: "var(--font-open-sans), 'Open Sans', system-ui, -apple-system, sans-serif" }}
    >
      {/* ─── Progress bar ─── */}
      <div className="h-[3px] w-full bg-[#E9EBED] shrink-0">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            backgroundColor: sectionColor(current),
          }}
        />
      </div>

      {/* ─── Fullscreen button ─── */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
        className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-lg border border-[#E9EBED] bg-white/90 backdrop-blur-sm hover:bg-[#F2F3F3] transition-colors cursor-pointer"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
      >
        {isFullscreen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5F6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" />
            <line x1="14" y1="10" x2="21" y2="3" /><line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5F6B7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        )}
      </button>

      {/* ─── Slide area ─── */}
      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center overflow-hidden"
        onClick={next}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative bg-white w-full h-full">
          {/* ── Slide 1: Title ── */}
          <Slide visible={current === 0} center>
            <p
              className="text-sm font-semibold uppercase tracking-[3px] mb-6"
              style={{ color: TEXT_SECONDARY }}
            >
              Portfolio Presentation
            </p>
            <h1
              className="text-[64px] font-extrabold mb-4"
              style={{ color: TEXT_PRIMARY }}
            >
              Wen Liu
            </h1>
            <p className="text-[26px] mb-10" style={{ color: TEXT_SECONDARY }}>
              Senior Product Designer
            </p>
            <div className="flex gap-4 mb-14">
              {[
                "Complex Enterprise Systems",
                "Workflow Architecture",
                "0→1 Product Design",
              ].map((t) => (
                <span
                  key={t}
                  className="px-5 py-2.5 rounded-full text-base font-medium border"
                  style={{
                    borderColor: BORDER,
                    color: TEXT_SECONDARY,
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-base" style={{ color: TEXT_SECONDARY }}>
              Amazon Global Logistics · Senior UX Designer
            </p>
          </Slide>

          {/* ── Slide 2: Agenda ── */}
          <Slide visible={current === 1}>
            <SectionLabel color={TEXT_SECONDARY}>
              Today&apos;s Agenda
            </SectionLabel>
            <div className="flex gap-6 mt-4">
              <Card className="flex-1">
                <p
                  className="text-xs font-semibold uppercase tracking-[2px] mb-3"
                  style={{ color: BLUE }}
                >
                  Project 1 · 18 min
                </p>
                <p
                  className="text-2xl font-extrabold mb-3"
                  style={{ color: TEXT_PRIMARY }}
                >
                  DiDi EagleEye
                </p>
                <p
                  className="text-lg leading-relaxed mb-4"
                  style={{ color: TEXT_SECONDARY }}
                >
                  Evolved a single DLP tool into a five-hub enterprise security
                  platform. Drove +75% trial conversion and $6M revenue.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Platform Scale", "Design System", "Data-Dense UI"].map(
                    (t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "#E8F4FD", color: BLUE }}
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </Card>
              <Card className="flex-1">
                <p
                  className="text-xs font-semibold uppercase tracking-[2px] mb-3"
                  style={{ color: GREEN }}
                >
                  Project 2 · 12 min
                </p>
                <p
                  className="text-2xl font-extrabold mb-3"
                  style={{ color: TEXT_PRIMARY }}
                >
                  Calbright College
                </p>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: TEXT_SECONDARY }}
                >
                  Sole designer. Built student + staff portals from scratch serving
                  8,000+ users across 7 programs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "0→1 Build",
                    "User Research",
                    "Multi-Role Platform",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#E8F8E8", color: GREEN }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </Slide>

          {/* ── Slide 3: EagleEye Divider ── */}
          <Slide visible={current === 2} center>
            <SectionLabel color={BLUE}>Project 1</SectionLabel>
            <h1
              className="text-[56px] font-extrabold mb-5"
              style={{ color: TEXT_PRIMARY }}
            >
              DiDi EagleEye
            </h1>
            <p className="text-2xl mb-12 max-w-3xl text-center" style={{ color: TEXT_SECONDARY }}>
              From a single DLP tool to a five-hub enterprise security platform
            </p>
            <div className="flex gap-12 text-base" style={{ color: TEXT_SECONDARY }}>
              {[
                ["Role", "Design Lead"],
                ["Timeline", "2020–2023"],
                ["Users", "SecOps Operators"],
                ["Product", "EagleEye EPP"],
              ].map(([k, v]) => (
                <div key={k} className="text-center">
                  <p className="font-semibold uppercase tracking-wider text-sm mb-1" style={{ color: TEXT_SECONDARY }}>
                    {k}
                  </p>
                  <p className="font-medium text-lg" style={{ color: TEXT_PRIMARY }}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Slide>

          {/* ── Slide 4: EagleEye — Challenge ── */}
          <Slide visible={current === 3}>
            <SectionLabel color={BLUE}>01 · Challenge</SectionLabel>
            <SlideTitle>Fragmented. Error-prone.</SlideTitle>
            <div className="flex gap-5 mb-6">
              <MetricCard value="40%" label="Task abandonment rate" desc="Users dropped off mid-configuration" color={RED} />
              <MetricCard value="4 days" label="Setup time" desc="Multi-day process with manual validation" color={RED} />
              <MetricCard value="10+" label="Errors per user" desc="Policy conflicts and logic clashes" color={RED} />
            </div>
            <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
              <SlideImage src="didi/pdfpage17.svg" alt="Legacy workflow diagram showing fragmented configuration process" className="w-full" />
            </div>
          </Slide>

          {/* ── Slide 5: System Thinking ── */}
          <Slide visible={current === 4}>
            <SectionLabel color={BLUE}>02 · System Thinking</SectionLabel>
            <SlideTitle>Re-architecting governance</SlideTitle>
            <p className="text-xl leading-relaxed mb-8" style={{ color: TEXT_SECONDARY }}>
              Legacy systems mapped policies to devices, causing clashes at scale. I introduced an
              &quot;Aggregated Policies&quot; framework — shifting from device-centric to people-centric architecture.
            </p>
            <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
              <SlideImage src="didi/pdfpage14.svg" alt="Aggregated Policies framework diagram" className="w-full" />
            </div>
          </Slide>

          {/* ── Slide 6: Approach & IA ── */}
          <Slide visible={current === 5}>
            <SectionLabel color={BLUE}>03 · Approach &amp; IA</SectionLabel>
            <SlideTitle>Prioritization at scale</SlideTitle>
            <div className="flex gap-5 mb-6">
              <Card className="flex-1">
                <p className="text-xl font-extrabold mb-2" style={{ color: TEXT_PRIMARY }}>UX Benchmarking</p>
                <p className="text-lg" style={{ color: TEXT_SECONDARY }}>HEART model baseline score: 4.12</p>
              </Card>
              <Card className="flex-1">
                <p className="text-xl font-extrabold mb-2" style={{ color: TEXT_PRIMARY }}>P0/P1/P2 Hierarchy</p>
                <p className="text-lg" style={{ color: TEXT_SECONDARY }}>Strict element categorization reducing cognitive load</p>
              </Card>
              <Card className="flex-1">
                <p className="text-xl font-extrabold mb-2" style={{ color: TEXT_PRIMARY }}>Unified Hub</p>
                <p className="text-lg" style={{ color: TEXT_SECONDARY }}>Consolidated device IDs into departmental structures</p>
              </Card>
            </div>
            <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
              <SlideImage src="didi/pdfpage15.svg" alt="Information architecture and prioritization framework" className="w-full" />
            </div>
          </Slide>

          {/* ── Slide 7: Design System ── */}
          <Slide visible={current === 6}>
            <SectionLabel color={BLUE}>04 · Design System</SectionLabel>
            <SlideTitle>Systematized for scale</SlideTitle>
            <p className="text-xl leading-relaxed mb-8" style={{ color: TEXT_SECONDARY }}>
              I defined design principles specific to security products: how severity should always be
              communicated, how destructive actions should behave, what information operators need before
              acting. These became the decision-making framework for the entire team.
            </p>
            <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
              <SlideImage src="didi/design-system-model.png" alt="Design system model for security products" className="w-full" />
            </div>
          </Slide>

          {/* ── Slide 8: Solutions ── */}
          <Slide visible={current === 7}>
            <SectionLabel color={BLUE}>05 · Solutions</SectionLabel>
            <SlideTitle>From 7 steps to 3</SlideTitle>
            <div className="flex gap-5 mb-6">
              <div className="flex-1">
                <p className="text-base font-semibold uppercase tracking-wider mb-3" style={{ color: RED }}>Before — Cluttered &amp; Complex</p>
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
                  <SlideImage src="didi/pdfpage923.svg" alt="Before: cluttered configuration interface" className="w-full" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold uppercase tracking-wider mb-3" style={{ color: GREEN }}>After — Streamlined</p>
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
                  <SlideImage src="didi/pdfpage20.svg" alt="After: streamlined configuration interface" className="w-full" />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <ComparisonPill label="Configuration flow" before="7 steps" after="3 steps" />
              <ComparisonPill label="Setup time" before="4 days" after="1 session" />
              <ComparisonPill label="Task completion" before="20 min" after="7 min" />
            </div>
          </Slide>

          {/* ── Slide 9: Key Decision ── */}
          <Slide visible={current === 8}>
            <SectionLabel color={BLUE}>06 · Key Decision</SectionLabel>
            <SlideTitle>Navigating organizational pushback</SlideTitle>
            <div className="flex flex-col gap-5 mt-2">
              <TimelineItem num={1} color={RED} title="Proposed Restructure" desc="Suggested shifting from device-centric to department-centric model. Got rejected." />
              <TimelineItem num={2} color="#F79009" title="Found the Data" desc="Pulled analytics showing 40% drop-off was a business problem, not just a UX issue." />
              <TimelineItem num={3} color={BLUE} title="Pilot Proposal" desc="Proposed trying the new model with one department first to reduce risk." />
              <TimelineItem num={4} color={GREEN} title="Pilot Success" desc="Pilot department completed setup in 1 session. Stakeholders bought in." />
              <TimelineItem num={5} color={GREEN} title="Full Deployment" desc="Rolled out platform-wide. Later deployed to external enterprise customers." />
              <TimelineItem num={6} color={PURPLE} title="Revenue Impact" desc="Platform became SSTG's flagship product. Drove $6M in revenue." />
            </div>
          </Slide>

          {/* ── Slide 10: System Expansion ── */}
          <Slide visible={current === 9}>
            <SectionLabel color={BLUE}>07 · System Expansion</SectionLabel>
            <SlideTitle>Real-time security command</SlideTitle>
            <p className="text-xl leading-relaxed mb-8" style={{ color: TEXT_SECONDARY }}>
              Extended the platform logic into a real-time monitoring dashboard — configure, verify,
              monitor, all in one loop.
            </p>
            <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
              <SlideImage src="didi/pdfpage28.svg" alt="Real-time security monitoring dashboard" className="w-full" />
            </div>
          </Slide>

          {/* ── Slide 11: EagleEye Impact ── */}
          <Slide visible={current === 10}>
            <SectionLabel color={BLUE}>08 · Impact</SectionLabel>
            <SlideTitle>Measurable outcomes</SlideTitle>
            <div className="grid grid-cols-3 gap-4">
              <MetricCard value="+75%" label="Trial-to-paid conversion" desc="Flagship product for SSTG division" color={BLUE} />
              <MetricCard value="$6M" label="Revenue driven" desc="Platform became the business engine" color={BLUE} />
              <MetricCard value="90%" label="Error reduction" desc="10 errors/user → 1 error/user" color={BLUE} />
              <MetricCard value="4.12 → 7.48" label="UX Score improvement" desc="+81% via HEART framework" color={BLUE} />
              <MetricCard value="1 → 5" label="Platform modules" desc="DLP expanded to full security suite" color={BLUE} />
              <MetricCard value="65%" label="Task time reduction" desc="20 min → 7 min per session" color={BLUE} />
            </div>
          </Slide>

          {/* ── Slide 12: EagleEye → AGL Bridge ── */}
          <Slide visible={current === 11} center>
            <SlideTitle>How this connects to Amazon Global Logistics</SlideTitle>
            <div className="w-full max-w-3xl mt-4">
              <BridgeRow left="Complex B2B operational tools" right="Seller-facing shipping tools" arrowColor={BLUE} />
              <BridgeRow left="Data-dense security dashboards" right="Logistics monitoring & tracking" arrowColor={BLUE} />
              <BridgeRow left="Cross-functional alignment" right="PM + Eng + Business partners" arrowColor={BLUE} />
              <BridgeRow left="Design system for platform scale" right="Design patterns & UX standards" arrowColor={BLUE} />
            </div>
          </Slide>

          {/* ── Slide 13: Calbright Divider ── */}
          <Slide visible={current === 12} center>
            <SectionLabel color={GREEN}>Project 2</SectionLabel>
            <h1 className="text-[56px] font-extrabold mb-5" style={{ color: TEXT_PRIMARY }}>
              Calbright College
            </h1>
            <p className="text-2xl mb-12 max-w-3xl text-center" style={{ color: TEXT_SECONDARY }}>
              Sole designer — building student &amp; staff platforms from scratch
            </p>
            <div className="flex gap-12 text-base" style={{ color: TEXT_SECONDARY }}>
              {[
                ["Role", "Sr. Product Designer"],
                ["Timeline", "2023–Present"],
                ["Users", "8,000+ students, 200+ staff"],
                ["Scope", "Staff-Level, Sole Designer"],
              ].map(([k, v]) => (
                <div key={k} className="text-center">
                  <p className="font-semibold uppercase tracking-wider text-sm mb-1" style={{ color: TEXT_SECONDARY }}>{k}</p>
                  <p className="font-medium text-lg" style={{ color: TEXT_PRIMARY }}>{v}</p>
                </div>
              ))}
            </div>
          </Slide>

          {/* ── Slide 14: Calbright — Context & Challenge ── */}
          <Slide visible={current === 13}>
            <SectionLabel color={GREEN}>01 · Context &amp; Challenge</SectionLabel>
            <SlideTitle>Two platforms, two user groups, one designer</SlideTitle>
            <div className="flex gap-5 mb-5">
              <Card className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[2px] mb-3" style={{ color: GREEN }}>Student Portal</p>
                <ul className="space-y-3 text-lg" style={{ color: TEXT_SECONDARY }}>
                  <li>• Adult learners, varying digital literacy</li>
                  <li>• Mobile-first (working parents)</li>
                  <li>• Static homepage, no next-step guidance</li>
                  <li>• 41% engagement, 58% orientation completion</li>
                </ul>
              </Card>
              <Card className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[2px] mb-3" style={{ color: PURPLE }}>Staff Portal (0→1)</p>
                <ul className="space-y-3 text-lg" style={{ color: TEXT_SECONDARY }}>
                  <li>• Fragmented Salesforce workflows</li>
                  <li>• 3 teams with different processes</li>
                  <li>• No unified case management</li>
                  <li>• High context-switching, buried actions</li>
                </ul>
              </Card>
            </div>
            <div className="rounded-xl px-6 py-3 text-center text-sm" style={{ backgroundColor: CARD_BG, color: TEXT_SECONDARY, border: `1px solid ${BORDER}` }}>
              Scaling challenge: 2,000 → 8,000+ students · 3 → 7 programs · Under DEAC accreditation constraints
            </div>
          </Slide>

          {/* ── Slide 15: User Research ── */}
          <Slide visible={current === 14}>
            <SectionLabel color={GREEN}>02 · User Research</SectionLabel>
            <SlideTitle>Understanding student needs</SlideTitle>
            <div className="flex gap-5 mb-5">
              <div className="flex-1 border border-[#E9EBED] rounded-xl overflow-hidden">
                <SlideImage src="calbright/lucas-desouza.svg" alt="Persona: Lucas DeSouza — adult learner profile" className="w-full" />
              </div>
              <div className="flex-1 border border-[#E9EBED] rounded-xl overflow-hidden">
                <SlideImage src="calbright/kimberley-flores.svg" alt="Persona: Kimberley Flores — working parent profile" className="w-full" />
              </div>
            </div>
            <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
              <SlideImage src="calbright/student-journey-1.svg" alt="Student journey map showing pain points and opportunities" className="w-full" />
            </div>
          </Slide>

          {/* ── Slide 16: Student Journey 2.0 ── */}
          <Slide visible={current === 15}>
            <SectionLabel color={GREEN}>03 · Student Journey 2.0</SectionLabel>
            <SlideTitle>From static homepage to dynamic journey</SlideTitle>
            <div className="flex gap-5 mb-5">
              <div className="flex-1">
                <p className="text-base font-semibold uppercase tracking-wider mb-3" style={{ color: RED }}>Before</p>
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
                  <SlideImage src="calbright/before-redesign.svg" alt="Before: static student homepage" className="w-full" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold uppercase tracking-wider mb-3" style={{ color: GREEN }}>After — Milestone-driven</p>
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
                  <SlideImage src="calbright/page-interaction-10.svg" alt="After: milestone-driven student journey" className="w-full" />
                </div>
              </div>
            </div>
            <div className="rounded-xl px-6 py-3 text-center text-sm" style={{ backgroundColor: CARD_BG, color: TEXT_SECONDARY, border: `1px solid ${BORDER}` }}>
              Inspired by Canvas &amp; Salesforce Trailhead · Milestone framework: Onboarding → First Assessment → Paced Timeline → Competencies → Diligent Milestone
            </div>
          </Slide>

          {/* ── Slide 17: Staff Portal ── */}
          <Slide visible={current === 16}>
            <SectionLabel color={GREEN}>04 · Staff Portal — 0→1</SectionLabel>
            <SlideTitle>Replacing Salesforce with purpose-built workflows</SlideTitle>
            <div className="flex gap-5 mb-5">
              <div className="flex-1">
                <p className="text-base font-semibold uppercase tracking-wider mb-3" style={{ color: TEXT_SECONDARY }}>Legacy Salesforce</p>
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
                  <SlideImage src="calbright/existing-reality-vs-opportunity.svg" alt="Legacy Salesforce workflow" className="w-full" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold uppercase tracking-wider mb-3" style={{ color: GREEN }}>New Staff Portal</p>
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
                  <SlideImage src="calbright/staff-portal-dashboard.svg" alt="New Staff Portal dashboard" className="w-full" />
                </div>
              </div>
            </div>
            <div className="border border-[#E9EBED] rounded-xl overflow-hidden">
              <SlideImage src="calbright/CPL2234.svg" alt="CPL Cross-Portal Workflow — Student submits → Staff reviews → Manager oversees" className="w-full" />
            </div>
            <p className="text-center text-sm mt-3" style={{ color: TEXT_SECONDARY }}>
              CPL Cross-Portal Workflow — Student submits → Staff reviews → Manager oversees
            </p>
          </Slide>

          {/* ── Slide 18: Data-Driven ── */}
          <Slide visible={current === 17}>
            <SectionLabel color={GREEN}>05 · Data-Driven Iteration</SectionLabel>
            <SlideTitle>Behavioral signals → design decisions</SlideTitle>
            <div className="flex gap-5 mb-6">
              <div className="flex-1">
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden mb-2">
                  <SlideImage src="calbright/heatmap.svg" alt="Heatmap analysis of student portal usage" className="w-full" />
                </div>
                <p className="text-sm text-center" style={{ color: TEXT_SECONDARY }}>Heatmap analysis</p>
              </div>
              <div className="flex-1">
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden mb-2">
                  <SlideImage src="calbright/rage-click.svg" alt="Rage click visualization showing user frustration points" className="w-full" />
                </div>
                <p className="text-sm text-center" style={{ color: TEXT_SECONDARY }}>Rage click visualization</p>
              </div>
              <div className="flex-1">
                <div className="border border-[#E9EBED] rounded-xl overflow-hidden mb-2">
                  <SlideImage src="calbright/funnel-dropoff.svg" alt="Funnel drop-off analysis" className="w-full" />
                </div>
                <p className="text-sm text-center" style={{ color: TEXT_SECONDARY }}>Funnel drop-off</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ComparisonPill label="Engagement" before="41%" after="67%" />
              <ComparisonPill label="Orientation scheduling" before="58%" after="84%" />
              <ComparisonPill label="Rage clicks" before="12%" after="~0%" />
            </div>
          </Slide>

          {/* ── Slide 19: Calbright Impact ── */}
          <Slide visible={current === 18}>
            <SectionLabel color={GREEN}>06 · Impact</SectionLabel>
            <SlideTitle>Measurable outcomes</SlideTitle>
            <div className="grid grid-cols-3 gap-4">
              <MetricCard value="4.6 / 5" label="Hotjar satisfaction" desc="Up from 3.8/5" color={GREEN} />
              <MetricCard value="67%" label="Engagement rate" desc="Up from 41%" color={GREEN} />
              <MetricCard value="84%" label="Orientation scheduling" desc="Up from 58%" color={GREEN} />
              <MetricCard value="35%" label="Faster staff time-to-action" desc="Staff Portal vs legacy Salesforce" color={GREEN} />
              <MetricCard value="30%" label="Task speed improvement" desc="Common-case completion time" color={GREEN} />
              <MetricCard value="4x" label="Platform scaling" desc="2K→8K students, 3→7 programs" color={GREEN} />
            </div>
          </Slide>

          {/* ── Slide 20: Calbright → AGL Bridge ── */}
          <Slide visible={current === 19} center>
            <SlideTitle>How this connects to Amazon Global Logistics</SlideTitle>
            <div className="w-full max-w-3xl mt-4">
              <BridgeRow left="0→1 from scratch under constraints" right="Building new logistics tools end-to-end" arrowColor={GREEN} />
              <BridgeRow left="User research → data-driven iteration" right="Usability testing & analytics-driven design" arrowColor={GREEN} />
              <BridgeRow left="Multi-role platform (student + staff)" right="Seller-facing + internal operations" arrowColor={GREEN} />
              <BridgeRow left="Scaling without breaking" right="Global logistics at Amazon scale" arrowColor={GREEN} />
            </div>
          </Slide>

          {/* ── Slide 21: Why AGL ── */}
          <Slide visible={current === 20} center>
            <SectionLabel color={TEXT_SECONDARY}>Why AGL</SectionLabel>
            <h2 className="text-[52px] font-extrabold mb-12 text-center max-w-4xl" style={{ color: TEXT_PRIMARY }}>
              Making global logistics{" "}
              <span style={{ color: BLUE }}>simple</span> and{" "}
              <span style={{ color: GREEN }}>reliable</span>
            </h2>
            <div className="max-w-3xl space-y-8">
              <p className="text-xl leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                I&apos;ve spent 10 years making complex enterprise systems usable — security, network
                monitoring, education. Logistics is the same challenge: multi-stakeholder, data-dense,
                high-stakes workflows.
              </p>
              <div style={{ borderTop: `1px solid ${BORDER}` }} />
              <p className="text-xl leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                I bring a rare combination: systems thinking for platform scale, hands-on research for
                user empathy, and a track record of measurable business impact.
              </p>
              <div style={{ borderTop: `1px solid ${BORDER}` }} />
              <p className="text-xl leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                I&apos;m excited about AGL because simplifying cross-border logistics at Amazon&apos;s
                scale is exactly the kind of problem I&apos;m built for.
              </p>
            </div>
          </Slide>

          {/* ── Slide 22: Thank You ── */}
          <Slide visible={current === 21} center>
            <h1 className="text-[56px] font-extrabold mb-4" style={{ color: TEXT_PRIMARY }}>
              Thank You
            </h1>
            <p className="text-2xl mb-12" style={{ color: TEXT_SECONDARY }}>
              Let&apos;s discuss.
            </p>
            <div className="space-y-3 text-xl" style={{ color: TEXT_SECONDARY }}>
              <p>wensproject.com</p>
              <p>williamliu_1989@hotmail.com</p>
            </div>
          </Slide>
        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div
        className="h-11 shrink-0 flex items-center justify-between px-6"
        style={{
          backgroundColor: "#FAFAFA",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <div className="flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="px-2 py-1 text-sm rounded hover:bg-[#E9EBED] transition-colors"
            style={{ color: TEXT_SECONDARY }}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="px-2 py-1 text-sm rounded hover:bg-[#E9EBED] transition-colors"
            style={{ color: TEXT_SECONDARY }}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
        <p className="text-sm tabular-nums" style={{ color: TEXT_SECONDARY }}>
          {current + 1} / {TOTAL_SLIDES}
        </p>
      </div>
    </div>
  );
}

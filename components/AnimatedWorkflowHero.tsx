"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "before" | "after";

const lineTransition = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };
const fadeUp = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Node({
  x,
  y,
  w,
  h,
  label,
  tone = "neutral",
  i,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  tone?: "neutral" | "bad" | "ok";
  i: number;
}) {
  const styles = {
    neutral: {
      fill: "rgba(255,255,255,0.06)",
      stroke: "rgba(255,255,255,0.12)",
      text: "rgba(255,255,255,0.92)",
      sub: "rgba(255,255,255,0.68)",
    },
    bad: {
      fill: "rgba(255,90,60,0.12)",
      stroke: "rgba(255,90,60,0.35)",
      text: "rgba(255,255,255,0.92)",
      sub: "rgba(255,255,255,0.72)",
    },
    ok: {
      fill: "rgba(105,219,124,0.12)",
      stroke: "rgba(105,219,124,0.35)",
      text: "rgba(255,255,255,0.92)",
      sub: "rgba(255,255,255,0.72)",
    },
  }[tone];

  return (
    <motion.g initial="hidden" animate="show" variants={fadeUp} custom={i}>
      <rect x={x} y={y} width={w} height={h} rx={12} fill={styles.fill} stroke={styles.stroke} />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          fontSize: 12.5,
          fontWeight: 600,
          fill: styles.text,
          letterSpacing: 0.2,
        }}
      >
        {label}
      </text>
    </motion.g>
  );
}

function Glow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-6 opacity-70"
      style={{
        background:
          "radial-gradient(closest-side, rgba(59,130,246,0.22), transparent 65%)",
        filter: "blur(30px)",
      }}
    />
  );
}

export default function AnimatedWorkflowHero({
  className = "",
}: {
  className?: string;
}) {
  const [mode, setMode] = useState<Mode>("before");

  const before = useMemo(
    () => ({
      title: "Before: Multi-day + manual validation",
      badge: "Efficiency issues",
      nodes: [
        { x: 44, y: 30, w: 170, h: 42, label: "Create policy", tone: "neutral" as const },
        { x: 44, y: 100, w: 170, h: 42, label: "Fill form", tone: "neutral" as const },
        { x: 44, y: 170, w: 170, h: 42, label: "Validation", tone: "neutral" as const },
        { x: 44, y: 240, w: 170, h: 42, label: "Duplicate conflicts", tone: "bad" as const },
        { x: 260, y: 170, w: 170, h: 42, label: "Review added items", tone: "neutral" as const },
        { x: 260, y: 240, w: 170, h: 42, label: "Performance bottleneck", tone: "bad" as const },
        { x: 260, y: 310, w: 170, h: 42, label: "Rework next day", tone: "neutral" as const },
      ],
      lines: [
        "M129 72 L129 100",
        "M129 142 L129 170",
        "M129 212 L129 240",
        "M214 191 L260 191",
        "M345 212 L345 240",
        "M345 282 L345 310",
      ],
    }),
    []
  );

  const after = useMemo(
    () => ({
      title: "After: Unified policy engine",
      badge: "Faster + fewer errors",
      nodes: [
        { x: 44, y: 52, w: 386, h: 44, label: "Centralized policy visibility", tone: "ok" as const },
        { x: 44, y: 125, w: 186, h: 42, label: "Select scope", tone: "neutral" as const },
        { x: 244, y: 125, w: 186, h: 42, label: "Auto dedupe", tone: "ok" as const },
        { x: 44, y: 195, w: 186, h: 42, label: "Preview impact", tone: "neutral" as const },
        { x: 244, y: 195, w: 186, h: 42, label: "1-step validate", tone: "ok" as const },
        { x: 44, y: 295, w: 386, h: 42, label: "Commit policy changes (device + dept)", tone: "ok" as const },
      ],
      lines: [
        "M237 96 L237 125",
        "M137 167 L137 195",
        "M337 167 L337 195",
        "M137 237 L137 295",
        "M337 237 L337 295",
        "M230 146 L244 146",
        "M230 216 L244 216",
      ],
    }),
    []
  );

  const data = mode === "before" ? before : after;

  return (
    <div
      className={[
        "relative h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      <Glow />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-3 p-3">
        <div>
          <div className="text-xs font-semibold tracking-wide text-white/60">
            {data.badge}
          </div>
          <div className="mt-1 text-sm font-semibold text-white">
            {data.title}
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-black/30 p-1">
          <button
            onClick={() => setMode("before")}
            className={[
              "rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer",
              mode === "before" ? "bg-white/15 text-white" : "text-white/60 hover:text-white",
            ].join(" ")}
          >
            Before
          </button>
          <button
            onClick={() => setMode("after")}
            className={[
              "rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer",
              mode === "after" ? "bg-white/15 text-white" : "text-white/60 hover:text-white",
            ].join(" ")}
          >
            After
          </button>
        </div>
      </div>

      {/* Diagram - fixed aspect ratio so Before/After share same frame size */}
      <div className="relative z-10 px-3 pb-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-2 w-full h-[380px] flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 480 420" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Workflow diagram">
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.30)" />
              </marker>
            </defs>

            <AnimatePresence mode="wait">
              <motion.g
                key={mode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Lines */}
                {data.lines.map((d, idx) => (
                  <motion.g key={`${d}-${idx}`}>
                    <motion.path
                      d={d}
                      fill="none"
                      stroke="rgba(255,255,255,0.30)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      markerEnd="url(#arrow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ ...lineTransition, delay: 0.1 + idx * 0.05 }}
                    />
                  </motion.g>
                ))}

                {/* Nodes */}
                {data.nodes.map((n, idx) => (
                  <Node key={n.label} {...n} i={idx} />
                ))}

                {/* Footer hint */}
                <motion.text
                  x={24}
                  y={404}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.35 }}
                  style={{
                    fontFamily:
                      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
                    fontSize: 11.5,
                    fontWeight: 600,
                    fill: "rgba(255,255,255,0.55)",
                  }}
                >
                  Click &quot;After&quot; to see the streamlined workflow.
                </motion.text>
              </motion.g>
            </AnimatePresence>
          </svg>
        </div>

        {/* Micro KPI row */}
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="text-[11px] font-semibold text-white/60">Setup time</div>
            <div className="mt-1 text-sm font-semibold text-white">
              {mode === "before" ? "Multi-day" : "Minutes"}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="text-[11px] font-semibold text-white/60">Validation loops</div>
            <div className="mt-1 text-sm font-semibold text-white">
              {mode === "before" ? "Repeated" : "Single pass"}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="text-[11px] font-semibold text-white/60">Failure rate</div>
            <div className="mt-1 text-sm font-semibold text-white">
              {mode === "before" ? "Higher" : "Lower"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";

const CARD_CONFIG = [
  // Top row: 1 → 2 → 3 → 4
  { id: 1, label: "Students apply", row: 0, col: 0, style: "student" },
  { id: 2, label: "Students Submit for CPL", row: 0, col: 1, style: "student" },
  { id: 3, label: "Staff In Review", row: 0, col: 2, style: "review" },
  { id: 4, label: "Staff Manager Visible", row: 0, col: 3, style: "review" },
  // Bottom row: 5, 6, 7, 8 (left to right)
  { id: 5, label: "New Learning Program (CPL) Launch at Calbright", row: 1, col: 0, style: "review" },
  { id: 6, label: "Board Review and Push New Learning Program (CPL)", row: 1, col: 1, style: "board" },
  { id: 7, label: "Submit to CA Education Board", row: 1, col: 2, style: "review" },
  { id: 8, label: "Manager Export CSV & Generate Report", row: 1, col: 3, style: "review" },
] as const;

const CARD_W = 220;
const CARD_H = 88;
const COL_GAP = 32;
const ROW_GAP = 64;
const PAD = 32;

const ARROW = "#94a3b8";
const HEAD = 6;

const STYLE_MAP = {
  student: "bg-emerald-50/95 border-emerald-200",
  review: "bg-amber-50/95 border-amber-200",
  board: "bg-rose-50/95 border-rose-200",
} as const;

function ArrowRight({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const lineEndX = x2 - HEAD;
  return (
    <g stroke={ARROW} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={lineEndX} y2={y2} stroke={ARROW} />
      <polygon points={`${x2},${y2} ${lineEndX},${y2 - HEAD} ${lineEndX},${y2 + HEAD}`} fill={ARROW} stroke="none" />
    </g>
  );
}

function ArrowDown({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const lineEndY = y2 - HEAD;
  return (
    <g stroke={ARROW} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={x2} y2={lineEndY} stroke={ARROW} />
      <polygon points={`${x2},${y2} ${x2 - HEAD},${lineEndY} ${x2 + HEAD},${lineEndY}`} fill={ARROW} stroke="none" />
    </g>
  );
}

function ArrowLeft({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const lineEndX = x2 + HEAD;
  return (
    <g stroke={ARROW} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={lineEndX} y2={y2} stroke={ARROW} />
      <polygon points={`${x2},${y2} ${lineEndX},${y2 - HEAD} ${lineEndX},${y2 + HEAD}`} fill={ARROW} stroke="none" />
    </g>
  );
}

function ArrowUp({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const lineEndY = y2 + HEAD;
  return (
    <g stroke={ARROW} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={x2} y2={lineEndY} stroke={ARROW} />
      <polygon points={`${x2},${y2} ${x2 - HEAD},${lineEndY} ${x2 + HEAD},${lineEndY}`} fill={ARROW} stroke="none" />
    </g>
  );
}

export default function CPLDecisionLifecycleDiagram() {
  const getCenter = (row: number, col: number) => ({
    x: PAD + col * (CARD_W + COL_GAP) + CARD_W / 2,
    y: PAD + row * (CARD_H + ROW_GAP) + CARD_H / 2,
  });
  const getRight = (row: number, col: number) => {
    const { x, y } = getCenter(row, col);
    return { x: x + CARD_W / 2, y };
  };
  const getLeft = (row: number, col: number) => {
    const { x, y } = getCenter(row, col);
    return { x: x - CARD_W / 2, y };
  };
  const getTop = (row: number, col: number) => {
    const { x, y } = getCenter(row, col);
    return { x, y: y - CARD_H / 2 };
  };
  const getBottom = (row: number, col: number) => {
    const { x, y } = getCenter(row, col);
    return { x, y: y + CARD_H / 2 };
  };

  const totalW = PAD * 2 + 4 * CARD_W + 3 * COL_GAP;
  const totalH = PAD * 2 + 2 * CARD_H + ROW_GAP;
  const gap = 10;

  return (
    <section className="relative max-w-6xl mx-auto">
      <div className="mb-8">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-1">
          06. CPL DECISION LIFECYCLE
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          CPL Decision Lifecycle
        </h3>
        <p className="text-gray-600 text-base max-w-3xl">
          A closed-loop process showing how student requests move through review, reporting, and program evolution.
        </p>
      </div>

      <div
        className="relative rounded-2xl border border-gray-200 bg-gray-50/50 shadow-sm overflow-hidden min-h-[300px]"
        style={{ aspectRatio: `${totalW} / ${totalH}` }}
      >
        {/* Cards - % positions to scale with SVG viewBox */}
        {CARD_CONFIG.map((card) => {
          const x = PAD + card.col * (CARD_W + COL_GAP);
          const y = PAD + card.row * (CARD_H + ROW_GAP);
          const leftPct = (x / totalW) * 100;
          const topPct = (y / totalH) * 100;
          const widthPct = (CARD_W / totalW) * 100;
          const heightPct = (CARD_H / totalH) * 100;
          return (
            <div
              key={card.id}
              className={`absolute ${STYLE_MAP[card.style]} rounded-xl border shadow-sm flex items-center justify-center text-center px-4 py-3`}
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                width: `${widthPct}%`,
                height: `${heightPct}%`,
              }}
            >
              <p className="text-sm font-medium text-gray-800 leading-snug">{card.label}</p>
            </div>
          );
        })}

        {/* SVG arrows - same coordinate space */}
        <svg
          viewBox={`0 0 ${totalW} ${totalH}`}
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Top row: 1→2, 2→3, 3→4 */}
          <ArrowRight
            x1={getRight(0, 0).x + gap}
            y1={getRight(0, 0).y}
            x2={getLeft(0, 1).x - gap}
            y2={getLeft(0, 1).y}
          />
          <ArrowRight
            x1={getRight(0, 1).x + gap}
            y1={getRight(0, 1).y}
            x2={getLeft(0, 2).x - gap}
            y2={getLeft(0, 2).y}
          />
          <ArrowRight
            x1={getRight(0, 2).x + gap}
            y1={getRight(0, 2).y}
            x2={getLeft(0, 3).x - gap}
            y2={getLeft(0, 3).y}
          />
          {/* Right: 4 ↓ 8 */}
          <ArrowDown
            x1={getBottom(0, 3).x}
            y1={getBottom(0, 3).y + gap}
            x2={getTop(1, 3).x}
            y2={getTop(1, 3).y - gap}
          />
          {/* Bottom row: 8→7, 7→6, 6→5 */}
          <ArrowLeft
            x1={getLeft(1, 3).x - gap}
            y1={getLeft(1, 3).y}
            x2={getRight(1, 2).x + gap}
            y2={getRight(1, 2).y}
          />
          <ArrowLeft
            x1={getLeft(1, 2).x - gap}
            y1={getLeft(1, 2).y}
            x2={getRight(1, 1).x + gap}
            y2={getRight(1, 1).y}
          />
          <ArrowLeft
            x1={getLeft(1, 1).x - gap}
            y1={getLeft(1, 1).y}
            x2={getRight(1, 0).x + gap}
            y2={getRight(1, 0).y}
          />
          {/* Left: 5 ↑ 1 */}
          <ArrowUp
            x1={getCenter(0, 0).x}
            y1={getTop(1, 0).y + gap}
            x2={getCenter(0, 0).x}
            y2={getBottom(0, 0).y - gap}
          />
        </svg>
      </div>
    </section>
  );
}

"use client";

import React from "react";

const CARD_CONFIG = [
  // Top row: 1 → 2 → 3 → 5
  { id: 1, label: "Students apply", fill: "rgba(196, 230, 203, 0.75)", stroke: "#6b8f71", row: 0, col: 0 },
  { id: 2, label: "Students Submit for CPL", fill: "rgba(196, 230, 203, 0.75)", stroke: "#6b8f71", row: 0, col: 1 },
  { id: 3, label: "Staff In Review", fill: "rgba(245, 229, 196, 0.75)", stroke: "#9a8b6e", row: 0, col: 2 },
  { id: 5, label: "Staff Manager Visible", fill: "rgba(255, 217, 166, 0.75)", stroke: "#b8954a", row: 0, col: 3 },
  // Bottom row: 9 → 8 → 7 → 6 (visual order left to right)
  { id: 9, label: "New Learning Program (CPL) Launch at Calbright", fill: "rgba(245, 229, 196, 0.75)", stroke: "#9a8b6e", row: 1, col: 0 },
  { id: 8, label: "Board Review and Push New Learning Program (CPL)", fill: "rgba(255, 217, 217, 0.75)", stroke: "#b87a7a", row: 1, col: 1 },
  { id: 7, label: "Submit to CA Education Board", fill: "rgba(255, 217, 166, 0.75)", stroke: "#b8954a", row: 1, col: 2 },
  { id: 6, label: "Manager Export CSV & Generate Report", fill: "rgba(255, 217, 166, 0.75)", stroke: "#b8954a", row: 1, col: 3 },
] as const;

const ROW_GAP = 64;
const COL_GAP = 32;
const CARD_W = 220;
const CARD_H = 88;

const ARROW_STROKE = "#8b9299";
const HEAD_SIZE = 6;
const LINE_HEIGHT = 17;

function ArrowRight({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const tipX = x2;
  const lineEndX = x2 - HEAD_SIZE;
  return (
    <g stroke={ARROW_STROKE} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={lineEndX} y2={y2} stroke={ARROW_STROKE} />
      <polygon points={`${tipX},${y2} ${lineEndX},${y2 - HEAD_SIZE} ${lineEndX},${y2 + HEAD_SIZE}`} fill={ARROW_STROKE} stroke="none" />
    </g>
  );
}

function ArrowDown({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const tipY = y2;
  const lineEndY = y2 - HEAD_SIZE;
  return (
    <g stroke={ARROW_STROKE} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={x2} y2={lineEndY} stroke={ARROW_STROKE} />
      <polygon points={`${x2},${tipY} ${x2 - HEAD_SIZE},${lineEndY} ${x2 + HEAD_SIZE},${lineEndY}`} fill={ARROW_STROKE} stroke="none" />
    </g>
  );
}

function ArrowLeft({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const tipX = x2;
  const lineEndX = x2 + HEAD_SIZE;
  return (
    <g stroke={ARROW_STROKE} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={lineEndX} y2={y2} stroke={ARROW_STROKE} />
      <polygon points={`${tipX},${y2} ${lineEndX},${y2 - HEAD_SIZE} ${lineEndX},${y2 + HEAD_SIZE}`} fill={ARROW_STROKE} stroke="none" />
    </g>
  );
}

function ArrowUp({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const tipY = y2;
  const lineEndY = y2 + HEAD_SIZE;
  return (
    <g stroke={ARROW_STROKE} fill="none" strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={x2} y2={lineEndY} stroke={ARROW_STROKE} />
      <polygon
        points={`${x2},${tipY} ${x2 - HEAD_SIZE},${lineEndY} ${x2 + HEAD_SIZE},${lineEndY}`}
        fill={ARROW_STROKE}
        stroke="none"
      />
    </g>
  );
}

function splitLabel(label: string, maxLen: number): string[] {
  const words = label.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    if (current && (current + " " + w).length > maxLen) {
      lines.push(current.trim());
      current = w;
    } else {
      current = current ? current + " " + w : w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default function CplProcessFlow() {
  const getCardCenter = (row: number, col: number) => {
    const x = 24 + col * (CARD_W + COL_GAP) + CARD_W / 2;
    const y = 24 + row * (CARD_H + ROW_GAP) + CARD_H / 2;
    return { x, y };
  };

  const getCardRight = (row: number, col: number) => {
    const { x, y } = getCardCenter(row, col);
    return { x: x + CARD_W / 2, y };
  };

  const getCardLeft = (row: number, col: number) => {
    const { x, y } = getCardCenter(row, col);
    return { x: x - CARD_W / 2, y };
  };

  const getCardBottom = (row: number, col: number) => {
    const { x, y } = getCardCenter(row, col);
    return { x, y: y + CARD_H / 2 };
  };

  const getCardTop = (row: number, col: number) => {
    const { x, y } = getCardCenter(row, col);
    return { x, y: y - CARD_H / 2 };
  };

  const totalW = 24 * 2 + 4 * CARD_W + 3 * COL_GAP;
  const totalH = 24 * 2 + 2 * CARD_H + ROW_GAP;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
      <div className="rounded-2xl overflow-hidden border border-gray-300 bg-gray-100 p-6">
        <svg
          viewBox={`0 0 ${totalW} ${totalH}`}
          className="w-full h-auto"
          style={{ minHeight: 260 }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Top row horizontal arrows: 1→2, 2→3, 3→5 */}
          <ArrowRight
            x1={getCardRight(0, 0).x + 8}
            y1={getCardRight(0, 0).y}
            x2={getCardLeft(0, 1).x - 8}
            y2={getCardLeft(0, 1).y}
          />
          <ArrowRight
            x1={getCardRight(0, 1).x + 8}
            y1={getCardRight(0, 1).y}
            x2={getCardLeft(0, 2).x - 8}
            y2={getCardLeft(0, 2).y}
          />
          <ArrowRight
            x1={getCardRight(0, 2).x + 8}
            y1={getCardRight(0, 2).y}
            x2={getCardLeft(0, 3).x - 8}
            y2={getCardLeft(0, 3).y}
          />
          {/* Vertical: 5 down to 6 */}
          <ArrowDown
            x1={getCardBottom(0, 3).x}
            y1={getCardBottom(0, 3).y + 8}
            x2={getCardTop(1, 3).x}
            y2={getCardTop(1, 3).y - 8}
          />
          {/* Bottom row horizontal arrows: 6→7, 7→8, 8→9 (leftward) */}
          <ArrowLeft
            x1={getCardLeft(1, 3).x - 8}
            y1={getCardLeft(1, 3).y}
            x2={getCardRight(1, 2).x + 8}
            y2={getCardRight(1, 2).y}
          />
          <ArrowLeft
            x1={getCardLeft(1, 2).x - 8}
            y1={getCardLeft(1, 2).y}
            x2={getCardRight(1, 1).x + 8}
            y2={getCardRight(1, 1).y}
          />
          <ArrowLeft
            x1={getCardLeft(1, 1).x - 8}
            y1={getCardLeft(1, 1).y}
            x2={getCardRight(1, 0).x + 8}
            y2={getCardRight(1, 0).y}
          />
          {/* Cards */}
          {CARD_CONFIG.map((card) => {
            const x = 24 + card.col * (CARD_W + COL_GAP);
            const y = 24 + card.row * (CARD_H + ROW_GAP);
            const lines = card.label.length > 30 ? splitLabel(card.label, 24) : [card.label];
            const blockHeight = lines.length * LINE_HEIGHT;
            const startY = y + CARD_H / 2 - blockHeight / 2;
            return (
              <g key={card.id}>
                <rect
                  x={x}
                  y={y}
                  width={CARD_W}
                  height={CARD_H}
                  rx={12}
                  ry={12}
                  fill={card.fill}
                  stroke={card.stroke}
                  strokeWidth={1.25}
                />
                <text
                  x={x + CARD_W / 2}
                  y={startY}
                  textAnchor="middle"
                  dominantBaseline="hanging"
                  fill="#374151"
                  style={{ fontSize: 14, fontWeight: 500, fontFamily: "system-ui, sans-serif" }}
                >
                  {lines.map((line, i) => (
                    <tspan key={i} x={x + CARD_W / 2} dy={i === 0 ? 0 : LINE_HEIGHT}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}

          {/* Vertical: 9 up to 1 */}
          <ArrowUp
            x1={getCardCenter(0, 0).x}
            y1={getCardTop(1, 0).y + 8}
            x2={getCardCenter(0, 0).x}
            y2={getCardBottom(0, 0).y - 8}
          />
        </svg>
      </div>
    </div>
  );
}

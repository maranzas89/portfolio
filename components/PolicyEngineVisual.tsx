"use client";

import React from "react";

/**
 * Abstract policy engine architecture visualization for EagleEye hero.
 * Conceptual diagram: rules → policy engine → endpoints.
 * Minimal, glowing nodes and connecting lines on dark background.
 */
export default function PolicyEngineVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full aspect-square max-w-[420px] mx-auto lg:mx-0 lg:max-w-none lg:aspect-auto lg:h-full min-h-[280px] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 400 320"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for nodes */}
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Subtle line glow */}
          <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Radial gradient for central engine node */}
          <radialGradient id="engine-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.5)" />
            <stop offset="70%" stopColor="rgba(96, 165, 250, 0.15)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
          </radialGradient>
        </defs>

        {/* Connecting lines: rules → engine */}
        <g filter="url(#line-glow)">
          <path
            d="M 80 80 Q 140 100 180 140"
            stroke="rgba(96, 165, 250, 0.35)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 80 160 L 180 160"
            stroke="rgba(96, 165, 250, 0.35)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 80 240 Q 140 220 180 180"
            stroke="rgba(96, 165, 250, 0.35)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Connecting lines: engine → endpoints */}
        <g filter="url(#line-glow)">
          <path
            d="M 220 140 Q 260 100 320 80"
            stroke="rgba(129, 140, 248, 0.35)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 220 160 L 320 160"
            stroke="rgba(129, 140, 248, 0.35)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 220 180 Q 260 220 320 240"
            stroke="rgba(129, 140, 248, 0.35)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Rule nodes (left) */}
        <circle cx="80" cy="80" r="8" fill="rgba(96, 165, 250, 0.4)" filter="url(#node-glow)" />
        <circle cx="80" cy="80" r="4" fill="rgba(255, 255, 255, 0.9)" />
        <circle cx="80" cy="160" r="8" fill="rgba(96, 165, 250, 0.4)" filter="url(#node-glow)" />
        <circle cx="80" cy="160" r="4" fill="rgba(255, 255, 255, 0.9)" />
        <circle cx="80" cy="240" r="8" fill="rgba(96, 165, 250, 0.4)" filter="url(#node-glow)" />
        <circle cx="80" cy="240" r="4" fill="rgba(255, 255, 255, 0.9)" />

        {/* Central policy engine node */}
        <circle cx="200" cy="160" r="45" fill="url(#engine-glow)" opacity="0.6" />
        <circle cx="200" cy="160" r="28" fill="rgba(96, 165, 250, 0.25)" stroke="rgba(96, 165, 250, 0.5)" strokeWidth="1.5" filter="url(#node-glow)" />
        <circle cx="200" cy="160" r="12" fill="rgba(255, 255, 255, 0.95)" />

        {/* Endpoint nodes (right) */}
        <circle cx="320" cy="80" r="8" fill="rgba(129, 140, 248, 0.4)" filter="url(#node-glow)" />
        <circle cx="320" cy="80" r="4" fill="rgba(255, 255, 255, 0.9)" />
        <circle cx="320" cy="160" r="8" fill="rgba(129, 140, 248, 0.4)" filter="url(#node-glow)" />
        <circle cx="320" cy="160" r="4" fill="rgba(255, 255, 255, 0.9)" />
        <circle cx="320" cy="240" r="8" fill="rgba(129, 140, 248, 0.4)" filter="url(#node-glow)" />
        <circle cx="320" cy="240" r="4" fill="rgba(255, 255, 255, 0.9)" />

        {/* Subtle flow indicators (small dots along paths) */}
        <circle cx="130" cy="110" r="1.5" fill="rgba(96, 165, 250, 0.5)" />
        <circle cx="270" cy="110" r="1.5" fill="rgba(129, 140, 248, 0.5)" />
      </svg>
    </div>
  );
}

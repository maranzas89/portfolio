"use client";

import React from "react";

/**
 * Reusable hero background glow component.
 * Natural ambient light effect: soft elliptical glow from upper-right,
 * with a subtle secondary fill for depth. Designed to feel like soft
 * diffused light rather than a harsh spotlight.
 */
export default function HeroGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
      style={{
        background:
          "radial-gradient(ellipse 120% 100% at 70% 35%, rgba(96, 165, 250, 0.32) 0%, rgba(96, 165, 250, 0.12) 40%, rgba(96, 165, 250, 0.04) 65%, transparent 85%), radial-gradient(ellipse 80% 60% at 30% 70%, rgba(129, 140, 248, 0.15) 0%, rgba(129, 140, 248, 0.04) 50%, transparent 80%)",
      }}
    />
  );
}

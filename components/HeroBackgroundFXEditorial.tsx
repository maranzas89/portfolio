"use client";

import React, { useEffect, useRef } from "react";

/**
 * Editorial hero background FX — matches landing page visual language but restrained.
 * - Ambient particle glow + floating light (same as homepage)
 * - Soft drifting ambient glow blobs (no ribbon, no arc lines)
 * - Calm, premium, atmospheric
 * - Lighter and quieter than homepage hero
 */
const PARTICLE_COUNT = 28;

export default function HeroBackgroundFXEditorial() {
  const particleFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleFieldRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("span");
      p.className = "hero-particle hero-particle-editorial";
      if (Math.random() > 0.85) p.classList.add("hero-particle-big");
      p.style.left = `${18 + Math.random() * 74}%`;
      p.style.top = `${35 + Math.random() * 50}%`;
      p.style.animationDuration = `${8 + Math.random() * 10}s`;
      p.style.animationDelay = `${Math.random() * -12}s`;
      p.style.opacity = `${0.12 + Math.random() * 0.35}`;
      container.appendChild(p);
    }
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="hero-fx-editorial" aria-hidden>
      <div className="hero-grain-editorial" />
      <div className="hero-ambient-glow-editorial hero-ambient-glow-editorial-1" />
      <div className="hero-ambient-glow-editorial hero-ambient-glow-editorial-2" />
      <div ref={particleFieldRef} className="hero-particle-field" />
    </div>
  );
}

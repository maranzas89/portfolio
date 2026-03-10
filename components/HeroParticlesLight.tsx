"use client";

import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 20;

export default function HeroParticlesLight() {
  const particleFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleFieldRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("span");
      p.className = "hero-particle-light";
      p.style.left = `${15 + Math.random() * 80}%`;
      p.style.top = `${30 + Math.random() * 55}%`;
      p.style.animationDuration = `${12 + Math.random() * 8}s`;
      p.style.animationDelay = `${Math.random() * -10}s`;
      p.style.opacity = `${0.15 + Math.random() * 0.25}`;
      container.appendChild(p);
    }
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div ref={particleFieldRef} className="absolute inset-0" />
    </div>
  );
}

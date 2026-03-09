"use client";

import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 54;

export default function HeroBackgroundFX() {
  const particleFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleFieldRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("span");
      p.className = "hero-particle" + (Math.random() > 0.72 ? " hero-particle-big" : "");
      p.style.left = `${20 + Math.random() * 76}%`;
      p.style.top = `${42 + Math.random() * 46}%`;
      p.style.animationDuration = `${4.8 + Math.random() * 5.4}s`;
      p.style.animationDelay = `${Math.random() * -8}s`;
      p.style.opacity = `${0.2 + Math.random() * 0.55}`;
      container.appendChild(p);
    }
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="hero-fx" aria-hidden>
      <div className="hero-grain" />
      <div className="hero-ambient-glow hero-ambient-glow-1" />
      <div className="hero-ambient-glow hero-ambient-glow-2" />
      <div className="hero-ambient-glow hero-ambient-glow-3" />
      <div className="hero-ribbon-intro" />
      <div className="hero-ribbon-idle hero-ribbon-idle-1" />
      <div className="hero-ribbon-idle hero-ribbon-idle-2" />
      <div className="hero-arc-lines">
        <div className="hero-arc hero-arc-a1" />
        <div className="hero-arc hero-arc-a2" />
      </div>
      <div ref={particleFieldRef} className="hero-particle-field" />
    </div>
  );
}

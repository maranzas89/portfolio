"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import WorkNav from "@/components/WorkNav";
import HeroGlow from "@/components/HeroGlow";
import CalbrightTabs from "../../../components/CalbrightTabs";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const hiddenTransform =
    direction === "up"
      ? "translate-y-12"
      : direction === "left"
        ? "-translate-x-12"
        : "translate-x-12";
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 blur-none"
          : `opacity-0 blur-[4px] ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function CalbrightOverviewPage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      <header className="hero-image bg-black text-white py-16 md:py-24 relative overflow-hidden border-b border-white/20">
        <HeroGlow />
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-24 relative z-10">
          <Reveal direction="up" delay={0}>
            <p className="text-sm text-white/60 font-semibold tracking-widest uppercase mb-2">
              Calbright College
            </p>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 max-w-4xl">
              Designing scalable systems for statewide digital education.
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-12">
              <div>
                <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Role</p>
                <p className="text-white/90 font-semibold">Senior Product Designer</p>
              </div>
              <div>
                <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Scope</p>
                <p className="text-white/90 font-semibold">Student + Staff Platforms</p>
              </div>
              <div>
                <p className="text-white/50 uppercase tracking-widest font-semibold mb-1">Focus</p>
                <p className="text-white/90 font-semibold">Systems, workflows, AI-assisted design</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <TrendingUp className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-bold text-3xl mb-1">8k+</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-semibold">Students supported</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <ShieldCheck className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-bold text-3xl mb-1">50+</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-semibold">Staff workflows</p>
              </div>
              <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <Zap className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-bold text-3xl mb-1">3x</h3>
                <p className="text-xs text-white/60 uppercase tracking-wide font-semibold">Faster iteration</p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <main className="bg-white">
        <div className="max-w-[1600px] mx-auto py-24 px-8 md:px-16 lg:px-24">
          <CalbrightTabs />
        </div>

        <div className="pb-20 pt-8 text-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-muted hover:text-text transition-colors text-sm font-semibold uppercase tracking-widest"
          >
            <span>←</span> Back to Selected Work
          </Link>
        </div>
      </main>
    </div>
  );
}

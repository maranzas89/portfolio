"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import CalbrightCaseStudyLayout from "@/components/CalbrightCaseStudyLayout";
import HeroGlow from "@/components/HeroGlow";

function ImagePreviewModal({
  open,
  onClose,
  src,
  caption,
}: {
  open: boolean;
  onClose: () => void;
  src?: string;
  caption?: string;
}) {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2"
    >
      <div className="relative w-[98vw] max-w-[1800px] max-h-[96vh] flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-white/80 text-4xl leading-none z-10"
          aria-label="Close"
        >
          ×
        </button>
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col w-full">
          {src ? (
            <img
              src={src}
              alt={caption ?? ""}
              className="w-full h-auto max-h-[88vh] object-contain"
            />
          ) : (
            <div className="w-full min-h-[50vh] max-h-[88vh] aspect-video flex items-center justify-center bg-[#E4E4E7] p-8">
              <span className="text-muted text-center">Image placeholder</span>
            </div>
          )}
          {caption && (
            <p className="text-sm text-muted font-medium p-4 text-center bg-white border-t border-line">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

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

export default function AIWorksCaseStudyPage() {
  const [preview, setPreview] = useState<{
    open: boolean;
    src?: string;
    caption?: string;
  }>({ open: false });

  const openPreview = useCallback(
    (opts: { src?: string; caption?: string }) =>
      setPreview({ open: true, ...opts }),
    []
  );
  const closePreview = useCallback(() => setPreview({ open: false }), []);

  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <ImagePreviewModal
        open={preview.open}
        onClose={closePreview}
        src={preview.src}
        caption={preview.caption}
      />
      <CalbrightCaseStudyLayout>
        <header className="hero-image bg-black text-white py-16 md:py-20 relative overflow-hidden border-b border-white/20">
          <HeroGlow />
          <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-20 relative z-10">
            <p className="text-sm text-white/60 font-medium tracking-widest uppercase mb-2">
              Calbright · AI Works
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-6 max-w-3xl">
              AI-assisted design for faster iteration
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl font-semibold text-white mb-1">3x</p>
                <p className="text-xs text-white/60 uppercase tracking-widest font-medium">
                  Faster design iteration
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl font-semibold text-white mb-1">100+</p>
                <p className="text-xs text-white/60 uppercase tracking-widest font-medium">
                  Components with AI prompts
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-white">
          <div className="max-w-[1600px] mx-auto py-24 px-8 md:px-16 lg:px-24 space-y-32">
            <section>
              <Reveal direction="up">
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">01. Opportunity</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                  Speed up design without losing quality
                </h3>
                <p className="text-muted text-base md:text-lg font-medium max-w-3xl">
                  Traditional design cycles were slow. AI tools offered a way to prototype faster, generate components, and synthesize research—when structured correctly.
                </p>
              </Reveal>
            </section>

            <section>
              <Reveal direction="up">
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">02. My Role</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-text mb-6">
                  Introducing AI into the design process
                </h3>
                <p className="text-muted text-base md:text-lg font-medium max-w-3xl">
                  Designed prompts, templates, and workflows for prototyping, component generation, and research synthesis. Trained the team on effective AI collaboration.
                </p>
              </Reveal>
            </section>

            <div className="pt-2 pb-20 text-center">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-muted hover:text-text transition-colors text-sm font-medium uppercase tracking-widest"
              >
                <span>←</span> Back to Calbright
              </Link>
            </div>
          </div>
        </main>
      </CalbrightCaseStudyLayout>
    </div>
  );
}

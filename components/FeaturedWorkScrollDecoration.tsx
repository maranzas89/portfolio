"use client";

import React, { useEffect, useState } from "react";

interface FeaturedWorkScrollDecorationProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export function FeaturedWorkScrollDecoration({
  sectionRef,
}: FeaturedWorkScrollDecorationProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      if (sectionTop < viewHeight && sectionTop + sectionHeight > 0) {
        const visibleStart = Math.max(0, -sectionTop);
        const p = Math.min(1, visibleStart / (sectionHeight * 0.4));
        setProgress(p);
      } else {
        setProgress(sectionTop < 0 ? 1 : 0);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionRef]);

  return (
    <div
      className="pointer-events-none fixed left-8 top-1/2 z-0 hidden -translate-y-1/2 lg:block"
      aria-hidden
    >
      <div className="relative h-48 w-px bg-line/50">
        <div
          className="absolute left-0 top-0 w-full bg-blue-600/60 transition-all duration-300"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}

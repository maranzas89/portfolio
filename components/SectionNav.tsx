"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import type { SectionItem } from "@/lib/section-nav-config";

const HERO_HEIGHT = 520;
const FADE_START = 200;

export default function SectionNav({ sections }: { sections: SectionItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [opacity, setOpacity] = useState(0);
  const scrollTargetRef = useRef<string | null>(null);

  useEffect(() => {
    const threshold = 180;
    const updateActive = () => {
      if (scrollTargetRef.current) {
        const el = document.getElementById(scrollTargetRef.current);
        if (el && el.getBoundingClientRect().top <= threshold) {
          scrollTargetRef.current = null;
        } else {
          setActiveId(scrollTargetRef.current);
          return;
        }
      }
      let current: string | null = null;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = sections[i].id;
          break;
        }
      }
      setActiveId(current);
    };
    const updateOpacity = () => {
      const y = window.scrollY;
      if (y < FADE_START) {
        setOpacity(0);
      } else if (y >= HERO_HEIGHT) {
        setOpacity(1);
      } else {
        setOpacity((y - FADE_START) / (HERO_HEIGHT - FADE_START));
      }
    };
    updateActive();
    updateOpacity();
    const handleScroll = () => {
      updateActive();
      updateOpacity();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = useCallback((id: string) => {
    scrollTargetRef.current = id;
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (sections.length === 0) return null;

  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5 py-4 transition-opacity duration-300 pointer-events-none"
      style={{ opacity }}
      aria-label="Section navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <div key={id} className="group/dot relative flex items-center justify-end pointer-events-auto">
            <span
              className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 transition-opacity duration-150 group-hover/dot:opacity-100 whitespace-nowrap rounded-lg bg-gray-800 px-3 py-1.5 text-xs font-medium text-white shadow-lg"
            >
              {label}
            </span>
            <button
              type="button"
              onClick={() => scrollToSection(id)}
              className={`h-3 w-3 shrink-0 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none ${
                isActive ? "bg-blue-500" : "bg-gray-300 hover:bg-blue-500"
              }`}
              aria-label={`Scroll to ${label}`}
            />
          </div>
        );
      })}
    </div>
  );
}

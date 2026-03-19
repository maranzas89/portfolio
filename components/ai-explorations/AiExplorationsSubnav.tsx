"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const SUBNAV_ITEMS = [
  { id: "ai-product-experiments", label: "Prototype Showcase" },
  { id: "ai-design-workflow", label: "Design Methodology" },
  { id: "ai-capability-benchmark", label: "Capability Benchmark" },
];

const THRESHOLD = 180;

export default function AiExplorationsSubnav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const scrollTargetRef = React.useRef<string | null>(null);

  const updateActive = useCallback(() => {
    if (scrollTargetRef.current) {
      const el = document.getElementById(scrollTargetRef.current);
      if (el && el.getBoundingClientRect().top <= THRESHOLD) {
        scrollTargetRef.current = null;
      } else {
        setActiveId(scrollTargetRef.current);
        return;
      }
    }
    let current: string | null = null;
    for (let i = SUBNAV_ITEMS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SUBNAV_ITEMS[i].id);
      if (el && el.getBoundingClientRect().top <= THRESHOLD) {
        current = SUBNAV_ITEMS[i].id;
        break;
      }
    }
    setActiveId(current);
  }, []);

  useEffect(() => {
    // On mount, check URL hash and pre-set active state
    const hash = window.location.hash.replace("#", "");
    if (hash && SUBNAV_ITEMS.some((item) => item.id === hash)) {
      scrollTargetRef.current = hash;
      setActiveId(hash);
    }
    updateActive();
    const handleScroll = () => {
      updateActive();
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActive]);

  const scrollToSection = useCallback((id: string) => {
    scrollTargetRef.current = id;
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div
      role="navigation"
      aria-label="AI Explorations section navigation"
      className={`hidden md:flex transition-all duration-300 ${
        scrolled
          ? "bg-gray-100/90 md:backdrop-blur-xl md:backdrop-saturate-150"
          : "bg-gray-100"
      }`}
    >
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 md:px-16 lg:px-24 py-3 md:py-4 flex justify-between items-center">
        <nav aria-label="Breadcrumb" className="text-sm">
          <Link
            href="/ai-explorations"
            className="text-text hover:text-blue-600 transition-colors font-semibold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Explorations
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-0">
          {SUBNAV_ITEMS.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <React.Fragment key={item.id}>
                {index > 0 && (
                  <span
                    className="h-4 w-px bg-gray-300 mx-4 shrink-0"
                    aria-hidden
                  />
                )}
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-200 focus:outline-none cursor-pointer ${
                    isActive
                      ? "text-blue-600"
                      : "text-muted hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

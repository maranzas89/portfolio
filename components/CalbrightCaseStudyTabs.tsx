"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { id: "student-portal", label: "Student Portal Redesign", href: "/work/calbright/student-portal" },
  { id: "staff-portal", label: "Staff Portal 0→1", href: "/work/calbright/staff-portal" },
  { id: "didi-eagleeye", label: "DiDi EagleEye", href: "/work/didi" },
];

export default function CalbrightCaseStudyTabs() {
  const pathname = usePathname();
  const activeTab = TABS.find((t) => pathname === t.href);
  const activeId = activeTab?.id ?? null;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="tablist"
      aria-label="Calbright case study tabs"
      className={`hidden md:flex flex-wrap gap-2 transition-all duration-300 ${
        scrolled
          ? "bg-gray-100/90 backdrop-blur-xl backdrop-saturate-150"
          : "bg-gray-100"
      }`}
    >
      <div className="max-w-[1600px] mx-auto w-full px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <nav aria-label="Breadcrumb" className="text-sm">
          <Link href="/#work" className="text-muted hover:text-blue-600 transition-colors font-semibold">
            Work
          </Link>
          {activeTab && (
            <>
              <span className="text-muted mx-2">/</span>
              <span className="text-text font-semibold">{activeTab.label}</span>
            </>
          )}
        </nav>
        <div className="flex items-center justify-end gap-0">
          {TABS.map((tab, index) => {
            const isActive = activeId !== null && activeId === tab.id;
            return (
              <React.Fragment key={tab.id}>
                {index > 0 && (
                  <span
                    className="h-4 w-px bg-gray-300 mx-4 shrink-0"
                    aria-hidden
                  />
                )}
                {isActive ? (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={true}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-sm font-semibold uppercase tracking-widest text-blue-600 transition-colors duration-200 focus:outline-none cursor-pointer"
                  >
                    {tab.label}
                  </button>
                ) : (
                  <Link
                    href={tab.href}
                    role="tab"
                    aria-selected={false}
                    className="text-sm font-semibold uppercase tracking-widest transition-colors duration-200 focus:outline-none text-muted hover:text-blue-600"
                  >
                    {tab.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

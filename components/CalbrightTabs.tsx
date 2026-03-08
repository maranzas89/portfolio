"use client";

import React, { useState } from "react";
import Link from "next/link";

export const CALBRIGHT_TABS = [
  { id: "student-portal", label: "Student Portal Redesign", href: "/work/calbright/student-portal" },
  { id: "staff-portal", label: "Staff Portal 0→1", href: "/work/calbright/staff-portal" },
  { id: "ai-works", label: "AI Works", href: "/work/calbright/ai-works" },
  { id: "didi-eagleeye", label: "DiDi EagleEye", href: "/work/didi" },
];

export default function CalbrightTabs({ linksOnly = false }: { linksOnly?: boolean }) {
  const [activeId, setActiveId] = useState("student-portal");

  if (linksOnly) {
    return (
      <nav
        role="navigation"
        aria-label="Calbright case study tabs"
        className="flex flex-wrap items-center gap-0"
      >
        {CALBRIGHT_TABS.map((tab, index) => (
          <React.Fragment key={tab.id}>
            {index > 0 && (
              <span className="h-4 w-px bg-line mx-4 shrink-0" aria-hidden />
            )}
            <Link
              href={tab.href}
              className="text-sm font-semibold uppercase tracking-widest transition-colors duration-200 focus:outline-none text-muted hover:text-blue-600"
            >
              {tab.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    );
  }

  return (
    <div
      role="tablist"
      aria-label="Calbright case study tabs"
      className="flex flex-wrap gap-2"
    >
      <div className="flex items-center gap-0">
        {CALBRIGHT_TABS.map((tab, index) => {
          const isActive = activeId === tab.id;
          return (
            <React.Fragment key={tab.id}>
              {index > 0 && (
                <span className="h-4 w-px bg-line mx-4 shrink-0" aria-hidden />
              )}
              {isActive ? (
                <button
                  type="button"
                  role="tab"
                  aria-selected={true}
                  onClick={() => setActiveId(tab.id)}
                  className="text-sm font-semibold uppercase tracking-widest text-blue-600 transition-colors duration-200 focus:outline-none cursor-pointer"
                >
                  {tab.label}
                </button>
              ) : (
                <Link
                  href={tab.href}
                  role="tab"
                  aria-selected={false}
                  onClick={() => setActiveId(tab.id)}
                  className="text-sm font-semibold uppercase tracking-widest transition-colors duration-200 focus:outline-none text-muted hover:text-blue-600"
                >
                  {tab.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="w-full mt-8 flex flex-wrap gap-4">
        {CALBRIGHT_TABS.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeId !== tab.id}
            className="w-full"
          >
            {activeId === tab.id && (
              <div className="p-8 bg-card border border-line rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">{tab.label}</h3>
                <p className="text-muted text-sm mb-4">
                  {tab.id === "student-portal" && "Student-facing platform redesign for statewide learners."}
                  {tab.id === "staff-portal" && "0→1 staff platform for internal workflows."}
                  {tab.id === "ai-works" && "AI-assisted design explorations and prompt library."}
                </p>
                <Link
                  href={tab.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Read Full Case Study
                  <span aria-hidden>→</span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

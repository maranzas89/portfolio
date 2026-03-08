"use client";

import React from "react";

/**
 * CPL Decision Lifecycle - A closed-loop process showing how student requests
 * move through review, reporting, and program evolution.
 */
export default function CPLDecisionLifecycleDiagram() {
  const steps = [
    { label: "Student Request", desc: "Submission" },
    { label: "Staff Review", desc: "Validation" },
    { label: "Reporting", desc: "Visibility" },
    { label: "Program Evolution", desc: "Improvement" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative flex flex-wrap justify-center items-center gap-4 md:gap-6 p-6 md:p-10 rounded-2xl border border-slate-200 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/50">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-600 shadow-sm min-w-[140px]">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {step.desc}
              </span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="hidden md:block w-6 h-0.5 bg-slate-300 dark:bg-slate-600 rounded-full"
                aria-hidden
              />
            )}
          </React.Fragment>
        ))}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500"
          aria-hidden
        >
          <span>↻</span> Closed loop
        </div>
      </div>
    </div>
  );
}

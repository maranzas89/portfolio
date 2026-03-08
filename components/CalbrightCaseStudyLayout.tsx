"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import CalbrightCaseStudyTabs from "@/components/CalbrightCaseStudyTabs";

export default function CalbrightCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <WorkNav embed />
        <CalbrightCaseStudyTabs />
      </header>
      <div className="pt-32">{children}</div>
    </>
  );
}

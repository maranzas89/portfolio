"use client";

import React from "react";
import { usePathname } from "next/navigation";
import WorkNav from "@/components/WorkNav";
import CalbrightCaseStudyTabs from "@/components/CalbrightCaseStudyTabs";
import SectionNav from "@/components/SectionNav";
import { STUDENT_PORTAL_SECTIONS, STAFF_PORTAL_SECTIONS } from "@/lib/section-nav-config";

export default function CalbrightCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const sections =
    pathname === "/work/calbright/student-portal"
      ? STUDENT_PORTAL_SECTIONS
      : pathname === "/work/calbright/staff-portal"
        ? STAFF_PORTAL_SECTIONS
        : [];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <WorkNav embed />
        <CalbrightCaseStudyTabs />
      </header>
      {sections.length > 0 && <SectionNav sections={sections} />}
      <div className="pt-16 md:pt-32">{children}</div>
    </>
  );
}

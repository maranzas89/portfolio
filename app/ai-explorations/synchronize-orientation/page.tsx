"use client";

import React from "react";
import Link from "next/link";
import OrientationStudentView from "@/components/ai-explorations/OrientationStudentView";

export default function SynchronizeOrientationPage() {
  const goToStaffLink = (
    <Link
      href="/ai-explorations/synchronize-orientation/staff"
      className="w-64 rounded-lg border border-line bg-white px-4 py-2 text-center text-sm font-semibold text-text shadow-sm transition hover:bg-muted/30"
    >
      Go to staff portal view
    </Link>
  );

  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <div className="absolute left-4 top-4 z-10 hidden md:block">{goToStaffLink}</div>
      <OrientationStudentView mobileHeaderAction={goToStaffLink} />
    </div>
  );
}

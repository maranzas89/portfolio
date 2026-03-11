"use client";

import React from "react";
import Link from "next/link";
import OrientationStaffView from "@/components/ai-explorations/OrientationStaffView";

export default function SynchronizeOrientationStaffPage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <div className="fixed left-4 top-4 z-10 flex flex-col gap-3">
        <Link
          href="/ai-explorations/synchronize-orientation"
          className="w-64 rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-text shadow-sm transition hover:bg-muted/30 text-center"
        >
          Go to student portal view
        </Link>
        <div id="staff-reset-buttons" className="flex flex-col gap-3" />
      </div>
      <OrientationStaffView />
    </div>
  );
}

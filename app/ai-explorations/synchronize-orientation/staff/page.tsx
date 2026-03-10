"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageFooter from "@/components/PageFooter";
import OrientationStaffView from "@/components/ai-explorations/OrientationStaffView";
import Link from "next/link";

export default function SynchronizeOrientationStaffPage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-4">
          <Link
            href="/ai-explorations/synchronize-orientation"
            className="text-sm font-semibold text-muted hover:text-blue-600 transition-colors"
          >
            ← Back to Student View
          </Link>
        </div>
      </div>

      <OrientationStaffView />

      <div className="border-t border-gray-200 bg-white py-6">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <Link
            href="/ai-explorations/synchronize-orientation"
            className="text-sm font-semibold text-muted hover:text-blue-600 transition-colors"
          >
            ← Back to Student View
          </Link>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}

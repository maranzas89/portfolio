"use client";

import React from "react";
import WorkNav from "@/components/WorkNav";
import PageFooter from "@/components/PageFooter";
import OrientationStudentView from "@/components/ai-explorations/OrientationStudentView";
import Link from "next/link";

export default function SynchronizeOrientationPage() {
  return (
    <div className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <WorkNav />

      {/* Breadcrumb / back link */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-4">
          <Link
            href="/ai-explorations"
            className="text-sm font-semibold text-muted hover:text-blue-600 transition-colors"
          >
            ← Back to AI Explorations
          </Link>
        </div>
      </div>

      <OrientationStudentView />

      <div className="border-t border-gray-200 bg-white py-6">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/ai-explorations"
              className="text-sm font-semibold text-muted hover:text-blue-600 transition-colors"
            >
              ← Back to AI Explorations
            </Link>
            <Link
              href="/ai-explorations/synchronize-orientation/staff"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Staff view →
            </Link>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}

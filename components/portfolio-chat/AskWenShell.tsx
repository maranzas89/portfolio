"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Compass } from "lucide-react";
import AskWenPanel from "./AskWenPanel";

export default function AskWenShell({
  currentProject,
}: {
  currentProject?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Fixed floating trigger — bottom-right corner, hidden on mobile when panel is open */}
      {mounted &&
        createPortal(
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 rounded-full bg-[rgba(10,14,24,0.9)] border border-white/[0.08] px-5 py-3 text-sm font-semibold text-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl cursor-pointer transition-all duration-300 hover:bg-[rgba(10,14,24,0.95)] hover:text-white hover:shadow-[0_6px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08)] hover:-translate-y-0.5 active:translate-y-0 ${
              isOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
            }`}
            aria-label="Explore Wen's Projects"
          >
            <Compass className="h-4 w-4 text-blue-400" strokeWidth={2.5} />
            <span className="hidden sm:inline">Explore Wen&apos;s Projects</span>
            <span className="sm:hidden">Explore</span>
          </button>,
          document.body
        )}

      {/* Panel (portaled to body) */}
      {mounted &&
        createPortal(
          <AskWenPanel
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            currentProject={currentProject}
          />,
          document.body
        )}
    </>
  );
}

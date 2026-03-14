"use client";

import React from "react";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

const RESUME_HREF = "/FJ/WenLiu-Resume.pdf";

type ResumeLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function ResumeLink({ children, className = "" }: ResumeLinkProps) {
  const isMobile = useIsMobile();

  return (
    <a
      href={RESUME_HREF}
      download={isMobile ? undefined : "WenLiu-Resume.pdf"}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

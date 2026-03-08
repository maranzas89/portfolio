"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function WorkNav({ embed = false }: { embed?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "nav-link-underline";
  const workActive =
    "nav-link-underline active text-text cursor-pointer";

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        embed ? "relative" : "fixed"
      } ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl md:text-2xl font-semibold tracking-tight uppercase text-text"
        >
          Wen Liu
        </Link>
        <div className="hidden md:flex items-center gap-12 text-base font-semibold uppercase tracking-widest text-muted">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={workActive}
          >
            Work
          </Link>
          <Link href="/#approach" className={linkBase}>
            Approach
          </Link>
          <Link href="/#about" className={linkBase}>
            About
          </Link>
          <Link
            href="/WenLiu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={linkBase}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

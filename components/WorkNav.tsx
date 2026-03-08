"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav-config";

export default function WorkNav({ embed = false }: { embed?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = "nav-link-underline";
  const linkActive = "nav-link-underline active text-text cursor-pointer";

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
          className="text-xl md:text-2xl font-semibold tracking-tight uppercase text-text transition-colors hover:text-blue-600"
        >
          Wen Liu
        </Link>
        <div className="hidden md:flex items-center gap-12 text-base font-semibold uppercase tracking-widest text-muted">
          {NAV_LINKS.map(({ href, label }) => {
            const isWork = href === "/#work";
            const isActive =
              (isWork && pathname === "/") ||
              (href.startsWith("/") && href !== "/#work" && pathname === href);
            return (
              <Link
                key={href}
                href={href}
                onClick={
                  isWork && pathname === "/"
                    ? (e) => {
                        e.preventDefault();
                        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
                className={isActive ? linkActive : linkBase}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

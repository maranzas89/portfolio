"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WORK_SUB_LINKS } from "@/lib/nav-config";

export default function WorkNav({ embed = false }: { embed?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const linkBase = "nav-link-underline";
  const linkActive = "nav-link-underline active text-text cursor-pointer";

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-300 w-full min-w-0 ${
        embed ? "relative" : "fixed"
      } ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1600px] mx-auto w-full min-w-0 px-4 py-4 sm:px-6 sm:py-5 md:px-16 lg:px-24 md:py-8 flex justify-between items-center gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight uppercase text-text transition-colors hover:text-blue-600 shrink-0"
        >
          Wen Liu
        </Link>
        {/* Desktop nav - hidden below 768px */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm lg:text-base font-semibold uppercase tracking-widest text-muted shrink-0">
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
        {/* Mobile hamburger - visible below 768px */}
        <button
          type="button"
          className="flex md:hidden p-2 -mr-2 text-text hover:text-muted transition-colors shrink-0 items-center justify-center"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile menu dropdown - visible below 768px when open */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="max-w-[1600px] mx-auto w-full px-4 py-5 flex flex-col gap-4">
            <div>
              <a
                href="/#work"
                className={`block font-semibold uppercase tracking-widest text-sm ${
                  pathname === "/" ? "text-text " + linkActive : "text-muted " + linkBase
                }`}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Work
              </a>
              <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-gray-200 pl-4">
                {WORK_SUB_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === href ? "text-text" : "text-muted hover:text-text"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/ai-explorations"
              className={`font-semibold uppercase tracking-widest text-sm ${
                pathname === "/ai-explorations" ? linkActive : linkBase + " text-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Explorations
            </Link>
            <Link
              href="/experience"
              className={`font-semibold uppercase tracking-widest text-sm ${
                pathname === "/experience" ? linkActive : linkBase + " text-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/kind-words"
              className={`font-semibold uppercase tracking-widest text-sm ${
                pathname === "/kind-words" ? linkActive : linkBase + " text-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Kind Words
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

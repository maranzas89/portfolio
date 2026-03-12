"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WORK_SUB_LINKS } from "@/lib/nav-config";
import AskWenShell from "@/components/portfolio-chat/AskWenShell";

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

  const linkBase = "nav-link-underline hover:text-gray-700 transition-colors";
  const linkActive = "nav-link-underline active text-text cursor-pointer hover:text-gray-700 transition-colors";

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 md:border-b md:border-gray-200 transition-all duration-300 w-full min-w-0 ${
        embed ? "relative" : "fixed"
      }       ${
        scrolled
          ? "bg-white/70 md:backdrop-blur-xl md:backdrop-saturate-150"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1600px] mx-auto w-full min-w-0 px-4 py-4 sm:px-6 sm:py-5 md:px-16 lg:px-24 md:py-8 flex justify-between items-center gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight uppercase text-text transition-colors hover:text-blue-600 shrink-0"
          >
            Wen Liu
          </Link>
          <AskWenShell />
        </div>
        {/* Desktop nav - hidden below 768px */}
        <div className="font-accent hidden md:flex items-center gap-8 lg:gap-12 text-sm lg:text-base font-semibold uppercase tracking-widest text-muted shrink-0">
          {NAV_LINKS.map(({ href, label }) => {
            const isWork = href === "/#work";
            const isActive =
              (isWork && pathname.startsWith("/work/")) ||
              (!isWork && href.startsWith("/") && pathname === href);
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
      {/* Mobile menu - full-page overlay when open (md:hidden) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-[60] bg-white">
          <button
            type="button"
            className="absolute top-4 right-4 p-2 -m-2 text-text hover:text-muted transition-colors z-10"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="h-full overflow-y-auto flex flex-col pt-[calc(1rem+1.75rem+0.625rem)] px-6 gap-8">
            <div className="flex flex-col gap-8">
              <a
                href="/#work"
                className={`font-accent block font-semibold uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                  pathname.startsWith("/work/") ? "text-text " + linkActive : "text-muted " + linkBase
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
              <div className="flex flex-col gap-8 ml-4 border-l-2 border-gray-200 pl-5">
                {WORK_SUB_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-base font-medium transition-colors ${
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
              className={`font-accent font-semibold uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                pathname === "/ai-explorations" ? linkActive : linkBase + " text-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              AI PROJECTS
            </Link>
            <Link
              href="/experience"
              className={`font-accent font-semibold uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                pathname === "/experience" ? linkActive : linkBase + " text-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/kind-words"
              className={`font-accent font-semibold uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
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

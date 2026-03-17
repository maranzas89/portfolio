"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WORK_SUB_LINKS, AI_SUB_LINKS } from "@/lib/nav-config";
import AskWenShell from "@/components/portfolio-chat/AskWenShell";

const PATHNAME_PROJECT_MAP: Record<string, string> = {
  "/work/calbright/student-portal": "calbright-student-portal",
  "/work/calbright/staff-portal": "staff-portal",
  "/work/calbright": "calbright-student-portal",
  "/work/didi": "didi",
  "/ai-explorations": "ai-explorations",
};

function resolveCurrentProject(pathname: string): string | undefined {
  for (const [prefix, slug] of Object.entries(PATHNAME_PROJECT_MAP)) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return slug;
    }
  }
  return undefined;
}

export default function WorkNav({ embed = false }: { embed?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAiSection, setActiveAiSection] = useState<string | null>(null);
  const pathname = usePathname();
  const currentProject = resolveCurrentProject(pathname);

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
        {/* Mobile hamburger - visible below 768px, placed first (left) on mobile */}
        <button
          type="button"
          className="flex md:hidden p-2 -ml-2 text-text hover:text-muted transition-colors shrink-0 items-center justify-center order-first md:order-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight uppercase text-text transition-colors hover:text-blue-600 shrink-0"
          >
            Wen Liu
          </Link>
          <AskWenShell currentProject={currentProject} />
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
                    : href === pathname
                      ? (e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
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
            <Link
              href="/"
              className={`font-accent uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                pathname === "/" ? "text-text font-bold" : "text-muted font-semibold"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="flex flex-col gap-8">
              <a
                href="/#work"
                className={`font-accent block uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                  pathname.startsWith("/work/") ? "text-text font-bold" : "text-muted font-semibold"
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
                    className={`text-base transition-colors ${
                      pathname === href ? "text-text font-bold" : "text-muted font-medium hover:text-text"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <a
                href="/ai-explorations"
                className={`font-accent block uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                  pathname.startsWith("/ai-explorations") ? "text-text font-bold" : "text-muted font-semibold"
                }`}
                onClick={(e) => {
                  if (pathname === "/ai-explorations") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                AI PROJECTS
              </a>
              <div className="flex flex-col gap-8 ml-4 border-l-2 border-gray-200 pl-5">
                {AI_SUB_LINKS.map(({ href, label }) => {
                  const anchor = href.split("#")[1];
                  const isActive = pathname === "/ai-explorations" && activeAiSection === anchor;
                  return (
                    <a
                      key={href}
                      href={href}
                      className={`text-base transition-colors ${
                        isActive ? "text-text font-bold" : "text-muted font-medium hover:text-text"
                      }`}
                      onClick={(e) => {
                        if (pathname === "/ai-explorations" && anchor) {
                          e.preventDefault();
                          document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
                        }
                        setActiveAiSection(anchor || null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
            <Link
              href="/experience"
              className={`font-accent uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                pathname === "/experience" ? "text-text font-bold" : "text-muted font-semibold"
              }`}
              onClick={(e) => {
                if (pathname === "/experience") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setMobileMenuOpen(false);
              }}
            >
              About Me
            </Link>
            <Link
              href="/kind-words"
              className={`font-accent uppercase tracking-widest text-base hover:text-gray-700 transition-colors ${
                pathname === "/kind-words" ? "text-text font-bold" : "text-muted font-semibold"
              }`}
              onClick={(e) => {
                if (pathname === "/kind-words") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setMobileMenuOpen(false);
              }}
            >
              Kind Words
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

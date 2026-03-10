"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBackgroundFXEditorial from "@/components/HeroBackgroundFXEditorial";
import HeroBackgroundFXAI from "@/components/HeroBackgroundFXAI";
import HeroCube from "@/components/HeroCube";
import { CONTENT_CONTAINER_CLASS } from "@/lib/layout";
import { Download } from "lucide-react";
import { ResumeLink } from "@/components/ResumeLink";

type CtaItem = { label: string; href: string; download?: boolean | string };
type PageHeroProps = {
  eyebrow: string;
  headline: string;
  paragraph: string;
  avatar?: string;
  primaryCta?: CtaItem;
  secondaryCta?: CtaItem;
  paragraphVariant?: "default" | "compact";
  className?: string;
  /** "ai-explorations" = holographic bg; default = editorial */
  backgroundVariant?: "default" | "ai-explorations";
};

const AI_HERO_BACKGROUND =
  "radial-gradient(circle at 72% 38%, rgba(79, 70, 229, 0.22), transparent 22%), radial-gradient(circle at 63% 58%, rgba(59, 130, 246, 0.18), transparent 26%), radial-gradient(circle at 20% 82%, rgba(76, 29, 149, 0.24), transparent 34%), linear-gradient(135deg, #020617 0%, #08112b 55%, #040b1f 100%)";

const DEFAULT_HERO_BACKGROUND =
  "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.16), transparent 26%), radial-gradient(circle at 68% 35%, rgba(60, 111, 255, 0.08), transparent 22%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)";

export default function PageHero({
  eyebrow,
  headline,
  paragraph,
  avatar,
  primaryCta,
  secondaryCta,
  paragraphVariant = "default",
  className = "",
  backgroundVariant = "default",
}: PageHeroProps) {
  const hasCtas = primaryCta || secondaryCta;
  const paragraphClass =
    paragraphVariant === "compact"
      ? "text-base md:text-lg text-white/70 font-medium leading-relaxed"
      : "text-lg md:text-xl text-white/80 font-medium leading-relaxed";

  return (
    <header
      className={`relative overflow-hidden text-white border-b border-white/20 min-h-[580px] md:min-h-[640px] flex flex-col ${className}`}
      style={{
        background: backgroundVariant === "ai-explorations" ? AI_HERO_BACKGROUND : DEFAULT_HERO_BACKGROUND,
      }}
    >
      {backgroundVariant === "ai-explorations" ? <HeroBackgroundFXAI /> : <HeroBackgroundFXEditorial />}
      <div className={`hero-content-entrance relative z-10 flex-1 flex flex-col justify-center ${CONTENT_CONTAINER_CLASS} pt-32 pb-20 md:pt-40 md:pb-24`}>
        <div
          className={
            backgroundVariant === "ai-explorations"
              ? "flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start lg:items-center"
              : "flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center"
          }
        >
          <div className={backgroundVariant === "ai-explorations" ? "flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center w-full lg:contents" : "contents"}>
            {avatar && (
              <div className="shrink-0">
                <Image
                  src={avatar}
                  alt=""
                  width={240}
                  height={240}
                  className="rounded-2xl object-cover aspect-square w-48 h-48 md:w-60 md:h-60"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
            <p className="font-accent text-sm font-semibold tracking-widest text-white/60 uppercase mb-4">{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white mb-6">
              {headline}
            </h1>
            <p className={`${paragraphClass} ${hasCtas ? "mb-0" : ""}`}>{paragraph}</p>
            {hasCtas && (
              <div className="flex flex-wrap gap-4 mt-8">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-white/90"
                  >
                    {primaryCta.label}
                    <span aria-hidden>→</span>
                  </Link>
                )}
                {secondaryCta && (secondaryCta.href?.includes("WenLiu_Resume") ? (
                  <ResumeLink className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/70">
                    <Download size={18} strokeWidth={2} />
                    {secondaryCta.label}
                  </ResumeLink>
                ) : (
                  <a
                    href={secondaryCta.href}
                    download={secondaryCta.download === true ? "WenLiu_Resume.pdf" : secondaryCta.download || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/70"
                  >
                    <Download size={18} strokeWidth={2} />
                    {secondaryCta.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          </div>
          {backgroundVariant === "ai-explorations" && (
            <div className="relative z-20 flex items-center justify-center w-full lg:w-auto order-last lg:order-none min-h-[320px] lg:min-h-0">
              <HeroCube />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

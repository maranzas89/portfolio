"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroBackgroundFXEditorial from "@/components/HeroBackgroundFXEditorial";
import { CONTENT_CONTAINER_CLASS } from "@/lib/layout";
import { Download } from "lucide-react";

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
};

export default function PageHero({
  eyebrow,
  headline,
  paragraph,
  avatar,
  primaryCta,
  secondaryCta,
  paragraphVariant = "default",
  className = "",
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
        background:
          "radial-gradient(circle at 32% 12%, rgba(50, 95, 185, 0.16), transparent 26%), radial-gradient(circle at 68% 35%, rgba(60, 111, 255, 0.08), transparent 22%), linear-gradient(90deg, #020611 0%, #031128 18%, #0a1b3c 52%, #051634 76%, #031126 100%)",
      }}
    >
      <HeroBackgroundFXEditorial />
      <div className={`hero-content-entrance relative z-10 flex-1 flex flex-col justify-center ${CONTENT_CONTAINER_CLASS} pt-32 pb-20 md:pt-40 md:pb-24`}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
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
                {secondaryCta && (
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
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

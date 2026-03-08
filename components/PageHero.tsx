"use client";

import React from "react";
import HeroGlow from "@/components/HeroGlow";

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  paragraph: string;
  className?: string;
};

export default function PageHero({ eyebrow, headline, paragraph, className = "" }: PageHeroProps) {
  return (
    <header
      className={`relative overflow-hidden bg-black text-white border-b border-white/20 min-h-[540px] md:min-h-[580px] flex flex-col justify-center ${className}`}
    >
      <HeroGlow />
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 pt-24 pb-16 md:pt-28 md:pb-20">
        <p className="text-sm font-semibold tracking-widest text-white/60 uppercase mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white mb-6 max-w-4xl">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
          {paragraph}
        </p>
      </div>
    </header>
  );
}

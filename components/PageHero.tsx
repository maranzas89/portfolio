"use client";

import React from "react";
import Image from "next/image";
import HeroGlow from "@/components/HeroGlow";
import { CONTENT_CONTAINER_CLASS } from "@/lib/layout";

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  paragraph: string;
  avatar?: string;
  className?: string;
};

export default function PageHero({ eyebrow, headline, paragraph, avatar, className = "" }: PageHeroProps) {
  return (
    <header
      className={`relative overflow-hidden bg-black text-white border-b border-white/20 min-h-[540px] md:min-h-[580px] flex flex-col ${className}`}
    >
      <HeroGlow />
      <div className={`relative z-10 flex-1 flex flex-col justify-center ${CONTENT_CONTAINER_CLASS} pt-24 pb-16 md:pt-28 md:pb-20`}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start md:items-center">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white mb-6 max-w-5xl">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium max-w-3xl leading-relaxed">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

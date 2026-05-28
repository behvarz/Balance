"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

type HeroOverlayTextProps = {
  progress: number;
  isReady: boolean;
};

function getOpacity(progress: number, start: number, end: number): number {
  const fadeZone = 0.05;

  if (progress < start - fadeZone || progress > end + fadeZone) {
    return 0;
  }

  if (progress >= start && progress <= end) {
    return 1;
  }

  if (progress < start) {
    return (progress - (start - fadeZone)) / fadeZone;
  }

  return 1 - (progress - end) / fadeZone;
}

export default function HeroOverlayText({
  progress,
  isReady,
}: HeroOverlayTextProps) {
  const { content } = useLanguage();
  const ctaOpacity =
    progress > 0.82 ? Math.min((progress - 0.82) / 0.08, 1) : 0;
  const hintOpacity =
    progress < 0.08 ? Math.max(0, Math.min((0.08 - progress) / 0.08, 1)) : 0;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col items-center text-center">
        {content.hero.moments.map((moment) => {
          const phaseOpacity = getOpacity(progress, moment.start, moment.end);
          const momentOpacity = isReady ? phaseOpacity * (1 - ctaOpacity) : 0;

          return (
            <p
              key={moment.text}
              className="absolute max-w-2xl font-body text-base leading-snug font-light tracking-[0.1em] text-[#F5F5F5] md:text-xl lg:text-2xl"
              style={{
                opacity: momentOpacity,
                transform: `translateY(calc(${(1 - phaseOpacity) * 14}px + 20vh))`,
              }}
            >
              {moment.text}
            </p>
          );
        })}

        <div
          className="absolute top-[68%] left-1/2 flex w-full max-w-[560px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 px-6"
          style={{
            opacity: ctaOpacity,
          }}
        >
          <span className="font-body text-[11px] tracking-[0.24em] text-[#1FA15A] uppercase md:text-xs">
            {content.hero.exploreCollection}
          </span>
          <Link
            href="#collection"
            className="pointer-events-auto inline-flex rounded-full border border-[rgba(255,255,255,0.2)] bg-[#24313B]/74 px-5 py-2.5 text-[10px] tracking-[0.24em] text-[#F2F6F8] uppercase hover:-translate-y-0.5 hover:border-[#28C279]/68 hover:bg-[#14945D]/22"
          >
            {content.actions.enter}
          </Link>
        </div>

        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            opacity: isReady ? hintOpacity : 0,
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 4.9rem)",
          }}
        >
          <span className="text-[11px] tracking-[0.18em] text-[#B8C2C8] uppercase">
            {content.hero.scrollHint}
          </span>
          <div className="relative h-9 w-5 rounded-full border border-[#28C279]/55">
            <span className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#28C279] animate-[scrollDot_1.4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}

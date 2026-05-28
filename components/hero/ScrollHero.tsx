"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroOverlayText from "./HeroOverlayText";

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [fallbackMode, setFallbackMode] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const shouldUseFallback = prefersReducedMotion;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    setFallbackMode(shouldUseFallback);

    let revealTween: gsap.core.Tween | null = null;
    let scrubTween: gsap.core.Tween | null = null;
    let scrubTrigger: ScrollTrigger | null = null;

    const setupScrub = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0.1) {
        return;
      }

      video.pause();
      video.loop = false;
      video.currentTime = 0;

      const maxTime = Math.max(video.duration - 0.08, 0);
      const holdRatio = 1 / 7;
      const holdStart = 1 - holdRatio;
      const scrubState = { currentTime: 0 };
      const minDelta = isDesktop ? 1 / 28 : 1 / 42;
      const tweenDuration = isDesktop ? 0.16 : 0.2;

      const applyCurrentTime = () => {
        if (video.readyState < 1) {
          return;
        }

        const nextTime = Math.min(maxTime, Math.max(0, scrubState.currentTime));
        if (Math.abs(video.currentTime - nextTime) > minDelta) {
          video.currentTime = nextTime;
        }
      };

      scrubTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: isDesktop ? 0.95 : 0.7,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextProgress = gsap.utils.clamp(0, 1, self.progress);
          setProgress(nextProgress);

          const mappedProgress =
            nextProgress < holdStart ? nextProgress / holdStart : 1;
          const targetTime = mappedProgress * maxTime;

          if (!isDesktop) {
            scrubState.currentTime = targetTime;
            applyCurrentTime();
            return;
          }

          scrubTween?.kill();
          scrubTween = gsap.to(scrubState, {
            currentTime: targetTime,
            duration: tweenDuration,
            ease: "none",
            overwrite: true,
            onUpdate: applyCurrentTime,
          });
        },
      });

      revealTween = gsap.to(video, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLoadedMetadata = () => {
      setIsReady(true);
      video.preload = "auto";
      video.pause();
      video.loop = false;
      video.currentTime = 0;

      if (shouldUseFallback) {
        return;
      }

      setupScrub();
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      scrubTween?.kill();
      revealTween?.kill();
      scrubTrigger?.kill();
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative h-[560vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/balance-hero.mp4"
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,21,27,0.32)_0%,rgba(15,21,27,0.1)_32%,rgba(15,21,27,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(40,194,121,0.15)_0%,transparent_40%),radial-gradient(circle_at_82%_16%,rgba(227,168,88,0.12)_0%,transparent_36%)]" />
        <div className="grain-overlay" />

        <HeroOverlayText progress={fallbackMode ? 0 : progress} isReady={isReady} />
      </div>
    </section>
  );
}

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

    setFallbackMode(shouldUseFallback);

    let updateTween: gsap.core.Tween | null = null;
    let scrubTween: gsap.core.Tween | null = null;
    let scrubTrigger: ScrollTrigger | null = null;

    const setupScrub = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0.1) {
        return;
      }

      const state = {
        targetTime: 0,
        smoothTime: 0,
      };

      video.pause();
      video.loop = false;
      video.currentTime = 0;

      const maxTime = Math.max(video.duration - 0.06, 0);
      const holdRatio = 1 / 7;
      const holdStart = 1 - holdRatio;
      let seekQueued = false;

      const commitTime = () => {
        seekQueued = false;
        if (video.seeking || video.readyState < 2) {
          return;
        }

        const nextTime = Math.min(maxTime, Math.max(0, state.smoothTime));
        if (Math.abs(video.currentTime - nextTime) > 0.018) {
          video.currentTime = nextTime;
        }
      };

      scrubTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.7,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const nextProgress = gsap.utils.clamp(0, 1, self.progress);
          setProgress(nextProgress);

          const mappedProgress =
            nextProgress < holdStart ? nextProgress / holdStart : 1;
          state.targetTime = mappedProgress * maxTime;

          scrubTween?.kill();
          scrubTween = gsap.to(state, {
            smoothTime: state.targetTime,
            duration: 0.22,
            ease: "power2.out",
            overwrite: true,
            onUpdate: () => {
              if (seekQueued) {
                return;
              }
              seekQueued = true;
              window.requestAnimationFrame(commitTime);
            },
          });
        },
      });

      updateTween = gsap.to(video, {
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

      if (shouldUseFallback) {
        video.currentTime = 0;
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
      updateTween?.kill();
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
          preload="metadata"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,21,27,0.32)_0%,rgba(15,21,27,0.1)_32%,rgba(15,21,27,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(40,194,121,0.15)_0%,transparent_40%),radial-gradient(circle_at_82%_16%,rgba(227,168,88,0.12)_0%,transparent_36%)]" />
        <div className="grain-overlay" />

        <HeroOverlayText progress={fallbackMode ? 0 : progress} isReady={isReady} />
      </div>
    </section>
  );
}

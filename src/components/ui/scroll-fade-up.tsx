"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeUpProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Y offset to animate from */
  yOffset?: number;
  /** ScrollTrigger start position */
  triggerOffset?: string;
  /** Animate only once (don't reverse on scroll back) */
  once?: boolean;
}

/**
 * Generic scroll-triggered fade-up wrapper.
 * Wrap any element to give it a smooth entrance on scroll.
 */
export default function ScrollFadeUp({
  children,
  className,
  delay = 0,
  duration = 0.9,
  yOffset = 50,
  triggerOffset = "top 88%",
  once = true,
}: ScrollFadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: yOffset, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: triggerOffset,
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, duration, yOffset, triggerOffset, once]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

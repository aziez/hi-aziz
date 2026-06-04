"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  /** Parallax strength — positive = slower, negative = faster than scroll */
  speed?: number;
}

/**
 * Wraps content with a vertical parallax offset driven by GSAP ScrollTrigger.
 * Use speed between -0.3 (faster) and 0.3 (slower than scroll).
 */
export default function ParallaxImage({
  children,
  className,
  speed = 0.15,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div ref={ref} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

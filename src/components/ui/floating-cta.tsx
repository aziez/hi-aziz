"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { DATA } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

/**
 * A persistent floating CTA button fixed at the viewport bottom-center.
 * Inspired by the "Book the Flight" button on jeskojets.com.
 * Becomes static (relative) when the footer is reached via ScrollTrigger.
 */
export default function FloatingCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Entrance animation
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-auto"
      aria-label="Contact floating action"
    >
      <Link
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group flex items-center gap-3 bg-foreground text-background
                   rounded-full px-7 py-3.5 font-medium text-sm
                   shadow-lg shadow-foreground/20
                   hover:shadow-xl hover:shadow-foreground/30
                   hover:scale-105 active:scale-95
                   transition-all duration-300 ease-out"
      >
        <span>Let&apos;s Work Together</span>
        <span
          className="w-7 h-7 rounded-full bg-background text-foreground
                     flex items-center justify-center text-xs
                     group-hover:rotate-45 transition-transform duration-300"
          aria-hidden="true"
        >
          ↗
        </span>
      </Link>
    </div>
  );
}

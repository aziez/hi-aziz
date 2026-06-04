"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  as?: Tag;
  /** Stagger delay between each word in seconds */
  stagger?: number;
  /** Animation start offset, e.g. "top 85%" */
  triggerOffset?: string;
  /** Animation end offset when scrubbing, e.g. "bottom 60%" */
  endOffset?: string;
  /** Initial y-offset in px for the slide-up */
  yOffset?: number;
  /** Extra delay before animation starts */
  delay?: number;
  /** Bind animation directly to scroll position */
  scrub?: boolean;
}

/**
 * Animates text word-by-word with a slide-up + fade-in on scroll.
 * Words that have entered the viewport render in full opacity;
 * remaining words start dimmed — matching the JeskoJets "text reveal" effect.
 * If scrub is enabled, text opacity lights up word-by-word as you scroll.
 */
export default function SplitTextReveal({
  text,
  className,
  as: Tag = "p",
  stagger = 0.06,
  triggerOffset = "top 88%",
  endOffset = "bottom 55%",
  yOffset = 40,
  delay = 0,
  scrub = false,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    const ctx = gsap.context(() => {
      if (scrub) {
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: triggerOffset,
              end: endOffset,
              scrub: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          words,
          { y: yOffset, opacity: 0, rotationX: -20 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            stagger,
            duration: 0.8,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: triggerOffset,
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [stagger, triggerOffset, endOffset, yOffset, delay, scrub]);

  const words = text.split(" ");

  return (
    <Tag
      ref={containerRef as React.RefObject<any>}
      className={cn("overflow-hidden", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="word inline-block overflow-hidden"
          aria-hidden="true"
          style={{ marginRight: "0.25em", opacity: 0 }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { DATA } from "@/data/resume";
import SplitTextReveal from "@/components/ui/split-text-reveal";
import ScrollFadeUp from "@/components/ui/scroll-fade-up";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 8, suffix: "+", label: "Years in Tech" },
  { value: 3, suffix: "+", label: "Years Frontend" },
  { value: 20, suffix: "+", label: "Projects Shipped" },
  { value: 5, suffix: "+", label: "Tech Stacks" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Image parallax + reveal ─────────────────────────────────────
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // ── Stats count-up ───────────────────────────────────────────────
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll(".stat-number-val");
        statElements.forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0", 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const obj = { count: 0 };
          gsap.to(obj, {
            count: target,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
            onUpdate: () => {
              el.textContent = Math.floor(obj.count) + suffix;
            },
          });
        });
      }

      // ── Skills pop-in ───────────────────────────────────────────────
      const skillTags = sectionRef.current?.querySelectorAll(".skill-tag");
      if (skillTags) {
        gsap.fromTo(
          skillTags,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.02,
            duration: 0.6,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: ".skill-tags-container",
              start: "top 88%",
            },
          }
        );
      }

      // ── Animated divider line ─────────────────────────────────────────
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: { trigger: lineRef.current, start: "top 90%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-background"
      aria-label="About me"
    >
      {/* ── Section label ── */}
      <ScrollFadeUp className="container mx-auto px-6 mb-4">
        <span className="text-xs font-mono tracking-[0.3em] text-foreground/40 uppercase">
          01 — About
        </span>
      </ScrollFadeUp>

      {/* ── Large word-reveal statement ── */}
      <div className="container mx-auto px-6 mb-20">
        <SplitTextReveal
          as="h2"
          text={`I'm Aziz — a Full-Stack Developer crafting digital experiences that are fast, accessible, and built to last.`}
          className="text-[clamp(1.6rem,3.5vw,3rem)] font-jakarta leading-tight font-medium max-w-4xl"
          stagger={0.04}
          triggerOffset="top 80%"
          endOffset="bottom 60%"
          scrub={true}
        />
      </div>

      {/* ── Divider ── */}
      <div className="container mx-auto px-6 mb-20">
        <div
          ref={lineRef}
          className="h-px bg-foreground/15 origin-left"
          aria-hidden="true"
        />
      </div>

      {/* ── Main grid: image + skills ── */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/me/2.jpeg"
            alt={`${DATA.name} — portrait`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        {/* Bio + skills */}
        <div className="space-y-12 lg:pt-8">
          <ScrollFadeUp delay={0.1}>
            <p className="text-foreground/60 text-base leading-8 font-jakarta">
              {DATA.summary.trim().split("\n\n")[0]}
            </p>
          </ScrollFadeUp>

          {/* Skills tag cloud */}
          <ScrollFadeUp delay={0.2}>
            <div>
              <p className="text-xs font-mono tracking-widest text-foreground/40 uppercase mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2 skill-tags-container">
                {DATA.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag text-xs border border-foreground/15 rounded-full px-3 py-1.5
                               text-foreground/60 hover:border-foreground/40 hover:text-foreground
                               transition-all duration-200 cursor-default inline-block origin-center"
                    style={{ transform: "scale(0)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollFadeUp>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-6 pt-4 border-t border-foreground/10"
          >
            {STATS.map(({ value, suffix, label }) => (
              <div key={label} className="space-y-1">
                <p className="stat-number font-bebas text-5xl tracking-tight text-foreground">
                  <span className="stat-number-val" data-target={value} data-suffix={suffix}>0{suffix}</span>
                </p>
                <p className="text-xs text-foreground/40 font-mono tracking-wider uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

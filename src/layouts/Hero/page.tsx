"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ─── 3D Loading overlay ────────────────────────────────────────────────────
function Loader() {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10 gap-4">
      <motion.div
        className="w-12 h-12 border-t-2 border-foreground rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 0.9 }}
      />
      <motion.p
        className="text-foreground/60 font-mono text-sm tracking-widest"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        {progress.toFixed(0)}%
      </motion.p>
    </div>
  );
}

// ─── Dynamic 3D scene import (SSR-safe) ───────────────────────────────────
const Scene3D = dynamic(() => import("@/components/hero/Scene"), {
  ssr: false,
  loading: () => <Loader />,
});

// ─── Mobile fallback image ────────────────────────────────────────────────
function HeroImageFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Image
        src="/me.png"
        alt={DATA.name}
        fill
        className="object-cover object-top opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>
  );
}

// ─── Hero Component ────────────────────────────────────────────────────────
export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ── Load animation: text enters from below ──────────────────────────
    const tl = gsap.timeline({ delay: 0.3 });

    if (headingRef.current) {
      const lines = headingRef.current.querySelectorAll(".hero-line");
      tl.fromTo(
        lines,
        { y: 80, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
        }
      );
    }

    if (metaRef.current) {
      tl.fromTo(
        metaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }

    // ── Scroll-driven 3D scene: shrink + float on right ──────────────────
    if (sceneRef.current && !prefersReduced) {
      gsap.to(sceneRef.current, {
        scale: 0.55,
        x: "16vw",
        y: "18vh",
        opacity: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // ── Scroll indicator bounce ───────────────────────────────────────
    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "sine.inOut",
      });

      // Fade out when scrolled
      gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: document.body,
          start: "top+=100 top",
          end: "top+=250 top",
          scrub: true,
        },
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full"
      aria-label="Hero section"
    >
      {/* ── 3D Scene background (desktop) ── */}
      <div
        ref={sceneRef}
        className="hidden md:block fixed right-0 top-0 w-[50vw] h-screen z-20 pointer-events-none will-change-transform origin-right-center"
        aria-hidden="true"
      >
        <div className="w-full h-full pointer-events-auto">
          <Scene3D />
        </div>
      </div>

      {/* ── Mobile fallback image ── */}
      <div className="block md:hidden absolute inset-0 z-0" aria-hidden="true">
        <HeroImageFallback />
      </div>

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b
                     from-background/30 via-transparent to-background/80"
        aria-hidden="true"
      />

      {/* ── Hero text content ── */}
      <div className="relative z-20 container mx-auto px-6">
        <div ref={headingRef} className="max-w-5xl">
          {/* Top label */}
          <p
            className="hero-line text-sm font-mono tracking-[0.2em] text-foreground/50
                         uppercase mb-6 opacity-0"
          >
            Full-Stack Developer — Jakarta
          </p>

          {/* Main headline */}
          <div className="overflow-hidden">
            <h1
              className="hero-line font-bebas text-[clamp(3.5rem,10vw,9rem)]
                           leading-[0.9] tracking-tight text-foreground opacity-0"
            >
              I Build
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="hero-line font-bebas text-[clamp(3.5rem,10vw,9rem)]
                           leading-[0.9] tracking-tight text-foreground/70 opacity-0
                           pl-[clamp(1rem,8vw,6rem)]"
            >
              {DATA.name}
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="hero-line font-bebas text-[clamp(3.5rem,10vw,9rem)]
                           leading-[0.9] tracking-tight text-foreground opacity-0"
            >
              Experiences
            </h1>
          </div>
        </div>

        {/* Description + roles */}
        <div
          ref={metaRef}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-end gap-6 opacity-0"
        >
          <p className="max-w-sm text-foreground/60 text-sm leading-relaxed font-jakarta">
            {DATA.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {DATA.roles.map((role) => (
              <span
                key={role}
                className="text-xs border border-foreground/20 rounded-full px-3 py-1
                             text-foreground/50"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] text-foreground/40 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
}

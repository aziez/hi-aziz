"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DATA } from "@/data/resume";
import SplitTextReveal from "@/components/ui/split-text-reveal";
import ScrollFadeUp from "@/components/ui/scroll-fade-up";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Parallax slide-up transition for the section ────────────────
      gsap.fromTo(
        sectionRef.current,
        { y: 150 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // ── Draw the vertical timeline line ─────────────────────────────
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            },
          }
        );
      }

      // ── Stagger each timeline entry ──────────────────────────────────
      const entries = sectionRef.current?.querySelectorAll(".timeline-entry");
      if (entries) {
        entries.forEach((entry, i) => {
          gsap.fromTo(
            entry,
            { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 82%",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-background z-10 border-t border-foreground/5"
      aria-label="Work experience"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollFadeUp className="mb-4">
          <span className="text-xs font-mono tracking-[0.3em] text-foreground/40 uppercase">
            03 — Experience
          </span>
        </ScrollFadeUp>
        <SplitTextReveal
          as="h2"
          text="Where I've Worked"
          className="text-5xl md:text-7xl font-bebas tracking-tight mb-20"
          stagger={0.05}
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 origin-top"
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="absolute inset-0 bg-foreground/40 origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {DATA.work.map((job, idx) => (
              <div
                key={job.company}
                className={`timeline-entry relative flex flex-col md:flex-row gap-8
                  ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[-5px] md:left-[calc(50%-5px)] top-0
                               w-2.5 h-2.5 rounded-full bg-foreground border-2 border-background"
                  aria-hidden="true"
                />

                {/* Date column */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  }`}
                >
                  <span className="text-xs font-mono tracking-widest text-foreground/40 uppercase">
                    {job.start} — {job.end}
                  </span>
                  <p className="text-sm text-foreground/50 mt-1">{job.location}</p>
                </div>

                {/* Content column */}
                <div
                  className={`md:w-1/2 pl-8 ${
                    idx % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  }`}
                >
                  <h3 className="font-bebas text-3xl tracking-wide text-foreground mb-1">
                    {job.title}
                  </h3>
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/50 hover:text-foreground transition-colors mb-4 block"
                  >
                    {job.company} ↗
                  </a>
                  <p className="text-sm text-foreground/55 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { DATA } from "@/data/resume";
import SplitTextReveal from "@/components/ui/split-text-reveal";
import ScrollFadeUp from "@/components/ui/scroll-fade-up";
import Marquee from "@/components/ui/marquee";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (href: string) => {
    if (href && href !== "#") {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotateY = px * 8; // Max 8 degrees tilt on Y axis
    const rotateX = -py * 8; // Max 8 degrees tilt on X axis

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power3.out",
      duration: 0.3,
      overwrite: "auto",
    });

    const glare = card.querySelector(".card-glare") as HTMLElement;
    if (glare) {
      gsap.to(glare, {
        opacity: 1,
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: "power3.out",
      duration: 0.5,
      overwrite: "auto",
    });

    const glare = card.querySelector(".card-glare") as HTMLElement;
    if (glare) {
      gsap.to(glare, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const projects = DATA.projects;
    const totalSlides = projects.length;

    const ctx = gsap.context(() => {
      // ── Combined horizontal scroll & pinning ──────────────────────────
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * totalSlides),
              totalSlides - 1
            );
            setActiveIndex(idx);

            // 1. Skew calculations based on scrolling velocity
            const velocity = self.getVelocity();
            const skew = gsap.utils.clamp(-6, 6, velocity / 180);

            gsap.to(".project-card", {
              skewX: skew,
              overwrite: "auto",
              duration: 0.4,
              ease: "power2.out",
            });

            // 2. Parallax effect on card images
            const cards = track.querySelectorAll(".project-card");
            cards.forEach((card) => {
              const rect = card.getBoundingClientRect();
              const viewportCenter = window.innerWidth / 2;
              const cardCenter = rect.left + rect.width / 2;
              const distanceFromCenter = cardCenter - viewportCenter;
              
              // Shift image opposite to scroll direction
              const parallaxOffset = (distanceFromCenter / window.innerWidth) * 45;
              const img = card.querySelector(".project-card-image");
              if (img) {
                gsap.to(img, {
                  x: parallaxOffset,
                  overwrite: "auto",
                  duration: 0.15,
                  ease: "power1.out",
                });
              }
            });
          },
          onToggle: (self) => {
            if (!self.isActive) {
              gsap.to(".project-card", {
                skewX: 0,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      aria-label="Projects"
    >
      {/* ── Background Decorative Marquee ── */}
      <div className="absolute top-[38%] left-0 right-0 w-full overflow-hidden pointer-events-none opacity-[0.025] z-0 select-none">
        <Marquee className="py-2 [--duration:50s]" repeat={5}>
          <span className="text-[12vw] font-bebas tracking-tighter uppercase mr-16">
            SELECTED PROJECTS
          </span>
          <span className="text-[12vw] font-bebas tracking-tighter uppercase mr-16">
            • DESIGN & DEVELOPMENT
          </span>
          <span className="text-[12vw] font-bebas tracking-tighter uppercase mr-16">
            • SCALE & PERFORMANCE
          </span>
          <span className="text-[12vw] font-bebas tracking-tighter uppercase mr-16">
            • INNOVATIVE SOLUTIONS
          </span>
        </Marquee>
      </div>

      {/* ── Header ── */}
      <div className="absolute top-8 left-0 right-0 z-10 container mx-auto px-6 flex items-end justify-between">
        <div>
          <ScrollFadeUp>
            <span className="text-xs font-mono tracking-[0.3em] text-foreground/40 uppercase">
              02 — Projects
            </span>
          </ScrollFadeUp>
          <SplitTextReveal
            as="h2"
            text="Selected Work"
            className="text-5xl md:text-7xl font-bebas tracking-tight mt-2"
            stagger={0.05}
          />
        </div>

        {/* Dot pagination */}
        <div className="flex gap-2 items-center pb-2" aria-hidden="true">
          {DATA.projects.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-1.5 bg-foreground"
                  : "w-1.5 h-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Horizontal track ── */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 flex h-full items-center gap-10 pl-[max(2rem,calc((100vw-1400px)/2))] pr-32 z-10"
        style={{ width: "max-content" }}
        aria-label="Project cards"
      >
        {/* Spacer so first card starts visible */}
        <div className="w-[12vw] shrink-0 h-1" aria-hidden="true" />

        {DATA.projects.map((project, idx) => {
          const isWeb = project.href && project.href !== "#";
          let cursorText = "VIEW SITE";
          
          const techList = project.technologies as readonly string[];
          if (!isWeb) {
            if (techList.includes("C#") || techList.includes("Python")) {
              cursorText = "IoT SYSTEM";
            } else if (techList.includes("Three.js") || techList.includes("React Three Fiber")) {
              cursorText = "3D EXPER";
            } else if (techList.includes("Pano2VR")) {
              cursorText = "VR TOUR";
            } else {
              cursorText = "SYSTEM";
            }
          }

          return (
            <article
              key={project.title}
              onClick={() => handleCardClick(project.href)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              data-cursor-text={cursorText}
              data-cursor-scale="3.2"
              className={`project-card group shrink-0 w-[min(85vw,480px)] md:w-[500px]
                         flex flex-col rounded-2xl overflow-hidden border border-foreground/10
                         bg-card/45 backdrop-blur-md hover:border-foreground/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.02)]
                         transition-colors duration-500 relative transform-gpu preserve-3d
                         ${isWeb ? "cursor-pointer" : "cursor-default"}`}
              aria-label={project.title}
            >
              {/* Image Container */}
              <div className="relative h-[260px] md:h-[280px] overflow-hidden select-none pointer-events-none">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="project-card-image object-cover w-[115%] left-[-7.5%] scale-105 transition-transform duration-700 group-hover:scale-110"
                  sizes="500px"
                  priority={idx < 3}
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-90" />
                
                {/* 3D Glare Element */}
                <div 
                  className="card-glare absolute pointer-events-none rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_60%)] opacity-0 w-[300px] h-[300px] -left-[150px] -top-[150px] z-20 transform-gpu" 
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-foreground/40 font-mono">
                      {String(idx + 1).padStart(2, "0")} / {String(DATA.projects.length).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] font-mono border border-foreground/10 px-2 py-0.5 rounded text-foreground/40 uppercase tracking-widest bg-foreground/5">
                      {isWeb ? "Web App" : "Standalone"}
                    </span>
                  </div>

                  <h3 className="font-bebas text-3xl tracking-wide text-foreground group-hover:text-amber-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-foreground/60 leading-relaxed mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-foreground/10">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono text-foreground/50 border border-foreground/10
                                     rounded-full px-2.5 py-0.5 bg-foreground/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links / Sub-actions */}
                  <div className="flex items-center gap-4 mt-4">
                    {project.links?.map((link) => (
                      <Link
                        key={link.type}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-foreground/50
                                     hover:text-foreground transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor-text={link.type === "Source" ? "GITHUB" : "LAUNCH"}
                        data-cursor-scale="2.2"
                      >
                        {link.icon}
                        <span>{link.type}</span> ↗
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* End spacer */}
        <div className="w-[12vw] shrink-0 h-1" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Project;

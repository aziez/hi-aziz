"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const xDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", {
      duration: 0.25,
      ease: "power3.out",
    });
    const yRing = gsap.quickTo(ring, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveCursor = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-cursor-hover], [data-cursor-text]"
      );
      if (!target) return;

      const cursorText = target.getAttribute("data-cursor-text");
      const cursorScale = target.getAttribute("data-cursor-scale");

      if (cursorText) {
        const textSpan = ring.querySelector(".cursor-text");
        if (textSpan) {
          textSpan.textContent = cursorText;
          gsap.to(textSpan, { opacity: 1, duration: 0.2, overwrite: "auto" });
        }
        gsap.to(ring, {
          scale: cursorScale ? parseFloat(cursorScale) : 3.5,
          opacity: 0.9,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(dot, { scale: 0, duration: 0.2, overwrite: "auto" });
      } else {
        gsap.to(ring, {
          scale: cursorScale ? parseFloat(cursorScale) : 2.2,
          opacity: 0.5,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(dot, { scale: 0.5, duration: 0.3, overwrite: "auto" });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-cursor-hover], [data-cursor-text]"
      );
      if (!target) return;

      const relatedTarget = e.relatedTarget as HTMLElement;
      if (
        relatedTarget &&
        relatedTarget.closest(
          "a, button, [data-cursor-hover], [data-cursor-text]"
        ) === target
      ) {
        return;
      }

      const textSpan = ring.querySelector(".cursor-text");
      if (textSpan) {
        gsap.to(textSpan, {
          opacity: 0,
          duration: 0.15,
          overwrite: "auto",
          onComplete: () => {
            textSpan.textContent = "";
          },
        });
      }
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(dot, { scale: 1, duration: 0.3, overwrite: "auto" });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2
                   w-2 h-2 rounded-full bg-foreground mix-blend-difference"
      />
      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2
                   w-8 h-8 rounded-full border border-foreground/60 mix-blend-difference flex items-center justify-center text-[6px] font-sans font-bold tracking-widest text-foreground uppercase whitespace-nowrap"
      >
        <span className="cursor-text opacity-0"></span>
      </div>
    </>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const watermark = watermarkRef.current;
    if (!footer || !watermark) return;

    const ctx = gsap.context(() => {
      // Watermark shift effect on scroll
      gsap.fromTo(
        watermark,
        { y: 50, opacity: 0.02 },
        {
          y: -30,
          opacity: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // Footer content stagger entrance
      const elements = footer.querySelectorAll(".footer-fade");
      gsap.fromTo(
        elements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 95%",
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/10"
      aria-label="Footer"
    >
      {/* Giant Background Watermark */}
      <div
        ref={watermarkRef}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0
                   font-bebas text-[clamp(10rem,30vw,35rem)] leading-none text-white font-bold opacity-0 whitespace-nowrap"
      >
        AZIZ
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="footer-fade flex flex-col gap-6">
            <h3 className="font-bebas text-4xl tracking-widest text-white">
              HI..AZIZ
            </h3>
            <p className="text-white/60 text-sm font-jakarta max-w-sm leading-relaxed">
              Crafting premium interfaces and robust backend systems from Jakarta, Indonesia. Let&apos;s collaborate on your next big idea.
            </p>
          </div>

          {/* Right Column: Quick Links & Contact */}
          <div className="footer-fade grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
                Sitemap
              </p>
              <ul className="flex flex-col gap-2.5 text-sm font-jakarta text-white/60">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-white transition-colors duration-200">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="hover:text-white transition-colors duration-200">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">
                Connect
              </p>
              <div className="flex flex-col gap-2.5 text-sm font-jakarta text-white/60">
                <Link
                  href="https://github.com/aziez"
                  target="_blank"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  GitHub ↗
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aziez13/"
                  target="_blank"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  LinkedIn ↗
                </Link>
                <Link
                  href="https://wa.me/6281514415436"
                  target="_blank"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  WhatsApp ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-fade flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs font-mono text-white/40">
          <p>&copy; {new Date().getFullYear()} hi..aziz. All rights reserved.</p>
          <p className="tracking-wider">BUILT WITH NEXT.JS & GSAP</p>
        </div>
      </div>
    </footer>
  );
}


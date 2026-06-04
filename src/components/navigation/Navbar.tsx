"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Initial reveal animation on load
    gsap.fromTo(
      nav,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Hide on scroll down, show on scroll up
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      if (scrollY > lastScrollY && scrollY > 100) {
        gsap.to(nav, { y: -100, duration: 0.4, ease: "power2.inOut" });
      } else {
        gsap.to(nav, { y: 0, duration: 0.4, ease: "power2.out" });
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth-scroll to anchor via Lenis
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
      )}
    >
      <nav
        className="container mx-auto px-6 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-bebas text-2xl tracking-widest text-foreground hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          {DATA.initials}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="group relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px bg-foreground
                             transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <Link
          href={DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium
                     border border-foreground/30 rounded-full px-5 py-2
                     hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Resume ↗
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={cn(
              "block w-6 h-px bg-foreground transition-all duration-300",
              isOpen && "translate-y-[6px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-foreground transition-all duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-foreground transition-all duration-300",
              isOpen && "-translate-y-[6px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-64 border-b border-border/40" : "max-h-0"
        )}
      >
        <ul
          className="flex flex-col px-6 py-4 gap-4 bg-background/95 backdrop-blur-md"
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href={DATA.resumeUrl}
              target="_blank"
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume ↗
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

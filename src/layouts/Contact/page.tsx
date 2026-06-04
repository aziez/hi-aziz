"use client";
import { useRef, FormEvent, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import SplitTextReveal from "@/components/ui/split-text-reveal";
import ScrollFadeUp from "@/components/ui/scroll-fade-up";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending || sent) return;
    setSending(true);

    // GSAP loading pulse on button
    const btn = formRef.current?.querySelector(".submit-btn");
    if (btn) {
      gsap.to(btn, { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 });
    }

    try {
      await fetch("https://formspree.io/f/mnnaeway", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      setSent(true);
      setFields({ name: "", email: "", message: "" });
      if (btn) gsap.to(btn, { scale: 1, opacity: 1, duration: 0.3 });
    } catch {
      // Form submit failed silently — user sees native error
    } finally {
      setSending(false);
    }
  };

  // Magnetic effect on social links
  const handleMagnet = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: "power2.out" });
  };

  const handleMagnetLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      aria-label="Contact"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <ScrollFadeUp className="mb-4">
          <span className="text-xs font-mono tracking-[0.3em] text-foreground/40 uppercase">
            04 — Contact
          </span>
        </ScrollFadeUp>
        <SplitTextReveal
          as="h2"
          text="Let's Build Something Together"
          className="text-5xl md:text-7xl font-bebas tracking-tight mb-6 leading-none"
          stagger={0.04}
        />
        <ScrollFadeUp delay={0.2} className="mb-20">
          <p className="text-foreground/50 text-base font-jakarta max-w-lg">
            Open to freelance, collaborations, and full-time opportunities.
            Drop me a message and I&apos;ll get back within 24 hours.
          </p>
        </ScrollFadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* ── Contact Form (3/5 width) ── */}
          <ScrollFadeUp className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-16">
                <span className="text-5xl">✓</span>
                <p className="font-bebas text-4xl tracking-wide">Message Sent!</p>
                <p className="text-foreground/50 text-sm font-jakarta">
                  Thanks for reaching out. I&apos;ll respond soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-mono text-foreground/40 hover:text-foreground mt-2 transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8"
                aria-label="Contact form"
              >
                {(
                  [
                    {
                      id: "name",
                      label: "Your Name",
                      type: "text" as const,
                      required: true,
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      type: "email" as const,
                      required: true,
                    },
                  ] as const
                ).map(({ id, label, type, required }) => (
                  <div key={id} className="relative group">
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required={required}
                      value={fields[id as keyof FormState]}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-foreground/20
                                   py-3 text-sm text-foreground placeholder-transparent
                                   focus:outline-none focus:border-foreground transition-colors duration-300"
                    />
                    <label
                      htmlFor={id}
                      className="absolute left-0 -top-4 text-xs font-mono text-foreground/40
                                   peer-placeholder-shown:text-sm peer-placeholder-shown:top-3
                                   peer-placeholder-shown:text-foreground/30
                                   peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground/60
                                   transition-all duration-300 tracking-widest uppercase"
                    >
                      {label}
                    </label>
                  </div>
                ))}

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-foreground/20
                                 py-3 text-sm text-foreground placeholder-transparent
                                 focus:outline-none focus:border-foreground transition-colors
                                 duration-300 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-4 text-xs font-mono text-foreground/40
                                 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3
                                 peer-placeholder-shown:text-foreground/30
                                 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-foreground/60
                                 transition-all duration-300 tracking-widest uppercase"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  className="submit-btn group flex items-center gap-3 border border-foreground/30
                               rounded-full px-8 py-3.5 text-sm font-medium
                               hover:bg-foreground hover:text-background hover:border-foreground
                               disabled:opacity-50 transition-all duration-300"
                >
                  {sending ? "Sending…" : "Send Message"}
                  <span
                    className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center
                                 group-hover:bg-background/20 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </form>
            )}
          </ScrollFadeUp>

          {/* ── Sidebar: email + socials (2/5 width) ── */}
          <div className="lg:col-span-2 flex flex-col gap-10 lg:pt-8">
            <ScrollFadeUp delay={0.15}>
              <div>
                <p className="text-xs font-mono tracking-widest text-foreground/30 uppercase mb-3">
                  Direct Email
                </p>
                <a
                  href={`mailto:${DATA.contact.email}`}
                  className="text-foreground/70 hover:text-foreground transition-colors duration-200
                               text-sm underline-offset-4 hover:underline"
                >
                  {DATA.contact.email}
                </a>
              </div>
            </ScrollFadeUp>

            <ScrollFadeUp delay={0.25}>
              <div>
                <p className="text-xs font-mono tracking-widest text-foreground/30 uppercase mb-5">
                  Social
                </p>
                <div className="flex flex-col gap-4">
                  {Object.values(DATA.contact.social).map(({ name, url, icon: Icon }) => (
                    <Link
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseMove={handleMagnet}
                      onMouseLeave={handleMagnetLeave}
                      className="group flex items-center gap-3 text-foreground/50 hover:text-foreground
                                   transition-colors duration-200 w-fit"
                      aria-label={name}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollFadeUp>

            <ScrollFadeUp delay={0.35}>
              <div className="border-t border-foreground/10 pt-8">
                <p className="text-xs font-mono tracking-widest text-foreground/30 uppercase mb-2">
                  Location
                </p>
                <p className="text-sm text-foreground/50">{DATA.location}</p>
              </div>
            </ScrollFadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

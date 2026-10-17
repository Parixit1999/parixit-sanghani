"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import profile from "@/assets/profile.png";
import { site } from "@/data/profile";
import { EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const SOCIALS = [
  { href: site.links.linkedin, label: "LinkedIn", primary: true },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.x, label: "X" },
  { href: `mailto:${site.email}`, label: "Email" },
];

export function Hero() {
  return (
    <motion.section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-x-clip px-6 pb-12 pt-20 text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div
        aria-hidden="true"
        className="hero-halo pointer-events-none absolute left-1/2 top-[42%] aspect-square w-[min(460px,100vw)] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, rgb(139 127 248 / 0.28) 0%, transparent 65%)" }}
      />

      <motion.div data-reveal variants={item} className="relative mb-10 h-[132px] w-[132px]">
        <span aria-hidden="true" className="photo-orbit" />
        {/* The source photo has transparent corners, so it sits on a solid backing and is cropped slightly in. */}
        <div className="h-full w-full overflow-hidden rounded-full border border-white/15 bg-[#0b0f24] shadow-[0_0_60px_rgb(139_127_248/0.4)]">
          <Image
            src={profile}
            alt={site.name}
            width={132}
            height={132}
            priority
            className="h-full w-full scale-[1.12] object-cover object-[50%_35%]"
          />
        </div>
      </motion.div>

      <motion.h1
        data-reveal
        variants={item}
        className="relative font-display text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-ink-strong sm:text-6xl lg:text-[4.8rem]"
      >
        {site.name}
      </motion.h1>

      <motion.p data-reveal variants={item} className="relative mt-4 font-mono text-[0.76rem] uppercase tracking-[0.15em] text-muted">
        {site.roleLine}
      </motion.p>

      <motion.p data-reveal variants={item} className="relative mx-auto mb-8 mt-6 max-w-[640px] text-[1.05rem] leading-relaxed">
        {site.tagline}
      </motion.p>

      <motion.div data-reveal variants={item} className="relative flex flex-wrap justify-center gap-2.5">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`rounded-full border px-[1.15rem] py-2.5 text-sm font-medium transition hover:-translate-y-px ${
              s.primary
                ? "border-white bg-white text-[#0a0e1f] hover:bg-[#e8e6ff]"
                : "border-white/15 bg-white/5 text-ink hover:border-white/35 hover:bg-white/10"
            }`}
          >
            {s.label}
          </a>
        ))}
      </motion.div>

      <motion.div
        variants={item}
        aria-hidden="true"
        className="scroll-cue absolute bottom-6 left-1/2 h-9 w-[22px] -translate-x-1/2 rounded-xl border-[1.5px] border-white/25"
      />
    </motion.section>
  );
}

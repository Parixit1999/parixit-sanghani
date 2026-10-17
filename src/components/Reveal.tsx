"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="font-display text-2xl font-semibold text-ink-strong sm:text-[1.65rem]">{children}</h2>
      <motion.span
        aria-hidden="true"
        className="h-px flex-1 origin-left bg-gradient-to-r from-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
      />
    </div>
  );
}

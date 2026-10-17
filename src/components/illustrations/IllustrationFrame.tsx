"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  /** Receives `live`: true only while visible and motion is allowed, so loops can mount and unmount. */
  children: (live: boolean) => ReactNode;
};

export function IllustrationFrame({ children }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.35 });
  const visible = useInView(ref, { amount: 0.05 });
  const reduce = useReducedMotion();
  const live = seen && visible && !reduce;

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 340 280"
      className="illus"
      aria-hidden="true"
      focusable="false"
      initial="hidden"
      animate={seen ? "show" : "hidden"}
    >
      {children(live)}
    </motion.svg>
  );
}

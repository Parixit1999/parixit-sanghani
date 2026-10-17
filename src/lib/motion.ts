import type { Variants } from "motion/react";

export const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const sec = (ms: number) => ms / 1000;

export const draw = (delayMs = 0, duration = 1.1): Variants => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: sec(delayMs), duration, ease: EASE },
      opacity: { delay: sec(delayMs), duration: 0.01 },
    },
  },
});

export const fade = (delayMs = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: sec(delayMs), duration } },
});

export const pop = (delayMs = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.55 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { delay: sec(delayMs), duration: 0.25 },
      scale: { delay: sec(delayMs), type: "spring", stiffness: 320, damping: 17 },
    },
  },
});

export const slideIn = (delayMs = 0, x = 8): Variants => ({
  hidden: { opacity: 0, x },
  show: { opacity: 1, x: 0, transition: { delay: sec(delayMs), duration: 0.5, ease: EASE } },
});

export const growX = (delayMs = 0, duration = 1.2, linear = false): Variants => ({
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { delay: sec(delayMs), duration, ease: linear ? "linear" : EASE } },
});

export const growY = (delayMs = 0): Variants => ({
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { delay: sec(delayMs), duration: 0.8, ease: EASE } },
});

export const ORIGIN_LEFT = { originX: 0 } as const;
export const ORIGIN_BOTTOM = { originY: 1 } as const;

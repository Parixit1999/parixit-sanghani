"use client";

import { motion } from "motion/react";
import { draw, fade, growY, ORIGIN_BOTTOM, pop, slideIn } from "@/lib/motion";
import { IllustrationFrame } from "./IllustrationFrame";

const TEAL = "#5eead4";
const ALERT = "#fb7185";

const PIPES = [
  "M42 60 C 90 60, 100 122, 130 128",
  "M42 112 C 80 112, 100 134, 130 136",
  "M42 168 C 80 168, 100 146, 130 146",
  "M42 220 C 90 220, 100 158, 130 152",
];
const OUTPUT = "M186 140 H248";

const PACKETS = [
  { path: PIPES[0], dur: "2.2s", begin: "0s", color: TEAL },
  { path: PIPES[1], dur: "2s", begin: "0.5s", color: TEAL },
  { path: PIPES[2], dur: "2.4s", begin: "0.9s", color: ALERT },
  { path: PIPES[3], dur: "2.2s", begin: "1.3s", color: TEAL },
  { path: OUTPUT, dur: "1.1s", begin: "0.6s", color: "#99f6e4" },
];

const BARS = [
  { x: 258, h: 28 },
  { x: 270, h: 44 },
  { x: 282, h: 34 },
  { x: 294, h: 52 },
  { x: 306, h: 40 },
];

/** Icons for the four event sources, drawn around (0,0). */
function SourceIcon({ kind }: { kind: "server" | "cloud" | "shield" | "terminal" }) {
  switch (kind) {
    case "server":
      return (
        <>
          <rect x="-6" y="-6" width="12" height="5" rx="1" />
          <rect x="-6" y="1" width="12" height="5" rx="1" />
          <circle cx="3.5" cy="-3.5" r=".7" fill={TEAL} />
          <circle cx="3.5" cy="3.5" r=".7" fill={TEAL} />
        </>
      );
    case "cloud":
      return <path d="M-6 3.5 H5 A3.2 3.2 0 0 0 5 -2.9 A4.6 4.6 0 0 0 -3.6 -3.2 A3.4 3.4 0 0 0 -6 3.5 Z" />;
    case "shield":
      return <path d="M0 -7 L6 -4.5 V0.5 C6 4.5 3.4 6.5 0 7.5 C-3.4 6.5 -6 4.5 -6 0.5 V-4.5 Z" />;
    case "terminal":
      return (
        <>
          <polyline points="-5,-3 -1,0 -5,3" />
          <line x1="0" y1="4" x2="5" y2="4" />
        </>
      );
  }
}

const SOURCES = [
  { y: 60, kind: "server" },
  { y: 112, kind: "cloud" },
  { y: 168, kind: "shield" },
  { y: 220, kind: "terminal" },
] as const;

/** Security event sources streaming into a processing hub and an analytics dashboard. */
export function CrestIllustration() {
  return (
    <IllustrationFrame>
      {(live) => (
        <>
          <defs>
            <radialGradient id="cr-core">
              <stop offset="0" stopColor={TEAL} stopOpacity=".55" />
              <stop offset="1" stopColor={TEAL} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* sources */}
          <g fill="none" stroke={TEAL} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            {SOURCES.map((s, i) => (
              <g key={s.kind} transform={`translate(30 ${s.y})`}>
                <motion.g variants={pop(100 + i * 100)}>
                  <rect x="-12" y="-12" width="24" height="24" rx="5" fill="rgb(94 234 212 / .06)" stroke="rgb(94 234 212 / .55)" />
                  <SourceIcon kind={s.kind} />
                </motion.g>
              </g>
            ))}
          </g>

          {/* pipes */}
          <g fill="none" stroke="rgb(94 234 212 / .5)" strokeWidth="1.2">
            {PIPES.map((d, i) => (
              <motion.path key={d} variants={draw(500 + i * 100)} d={d} />
            ))}
          </g>

          {/* hub */}
          <motion.g variants={fade(1300)}>
            {live ? (
              <motion.circle
                cx="156"
                cy="140"
                r="42"
                fill="none"
                stroke="rgb(94 234 212 / .35)"
                strokeDasharray="4 6"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, ease: "linear", repeat: Infinity }}
              />
            ) : (
              <circle cx="156" cy="140" r="42" fill="none" stroke="rgb(94 234 212 / .35)" strokeDasharray="4 6" />
            )}
          </motion.g>
          <motion.polygon
            variants={draw(900)}
            points="156,110 182,125 182,155 156,170 130,155 130,125"
            fill="rgb(94 234 212 / .07)"
            stroke={TEAL}
            strokeWidth="1.5"
          />
          <g opacity=".6">
            <motion.polygon
              variants={draw(1100)}
              points="156,122 171.6,131 171.6,149 156,158 140.4,149 140.4,131"
              fill="none"
              stroke={TEAL}
              strokeWidth="1"
            />
          </g>
          <motion.circle variants={pop(1200)} cx="156" cy="140" r="14" fill="url(#cr-core)" />
          <motion.circle variants={pop(1200)} cx="156" cy="140" r="4.5" fill={TEAL} />
          <g opacity=".75">
            <motion.path variants={draw(1400)} d={OUTPUT} fill="none" stroke={TEAL} strokeWidth="1.3" />
          </g>

          {/* event packets */}
          {live && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.4 }}>
              {PACKETS.map((p) => (
                <rect key={p.path + p.begin} x="-2.5" y="-2.5" width="5" height="5" rx="1" fill={p.color}>
                  <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite" path={p.path} />
                </rect>
              ))}
            </motion.g>
          )}

          {/* dashboard */}
          <motion.g variants={slideIn(1500, 10)}>
            <rect x="248" y="40" width="80" height="200" rx="6" fill="rgb(3 22 19 / .92)" stroke="rgb(94 234 212 / .4)" />
            <rect x="256" y="50" width="38" height="4" rx="2" fill="#99f6e4" opacity=".75" />
            <rect x="256" y="58" width="24" height="3" rx="1.5" fill="#99f6e4" opacity=".3" />
            <line x1="254" y1="68" x2="322" y2="68" stroke="rgb(94 234 212 / .25)" />
            <line x1="256" y1="140" x2="320" y2="140" stroke="rgb(94 234 212 / .25)" />
          </motion.g>
          <g fill="rgb(94 234 212 / .75)">
            {BARS.map((b, i) => (
              <motion.rect
                key={b.x}
                variants={growY(1700 + i * 100)}
                style={ORIGIN_BOTTOM}
                x={b.x}
                y={140 - b.h}
                width="8"
                height={b.h}
                rx="1.5"
              />
            ))}
          </g>

          <motion.g variants={slideIn(2300, 6)}>
            <rect x="254" y="152" width="68" height="22" rx="4" fill="rgb(251 113 133 / .1)" stroke="rgb(251 113 133 / .6)" />
            <circle cx="262" cy="163" r="3" fill={ALERT} />
            <rect x="270" y="159" width="44" height="3" rx="1.5" fill="#ffe4e6" opacity=".8" />
            <rect x="270" y="165" width="30" height="2.5" rx="1.2" fill="#ffe4e6" opacity=".35" />
          </motion.g>
          {live && (
            <motion.circle
              cx="262"
              cy="163"
              r="3"
              fill="none"
              stroke={ALERT}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0.7, 0], scale: [1, 2.4] }}
              transition={{ duration: 2.2, ease: "easeOut", repeat: Infinity, delay: 2.8 }}
            />
          )}
          {[180, 208].map((y, i) => (
            <motion.g key={y} variants={slideIn(2450 + i * 150, 6)}>
              <rect x="254" y={y} width="68" height="22" rx="4" fill="rgb(255 255 255 / .03)" stroke="rgb(255 255 255 / .08)" />
              <circle cx="262" cy={y + 11} r="3" fill={TEAL} />
              <rect x="270" y={y + 7} width={40 - i * 4} height="3" rx="1.5" fill="#ccfbf1" opacity=".65" />
              <rect x="270" y={y + 13} width={24 + i * 4} height="2.5" rx="1.2" fill="#ccfbf1" opacity=".3" />
            </motion.g>
          ))}
        </>
      )}
    </IllustrationFrame>
  );
}

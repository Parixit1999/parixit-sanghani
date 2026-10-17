"use client";

import { motion } from "motion/react";
import { draw, fade, growX, ORIGIN_LEFT, pop, slideIn } from "@/lib/motion";
import { IllustrationFrame } from "./IllustrationFrame";

const MAGENTA = "#e879f9";
const QUERY = { x: 186, y: 148 };

const QUERY_WORDS = [
  { x: 56, w: 34, delay: 350 },
  { x: 94, w: 22, delay: 580 },
  { x: 120, w: 42, delay: 810 },
  { x: 166, w: 20, delay: 1040 },
];

const DOC_LINES = [
  [24, 70], [32, 64], [40, 70], [48, 58], [56, 70], [64, 66],
  [72, 52], [80, 70], [88, 62], [96, 68], [104, 44],
] as const;

const CLOUD = [
  [140, 95, 1.6], [158, 84, 1.2], [204, 92, 1.8], [226, 106, 1.3], [130, 124, 1.4], [166, 108, 2],
  [214, 122, 1.5], [236, 140, 1.2], [150, 178, 1.6], [128, 198, 1.3], [170, 206, 1.8], [212, 186, 1.4],
  [230, 168, 1.7], [218, 214, 1.2], [146, 222, 1.4], [122, 160, 1.3],
] as const;

const NEIGHBORS = [
  [174, 136], [203, 156], [179, 167], [196, 131],
] as const;

const FLOWS = [
  { d: "M102 105 C 130 105, 140 132, 168 140", delay: 1800 },
  { d: "M84 137 C 110 137, 140 152, 172 156", delay: 1950 },
];

const RESULTS = [
  { y: 96, score: 52, color: MAGENTA, top: true, delay: 3150 },
  { y: 142, score: 38, color: "#c084fc", top: false, delay: 3300 },
  { y: 188, score: 26, color: "#a78bfa", top: false, delay: 3450 },
];

/** Legal documents feeding a semantic vector search, with ranked results. */
export function NebulaIllustration() {
  return (
    <IllustrationFrame>
      {(live) => (
        <>
          <defs>
            <radialGradient id="nb-star">
              <stop offset="0" stopColor="#fff" stopOpacity=".95" />
              <stop offset=".4" stopColor="#f5d0fe" stopOpacity=".5" />
              <stop offset="1" stopColor={MAGENTA} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* search bar */}
          <motion.g variants={fade(100)}>
            <rect x="20" y="16" width="300" height="28" rx="14" fill="rgb(255 255 255 / .05)" stroke="rgb(232 121 249 / .45)" />
            <circle cx="37" cy="29" r="5.5" fill="none" stroke={MAGENTA} strokeWidth="1.6" />
            <line x1="41" y1="33" x2="45.5" y2="37.5" stroke={MAGENTA} strokeWidth="1.6" strokeLinecap="round" />
          </motion.g>
          {QUERY_WORDS.map((w) => (
            <motion.rect
              key={w.x}
              variants={growX(w.delay, 0.22, true)}
              style={ORIGIN_LEFT}
              x={w.x}
              y="27.5"
              width={w.w}
              height="4"
              rx="2"
              fill="rgb(255 255 255 / .78)"
            />
          ))}
          <motion.g variants={fade(1200)}>
            {live ? (
              <motion.rect
                x="191"
                y="23"
                width="1.5"
                height="13"
                fill="#fff"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1.05, times: [0, 0.5, 0.5, 1], repeat: Infinity }}
              />
            ) : (
              <rect x="191" y="23" width="1.5" height="13" fill="#fff" />
            )}
          </motion.g>

          {/* documents */}
          <motion.g variants={fade(200)}>
            <rect x="26" y="68" width="84" height="116" rx="3" transform="rotate(-9 68 126)" fill="rgb(240 235 255 / .18)" />
            <rect x="24" y="66" width="84" height="116" rx="3" transform="rotate(-4 66 124)" fill="rgb(240 235 255 / .4)" />
          </motion.g>
          <g transform="translate(22 64)">
          <motion.g variants={fade(350)}>
            <rect width="86" height="118" rx="3" fill="rgb(246 243 255 / .96)" />
            <rect x="8" y="10" width="44" height="5" rx="2" fill="#3b2f5c" opacity=".85" />
            <g fill="#6b5f8a" opacity=".5">
              {DOC_LINES.map(([y, w]) => (
                <rect key={y} x="8" y={y} width={w} height="3" rx="1.5" />
              ))}
            </g>
            <g opacity=".45">
              <motion.rect variants={growX(1400)} style={ORIGIN_LEFT} x="6" y="38.5" width="74" height="6" rx="1" fill={MAGENTA} />
              <motion.rect variants={growX(1600)} style={ORIGIN_LEFT} x="6" y="70.5" width="56" height="6" rx="1" fill={MAGENTA} />
            </g>
          </motion.g>
          </g>

          {/* passages flowing into the embedding space */}
          <g fill="none" stroke={MAGENTA} strokeWidth="1.2" opacity=".7">
            {FLOWS.map((f) => (
              <motion.path key={f.d} variants={draw(f.delay)} d={f.d} />
            ))}
          </g>
          {live && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4 }}>
              {FLOWS.map((f, i) => (
                <circle key={f.d} r="2" fill="#f5d0fe">
                  <animateMotion dur="2.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={f.d} />
                </circle>
              ))}
            </motion.g>
          )}

          {/* vector space */}
          <g fill="rgb(210 200 255 / .75)">
            {CLOUD.map(([cx, cy, r], i) => (
              <motion.circle key={`${cx}-${cy}`} variants={pop(1700 + i * 40)} cx={cx} cy={cy} r={r} />
            ))}
          </g>
          <motion.circle
            variants={pop(2500)}
            cx={QUERY.x}
            cy={QUERY.y}
            r="26"
            fill="rgb(232 121 249 / .06)"
            stroke="rgb(232 121 249 / .6)"
            strokeDasharray="3 3"
          />
          {live && (
            <motion.circle
              cx={QUERY.x}
              cy={QUERY.y}
              r="26"
              fill="none"
              stroke={MAGENTA}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0.7, 0], scale: [1, 2] }}
              transition={{ duration: 2.6, ease: "easeOut", repeat: Infinity, delay: 3 }}
            />
          )}
          <g stroke="#f0abfc" strokeWidth=".9" opacity=".85">
            {NEIGHBORS.map(([x, y], i) => (
              <motion.line key={`${x}-${y}`} variants={draw(2700 + i * 60)} x1={QUERY.x} y1={QUERY.y} x2={x} y2={y} />
            ))}
          </g>
          <g fill={MAGENTA}>
            {NEIGHBORS.map(([x, y], i) => (
              <motion.circle key={`${x}-${y}`} variants={pop(2400 + i * 40)} cx={x} cy={y} r="2.4" />
            ))}
          </g>
          <motion.circle variants={pop(2300)} cx={QUERY.x} cy={QUERY.y} r="11" fill="url(#nb-star)" />
          <motion.circle variants={pop(2300)} cx={QUERY.x} cy={QUERY.y} r="3.2" fill="#fff" />

          {/* ranked results */}
          <g opacity=".55">
            <motion.path variants={draw(3000)} d="M203 156 C 222 150, 228 116, 248 116" fill="none" stroke={MAGENTA} strokeWidth="1" />
          </g>
          <motion.g variants={slideIn(2900, 10)}>
            <rect x="248" y="62" width="80" height="176" rx="6" fill="rgb(14 6 30 / .92)" stroke="rgb(232 121 249 / .35)" />
            <rect x="256" y="72" width="40" height="4" rx="2" fill="#f0abfc" opacity=".7" />
            <rect x="256" y="80" width="24" height="3" rx="1.5" fill="#f0abfc" opacity=".3" />
            <line x1="254" y1="90" x2="322" y2="90" stroke="rgb(232 121 249 / .25)" />
          </motion.g>
          {RESULTS.map((r) => (
            <g key={r.y}>
              <motion.g variants={slideIn(r.delay, 6)}>
                <rect
                  x="254"
                  y={r.y}
                  width="68"
                  height="40"
                  rx="4"
                  fill={r.top ? "rgb(232 121 249 / .1)" : "rgb(255 255 255 / .03)"}
                  stroke={r.top ? "rgb(232 121 249 / .65)" : "rgb(255 255 255 / .1)"}
                />
                <rect x="260" y={r.y + 7} width="10" height="13" rx="1.5" fill={`rgb(246 243 255 / ${r.top ? 0.9 : 0.55})`} />
                <rect x="275" y={r.y + 8} width="38" height="3" rx="1.5" fill="#f5f3ff" opacity=".7" />
                <rect x="275" y={r.y + 15} width="26" height="2.5" rx="1.2" fill="#f5f3ff" opacity=".32" />
                <rect x="260" y={r.y + 28} width="56" height="3" rx="1.5" fill="rgb(255 255 255 / .1)" />
              </motion.g>
              <motion.rect
                variants={growX(r.delay + 200)}
                style={ORIGIN_LEFT}
                x="260"
                y={r.y + 28}
                width={r.score}
                height="3"
                rx="1.5"
                fill={r.color}
              />
            </g>
          ))}
        </>
      )}
    </IllustrationFrame>
  );
}

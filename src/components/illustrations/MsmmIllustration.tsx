"use client";

import { motion } from "motion/react";
import { draw, fade, growX, ORIGIN_LEFT, pop, slideIn } from "@/lib/motion";
import { IllustrationFrame } from "./IllustrationFrame";

const LINE = "#8cc8ff";
const PIPE = "#4a9eff";
const OK = "#5eead4";
const FLAG = "#ffb84a";

const REPORT_ROWS = [
  { y: 88, color: FLAG, w1: 44, w2: 30, delay: 2900 },
  { y: 113, color: FLAG, w1: 38, w2: 34, delay: 3050 },
  { y: 138, color: OK, w1: 42, w2: 24, delay: 3200 },
  { y: 163, color: OK, w1: 36, w2: 30, delay: 3350 },
  { y: 188, color: OK, w1: 40, w2: 20, delay: 3500 },
];

const MANHOLES = [
  { cx: 140, cy: 130, delay: 1200 },
  { cx: 140, cy: 212, delay: 1280 },
  { cx: 204, cy: 130, delay: 1360 },
  { cx: 204, cy: 212, delay: 1440 },
];

/** Engineering site plan being scanned by AI, with flagged issues feeding a results panel. */
export function MsmmIllustration() {
  return (
    <IllustrationFrame>
      {(live) => (
        <>
          <defs>
            <linearGradient id="ms-scan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={PIPE} stopOpacity="0" />
              <stop offset="1" stopColor={PIPE} stopOpacity=".28" />
            </linearGradient>
            <clipPath id="ms-sheet">
              <rect x="22" y="45" width="224" height="190" />
            </clipPath>
          </defs>

          <rect x="22" y="45" width="224" height="190" fill="rgb(6 19 40 / .55)" />

          {/* dimension lines */}
          <g stroke={LINE} strokeWidth=".8" opacity=".6">
            <motion.line variants={draw(300)} x1="22" y1="30" x2="246" y2="30" />
            <motion.line variants={draw(300)} x1="10" y1="45" x2="10" y2="235" />
            <motion.g variants={fade(700)}>
              <line x1="22" y1="24" x2="22" y2="40" />
              <line x1="246" y1="24" x2="246" y2="40" />
              <line x1="18" y1="34" x2="26" y2="26" />
              <line x1="242" y1="34" x2="250" y2="26" />
              <line x1="4" y1="45" x2="16" y2="45" />
              <line x1="4" y1="235" x2="16" y2="235" />
              <line x1="6" y1="49" x2="14" y2="41" />
              <line x1="6" y1="239" x2="14" y2="231" />
            </motion.g>
          </g>

          {/* plan */}
          <g fill="none" stroke={LINE} strokeWidth="1.1">
            <motion.rect variants={draw(0)} x="22" y="45" width="224" height="190" />
            <motion.rect variants={draw(200)} x="38" y="61" width="84" height="58" />
            <motion.rect variants={draw(300)} x="136" y="61" width="96" height="38" />
            <motion.rect variants={draw(400)} x="136" y="112" width="48" height="48" />
            <motion.rect variants={draw(500)} x="38" y="140" width="64" height="80" />
            <motion.g variants={fade(900)}>
              <line x1="38" y1="90" x2="122" y2="90" strokeDasharray="3 3" opacity=".55" />
              <line x1="38" y1="140" x2="102" y2="220" opacity=".35" />
              <line x1="102" y1="140" x2="38" y2="220" opacity=".35" />
            </motion.g>
          </g>

          {/* utility network */}
          <g fill="none" stroke={PIPE} strokeWidth="2.2" strokeLinecap="round">
            <motion.polyline variants={draw(700)} points="22,130 140,130 140,212 246,212" />
            <motion.line variants={draw(1000)} x1="204" y1="130" x2="204" y2="212" />
            <motion.line variants={fade(1100)} x1="140" y1="130" x2="246" y2="130" strokeDasharray="6 4" />
          </g>
          <g fill="#061328" stroke={LINE} strokeWidth="1.4">
            {MANHOLES.map((m) => (
              <motion.circle key={`${m.cx}-${m.cy}`} variants={pop(m.delay)} cx={m.cx} cy={m.cy} r="4.5" />
            ))}
          </g>

          {/* scan sweep */}
          {live && (
            <g clipPath="url(#ms-sheet)">
              <motion.g
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: [0, 190, 0], opacity: 1 }}
                transition={{
                  y: { duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1.5 },
                  opacity: { duration: 0.4, delay: 1.5 },
                }}
              >
                <rect x="22" y="5" width="224" height="40" fill="url(#ms-scan)" />
                <rect x="22" y="44" width="224" height="1.5" fill="#7cc4ff" opacity=".9" />
              </motion.g>
            </g>
          )}

          {/* detections */}
          <motion.path
            variants={pop(1900)}
            d="M34 67V57H44M116 57H126V67M126 113V123H116M44 123H34V113"
            fill="none"
            stroke={OK}
            strokeWidth="1.8"
          />
          <motion.g variants={pop(2300)}>
            <rect x="132" y="108" width="56" height="56" fill="rgb(255 184 74 / .08)" />
            <path d="M132 118V108H142M178 108H188V118M188 154V164H178M142 164H132V154" fill="none" stroke={FLAG} strokeWidth="1.8" />
            <circle cx="160" cy="136" r="2.5" fill={FLAG} />
          </motion.g>
          {live && (
            <motion.circle
              cx="160"
              cy="136"
              r="3"
              fill={FLAG}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0.9, 0], scale: [1, 4.5] }}
              transition={{ duration: 2.4, ease: "easeOut", repeat: Infinity, delay: 2.4 }}
            />
          )}
          <motion.path
            variants={pop(2600)}
            d="M196 212V204H204M212 204V212M212 212V220H204M196 220V212"
            fill="none"
            stroke={FLAG}
            strokeWidth="1.6"
          />
          <g opacity=".8">
            <motion.polyline variants={draw(2700)} points="188,112 226,86 258,86" fill="none" stroke={FLAG} strokeWidth="1" />
          </g>

          {/* report panel */}
          <motion.g variants={slideIn(2500, 10)}>
            <rect x="258" y="45" width="72" height="190" rx="5" fill="rgb(4 12 26 / .92)" stroke="rgb(74 158 255 / .35)" />
            <rect x="266" y="56" width="40" height="4" rx="2" fill={LINE} opacity=".75" />
            <rect x="266" y="64" width="26" height="3" rx="1.5" fill={LINE} opacity=".3" />
            <line x1="264" y1="75" x2="324" y2="75" stroke="rgb(74 158 255 / .25)" />
          </motion.g>
          {REPORT_ROWS.map((row) => (
            <motion.g key={row.y} variants={slideIn(row.delay, 6)}>
              <circle cx="270" cy={row.y} r="3" fill={row.color} />
              <rect x="278" y={row.y - 3} width={row.w1} height="3" rx="1.5" fill="#dbe7fb" opacity=".7" />
              <rect x="278" y={row.y + 3} width={row.w2} height="2.5" rx="1.2" fill="#dbe7fb" opacity=".3" />
            </motion.g>
          ))}
          <motion.rect variants={fade(3600)} x="266" y="214" width="56" height="4" rx="2" fill="rgb(74 158 255 / .18)" />
          <motion.rect variants={growX(3700)} style={ORIGIN_LEFT} x="266" y="214" width="47" height="4" rx="2" fill={PIPE} />
        </>
      )}
    </IllustrationFrame>
  );
}

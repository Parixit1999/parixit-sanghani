"use client";

import { motion } from "motion/react";
import { draw, fade, growX, ORIGIN_LEFT, pop, slideIn } from "@/lib/motion";
import { IllustrationFrame } from "./IllustrationFrame";

const ORANGE = "#ff9900";
const AMBER = "#ffb547";
const LABEL = "#ffc266";

const PODS = [
  [24, 36], [54, 36], [84, 36], [24, 66], [54, 66], [84, 66],
  [162, 36], [192, 36], [162, 66], [192, 66],
  [24, 190], [54, 190], [84, 190], [24, 220], [54, 220], [84, 220],
  [162, 190], [192, 190], [162, 220], [192, 220],
] as const;

const ROBOTS = [
  { start: [14, 120], path: "M0 0 H212 V46 H0 Z", dur: "12s", delay: 1300, carrying: false },
  { start: [226, 166], path: "M0 0 H-212 V-46 H0 Z", dur: "12s", delay: 1400, carrying: false },
  { start: [138, 18], path: "M0 0 V244 Z", dur: "9s", delay: 1500, carrying: true },
] as const;

const NET = {
  input: [70, 90, 110].map((y) => [266, y] as const),
  hidden: [62, 82, 102, 122].map((y) => [290, y] as const),
  output: [80, 104].map((y) => [314, y] as const),
};

const NET_EDGES = [
  ...NET.input.flatMap(([x1, y1]) => NET.hidden.map(([x2, y2]) => `M${x1} ${y1}L${x2} ${y2}`)),
  ...NET.hidden.flatMap(([x1, y1]) => NET.output.map(([x2, y2]) => `M${x1} ${y1}L${x2} ${y2}`)),
].join("");

const UPTIME = "260,202 268,201 276,202 284,201 292,202 300,201 308,202 316,201 322,202";
const DEPLOY = "M250 104 C 238 104, 236 118, 228 120";

/** Warehouse floor with drive units and storage pods, fed by an ML model with an uptime monitor. */
export function AmazonIllustration() {
  return (
    <IllustrationFrame>
      {(live) => (
        <>
          <defs>
            <symbol id="am-pod" viewBox="0 0 24 24" width="24" height="24">
              <rect x=".5" y=".5" width="23" height="23" rx="2" fill="rgb(255 153 0 / .07)" stroke="rgb(255 153 0 / .55)" />
              <path d="M12 .5V23.5M.5 12H23.5" stroke="rgb(255 153 0 / .22)" />
            </symbol>
            <radialGradient id="am-glow">
              <stop offset="0" stopColor={ORANGE} stopOpacity=".45" />
              <stop offset="1" stopColor={ORANGE} stopOpacity="0" />
            </radialGradient>
            <g id="am-bot">
              <circle r="14" fill="url(#am-glow)" />
              <rect x="-8" y="-7" width="16" height="14" rx="3.5" fill={ORANGE} />
              <rect x="-4.5" y="-3.5" width="7" height="7" rx="1.5" fill="#3a2200" opacity=".55" />
              <circle cx="6" cy="0" r="1.4" fill="#fff8e6" />
            </g>
          </defs>

          {/* storage pods */}
          {PODS.map(([x, y], i) => (
            <motion.use key={`${x}-${y}`} variants={pop(100 + i * 40)} href="#am-pod" x={x} y={y} />
          ))}

          {/* planned routes */}
          <motion.g variants={fade(1000)} fill="none" stroke="rgb(255 153 0 / .35)" strokeDasharray="2 5">
            <path d="M14 120 H226 V166 H14 Z" />
            <path d="M138 18 V262" />
          </motion.g>

          {/* drive units */}
          {ROBOTS.map((bot) => (
            <g key={bot.path} transform={`translate(${bot.start[0]} ${bot.start[1]})`}>
              <motion.g variants={fade(bot.delay)}>
                <use href="#am-bot" />
                {bot.carrying && (
                  <>
                    <rect x="-11" y="-11" width="22" height="22" rx="2" fill="rgb(255 153 0 / .12)" stroke="rgb(255 190 90 / .8)" />
                    <path d="M0 -11V11M-11 0H11" stroke="rgb(255 190 90 / .35)" />
                  </>
                )}
                {live && <animateMotion dur={bot.dur} repeatCount="indefinite" rotate="auto" path={bot.path} />}
              </motion.g>
            </g>
          ))}

          {/* model panel */}
          <motion.g variants={slideIn(1000, 10)}>
            <rect x="250" y="24" width="80" height="124" rx="6" fill="rgb(22 12 0 / .92)" stroke="rgb(255 153 0 / .4)" />
            <rect x="258" y="34" width="38" height="4" rx="2" fill={LABEL} opacity=".75" />
            <rect x="258" y="42" width="22" height="3" rx="1.5" fill={LABEL} opacity=".3" />
            <line x1="256" y1="52" x2="324" y2="52" stroke="rgb(255 153 0 / .25)" />
          </motion.g>
          <motion.path variants={fade(1400)} d={NET_EDGES} fill="none" stroke="rgb(255 153 0 / .3)" strokeWidth=".8" />
          <g fill={ORANGE}>
            {[...NET.input, ...NET.hidden, ...NET.output].map(([cx, cy], i) => (
              <motion.circle key={`${cx}-${cy}`} variants={pop(1150 + i * 40)} cx={cx} cy={cy} r={cx === 314 ? 3.4 : 3.1} />
            ))}
          </g>
          {live &&
            NET.output.map(([cx, cy]) => (
              <motion.circle
                key={`glow-${cy}`}
                cx={cx}
                cy={cy}
                r="7"
                fill="rgb(255 153 0 / .35)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.9, 0.3, 0.9] }}
                transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, delay: 1.6 }}
              />
            ))}
          <motion.rect variants={fade(1500)} x="262" y="134" width="58" height="3" rx="1.5" fill="rgb(255 153 0 / .15)" />
          <motion.rect variants={growX(1600)} style={ORIGIN_LEFT} x="262" y="134" width="58" height="3" rx="1.5" fill={AMBER} />

          {/* deploy link */}
          <g opacity=".7">
            <motion.path variants={draw(1900)} d={DEPLOY} fill="none" stroke={ORANGE} strokeWidth="1.1" />
          </g>
          {live && (
            <motion.circle r="2" fill="#ffd08a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
              <animateMotion dur="1.4s" repeatCount="indefinite" path={DEPLOY} />
            </motion.circle>
          )}

          {/* uptime panel */}
          <motion.g variants={slideIn(2000, 10)}>
            <rect x="250" y="158" width="80" height="96" rx="6" fill="rgb(22 12 0 / .92)" stroke="rgb(255 153 0 / .4)" />
            <rect x="258" y="168" width="30" height="4" rx="2" fill={LABEL} opacity=".75" />
            <rect x="258" y="176" width="20" height="3" rx="1.5" fill={LABEL} opacity=".3" />
            <line x1="260" y1="236" x2="322" y2="236" stroke="rgb(255 153 0 / .2)" />
            <line x1="260" y1="218" x2="322" y2="218" stroke="rgb(255 153 0 / .08)" />
          </motion.g>
          <motion.polygon variants={fade(2600)} points={`${UPTIME} 322,236 260,236`} fill="rgb(255 181 71 / .12)" />
          <motion.polyline variants={draw(2200)} points={UPTIME} fill="none" stroke={AMBER} strokeWidth="1.6" />
          <motion.circle variants={pop(2900)} cx="322" cy="202" r="2.6" fill="#34d399" />
          {live && (
            <motion.circle
              cx="322"
              cy="202"
              r="2.6"
              fill="none"
              stroke="#34d399"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0.7, 0], scale: [1, 2.2] }}
              transition={{ duration: 2.2, ease: "easeOut", repeat: Infinity, delay: 3.1 }}
            />
          )}
          <g opacity=".45">
            <motion.rect variants={fade(2800)} x="260" y="244" width="34" height="3" rx="1.5" fill={LABEL} />
          </g>
        </>
      )}
    </IllustrationFrame>
  );
}

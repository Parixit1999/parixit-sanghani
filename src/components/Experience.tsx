"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentType } from "react";
import { experience, type Experience as ExperienceItem, type ExperienceTheme, type Role } from "@/data/profile";
import { EASE } from "@/lib/motion";
import { AmazonIllustration } from "./illustrations/AmazonIllustration";
import { CrestIllustration } from "./illustrations/CrestIllustration";
import { MsmmIllustration } from "./illustrations/MsmmIllustration";
import { NebulaIllustration } from "./illustrations/NebulaIllustration";
import { Reveal, SectionHeading } from "./Reveal";
import { Spotlight } from "./Spotlight";

const ILLUSTRATIONS: Record<ExperienceTheme, ComponentType> = {
  msmm: MsmmIllustration,
  nebula: NebulaIllustration,
  amazon: AmazonIllustration,
  crest: CrestIllustration,
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const bullet: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function RoleBlock({ role, first }: { role: Role; first: boolean }) {
  return (
    <div className={first ? "" : "mt-5 border-t border-line pt-4"}>
      <p className="text-[0.92rem] text-muted">{role.title}</p>
      <p className="mb-4 mt-1 flex items-center font-mono text-xs text-dim">
        {role.current && <span aria-hidden="true" className="live-dot mr-2 inline-block h-[7px] w-[7px] rounded-full bg-emerald-400" />}
        {role.period} / {role.location}
      </p>
      <motion.ul
        className="grid list-disc gap-2 pl-[1.1rem] text-[0.92rem] leading-relaxed marker:text-white/40"
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {role.bullets.map((b) => (
          <motion.li key={b} data-reveal variants={bullet}>
            {b}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const Illustration = ILLUSTRATIONS[item.theme];
  return (
    <Reveal>
      <Spotlight
        className={`chapter theme-${item.theme} grid overflow-clip rounded-2xl border border-line bg-panel backdrop-blur-xl transition-colors duration-300 md:grid-cols-[340px_1fr]`}
      >
        <div className={`visual-${item.theme} relative border-b border-white/5 md:min-h-[280px] md:border-b-0 md:border-r`}>
          <Illustration />
        </div>
        <div className="px-6 py-6 sm:px-8">
          <h3 className="font-display text-xl font-semibold text-ink-strong">{item.company}</h3>
          {item.roles.map((role, i) => (
            <RoleBlock key={role.title} role={role} first={i === 0} />
          ))}
        </div>
      </Spotlight>
    </Reveal>
  );
}

export function ExperienceSection() {
  return (
    <section id="work" className="scroll-mt-20 pt-16">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="grid gap-6">
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </section>
  );
}

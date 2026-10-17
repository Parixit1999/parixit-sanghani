import { ExternalLink } from "lucide-react";
import { about, earlierWork, education, exploring, projects, skills } from "@/data/profile";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal, SectionHeading } from "./Reveal";
import { Spotlight } from "./Spotlight";

const CARD = "rounded-2xl border border-line bg-panel backdrop-blur-xl";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 pt-8">
      <SectionHeading>About</SectionHeading>
      <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
        <Reveal className={`${CARD} p-6 sm:p-8`}>
          <p className="text-[1.05rem] leading-relaxed text-ink">{about[0]}</p>
          <p className="mt-4 leading-relaxed text-muted">{about[1]}</p>
        </Reveal>
        <Reveal className={`${CARD} p-6 sm:p-8`} delay={0.1}>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">Currently Exploring</h3>
          <ul className="flex flex-wrap gap-2">
            {exploring.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[0.82rem] text-[#d6d1ff]"
              >
                {topic}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 pt-20">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.09}>
            <Spotlight
              className={`group flex h-full flex-col overflow-hidden ${CARD} transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_50px_rgb(0_0_0/0.45)]`}
            >
              <ProjectVisual kind={p.visual} />
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-ink-strong">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                      {p.title}
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="mb-3 mt-1 text-[0.78rem] text-muted">
                  {p.org}, {p.period}
                </p>
                <p className="mb-4 flex-1 text-[0.88rem] leading-relaxed">{p.description}</p>
                <p className="border-t border-line pt-3 font-mono text-[0.72rem] text-muted">{p.stack.join(", ")}</p>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-5 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-5 py-3.5 text-[0.85rem]">
        <span className="font-semibold text-ink-strong">Earlier work: </span>
        <span className="text-muted">{earlierWork.join(", ")}</span>
      </Reveal>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 pt-20">
      <SectionHeading>Technical Skills</SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.08} className={`${CARD} p-5`}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">{group.category}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.8rem] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 pt-20">
      <SectionHeading>Education</SectionHeading>
      <Reveal className={`${CARD} divide-y divide-white/5`}>
        {education.map((e) => (
          <div key={e.school} className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-strong">
                <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {e.school}
                </a>
              </h3>
              <p className="text-muted">{e.degree}</p>
            </div>
            <p className="font-mono text-xs text-dim">
              {e.period} / {e.location}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ExperienceEntry } from "@/content/resume";
import { BossCharacter } from "@/components/characters/BossCharacter";
import { getBossVariant } from "@/components/characters/character-map";
import { staggerChild } from "@/lib/motion";

type ExperienceListProps = {
  jobs: ExperienceEntry[];
};

export function ExperienceList({ jobs }: ExperienceListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-16 space-y-8">
      {jobs.map((job, i) => (
        <motion.article
          key={`${job.company}-${job.period}`}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          custom={i}
          variants={staggerChild}
          className="flex flex-col gap-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:flex-row sm:items-start"
        >
          <BossCharacter
            variant={getBossVariant(job.company)}
            size="md"
            className="mx-auto sm:mx-0"
          />

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--apple-blue)]">
                  Quest cleared
                </p>
                <h2 className="text-title font-semibold text-[var(--apple-black)]">
                  {job.company}
                </h2>
                <p className="text-lg text-foreground/80">{job.role}</p>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet.slice(0, 50)}
                  className="text-base leading-relaxed text-muted-foreground before:mr-2 before:text-[var(--apple-blue)] before:content-['▸']"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

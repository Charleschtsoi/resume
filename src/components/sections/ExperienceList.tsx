"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ExperienceEntry } from "@/content/resume";
import { staggerChild } from "@/lib/motion";

type ExperienceListProps = {
  jobs: ExperienceEntry[];
};

export function ExperienceList({ jobs }: ExperienceListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-16 space-y-12">
      {jobs.map((job, i) => (
        <motion.article
          key={`${job.company}-${job.period}`}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          custom={i}
          variants={staggerChild}
          className="border-b border-border pb-12 last:border-0"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
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
                className="text-base leading-relaxed text-muted-foreground before:mr-2 before:text-[var(--apple-blue)] before:content-['•']"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

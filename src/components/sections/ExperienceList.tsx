"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ExperienceEntry } from "@/content/resume";
import { getExperienceQuest } from "@/content/game-theme";
import { QuestLevel } from "@/components/game/QuestLevel";
import { staggerChild } from "@/lib/motion";

type ExperienceListProps = {
  jobs: ExperienceEntry[];
};

export function ExperienceList({ jobs }: ExperienceListProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-16 space-y-8">
      {jobs.map((job, i) => {
        const quest = getExperienceQuest(job.company);
        return (
          <motion.article
            key={`${job.company}-${job.period}`}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            custom={i}
            variants={staggerChild}
            className="game-card-light rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <QuestLevel level={quest.level} active={i === 0} />
                <div>
                  <p className="font-game text-[9px] tracking-widest text-[var(--game-gold)] uppercase">
                    Quest {quest.level}: {quest.questTitle}
                  </p>
                  <h2 className="mt-2 text-title font-semibold text-[var(--apple-black)]">
                    {job.company}
                  </h2>
                  <p className="text-lg text-foreground/80">{job.role}</p>
                </div>
              </div>
              <p className="shrink-0 font-game text-[9px] tracking-wider text-muted-foreground uppercase">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-6 space-y-3 border-t border-[var(--game-border)]/30 pt-6">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet.slice(0, 50)}
                  className="text-base leading-relaxed text-muted-foreground before:mr-2 before:text-[var(--game-cyan)] before:content-['▸']"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
}

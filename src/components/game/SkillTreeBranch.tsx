"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SkillBranch } from "@/content/skills-game";
import { branchMastery } from "@/content/skills-game";
import { SkillAbilityCard } from "@/components/game/SkillAbilityCard";
import { XPBar } from "@/components/game/XPBar";

type SkillTreeBranchProps = {
  branch: SkillBranch;
  index: number;
};

export function SkillTreeBranch({ branch, index }: SkillTreeBranchProps) {
  const reduceMotion = useReducedMotion();
  const mastery = branchMastery(branch);

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="game-skill-branch rounded-2xl p-6 md:p-8"
      aria-labelledby={`branch-${branch.id}`}
    >
      <div className="flex items-start gap-4">
        <span className="game-skill-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
          {branch.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-game text-[9px] tracking-widest text-[var(--game-cyan)] uppercase">
            {branch.branchLabel}
          </p>
          <h2
            id={`branch-${branch.id}`}
            className="mt-1 text-lg font-semibold text-[var(--apple-black)]"
          >
            {branch.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{branch.description}</p>
          <div className="mt-4 max-w-xs">
            <XPBar value={mastery} label="Branch mastery" color="cyan" />
          </div>
        </div>
      </div>

      <ul className="mt-6 space-y-3" role="list" aria-label={`${branch.title} abilities`}>
        {branch.abilities.map((ability, i) => (
          <SkillAbilityCard key={ability.name} ability={ability} index={i} />
        ))}
      </ul>
    </motion.section>
  );
}

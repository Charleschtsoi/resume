"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  certificationBadges,
  educationQuests,
  overallMastery,
  skillBranches,
} from "@/content/skills-game";
import { currentOccupation, currentPlayerLevel } from "@/content/game-theme";
import { CertBadge } from "@/components/game/CertBadge";
import { EducationQuestCard } from "@/components/game/EducationQuestCard";
import { SkillTreeBranch } from "@/components/game/SkillTreeBranch";
import { XPBar } from "@/components/game/XPBar";
import { fadeInView } from "@/lib/motion";

export function SkillsGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInView}
        className="game-hud mt-10 rounded-xl p-6"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-game text-[10px] tracking-widest text-[var(--game-gold)] uppercase">
              Character Sheet
            </p>
            <p className="mt-1 text-sm text-[var(--apple-gray-300)]">
              Level {currentPlayerLevel} · {currentOccupation}
            </p>
          </div>
          <div className="font-game text-right text-2xl text-[var(--game-gold)]">
            {overallMastery}%
            <p className="text-[9px] tracking-wider text-[var(--game-cyan)] uppercase">
              Total mastery
            </p>
          </div>
        </div>
        <div className="mt-4">
          <XPBar value={overallMastery} label="Overall skill XP" color="gold" />
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInView}
        className="mt-12"
      >
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase">
          Skill Tree
        </p>
        <h2 className="mt-2 text-title font-semibold text-[var(--apple-black)]">
          Four branches. One loadout.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Hover abilities to see mastery tiers — built from 14 years of enterprise delivery since 2012.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skillBranches.map((branch, i) => (
          <SkillTreeBranch key={branch.id} branch={branch} index={i} />
        ))}
      </div>

      <motion.section
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInView}
        className="mt-16"
        aria-labelledby="education-quests"
      >
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase">
          Education Quests
        </p>
        <h2 id="education-quests" className="mt-2 text-title font-semibold text-[var(--apple-black)]">
          Learning never stops.
        </h2>
        <div className="mt-6 space-y-4">
          {educationQuests.map((quest) => (
            <EducationQuestCard key={quest.school} quest={quest} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInView}
        className="mt-16"
        aria-labelledby="cert-badges"
      >
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase">
          Badges Unlocked
        </p>
        <h2 id="cert-badges" className="mt-2 text-title font-semibold text-[var(--apple-black)]">
          {certificationBadges.length} certifications earned.
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificationBadges.map((badge) => (
            <CertBadge key={badge.name} badge={badge} />
          ))}
        </ul>
      </motion.section>
    </>
  );
}

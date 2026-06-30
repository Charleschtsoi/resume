"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SkillAbility } from "@/content/skills-game";
import { XPBar } from "@/components/game/XPBar";

const tierColors: Record<NonNullable<SkillAbility["tier"]>, string> = {
  common: "text-[var(--apple-gray-400)]",
  rare: "text-[var(--game-cyan)]",
  epic: "text-[var(--game-purple)]",
  legendary: "text-[var(--game-gold)]",
};

const tierLabels: Record<NonNullable<SkillAbility["tier"]>, string> = {
  common: "Common",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
};

type SkillAbilityCardProps = {
  ability: SkillAbility;
  index: number;
};

export function SkillAbilityCard({ ability, index }: SkillAbilityCardProps) {
  const reduceMotion = useReducedMotion();
  const tier = ability.tier ?? "common";

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="game-skill-ability rounded-lg px-4 py-3"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-[var(--apple-black)]">
          {ability.name}
        </span>
        <span className={`font-game text-[8px] tracking-wider uppercase ${tierColors[tier]}`}>
          {tierLabels[tier]}
        </span>
      </div>
      <div className="mt-2">
        <XPBar
          value={ability.mastery}
          color={tier === "legendary" ? "gold" : tier === "epic" ? "cyan" : "green"}
        />
      </div>
    </motion.li>
  );
}

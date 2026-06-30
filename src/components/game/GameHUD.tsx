"use client";

import { motion, useReducedMotion } from "motion/react";
import { heroStats } from "@/content/homepage";
import { XPBar } from "@/components/game/XPBar";

export function GameHUD() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="game-hud mx-auto mt-10 max-w-lg rounded-lg p-4 text-left"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-game text-[10px] tracking-widest text-[var(--game-gold)] uppercase">
            Player Status
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Solutions Architect
          </p>
        </div>
        <div className="text-right">
          <p className="font-game text-[10px] tracking-widest text-[var(--game-cyan)] uppercase">
            Level
          </p>
          <p className="font-game text-2xl text-[var(--game-gold)]">12</p>
        </div>
      </div>

      <div className="mt-4">
        <XPBar value={92} label="Career XP" color="gold" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {heroStats.map((stat) => (
          <div key={stat.label} className="game-stat-pill rounded px-2 py-2 text-center">
            <p className="font-game text-[8px] tracking-wider text-[var(--game-cyan)] uppercase">
              {stat.gameLabel}
            </p>
            <p className="font-game text-sm text-[var(--game-gold)]">
              {stat.value}
              {stat.suffix}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

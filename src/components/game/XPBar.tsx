"use client";

import { motion, useReducedMotion } from "motion/react";

type XPBarProps = {
  value: number;
  max?: number;
  label?: string;
  color?: "cyan" | "gold" | "green";
  className?: string;
};

const colorMap = {
  cyan: "from-[var(--game-cyan)] to-[var(--game-blue)]",
  gold: "from-[var(--game-gold)] to-[var(--game-orange)]",
  green: "from-[var(--game-green)] to-[var(--game-cyan)]",
};

export function XPBar({
  value,
  max = 100,
  label,
  color = "cyan",
  className = "",
}: XPBarProps) {
  const reduceMotion = useReducedMotion();
  const pct = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="font-game text-[10px] tracking-wider text-[var(--game-cyan)] uppercase">
            {label}
          </span>
          <span className="font-mono text-[10px] text-[var(--apple-gray-400)]">
            {pct}%
          </span>
        </div>
      )}
      <div className="game-xp-track h-3 overflow-hidden rounded-sm">
        <motion.div
          className={`game-xp-fill h-full bg-gradient-to-r ${colorMap[color]}`}
          initial={reduceMotion ? { width: `${pct}%` } : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

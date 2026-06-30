"use client";

import { motion, useReducedMotion } from "motion/react";
import type { BossVariant } from "@/components/characters/character-map";
import { cn } from "@/lib/utils";

type BossCharacterProps = {
  variant: BossVariant;
  className?: string;
  size?: "sm" | "md";
};

const sizeMap = {
  sm: 64,
  md: 88,
};

function BossSvg({ variant }: { variant: BossVariant }) {
  const base = (
    <>
      {/* Body */}
      <ellipse cx="50" cy="62" rx="22" ry="20" fill="#1d1d1f" />
      {/* Head */}
      <circle cx="50" cy="38" r="16" fill="#e8c4a0" />
      {/* Eyes */}
      <circle cx="44" cy="36" r="2.5" fill="#1d1d1f" />
      <circle cx="56" cy="36" r="2.5" fill="#1d1d1f" />
      {/* Frown */}
      <path d="M44 44 Q50 40 56 44" stroke="#1d1d1f" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );

  switch (variant) {
    case "airport":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Control tower crown */}
          <rect x="38" y="8" width="24" height="18" rx="2" fill="var(--apple-blue)" />
          <rect x="44" y="4" width="12" height="6" rx="1" fill="#1d1d1f" />
          <line x1="50" y1="26" x2="50" y2="22" stroke="#1d1d1f" strokeWidth="2" />
          {base}
          {/* Briefcase */}
          <rect x="62" y="58" width="18" height="12" rx="2" fill="var(--apple-blue)" opacity="0.7" />
          <line x1="68" y1="58" x2="68" y2="54" stroke="var(--apple-blue)" strokeWidth="2" />
        </svg>
      );
    case "tech":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sleek horned helm */}
          <path d="M30 28 L38 8 L50 18 L62 8 L70 28 Z" fill="#1d1d1f" />
          <rect x="32" y="24" width="36" height="8" rx="2" fill="#6e6e73" />
          {base}
          {/* Apple-like minimal glow */}
          <circle cx="50" cy="38" r="18" stroke="var(--apple-blue)" strokeWidth="1" opacity="0.3" fill="none" />
        </svg>
      );
    case "arena":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stadium helm */}
          <path d="M28 30 Q50 10 72 30 L68 38 Q50 22 32 38 Z" fill="#1d1d1f" />
          <rect x="30" y="32" width="40" height="6" rx="1" fill="var(--apple-blue)" />
          {base}
          {/* Shield badge */}
          <path d="M50 55 L42 62 L50 72 L58 62 Z" fill="var(--apple-blue)" opacity="0.6" />
        </svg>
      );
    case "airline":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Winged crest */}
          <path d="M20 32 L38 28 L50 20 L62 28 L80 32 L62 36 L50 28 L38 36 Z" fill="var(--apple-blue)" opacity="0.8" />
          <path d="M32 24 L50 14 L68 24" stroke="#1d1d1f" strokeWidth="2" fill="none" />
          {base}
        </svg>
      );
    case "corporate":
    default:
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Suit shoulders */}
          <path d="M22 58 L38 48 L50 52 L62 48 L78 58 L72 80 L28 80 Z" fill="#2d2d2f" />
          {/* Tie */}
          <path d="M48 52 L50 72 L52 52 Z" fill="var(--apple-blue)" />
          {/* Crown */}
          <path d="M36 22 L42 10 L50 18 L58 10 L64 22 Z" fill="#1d1d1f" />
          {base}
        </svg>
      );
  }
}

export function BossCharacter({ variant, className, size = "md" }: BossCharacterProps) {
  const reduceMotion = useReducedMotion();
  const dim = sizeMap[size];

  const svg = (
    <div style={{ width: dim, height: dim }} aria-hidden role="presentation">
      <BossSvg variant={variant} />
    </div>
  );

  if (reduceMotion) {
    return (
      <div className={cn("pointer-events-none shrink-0 select-none", className)}>
        {svg}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("pointer-events-none shrink-0 select-none", className)}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.06, rotate: -2 }}
    >
      <motion.div
        className="rounded-full"
        whileHover={{
          boxShadow: "0 0 20px rgba(0, 113, 227, 0.25)",
        }}
      >
        {svg}
      </motion.div>
    </motion.div>
  );
}

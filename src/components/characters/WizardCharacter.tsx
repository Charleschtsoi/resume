"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type WizardCharacterProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeMap = {
  sm: 72,
  md: 110,
};

export function WizardCharacter({ className, size = "md" }: WizardCharacterProps) {
  const reduceMotion = useReducedMotion();
  const dim = sizeMap[size];

  const svg = (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      role="presentation"
    >
      {/* Robe */}
      <path
        d="M35 55 L50 95 L65 55 Z"
        fill="var(--apple-blue)"
        opacity="0.85"
      />
      {/* Body */}
      <ellipse cx="50" cy="52" rx="14" ry="16" fill="#1d1d1f" />
      {/* Head */}
      <circle cx="50" cy="32" r="12" fill="#f5c9a0" />
      {/* Hat */}
      <path d="M32 30 L50 8 L68 30 Z" fill="#1d1d1f" />
      <rect x="30" y="28" width="40" height="5" rx="2" fill="#1d1d1f" />
      {/* Beard */}
      <path d="M42 38 Q50 48 58 38" stroke="#d4a574" strokeWidth="3" fill="none" />
      {/* Staff */}
      <line x1="72" y1="20" x2="72" y2="75" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
      {/* Sparkle */}
      <motion.g
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }
        }
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "78px 18px" }}
      >
        <path
          d="M78 12 L80 18 L86 18 L81 22 L83 28 L78 24 L73 28 L75 22 L70 18 L76 18 Z"
          fill="var(--apple-blue)"
        />
      </motion.g>
      {/* Eyes */}
      <circle cx="46" cy="31" r="1.5" fill="#1d1d1f" />
      <circle cx="54" cy="31" r="1.5" fill="#1d1d1f" />
    </svg>
  );

  if (reduceMotion) {
    return (
      <div className={cn("pointer-events-none select-none", className)}>{svg}</div>
    );
  }

  return (
    <motion.div
      className={cn("pointer-events-none select-none", className)}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ rotate: [0, -3, 3, 0] }}
    >
      {svg}
    </motion.div>
  );
}

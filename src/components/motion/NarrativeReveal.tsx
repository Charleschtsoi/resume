"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeInView, staggerChild } from "@/lib/motion";

type NarrativeRevealProps = {
  paragraphs: string[];
  highlights?: string[];
  className?: string;
  variant?: "dark" | "light";
};

const variantStyles = {
  dark: {
    paragraph: "text-[var(--apple-gray-300)]",
    highlight: "text-[var(--apple-gray-100)]",
    border: "border-white/15",
  },
  light: {
    paragraph: "text-muted-foreground",
    highlight: "text-[var(--apple-black)]/90",
    border: "border-border",
  },
};

export function NarrativeReveal({
  paragraphs,
  highlights,
  className = "",
  variant = "light",
}: NarrativeRevealProps) {
  const reduceMotion = useReducedMotion();
  const styles = variantStyles[variant];

  if (reduceMotion) {
    return (
      <div className={`space-y-6 ${className}`}>
        {paragraphs.map((p) => (
          <p
            key={p.slice(0, 40)}
            className={`text-lg leading-relaxed md:text-xl ${styles.paragraph}`}
          >
            {p}
          </p>
        ))}
        {highlights && highlights.length > 0 && (
          <ul className={`mt-8 space-y-3 border-t pt-8 ${styles.border}`}>
            {highlights.map((h) => (
              <li
                key={h}
                className={`text-base before:mr-2 before:font-semibold before:text-[var(--apple-blue)] before:content-['•'] md:text-lg ${styles.highlight}`}
              >
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {paragraphs.map((p, i) => (
        <motion.p
          key={p.slice(0, 40)}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerChild}
          className={`text-lg leading-relaxed md:text-xl ${styles.paragraph}`}
        >
          {p}
        </motion.p>
      ))}
      {highlights && highlights.length > 0 && (
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={fadeInView}
          className={`mt-8 space-y-3 border-t pt-8 ${styles.border}`}
        >
          {highlights.map((h, i) => (
            <motion.li
              key={h}
              custom={i + paragraphs.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChild}
              className={`text-base before:mr-2 before:font-semibold before:text-[var(--apple-blue)] before:content-['•'] md:text-lg ${styles.highlight}`}
            >
              {h}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

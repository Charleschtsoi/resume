"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeInView } from "@/lib/motion";

type PageHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageHeader({ label, title, subtitle, children }: PageHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <header>
      <motion.p
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={fadeInView}
        className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase"
      >
        {label}
      </motion.p>
      <motion.h1
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={fadeInView}
        className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeInView}
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </header>
  );
}

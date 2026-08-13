"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/resume";
import { nowBuilding, heroStats } from "@/content/homepage";
import { Button } from "@/components/ui/button";
import { easeApple } from "@/lib/motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.08, duration: 0.6, ease: easeApple },
  }),
};

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const nameWords = profile.name.split(" ");

  return (
    <section
      id="hero"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--apple-gray-100)] px-6 pt-28 pb-16 text-[var(--apple-black)] md:px-12 md:pt-36 md:pb-20"
    >
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${reduceMotion ? "" : "hero-gradient-pulse"}`}
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,113,227,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeApple }}
          className="section-label"
        >
          {profile.title}
        </motion.p>

        <h1 className="mt-4 text-display font-semibold tracking-tight">
          {reduceMotion ? (
            profile.name
          ) : (
            <span className="inline-flex flex-wrap justify-center gap-x-3">
              {nameWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          )}
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground"
        >
          {nowBuilding.body}
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 text-sm text-[var(--apple-gray-400)]"
        >
          {heroStats.map((s) => `${s.value}${s.suffix ?? ""} ${s.label}`).join(" · ")}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-[var(--apple-blue)] px-8 font-medium text-white hover:bg-[var(--apple-blue-hover)]"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download resume
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-6"
        >
          <Link
            href="/story?present=1"
            className="text-sm text-[var(--apple-blue)] transition hover:underline"
          >
            Present full story →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

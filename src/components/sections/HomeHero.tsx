"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/resume";
import { GameHUD } from "@/components/game/GameHUD";
import { Button } from "@/components/ui/button";
import { easeApple } from "@/lib/motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.6, ease: easeApple },
  }),
};

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const nameWords = profile.name.split(" ");

  return (
    <section
      id="hero"
      className="game-section-dark game-scanlines relative scroll-mt-20 overflow-hidden px-6 pt-28 pb-20 text-[var(--apple-gray-100)] md:px-12 md:pt-36 md:pb-28"
    >
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${reduceMotion ? "" : "hero-gradient-pulse"}`}
      >
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(180,140,255,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeApple }}
          className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase md:text-xs"
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
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--apple-gray-300)] md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <GameHUD />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="game-pixel-border bg-[var(--game-cyan)] px-8 font-semibold text-[var(--game-bg)] hover:bg-[var(--game-green)]"
          >
            <Link href="/contact">Start Quest →</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--game-border)] bg-transparent text-white hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10"
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download resume
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/story?present=1"
            className="font-game text-[10px] tracking-wider text-[var(--game-gold)] transition hover:text-[var(--game-green)]"
          >
            ▶ Present full story
          </Link>
          <span className="hidden text-[var(--apple-gray-600)] sm:inline">·</span>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-mini-game"))}
            className="font-game text-[10px] tracking-wider text-[var(--game-cyan)] transition hover:text-[var(--game-green)]"
          >
            ▶ Play mini-game
          </button>
        </motion.p>
      </div>
    </section>
  );
}

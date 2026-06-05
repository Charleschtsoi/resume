"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/resume";
import { heroStats } from "@/content/homepage";
import { CountUp } from "@/components/motion/CountUp";
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
      className="relative scroll-mt-20 overflow-hidden bg-[var(--apple-black)] px-6 pt-28 pb-20 text-[var(--apple-gray-100)] md:px-12 md:pt-36 md:pb-28"
    >
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${reduceMotion ? "" : "hero-gradient-pulse"}`}
      >
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,113,227,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeApple }}
          className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]"
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

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-[var(--apple-gray-400)] md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-[var(--apple-blue)] px-8 text-white hover:bg-[var(--apple-blue-hover)]"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--apple-gray-400)] bg-transparent text-white hover:bg-white/10"
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

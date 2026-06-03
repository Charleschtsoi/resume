"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import type { NarrativeChapter } from "@/content/resume";
import { profile } from "@/content/resume";
import { githubBridge } from "@/content/github-work";
import { NarrativeReveal } from "@/components/motion/NarrativeReveal";
import { ScrollChapter } from "@/components/motion/ScrollChapter";
import { MetricStrip } from "@/components/sections/MetricStrip";
import { usePresenterMode } from "@/lib/presenter-mode";

type ChapterSectionProps = {
  chapter: NarrativeChapter;
};

export function HeroSection({ chapter }: { chapter: NarrativeChapter }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { heroHeightClass, disableScrollEffects } = usePresenterMode();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const headlineScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const skipHeroMotion = reduceMotion || disableScrollEffects;

  return (
    <section
      id={chapter.id}
      ref={ref}
      aria-labelledby={`${chapter.id}-heading`}
      className={`relative scroll-mt-20 ${heroHeightClass} snap-start snap-always bg-[var(--apple-black)] text-[var(--apple-gray-100)]`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,113,227,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--apple-black)_100%)]" />
      </div>

      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-6 md:px-12">
        <div className="relative z-10 mx-auto w-full max-w-[980px]">
          <p className="text-center text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)] md:text-base">
            {profile.presenterHeadline}
          </p>
          <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-center text-lg text-[var(--apple-gray-300)] md:text-xl">
            {profile.proofLine}
          </p>
          <p className="mt-2 text-center text-base text-[var(--apple-gray-400)]">
            {profile.interviewerSubline}
          </p>

          {skipHeroMotion ? (
            <>
              <h2
                id={`${chapter.id}-heading`}
                className="text-display mt-12 text-center font-semibold tracking-tight text-balance"
              >
                {chapter.headline}
              </h2>
              <p className="mt-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-[var(--apple-blue)]">
                {chapter.subheadline}
              </p>
              {chapter.openingLine && (
                <p className="speaker-note mt-8 text-left text-base italic text-[var(--apple-gray-400)] md:text-lg">
                  {chapter.openingLine}
                </p>
              )}
              <div className="mt-8 text-left">
                <NarrativeReveal paragraphs={chapter.paragraphs} variant="dark" />
              </div>
            </>
          ) : (
            <>
              <motion.h2
                id={`${chapter.id}-heading`}
                style={{ scale: headlineScale, opacity: headlineOpacity }}
                className="text-display mt-12 text-center font-semibold tracking-tight text-balance"
              >
                {chapter.headline}
              </motion.h2>
              <motion.p
                style={{ opacity: subOpacity }}
                className="mt-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-[var(--apple-blue)]"
              >
                {chapter.subheadline}
              </motion.p>
              {chapter.openingLine && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="speaker-note mt-8 text-left text-base italic text-[var(--apple-gray-400)] md:text-lg"
                >
                  {chapter.openingLine}
                </motion.p>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 text-left"
              >
                <NarrativeReveal paragraphs={chapter.paragraphs} variant="dark" />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function ChapterSection({ chapter }: ChapterSectionProps) {
  const mutedClass =
    chapter.theme === "dark"
      ? "text-[var(--apple-gray-300)]"
      : "text-muted-foreground";

  return (
    <ScrollChapter id={chapter.id} theme={chapter.theme}>
      <div className="space-y-4">
        {chapter.period && (
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
            {chapter.period}
          </p>
        )}
        <h2
          id={`${chapter.id}-heading`}
          className="text-headline font-semibold tracking-tight text-balance"
        >
          {chapter.headline}
        </h2>
        {chapter.subheadline && (
          <p className={`text-xl md:text-2xl ${mutedClass}`}>{chapter.subheadline}</p>
        )}
      </div>
      {chapter.metrics && chapter.metrics.length > 0 && (
        <MetricStrip metrics={chapter.metrics} variant={chapter.theme} />
      )}
      <div className="mt-12">
        <NarrativeReveal
          paragraphs={chapter.paragraphs}
          highlights={chapter.highlights}
          variant={chapter.theme}
        />
        {chapter.id === "aahk" && (
          <p className="mt-8">
            <Link
              href={githubBridge.href}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--apple-blue)]/50 bg-[var(--apple-blue)]/10 px-4 py-2 text-sm font-medium text-[var(--apple-blue)] transition hover:bg-[var(--apple-blue)]/20"
            >
              Curated GitHub → Work
            </Link>
          </p>
        )}
      </div>
    </ScrollChapter>
  );
}

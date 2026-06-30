"use client";

import Link from "next/link";
import { narrativeChapters, profile } from "@/content/resume";
import { ProgressRail } from "@/components/motion/ProgressRail";
import {
  HeroSection,
  ChapterSection,
} from "@/components/sections/ChapterSection";
import { RoleFitSection } from "@/components/sections/RoleFitSection";
import { Button } from "@/components/ui/button";
import { usePresenterMode } from "@/lib/presenter-mode";

export default function StoryPage() {
  const hero = narrativeChapters[0];
  const chapters = narrativeChapters.slice(1);
  const { isPresenterMode } = usePresenterMode();

  return (
    <main
      id="main-content"
      className={isPresenterMode ? "snap-y snap-mandatory pb-24" : undefined}
    >
      <ProgressRail />
      {hero && <HeroSection chapter={hero} />}

      {chapters.map((chapter) => (
        <ChapterSection key={chapter.id} chapter={chapter} />
      ))}

      <RoleFitSection />

      <section className="game-section-dark scroll-mt-20 px-6 py-24 text-center text-[var(--apple-gray-100)] md:px-12 md:py-32">
        <div className="mx-auto max-w-[720px]">
          <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase">
            Campaign Complete
          </p>
          <h2 className="mt-4 text-headline font-semibold tracking-tight">
            Let&apos;s connect.
          </h2>
          <p className="mt-6 text-lg text-[var(--apple-gray-300)] md:text-xl">
            {profile.ctaTagline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </section>
    </main>
  );
}

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

      <section className="scroll-mt-20 bg-[var(--apple-black)] px-6 py-24 text-center text-[var(--apple-gray-100)] md:px-12 md:py-32">
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-headline font-semibold tracking-tight">
            Let&apos;s connect.
          </h2>
          <p className="mt-6 text-lg text-[var(--apple-gray-300)] md:text-xl">
            {profile.ctaTagline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </section>
    </main>
  );
}

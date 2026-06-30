import type { Metadata } from "next";
import Link from "next/link";
import { experience, profile } from "@/content/resume";
import { currentOccupation, currentPlayerLevel } from "@/content/game-theme";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
  description: "Professional experience across Apple, AAHK, HKJC, Accenture, Cathay Pacific, and more.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <PageHeader label="Quest Log" title="14 years. One campaign." subtitle={profile.tagline}>
          <div className="game-hud mt-8 inline-flex flex-wrap items-center gap-3 rounded-lg px-4 py-3">
            <span className="font-game text-[10px] tracking-wider text-[var(--game-cyan)] uppercase">
              {experience.length} quests completed
            </span>
            <span className="hidden text-[var(--game-border)] sm:inline">|</span>
            <span className="font-game text-[10px] tracking-wider text-[var(--game-gold)] uppercase">
              Level {currentPlayerLevel} · {currentOccupation}
            </span>
          </div>
        </PageHeader>

        <ExperienceList jobs={experience} />

        <div className="mt-16 flex flex-wrap gap-4">
          <Button asChild variant="outline" className="border-[var(--game-border)]">
            <Link href="/story" className="font-game text-[10px] tracking-wider uppercase">
              ▶ Read full story
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-[var(--game-border)]">
            <Link href="/work" className="font-game text-[10px] tracking-wider uppercase">
              ▶ View achievements
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

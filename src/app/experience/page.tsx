import type { Metadata } from "next";
import Link from "next/link";
import { experience, profile } from "@/content/resume";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
  description: "Professional experience across Apple, AAHK, HKJC, Accenture, Cathay Pacific, and more.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
          Quest Log
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          12+ years. One campaign.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="game-hud mt-8 inline-flex items-center gap-3 rounded-lg px-4 py-3">
          <span className="font-game text-[10px] tracking-wider text-[var(--game-cyan)] uppercase">
            {experience.length} quests completed
          </span>
          <span className="text-[var(--game-border)]">|</span>
          <span className="font-game text-[10px] tracking-wider text-[var(--game-gold)] uppercase">
            Level 12 active
          </span>
        </div>

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

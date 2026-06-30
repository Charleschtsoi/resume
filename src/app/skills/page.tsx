import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/resume";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
  description:
    "Skill tree — AI, machine learning, app development, architecture, and certifications.",
};

export default function SkillsPage() {
  return (
    <main
      id="main-content"
      className="game-section-dark min-h-screen pt-24 pb-16 text-[var(--apple-gray-100)]"
    >
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase">
          Skill Tree
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight">
          Character abilities.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--apple-gray-300)]">
          AI, machine learning, and app development — mapped as a skill tree with mastery levels,
          education quests, and certification badges.
        </p>

        <SkillsGrid />

        <div className="mt-16 flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-[var(--game-cyan)] text-[var(--game-bg)] hover:bg-[var(--game-green)]"
          >
            <Link href="/work" className="font-game text-[10px] tracking-wider uppercase">
              ▶ View achievements
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--game-border)] bg-transparent text-white hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 hover:text-white"
          >
            <Link href="/contact" className="font-game text-[10px] tracking-wider uppercase">
              ▶ Open to projects
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

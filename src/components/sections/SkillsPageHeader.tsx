"use client";

import { WizardCharacter } from "@/components/characters/WizardCharacter";

export function SkillsPageHeader() {
  return (
    <div className="relative">
      <div className="md:pr-32">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Skills & Education
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          Technical credibility.
        </h1>
        <p className="mt-3 max-w-xl text-lg text-muted-foreground">
          Skill tree — tools forged over 12+ years.
        </p>
      </div>

      <WizardCharacter
        size="sm"
        className="mx-auto mt-6 md:absolute md:top-0 md:right-0 md:mt-0 md:mx-0"
      />
    </div>
  );
}

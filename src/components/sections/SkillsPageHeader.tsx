"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { WizardCharacter } from "@/components/characters/WizardCharacter";
import { profile } from "@/content/resume";

export function SkillsPageHeader() {
  return (
    <div className="relative">
      <PageHeader
        label="Inventory"
        title="Technical credibility."
        subtitle={`Skill tree — tools forged over ${profile.yearsExperience}+ years.`}
      />
      <WizardCharacter
        size="sm"
        className="mx-auto mt-6 md:absolute md:top-0 md:right-0 md:mt-0 md:mx-0"
      />
    </div>
  );
}

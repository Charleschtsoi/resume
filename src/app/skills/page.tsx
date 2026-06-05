import type { Metadata } from "next";
import {
  skillCategories,
  certifications,
  education,
  profile,
} from "@/content/resume";
import { SkillsGrid } from "@/components/sections/SkillsGrid";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
  description: "Technical skills, certifications, and education.",
};

export default function SkillsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Skills & Education
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          Technical credibility.
        </h1>

        <SkillsGrid
          categories={skillCategories}
          education={education}
          certifications={certifications}
        />
      </div>
    </main>
  );
}

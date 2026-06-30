import type { Metadata } from "next";
import { experience, profile } from "@/content/resume";
import { ExperienceList } from "@/components/sections/ExperienceList";

export const metadata: Metadata = {
  title: `Quest Log — ${profile.name}`,
  description: "Career quest log across Apple, AAHK, HKJC, Accenture, Cathay Pacific, and more.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Quest Log
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          Boss battles cleared.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {profile.tagline}
        </p>

        <ExperienceList jobs={experience} />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { experience, profile } from "@/content/resume";
import { currentOccupation } from "@/content/game-theme";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
  description:
    "Career timeline across Apple, AAHK, HKJC, Accenture, Cathay Pacific, and more.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <PageHeader
          label="Experience"
          title="Career timeline."
          subtitle={profile.tagline}
        >
          <p className="mt-6 text-sm text-muted-foreground">
            {experience.length} roles · Currently {currentOccupation}
          </p>
        </PageHeader>

        <ExperienceList jobs={experience} />

        <div className="mt-16 flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/story">Read full story →</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/work">View selected work →</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

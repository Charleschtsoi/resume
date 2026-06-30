import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/resume";
import {
  featuredProjects,
  githubProfileUrl,
  githubWorkIntro,
  optionalProjects,
  type WorkPillar,
} from "@/content/github-work";
import { WorkPillarSection } from "@/components/work/WorkPillarSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Work — ${profile.name}`,
  description:
    "Curated projects in AI, machine learning, and app development — open to collaborations.",
};

const pillarOrder: WorkPillar[] = ["ai", "product", "rigour"];

export default function WorkPage() {
  const byPillar = (pillar: WorkPillar) =>
    featuredProjects.filter((p) => p.pillar === pillar);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <PageHeader
          label="Achievements Unlocked"
          title={githubWorkIntro.title}
          subtitle={githubWorkIntro.subtitle}
        />

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {githubWorkIntro.framingParagraph}
        </p>

        <div className="mt-6">
          <Button
            asChild
            variant="outline"
            className="border-[var(--game-border)] font-game text-[10px] tracking-wider uppercase"
          >
            <Link href="/showcase">▶ See live deployments</Link>
          </Button>
        </div>

        <div className="game-card-light mt-8 rounded-2xl p-6 md:p-8">
          <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
            Opening line
          </p>
          <p className="speaker-note mt-3 text-base italic text-muted-foreground">
            {githubWorkIntro.openingScript}
          </p>
        </div>

        {pillarOrder.map((pillar) => (
          <WorkPillarSection
            key={pillar}
            pillar={pillar}
            projects={byPillar(pillar)}
          />
        ))}

        <section className="mt-16" aria-labelledby="optional-projects">
          <h2
            id="optional-projects"
            className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase"
          >
            Side quests
          </h2>
          <p className="mt-2 text-lg font-semibold text-[var(--apple-black)]">
            If time or questions allow
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {optionalProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="game-card-light mt-16 rounded-2xl p-8">
          <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
            Closing line
          </p>
          <p className="speaker-note mt-3 text-base italic text-muted-foreground">
            {githubWorkIntro.closingScript}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Short on time? Show <strong>LungLens</strong> +{" "}
            <strong>Product Tax Deduction Log</strong>, then link to full profile.
          </p>
        </section>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
          <Button
            asChild
            size="lg"
            className="game-pixel-border bg-[var(--game-cyan)] font-semibold text-[var(--game-bg)] hover:bg-[var(--game-green)]"
          >
            <Link
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View all repositories on GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[var(--game-border)]">
            <Link href="/" className="font-game text-[10px] tracking-wider uppercase">
              ▶ Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[var(--game-border)]">
            <Link href="/experience" className="font-game text-[10px] tracking-wider uppercase">
              ▶ Quest log
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

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
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Work — ${profile.name}`,
  description:
    "Curated GitHub projects — AI agents, product delivery, regulated rigour.",
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
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          GitHub · Curated
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          {githubWorkIntro.title}
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">
          {githubWorkIntro.subtitle}
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {githubWorkIntro.framingParagraph}
        </p>

        <div className="mt-6">
          <Button asChild variant="outline">
            <Link href="/showcase">See live deployments → Showcase</Link>
          </Button>
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--apple-blue)]/30 bg-white p-6 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--apple-blue)]">
            Opening line (15s)
          </p>
          <p className="speaker-note mt-2 text-base italic text-muted-foreground">
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
            className="text-lg font-semibold text-[var(--apple-black)]"
          >
            If time or questions allow
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {optionalProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-border bg-white p-8 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--apple-blue)]">
            Closing line (15s)
          </p>
          <p className="speaker-note mt-2 text-base italic text-muted-foreground">
            {githubWorkIntro.closingScript}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Short on time? Show only <strong>LungLens</strong> +{" "}
            <strong>AI Agent X-Ray</strong>, then link to full profile.
          </p>
        </section>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
          <Button
            asChild
            size="lg"
            className="bg-[var(--apple-blue)] hover:bg-[var(--apple-blue-hover)]"
          >
            <Link
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View all repositories on GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Back to story</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/experience">Full timeline</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

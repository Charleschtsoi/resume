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
import { ValuePillars } from "@/components/sections/ValuePillars";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Work — ${profile.name}`,
  description:
    "Selected work in AI, machine learning, product, and systems architecture — outcomes, not scores.",
};

const pillarOrder: WorkPillar[] = ["ai", "product", "architecture"];

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
          label="Selected Work"
          title={githubWorkIntro.title}
          subtitle={githubWorkIntro.subtitle}
        />

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {githubWorkIntro.framingParagraph}
        </p>

        <div className="mt-6">
          <Button asChild variant="outline">
            <Link href="/showcase">See live deployments →</Link>
          </Button>
        </div>

        <div className="mt-12">
          <ValuePillars />
        </div>

        <div className="mt-8 border border-border bg-white p-6 md:p-8">
          <p className="section-label">Opening line</p>
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
          <h2 id="optional-projects" className="section-label">
            Also worth a look
          </h2>
          <p className="mt-2 text-lg font-semibold text-[var(--apple-black)]">
            Side projects and experiments
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {optionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-16 border border-border bg-white p-8">
          <p className="section-label">Closing line</p>
          <p className="speaker-note mt-3 text-base italic text-muted-foreground">
            {githubWorkIntro.closingScript}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Short on time? Show LungLens and the AAHK LLM agent, then link to full
            experience.
          </p>
        </section>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
          <Button
            asChild
            size="lg"
            className="bg-[var(--apple-blue)] text-white hover:bg-[var(--apple-blue-hover)]"
          >
            <Link
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View repositories on GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Back to home →</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/experience">Experience →</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

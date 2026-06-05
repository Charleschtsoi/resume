import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/resume";
import {
  productionProjects,
  productionShowcaseIntro,
} from "@/content/production-showcase";
import { ProductionProjectPanel } from "@/components/showcase/ProductionProjectPanel";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Showcase — ${profile.name}`,
  description:
    "Production deployments — live URLs, architecture, clone steps, and API endpoints.",
};

export default function ShowcasePage() {
  const liveCount = productionProjects.filter((p) => p.status === "live").length;

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16"
    >
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Production
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          {productionShowcaseIntro.title}
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">
          {productionShowcaseIntro.subtitle}
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {productionShowcaseIntro.framing}
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          {liveCount} live · {productionProjects.length - liveCount} repo-only — click to
          expand
        </p>

        <div className="mt-10 space-y-4">
          {productionProjects.map((project) => (
            <ProductionProjectPanel key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/work">← Curated GitHub / Work</Link>
          </Button>
          <Button
            asChild
            className="bg-[var(--apple-blue)] hover:bg-[var(--apple-blue-hover)]"
          >
            <Link
              href="https://github.com/Charleschtsoi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              All repositories on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

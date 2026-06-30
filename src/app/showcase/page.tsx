import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/resume";
import {
  productionProjects,
  productionShowcaseIntro,
} from "@/content/production-showcase";
import { ProductionProjectPanel } from "@/components/showcase/ProductionProjectPanel";
import { PageHeader } from "@/components/layout/PageHeader";
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
        <PageHeader
          label="Production"
          title={productionShowcaseIntro.title}
          subtitle={productionShowcaseIntro.subtitle}
        />

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {productionShowcaseIntro.framing}
        </p>

        <div className="game-hud mt-6 inline-flex items-center gap-3 rounded-lg px-4 py-2">
          <span className="font-game text-[10px] tracking-wider text-[var(--game-cyan)] uppercase">
            {liveCount} live
          </span>
          <span className="text-[var(--game-border)]">|</span>
          <span className="font-game text-[10px] tracking-wider text-[var(--game-gold)] uppercase">
            {productionProjects.length - liveCount} repo-only
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Click a project to expand details</p>

        <div className="mt-10 space-y-4">
          {productionProjects.map((project) => (
            <ProductionProjectPanel key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild variant="outline" className="border-[var(--game-border)]">
            <Link href="/work" className="font-game text-[10px] tracking-wider uppercase">
              ▶ Curated work
            </Link>
          </Button>
          <Button
            asChild
            className="game-pixel-border bg-[var(--game-cyan)] font-semibold text-[var(--game-bg)] hover:bg-[var(--game-green)]"
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

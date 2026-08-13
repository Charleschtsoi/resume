import Image from "next/image";
import type { ProductionProject } from "@/content/production-showcase";
import { ComponentBlock } from "@/components/showcase/ComponentBlock";
import { ArchitectureBlock } from "@/components/showcase/ArchitectureBlock";

type ProductionProjectPanelProps = {
  project: ProductionProject;
};

export function ProductionProjectPanel({ project }: ProductionProjectPanelProps) {
  const statusLabel =
    project.status === "live"
      ? "Live"
      : project.status === "coming-soon"
        ? "In Progress"
        : "Repo only";
  const statusClass = "text-xs text-muted-foreground";

  return (
    <details
      id={project.slug}
      open={project.defaultOpen}
      className="group scroll-mt-24 border-t border-border"
    >
      <summary className="cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-[var(--apple-black)]">
                {project.name}
              </h3>
              <span className={statusClass}>{statusLabel}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.oneLiner}
            </p>
            {project.showcaseImage && (
              <div className="mt-4 overflow-hidden rounded-xl border border-border bg-[var(--apple-gray-100)]">
                <Image
                  src={project.showcaseImage}
                  alt={project.showcaseImageAlt ?? `${project.name} showcase`}
                  width={1200}
                  height={750}
                  className="h-auto w-full"
                  sizes="(max-width: 980px) 100vw, 980px"
                />
              </div>
            )}
          </div>
          <span
            className="text-muted-foreground transition group-open:rotate-180"
            aria-hidden
          >
            ▼
          </span>
        </div>
      </summary>

      <div className="border-t border-border px-6 pb-6 pt-2">
        {project.talkTrack && (
          <p className="speaker-note mb-6 text-sm italic text-muted-foreground">
            {project.talkTrack}
          </p>
        )}

        <div className="space-y-4">
          {project.components.map((component) => (
            <ComponentBlock key={component.title} component={component} />
          ))}
        </div>

        <ArchitectureBlock project={project} />
      </div>
    </details>
  );
}

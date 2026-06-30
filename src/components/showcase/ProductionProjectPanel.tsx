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
        ? "App Store soon"
        : "Repo only";
  const statusClass =
    project.status === "live"
      ? "bg-green-100 text-green-800"
      : project.status === "coming-soon"
        ? "bg-emerald-100 text-emerald-800"
        : "bg-[var(--apple-gray-100)] text-muted-foreground";

  return (
    <details
      id={project.slug}
      open={project.defaultOpen}
      className="group scroll-mt-24 rounded-2xl border border-border bg-white shadow-sm"
    >
      <summary className="cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-[var(--apple-black)]">
                {project.name}
              </h3>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClass}`}
              >
                {statusLabel}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.oneLiner}
            </p>
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

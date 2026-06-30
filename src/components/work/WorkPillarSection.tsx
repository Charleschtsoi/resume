import type { WorkPillar, WorkProject } from "@/content/github-work";
import { workPillars } from "@/content/github-work";
import { ProjectCard } from "@/components/work/ProjectCard";

type WorkPillarSectionProps = {
  pillar: WorkPillar;
  projects: WorkProject[];
};

export function WorkPillarSection({ pillar, projects }: WorkPillarSectionProps) {
  const meta = workPillars[pillar];
  if (projects.length === 0) return null;

  return (
    <section aria-labelledby={`pillar-${pillar}`} className="mt-16">
      <h2
        id={`pillar-${pillar}`}
        className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase"
      >
        {meta.title}
      </h2>
      <p className="mt-2 max-w-2xl text-lg font-semibold text-[var(--apple-black)]">
        {meta.description}
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

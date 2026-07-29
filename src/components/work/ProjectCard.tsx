import Link from "next/link";
import type { WorkProject } from "@/content/github-work";
import { AchievementBadge } from "@/components/game/AchievementBadge";

type ProjectCardProps = {
  project: WorkProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article
      id={project.id}
      className="game-card-light flex h-full scroll-mt-24 flex-col rounded-2xl p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--apple-black)]">
          {project.name}
        </h3>
        <div className="flex items-center gap-2">
          {project.achievement && <AchievementBadge tier={project.achievement} />}
          {project.stars !== undefined && project.stars > 0 && (
            <span className="rounded-full bg-[var(--apple-gray-100)] px-2 py-0.5 text-xs text-muted-foreground">
              ★ {project.stars}
            </span>
          )}
        </div>
      </div>

      <p className="mt-2 text-lg font-medium text-[var(--apple-black)]/90">
        {project.headline}
      </p>

      <dl className="mt-4 space-y-3 text-sm leading-relaxed">
        <div>
          <dt className="font-game text-[9px] tracking-wider text-[var(--apple-blue)] uppercase">
            Role
          </dt>
          <dd className="mt-1 text-muted-foreground">{project.role}</dd>
        </div>
        {project.stack && (
          <div>
            <dt className="font-game text-[9px] tracking-wider text-[var(--apple-blue)] uppercase">
              Stack
            </dt>
            <dd className="mt-1 text-muted-foreground">{project.stack}</dd>
          </div>
        )}
        {project.problem && (
          <div>
            <dt className="font-game text-[9px] tracking-wider text-[var(--apple-blue)] uppercase">
              Problem
            </dt>
            <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
          </div>
        )}
        <div>
          <dt className="font-game text-[9px] tracking-wider text-[var(--apple-blue)] uppercase">
            What I built
          </dt>
          <dd className="mt-1 text-muted-foreground">{project.built}</dd>
        </div>
        {project.outcome && (
          <div>
            <dt className="font-game text-[9px] tracking-wider text-[var(--apple-blue)] uppercase">
              Outcome
            </dt>
            <dd className="mt-1 font-medium text-[var(--apple-black)]">
              {project.outcome}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {project.language && (
          <span className="rounded-full bg-[var(--apple-gray-100)] px-2.5 py-0.5 text-xs text-muted-foreground">
            {project.language}
          </span>
        )}
      </div>

      {project.talkTrack && (
        <p className="speaker-note mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.talkTrack}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--apple-blue)] hover:underline"
          >
            View live →
          </Link>
        )}
        {project.productionSlug && (
          <Link
            href={`/showcase#${project.productionSlug}`}
            className="text-sm font-semibold text-[var(--apple-blue)] hover:underline"
          >
            {isComingSoon ? "View details →" : "View production notes →"}
          </Link>
        )}
        {project.repoUrl && (
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--apple-blue)] hover:underline"
          >
            View on GitHub →
          </Link>
        )}
        {project.secondaryRepoUrl && (
          <Link
            href={project.secondaryRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-[var(--apple-blue)] hover:underline"
          >
            Backend repo →
          </Link>
        )}
      </div>
    </article>
  );
}

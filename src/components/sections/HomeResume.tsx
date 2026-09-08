import Link from "next/link";
import {
  education,
  experience,
  certifications,
  homeSkills,
  profile,
} from "@/content/resume";

export function HomeResume() {
  const primaryEducation = education[0];

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16"
    >
      <article className="mx-auto max-w-[720px] px-6 md:px-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--apple-black)] md:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-base text-muted-foreground">{profile.title}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="text-[var(--apple-blue)] hover:underline"
            >
              {profile.email}
            </a>
            {" · "}
            <Link
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--apple-blue)] hover:underline"
            >
              LinkedIn
            </Link>
            {" · "}
            <Link
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--apple-blue)] hover:underline"
            >
              GitHub
            </Link>
            {" · "}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--apple-blue)] hover:underline"
            >
              PDF
            </Link>
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--apple-black)]">
            {profile.tagline}
          </p>
        </header>

        <section className="mt-10" aria-labelledby="experience-heading">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="experience-heading"
              className="text-xs font-medium tracking-wide text-[var(--apple-blue)] uppercase"
            >
              Experience
            </h2>
            <Link
              href="/experience"
              className="text-sm text-[var(--apple-blue)] hover:underline"
            >
              Full experience →
            </Link>
          </div>

          <ol className="mt-3">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.period}`}
                className="border-t border-border py-4"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-semibold text-[var(--apple-black)]">
                    {job.company}
                  </h3>
                  <p className="shrink-0 text-sm text-muted-foreground">
                    {job.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{job.role}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--apple-black)]">
                  {job.scan}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 border-t border-border pt-8" aria-labelledby="skills-heading">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="skills-heading"
              className="text-xs font-medium tracking-wide text-[var(--apple-blue)] uppercase"
            >
              Education, certifications, skills
            </h2>
            <Link
              href="/skills"
              className="text-sm text-[var(--apple-blue)] hover:underline"
            >
              Full skills →
            </Link>
          </div>

          {primaryEducation && (
            <p className="mt-4 text-[15px] leading-relaxed">
              <span className="font-medium text-[var(--apple-black)]">
                {primaryEducation.degree}
              </span>
              {", "}
              {primaryEducation.school}
              {primaryEducation.period ? ` (${primaryEducation.period})` : ""}
            </p>
          )}

          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            {certifications.join(" · ")}
          </p>

          <p className="mt-3 text-[15px] leading-relaxed text-[var(--apple-black)]">
            {homeSkills.join(" · ")}
          </p>
        </section>
      </article>
    </main>
  );
}

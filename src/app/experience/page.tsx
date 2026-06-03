import type { Metadata } from "next";
import { experience, profile } from "@/content/resume";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
  description: "Professional experience across Apple, AAHK, HKJC, Accenture, Cathay Pacific, and more.",
};

export default function ExperiencePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Experience
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          12+ years. One thread.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-16 space-y-12">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="border-b border-border pb-12 last:border-0"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h2 className="text-title font-semibold text-[var(--apple-black)]">
                    {job.company}
                  </h2>
                  <p className="text-lg text-foreground/80">{job.role}</p>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 50)}
                    className="text-base leading-relaxed text-muted-foreground before:mr-2 before:text-[var(--apple-blue)] before:content-['•']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

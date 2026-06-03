import type { Metadata } from "next";
import {
  skillCategories,
  certifications,
  education,
  profile,
} from "@/content/resume";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
  description: "Technical skills, certifications, and education.",
};

export default function SkillsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Skills & Education
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          Technical credibility.
        </h1>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <section
              key={cat.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-[var(--apple-black)]">
                {cat.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground before:mr-2 before:text-[var(--apple-blue)] before:content-['•']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-title font-semibold text-[var(--apple-black)]">
            Education
          </h2>
          <div className="mt-6 space-y-6">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                {edu.period && (
                  <p className="mt-1 text-sm text-muted-foreground">{edu.period}</p>
                )}
                {edu.focus && (
                  <p className="mt-2 text-sm">Focus: {edu.focus}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-title font-semibold text-[var(--apple-black)]">
            Certifications
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm text-muted-foreground"
              >
                {cert}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

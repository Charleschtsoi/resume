import Link from "next/link";
import { coreStrengths } from "@/content/resume";
import { Button } from "@/components/ui/button";

export function RoleFitSection() {
  return (
    <section
      id="why-fit"
      aria-labelledby="why-fit-heading"
      className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[980px]">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Core strengths
        </p>
        <h2
          id="why-fit-heading"
          className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
        >
          {coreStrengths.title}
        </h2>
        <ul className="mt-8 space-y-4">
          {coreStrengths.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 40)}
              className="rounded-xl border border-border bg-white px-5 py-4 text-base leading-relaxed text-muted-foreground shadow-sm"
            >
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/experience">Full quest log →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

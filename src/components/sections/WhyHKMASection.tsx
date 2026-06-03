import Link from "next/link";
import { whyHKMA } from "@/content/resume";
import { Button } from "@/components/ui/button";

export function WhyHKMASection() {
  return (
    <section
      id="why-hkma"
      aria-labelledby="why-hkma-heading"
      className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[980px]">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Role fit
        </p>
        <h2
          id="why-hkma-heading"
          className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
        >
          {whyHKMA.title}
        </h2>
        <ul className="mt-8 space-y-4">
          {whyHKMA.bullets.map((bullet) => (
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
            <Link href="/experience">Full timeline → Experience</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

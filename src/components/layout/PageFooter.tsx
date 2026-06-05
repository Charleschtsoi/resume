import Link from "next/link";
import { profile } from "@/content/resume";

export function PageFooter() {
  return (
    <footer className="border-t border-border bg-[var(--apple-black)] px-6 py-12 text-[var(--apple-gray-300)] md:px-12">
      <div className="mx-auto flex max-w-[980px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm">{profile.title}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href={profile.links.linkedin} className="hover:text-[var(--apple-blue)]">
            LinkedIn
          </Link>
          <Link href="/work" className="hover:text-[var(--apple-blue)]">
            Work
          </Link>
          <Link href="/showcase" className="hover:text-[var(--apple-blue)]">
            Showcase
          </Link>
          <Link href={profile.links.github} className="hover:text-[var(--apple-blue)]">
            GitHub
          </Link>
          <Link href={profile.links.medium} className="hover:text-[var(--apple-blue)]">
            Medium
          </Link>
          <Link href="/resume.pdf" className="hover:text-[var(--apple-blue)]">
            Download PDF
          </Link>
        </div>
      </div>
    </footer>
  );
}

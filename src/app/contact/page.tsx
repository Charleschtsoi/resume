import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/resume";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: "Get in touch with Charles Tsoi.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--apple-black)] pt-24 pb-16 text-[var(--apple-gray-100)]">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]">
          Contact
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight">
          Let&apos;s connect.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[var(--apple-gray-300)]">
          {profile.tagline}
        </p>

        <div className="mt-12 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--apple-gray-400)]">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-xl text-[var(--apple-blue)] hover:underline"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--apple-gray-400)]">
              Location
            </p>
            <p className="text-xl">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild className="bg-[var(--apple-blue)] hover:bg-[var(--apple-blue-hover)]">
            <Link href={`mailto:${profile.email}`}>Send email</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--apple-gray-400)] bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--apple-gray-400)] bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/work">Curated work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--apple-gray-400)] bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub profile
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--apple-gray-400)] bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download resume (PDF)
            </Link>
          </Button>
        </div>

        <p className="mt-16 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-[var(--apple-gray-300)]">
          <span className="font-medium text-white">{profile.title}</span>
          <span className="mt-2 block text-[var(--apple-gray-400)]">{profile.proofLine}</span>
        </p>
      </div>
    </main>
  );
}

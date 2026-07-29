import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/resume";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description:
    "Get in touch with Charles Tsoi — AI, machine learning, and app development. Open to projects and collaborations.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="game-section-dark min-h-screen pt-24 pb-16 text-[var(--apple-gray-100)]">
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase">
          Contact
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight">
          Let&apos;s build something.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[var(--apple-gray-300)]">
          {profile.tagline}
        </p>
        <p className="mt-4 max-w-xl text-base text-[var(--apple-gray-400)]">
          {profile.interviewerSubline}
        </p>

        <div className="game-hud mt-10 rounded-lg p-6">
          <p className="font-game text-[10px] tracking-wider text-[var(--game-gold)] uppercase">
            Current role · Level {profile.yearsExperience}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{profile.currentOccupation}</p>
          <p className="mt-1 text-sm text-[var(--apple-gray-400)]">{profile.careerSpan}</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--apple-gray-300)]">
            <li><span className="text-[var(--game-cyan)]">▸</span> AI &amp; ML — LungLens live; AAHK LLM monitoring agent (product lead)</li>
            <li><span className="text-[var(--game-cyan)]">▸</span> Product — 14 years; Cathay mobile MAU ~10k → ~120k</li>
            <li><span className="text-[var(--game-cyan)]">▸</span> Building now — 北辰 (North Star) for iOS; GenAI writing on Medium</li>
            <li><span className="text-[var(--game-cyan)]">▸</span> Open to collaborations, consulting, and full-time roles</li>
          </ul>
        </div>

        <div className="mt-12 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--apple-gray-400)]">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-xl text-[var(--game-cyan)] hover:underline"
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
          <Button asChild className="bg-[var(--game-cyan)] text-[var(--game-bg)] hover:bg-[var(--game-green)]">
            <Link href={`mailto:${profile.email}`}>Send email</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--game-border)] bg-transparent text-white hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 hover:text-white"
          >
            <Link href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--game-border)] bg-transparent text-white hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 hover:text-white"
          >
            <Link href="/work">Curated work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--game-border)] bg-transparent text-white hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 hover:text-white"
          >
            <Link href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub profile
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--game-border)] bg-transparent text-white hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 hover:text-white"
          >
            <Link href={profile.links.medium} target="_blank" rel="noopener noreferrer">
              Medium (writing)
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--game-border)] bg-transparent text-white hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 hover:text-white"
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download resume (PDF)
            </Link>
          </Button>
        </div>

        <p className="game-card mt-16 rounded-2xl px-6 py-4 text-sm text-[var(--apple-gray-300)]">
          <span className="font-medium text-white">{profile.title}</span>
          <span className="mt-2 block text-[var(--apple-gray-400)]">{profile.proofLine}</span>
          <span className="mt-2 block text-[var(--game-green)]">{profile.availabilityLine}</span>
        </p>
      </div>
    </main>
  );
}

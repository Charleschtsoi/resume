import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/content/resume";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description:
    "Get in touch with Charles Tsoi — AI, machine learning, and app development. Open to projects and collaborations.",
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="game-section-dark min-h-screen pt-24 pb-16 text-[var(--apple-gray-100)]"
    >
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase">
          Get in Touch
        </p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight">
          Let&apos;s build something.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--apple-gray-300)]">
          {profile.ctaTagline}
        </p>

        <div className="mt-12">
          <ContactForm />
        </div>

        <div className="game-hud mt-12 rounded-lg p-6">
          <p className="font-game text-[10px] tracking-widest text-[var(--game-cyan)] uppercase mb-4">
            Or reach me at
          </p>
          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="block text-[var(--game-gold)] transition hover:text-[var(--game-green)]"
            >
              → {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[var(--game-gold)] transition hover:text-[var(--game-green)]"
            >
              → LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[var(--game-gold)] transition hover:text-[var(--game-green)]"
            >
              → GitHub
            </a>
            <a
              href={profile.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[var(--game-gold)] transition hover:text-[var(--game-green)]"
            >
              → Medium
            </a>
            <Link
              href="/work"
              className="block text-[var(--game-gold)] transition hover:text-[var(--game-green)]"
            >
              → Curated work
            </Link>
          </div>
        </div>

        <p className="game-card mt-16 rounded-2xl px-6 py-4 text-sm text-[var(--apple-gray-300)]">
          <span className="font-medium text-white">{profile.title}</span>
          <span className="mt-2 block text-[var(--apple-gray-400)]">
            {profile.proofLine}
          </span>
          <span className="mt-2 block text-[var(--game-green)]">
            {profile.availabilityLine}
          </span>
        </p>
      </div>
    </main>
  );
}

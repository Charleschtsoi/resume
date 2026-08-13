import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/resume";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description:
    "Get in touch with Charles Tsoi — AI, machine learning, and app development. Open to projects and collaborations.",
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--apple-gray-100)] pt-24 pb-16"
    >
      <div className="mx-auto max-w-[980px] px-6 md:px-12">
        <p className="section-label">Contact</p>
        <h1 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          Happy to talk.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          {profile.tagline}
        </p>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          {profile.interviewerSubline}
        </p>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Currently {profile.currentOccupation} · {profile.careerSpan}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              AI &amp; ML — LungLens in production; AAHK LLM monitoring agent
              (product design &amp; vendor delivery)
            </li>
            <li>
              Product — fourteen years; Cathay mobile MAU ~10k → ~120k during my
              ownership
            </li>
            <li>
              Building now — 北辰 (North Star) for iOS; GenAI writing on Medium
            </li>
            <li>Open to collaborations, consulting, and full-time roles</li>
          </ul>
        </div>

        <div className="mt-12 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
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
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Location
            </p>
            <p className="text-xl text-[var(--apple-black)]">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-[var(--apple-blue)] text-white hover:bg-[var(--apple-blue-hover)]"
          >
            <Link href={`mailto:${profile.email}`}>Send email</Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/work">Selected work</Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub profile
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href={profile.links.medium}
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium (writing)
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download resume (PDF)
            </Link>
          </Button>
        </div>

        <p className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground">
          <span className="font-medium text-[var(--apple-black)]">
            {profile.title}
          </span>
          <span className="mt-2 block">{profile.proofLine}</span>
          <span className="mt-2 block">{profile.availabilityLine}</span>
        </p>
      </div>
    </main>
  );
}

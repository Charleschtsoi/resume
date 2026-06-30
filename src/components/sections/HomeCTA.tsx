"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/content/resume";
import { Button } from "@/components/ui/button";
import { fadeInView } from "@/lib/motion";

export function HomeCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-24 text-center md:px-12 md:py-32">
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInView}
        className="mx-auto max-w-[720px]"
      >
        <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
          Open to projects
        </p>
        <h2 className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]">
          Let&apos;s build something.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          {profile.ctaTagline}
        </p>
        <p className="mt-4 text-base text-muted-foreground">
          {profile.availabilityLine}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-[var(--apple-blue)] px-8 text-white hover:bg-[var(--apple-blue-hover)]"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download resume
            </Link>
          </Button>
        </div>
        <p className="mt-8">
          <Link
            href="/story"
            className="text-sm text-[var(--apple-blue)] hover:underline"
          >
            Read the full career story →
          </Link>
        </p>
      </motion.div>
    </section>
  );
}

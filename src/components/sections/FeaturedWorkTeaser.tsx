"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { featuredLinks } from "@/content/homepage";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { fadeInView } from "@/lib/motion";

export function FeaturedWorkTeaser() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work-teaser"
      className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="section-label"
        >
          Selected work
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
        >
          A few things I&apos;ve worked on.
        </motion.h2>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3 md:gap-10">
          {featuredLinks.map((link, i) => (
            <motion.article
              key={link.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex h-full flex-col"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--apple-black)]">
                  {link.title}
                </h3>
                {link.status && <StatusLabel>{link.status}</StatusLabel>}
              </div>
              {link.tag && (
                <p className="mt-1 text-xs text-muted-foreground">{link.tag}</p>
              )}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {link.headline}
              </p>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="mt-6 text-sm font-medium text-[var(--apple-blue)] hover:underline"
              >
                {link.external ? "Open live →" : "View details →"}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="text-sm text-[var(--apple-blue)] hover:underline"
          >
            See all selected work →
          </Link>
        </div>
      </div>
    </section>
  );
}

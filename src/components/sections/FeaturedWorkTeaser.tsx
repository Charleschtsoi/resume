"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { featuredLinks } from "@/content/homepage";
import { fadeInView } from "@/lib/motion";

export function FeaturedWorkTeaser() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work-teaser"
      className="scroll-mt-20 bg-[var(--apple-black)] px-6 py-20 text-[var(--apple-gray-100)] md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]"
        >
          Hands-on proof
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight"
        >
          Built, shipped, and in production.
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredLinks.map((link, i) => (
            <motion.article
              key={link.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[var(--apple-blue)]/40"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{link.title}</h3>
                {link.tag && (
                  <span className="rounded-full bg-[var(--apple-blue)]/20 px-2 py-0.5 text-xs text-[var(--apple-blue)]">
                    {link.tag}
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--apple-gray-300)]">
                {link.headline}
              </p>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="mt-6 text-sm font-semibold text-[var(--apple-blue)] hover:underline"
              >
                {link.external ? "View on GitHub →" : "View production →"}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="text-sm font-medium text-[var(--apple-blue)] hover:underline"
          >
            See all curated work →
          </Link>
        </div>
      </div>
    </section>
  );
}

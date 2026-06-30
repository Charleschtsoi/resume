"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { featuredLinks } from "@/content/homepage";
import { AchievementBadge } from "@/components/game/AchievementBadge";
import { fadeInView } from "@/lib/motion";

export function FeaturedWorkTeaser() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work-teaser"
      className="game-section-dark scroll-mt-20 px-6 py-20 text-[var(--apple-gray-100)] md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase"
        >
          Achievements Unlocked
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
              className="game-card flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">{link.title}</h3>
                <div className="flex flex-col items-end gap-1">
                  {link.achievement && <AchievementBadge tier={link.achievement} />}
                  {link.tag && (
                    <span className="rounded-full bg-[var(--game-cyan)]/10 px-2 py-0.5 text-xs text-[var(--game-cyan)]">
                      {link.tag}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--apple-gray-300)]">
                {link.headline}
              </p>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="mt-6 font-game text-[10px] tracking-wider text-[var(--game-gold)] hover:text-[var(--game-green)]"
              >
                {link.external ? "▶ View on GitHub" : "▶ View production"}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="font-game text-[10px] tracking-wider text-[var(--game-cyan)] hover:text-[var(--game-green)]"
          >
            ▶ See all curated work
          </Link>
        </div>
      </div>
    </section>
  );
}

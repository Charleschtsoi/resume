"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { nowBuilding } from "@/content/homepage";
import { easeApple } from "@/lib/motion";

export function NowBuilding() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="now"
      className="scroll-mt-20 border-b border-[var(--game-border)]/40 bg-[var(--apple-black)] px-6 py-10 text-[var(--apple-gray-100)] md:px-12"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeApple }}
        className="game-hud mx-auto max-w-[980px] rounded-lg p-5 md:p-6"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 flex-1">
            <p className="font-game text-[10px] tracking-[0.25em] text-[var(--game-green)] uppercase">
              {nowBuilding.title}
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--apple-gray-200)] md:text-lg">
              {nowBuilding.body}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            {nowBuilding.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-game text-[10px] tracking-wider text-[var(--game-gold)] transition hover:text-[var(--game-cyan)]"
              >
                ▶ {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

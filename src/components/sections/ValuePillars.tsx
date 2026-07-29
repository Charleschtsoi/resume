"use client";

import { motion, useReducedMotion } from "motion/react";
import { valuePillars } from "@/content/homepage";
import { fadeInView } from "@/lib/motion";

const standingColor: Record<string, string> = {
  ai: "text-[var(--game-cyan)] border-[var(--game-cyan)]/40 bg-[var(--game-cyan)]/10",
  product: "text-[var(--game-gold)] border-[var(--game-gold)]/40 bg-[var(--game-gold)]/10",
  architecture: "text-[var(--game-green)] border-[var(--game-green)]/40 bg-[var(--game-green)]/10",
};

export function ValuePillars() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pillars"
      className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInView}
          className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase"
        >
          AI · ML · App Dev
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
        >
          Three pillars. Open to help.
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.2 } }}
              className="game-card-light group rounded-2xl p-8"
            >
              <span className="text-2xl">{pillar.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-[var(--apple-black)]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {pillar.proof}
              </p>
              <div className="mt-5">
                <span
                  className={`inline-block rounded border px-2.5 py-1 font-game text-[9px] tracking-wider uppercase ${standingColor[pillar.id] ?? standingColor.ai}`}
                >
                  {pillar.standing}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

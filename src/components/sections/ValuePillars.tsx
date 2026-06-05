"use client";

import { motion, useReducedMotion } from "motion/react";
import { valuePillars } from "@/content/homepage";
import { fadeInView } from "@/lib/motion";

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
          className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--apple-blue)]"
        >
          What I solve
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
        >
          Three pillars. One thread.
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
              className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:border-[var(--apple-blue)]/40 hover:shadow-lg"
            >
              <span className="text-2xl text-[var(--apple-blue)]">{pillar.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-[var(--apple-black)]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {pillar.proof}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

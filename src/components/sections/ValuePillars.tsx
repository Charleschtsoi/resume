"use client";

import { motion, useReducedMotion } from "motion/react";
import { valuePillars } from "@/content/homepage";
import { StatusLabel } from "@/components/ui/StatusLabel";
import { fadeInView } from "@/lib/motion";

export function ValuePillars() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pillars"
      className="scroll-mt-20 border-b border-border pb-16"
    >
      <motion.p
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInView}
        className="section-label"
      >
        Focus areas
      </motion.p>
      <motion.h2
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={fadeInView}
        className="mt-4 text-title font-semibold tracking-tight text-[var(--apple-black)]"
      >
        Where I usually contribute.
      </motion.h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {valuePillars.map((pillar, i) => (
          <motion.article
            key={pillar.id}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="border-t border-border pt-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-[var(--apple-black)]">
                {pillar.title}
              </h3>
              <StatusLabel>{pillar.standing}</StatusLabel>
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {pillar.proof}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

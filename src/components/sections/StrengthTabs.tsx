"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { strengthTabs } from "@/content/homepage";
import { fadeInView, staggerChild } from "@/lib/motion";

export function StrengthTabs() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(strengthTabs[0].id);
  const active = strengthTabs.find((t) => t.id === activeId) ?? strengthTabs[0];

  return (
    <section
      id="strengths"
      className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase"
        >
          Inventory
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
        >
          What I bring to any team.
        </motion.h2>

        <div
          role="tablist"
          aria-label="Core strengths"
          className="relative mt-10 flex gap-1 border-b-2 border-[var(--game-border)]"
        >
          {strengthTabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(tab.id)}
                className={`relative px-4 py-3 text-sm font-medium transition md:px-6 md:text-base ${
                  isActive
                    ? "text-[var(--apple-blue)]"
                    : "text-muted-foreground hover:text-[var(--apple-black)]"
                }`}
              >
                {tab.label}
                {isActive && !reduceMotion && (
                  <motion.span
                    layoutId="strength-indicator"
                    className="absolute right-0 bottom-0 left-0 h-0.5 bg-[var(--game-cyan)]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {isActive && reduceMotion && (
                  <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-[var(--game-cyan)]" />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active.id}
          role="tabpanel"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-8"
        >
          {active.metric && (
            <div className="game-card-light mb-8 inline-block rounded-xl px-6 py-4">
              <p className="text-2xl font-semibold text-[var(--apple-black)]">
                {active.metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{active.metric.label}</p>
            </div>
          )}
          <ul className="space-y-4">
            {active.bullets.map((bullet, i) => (
              <motion.li
                key={bullet.slice(0, 40)}
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                custom={i}
                variants={staggerChild}
                className="game-card-light rounded-xl px-5 py-4 text-base leading-relaxed text-muted-foreground"
              >
                <span className="mr-2 text-[var(--game-cyan)]">▸</span>
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

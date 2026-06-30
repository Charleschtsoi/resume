"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { timelineMilestones } from "@/content/homepage";
import { QuestLevel } from "@/components/game/QuestLevel";
import { fadeInView } from "@/lib/motion";

export function InteractiveTimeline() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(timelineMilestones[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const active = timelineMilestones.find((m) => m.id === activeId) ?? timelineMilestones[0];
  const activeIndex = timelineMilestones.findIndex((m) => m.id === activeId);

  const moveSelection = useCallback((delta: number) => {
    const next = Math.max(0, Math.min(timelineMilestones.length - 1, activeIndex + delta));
    setActiveId(timelineMilestones[next].id);
  }, [activeIndex]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (!el.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        moveSelection(-1);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        moveSelection(1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [moveSelection]);

  return (
    <section
      id="timeline"
      ref={containerRef}
      tabIndex={0}
      aria-label="Career quest log — use arrow keys to navigate"
      className="game-section-dark scroll-mt-20 px-6 py-20 text-[var(--apple-gray-100)] outline-none md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="font-game text-[10px] tracking-[0.2em] text-[var(--game-cyan)] uppercase"
        >
          Quest Log
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight"
        >
          14 years. One campaign.
        </motion.h2>

        <div className="mt-12 flex gap-3 overflow-x-auto pb-4 md:justify-between">
          {timelineMilestones.map((milestone) => {
            const isActive = milestone.id === activeId;
            return (
              <button
                key={milestone.id}
                type="button"
                onClick={() => setActiveId(milestone.id)}
                aria-pressed={isActive}
                className={`relative flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition md:flex-1 ${
                  isActive
                    ? "game-card border-[var(--game-cyan)]/50"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <QuestLevel level={milestone.level} active={isActive} />
                <div className="relative min-w-0">
                  <span className="block text-xs text-[var(--apple-gray-400)]">
                    {milestone.period}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold">
                    {milestone.company.split(" ")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <motion.div
          key={active.id}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="game-card mt-8 rounded-2xl p-8"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <QuestLevel level={active.level} active />
              <div>
                <p className="font-game text-[9px] tracking-widest text-[var(--game-gold)] uppercase">
                  Quest {active.level}: {active.questTitle}
                </p>
                <h3 className="mt-2 text-title font-semibold">{active.company}</h3>
                <p className="text-[var(--apple-gray-300)]">{active.role}</p>
              </div>
            </div>
            <p className="text-sm text-[var(--apple-gray-400)]">{active.period}</p>
          </div>
          <ul className="mt-6 space-y-3">
            {active.teaser.map((line) => (
              <li
                key={line.slice(0, 40)}
                className="text-base leading-relaxed text-[var(--apple-gray-300)] before:mr-2 before:text-[var(--game-cyan)] before:content-['▸']"
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            {active.storyAnchor && (
              <Link
                href={`/story#${active.storyAnchor}`}
                className="font-game text-[10px] tracking-wider text-[var(--game-gold)] hover:text-[var(--game-green)]"
              >
                ▶ Read chapter
              </Link>
            )}
            <Link
              href="/experience"
              className="text-sm text-[var(--apple-gray-400)] hover:text-white hover:underline"
            >
              Full quest log →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

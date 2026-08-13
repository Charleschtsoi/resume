"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { timelineMilestones } from "@/content/homepage";
import { fadeInView } from "@/lib/motion";

export function InteractiveTimeline() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(timelineMilestones[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const active = timelineMilestones.find((m) => m.id === activeId) ?? timelineMilestones[0];
  const activeIndex = timelineMilestones.findIndex((m) => m.id === activeId);

  const moveSelection = useCallback(
    (delta: number) => {
      const next = Math.max(0, Math.min(timelineMilestones.length - 1, activeIndex + delta));
      setActiveId(timelineMilestones[next].id);
    },
    [activeIndex]
  );

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
      aria-label="Career timeline — use arrow keys to navigate"
      className="section-dark scroll-mt-20 px-6 py-20 outline-none md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[980px]">
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="text-xs font-medium tracking-wide text-[var(--apple-blue)] uppercase"
        >
          Career timeline
        </motion.p>
        <motion.h2
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInView}
          className="mt-4 text-headline font-semibold tracking-tight"
        >
          Fourteen years of delivery.
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
                    ? "border-white/40 bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
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
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-medium tracking-wide text-[var(--apple-gray-400)] uppercase">
                {active.chapterTitle}
              </p>
              <h3 className="mt-2 text-title font-semibold">{active.company}</h3>
              <p className="text-[var(--apple-gray-300)]">{active.role}</p>
            </div>
            <p className="text-sm text-[var(--apple-gray-400)]">{active.period}</p>
          </div>
          <ul className="mt-6 space-y-3">
            {active.teaser.map((line) => (
              <li
                key={line.slice(0, 40)}
                className="text-base leading-relaxed text-[var(--apple-gray-300)] before:mr-2 before:text-[var(--apple-blue)] before:content-['•']"
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            {active.storyAnchor && (
              <Link
                href={`/story#${active.storyAnchor}`}
                className="text-sm text-[var(--apple-blue)] hover:underline"
              >
                Read chapter →
              </Link>
            )}
            <Link
              href="/experience"
              className="text-sm text-[var(--apple-gray-400)] hover:text-white hover:underline"
            >
              Full experience →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

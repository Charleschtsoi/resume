"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "motion/react";
import {
  narrativeChapters,
  presenterChapterOrder,
  coreStrengths,
} from "@/content/resume";
import { getStoryQuest } from "@/content/game-theme";
import { QuestLevel } from "@/components/game/QuestLevel";
import { usePresenterMode } from "@/lib/presenter-mode";

const chapterLabels: Record<string, string> = {
  ...Object.fromEntries(narrativeChapters.map((c) => [c.id, c.label])),
  "why-fit": coreStrengths.title,
};

export function PresenterControls() {
  const pathname = usePathname();
  const { isPresenterMode } = usePresenterMode();
  const isStoryPage = pathname === "/story";
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string>(presenterChapterOrder[0]);

  const scrollToChapter = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      setActiveId(id);
    },
    [reduceMotion]
  );

  const currentIndex = presenterChapterOrder.indexOf(
    activeId as (typeof presenterChapterOrder)[number]
  );
  const safeIndex = currentIndex < 0 ? 0 : currentIndex;

  const goPrev = useCallback(() => {
    if (safeIndex <= 0) return;
    scrollToChapter(presenterChapterOrder[safeIndex - 1]);
  }, [safeIndex, scrollToChapter]);

  const goNext = useCallback(() => {
    if (safeIndex >= presenterChapterOrder.length - 1) return;
    scrollToChapter(presenterChapterOrder[safeIndex + 1]);
  }, [safeIndex, scrollToChapter]);

  useEffect(() => {
    if (!isPresenterMode) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.isContentEditable ||
          e.target.tagName === "INPUT" ||
          e.target.tagName === "TEXTAREA")
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPresenterMode, goPrev, goNext]);

  useEffect(() => {
    if (!isPresenterMode) return;

    const ids = [...presenterChapterOrder];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isPresenterMode]);

  if (!isPresenterMode || !isStoryPage) return null;

  return (
    <div
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-[var(--game-border)] bg-[var(--game-bg)]/95 px-4 py-3 backdrop-blur-xl md:px-6"
      role="toolbar"
      aria-label="Presenter navigation"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={safeIndex <= 0}
            className="rounded-lg border border-[var(--game-border)] px-3 py-1.5 font-game text-[10px] tracking-wider text-white uppercase transition hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 disabled:opacity-30"
            aria-label="Previous chapter"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={safeIndex >= presenterChapterOrder.length - 1}
            className="rounded-lg border border-[var(--game-border)] px-3 py-1.5 font-game text-[10px] tracking-wider text-white uppercase transition hover:border-[var(--game-cyan)] hover:bg-[var(--game-cyan)]/10 disabled:opacity-30"
            aria-label="Next chapter"
          >
            Next →
          </button>
          <span className="hidden font-game text-[9px] tracking-wider text-[var(--apple-gray-400)] uppercase sm:inline">
            ← → keys
          </span>
        </div>

        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
          {presenterChapterOrder.map((id) => {
            const isActive = activeId === id;
            const quest = getStoryQuest(id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToChapter(id)}
                aria-current={isActive ? "true" : undefined}
                className={`flex shrink-0 items-center gap-2 rounded-lg border px-3 py-1 text-xs font-medium transition ${
                  isActive
                    ? "border-[var(--game-cyan)] bg-[var(--game-cyan)]/20 text-[var(--game-gold)]"
                    : "border-[var(--game-border)] bg-white/5 text-[var(--apple-gray-300)] hover:border-[var(--game-cyan)]/40"
                }`}
              >
                <QuestLevel level={quest.level} active={isActive} />
                <span className="font-game text-[9px] tracking-wider uppercase">
                  {chapterLabels[id] ?? id}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { narrativeChapters } from "@/content/resume";
import { getStoryQuest } from "@/content/game-theme";
import { QuestLevel } from "@/components/game/QuestLevel";
import { usePresenterMode } from "@/lib/presenter-mode";

const scrollChapters = narrativeChapters.filter((c) => c.id !== "hero");

export function ProgressRail() {
  const [activeId, setActiveId] = useState(scrollChapters[0]?.id ?? "");
  const reduceMotion = useReducedMotion();
  const { isPresenterMode } = usePresenterMode();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    scrollChapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(chapter.id);
          }
        },
        { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (reduceMotion) return null;

  const showLabels = isPresenterMode;

  return (
    <nav
      aria-label="Chapter progress"
      className={`fixed z-40 hidden md:flex ${
        isPresenterMode
          ? "top-24 right-4 flex-col gap-2 lg:right-8"
          : "top-1/2 right-4 -translate-y-1/2 flex-col gap-3 lg:right-8"
      }`}
    >
      {scrollChapters.map((chapter) => {
        const isActive = activeId === chapter.id;
        const quest = getStoryQuest(chapter.id);
        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="group flex items-center gap-2"
            aria-current={isActive ? "true" : undefined}
          >
            <QuestLevel level={quest.level} active={isActive} />
            <span
              className={`text-xs font-medium tracking-wide ${
                showLabels
                  ? "max-w-[140px] opacity-100"
                  : "max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100 group-focus-visible:max-w-[120px] group-focus-visible:opacity-100"
              } ${isActive ? "text-[var(--game-gold)]" : "text-muted-foreground"}`}
            >
              {chapter.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

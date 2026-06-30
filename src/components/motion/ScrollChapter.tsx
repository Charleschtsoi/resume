"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { usePresenterMode } from "@/lib/presenter-mode";

type ScrollChapterProps = {
  id: string;
  theme: "dark" | "light";
  children: ReactNode;
  className?: string;
};

export function ScrollChapter({
  id,
  theme,
  children,
  className = "",
}: ScrollChapterProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { chapterHeightClass, disableScrollEffects, isPresenterMode } =
    usePresenterMode();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.92, 1, 1, 0.92]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.97, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [24, 0, 0, -16]);

  const isDark = theme === "dark";
  const skipEffects = reduceMotion || disableScrollEffects;
  const bgClass = isDark
    ? "game-section-dark text-[var(--apple-gray-100)]"
    : "bg-[var(--apple-gray-100)] text-[var(--apple-black)]";

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-heading`}
      className={`relative scroll-mt-20 ${chapterHeightClass} ${bgClass} ${isPresenterMode ? "snap-start snap-always" : ""} ${className}`}
    >
      <div
        className={`sticky top-0 flex min-h-screen flex-col justify-center ${
          isPresenterMode ? "max-h-screen overflow-y-auto" : ""
        }`}
      >
        {skipEffects ? (
          <div className="mx-auto w-full max-w-[980px] px-6 py-28 md:px-12 md:py-32">
            {children}
          </div>
        ) : (
          <motion.div
            style={{ opacity, scale, y }}
            className="mx-auto w-full max-w-[980px] px-6 py-28 md:px-12 md:py-32"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

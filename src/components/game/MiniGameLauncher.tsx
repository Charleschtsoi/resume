"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SkillCollectorGame } from "@/components/game/SkillCollectorGame";

export function MiniGameLauncher() {
  const [open, setOpen] = useState(false);

  const openGame = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = () => openGame();
    window.addEventListener("open-mini-game", handler);
    return () => window.removeEventListener("open-mini-game", handler);
  }, [openGame]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => openGame()}
        className="game-launcher-btn fixed bottom-6 left-4 z-40 flex h-12 items-center gap-2 rounded-full border-2 border-[var(--game-cyan)]/40 bg-[var(--game-bg)]/90 px-4 py-2 shadow-lg backdrop-blur-md transition hover:border-[var(--game-cyan)] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] md:bottom-8 md:left-6"
        aria-label="Play Skill Collector mini game"
      >
        <span className="text-lg" aria-hidden>
          🎮
        </span>
        <span className="hidden font-game text-[9px] tracking-wider text-[var(--game-cyan)] uppercase sm:inline">
          Play
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mini-game-title"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={close}
              aria-label="Close mini game"
            />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="game-hud relative z-10 w-full max-w-[600px] rounded-2xl p-5 md:p-8"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h2 id="mini-game-title" className="font-game text-xs tracking-widest text-[var(--game-gold)] uppercase">
                  Skill Collector
                </h2>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg border border-[var(--game-border)] px-2 py-1 font-game text-[10px] text-[var(--apple-gray-400)] hover:text-white"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <SkillCollectorGame onClose={close} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

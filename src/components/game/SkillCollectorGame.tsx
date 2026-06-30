"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ARENA_HEIGHT,
  ARENA_WIDTH,
  GAME_DURATION_SEC,
  MAX_ORBS,
  ORB_SIZE,
  PLAYER_SIZE,
  PLAYER_SPEED,
  SPAWN_INTERVAL_MS,
  checkCollision,
  clampPlayer,
  getScoreRank,
  orbConfig,
  spawnOrb,
  type GamePhase,
  type Orb,
  type Player,
} from "@/lib/skill-collector-game";
import { currentPlayerLevel } from "@/content/game-theme";
import { XPBar } from "@/components/game/XPBar";

type Keys = { up: boolean; down: boolean; left: boolean; right: boolean };

const defaultKeys: Keys = { up: false, down: false, left: false, right: false };

const initialPlayer = (): Player => ({
  x: ARENA_WIDTH / 2 - PLAYER_SIZE / 2,
  y: ARENA_HEIGHT / 2 - PLAYER_SIZE / 2,
});

type SkillCollectorGameProps = {
  onClose?: () => void;
};

export function SkillCollectorGame({ onClose }: SkillCollectorGameProps) {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<GamePhase>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SEC);
  const [frame, setFrame] = useState(0);
  const [popups, setPopups] = useState<{ id: number; x: number; y: number; text: string }[]>([]);

  const playerRef = useRef<Player>(initialPlayer());
  const orbsRef = useRef<Orb[]>([]);
  const keysRef = useRef<Keys>({ ...defaultKeys });
  const orbIdRef = useRef(0);
  const popupIdRef = useRef(0);
  const arenaRef = useRef<HTMLDivElement>(null);

  const addPopup = useCallback((x: number, y: number, text: string) => {
    const id = popupIdRef.current++;
    setPopups((prev) => [...prev, { id, x, y, text }]);
    setTimeout(() => {
      setPopups((prev) => prev.filter((p) => p.id !== id));
    }, 600);
  }, []);

  const startGame = useCallback(() => {
    playerRef.current = initialPlayer();
    orbsRef.current = [];
    keysRef.current = { ...defaultKeys };
    orbIdRef.current = 0;
    setPhase("playing");
    setScore(0);
    setTimeLeft(GAME_DURATION_SEC);
    setPopups([]);
    setFrame(0);
  }, []);

  useEffect(() => {
    if (phase !== "playing" || reduceMotion) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") keysRef.current.up = true;
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") keysRef.current.down = true;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keysRef.current.left = true;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keysRef.current.right = true;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") keysRef.current.up = false;
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") keysRef.current.down = false;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keysRef.current.left = false;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keysRef.current.right = false;
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      keysRef.current = { ...defaultKeys };
    };
  }, [phase, reduceMotion]);

  useEffect(() => {
    if (phase !== "playing" || reduceMotion) return;

    let animId: number;
    const tick = () => {
      const k = keysRef.current;
      let { x, y } = playerRef.current;
      if (k.up) y -= PLAYER_SPEED;
      if (k.down) y += PLAYER_SPEED;
      if (k.left) x -= PLAYER_SPEED;
      if (k.right) x += PLAYER_SPEED;
      playerRef.current = clampPlayer({ x, y });

      const remaining: Orb[] = [];
      let gained = 0;

      for (const orb of orbsRef.current) {
        let ox = orb.x + orb.vx;
        let oy = orb.y + orb.vy;
        let { vx, vy } = orb;
        if (ox <= 0 || ox >= ARENA_WIDTH - ORB_SIZE) vx *= -1;
        if (oy <= 0 || oy >= ARENA_HEIGHT - ORB_SIZE) vy *= -1;
        ox = orb.x + vx;
        oy = orb.y + vy;

        const moved = { ...orb, x: ox, y: oy, vx, vy };
        if (checkCollision(playerRef.current, moved)) {
          gained += moved.value;
          addPopup(moved.x, moved.y, orbConfig[moved.type].label);
        } else {
          remaining.push(moved);
        }
      }

      orbsRef.current = remaining;
      if (gained > 0) setScore((s) => s + gained);
      setFrame((f) => f + 1);

      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [phase, reduceMotion, addPopup]);

  useEffect(() => {
    if (phase !== "playing") return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setPhase("ended");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing" || reduceMotion) return;

    const spawner = setInterval(() => {
      if (orbsRef.current.length >= MAX_ORBS) return;
      orbIdRef.current += 1;
      orbsRef.current = [...orbsRef.current, spawnOrb(orbIdRef.current)];
    }, SPAWN_INTERVAL_MS);

    return () => clearInterval(spawner);
  }, [phase, reduceMotion]);

  const handleArenaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (phase !== "playing" || !arenaRef.current) return;
    const rect = arenaRef.current.getBoundingClientRect();
    const scaleX = ARENA_WIDTH / rect.width;
    const scaleY = ARENA_HEIGHT / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;
    playerRef.current = clampPlayer({
      x: clickX - PLAYER_SIZE / 2,
      y: clickY - PLAYER_SIZE / 2,
    });
    setFrame((f) => f + 1);
  };

  const handleKey = (dir: keyof Keys, active: boolean) => {
    keysRef.current[dir] = active;
  };

  const rank = getScoreRank(score);
  const targetScore = currentPlayerLevel * 10;
  const player = playerRef.current;
  const orbs = orbsRef.current;
  void frame;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-game text-[10px] tracking-widest text-[var(--game-gold)] uppercase">
            Skill Collector
          </p>
          <p className="text-xs text-[var(--apple-gray-400)]">
            WASD / arrows · tap arena on mobile
          </p>
        </div>
        <div className="flex gap-4 text-right">
          <div>
            <p className="font-game text-lg text-[var(--game-cyan)]">{score}</p>
            <p className="font-game text-[8px] tracking-wider text-[var(--apple-gray-400)] uppercase">XP</p>
          </div>
          <div>
            <p className="font-game text-lg text-[var(--game-gold)]">{timeLeft}s</p>
            <p className="font-game text-[8px] tracking-wider text-[var(--apple-gray-400)] uppercase">Time</p>
          </div>
        </div>
      </div>

      <div
        ref={arenaRef}
        role="application"
        aria-label="Skill collector mini game arena"
        tabIndex={0}
        onKeyDown={(e: ReactKeyboardEvent) => e.preventDefault()}
        onClick={handleArenaClick}
        className="game-arena relative mx-auto w-full cursor-crosshair overflow-hidden rounded-lg border-2 border-[var(--game-border)] focus:outline-none focus:ring-2 focus:ring-[var(--game-cyan)]"
        style={{ aspectRatio: `${ARENA_WIDTH} / ${ARENA_HEIGHT}`, maxWidth: ARENA_WIDTH }}
      >
        <div className="absolute inset-0 game-arena-grid" aria-hidden />

        {phase === "idle" && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[var(--game-bg)]/90 p-6 text-center">
            <p className="font-game text-[10px] tracking-widest text-[var(--game-cyan)] uppercase">
              Mini Game
            </p>
            <p className="mt-3 text-sm text-[var(--apple-gray-300)]">
              Collect XP orbs, skill gems, and badges before time runs out.
            </p>
            <p className="mt-2 font-game text-[9px] text-[var(--game-gold)]">
              Beat {targetScore} XP to match Level {currentPlayerLevel}!
            </p>
            <button
              type="button"
              onClick={startGame}
              className="game-pixel-border mt-6 rounded-lg bg-[var(--game-cyan)] px-6 py-3 font-game text-[10px] tracking-wider text-[var(--game-bg)] uppercase hover:bg-[var(--game-green)]"
            >
              ▶ Start
            </button>
          </div>
        )}

        {phase === "ended" && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[var(--game-bg)]/95 p-6 text-center">
            <p className="font-game text-[10px] tracking-widest text-[var(--game-gold)] uppercase">
              Quest Complete
            </p>
            <p className="mt-3 font-game text-3xl text-[var(--game-cyan)]">{score} XP</p>
            <p className="mt-2 font-game text-[10px] tracking-wider text-[var(--game-gold)] uppercase">
              {rank.title}
            </p>
            <p className="mt-2 max-w-xs text-sm text-[var(--apple-gray-300)]">{rank.message}</p>
            <div className="mt-4 w-full max-w-xs">
              <XPBar value={Math.min(100, (score / targetScore) * 100)} label="vs Level 14" color="gold" />
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={startGame}
                className="rounded-lg border border-[var(--game-cyan)] bg-[var(--game-cyan)]/10 px-4 py-2 font-game text-[10px] tracking-wider text-[var(--game-cyan)] uppercase hover:bg-[var(--game-cyan)]/20"
              >
                Play again
              </button>
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-[var(--game-border)] px-4 py-2 font-game text-[10px] tracking-wider text-[var(--apple-gray-400)] uppercase hover:text-white"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        )}

        {phase === "playing" && (
          <>
            {orbs.map((orb) => (
              <div
                key={orb.id}
                className="game-orb absolute rounded-full"
                style={{
                  left: `${(orb.x / ARENA_WIDTH) * 100}%`,
                  top: `${(orb.y / ARENA_HEIGHT) * 100}%`,
                  width: ORB_SIZE,
                  height: ORB_SIZE,
                  backgroundColor: orbConfig[orb.type].color,
                  boxShadow: `0 0 12px ${orbConfig[orb.type].color}`,
                }}
                aria-hidden
              />
            ))}

            <div
              className="game-player absolute rounded-sm"
              style={{
                left: `${(player.x / ARENA_WIDTH) * 100}%`,
                top: `${(player.y / ARENA_HEIGHT) * 100}%`,
                width: PLAYER_SIZE,
                height: PLAYER_SIZE,
              }}
              aria-hidden
            />

            <AnimatePresence>
              {popups.map((p) => (
                <motion.span
                  key={p.id}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -24 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute font-game text-[9px] text-[var(--game-gold)]"
                  style={{
                    left: `${(p.x / ARENA_WIDTH) * 100}%`,
                    top: `${(p.y / ARENA_HEIGHT) * 100}%`,
                  }}
                >
                  {p.text}
                </motion.span>
              ))}
            </AnimatePresence>
          </>
        )}
      </div>

      {phase === "playing" && (
        <div className="flex justify-center gap-2 md:hidden" aria-label="Touch controls">
          <div className="grid grid-cols-3 gap-1">
            <span />
            <TouchBtn label="▲" onPress={() => handleKey("up", true)} onRelease={() => handleKey("up", false)} />
            <span />
            <TouchBtn label="◀" onPress={() => handleKey("left", true)} onRelease={() => handleKey("left", false)} />
            <TouchBtn label="▼" onPress={() => handleKey("down", true)} onRelease={() => handleKey("down", false)} />
            <TouchBtn label="▶" onPress={() => handleKey("right", true)} onRelease={() => handleKey("right", false)} />
          </div>
        </div>
      )}
    </div>
  );
}

function TouchBtn({
  label,
  onPress,
  onRelease,
}: {
  label: string;
  onPress: () => void;
  onRelease: () => void;
}) {
  return (
    <button
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--game-border)] bg-[var(--game-card)] font-game text-sm text-[var(--game-cyan)] active:bg-[var(--game-cyan)]/20"
      onPointerDown={(e) => {
        e.preventDefault();
        onPress();
      }}
      onPointerUp={onRelease}
      onPointerLeave={onRelease}
    >
      {label}
    </button>
  );
}

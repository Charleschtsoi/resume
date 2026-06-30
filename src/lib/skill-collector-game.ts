export const GAME_DURATION_SEC = 20;
export const PLAYER_SIZE = 28;
export const ORB_SIZE = 20;
export const PLAYER_SPEED = 5;
export const ARENA_WIDTH = 560;
export const ARENA_HEIGHT = 320;
export const SPAWN_INTERVAL_MS = 700;
export const MAX_ORBS = 10;

export type OrbType = "xp" | "badge" | "skill";

export type Orb = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: OrbType;
  value: number;
};

export type Player = {
  x: number;
  y: number;
};

export type GamePhase = "idle" | "playing" | "ended";

export const orbConfig: Record<OrbType, { value: number; label: string; color: string }> = {
  xp: { value: 10, label: "+10 XP", color: "var(--game-cyan)" },
  badge: { value: 25, label: "+25 Badge", color: "var(--game-gold)" },
  skill: { value: 15, label: "+15 Skill", color: "var(--game-purple)" },
};

export function randomOrbType(): OrbType {
  const roll = Math.random();
  if (roll < 0.55) return "xp";
  if (roll < 0.85) return "skill";
  return "badge";
}

export function spawnOrb(id: number): Orb {
  const type = randomOrbType();
  const margin = ORB_SIZE;
  return {
    id,
    x: margin + Math.random() * (ARENA_WIDTH - margin * 2),
    y: margin + Math.random() * (ARENA_HEIGHT - margin * 2),
    vx: (Math.random() - 0.5) * 1.2,
    vy: (Math.random() - 0.5) * 1.2,
    type,
    value: orbConfig[type].value,
  };
}

export function checkCollision(player: Player, orb: Orb): boolean {
  const px = player.x + PLAYER_SIZE / 2;
  const py = player.y + PLAYER_SIZE / 2;
  const ox = orb.x + ORB_SIZE / 2;
  const oy = orb.y + ORB_SIZE / 2;
  const dist = Math.hypot(px - ox, py - oy);
  return dist < (PLAYER_SIZE + ORB_SIZE) / 2;
}

export function clampPlayer(player: Player): Player {
  return {
    x: Math.max(0, Math.min(ARENA_WIDTH - PLAYER_SIZE, player.x)),
    y: Math.max(0, Math.min(ARENA_HEIGHT - PLAYER_SIZE, player.y)),
  };
}

export function getScoreRank(score: number): { title: string; message: string } {
  if (score >= 200) {
    return { title: "Legendary Architect", message: "You'd fit right in at AAHK's AI team." };
  }
  if (score >= 140) {
    return { title: "Level 14 Unlocked", message: "Same level as Charles in 2026 — nice." };
  }
  if (score >= 80) {
    return { title: "Senior Builder", message: "Solid app dev energy. Keep collecting." };
  }
  if (score >= 40) {
    return { title: "Rising Talent", message: "Good start — try for 140 XP!" };
  }
  return { title: "Intern Mode", message: "Everyone starts somewhere. Play again?" };
}

type AchievementBadgeProps = {
  tier: string;
  className?: string;
};

const tierColors: Record<string, string> = {
  LEGENDARY: "game-badge-legendary",
  EPIC: "game-badge-epic",
  RARE: "game-badge-rare",
  META: "game-badge-meta",
  SECURE: "game-badge-secure",
  SOON: "game-badge-soon",
};

export function AchievementBadge({ tier, className = "" }: AchievementBadgeProps) {
  const colorClass = tierColors[tier] ?? "game-badge-rare";

  return (
    <span
      className={`game-badge font-game text-[9px] tracking-widest uppercase ${colorClass} ${className}`}
    >
      {tier}
    </span>
  );
}

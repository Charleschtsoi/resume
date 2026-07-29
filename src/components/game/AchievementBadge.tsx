type AchievementBadgeProps = {
  tier: string;
  className?: string;
};

/** Grounded status labels only — no RPG rarity tiers */
const tierColors: Record<string, string> = {
  Shipped: "game-badge-legendary",
  "In Progress": "game-badge-soon",
  "Side Project": "game-badge-rare",
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

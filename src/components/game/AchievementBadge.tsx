type AchievementBadgeProps = {
  tier: string;
  className?: string;
};

/** Maps grounded status labels to existing game badge styles */
const tierColors: Record<string, string> = {
  Shipped: "game-badge-legendary",
  Production: "game-badge-legendary",
  Live: "game-badge-meta",
  "Side Project": "game-badge-rare",
  "Personal Project": "game-badge-rare",
  "In Progress": "game-badge-soon",
  Demo: "game-badge-epic",
  Secure: "game-badge-secure",
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

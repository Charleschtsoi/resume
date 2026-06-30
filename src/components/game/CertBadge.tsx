import type { CertBadge as CertBadgeType } from "@/content/skills-game";

const tierStyles: Record<CertBadgeType["tier"], string> = {
  gold: "game-cert-gold",
  silver: "game-cert-silver",
  bronze: "game-cert-bronze",
};

type CertBadgeProps = {
  badge: CertBadgeType;
};

export function CertBadge({ badge }: CertBadgeProps) {
  return (
    <li
      className={`game-cert-badge flex flex-col items-center rounded-xl px-4 py-5 text-center ${tierStyles[badge.tier]}`}
      title={badge.name}
    >
      <span className="text-2xl" aria-hidden>
        {badge.icon}
      </span>
      <span className="mt-2 font-game text-[10px] tracking-wider uppercase">
        {badge.shortLabel}
      </span>
      <span className="mt-1 text-[10px] leading-snug text-muted-foreground">
        {badge.name}
      </span>
      <span className="mt-2 font-game text-[8px] tracking-widest uppercase opacity-70">
        Unlocked
      </span>
    </li>
  );
}

type QuestLevelProps = {
  level: number;
  active?: boolean;
};

export function QuestLevel({ level, active = false }: QuestLevelProps) {
  return (
    <span
      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded font-game text-[10px] ${
        active
          ? "game-level-active text-[var(--game-bg)]"
          : "game-level-inactive text-[var(--game-cyan)]"
      }`}
      aria-hidden
    >
      {level}
    </span>
  );
}

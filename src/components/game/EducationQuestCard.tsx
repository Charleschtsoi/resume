import type { EducationQuest } from "@/content/skills-game";
import { QuestLevel } from "@/components/game/QuestLevel";

type EducationQuestCardProps = {
  quest: EducationQuest;
};

export function EducationQuestCard({ quest }: EducationQuestCardProps) {
  const isActive = quest.status === "active";

  return (
    <article className={`game-education-quest rounded-xl p-6 ${isActive ? "game-education-active" : ""}`}>
      <div className="flex items-start gap-4">
        <QuestLevel level={quest.level} active={isActive} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-game text-[9px] tracking-widest text-[var(--game-gold)] uppercase">
              {quest.questTitle}
            </p>
            {isActive && (
              <span className="rounded-full bg-[var(--game-cyan)]/10 px-2 py-0.5 font-game text-[8px] tracking-wider text-[var(--game-cyan)] uppercase">
                In progress
              </span>
            )}
            {!isActive && (
              <span className="rounded-full bg-[var(--game-green)]/10 px-2 py-0.5 font-game text-[8px] tracking-wider text-[var(--game-green)] uppercase">
                Complete
              </span>
            )}
          </div>
          <h3 className="mt-2 font-semibold text-[var(--apple-black)]">{quest.school}</h3>
          <p className="text-muted-foreground">{quest.degree}</p>
          {quest.period && (
            <p className="mt-1 font-game text-[9px] tracking-wider text-muted-foreground uppercase">
              {quest.period}
            </p>
          )}
          {quest.focus && (
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="text-[var(--game-cyan)]">▸</span> Focus: {quest.focus}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

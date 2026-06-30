import Link from "next/link";
import { coreStrengths } from "@/content/resume";
import { getStoryQuest } from "@/content/game-theme";
import { QuestLevel } from "@/components/game/QuestLevel";
import { Button } from "@/components/ui/button";

export function RoleFitSection() {
  const quest = getStoryQuest("why-fit");

  return (
    <section
      id="why-fit"
      aria-labelledby="why-fit-heading"
      className="scroll-mt-20 bg-[var(--apple-gray-100)] px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="flex items-start gap-4">
          <QuestLevel level={quest.level} active />
          <div>
            <p className="font-game text-[10px] tracking-[0.2em] text-[var(--apple-blue)] uppercase">
              Final Loadout
            </p>
            <h2
              id="why-fit-heading"
              className="mt-2 text-headline font-semibold tracking-tight text-[var(--apple-black)]"
            >
              {coreStrengths.title}
            </h2>
            <p className="mt-1 font-game text-[9px] tracking-widest text-[var(--game-gold)] uppercase">
              Quest {quest.level}: {quest.questTitle}
            </p>
          </div>
        </div>
        <ul className="mt-8 space-y-4">
          {coreStrengths.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 40)}
              className="game-card-light rounded-xl px-5 py-4 text-base leading-relaxed text-muted-foreground"
            >
              <span className="mr-2 text-[var(--game-cyan)]">▸</span>
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button asChild variant="outline" className="border-[var(--game-border)]">
            <Link href="/experience" className="font-game text-[10px] tracking-wider uppercase">
              ▶ Full quest log
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

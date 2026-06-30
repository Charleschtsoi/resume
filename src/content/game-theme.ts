export type QuestMeta = {
  level: number;
  questTitle: string;
};

export const storyQuestMeta: Record<string, QuestMeta> = {
  hero: { level: 0, questTitle: "Prologue" },
  cathay: { level: 1, questTitle: "The Mobile Frontier" },
  bridge: { level: 7, questTitle: "Regulated Real-Time" },
  apple: { level: 10, questTitle: "Architectural Standard" },
  aahk: { level: 12, questTitle: "AI in Production" },
  fit: { level: 13, questTitle: "Continuous Learning" },
  "why-fit": { level: 14, questTitle: "Core Loadout" },
};

export const experienceQuestMeta: Record<string, QuestMeta> = {
  "Airport Authority Hong Kong": { level: 12, questTitle: "AI in Production" },
  Apple: { level: 10, questTitle: "Architectural Standard" },
  Accenture: { level: 8, questTitle: "Integration Architect" },
  "The Hong Kong Jockey Club": { level: 7, questTitle: "Regulated Real-Time" },
  "A.S. Watson Group": { level: 6, questTitle: "E-commerce Rollout" },
  "Cathay Pacific Airways": { level: 1, questTitle: "The Mobile Frontier" },
};

export function getStoryQuest(id: string): QuestMeta {
  return storyQuestMeta[id] ?? { level: 0, questTitle: "Side Quest" };
}

export function getExperienceQuest(company: string): QuestMeta {
  return experienceQuestMeta[company] ?? { level: 0, questTitle: "Career Quest" };
}

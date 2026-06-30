import { profile } from "@/content/resume";

export type QuestMeta = {
  level: number;
  questTitle: string;
};

/** Career year count — Cathay 2012 → 2026 */
export const careerYears = profile.yearsExperience;

/** In-game occupation / current role */
export const currentOccupation = profile.currentOccupation;

/** Current player level (2026 — two years at AAHK) */
export const currentPlayerLevel = 14;

export const storyQuestMeta: Record<string, QuestMeta> = {
  hero: { level: 0, questTitle: "Prologue" },
  cathay: { level: 1, questTitle: "The Mobile Frontier" },
  bridge: { level: 7, questTitle: "Regulated Real-Time" },
  apple: { level: 10, questTitle: "Architectural Standard" },
  aahk: { level: 14, questTitle: "AI in Production" },
  fit: { level: 15, questTitle: "Continuous Learning" },
  "why-fit": { level: 16, questTitle: "Core Loadout" },
};

export const experienceQuestMeta: Record<string, QuestMeta> = {
  "Airport Authority Hong Kong": { level: 14, questTitle: "AI in Production" },
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

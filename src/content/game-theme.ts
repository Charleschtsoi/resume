import { profile } from "@/content/resume";

export type QuestMeta = {
  level: number;
  questTitle: string;
};

/** Career year count — Cathay 2012 → 2026 */
export const careerYears = profile.yearsExperience;

/** Current role title */
export const currentOccupation = profile.currentOccupation;

/** Current level (maps to years of experience — factual) */
export const currentPlayerLevel = 14;

export const storyQuestMeta: Record<string, QuestMeta> = {
  hero: { level: 0, questTitle: "Introduction" },
  cathay: { level: 1, questTitle: "Mobile product ownership" },
  bridge: { level: 7, questTitle: "Regulated real-time systems" },
  apple: { level: 10, questTitle: "Edge & serverless delivery" },
  aahk: { level: 14, questTitle: "AI in production" },
  fit: { level: 15, questTitle: "Continuous learning" },
  "why-fit": { level: 16, questTitle: "What I bring" },
};

export const experienceQuestMeta: Record<string, QuestMeta> = {
  "Airport Authority Hong Kong": { level: 14, questTitle: "AI in production" },
  Apple: { level: 10, questTitle: "Edge & serverless delivery" },
  Accenture: { level: 8, questTitle: "Integration architecture" },
  "The Hong Kong Jockey Club": { level: 7, questTitle: "Event-driven messaging" },
  "A.S. Watson Group": { level: 6, questTitle: "E-commerce rollout" },
  "Cathay Pacific Airways": { level: 1, questTitle: "Mobile product ownership" },
};

export function getStoryQuest(id: string): QuestMeta {
  return storyQuestMeta[id] ?? { level: 0, questTitle: "Chapter" };
}

export function getExperienceQuest(company: string): QuestMeta {
  return experienceQuestMeta[company] ?? { level: 0, questTitle: "Role" };
}

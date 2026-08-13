import { profile } from "@/content/resume";

/** Career year count — Cathay 2012 → 2026 */
export const careerYears = profile.yearsExperience;

/** Current role title */
export const currentOccupation = profile.currentOccupation;

/** Plain chapter titles for story / experience (no levels) */
export const storyChapterTitle: Record<string, string> = {
  hero: "Introduction",
  cathay: "Mobile product ownership",
  bridge: "Regulated real-time systems",
  apple: "Edge & serverless delivery",
  aahk: "AI in production",
  fit: "Continuous learning",
  "why-fit": "What I bring",
};

export const experienceChapterTitle: Record<string, string> = {
  "Airport Authority Hong Kong": "AI in production",
  Apple: "Edge & serverless delivery",
  Accenture: "Integration architecture",
  "The Hong Kong Jockey Club": "Event-driven messaging",
  "A.S. Watson Group": "E-commerce rollout",
  "Cathay Pacific Airways": "Mobile product ownership",
};

export function getStoryChapterTitle(id: string): string {
  return storyChapterTitle[id] ?? "Chapter";
}

export function getExperienceChapterTitle(company: string): string {
  return experienceChapterTitle[company] ?? "Role";
}

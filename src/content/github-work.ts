import { profile } from "@/content/resume";

export type WorkPillar = "ai" | "product" | "rigour";

export type WorkProject = {
  name: string;
  repoUrl: string;
  secondaryRepoUrl?: string;
  productionSlug?: string;
  language?: string;
  stars?: number;
  pillar: WorkPillar;
  headline: string;
  talkTrack: string;
  roleRelevance: string;
  tags: string[];
};

export const githubProfileUrl = `${profile.links.github}?tab=repositories`;

export const githubWorkIntro = {
  title: "Hands-on proof",
  subtitle: "Curated from GitHub — not a second resume",
  framingParagraph:
    "Day job is enterprise AI at the airport. Separately, I keep a focused set of repositories to stay hands-on — AI delivery, shipping product, and security-aware design. I don't ask panels to browse all 33 repos; these four show what I bring to technical product and architecture conversations.",
  openingScript:
    "I don't ask the panel to browse all of GitHub — I curate a few repos that show how I stay current: AI delivery, shipping product, and security-aware design.",
  closingScript:
    "This sits on top of twelve years in tier-one delivery — CUHK MSc adds formal depth. Happy to go deeper on any repo or stay on enterprise work at AAHK.",
};

export const workPillars: Record<
  WorkPillar,
  { title: string; description: string }
> = {
  ai: {
    title: "AI & agents",
    description: "Scoped delivery, LLM integration, and GenAI in product context",
  },
  product: {
    title: "Product delivery",
    description: "Presenter-first UX and shipped utilities end-to-end",
  },
  rigour: {
    title: "Regulated rigour",
    description: "Security-aware tooling aligned with diligence and compliance",
  },
};

export const featuredProjects: WorkProject[] = [
  {
    name: "LungLens",
    repoUrl: "https://github.com/Charleschtsoi/LungLens",
    secondaryRepoUrl: "https://github.com/Charleschtsoi/lunglens-backend",
    productionSlug: "lunglens",
    language: "TypeScript + Python",
    stars: 2,
    pillar: "ai",
    headline: "Full-stack AI product — web + backend",
    roleRelevance: "Same shape as PoC→production: scoped MVP, API, model integration",
    talkTrack:
      "End-to-end AI app: scoped MVP, frontend + API, model integration — same shape as PoC to production, just at a smaller scale than enterprise.",
    tags: ["LLM", "Full-stack", "MVP"],
  },
  {
    name: "localLLM",
    repoUrl: "https://github.com/Charleschtsoi/localLLM",
    language: "Python",
    pillar: "ai",
    headline: "Local LLM experimentation",
    roleRelevance: "How I evaluate latency, cost, and fit before vendor recommendations",
    talkTrack:
      "Hands-on with local LLMs — how I evaluate latency, cost, and fit before recommending vendor solutions at work.",
    tags: ["LLM", "Evaluation"],
  },
  {
    name: "velora_GenAI_submission",
    repoUrl: "https://github.com/Charleschtsoi/velora_GenAI_submission",
    language: "TypeScript",
    pillar: "ai",
    headline: "GenAI feature in product context",
    roleRelevance: "Prompts, UX, and defining what 'done' means for a PoC",
    talkTrack:
      "GenAI feature in a real product context — prompts, UX, and what done means for a proof of concept.",
    tags: ["GenAI", "Product"],
  },
  {
    name: "security_alert",
    repoUrl: "https://github.com/Charleschtsoi/security_alert",
    language: "TypeScript",
    stars: 1,
    pillar: "rigour",
    headline: "Security-minded tooling",
    roleRelevance: "Echoes vendor diligence and regulated-environment thinking",
    talkTrack:
      "Security-minded tooling — aligns with regulated environments and the vendor diligence I run at AAHK.",
    tags: ["Security", "TypeScript"],
  },
];

export const optionalProjects: WorkProject[] = [
  {
    name: "openimpact2",
    repoUrl: "https://github.com/Charleschtsoi/openimpact2",
    language: "Python",
    pillar: "ai",
    headline: "Social impact analytics",
    roleRelevance: "Python analytics — use if asked about data science depth",
    talkTrack: "Python impact work — good for data science or analytics depth questions.",
    tags: ["Python", "Analytics"],
  },
  {
    name: "frontend-slides",
    repoUrl: "https://github.com/Charleschtsoi/frontend-slides",
    language: "TypeScript",
    pillar: "product",
    headline: "Beautiful web slides",
    roleRelevance: "How technical stories are told to stakeholders",
    talkTrack:
      "I care how technical stories are told — connects to panel communication and narrative clarity.",
    tags: ["Presentation"],
  },
];

export const githubBridge = {
  text: "Hands-on repos: LungLens, localLLM, security_alert — curated on the Work page",
  href: "/work",
};

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
  achievement?: string;
};

export const githubProfileUrl = `${profile.links.github}?tab=repositories`;

export const githubWorkIntro = {
  title: "Hands-on proof",
  subtitle: "Curated from GitHub — not a second resume",
  framingParagraph:
    "Day job is enterprise AI at the airport. Separately, I keep a focused set of repositories to stay hands-on — AI agents, shipped mobile products, and security-aware design. I don't ask panels to browse all 33 repos; these five show what I bring to technical product and architecture conversations.",
  openingScript:
    "I don't ask the panel to browse all of GitHub — I curate a few repos that show how I stay current: production AI, mobile product delivery, and agent architecture thinking.",
  closingScript:
    "This sits on top of twelve years in tier-one delivery — CUHK MSc adds formal depth. Happy to go deeper on any repo or stay on enterprise work at AAHK.",
};

export const workPillars: Record<
  WorkPillar,
  { title: string; description: string }
> = {
  ai: {
    title: "AI & agents",
    description: "Scoped delivery, LLM integration, and agent architecture",
  },
  product: {
    title: "Product delivery",
    description: "Mobile apps, presenter-first UX, and shipped utilities end-to-end",
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
    achievement: "LEGENDARY",
    headline: "Full-stack AI product — live in production",
    roleRelevance:
      "PoC→production shape: scoped MVP, BFF routes, async jobs, Hugging Face inference",
    talkTrack:
      "End-to-end AI app with a live Vercel frontend and Hugging Face backend — same PoC-to-production shape as enterprise, just at a smaller scale.",
    tags: ["LLM", "Full-stack", "Production"],
  },
  {
    name: "AI Agent X-Ray",
    repoUrl: "https://github.com/Charleschtsoi/ai-agent-xray",
    language: "HTML + JS",
    pillar: "ai",
    achievement: "EPIC",
    headline: "Interactive agent tool-calling visualizer",
    roleRelevance:
      "Mirrors AAHK agent work — tool routing, guardrails, token flow, and failure modes",
    talkTrack:
      "Side-by-side chat and x-ray view of LLM tool calling — how I explain agent architecture to stakeholders who need to see the flow, not just the output.",
    tags: ["LLM Agents", "Tool Calling", "Architecture"],
  },
  {
    name: "Hermes",
    repoUrl: "https://github.com/Charleschtsoi/Hermes",
    language: "React Native + Expo",
    stars: 3,
    pillar: "product",
    achievement: "RARE",
    headline: "ExpiryScanner — barcode + AI shelf-life mobile app",
    roleRelevance:
      "Camera scan → GPT-4o-mini analysis → Supabase inventory — full product loop",
    talkTrack:
      "React Native app with barcode scanning, AI product ID, Supabase backend, and push notifications — a complete mobile product, not a tutorial repo.",
    tags: ["Mobile", "GenAI", "Supabase"],
  },
  {
    name: "Motion Resume",
    repoUrl: "https://github.com/Charleschtsoi/resume",
    productionSlug: "resume",
    language: "Next.js + Motion",
    pillar: "product",
    achievement: "META",
    headline: "This site — narrative resume with presenter mode",
    roleRelevance:
      "Presentation-first product thinking — scroll story, chapter nav, curated showcase",
    talkTrack:
      "The site you're on — built to be screen-shared in interviews. Presenter mode, chapter jumps, and curated work proof in one package.",
    tags: ["Next.js", "Presenter UX", "Portfolio"],
  },
  {
    name: "security_alert",
    repoUrl: "https://github.com/Charleschtsoi/security_alert",
    language: "TypeScript",
    stars: 1,
    pillar: "rigour",
    achievement: "SECURE",
    headline: "Security-minded alerting tooling",
    roleRelevance:
      "Echoes vendor diligence and regulated-environment thinking at AAHK",
    talkTrack:
      "Security-minded tooling — aligns with regulated environments and the vendor diligence I run at work.",
    tags: ["Security", "TypeScript"],
  },
];

export const optionalProjects: WorkProject[] = [
  {
    name: "localLLM",
    repoUrl: "https://github.com/Charleschtsoi/localLLM",
    language: "Python",
    stars: 2,
    pillar: "ai",
    headline: "Local LLM experimentation",
    roleRelevance: "Latency, cost, and fit evaluation before vendor recommendations",
    talkTrack:
      "Hands-on with local LLMs — how I evaluate latency, cost, and fit before recommending vendor solutions at work.",
    tags: ["LLM", "Evaluation"],
  },
  {
    name: "velora-beauty-tracker",
    repoUrl: "https://github.com/Charleschtsoi/velora-beauty-tracker",
    language: "React Native + Expo",
    stars: 2,
    pillar: "product",
    headline: "Beauty product expiration tracker",
    roleRelevance: "Earlier mobile product iteration — precursor to Hermes",
    talkTrack:
      "React Native beauty tracker — earlier iteration of the mobile + expiry product space that became Hermes.",
    tags: ["Mobile", "Expo"],
  },
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
  text: "Hands-on repos: LungLens, AI Agent X-Ray, Hermes — curated on the Work page",
  href: "/work",
};

import { profile } from "@/content/resume";

export type WorkPillar = "ai" | "product" | "rigour";

export type WorkProject = {
  name: string;
  repoUrl?: string;
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
  status?: "live" | "coming-soon";
};

export const githubProfileUrl = `${profile.links.github}?tab=repositories`;

export const githubWorkIntro = {
  title: "Hands-on proof",
  subtitle: "AI · Machine learning · App development",
  framingParagraph:
    "I specialise in AI, machine learning, and app development — from enterprise LLM agents to mobile products on the App Store. These curated repos show production-grade work, not tutorial code. I'm also open to any project where I can help.",
  openingScript:
    "My strengths are AI, machine learning, and app development — here's a curated set that shows production work, not every repo on GitHub.",
  closingScript:
    "I'm open to collaborations and new projects in AI, ML, or mobile — happy to go deeper on any repo or discuss how I can help.",
};

export const workPillars: Record<
  WorkPillar,
  { title: string; description: string }
> = {
  ai: {
    title: "AI & machine learning",
    description: "LLM agents, model integration, ML pipelines, and evaluation",
  },
  product: {
    title: "App development",
    description: "React Native, Expo, and full-stack products — PoC to App Store",
  },
  rigour: {
    title: "Production rigour",
    description: "Security-aware design, scoped delivery, and enterprise discipline",
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
    status: "live",
    headline: "Full-stack AI / ML product — live in production",
    roleRelevance:
      "Vision models + LLM synthesis — PoC to production with BFF routes and Hugging Face inference",
    talkTrack:
      "End-to-end AI/ML app with a live Vercel frontend and Hugging Face backend — ensemble models, async jobs, production deployment.",
    tags: ["ML", "LLM", "Production"],
  },
  {
    name: "AI Agent X-Ray",
    repoUrl: "https://github.com/Charleschtsoi/ai-agent-xray",
    language: "HTML + JS",
    pillar: "ai",
    achievement: "EPIC",
    headline: "Interactive agent tool-calling visualizer",
    roleRelevance:
      "AI agent architecture — tool routing, guardrails, token flow, and failure modes",
    talkTrack:
      "Side-by-side chat and x-ray view of LLM tool calling — how I explain agent architecture to stakeholders.",
    tags: ["LLM Agents", "AI", "Architecture"],
  },
  {
    name: "Hermes",
    repoUrl: "https://github.com/Charleschtsoi/Hermes",
    language: "React Native + Expo",
    stars: 3,
    pillar: "product",
    achievement: "RARE",
    headline: "ExpiryScanner — barcode + AI mobile app",
    roleRelevance:
      "App development: camera scan → GPT-4o-mini → Supabase — full product loop",
    talkTrack:
      "React Native app with barcode scanning, AI product ID, Supabase backend, and push notifications.",
    tags: ["App Dev", "GenAI", "Mobile"],
  },
  {
    name: "Product Tax Deduction Log",
    language: "React Native + Expo",
    pillar: "product",
    achievement: "SOON",
    status: "coming-soon",
    productionSlug: "product-tax-deduction-log",
    headline: "Mobile app for logging product purchases and tax deductions",
    roleRelevance:
      "App development — personal finance utility, App Store submission in progress",
    talkTrack:
      "A mobile app I'm shipping to the App Store soon — helps track product purchases and tax-deductible expenses. Ask me for a TestFlight preview.",
    tags: ["App Store Soon", "Mobile", "Finance"],
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
      "Full-stack web app — scroll narrative, presenter mode, curated showcase",
    talkTrack:
      "The site you're on — built to be screen-shared. Presenter mode, chapter jumps, and curated work proof.",
    tags: ["Next.js", "Web App", "Portfolio"],
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
    roleRelevance: "ML evaluation — latency, cost, and fit before vendor recommendations",
    talkTrack:
      "Hands-on with local LLMs — how I evaluate models before recommending solutions.",
    tags: ["ML", "LLM", "Evaluation"],
  },
  {
    name: "openimpact2",
    repoUrl: "https://github.com/Charleschtsoi/openimpact2",
    language: "Python",
    pillar: "ai",
    headline: "Social impact analytics",
    roleRelevance: "Python ML analytics — data science depth",
    talkTrack: "Python analytics work — good for data science or ML depth questions.",
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
  {
    name: "security_alert",
    repoUrl: "https://github.com/Charleschtsoi/security_alert",
    language: "TypeScript",
    stars: 1,
    pillar: "rigour",
    headline: "Security-minded alerting tooling",
    roleRelevance: "Security-aware app development and regulated environments",
    talkTrack:
      "Security-minded tooling — aligns with production discipline and vendor diligence.",
    tags: ["Security", "TypeScript"],
  },
];

export const githubBridge = {
  text: "Hands-on repos: LungLens, AI Agent X-Ray, Hermes, Product Tax Deduction Log — curated on the Work page",
  href: "/work",
};

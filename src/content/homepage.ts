import { certifications, experience } from "@/content/resume";
import { careerYears } from "@/content/game-theme";

export type HeroStat = {
  value: number;
  suffix?: string;
  label: string;
};

export const heroStats: HeroStat[] = [
  { value: careerYears, label: "Years experience" },
  { value: 6, label: "Employers" },
  { value: certifications.length, label: "Certifications" },
];

export type ValuePillar = {
  id: string;
  title: string;
  proof: string;
  standing: string;
};

export const valuePillars: ValuePillar[] = [
  {
    id: "ai",
    title: "AI & ML",
    proof:
      "Built LungLens — a full-stack AI health literacy tool using Hugging Face inference API (live at lunglenshk.vercel.app). Helped design an LLM-based monitoring agent at AAHK using Power Automate + Dynatrace API + ServiceNow.",
    standing: "In production",
  },
  {
    id: "product",
    title: "Product Management",
    proof:
      "Fourteen years across Apple, HKJC, Cathay Pacific, and AAHK. At Cathay Pacific, the mobile app grew from ~10,000 to ~120,000 monthly active users (12x) during my ownership.",
    standing: "14 years delivering",
  },
  {
    id: "eda",
    title: "Event-Driven Architecture",
    proof:
      "At HKJC, worked on a Solace migration — moving infrastructure from traditional REST APIs toward event-based messaging.",
    standing: "Deployed at HKJC",
  },
  {
    id: "edge",
    title: "Edge Computing",
    proof:
      "At Apple, contributed to docserverless — moving numerical computation from server-side to edge user devices.",
    standing: "Shipped at Apple",
  },
];

export const nowBuilding = {
  title: "Now",
  body: "Designing 北辰 (North Star) — a Bazi/ZiWei astrology app inspired by Co-Star, targeting iOS. Writing about GenAI systems architecture on Medium.",
  links: [
    { label: "Medium", href: "https://medium.com/@charleschtsoi" },
    { label: "North Star on Work", href: "/work#north-star" },
  ],
};

export type WritingArticle = {
  id: string;
  title: string;
  summary: string;
  href: string;
};

export const writingArticles: WritingArticle[] = [
  {
    id: "genai-rest",
    title: "GenAI Broke the Contract That REST APIs Were Built On",
    summary: "Why event-driven architecture is the real answer for AI workloads",
    href: "https://medium.com/@charleschtsoi/genai-broke-rest-1693c76298c5",
  },
  {
    id: "transformer",
    title: "Transformer — 一篇論文如何重新定義人工智慧的未來",
    summary: "Deep dive into the architecture that changed everything",
    href: "https://medium.com/@charleschtsoi/transformer-%E4%B8%80%E7%AF%87%E8%AB%96%E6%96%87%E5%A6%82%E4%BD%95%E9%87%8D%E6%96%B0%E5%AE%9A%E7%BE%A9%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E7%9A%84%E6%9C%AA%E4%BE%86-7adb450a5f14",
  },
  {
    id: "vision-multimodal",
    title: "當電腦學會『看』與『說』— 從 Vision Transformer 到多模態 AI 的技術全景",
    summary: "From Vision Transformers to multimodal AI — the full technical landscape",
    href: "https://medium.com/@charleschtsoi/%E7%95%B6%E9%9B%BB%E8%85%A6%E5%AD%B8%E6%9C%83-%E7%9C%8B-%E8%88%87-%E8%AA%AA-%E5%BE%9E-vision-transformer-%E5%88%B0%E5%A4%9A%E6%A8%A1%E6%85%A8-ai-%E7%9A%84%E6%8A%80%E8%A1%93%E5%85%A8%E6%99%AF-a9ebb281a2b9",
  },
];

export type TimelineMilestone = {
  id: string;
  company: string;
  period: string;
  role: string;
  chapterTitle: string;
  teaser: string[];
  storyAnchor?: string;
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "cathay",
    company: "Cathay Pacific Airways",
    period: "2012 – 2018",
    role: "Product Owner",
    chapterTitle: "Mobile product ownership",
    teaser: [
      "Cathay Pacific mobile app grew from ~10,000 to ~120,000 monthly active users (12x) during my ownership",
      "Owned product lifecycle and PSS integration across six years",
    ],
    storyAnchor: "cathay",
  },
  {
    id: "bridge",
    company: "HKJC & Accenture",
    period: "2019 – 2022",
    role: "Solutions Analyst · Integration Architect",
    chapterTitle: "Regulated real-time systems",
    teaser: [
      "Helped migrate HKJC infrastructure from REST APIs toward Solace event-based messaging",
      "API contracts and value-driven delivery at Accenture",
    ],
    storyAnchor: "bridge",
  },
  {
    id: "apple",
    company: "Apple",
    period: "2022 – 2024",
    role: "Engineering Project Manager",
    chapterTitle: "Edge & serverless delivery",
    teaser: [
      "Contributed to docserverless — numerical computation moved from server-side to edge devices",
      "Cross-team API delivery for WWDC releases",
    ],
    storyAnchor: "apple",
  },
  {
    id: "aahk",
    company: "Airport Authority Hong Kong",
    period: "2024 – Present",
    role: "Project Manager",
    chapterTitle: "AI in production",
    teaser: [
      "Product design and vendor delivery for an LLM monitoring agent — estimated 80% less manual reporting time",
      "Vendor diligence and legacy-to-cloud migration",
    ],
    storyAnchor: "aahk",
  },
];

export type StrengthTab = {
  id: string;
  label: string;
  metric?: { value: string; label: string };
  bullets: string[];
};

export const strengthTabs: StrengthTab[] = [
  {
    id: "ai",
    label: "AI & ML",
    metric: {
      value: "~80%",
      label: "Estimated reduction in manual reporting time (AAHK LLM agent)",
    },
    bullets: [
      "LungLens — full-stack AI health literacy tool, live at lunglenshk.vercel.app",
      "AAHK LLM monitoring agent — Power Automate + Dynatrace + ServiceNow; product design and vendor delivery",
      "Writing on GenAI systems architecture and multimodal AI on Medium",
      "MSc coursework in data science, AI, and system design",
    ],
  },
  {
    id: "product",
    label: "Product",
    metric: { value: "12x", label: "Cathay mobile MAU growth (~10k → ~120k)" },
    bullets: [
      "Fourteen years across Apple, HKJC, Cathay Pacific, and AAHK",
      "Currently designing 北辰 (North Star) — Bazi/ZiWei astrology app for iOS",
      "Hands-on builds: LungLens, Hermes, Product Tax Deduction Log",
      "Open to collaborations, consulting, and full-time roles where I can help",
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    metric: { value: "14 years", label: "Enterprise delivery since 2012" },
    bullets: [
      "HKJC Solace migration — traditional APIs toward event-based messaging",
      "Apple docserverless — edge computing for numerical workloads",
      "Vendor technical evaluation — API, security, scalability",
      "Available for AI, ML, and app development projects",
    ],
  },
];

export type FeaturedLink = {
  id: string;
  title: string;
  headline: string;
  href: string;
  external?: boolean;
  tag?: string;
  status?: string;
};

export const featuredLinks: FeaturedLink[] = [
  {
    id: "lunglens",
    title: "LungLens",
    headline:
      "Solo-built AI health literacy tool — bilingual X-ray education, live on Vercel",
    href: "https://lunglenshk.vercel.app",
    external: true,
    tag: "AI / ML",
    status: "In production",
  },
  {
    id: "aahk-agent",
    title: "AAHK LLM Monitoring Agent",
    headline:
      "Product design and vendor delivery — estimated 80% less manual reporting time",
    href: "/work#aahk-llm-monitoring-agent",
    tag: "Enterprise AI",
    status: "In production",
  },
  {
    id: "north-star",
    title: "北辰 (North Star)",
    headline:
      "Bazi/ZiWei astrology app for iOS — design phase, user stories mapped",
    href: "/work#north-star",
    tag: "Mobile",
    status: "In progress",
  },
];

/** Employer count for stats — derived from experience list */
export const tierOneEmployerCount = experience.length;

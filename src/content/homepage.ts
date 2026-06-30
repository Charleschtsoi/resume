import { certifications, experience } from "@/content/resume";
import { careerYears } from "@/content/game-theme";
import { featuredProjects } from "@/content/github-work";

export type HeroStat = {
  value: number;
  suffix?: string;
  label: string;
  gameLabel?: string;
};

export const heroStats: HeroStat[] = [
  { value: careerYears, suffix: "+", label: "Years experience", gameLabel: "LVL" },
  { value: 6, label: "Tier-1 employers", gameLabel: "QUESTS" },
  { value: certifications.length, label: "Certifications", gameLabel: "BADGES" },
];

export type ValuePillar = {
  id: string;
  title: string;
  proof: string;
  icon: string;
  skillPoints: number;
};

export const valuePillars: ValuePillar[] = [
  {
    id: "ai",
    title: "AI & machine learning",
    proof: "LLM agents in production, model integration, ML pipelines, and hands-on evaluation",
    icon: "✦",
    skillPoints: 92,
  },
  {
    id: "product",
    title: "App development",
    proof: "React Native, Expo, and full-stack products — from PoC to App Store submission",
    icon: "📱",
    skillPoints: 90,
  },
  {
    id: "architecture",
    title: "Enterprise delivery",
    proof: "14+ years at Apple, AAHK, HKJC — scope discipline, vendor diligence, and shipping",
    icon: "🛡",
    skillPoints: 88,
  },
];

export type TimelineMilestone = {
  id: string;
  company: string;
  period: string;
  role: string;
  level: number;
  questTitle: string;
  teaser: string[];
  storyAnchor?: string;
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "cathay",
    company: "Cathay Pacific Airways",
    period: "2012 – 2018",
    role: "Product Owner",
    level: 1,
    questTitle: "The Mobile Frontier",
    teaser: [
      "Six years building the mobile app and modernising legacy notification systems",
      "Learned lifecycle ownership and PSS integration at scale",
    ],
    storyAnchor: "cathay",
  },
  {
    id: "bridge",
    company: "HKJC & Accenture",
    period: "2019 – 2022",
    role: "Solutions Analyst · Integration Architect",
    level: 7,
    questTitle: "Regulated Real-Time",
    teaser: [
      "Real-time betting systems with Solace Event Mesh in a regulated environment",
      "API contracts and value-driven delivery at Accenture",
    ],
    storyAnchor: "bridge",
  },
  {
    id: "apple",
    company: "Apple",
    period: "2022 – 2024",
    role: "Engineering Project Manager",
    level: 10,
    questTitle: "Architectural Standard",
    teaser: [
      "iWork serverless migration with architectural review at every step",
      "Cross-team API delivery for WWDC releases",
    ],
    storyAnchor: "apple",
  },
  {
    id: "aahk",
    company: "Airport Authority Hong Kong",
    period: "2024 – Present",
    role: "Project Manager",
    level: 14,
    questTitle: "AI in Production",
    teaser: [
      "Two years deploying LLM agents in production — 80% less manual query time",
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
    metric: { value: "80%", label: "Reduction in manual query time (LLM agents)" },
    bullets: [
      "LLM-based agents deployed to production at AAHK",
      "Machine learning products: LungLens vision ensemble, localLLM evaluation",
      "AI Agent X-Ray — tool-calling architecture and guardrails",
      "MSc coursework in data science, AI, and system design",
    ],
  },
  {
    id: "product",
    label: "App Dev",
    metric: { value: "App Store", label: "Product Tax Deduction Log — submitting soon" },
    bullets: [
      "React Native + Expo: Hermes, Velora lineage, and mobile utilities",
      "Full product loop: scan → AI analysis → backend → notifications",
      "Web apps: LungLens, this portfolio site, presenter-first UX",
      "Open to any app development project where I can help",
    ],
  },
  {
    id: "architecture",
    label: "Delivery",
    metric: { value: "14+", label: "Years enterprise experience" },
    bullets: [
      "Apple, AAHK, HKJC — regulated and high-stakes environments",
      "Scope gatekeeping — deliver AI agents in weeks, not months",
      "Vendor technical evaluation — API, security, scalability",
      "Available for consulting, collaborations, and full-time roles",
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
  achievement?: string;
};

export const featuredLinks: FeaturedLink[] = [
  {
    id: "lunglens",
    title: "LungLens",
    headline: "AI / ML product — live production deployment",
    href: "/showcase#lunglens",
    tag: "Production",
    achievement: "LEGENDARY",
  },
  {
    id: "tax-deduction-log",
    title: "Product Tax Deduction Log",
    headline: "Mobile app for product purchases & tax deductions — App Store soon",
    href: "/showcase#product-tax-deduction-log",
    tag: "App Store Soon",
    achievement: "SOON",
  },
  {
    id: "hermes",
    title: "Hermes",
    headline: featuredProjects.find((p) => p.name === "Hermes")?.headline ?? "Barcode + AI mobile app",
    href: featuredProjects.find((p) => p.name === "Hermes")?.repoUrl ?? "/work",
    external: true,
    tag: "Mobile",
    achievement: "RARE",
  },
];

/** Employer count for stats — derived from experience list */
export const tierOneEmployerCount = experience.length;

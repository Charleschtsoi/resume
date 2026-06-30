export type SkillAbility = {
  name: string;
  mastery: number;
  tier?: "common" | "rare" | "epic" | "legendary";
};

export type SkillBranch = {
  id: string;
  title: string;
  icon: string;
  branchLabel: string;
  description: string;
  abilities: SkillAbility[];
};

export const skillBranches: SkillBranch[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "✦",
    branchLabel: "Intelligence Tree",
    description: "LLM agents, model integration, and data science depth",
    abilities: [
      { name: "Generative AI (LLM Agents)", mastery: 92, tier: "legendary" },
      { name: "Machine Learning Pipelines", mastery: 85, tier: "epic" },
      { name: "Data Science & Analytics", mastery: 82, tier: "epic" },
      { name: "Data Visualization", mastery: 78, tier: "rare" },
      { name: "SQL", mastery: 80, tier: "rare" },
    ],
  },
  {
    id: "app-dev",
    title: "App Development",
    icon: "📱",
    branchLabel: "Builder Tree",
    description: "Mobile and full-stack products — PoC to App Store",
    abilities: [
      { name: "React Native + Expo", mastery: 90, tier: "legendary" },
      { name: "Next.js / TypeScript", mastery: 88, tier: "epic" },
      { name: "Python (FastAPI / ML)", mastery: 85, tier: "epic" },
      { name: "CI/CD Pipelines", mastery: 82, tier: "rare" },
      { name: "Postman / API Testing", mastery: 80, tier: "rare" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Integration",
    icon: "🛡",
    branchLabel: "Systems Tree",
    description: "Enterprise integration, APIs, and event-driven design",
    abilities: [
      { name: "API Design (REST/JSON)", mastery: 92, tier: "legendary" },
      { name: "Event-Driven Architecture (Pub/Sub)", mastery: 88, tier: "epic" },
      { name: "Microservices & Serverless", mastery: 85, tier: "epic" },
      { name: "Solace Event Mesh", mastery: 82, tier: "rare" },
      { name: "System Integration (PSS, SAP)", mastery: 80, tier: "rare" },
    ],
  },
  {
    id: "craft",
    title: "Delivery & Methods",
    icon: "⚔",
    branchLabel: "Craft Tree",
    description: "Agile delivery, vendor diligence, and production rigour",
    abilities: [
      { name: "Agile / Scrum", mastery: 90, tier: "legendary" },
      { name: "Vendor Technical Evaluation", mastery: 88, tier: "epic" },
      { name: "SDLC & Scope Gatekeeping", mastery: 85, tier: "epic" },
      { name: "Splunk / Observability", mastery: 75, tier: "rare" },
      { name: "JIRA / Confluence", mastery: 85, tier: "rare" },
    ],
  },
];

export type CertBadge = {
  name: string;
  shortLabel: string;
  tier: "gold" | "silver" | "bronze";
  icon: string;
};

export const certificationBadges: CertBadge[] = [
  {
    name: "Solace Certified Event Driven Architecture Practitioner",
    shortLabel: "Solace EDA",
    tier: "gold",
    icon: "⚡",
  },
  {
    name: "Project Management Professional (PMP)",
    shortLabel: "PMP",
    tier: "gold",
    icon: "📋",
  },
  {
    name: "Professional Scrum Master (PSM I)",
    shortLabel: "PSM I",
    tier: "silver",
    icon: "🔄",
  },
  {
    name: "Professional Scrum Product Owner (PSPO I)",
    shortLabel: "PSPO I",
    tier: "silver",
    icon: "🎯",
  },
];

export type EducationQuest = {
  school: string;
  degree: string;
  period: string;
  focus: string;
  questTitle: string;
  level: number;
  status: "active" | "completed";
};

export const educationQuests: EducationQuest[] = [
  {
    school: "The Chinese University of Hong Kong (CUHK)",
    degree: "Master of Science in Information & Technology Management (MScITM)",
    period: "Expected Q1 2027",
    focus: "Data Science, AI, System Design, Strategic IT Management",
    questTitle: "MSc Intelligence Upgrade",
    level: 15,
    status: "active",
  },
  {
    school: "Lingnan University",
    degree: "Master & Bachelor of Philosophy",
    period: "",
    focus: "",
    questTitle: "Foundation Complete",
    level: 5,
    status: "completed",
  },
];

export function branchMastery(branch: SkillBranch): number {
  const total = branch.abilities.reduce((sum, a) => sum + a.mastery, 0);
  return Math.round(total / branch.abilities.length);
}

export const totalSkillPoints = skillBranches.reduce(
  (sum, branch) => sum + branch.abilities.reduce((s, a) => s + a.mastery, 0),
  0
);

export const maxSkillPoints = skillBranches.reduce(
  (sum, branch) => sum + branch.abilities.length * 100,
  0
);

export const overallMastery = Math.round((totalSkillPoints / maxSkillPoints) * 100);

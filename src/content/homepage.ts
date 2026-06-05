import { certifications, experience } from "@/content/resume";
import { featuredProjects } from "@/content/github-work";

export type HeroStat = {
  value: number;
  suffix?: string;
  label: string;
};

export const heroStats: HeroStat[] = [
  { value: 12, suffix: "+", label: "Years experience" },
  { value: 6, label: "Tier-1 employers" },
  { value: certifications.length, label: "Certifications" },
];

export type ValuePillar = {
  id: string;
  title: string;
  proof: string;
  icon: string;
};

export const valuePillars: ValuePillar[] = [
  {
    id: "product",
    title: "Product delivery",
    proof: "Stakeholder translation, backlog discipline, and full lifecycle ownership",
    icon: "◆",
  },
  {
    id: "architecture",
    title: "Systems architecture",
    proof: "API contracts, event-driven design, and integration at enterprise scale",
    icon: "◇",
  },
  {
    id: "ai",
    title: "AI & automation",
    proof: "LLM agents in production, vendor diligence, and scope gatekeeping",
    icon: "○",
  },
];

export type TimelineMilestone = {
  id: string;
  company: string;
  period: string;
  role: string;
  teaser: string[];
  storyAnchor?: string;
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "cathay",
    company: "Cathay Pacific Airways",
    period: "2012 – 2018",
    role: "Product Owner",
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
    teaser: [
      "iWork serverless migration with architectural review at every step",
      "Cross-team API delivery for WWDC releases",
    ],
    storyAnchor: "apple",
  },
  {
    id: "aahk",
    company: "Airport Authority Hong Kong",
    period: "2025 – Present",
    role: "Project Manager",
    teaser: [
      "LLM agents in production — 80% less manual query time",
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
    id: "product",
    label: "Product",
    metric: { value: "6 years", label: "Single-employer lifecycle ownership" },
    bullets: [
      "Translate business needs into engineering deliverables",
      "Backlog discipline and stakeholder negotiation",
      "Full product lifecycle — launch, maintain, evolve",
      "Presenter-first communication for technical stories",
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    metric: { value: "20%", label: "Less integration rework via API contracts" },
    bullets: [
      "REST/JSON API design and Swagger contracts",
      "Event-driven architecture with Solace Event Mesh",
      "Microservices, serverless, and legacy system integration",
      "Vendor technical evaluation — API, security, scalability",
    ],
  },
  {
    id: "ai",
    label: "AI & Platforms",
    metric: { value: "80%", label: "Reduction in manual query time" },
    bullets: [
      "LLM-based agents deployed to production",
      "Scope gatekeeping — deliver in weeks, not months",
      "Hands-on repos: LungLens, localLLM, and more",
      "MSc coursework in data science and system design",
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
};

export const featuredLinks: FeaturedLink[] = [
  {
    id: "lunglens",
    title: "LungLens",
    headline: "Full-stack AI product — live production deployment",
    href: "/showcase#lunglens",
    tag: "Production",
  },
  {
    id: "lunglens-repo",
    title: featuredProjects[0].name,
    headline: featuredProjects[0].headline,
    href: featuredProjects[0].repoUrl,
    external: true,
    tag: "GitHub",
  },
  {
    id: "localllm",
    title: featuredProjects[1].name,
    headline: featuredProjects[1].headline,
    href: featuredProjects[1].repoUrl,
    external: true,
    tag: "GitHub",
  },
];

/** Employer count for stats — derived from experience list */
export const tierOneEmployerCount = experience.length;

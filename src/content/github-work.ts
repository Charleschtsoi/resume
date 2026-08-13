import { profile } from "@/content/resume";

export type WorkPillar = "ai" | "product" | "architecture";

export type WorkProject = {
  id: string;
  name: string;
  repoUrl?: string;
  secondaryRepoUrl?: string;
  productionSlug?: string;
  liveUrl?: string;
  language?: string;
  stars?: number;
  pillar: WorkPillar;
  /** One-line headline */
  headline: string;
  /** Problem context */
  problem?: string;
  /** What was built / what it does */
  built: string;
  /** Measurable or factual outcome */
  outcome?: string;
  /** Role on the project */
  role: string;
  /** Tech stack summary */
  stack?: string;
  /** Optional speaker note for presenter mode */
  talkTrack?: string;
  tags: string[];
  achievement?: "Shipped" | "In Progress" | "Side Project";
  status?: "live" | "coming-soon" | "enterprise";
};

export const githubProfileUrl = `${profile.links.github}?tab=repositories`;

export const githubWorkIntro = {
  title: "Selected work",
  subtitle: "Problem → what was built → outcome",
  framingParagraph:
    "Career and product work across AI, mobile, and enterprise systems. Each card is grounded in a real role, stack, and result — not self-rated scores.",
  openingScript:
    "Here’s a selection of work I’ve been part of — some enterprise delivery, some products I’ve built myself.",
  closingScript:
    "Happy to go deeper on any of these — architecture decisions, stakeholder trade-offs, or how I’d approach your problem.",
};

export const workPillars: Record<
  WorkPillar,
  { title: string; description: string }
> = {
  ai: {
    title: "AI & machine learning",
    description: "Production agents and full-stack ML products",
  },
  product: {
    title: "Product & apps",
    description: "Mobile and consumer products — PoC to live",
  },
  architecture: {
    title: "Systems & architecture",
    description: "Event-driven, edge, and enterprise delivery",
  },
};

export const featuredProjects: WorkProject[] = [
  {
    id: "lunglens",
    name: "LungLens",
    repoUrl: "https://github.com/Charleschtsoi/LungLens",
    secondaryRepoUrl: "https://github.com/Charleschtsoi/lunglens-backend",
    productionSlug: "lunglens",
    liveUrl: "https://lunglenshk.vercel.app",
    language: "React + Python",
    pillar: "ai",
    achievement: "Shipped",
    status: "live",
    headline: "Full-stack AI health literacy tool — live in production",
    role: "Solo — design, frontend, backend, deployment",
    stack: "React + Python + Hugging Face Inference API, deployed on Vercel",
    problem:
      "Patients struggle to understand chest X-ray results in plain language.",
    built:
      "Bilingual (EN/繁中/簡中) educational tool that helps patients understand their chest X-ray results. Users upload X-ray images for anatomy-focused, plain-language educational analysis — explicitly not a diagnostic tool.",
    outcome: "Live at lunglenshk.vercel.app",
    talkTrack:
      "End-to-end AI/ML app I designed and shipped alone — Hugging Face inference, Vercel frontend, bilingual UX.",
    tags: ["ML", "LLM", "Production"],
  },
  {
    id: "aahk-llm-monitoring-agent",
    name: "AAHK LLM Monitoring Agent",
    pillar: "ai",
    achievement: "Shipped",
    status: "enterprise",
    headline: "Automated infrastructure health reporting for senior management",
    role: "Product lead — gathered requirements, designed approach, managed vendor delivery",
    stack: "Power Automate + Dynatrace API + ServiceNow integration",
    problem:
      "Senior management relied on manual infrastructure health reports (CPU, RAM, downtime).",
    built:
      "LLM-based monitoring agent that automates infrastructure health reporting via Power Automate, Dynatrace API, and ServiceNow. Led product design and vendor delivery — not coded solo.",
    outcome: "Estimated 80% reduction in manual reporting time",
    talkTrack:
      "Enterprise AI delivery at AAHK — requirements, design, and vendor management, not a solo coding story.",
    tags: ["LLM Agents", "Enterprise", "AAHK"],
  },
  {
    id: "cathay-mobile",
    name: "Cathay Pacific Mobile App",
    pillar: "product",
    achievement: "Shipped",
    status: "enterprise",
    headline: "Airline mobile app — lifecycle ownership over six years",
    role: "Product Manager / Product Owner",
    stack: "Mobile app integrated with legacy Passenger Service Systems (PSS)",
    problem:
      "Cathay needed a modern mobile experience wired into legacy PSS backends.",
    built:
      "Led product ownership for the Cathay Pacific mobile app — backlog, stakeholder negotiation, and XML/JSON integration with legacy PSS.",
    outcome: "Grew monthly active users from ~10,000 to ~120,000 (12x growth)",
    talkTrack:
      "Six years of lifecycle ownership — not a launch-and-leave story. MAU grew roughly 12x.",
    tags: ["Product", "Mobile", "Cathay"],
  },
  {
    id: "hkjc-solace",
    name: "HKJC Solace Migration",
    pillar: "architecture",
    achievement: "Shipped",
    status: "enterprise",
    headline: "Event-driven messaging for regulated real-time systems",
    role: "Product Manager / IT Solutions Analyst",
    stack: "Solace Event Mesh (Pub/Sub)",
    problem:
      "Core infrastructure depended on traditional REST API patterns under high concurrency.",
    built:
      "Led Solace migration — moved core infrastructure from traditional API architecture to Solace event-based messaging for real-time odds and betting flows.",
    outcome: "Event-based messaging in a regulated, high-concurrency environment",
    talkTrack:
      "HKJC Solace work — REST to event mesh in a compliance-heavy setting.",
    tags: ["Event-Driven", "Solace", "HKJC"],
  },
  {
    id: "apple-docserverless",
    name: "Apple docserverless",
    pillar: "architecture",
    achievement: "Shipped",
    status: "enterprise",
    headline: "Edge computing for numerical workloads",
    role: "Product Manager (Engineering Project Manager)",
    stack: "Edge / serverless — computation on user devices",
    problem:
      "Numerical computation ran server-side, adding latency and infrastructure cost.",
    built:
      "Led the docserverless project — moved numerical computation from server-side to edge user devices.",
    outcome: "Computation shifted to the edge on user devices",
    talkTrack:
      "Apple edge project — architectural review discipline applied to moving compute off the server.",
    tags: ["Edge Computing", "Apple", "Serverless"],
  },
  {
    id: "north-star",
    name: "北辰 (North Star)",
    pillar: "product",
    achievement: "In Progress",
    status: "coming-soon",
    headline: "Bazi/ZiWei astrology app inspired by Co-Star — targeting iOS",
    role: "Solo founder — design, architecture, development",
    stack: "React Native (planned)",
    problem:
      "Chinese astrology (Bazi/ZiWei) lacks a modern, Co-Star-quality mobile experience.",
    built:
      "Designing North Star — user stories mapped in Notion, preparing the React Native codebase for iOS.",
    outcome: "Design phase — in progress",
    talkTrack:
      "Current build focus — astrology product design for iOS, not vaporware: stories mapped, codebase next.",
    tags: ["In Progress", "Mobile", "iOS"],
  },
];

export const optionalProjects: WorkProject[] = [
  {
    id: "hermes",
    name: "Hermes",
    repoUrl: "https://github.com/Charleschtsoi/Hermes",
    language: "React Native + Expo",
    stars: 3,
    pillar: "product",
    achievement: "Side Project",
    headline: "ExpiryScanner — barcode + AI mobile app",
    role: "Solo builder",
    stack: "React Native + Expo + GPT-4o-mini + Supabase",
    built:
      "Barcode scanning, AI product ID, Supabase backend, and push notifications — full product loop.",
    tags: ["App Dev", "GenAI", "Mobile"],
  },
  {
    id: "ai-agent-xray",
    name: "AI Agent X-Ray",
    repoUrl: "https://github.com/Charleschtsoi/ai-agent-xray",
    language: "HTML + JS",
    pillar: "ai",
    achievement: "Side Project",
    headline: "Interactive agent tool-calling visualizer",
    role: "Solo builder",
    built:
      "Side-by-side chat and x-ray view of LLM tool calling — how I explain agent architecture to stakeholders.",
    tags: ["LLM Agents", "AI", "Architecture"],
  },
  {
    id: "tax-deduction-log",
    name: "Product Tax Deduction Log",
    language: "React Native + Expo",
    pillar: "product",
    achievement: "In Progress",
    status: "coming-soon",
    productionSlug: "product-tax-deduction-log",
    headline: "Mobile app for product purchases and tax deductions",
    role: "Solo builder",
    stack: "React Native + Expo",
    built:
      "Personal finance utility for tracking product purchases and tax-deductible expenses. App Store submission in progress.",
    tags: ["In Progress", "Mobile", "Finance"],
  },
  {
    id: "localLLM",
    name: "localLLM",
    repoUrl: "https://github.com/Charleschtsoi/localLLM",
    language: "Python",
    stars: 2,
    pillar: "ai",
    achievement: "Side Project",
    headline: "Local LLM experimentation",
    role: "Solo builder",
    built:
      "Hands-on local LLM evaluation — latency, cost, and fit before vendor recommendations.",
    tags: ["ML", "LLM", "Evaluation"],
  },
];

export const githubBridge = {
  text: "Selected work: LungLens, AAHK LLM agent, Cathay mobile, HKJC Solace, Apple docserverless, 北辰 — see the Work page",
  href: "/work",
};

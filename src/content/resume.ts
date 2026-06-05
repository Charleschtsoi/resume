export const profile = {
  name: "Charles Tsoi",
  title: "Solutions Architecture & Technical Product Strategy",
  tagline:
    "12+ years bridging business strategy and engineering execution for Tier-1 organizations.",
  location: "Hong Kong",
  phone: "+852 9609 3549",
  email: "charleschtsoi@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/charleschtsoi/",
    github: "https://github.com/Charleschtsoi",
    medium: "https://medium.com/@charleschtsoi",
  },
  proofLine: "12+ years · Apple · AAHK · regulated systems",
  interviewerSubline:
    "Bridging business stakeholders and engineering — product → architecture → AI",
  ctaTagline:
    "Regulated systems · enterprise delivery · hands-on technical leadership",
  seoTitle: "Solutions Architecture & Technical Product Strategy",
  seoDescription:
    "12+ years bridging business strategy and engineering execution. Apple, Airport Authority HK, HKJC. Enterprise AI, regulated systems, and production delivery.",
};

export type ChapterMetric = {
  value: string;
  label: string;
};

export type NarrativeChapter = {
  id: string;
  label: string;
  period?: string;
  headline: string;
  subheadline?: string;
  openingLine?: string;
  paragraphs: string[];
  highlights?: string[];
  metrics?: ChapterMetric[];
  theme: "dark" | "light";
};

export const coreStrengths = {
  title: "What I bring",
  bullets: [
    "Delivery discipline: scope gatekeeping and evidence-based shipping (AAHK capacity agent, 10 weeks)",
    "Regulated environments: HKJC compliance APIs, Apple architectural review standard, Cathay legacy integration",
    "Vendor & technical diligence: Microsoft ecosystem assessments — API, security, scalability",
    "Production systems thinking: from event-driven architecture to enterprise AI agents",
  ],
};

export const presenterChapterOrder = [
  "hero",
  "cathay",
  "bridge",
  "apple",
  "aahk",
  "fit",
  "why-fit",
] as const;

export const narrativeChapters: NarrativeChapter[] = [
  {
    id: "hero",
    label: "Thread",
    headline: "A consistent thread.",
    subheadline: "Product → architecture → AI",
    openingLine:
      "Thanks for having me. Let me give you the short version of how I got here — because on paper it might look like a few moves, but there's actually a very consistent thread.",
    paragraphs: [
      "The thread is this: I've spent 12 years progressively moving from digital product delivery, to systems architecture, to AI — and at every step, I was the person sitting between business stakeholders and engineering teams, translating what one side needs into what the other side builds.",
    ],
    theme: "dark",
  },
  {
    id: "cathay",
    label: "Cathay",
    period: "2012 – 2018",
    headline: "Six years at Cathay Pacific.",
    subheadline: "Where product ownership fundamentals took root",
    paragraphs: [
      "I started at Cathay Pacific — six years as a Product Owner building their mobile app and modernising legacy notification systems. That's where I learned product ownership fundamentals: backlog discipline, stakeholder negotiation, and how to integrate new frontends with old backend systems like PSS.",
      "Six years at one company also taught me what it means to own a product across its full lifecycle — not just launch it, but maintain it, evolve it, and fight for it.",
    ],
    metrics: [
      { value: "6 years", label: "One employer — lifecycle ownership" },
      { value: "Mobile + PSS", label: "Legacy integration at scale" },
      { value: "NotiFLY", label: "Modernised notifications" },
    ],
    highlights: [
      "Led Cathay Pacific Mobile App — XML/JSON integration with legacy Passenger Service Systems (PSS)",
      "Spearheaded NotiFLY revamp — migrated legacy notification system to modern messaging architecture",
    ],
    theme: "light",
  },
  {
    id: "bridge",
    label: "HKJC & Accenture",
    period: "2019 – 2022",
    headline: "Regulated systems. Architectural rigour.",
    subheadline: "HKJC + Accenture",
    paragraphs: [
      "From there I moved through HKJC and Accenture. At Jockey Club, I worked on high-frequency betting systems with Solace Event Mesh — real-time, zero-downtime, heavily regulated. That was my first deep exposure to what it means to build technology inside a compliance-driven environment.",
      "At Accenture, I sharpened the architecture side — defining API contracts, shifting teams from feature factories to value-driven delivery.",
    ],
    metrics: [
      { value: "Zero downtime", label: "Regulated real-time systems" },
      { value: "20%", label: "Less integration rework (API contracts)" },
      { value: "Solace", label: "Event Mesh at HKJC" },
    ],
    highlights: [
      "Solace Event Mesh for real-time odds — Pub/Sub at high concurrency (HKJC)",
      "API contracts (Swagger) reducing integration rework by 20% (Accenture)",
      "Shifted mobile squads from feature factory to value-driven architecture",
    ],
    theme: "dark",
  },
  {
    id: "apple",
    label: "Apple",
    period: "2022 – 2024",
    headline: "A standard, not a technology.",
    subheadline: "iWork serverless · Genmoji delivery",
    paragraphs: [
      "Then Apple. Two years managing the iWork backend migration to serverless and supporting Genmoji delivery. What I took from Apple wasn't a specific technology — it was a standard. Every decision went through architectural review, every dependency was mapped, every release was evidence-based.",
      "That level of rigour is exactly what I'd bring to any regulated, high-stakes environment.",
    ],
    metrics: [
      { value: "Evidence-based", label: "Every release decision" },
      { value: "Serverless", label: "iWork backend migration" },
      { value: "Genmoji", label: "Cross-team API delivery" },
    ],
    highlights: [
      "Serverless migration for iWork backend — architectural reviews & dependency mapping",
      "Primary technical unblocker for API dependencies across CoreML, UI Engineering, and QA",
      "Data-driven release optimization for Numbers (Server/Web) via log & defect analysis",
    ],
    theme: "light",
  },
  {
    id: "aahk",
    label: "AAHK",
    period: "2025 – Present",
    headline: "AI in production. Scope as a skill.",
    subheadline: "Airport Authority Hong Kong",
    paragraphs: [
      "And now at Airport Authority, I'm deploying LLM-based AI agents into production, running vendor technical due diligence, and gatekeeping scope. We delivered a capacity planning AI agent in ten weeks by saying 'no' to the right things at the right time.",
    ],
    metrics: [
      { value: "80%", label: "Less manual query time (LLM agents)" },
      { value: "10 weeks", label: "Capacity planning AI delivery" },
      { value: "Scope", label: "Gatekeeping in practice" },
    ],
    highlights: [
      "LLM-based agents for internal report automation — 80% reduction in manual query time",
      "Vendor technical due diligence on Microsoft ecosystem — API, security, scalability",
      "End-to-end delivery of new Insurance System — legacy mainframe to cloud migration",
      "Hands-on repos: LungLens, localLLM, security_alert — see Work page for curated GitHub",
    ],
    theme: "dark",
  },
  {
    id: "fit",
    label: "Education",
    period: "Education & momentum",
    headline: "Always building credibility.",
    subheadline: "CUHK MSc · Continuous learning",
    paragraphs: [
      "I'm finishing my MSc in IT Management at CUHK, deliberately steering coursework toward AI and data science — not because the programme requires it, but because I wanted hands-on technical credibility to back up the product and architecture decisions I make every day.",
      "That combination — enterprise delivery experience plus formal depth in data science and system design — is how I stay effective across product, architecture, and AI initiatives.",
    ],
    highlights: [
      "MSc IT Management, CUHK — focus: Data Science, AI, System Design (Expected Q1 2027)",
      "Certifications: PMP, PSPO I, PSM I, Solace Certified Event-Driven Architecture Practitioner",
      "Hands-on repos and production work keep skills current alongside formal study",
    ],
    theme: "light",
  },
];

export const skillCategories = [
  {
    title: "Architecture & Integration",
    items: [
      "API Design (REST/JSON)",
      "Event-Driven Architecture (Pub/Sub)",
      "Microservices & Serverless (Cloud Functions)",
      "System Integration (SAP Hybris, PSS)",
    ],
  },
  {
    title: "Data & Messaging",
    items: [
      "Solace Event Mesh",
      "SQL",
      "Generative AI (LLM Agents)",
      "Data Visualization",
    ],
  },
  {
    title: "Methodologies",
    items: [
      "Agile/Scrum",
      "SDLC",
      "CI/CD Pipelines",
      "Vendor Technical Evaluation",
    ],
  },
  {
    title: "Tools",
    items: ["Python", "Tableau", "JIRA", "Confluence", "Splunk", "Postman"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Airport Authority Hong Kong",
    role: "Project Manager",
    location: "Hong Kong",
    period: "Mar 2025 – Present",
    bullets: [
      "Architected and deployed LLM-based agents for internal report automation; defined integration patterns between LLM core and internal databases, reducing manual query time by 80%.",
      "Conducted deep-dive architectural assessments of Microsoft ecosystem vendors — API capabilities, security protocols, scalability limits.",
      "Leading end-to-end technical delivery of new Insurance System; managing data migration from legacy mainframes to cloud workflows.",
    ],
  },
  {
    company: "Apple",
    role: "Engineering Project Manager (Specialized Consultant)",
    location: "Hong Kong",
    period: "Oct 2022 – Sept 2024",
    bullets: [
      "Partnered with Engineering Leads to transition iWork backend to serverless architecture; facilitated architectural reviews and dependency mapping.",
      "Primary technical unblocker for API dependency risks between CoreML, UI Engineering, and QA for WWDC releases.",
      "Utilized statistical analysis of server logs and defect rates to optimize release schedules for Numbers (Server/Web).",
    ],
  },
  {
    company: "Accenture",
    role: "Business & Integration Architecture Specialist",
    location: "Hong Kong",
    period: "Aug 2021 – Sept 2022",
    bullets: [
      "Translated business requirements into technical user stories and defined API contracts (Swagger), reducing integration rework by 20%.",
      "Shifted two mobile development squads from feature factory to value-driven architectural approach.",
    ],
  },
  {
    company: "The Hong Kong Jockey Club",
    role: "IT Solutions Analyst (Horse Racing)",
    location: "Hong Kong",
    period: "May 2019 – July 2021",
    bullets: [
      "Designed data flows using Solace Event Mesh for real-time odds updates and high-concurrency betting (Pub/Sub).",
      "Conducted feasibility studies for high-volume solutions; analyzed latency vs throughput trade-offs.",
      "Defined technical specs for Critical Information Dissemination APIs with strict security key protocols.",
    ],
  },
  {
    company: "A.S. Watson Group",
    role: "Senior Business Analyst (eLab)",
    location: "Hong Kong",
    period: "Oct 2018 – May 2019",
    bullets: [
      "Led technical rollout of Watsons Vietnam flagship e-commerce site (watsons.vn) and mobile app.",
      "Technical gatekeeper for production — coordinated APAC deployments during high-traffic campaigns.",
    ],
  },
  {
    company: "Cathay Pacific Airways",
    role: "Product Owner / Assistant Digital Manager",
    location: "Hong Kong",
    period: "Nov 2012 – Sept 2018",
    bullets: [
      "Led Cathay Pacific Mobile App development; defined XML/JSON structures integrating mobile frontend with legacy PSS.",
      "Spearheaded NotiFLY revamp — migrated legacy notification system to modern messaging architecture.",
    ],
  },
];

export const education = [
  {
    school: "The Chinese University of Hong Kong (CUHK)",
    degree: "Master of Science in Information & Technology Management (MScITM)",
    period: "Expected Q1 2027",
    focus: "Data Science, AI, System Design, Strategic IT Management",
  },
  {
    school: "Lingnan University",
    degree: "Master & Bachelor of Philosophy",
    period: "",
    focus: "",
  },
];

export const certifications = [
  "Solace Certified Event Driven Architecture Practitioner",
  "Project Management Professional (PMP)",
  "Professional Scrum Master (PSM I)",
  "Professional Scrum Product Owner (PSPO I)",
];

export const chapterIds = narrativeChapters.map((c) => c.id);

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Story" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/work", label: "Work" },
  { href: "/showcase", label: "Showcase" },
  { href: "/contact", label: "Contact" },
];

export const profile = {
  name: "Charles Tsoi",
  title: "AI · Machine Learning · App Development",
  tagline:
    "Fourteen years in enterprise delivery — now learning and building in AI, machine learning, and mobile products.",
  location: "Hong Kong",
  email: "charleschtsoi@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/charleschtsoi/",
    github: "https://github.com/Charleschtsoi",
    medium: "https://medium.com/@charleschtsoi",
  },
  proofLine: "AI · ML · App development · Apple · Accenture · AAHK",
  currentOccupation: "Project Manager",
  yearsExperience: 14,
  careerSpan: "2012 – 2026",
  interviewerSubline:
    "Experience with AI agents, machine learning, and app development — happy to help where I can contribute",
  ctaTagline:
    "Open to collaborations, consulting, and full-time roles. If you have a problem in AI, ML, or app development, I’d be glad to talk.",
  availabilityLine:
    "Available for AI, machine learning, and mobile app projects — from early PoC through shipping.",
  seoTitle: "AI, Machine Learning & App Development",
  seoDescription:
    "Charles Tsoi — AI, machine learning, and app development. Enterprise LLM agents, production ML products, and mobile apps. Open to projects where I can help.",
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
  title: "What I can contribute",
  bullets: [
    "AI & ML: LungLens in production; AAHK LLM monitoring agent — product design and vendor delivery (estimated 80% less manual reporting time)",
    "Product: Fourteen years across Apple, HKJC, Cathay, AAHK — Cathay mobile MAU ~10k → ~120k (12x) during my ownership",
    "Architecture: Solace event-driven work at HKJC; docserverless edge compute at Apple",
    "Building now: 北辰 (North Star) astrology app for iOS; writing on GenAI systems on Medium",
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
      "Thanks for having me. Here's a short version of how I got here — on paper it can look like a few jumps, but there's a fairly consistent thread.",
    paragraphs: [
      "The thread is this: over fourteen years I've moved from digital product delivery, to systems architecture, to AI — usually sitting between business stakeholders and engineering teams, helping translate what one side needs into what the other side builds.",
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
      "I started at Cathay Pacific — six years as a Product Owner on their mobile app and related notification systems. During that time the app grew from roughly 10,000 to 120,000 monthly active users. That's where I learned backlog discipline, stakeholder negotiation, and how to integrate new frontends with older backends like PSS.",
      "Six years at one company also taught me what it means to own a product across its lifecycle — not only launch, but maintain and evolve it.",
    ],
    metrics: [
      { value: "12x", label: "Mobile MAU growth (~10k → ~120k)" },
      { value: "6 years", label: "Lifecycle ownership" },
      { value: "NotiFLY", label: "Modernised notifications" },
    ],
    highlights: [
      "Product ownership on Cathay Pacific Mobile App — MAU ~10,000 → ~120,000 (12x)",
      "Defined XML/JSON structures integrating mobile frontend with legacy Passenger Service Systems (PSS)",
      "Helped revamp NotiFLY — migrated legacy notifications toward a modern messaging architecture",
    ],
    theme: "light",
  },
  {
    id: "bridge",
    label: "HKJC & Accenture",
    period: "2019 – 2022",
    headline: "Regulated systems. Careful architecture.",
    subheadline: "HKJC + Accenture",
    paragraphs: [
      "From there I moved through HKJC and Accenture. At Jockey Club, I worked on a Solace migration — moving core infrastructure from traditional REST APIs toward event-based messaging for real-time, high-concurrency betting in a regulated environment.",
      "At Accenture, I spent more time on the architecture side — API contracts and helping teams shift from feature factories toward value-driven delivery.",
    ],
    metrics: [
      { value: "Solace", label: "REST → event-based messaging (HKJC)" },
      { value: "20%", label: "Less integration rework (API contracts)" },
      { value: "Zero downtime", label: "Regulated real-time systems" },
    ],
    highlights: [
      "Solace migration at HKJC — traditional APIs toward event-based messaging for real-time odds",
      "API contracts (Swagger) reducing integration rework by ~20% (Accenture)",
      "Helped shift mobile squads from feature factory toward value-driven architecture",
    ],
    theme: "light",
  },
  {
    id: "apple",
    label: "Apple",
    period: "2022 – 2024",
    headline: "A standard, not only a technology.",
    subheadline: "iWork serverless · Genmoji delivery",
    paragraphs: [
      "Then Apple — two years as Engineering Project Manager, including work on the docserverless edge project, which moved numerical computation from server-side to user devices. What I took from Apple wasn't only a technology — it was a bar for how carefully decisions were reviewed, dependencies mapped, and releases evidenced.",
      "That kind of care is what I try to bring into regulated, high-stakes environments.",
    ],
    metrics: [
      { value: "Edge", label: "docserverless — compute on devices" },
      { value: "Serverless", label: "iWork backend migration" },
      { value: "Genmoji", label: "Cross-team API delivery" },
    ],
    highlights: [
      "docserverless — numerical computation moved from server-side to edge user devices",
      "Partnered on iWork backend serverless migration — architectural reviews & dependency mapping",
      "Helped unblock API dependencies across CoreML, UI Engineering, and QA",
    ],
    theme: "light",
  },
  {
    id: "aahk",
    label: "AAHK",
    period: "2024 – Present",
    headline: "AI in production. Scope as a skill.",
    subheadline: "Airport Authority Hong Kong · 2 years",
    paragraphs: [
      "At Airport Authority I've been involved in product design and vendor delivery for LLM-based agents in production, vendor technical due diligence, and keeping scope honest. One example: an infrastructure monitoring agent (Power Automate + Dynatrace + ServiceNow) that reduced manual health reporting for senior management.",
    ],
    metrics: [
      { value: "~80%", label: "Estimated less manual reporting time" },
      { value: "10 weeks", label: "Capacity planning AI delivery" },
      { value: "Scope", label: "Gatekeeping in practice" },
    ],
    highlights: [
      "Product design and vendor delivery for an LLM monitoring agent — estimated 80% reduction in manual reporting time",
      "Vendor technical due diligence on Microsoft ecosystem — API, security, scalability",
      "Delivery support on a new Insurance System — legacy mainframe to cloud migration",
      "Hands-on: LungLens live at lunglenshk.vercel.app — see Work page",
    ],
    theme: "light",
  },
  {
    id: "fit",
    label: "Education",
    period: "Education & momentum",
    headline: "Still learning.",
    subheadline: "CUHK MSc · Continuous learning",
    paragraphs: [
      "I'm finishing my MSc in IT Management at CUHK, steering coursework toward AI and data science so I have more hands-on technical grounding behind the product and architecture work I do day to day.",
      "Enterprise delivery experience plus formal study in data science and system design is how I try to stay useful across product, architecture, and AI initiatives.",
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
    period: "Mar 2024 – Present",
    bullets: [
      "Product design and vendor delivery for an LLM-based monitoring agent (Power Automate + Dynatrace API + ServiceNow) that automated infrastructure health reporting — estimated 80% reduction in manual reporting time.",
      "Architectural assessments of Microsoft ecosystem vendors — API capabilities, security protocols, scalability limits.",
      "Supporting end-to-end technical delivery of a new Insurance System; data migration from legacy mainframes to cloud workflows.",
    ],
  },
  {
    company: "Apple",
    role: "Engineering Project Manager (Specialized Consultant)",
    location: "Hong Kong",
    period: "Oct 2022 – Sept 2024",
    bullets: [
      "Worked on the docserverless project — moved numerical computation from server-side to edge user devices.",
      "Partnered with Engineering Leads on iWork backend serverless migration; facilitated architectural reviews and dependency mapping.",
      "Helped unblock API dependency risks between CoreML, UI Engineering, and QA for WWDC releases.",
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
      "Worked on Solace migration — moved core infrastructure from traditional REST APIs toward event-based messaging for real-time odds and high-concurrency betting.",
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
      "Supported technical rollout of Watsons Vietnam flagship e-commerce site (watsons.vn) and mobile app.",
      "Technical gatekeeper for production — coordinated APAC deployments during high-traffic campaigns.",
    ],
  },
  {
    company: "Cathay Pacific Airways",
    role: "Product Owner / Assistant Digital Manager",
    location: "Hong Kong",
    period: "Nov 2012 – Sept 2018",
    bullets: [
      "Product ownership on Cathay Pacific Mobile App — MAU ~10,000 → ~120,000 (12x); defined XML/JSON structures integrating mobile frontend with legacy PSS.",
      "Helped revamp NotiFLY — migrated legacy notification system toward a modern messaging architecture.",
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
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

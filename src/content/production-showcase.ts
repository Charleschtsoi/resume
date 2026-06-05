export type LiveLink = { label: string; url: string };
export type RepoRef = { url: string; branch: string };
export type CloneGuide = { label: string; steps: string[] };
export type ApiEndpoint = {
  label: string;
  url: string;
  method?: string;
  note?: string;
};
export type EnvVar = {
  name: string;
  description: string;
  isSecret?: boolean;
};

export type ProductionComponent = {
  role: "frontend" | "backend" | "monorepo" | "other";
  title: string;
  repo?: RepoRef;
  liveLinks?: LiveLink[];
  contains: string[];
  excludes?: string[];
  clone?: CloneGuide;
};

export type ProductionProject = {
  slug: string;
  name: string;
  status: "live" | "repo-only";
  defaultOpen?: boolean;
  oneLiner: string;
  talkTrack?: string;
  components: ProductionComponent[];
  architectureSummary?: string;
  architectureSteps?: string[];
  envVars?: EnvVar[];
  apiEndpoints?: ApiEndpoint[];
  notes?: { title: string; body: string }[];
};

export const productionShowcaseIntro = {
  title: "Production showcase",
  subtitle: "Live deployments, repos, and how they connect",
  framing:
    "Curated production details for projects I've shipped — URLs, architecture, clone steps, and API endpoints. Expand a section during screen-share; add live URLs in this file as you deploy more.",
};

export const productionProjects: ProductionProject[] = [
  {
    slug: "lunglens",
    name: "LungLens",
    status: "live",
    defaultOpen: true,
    oneLiner:
      "Frontend: github.com/Charleschtsoi/LungLens → live at lung-lens-five.vercel.app · Backend: lunglens-backend → charleschtsoi-lunglens-backend.hf.space",
    talkTrack:
      "Full-stack AI product in production: Next.js on Vercel, BFF routes for async jobs, inference on Hugging Face — same PoC-to-production shape as enterprise work.",
    components: [
      {
        role: "frontend",
        title: "Frontend (Next.js app)",
        repo: {
          url: "https://github.com/Charleschtsoi/LungLens",
          branch: "main",
        },
        liveLinks: [
          {
            label: "Live app (Vercel)",
            url: "https://lung-lens-five.vercel.app",
          },
          {
            label: "Upload flow",
            url: "https://lung-lens-five.vercel.app/upload",
          },
          {
            label: "Pitch / demo page",
            url: "https://lung-lens-five.vercel.app/pitch",
          },
        ],
        contains: [
          "UI, upload flow, results",
          "Next.js BFF routes (/api/analyze/jobs, /api/health, etc.)",
        ],
        excludes: [
          "Full ML weights or production inference (see backend repo)",
        ],
        clone: {
          label: "Clone frontend",
          steps: [
            "git clone https://github.com/Charleschtsoi/LungLens.git",
            "cd LungLens",
            "npm install",
            "cp .env.example .env.local",
            "npm run dev   # http://localhost:3000",
          ],
        },
      },
      {
        role: "backend",
        title: "Backend (production ML API)",
        repo: {
          url: "https://github.com/Charleschtsoi/lunglens-backend",
          branch: "main",
        },
        liveLinks: [
          {
            label: "Hugging Face Space (live API)",
            url: "https://charleschtsoi-lunglens-backend.hf.space",
          },
          {
            label: "HF Space settings / deploy",
            url: "https://huggingface.co/spaces/Charleschtsoi/lunglens-backend",
          },
        ],
        contains: [
          "FastAPI server, model loaders",
          "POST /api/v1/analyze",
          "Async jobs: POST/GET /api/v1/analyze/jobs",
          "Health endpoints",
        ],
        clone: {
          label: "Clone backend",
          steps: [
            "git clone https://github.com/Charleschtsoi/lunglens-backend.git",
            "cd lunglens-backend",
            "python3 -m venv .venv && source .venv/bin/activate",
            "pip install -r requirements.txt",
            "uvicorn main:app --host 127.0.0.1 --port 7861",
          ],
        },
      },
    ],
    architectureSummary: "Browser talks to Vercel; BFF proxies and polls the Hugging Face inference API.",
    architectureSteps: [
      "Browser → https://lung-lens-five.vercel.app",
      "Vercel BFF (/api/analyze/jobs + polling)",
      "→ https://charleschtsoi-lunglens-backend.hf.space",
    ],
    envVars: [
      {
        name: "BACKEND_API_BASE_URL",
        description:
          "https://charleschtsoi-lunglens-backend.hf.space (Vercel env)",
      },
      {
        name: "BACKEND_API_KEY",
        description: "Same as HF Space API_KEY — share privately, not in GitHub",
        isSecret: true,
      },
    ],
    apiEndpoints: [
      {
        label: "Health (quick)",
        url: "https://charleschtsoi-lunglens-backend.hf.space/healthz",
      },
      {
        label: "Health (models)",
        url: "https://charleschtsoi-lunglens-backend.hf.space/health",
      },
      {
        label: "Async analyze (submit)",
        method: "POST",
        url: "https://charleschtsoi-lunglens-backend.hf.space/api/v1/analyze/jobs",
      },
      {
        label: "Async analyze (poll)",
        method: "GET",
        url: "https://charleschtsoi-lunglens-backend.hf.space/api/v1/analyze/jobs/{job_id}",
      },
      {
        label: "Sync analyze (legacy/local)",
        method: "POST",
        url: "https://charleschtsoi-lunglens-backend.hf.space/api/v1/analyze",
      },
    ],
    notes: [
      {
        title: "Sample backend inside frontend repo",
        body:
          "LungLens/backend/main.py in the frontend repo is a lightweight sample only (Gemini health-check + generate-questions). It is not production inference — no full /api/v1/analyze ensemble. Teammates doing real uploads should use lunglens-backend, not only the monorepo backend/ folder.",
      },
    ],
  },
  {
    slug: "resume",
    name: "Motion Resume (this site)",
    status: "repo-only",
    oneLiner:
      "github.com/Charleschtsoi/resume — Apple-style narrative resume with presenter mode. Add Vercel live URL when deployed.",
    talkTrack:
      "This site — scroll narrative, presenter mode, curated work and production showcase. Meta proof of presentation-first product thinking.",
    components: [
      {
        role: "frontend",
        title: "Next.js resume site",
        repo: {
          url: "https://github.com/Charleschtsoi/resume",
          branch: "main",
        },
        contains: [
          "Homepage narrative, presenter mode",
          "/work curated GitHub",
          "/showcase production deployments",
        ],
        clone: {
          label: "Clone",
          steps: [
            "git clone https://github.com/Charleschtsoi/resume.git",
            "cd resume",
            "npm install",
            "npm run dev   # http://localhost:3000",
          ],
        },
      },
    ],
    notes: [
      {
        title: "Deploy",
        body: "Import repo at vercel.com/new or run npx vercel --prod. Add live URL to liveLinks when ready.",
      },
    ],
  },
  {
    slug: "velora-beauty-tracker",
    name: "velora-beauty-tracker",
    status: "repo-only",
    oneLiner:
      "github.com/Charleschtsoi/velora-beauty-tracker — Beauty product expiration tracker (React Native + Expo).",
    components: [
      {
        role: "frontend",
        title: "React Native / Expo app",
        repo: {
          url: "https://github.com/Charleschtsoi/velora-beauty-tracker",
          branch: "main",
        },
        contains: ["Mobile product — expiration tracking for beauty products"],
      },
    ],
  },
  {
    slug: "velora-genai",
    name: "velora_GenAI_submission",
    status: "repo-only",
    oneLiner:
      "github.com/Charleschtsoi/velora_GenAI_submission — GenAI product submission slice.",
    components: [
      {
        role: "frontend",
        title: "GenAI submission",
        repo: {
          url: "https://github.com/Charleschtsoi/velora_GenAI_submission",
          branch: "main",
        },
        contains: ["GenAI feature work — prompts, UX, PoC boundaries"],
      },
    ],
  },
];

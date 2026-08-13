# Charles Tsoi — Career Portfolio

Role-agnostic career portfolio with an Apple-inspired marketing layout and Accenture-style clarity. Screen-share friendly: presenter mode on `/story`, chapter navigation, curated GitHub showcase, and downloadable PDF.

**Repository:** [github.com/Charleschtsoi/resume](https://github.com/Charleschtsoi/resume)

## Features

- **Homepage hub** (`/`) — Light hero, career timeline, selected work teaser, CTA
- **Career story** (`/story`) — Scroll narrative (Cathay → HKJC/Accenture → Apple → AAHK → education → strengths)
- **Presenter mode** — `/story?present=1` or nav **Present** on Story: shorter sections, chapter toolbar, arrow-key navigation
- **Work page** — Focus areas, curated repos with role relevance and talk tracks ([`/work`](http://localhost:3000/work))
- **Showcase page** — Production deployments: live URLs, architecture, clone steps, APIs ([`/showcase`](http://localhost:3000/showcase))
- **Supporting pages** — Experience, skills/certs, writing/blog, contact + PDF

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Geist](https://vercel.com/font) — typography
- [Motion](https://motion.dev) — scroll-linked animations
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)

## Quick start

```bash
git clone https://github.com/Charleschtsoi/resume.git
cd resume
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm start
```

## Presenter mode (screen-share)

Best for live walkthroughs with interviewers:

1. Open **http://localhost:3000/story?present=1** (or click **Present** on the Story page).
2. Use bottom chapter pills or **← / →** to jump between sections.
3. Rehearse on a second monitor at **100% zoom** (1080p).

**Interview checklist**

- [ ] Present mode on (`?present=1` or toggle)
- [ ] Fullscreen browser; notifications off
- [ ] Test chapter jumps and arrow keys once
- [ ] Second tabs: **`/work`**, **`/showcase`** (LungLens live URLs), and **`/experience`** (depth Q&A)
- [ ] ~10–12 min story: Hero (30s) → chapters (~2m each) → role fit → close
- [ ] Short on time after AAHK: **`/work`** — LungLens + localLLM only

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero → timeline → featured work → CTA |
| `/story` | Career narrative + presenter mode |
| `/experience` | Full career timeline |
| `/skills` | Skills, strengths, education, certifications |
| `/work` | Focus areas + curated GitHub + speaker scripts |
| `/showcase` | Production deployments — URLs, architecture, APIs |
| `/blog` | Writing |
| `/contact` | Email, form, links, resume PDF |

## Edit content

| File | What to change |
|------|----------------|
| [`src/content/resume.ts`](src/content/resume.ts) | Narrative chapters, experience, skills, profile |
| [`src/content/homepage.ts`](src/content/homepage.ts) | Home timeline, featured links, pillars, strengths |
| [`src/content/github-work.ts`](src/content/github-work.ts) | Featured repos, talk tracks, pillar copy |
| [`src/content/production-showcase.ts`](src/content/production-showcase.ts) | Live deployments, URLs, clone steps, APIs |
| [`public/resume.pdf`](public/resume.pdf) | Downloadable resume (replace to update) |

To add a new production project: copy a block in `production-showcase.ts`, set `status: "live"`, fill `liveLinks`, and optionally set `productionSlug` on the matching `/work` card.

## Deploy (Vercel)

1. Import [Charleschtsoi/resume](https://github.com/Charleschtsoi/resume) at [vercel.com/new](https://vercel.com/new), or:
2. CLI:

```bash
npx vercel login
npx vercel --prod
```

## Cursor: grill-me skill

Interview prep skill (chat only, not on the site): [`.cursor/skills/grill-me/`](.cursor/skills/grill-me/) — based on [mattpocock/skills grill-me](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md). Example prompt: *"Grill me on my AI Product Owner pitch."*

## License

Private portfolio project. Code is public on GitHub for deployment and sharing with interviewers.

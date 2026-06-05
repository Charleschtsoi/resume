# Charles Tsoi — Motion Resume

Apple-inspired scroll narrative resume for AI Product Owner and solutions architecture roles. Screen-share friendly: presenter mode, chapter navigation, curated GitHub showcase, and downloadable PDF.

**Repository:** [github.com/Charleschtsoi/resume](https://github.com/Charleschtsoi/resume)

## Features

- **Homepage story** — Consistent thread narrative (Cathay → HKJC/Accenture → Apple → AAHK → education → role fit)
- **Presenter mode** — `?present=1` or nav **Present**: shorter sections, full-opacity text, chapter toolbar, arrow-key navigation
- **Work page** — Six curated repos with role relevance lines and 30s talk tracks ([`/work`](http://localhost:3000/work))
- **Showcase page** — Production deployments: live URLs, architecture, clone steps, APIs ([`/showcase`](http://localhost:3000/showcase))
- **Supporting pages** — Experience timeline, skills/certs, contact + PDF

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
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

1. Open **http://localhost:3000?present=1** (or click **Present** on the homepage).
2. Use bottom chapter pills or **← / →** to jump between sections.
3. Rehearse on a second monitor at **100% zoom** (1080p).

**Interview checklist**

- [ ] Present mode on (`?present=1` or toggle)
- [ ] Fullscreen browser; notifications off
- [ ] Test chapter jumps and arrow keys once
- [ ] Second tabs: **`/work`**, **`/showcase`** (LungLens live URLs), and **`/experience`** (depth Q&A)
- [ ] ~10–12 min story: Hero (30s) → chapters (~2m each) → role fit → close
- [ ] Short on time after AAHK: **`/work`** — LungLens + Interview_pack only

## Pages

| Route | Description |
|-------|-------------|
| `/` | Scroll narrative + presenter mode |
| `/experience` | Full career timeline |
| `/skills` | Skills, education, certifications |
| `/work` | Curated GitHub (AI · product · rigour) + speaker scripts |
| `/showcase` | Production deployments — URLs, architecture, APIs (expandable) |
| `/contact` | Email, links, resume PDF |

## Edit content

| File | What to change |
|------|----------------|
| [`src/content/resume.ts`](src/content/resume.ts) | Narrative chapters, experience, skills, profile |
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

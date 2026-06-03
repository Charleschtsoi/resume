# Charles Tsoi — Motion Resume

Apple-inspired scroll narrative resume site for HKMA AI Product Owner applications.

## Stack

- Next.js 16 (App Router)
- [Motion](https://motion.dev) for scroll-linked animations
- Tailwind CSS v4 + shadcn/ui

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Presenter mode (screen-share interviews)

Use when walking an interviewer through the story live:

1. Open **http://localhost:3000?present=1** (or click **Present** in the nav on the homepage).
2. Use the bottom toolbar chapter pills or **← / →** arrow keys to jump between sections.
3. Rehearse on a second monitor at **100% zoom**, 1080p if possible.

**Interview checklist**

- [ ] Enable Present mode (`?present=1` or nav toggle)
- [ ] Fullscreen browser; turn off notifications
- [ ] Test chapter jumps and arrow keys once before the call
- [ ] Keep **`/work`** and **`/experience`** open in second tabs (GitHub after AAHK; timeline for depth)
- [ ] Target ~10–12 minutes: Hero (30s) → chapters (~2m each) → Why HKMA → close
- [ ] After **AAHK** (~minute 8): optional 2–3 min on **`/work`** — LungLens + Interview_pack if short on time

## Deploy to Vercel

```bash
npx vercel login
npx vercel --prod
```

Or connect this repo in the [Vercel dashboard](https://vercel.com/new).

## Content

Edit narrative copy and experience in [`src/content/resume.ts`](src/content/resume.ts).

Curated GitHub projects and talk tracks: [`src/content/github-work.ts`](src/content/github-work.ts).

Resume PDF: [`public/resume.pdf`](public/resume.pdf)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Scroll narrative + Presenter mode (Hero → chapters → Why HKMA → CTA) |
| `/experience` | Full timeline |
| `/skills` | Skills, education, certifications |
| `/work` | Curated GitHub — AI, product, rigour pillars + speaker scripts |
| `/contact` | Contact & download |

Interview prep: the [grill-me](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md) Cursor skill lives in `.cursor/skills/grill-me/` (use in Cursor chat only, not on the site).

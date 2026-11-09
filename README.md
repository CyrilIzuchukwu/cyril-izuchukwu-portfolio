# Cyril Izuchukwu Portfolio

Brittany Chiang–style personal portfolio for **Cyril Izuchukwu** (Ugwuodo Cyril) — full-stack developer, backend-focused.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (light section reveals)
- Typed content in `src/content/*`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

Project name target: `cyril-izuchukwu-portfolio`

1. Push this repo to GitHub (no remote is configured in the greenfield VM yet).
2. Import the repo in the [Vercel dashboard](https://vercel.com/new), set project name to `cyril-izuchukwu-portfolio`, Framework Preset **Next.js**, then Deploy.

Or after `vercel login`:

```bash
npx vercel        # preview
npx vercel --prod # production
```

Anonymous/temporary deploys (no login): `npx vercel deploy --temporary --yes` — claim the URL in the Vercel UI before it expires.

## Content

Edit CV copy in:

- `src/content/site.ts`
- `src/content/about.ts`
- `src/content/experience.ts`
- `src/content/projects.ts`

Resume PDF: `public/resume.pdf`

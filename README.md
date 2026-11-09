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

```bash
# From this directory
npx vercel --name cyril-izuchukwu-portfolio
# Production
npx vercel --prod --name cyril-izuchukwu-portfolio
```

Or connect the GitHub repo in the Vercel dashboard and set the project name to `cyril-izuchukwu-portfolio`.

## Content

Edit CV copy in:

- `src/content/site.ts`
- `src/content/about.ts`
- `src/content/experience.ts`
- `src/content/projects.ts`

Resume PDF: `public/resume.pdf`

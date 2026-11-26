# Remi Pearson — website

The Remi Pearson website: a Next.js app (App Router, TypeScript) with prerendered pages and a few API routes, deployed on Vercel.

`CLAUDE.md` is the detailed guide to where everything lives and why each page is built the way it is. This README covers getting started.

## Requirements

- Node.js 22 or later (Vercel builds on Node 26 LTS)
- npm

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in what you need; see "Environment variables"
npm run dev                  # http://localhost:3000
```

The site runs without any environment variables. Forms, checkout, CRM sync and the stats pages only start working once their keys are set.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local preview with hot reload |
| `npm run build` | Production build, then writes the search index and `public/llms.txt`. **Must pass before committing.** |
| `npm run start` | Serves the production build |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm run search-index` | Rebuilds only `public/search-index.json` from `.next/server/app` |
| `npm run llms` | Rebuilds only `public/llms.txt` from the built sitemap |
| `npm run upload-books -- <folder>` | Uploads the ebook files to private Vercel Blob (reads `.env.local`) |

`public/search-index.json` and `public/llms.txt` are generated and git-ignored. Run `npm run build` once if site search is empty in `npm run dev`.

## Project layout

```
src/
  app/          one folder per route; page.tsx lists the page's sections and sets its metadata
    api/        lead (all forms), helpful (votes), books & products (Stripe checkout, webhook, downloads),
                consent & weekly-teaching (email consent records, unsubscribe)
    layout.tsx  fonts, global CSS, header, footer, chat widget, smooth scrolling
    sitemap.ts, robots.ts   generated, not hand-written
  components/   one component per visible section, grouped by page (home/, about/, invite/, ideas/, …)
  content/      copy and lists: nav, products and prices, articles, books, reviews, per-page content
  lib/          forms, email (Resend), CRM (GoHighLevel), Stripe sales, Thinkific enrolment,
                Redis-backed stats/consent/admin links, search, smooth scroll
  styles/       plain CSS, one file per area, imported in order by index.css
public/assets/  images, referenced as /assets/...
scripts/        build-time scripts: search index, llms.txt, book upload
next.config.mjs redirects (old .html and Wix addresses)
```

### Common changes

- **Change wording:** edit the section's file in `src/components/<page>/`. Shared or list-like copy (nav, hero, prices, form options) is in `src/content/`.
- **Add a section:** create `src/components/<page>/<Name>.tsx`, add it to that page's `page.tsx`, and put its CSS in the matching file in `src/styles/`.
- **Add a page:** create `src/app/<route>/page.tsx` with `metadata`, then add it to `NAV` in `src/content/site.ts`. It appears in the sitemap, search and `llms.txt` after the next build.
- **Change a price:** `PRODUCTS` in `src/content/products.ts`.
- **Add a redirect:** `next.config.mjs`.

Conventions: components are server components unless they need state or events (`'use client'`); internal links use `next/link` with clean routes; images use plain `<img>`; keep existing class names, because the CSS targets them.

## Environment variables

All of them are listed and explained in `.env.example`. Set them in `.env.local` for local work and in the Vercel project for deployments.

| Feature | Variables |
| --- | --- |
| Forms, notifications, auto-replies, mailing segments (Resend) | `RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO`, optional `RESEND_SEGMENT_ID*` |
| "Was this helpful?" votes, consent log, admin links (Upstash Redis) | `KV_REST_API_URL`, `KV_REST_API_TOKEN` |
| Private stats pages (`/stats?key=…`) | `STATS_KEY` |
| Admin screen (`/admin`) | `ADMIN_PASSWORD` |
| Ebook and program sales (Stripe) | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
| Ebook downloads (Vercel Blob) | `BOOKS_DOWNLOAD_SECRET`, `BLOB_READ_WRITE_TOKEN` |
| Course enrolment (Thinkific) | `THINKIFIC_ACCESS_TOKEN` or `THINKIFIC_API_KEY`, `THINKIFIC_SUBDOMAIN`, optional `THINKIFIC_SCHOOL_URL` |
| CRM sync (GoHighLevel) | `GHL_TOKEN`, `GHL_LOCATION_ID`, optional `GHL_PIPELINE_ID`, `GHL_STAGE_ID` |
| Bot check on forms (Cloudflare Turnstile) | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` |

`STRIPE_SECRET_KEY` is read at build time: buy buttons only appear on pages built with it set.

To test Stripe webhooks locally:

```bash
stripe listen --forward-to localhost:3000/api/books/webhook
```

## Private pages

These pages are noindex and kept out of the sitemap:

- `/stats?key=<STATS_KEY>`: "Was this helpful?" totals per article
- `/stats/consent?key=<STATS_KEY>`: weekly-teaching consent records (CSV at `/api/consent?key=<STATS_KEY>`)
- `/admin`: links Thinkific courses to product pages and turns sales on or off

## Deployment

The site is hosted on Vercel and built from the GitHub repository (`TechOptionz/remi`). Run `npm run build` locally before pushing.

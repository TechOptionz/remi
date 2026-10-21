# Remi Pearson Website — Requirements vs Progress

Baseline: commit `768f79e` ("update: hero", 19 Sep 2026). Current: branch `stripe-workflow`, 21 Oct 2026 (129 commits since 13 Sep).

## At a glance

| | Baseline (19 Sep) | Now |
|---|---|---|
| Pages | 6 | 40+ page routes (plus ~40 products, 23 articles, 3 book pages) |
| Components | 66 files | 230 files |
| Stylesheets | 13 | 47 |
| API routes | 0 | 6 |
| Hosting | Static export on Netlify | Next.js on Vercel (server routes) |
| Forms | Stub (`submitLead` TODO) | Live: Resend email + mailing-list segments + GoHighLevel CRM |
| Payments | None | Stripe checkout for ebooks, with emailed download links |

## Initial requirements (baseline) and status

| Requirement | Status |
|---|---|
| Home page (hero variants, rabbit holes, perspectives, products, enquiry form) | Done. Redesigned from the new homepage design; adds a Spotlight carousel. Homepage part three is not built yet. |
| About Remi (design screenshots 19–22) | Done, plus awards marquee. |
| Invite Remi (screenshots 23–25) | Done, plus speaker reel and TV/radio option. |
| Perspectives (screenshots 26–29) | Done, with searchable archive and topic filters. |
| Ideas & Models (PDF) | Done and expanded into chapter pages (see below). |
| T.R.U.S.T.M.E. page | Done, moved to `/ideas-models/trustme-model`. |
| Header, footer, chat widget | Done. Added site search and smooth scrolling. |
| Forms to a mailing list / CRM (was a TODO) | Done: Resend, Resend segments, GoHighLevel (off until its keys are set). |

## New pages added since baseline

**Rabbit-hole pages (all six homepage cards):** `/i-know-better`, `/loving-someone`, `/tell-me-the-truth`, `/leadership`, `/ultimate-influence`, `/build-an-asset`.

**Ideas & Models chapters (`/ideas-models/…`):** `self-esteem-triad`, `safe-problems-risky-truths`, `deep-state-repatterning`, `emotion-integration-technique`, `values-alignment-technique`, `critical-alignment-model` (plus `mini-profiler`), `trustme-model`, `disruptive-leadership`, `first-90-days`, `ultimate-influence`.

**Programs and products:**
- `/programs` (where to begin), `/programs/rebel-yell`, `/programs/the-shift`
- `/products` (every range) and `/products/<slug>`, with designed sales pages for the Self-Esteem Triad, CAM for Leaders, Ultimate Influence, Selling from Stage, Why Do I Keep Doing This?, EIT Foundations, Self-Regulation, Holding Space, Deep State Repatterning and Becoming Conscious.
- `/attachment-style-quiz` (coming soon, with sign-up)

**Books:** `/books`, three book pages (`/books/<slug>`) and `/books/thank-you`.

**Free resources and community:** `/articles` and `/articles/<slug>` (23 articles), `/reviews` (coming soon), `/subscribe`.

**Site and admin:** `/privacy-policy`, `/stats` (private reader-feedback totals).

## New features beyond the original brief

- **Ebook sales:** Stripe Checkout, webhook, signed 7-day download links by email, private Vercel Blob storage and a resend tool for the team.
- **Lead handling:** one `/api/lead` route for enquiries, invitations, waitlists, sign-ups and feedback, with team notifications, auto-replies, a spam trap, and CRM tagging.
- **Reader feedback:** "Was this helpful?" votes (Upstash Redis), share links and "Ask Remi a question" on every article.
- **Search and discovery:** site-wide search (Ctrl/⌘ K), generated sitemap, robots and `llms.txt`, plus redirects from the old Wix site.
- **Polish:** smooth scrolling, scroll-to-top on navigation, phone layouts checked down to 320px, HD photo swaps.

## Still open

- Homepage part three (about snapshot, newsletter band, closing conversation strip).
- Links waiting on real pages: Untriggerable, Five Paths, Truth/Leadership audits, assessment quiz, practitioner training pages.
- Testimonials and reviews are empty until Remi supplies real ones; several sales pages show "Coming soon" until their checkout links exist.
- Uncommitted work in progress: the GoHighLevel connection (`src/lib/ghl.ts`) and related edits to the lead route and book sales.

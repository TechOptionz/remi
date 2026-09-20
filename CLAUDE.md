# Versioning
- Design-tool files live in `design/` (not part of the website). Frozen snapshots live in `design/versions/` and are never edited: `v1.0` (light editorial, video-first), `v2.0` (dark, Rashid-style structure).
- Working file: `design/Remi Pearson Homepage v2.dc.html` is the live one being iterated.
- When the user says "lock this in" / "save as version", copy the working file to `design/versions/… vX.Y.dc.html` (bump minor for tweaks, major for redesigns) and note it here.

# Website (Next.js) — repo root
The live website is the Next.js app at the repo root (App Router, TypeScript, static export → `out/`, deployed by Netlify via `netlify.toml`). The old hand-written HTML site was removed once the migration was complete (it remains in git history).

Commands (run from the repo root): `npm run dev` (local preview), `npm run build` (static build, must pass before committing), `npm run typecheck`.

## Where things live
- `src/app/<route>/page.tsx` — one file per page. It only lists that page's sections in order and sets the page title/description. Routes: `/`, `/perspectives`, `/about-remi`, `/ideas-models`, `/programs`, `/invite-remi`.
- `src/app/layout.tsx` — fonts, global CSS, and the chrome on every page: Header, Footer, ChatWidget.
- `src/components/<page>/` — one component per visible section (`home/`, `about/`, `invite/`, `ideas/`). Section copy is written inline in its file: to change wording, edit that section's file.
- `src/components/home/hero/` — the home hero: `Hero.tsx` (picks the variant + video modal), `variants.tsx` (layouts A, B, C, C1, C2/C3, D), `parts.tsx` (shared title, buttons, Vimeo frame).
- `src/components/layout/` — Header, VariantsMenu, Footer. `src/components/shared/` — ChatWidget, NewsletterForm, SocialLinks, TrustmeLevels.
- `src/content/site.ts` — anything shared or list-like: nav links, header CTA, hero copy, hero/palette options, social links, footer copy, form dropdown options, T.R.U.S.T.M.E. levels, Vimeo ID. `src/content/chat.ts` — chat copy, scripted replies, keyword matching.
- `src/lib/site-state.tsx` — palette + hero variant state (localStorage, `?palette=` / `?hero=`). `src/lib/forms.ts` — `usePresetSelect` and `submitLead`, the single stub where all forms submit (TODO: GoHighLevel / mailing list).
- `src/styles/` — plain CSS, one file per area, imported in order by `index.css` (order matters). Colours come from the palette tokens in `tokens.css`; `ideas-models.css` uses fixed colours by design.
- `public/assets/` — images, referenced as `/assets/...`.

## Conventions
- Add a section: create `src/components/<page>/<Name>.tsx`, add it to that page's `page.tsx`, put its CSS in the matching file in `src/styles/`.
- Add a page: create `src/app/<route>/page.tsx` with `metadata`, add it to `NAV` in `src/content/site.ts`.
- Components are server components unless they need state/events; those start with `'use client'`.
- Internal page links use `next/link` with clean routes (`/about-remi`, not `.html`); same-page anchors use plain `<a href="#id">`.
- Preset a form from any link: `data-interest="Speaking"` (homepage enquiry form, or `/?interest=Speaking#contact`) and `data-invite="Speaking"` (invite form, or `/invite-remi?invite=Speaking#invite-form`). Values must match `INTERESTS` / `INVITATIONS` in `content/site.ts`.
- Use plain `<img>` (static export, no image optimisation). Keep existing class names — the CSS targets them.
- About Remi and Invite Remi follow the design screenshots in `Photos-Images/` (19–22 and 23–25). The screenshots are split into "parts", but the pages deliberately show no part labels or dividers.
- Shared building blocks for these designed pages: `.part-head`, `.part-title` (`--sm`, `--xs`, `--accent`), `.part-lede`, `.hand-quote`, `.serif-quote`, `.dot-list`, `.section--tight`, `.section--flush` (all in `styles/inner-pages.css`), and `<Icon name="…" />` from `components/shared/Icon.tsx` (add new line icons there).
- Ideas & Models is composed, not pasted: `components/ideas/ui.tsx` holds its building blocks (`Part`, `PartHead`, `Hand`, `Body`, `H3`, `Btn`, `NextLink`, `Art`, `HeadNote`, `Panel`, `Box`), each `PartN….tsx` composes them, and lists/cards (glance index, emotional needs, journey models, stats, tools, research and next-step cards, map hotspots) live in `content/ideas.ts`. Headings and body copy stay in the part files. The hand-drawn diagrams are images in `public/assets/ideas/`; where a drawing ran into the edge of its crop the edge is feathered in the file itself, so nothing ends in a hard line. There is no separate T.R.U.S.T.M.E. page any more: links go to `/ideas-models#part-6`.
- Ideas & Models on phones (≤760px, rules sit beside each part in `styles/ideas-models.css`): a `PartHead` symbol (or handwritten note) stays on the title's row, small and to the right, as on desktop — `.ideas-head-copy` becomes `display:contents` so the intro below runs full width — unless the art has `ideas-art--figure` (then it sits under the intro); diagrams with lettering use `components/ideas/ZoomArt.tsx` (tap to enlarge, pans sideways) plus `ideas-bleed` to run nearly edge to edge; Part 4 stacks each illustration above its model (`.journey-row`); the Disruptive Leadership strip becomes five medallions cut from `p6-icons.webp`.
- Perspectives (`/perspectives`, design screenshots 26–29): sections in `components/perspectives/`, styles in `styles/perspectives.css`. Every episode lives once in `CONVERSATIONS` in `content/perspectives.ts`; "places to begin", the featured cards and the searchable archive all read from it (episode `href`s are the YouTube links; the channel links live in `CHANNEL_URLS`). Set `imageHasName` when the artwork already prints the guest's name. Any element with `data-topic="<Topic>"` opens the archive filtered to that topic. Episodes without an `image` render a Perspectives-branded tile (`EpisodeImage`). The rabbit-hole strips and the "we do the work live" band (`RabbitHoleRows`, `LiveWork`, `.rh*` styles) follow screenshot 27: torn-paper strips on the normal page background, League Gothic condensed headings, stamped buttons, and every symbol cut from the design into `public/assets/perspectives/` (`rh-*.webp`); their colours are fixed, like Ideas & Models.
- Homepage: the first six sections (`Hero`, `RabbitHoles`, `Curious`, `HomePerspectives`, `EntryProducts`, `FigureOut`) follow the homepage design in `Photos-Images/NEW HOME PAGE PART ONE` + `NEW HOMEPAGE PART TWO`; their styles are in `styles/home-design.css` (loaded after `home.css`, which it overrides) and the symbols cut from the design are in `public/assets/home/` (`hm-*.webp`, used through `Sym` / `Brush` in `components/home/ui.tsx`). The painted cards, product cards and charcoal bands use fixed colours. The three featured conversations, the three entry products and their price live in `content/home.ts` so they are easy to swap. `NEW HOME PAGE PART THREE` (about snapshot, newsletter band, "Fancy a proper conversation") is not built yet; the older sections still follow below. The hero shows variant C2 by default (`DEFAULT_HERO` in `content/site.ts`); variant E is the one drawn in the design screenshot.
- Programs (`/programs`) is the Rebel Yell page, built from the copy deck rather than a design screenshot: sections in `components/programs/`, styles in `styles/programs.css`, lists / FAQ / form options in `content/programs.ts`. It is laid out as full-bleed `.ry-band`s in fixed colours (`--black`, `--burgundy`, `--cream`, antique gold accent) that re-map the palette tokens like `.band-dark`, alternating with plain `.ry-section`s that follow the site palette. Every "Join the private waitlist" button is `<WaitlistCta />` (`components/programs/ui.tsx`) and points at `#waitlist`; the form submits through `submitLead('waitlist', …)`. Proof is never invented: `TESTIMONIALS` and `AUTHORITY_LOGOS` in `content/programs.ts` are empty and their slots render nothing until real ones are added (the briefs for each are in the comments there).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

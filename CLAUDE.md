# Versioning
- Frozen snapshots live in `versions/` and are never edited: `v1.0` (light editorial, video-first), `v2.0` (dark, Rashid-style structure).
- Working files at root: `Remi Pearson Homepage v2.dc.html` is the live one being iterated.
- When the user says "lock this in" / "save as version", copy the working file to `versions/… vX.Y.dc.html` (bump minor for tweaks, major for redesigns) and note it here.

# Website (Next.js) — `web/`
The live website is the Next.js app in `web/` (App Router, TypeScript, static export → `web/out`, deployed by Netlify via `netlify.toml`).
`site/` is the previous hand-written HTML version, kept only for reference — do not edit it.

Commands (run inside `web/`): `npm run dev` (local preview), `npm run build` (static build, must pass before committing), `npm run typecheck`.

## Where things live
- `src/app/<route>/page.tsx` — one file per page. It only lists that page's sections in order and sets the page title/description. Routes: `/`, `/perspectives`, `/about-remi`, `/ideas-models`, `/trustme-model`, `/invite-remi`.
- `src/app/layout.tsx` — fonts, global CSS, and the chrome on every page: Header, Footer, ChatWidget.
- `src/components/<page>/` — one component per visible section (`home/`, `about/`, `trustme/`, `invite/`, `ideas/`). Section copy is written inline in its file: to change wording, edit that section's file.
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
- Ideas & Models is composed, not pasted: `components/ideas/ui.tsx` holds its building blocks (`Part`, `PartHead`, `Hand`, `Body`, `H3`, `Btn`, `NextLink`, `Art`, `HeadNote`, `Panel`, `Box`), each `PartN….tsx` composes them, and lists/cards (glance index, emotional needs, journey models, stats, tools, research and next-step cards, map hotspots) live in `content/ideas.ts`. Headings and body copy stay in the part files. The hand-drawn diagrams are images in `public/assets/ideas/`.
- Perspectives (`/perspectives`, design screenshots 26–29): sections in `components/perspectives/`, styles in `styles/perspectives.css`. Every episode lives once in `CONVERSATIONS` in `content/perspectives.ts`; "places to begin", the featured cards and the searchable archive all read from it (episode `href`s and the YouTube/Spotify/Apple links are still placeholders). Any element with `data-topic="<Topic>"` opens the archive filtered to that topic. Episodes without an `image` render a Perspectives-branded tile (`EpisodeImage`).

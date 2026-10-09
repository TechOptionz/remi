// Every page, once, at its final address: what Google should index. Built from the routes on disk at build time.
// scripts/llms-txt.mjs reads the built sitemap too, so llms.txt lists the same pages.
import type { MetadataRoute } from 'next';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { NAV, SITE_URL } from '@/content/site';
import { PRODUCTS, LANDING_SLUGS } from '@/content/products';
import { ARTICLES } from '@/content/articles';
import { BOOKS } from '@/content/books';
import { REVIEWS } from '@/content/reviews';

const APP = join(process.cwd(), 'src', 'app');
/** Folders that hold a page.tsx, as routes (dynamic [slug] folders are listed from their data below). */
function routes(dir = '', out: string[] = []) {
  for (const name of readdirSync(join(APP, dir))) {
    const rel = join(dir, name);
    if (!statSync(join(APP, rel)).isDirectory() || name === 'api' || name.startsWith('[')) continue;
    if (readdirSync(join(APP, rel)).includes('page.tsx')) out.push('/' + rel.split('\\').join('/'));
    routes(rel, out);
  }
  return out;
}

// Pages with nothing on them yet stay out until they have content (they are noindex meanwhile)
const HELD_BACK = new Set(REVIEWS.length ? [] : ['/reviews']);
const MAIN = new Set(NAV.map(n => n.href));

const LANDINGS = new Set<string>(LANDING_SLUGS.map(s => `/products/${s}`));
const abs = (p: string) => `${SITE_URL}${p === '/' ? '' : p}`;

// An article's date is when it was written; the library and its cluster change whenever the newest one appears.
// Other pages carry the build date (every deploy re-publishes them).
const articleDate = new Map(ARTICLES.map(a => [`/articles/${a.slug}`, new Date(a.date)]));
const newestArticle = new Date(Math.max(...ARTICLES.map(a => +new Date(a.date))));

// Images Google may show for a page in image search
const IMAGES: Record<string, string[]> = {
  '/books': BOOKS.map(b => b.cover.src),
  ...Object.fromEntries(ARTICLES.filter(a => a.image).map(a => [`/articles/${a.slug}`, [a.image!]])),
};

function priority(p: string) {
  if (p === '/') return 1;
  if (MAIN.has(p)) return 0.9;
  if (p === '/privacy-policy') return 0.2;
  if (LANDINGS.has(p)) return 0.7; // designed sales pages
  if (p.startsWith('/products/')) return 0.5;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', ...routes(), ...PRODUCTS.map(p => `/products/${p.slug}`), ...ARTICLES.map(a => `/articles/${a.slug}`)]
    .filter(p => !HELD_BACK.has(p));
  const built = new Date();
  return [...new Set(paths)].map(p => ({
    url: abs(p),
    lastModified: articleDate.get(p) ?? (p === '/articles' ? newestArticle : built),
    changeFrequency: p === '/privacy-policy' ? 'yearly' : p.startsWith('/products/') || articleDate.has(p) ? 'monthly' : 'weekly',
    priority: priority(p),
    ...(IMAGES[p] ? { images: IMAGES[p].map(abs) } : {}),
  }));
}

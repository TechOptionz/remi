// Every page, once, at its final address: what Google should index. Built from the routes on disk at build time.
// scripts/llms-txt.mjs reads the built sitemap too, so llms.txt lists the same pages.
import type { MetadataRoute } from 'next';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { NAV, SITE_URL } from '@/content/site';
import { PRODUCTS } from '@/content/products';
import { ARTICLES } from '@/content/articles';
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

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', ...routes(), ...PRODUCTS.map(p => `/products/${p.slug}`), ...ARTICLES.map(a => `/articles/${a.slug}`)]
    .filter(p => !HELD_BACK.has(p));
  const lastModified = new Date(); // the build date: every deploy re-publishes the list
  return paths.map(p => ({
    url: `${SITE_URL}${p === '/' ? '' : p}`,
    lastModified,
    changeFrequency: p === '/privacy-policy' ? 'yearly' : p.startsWith('/products/') ? 'monthly' : 'weekly',
    priority: p === '/' ? 1 : MAIN.has(p) ? 0.9 : p.startsWith('/products/') ? 0.5 : p === '/privacy-policy' ? 0.2 : 0.8,
  }));
}

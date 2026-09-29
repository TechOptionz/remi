// Every page, once, at its final address: what Google should index. Built from the routes on disk at build time.
import type { MetadataRoute } from 'next';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { SITE_URL } from '@/content/site';

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

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', ...routes()];
  const lastModified = new Date(); // the build date: every deploy re-publishes the list
  return paths.map(p => ({
    url: `${SITE_URL}${p === '/' ? '' : p}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: p === '/' ? 1 : 0.8,
  }));
}

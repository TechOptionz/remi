// Builds llms.txt (https://llmstxt.org) from the built site (runs after `next build`, see package.json): every page in
// the sitemap, grouped by section, with its own <title> and meta description from the prerendered HTML. Nothing to
// maintain by hand: pages added to or held back from the sitemap follow on the next build.
// Output: public/llms.txt (git-ignored; deployed with the build, and served by `npm run dev` once built).
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'node-html-parser';

const OUT = join('.next', 'server', 'app');
const SUFFIX = /\s+—\s+Remi Pearson$/;

// The main pages, in the order a newcomer would want them; anything else falls into a section by its address and is
// listed in the order its `hub` page links to it (pages the hub doesn't link to keep their sitemap order, last)
const START = ['/', '/about-remi', '/ideas-models', '/perspectives', '/articles', '/programs', '/products', '/books', '/invite-remi', '/reviews'];
const SECTIONS = [
  { title: 'Start here', test: p => START.includes(p) },
  { title: 'The questions people bring', note: 'One page for each "rabbit hole" on the homepage.', hub: '/', test: p => p.split('/').length === 2 && p !== '/privacy-policy' && p !== '/attachment-style-quiz' },
  { title: 'Ideas & Models', note: 'Remi\'s models, one chapter each.', hub: '/ideas-models', test: p => p.startsWith('/ideas-models/') },
  { title: 'Free articles', hub: '/articles', test: p => p.startsWith('/articles/') },
  { title: 'Programs and assessments', hub: '/programs', test: p => p.startsWith('/programs/') || p === '/attachment-style-quiz' },
  { title: 'Self-paced programs', test: p => p.startsWith('/products/') },
  { title: 'Optional', test: () => true },
];

const sitemapFile = join(OUT, 'sitemap.xml.body');
if (!existsSync(sitemapFile)) throw new Error(`llms.txt: ${sitemapFile} not found — run \`next build\` first`);
const urls = [...(await readFile(sitemapFile, 'utf8')).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
const site = new URL(urls[0]).origin;

const clean = s => s.replace(/\s+/g, ' ').trim();
async function describe(url) {
  const path = new URL(url).pathname.replace(/\/$/, '') || '/';
  const file = join(OUT, path === '/' ? 'index.html' : `${path.slice(1)}.html`);
  const root = existsSync(file) ? parse(await readFile(file, 'utf8')) : null;
  const title = clean(root?.querySelector('title')?.text ?? path).replace(SUFFIX, '');
  const description = clean(root?.querySelector('meta[name="description"]')?.getAttribute('content') ?? '');
  return { path, url, title: path === '/' ? 'Home' : title, description, root, html: (root?.querySelector('main') ?? root)?.toString() ?? '' };
}

const pages = await Promise.all(urls.map(describe));
const home = pages.find(p => p.path === '/');
const siteTitle = clean(home?.root?.querySelector('title')?.text ?? 'Remi Pearson');

const groups = SECTIONS.map(s => ({ ...s, pages: [] }));
for (const page of pages) groups.find(g => g.test(page.path)).pages.push(page);
groups[0].pages.sort((a, b) => START.indexOf(a.path) - START.indexOf(b.path));
for (const g of groups.filter(g => g.hub)) {
  const html = pages.find(p => p.path === g.hub)?.html ?? '';
  const at = p => { const i = html.indexOf(`href="${p.path}"`); return i < 0 ? Infinity : i; };
  g.pages.sort((a, b) => at(a) - at(b)); // stable: unlinked pages keep their order
}

const line = p => `- [${p.title}](${p.url})${p.description ? `: ${p.description}` : ''}`;
const text = [
  `# ${siteTitle}`,
  '',
  `> ${home?.description ?? ''}`,
  '',
  'Remi Pearson\'s website: her story, her models of human change (Ideas & Models), the Perspectives conversations, free articles, programs and speaking invitations. Every page below is plain, prerendered HTML.',
  '',
  ...groups.filter(g => g.pages.length).flatMap(g => [`## ${g.title}`, '', ...(g.note ? [g.note, ''] : []), ...g.pages.map(line), '']),
].join('\n');

await writeFile(join('public', 'llms.txt'), text);
console.log(`llms.txt: ${pages.length} pages in ${groups.filter(g => g.pages.length).length} sections (${site})`);

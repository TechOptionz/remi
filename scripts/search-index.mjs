// Builds the site search index from the static export (runs after `next build`, see package.json).
// Every page's <main> is split at its h1–h3 headings; each heading becomes one searchable entry that links
// to the heading's own id, or to the nearest section around it that has one. Nothing to maintain by hand:
// new pages and sections are picked up on the next build.
// Output: out/search-index.json (deployed) and public/search-index.json (git-ignored, so `npm run dev` can search too).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { parse } from 'node-html-parser';

const OUT = 'out';
const SKIP_FILES = new Set(['404.html', '_not-found.html']);
const SKIP_DIRS = new Set(['_next', 'assets', '_not-found']);
// Controls, breadcrumbs and decoration carry no content worth finding
const SKIP_TAGS = new Set(['script', 'style', 'noscript', 'template', 'svg', 'button', 'select', 'option', 'input', 'textarea', 'form', 'label', 'iframe', 'nav']);
const HEADINGS = new Set(['h1', 'h2', 'h3']);
// Site chrome, for pages without a <main> (the homepage), where the whole page wrapper is read instead
const isChrome = el => el.id === 'mobile-nav' || el.classList.contains('site-header') || el.tagName === 'FOOTER';
const MAX_TEXT = 3000;

async function htmlFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { if (!SKIP_DIRS.has(entry.name)) files.push(...await htmlFiles(path)); }
    else if (entry.name.endsWith('.html') && !SKIP_FILES.has(entry.name)) files.push(path);
  }
  return files;
}

const clean = s => s.replace(/\s+/g, ' ').trim();
const toUrl = file => {
  const route = relative(OUT, file).split(sep).join('/').replace(/(^|\/)index\.html$/, '').replace(/\.html$/, '');
  return '/' + route;
};

/** The id to link to for a heading: its own, else the closest ancestor's inside the page content. */
function anchorFor(el) {
  for (let node = el; node && node.tagName !== 'MAIN' && node.id !== 'top'; node = node.parentNode) {
    const id = node.getAttribute?.('id');
    if (id) return id;
  }
  return '';
}

function indexPage(html, url) {
  const root = parse(html);
  const main = root.querySelector('main') ?? root.querySelector('#top');
  if (!main) return [];
  const page = url === '/' ? 'Home' : clean(root.querySelector('title')?.text ?? url).replace(/\s+—\s+Remi Pearson$/, '');
  const entries = [];
  let current = { h: page, a: '', t: [] };

  // Collects visible text through `push`; with `split`, each heading starts a new entry
  const walk = (node, push, split) => {
    for (const child of node.childNodes) {
      if (child.nodeType === 3) { push(child.text); continue; }
      if (child.nodeType !== 1) continue;
      const tag = child.tagName.toLowerCase();
      if (SKIP_TAGS.has(tag) || isChrome(child) || child.getAttribute('aria-hidden') === 'true' || child.hasAttribute('hidden')) continue;
      if (split && HEADINGS.has(tag)) {
        const h = [];
        walk(child, s => h.push(s), false);
        entries.push(current);
        current = { h: clean(h.join('')), a: anchorFor(child), t: [] };
        continue;
      }
      push(' ');
      walk(child, push, split);
      push(' ');
    }
  };
  walk(main, s => current.t.push(s), true);
  entries.push(current);
  // Anything before the first heading (breadcrumbs, eyebrows) belongs with it
  if (entries.length > 1) entries[1].t.unshift(...entries.shift().t, ' ');

  // Drop headings with no words and repeats (some sections render a desktop and a phone version)
  const seen = new Set();
  return entries
    .map(e => ({ u: url, p: page, h: e.h, a: e.a, t: clean(e.t.join('')).slice(0, MAX_TEXT) }))
    .filter((e, i) => {
      const key = `${e.h.toLowerCase()}|${e.a}`;
      if (!e.h || seen.has(key) || (i === 0 && !e.t)) return false;
      seen.add(key);
      return true;
    });
}

const files = await htmlFiles(OUT);
const index = [];
for (const file of files.sort()) index.push(...indexPage(await readFile(file, 'utf8'), toUrl(file)));

const json = JSON.stringify(index);
await writeFile(join(OUT, 'search-index.json'), json);
await writeFile(join('public', 'search-index.json'), json);
console.log(`Search index: ${index.length} entries from ${files.length} pages (${(json.length / 1024).toFixed(0)} KB)`);

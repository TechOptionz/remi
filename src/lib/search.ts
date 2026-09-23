// Site search: matching and ranking over /search-index.json, which scripts/search-index.mjs builds from the
// static export (one entry per heading on every page). Used by components/layout/SiteSearch.tsx.

/** One indexed heading: page url, page title, heading, id to scroll to (may be empty), section text. */
export type SearchEntry = { u: string; p: string; h: string; a: string; t: string };
export type SearchHit = SearchEntry & { score: number; snippet: string };

type Prepared = SearchEntry & { nh: string; np: string; nt: string };
export type SearchIndex = Prepared[];

/** Lower-case, no accents, curly quotes straightened and dotted acronyms joined (T.R.U.S.T.M.E. → trustme). */
export function normalise(s: string) {
  return s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/[’‘]/g, "'").replace(/(\p{L})\.(?=\p{L})/gu, '$1');
}

const tokenise = (q: string) => normalise(q).split(/[^\p{L}\p{N}']+/u).map(t => t.replace(/^'+|'+$/g, '')).filter(Boolean);
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordStart = (token: string) => new RegExp(`(?:^|[^\\p{L}\\p{N}])${escape(token)}`, 'u');

export function prepare(entries: SearchEntry[]): Prepared[] {
  return entries.map(e => ({ ...e, nh: normalise(e.h), np: normalise(e.p), nt: normalise(e.t) }));
}

/** Every word in the query must start a word somewhere in the entry; headings count most, then page titles. */
export function search(index: Prepared[], query: string, limit = 30): SearchHit[] {
  const tokens = tokenise(query);
  if (!tokens.length) return [];
  const patterns = tokens.map(wordStart);
  const phrase = tokens.length > 1 ? tokens.join(' ') : '';
  const hits: SearchHit[] = [];

  for (const e of index) {
    let score = 0;
    let all = true;
    for (const re of patterns) {
      const inHead = re.test(e.nh), inPage = re.test(e.np), inText = re.test(e.nt);
      if (!inHead && !inPage && !inText) { all = false; break; }
      score += (inHead ? 10 : 0) + (inPage ? 3 : 0) + (inText ? 1 : 0);
    }
    if (!all) continue;
    if (phrase && e.nh.includes(phrase)) score += 15;
    else if (phrase && e.nt.includes(phrase)) score += 4;
    if (e.nh === normalise(query).trim()) score += 10;
    hits.push({ ...e, score, snippet: snippet(e.t, tokens) });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

/** A short excerpt of the section text around the first query word it contains. */
function snippet(text: string, tokens: string[], width = 150) {
  const at = tokens.map(t => findWord(text, t)).filter(i => i >= 0).sort((a, b) => a - b)[0] ?? -1;
  if (at < 0) return text.length > width ? text.slice(0, width).replace(/\s+\S*$/, '') + '…' : text;
  const start = Math.max(0, at - 40);
  let out = text.slice(start, start + width);
  if (start > 0) out = '…' + out.replace(/^\S*\s/, '');
  if (start + width < text.length) out = out.replace(/\s\S*$/, '') + '…';
  return out;
}

/** Where a (normalised) query word starts in the original text, allowing the dots of acronyms like T.R.U.S.T.M.E. */
function findWord(text: string, token: string) {
  const m = highlighter([token]).exec(text);
  return m ? m.index + m[1].length : -1;
}

/** Regex that finds the query words at the start of words in the original text, for <mark>ing them. */
export function highlighter(tokens: string[]) {
  const char = (c: string) => (c === "'" ? "['’‘]" : escape(c));
  const alt = tokens.map(t => [...t].map(char).join('\\.?')).sort((a, b) => b.length - a.length).join('|');
  return new RegExp(`(^|[^\\p{L}\\p{N}])(${alt})`, 'giu');
}

export const queryTokens = tokenise;

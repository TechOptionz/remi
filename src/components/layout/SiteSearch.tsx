'use client';

// Site-wide search in the header. The button (or Ctrl/⌘ K, or "/") opens a dialog that searches every heading and
// section on the site. The index is built from the pages at `npm run build` (scripts/search-index.mjs) and loaded
// the first time the dialog opens; picking a result goes to that page and scrolls to the section.
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SEARCH_SUGGESTIONS } from '@/content/site';
import { highlighter, normalise, prepare, queryTokens, search, type SearchHit, type SearchIndex } from '@/lib/search';
import Icon from '@/components/shared/Icon';

type Target = { a: string; h: string };

let indexPromise: Promise<SearchIndex> | null = null;
const loadIndex = () => (indexPromise ??= fetch('/search-index.json')
  .then(r => { if (!r.ok) throw new Error(`search index: ${r.status}`); return r.json(); })
  .then(prepare)
  .catch(err => { indexPromise = null; throw err; }));

/** Letters and digits only, so "✳ Safe versus Risky Problems ✳" or "01 SEE" compare cleanly. */
const key = (s: string) => normalise(s).replace(/[^\p{L}\p{N}]/gu, '');

/** The heading a result points at: looked for inside its section (or the page), else the section itself. */
function findTarget({ a, h }: Target) {
  const section = a ? document.getElementById(a) : null;
  const root = section ?? document.querySelector('main') ?? document.getElementById('top');
  if (!root) return null;
  if (root.matches('h1, h2, h3')) return root as HTMLElement;
  const want = key(h);
  const headings = [...root.querySelectorAll<HTMLElement>('h1, h2, h3')].filter(el => el.getClientRects().length);
  return headings.find(el => key(el.textContent ?? '') === want)
    ?? headings.find(el => key(el.textContent ?? '').includes(want))
    ?? section;
}

/** Scrolls the target under the sticky header and flashes it; corrects once if late-loading images moved it. */
function reveal(el: HTMLElement) {
  const offset = () => (document.querySelector('.site-header')?.getBoundingClientRect().height ?? 72) + 16;
  const scroll = () => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset() });
  scroll();
  window.setTimeout(() => { if (Math.abs(el.getBoundingClientRect().top - offset()) > 60) scroll(); }, 900);
  el.classList.remove('search-flash');
  void el.offsetWidth;
  el.classList.add('search-flash');
  window.setTimeout(() => el.classList.remove('search-flash'), 2400);
}

function Marked({ text, re }: { text: string; re: RegExp | null }) {
  if (!re) return <>{text}</>;
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const start = m.index + m[1].length;
    parts.push(text.slice(last, start), <mark key={start}>{m[2]}</mark>);
    last = start + m[2].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}

const crumb = (hit: SearchHit) => (hit.u.startsWith('/ideas-models/') ? `Ideas & Models › ${hit.p}` : hit.p);

export default function SiteSearch({ onOpen }: { onOpen?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const pending = useRef<Target | null>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const results = useMemo(() => (index ? search(index, query) : []), [index, query]);
  const marker = useMemo(() => { const t = queryTokens(query); return t.length ? highlighter(t) : null; }, [query]);

  // Ctrl/⌘ K anywhere, or "/" when not typing, opens the search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && e.target.closest('input, textarea, select, [contenteditable="true"]');
      if ((e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open && !el.open) {
      onOpen?.();
      el.showModal();
      input.current?.select();
      loadIndex().then(setIndex, () => setFailed(true));
    } else if (!open && el.open) el.close();
  }, [open, onOpen]);

  useEffect(() => setActive(0), [query]);
  useEffect(() => { list.current?.children[active]?.scrollIntoView({ block: 'nearest' }); }, [active]);

  // After a result on another page has loaded, find its section (the page may still be rendering)
  useEffect(() => {
    const target = pending.current;
    if (!target) return;
    pending.current = null;
    let tries = 0;
    let frame = 0;
    const attempt = () => {
      const el = findTarget(target);
      if (el) reveal(el);
      else if (++tries < 40) frame = requestAnimationFrame(attempt);
    };
    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  const go = (hit: SearchHit) => {
    setOpen(false);
    const target = { a: hit.a, h: hit.h };
    const href = hit.u + (hit.a ? `#${hit.a}` : '');
    if (hit.u === pathname) {
      window.history.replaceState(null, '', href);
      const el = findTarget(target);
      if (el) reveal(el);
    } else {
      pending.current = target;
      router.push(href, { scroll: false });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(i + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter' && results[active]) { e.preventDefault(); go(results[active]); }
  };

  const status = !query.trim() ? ''
    : failed ? 'Search isn’t available just now.'
    : !index ? 'Loading…'
    : results.length ? `${results.length}${results.length === 30 ? '+' : ''} ${results.length === 1 ? 'result' : 'results'}`
    : `Nothing found for “${query.trim()}”. Try fewer or different words.`;

  return (
    <>
      <button type="button" className="search-btn" aria-label="Search the site" aria-keyshortcuts="Control+K Meta+K /" onClick={() => setOpen(true)}>
        <Icon name="search" size={18} strokeWidth={1.8} />
      </button>

      <dialog ref={dialog} className="search-dialog" aria-label="Search the site" onClose={() => setOpen(false)}
        onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
        <div className="search-panel">
          <div className="search-field">
            <Icon name="search" size={20} strokeWidth={1.8} />
            <input ref={input} type="search" value={query} placeholder="Search models, conversations, programs…"
              role="combobox" aria-expanded={results.length > 0} aria-controls="search-results" aria-autocomplete="list"
              aria-activedescendant={results[active] ? `search-hit-${active}` : undefined}
              autoComplete="off" spellCheck={false} enterKeyHint="search"
              onChange={e => setQuery(e.target.value)} onKeyDown={onKeyDown} />
            <button type="button" className="search-close" onClick={() => setOpen(false)}>Esc</button>
          </div>

          <p className="search-status" role="status">{status}</p>

          {!query.trim() && (
            <div className="search-suggest">
              <span className="search-suggest-label">Try</span>
              {SEARCH_SUGGESTIONS.map(s => (
                <button type="button" key={s} onClick={() => { setQuery(s); input.current?.focus(); }}>{s}</button>
              ))}
            </div>
          )}

          <ul ref={list} id="search-results" className="search-results" role="listbox" aria-label="Results" hidden={!results.length}>
            {results.map((hit, i) => (
              <li key={`${hit.u}#${hit.a}|${hit.h}`} id={`search-hit-${i}`} role="option" aria-selected={i === active} onMouseMove={() => setActive(i)}>
                <a href={hit.u + (hit.a ? `#${hit.a}` : '')} tabIndex={-1}
                  onClick={e => { if (!e.metaKey && !e.ctrlKey && !e.shiftKey) { e.preventDefault(); go(hit); } }}>
                  <span className="search-crumb">{crumb(hit)}</span>
                  <span className="search-head"><Marked text={hit.h} re={marker} /></span>
                  {hit.snippet && <span className="search-snippet"><Marked text={hit.snippet} re={marker} /></span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}

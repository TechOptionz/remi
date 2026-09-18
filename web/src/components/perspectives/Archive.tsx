'use client';

// FIND THE CONVERSATION YOU NEED TODAY — searchable, filterable archive of CONVERSATIONS (content/perspectives.ts).
// Anything on the page with data-topic="<Topic>" opens the archive filtered to that topic.
import { useEffect, useMemo, useState } from 'react';
import Icon from '@/components/shared/Icon';
import { CONVERSATIONS, TOPICS, type Conversation, type Topic } from '@/content/perspectives';
import EpisodeImage from './EpisodeImage';

const PAGE_SIZE = 6;
const SORTS = ['Most watched', 'Newest', 'Surprise me'] as const;
type Sort = (typeof SORTS)[number];

function sortConversations(list: Conversation[], sort: Sort, seed: number) {
  if (sort === 'Newest') return [...list].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
  if (sort === 'Surprise me') {
    // Deterministic shuffle per click so the order holds while typing or filtering
    const rank = (id: string) => [...id].reduce((n, ch) => (n * 31 + ch.charCodeAt(0) + seed) % 9973, seed);
    return [...list].sort((a, b) => rank(a.id) - rank(b.id));
  }
  return list; // list order = most watched
}

export default function Archive() {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState<Topic | null>(null);
  const [sort, setSort] = useState<Sort>('Most watched');
  const [seed, setSeed] = useState(1);
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest<HTMLElement>('[data-topic]');
      if (!el || el.closest('.archive')) return;
      setTopic(el.dataset.topic as Topic);
      setQuery('');
      setVisible(PAGE_SIZE);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = CONVERSATIONS.filter(c =>
      (!topic || c.topic === topic) &&
      (!q || [c.title, c.guest, c.topic, c.blurb].some(text => text.toLowerCase().includes(q))));
    return sortConversations(matches, sort, seed);
  }, [query, topic, sort, seed]);

  const pickTopic = (t: Topic | null) => { setTopic(t); setVisible(PAGE_SIZE); };
  const pickSort = (s: Sort) => { setSort(s); if (s === 'Surprise me') setSeed(n => n + 1); };

  return (
    <section id="archive" className="section section--tight archive centered" aria-labelledby="archive-h">
      <h2 id="archive-h" className="part-title">Find the conversation you need today</h2>
      <p className="part-lede part-lede--center persp-sub">There is a deep archive waiting for you. Search for the question, person or subject that has your attention now.</p>

      <label className="archive-search">
        <Icon name="search" size={26} />
        <span className="sr-only">Search conversations</span>
        <input type="search" value={query} placeholder="Search by question, guest or subject…" onChange={e => { setQuery(e.target.value); setVisible(PAGE_SIZE); }} />
      </label>

      <div className="archive-chips" role="group" aria-label="Filter by topic">
        <button type="button" className="archive-chip" aria-pressed={topic === null} onClick={() => pickTopic(null)}>All conversations</button>
        {TOPICS.map(t => <button type="button" className="archive-chip" key={t} aria-pressed={topic === t} onClick={() => pickTopic(t)}>{t}</button>)}
      </div>

      <h3 className="archive-results-h" aria-live="polite">Conversation results{topic || query ? ` · ${results.length}` : ''}</h3>
      {results.length > 0 ? (
        <div className="archive-grid">
          {results.slice(0, visible).map(c => (
            <a href={c.href} className="archive-card" key={c.id}>
              <EpisodeImage conversation={c} />
              <span className="archive-card-title">{c.title}</span>
              <span className="archive-card-meta">{c.guest} <span aria-hidden="true">·</span> {c.topic}</span>
              <span className="archive-card-cta">Watch or listen</span>
            </a>
          ))}
        </div>
      ) : (
        <p className="archive-empty">Nothing here yet. Try another question, or <button type="button" onClick={() => { pickTopic(null); setQuery(''); }}>see all conversations</button>.</p>
      )}

      <div className="archive-sort" role="group" aria-label="Sort conversations">
        <span>Sort by:</span>
        {SORTS.map(s => <button type="button" key={s} aria-pressed={sort === s} onClick={() => pickSort(s)}>{s}</button>)}
      </div>
      {results.length > visible && (
        <button type="button" className="btn btn--primary btn--caps btn--big" onClick={() => setVisible(v => v + PAGE_SIZE)}>Load more conversations</button>
      )}
    </section>
  );
}

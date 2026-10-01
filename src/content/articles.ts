// Articles (the Articles tab). Add one here and it appears on /articles with its own page at /articles/<slug>.
// A video is optional: `video: { provider: 'vimeo' | 'youtube', id: '…', title: '…' }` shows it above the text.
import type { VideoRef } from '@/components/shared/VideoEmbed';

export type Article = {
  slug: string; title: string; date: string;        // date as 'YYYY-MM-DD'
  summary: string; body: string[];                  // body: one string per paragraph
  video?: VideoRef;
};

export const ARTICLES: Article[] = [];

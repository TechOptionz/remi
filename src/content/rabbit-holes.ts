// Shared by the rabbit-hole pages (one per homepage "Which rabbit hole" card; the cards themselves are RABBIT_HOLES in
// content/home.ts). Each page's own copy lives in its content file: know-better.ts, loving-someone.ts.
import { CONVERSATIONS } from '@/content/perspectives';

/** One of the six hover-expanding pattern boxes: its title, the lines under it, and its four answers
 *  (in the order of that page's labels, e.g. What I do / What I avoid / How it protected me / What can change). */
export type Pattern = { title: string; panel: string[]; answers: [string, string, string, string] };

/** The YouTube link of a Perspectives episode, by its id in CONVERSATIONS. */
export const episodeHref = (id: string) => CONVERSATIONS.find(c => c.id === id)!.href;

export const EIT_HREF = '/ideas-models/emotion-integration-technique';

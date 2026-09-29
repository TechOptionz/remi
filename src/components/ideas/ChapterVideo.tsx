import VideoEmbed from '@/components/shared/VideoEmbed';
import { CHAPTER_VIDEOS } from '@/content/ideas';

/** The video slot every Ideas & Models chapter carries. Renders nothing until a video is listed for the chapter in
 *  CHAPTER_VIDEOS (content/ideas.ts), keyed by its route (e.g. 'trustme-model'). */
export default function ChapterVideo({ chapter }: { chapter: string }) {
  const v = CHAPTER_VIDEOS[chapter];
  if (!v) return null;
  return (
    <section className="chapter-video" aria-label={v.title}>
      <VideoEmbed {...v} />
    </section>
  );
}

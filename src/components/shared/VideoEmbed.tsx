// A responsive 16:9 video (Vimeo or YouTube) for any article or idea page. Pass the video's id, not its address:
// <VideoEmbed provider="vimeo" id="1221386697" title="…" />. Nothing loads until the visitor scrolls to it.
export type VideoRef = { provider: 'vimeo' | 'youtube'; id: string; title: string };

const src = ({ provider, id }: VideoRef) => provider === 'vimeo'
  ? `https://player.vimeo.com/video/${id}?dnt=1`
  : `https://www.youtube-nocookie.com/embed/${id}`;

export default function VideoEmbed({ provider, id, title, className = '' }: VideoRef & { className?: string }) {
  return (
    <div className={`video-embed ${className}`.trim()}>
      <iframe src={src({ provider, id, title })} title={title} loading="lazy" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen />
    </div>
  );
}

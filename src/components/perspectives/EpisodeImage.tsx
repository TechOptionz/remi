import type { Conversation } from '@/content/perspectives';

/** Episode artwork: the conversation's photo, or a Perspectives-branded tile in its tone when there is none. */
export default function EpisodeImage({ conversation, showName, nameWhenCropped }: { conversation: Conversation; showName?: boolean; nameWhenCropped?: boolean }) {
  return (
    <div className={`ep-image ep-image--${conversation.image ? 'photo' : conversation.tone ?? 'gold'}`}>
      {conversation.image
        ? <img loading="lazy" decoding="async" src={conversation.image} alt={`${conversation.guest} in conversation with Remi`} />
        : <span className="ep-image-mark" aria-hidden="true">Perspectives</span>}
      {showName && !conversation.imageHasName && <span className="ep-image-name">{conversation.guest}</span>}
      {nameWhenCropped && <span className="ep-image-name ep-image-name--cropped">{conversation.guest}</span>}
    </div>
  );
}

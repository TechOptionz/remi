import Icon from '@/components/shared/Icon';

// Quote under the founders band, with the "what this is not" note
export default function FoundersQuote() {
  return (
    <section className="section section--tight section--flush" aria-label="How Remi holds a room">
      <figure className="big-quote">
        <blockquote><p>I know how to hold a room when the truth is difficult, the stakes are real and everyone present is highly capable.</p></blockquote>
        <figcaption className="big-quote-note">
          <span className="icon-square icon-square--sm"><Icon name="lock" size={18} /></span>
          This is senior-level facilitation and strategic consulting. It is not middle-management training, operational hand-holding or ongoing accountability.
        </figcaption>
      </figure>
    </section>
  );
}

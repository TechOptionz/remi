import Icon, { type IconName } from '@/components/shared/Icon';

const NOTES: { icon: IconName; know: string; still: string }[] = [
  { icon: 'scribble', know: 'I know why I fear abandonment.', still: 'I still chase when someone withdraws.' },
  { icon: 'heart', know: 'I understand boundaries.', still: 'I still say yes when every part of me means no.' },
  { icon: 'spiral', know: 'I recognise the pattern.', still: "I still cannot stop it when I'm triggered." },
];

// I'M INTERESTED IN WHAT MAKES CHANGE POSSIBLE — intro with teaching photo, then three "I know… I still…" notes
export default function ChangePossible() {
  return (
    <section className="section section--tight" aria-labelledby="change-h">
      <div className="part-head">
        <div>
          <h2 id="change-h" className="part-title"><span className="underline">I'm interested in what makes change possible</span></h2>
          <p className="part-lede">Much of personal development helps people understand themselves. That matters, but understanding a pattern does not necessarily change what happens when the pattern is activated.</p>
        </div>
        <img className="part-photo" loading="lazy" decoding="async" src="/assets/photos/invite-teaching.webp" alt="Remi teaching in front of a screen that reads “You can't be happy living someone else's comfort level”" />
      </div>
      <div className="gap-notes">
        {NOTES.map(n => (
          <article className="gap-note" key={n.know}>
            <span className="gap-note-icon"><Icon name={n.icon} size={44} strokeWidth={1.2} /></span>
            <div>
              <h3>{n.know}</h3>
              <p><span className="underline">{n.still}</span></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

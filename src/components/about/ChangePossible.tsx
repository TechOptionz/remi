import Link from 'next/link';
import Icon, { type IconName } from '@/components/shared/Icon';

// The three statements open the work they lead to (round seven edits): personal development, business, leadership.
const NOTES: { icon: IconName; text: string; label: string; href: string }[] = [
  { icon: 'scribble', text: 'I know it’s my thinking that is creating problems in my life…', label: 'Personal development', href: '/i-know-better' },
  { icon: 'growth', text: 'I know my business success is capped by my thinking…', label: 'Business tools & resources', href: '/build-an-asset' },
  { icon: 'people', text: 'I’m committed to being the leader I know my team deserves…', label: 'Leadership resources', href: '/leadership' },
];

// I'M INTERESTED IN WHAT MAKES CHANGE POSSIBLE — intro with teaching photo, then three clickable "I know…" notes
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
          <Link href={n.href} className="gap-note" key={n.href}>
            <span className="gap-note-icon"><Icon name={n.icon} size={44} strokeWidth={1.2} /></span>
            <div>
              <h3>{n.text}</h3>
              <p><span className="underline">{n.label}</span> <span aria-hidden="true">⟶</span></p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

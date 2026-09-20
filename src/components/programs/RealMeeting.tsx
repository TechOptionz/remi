import { SIGNS } from '@/content/programs';
import { WaitlistCta } from './ui';

// THE MEETING ENDS. EVERYONE NODS. — burgundy band, the ten numbered signs in two columns
export default function RealMeeting() {
  return (
    <section className="ry-band ry-band--burgundy" aria-labelledby="meeting-h">
      <h2 id="meeting-h" className="ry-title ry-title--wide">The meeting ends. Everyone nods. <em>The real meeting begins afterwards.</em></h2>
      <p className="ry-lede">You may recognise some version of this:</p>
      <ol className="ry-signs">
        {SIGNS.map(t => <li key={t}>{t}</li>)}
      </ol>
      <div className="ry-after">
        <p>These problems rarely yield to another piece of information. The people involved are often intelligent, experienced and already familiar with the language of leadership.</p>
        <p className="ry-callout ry-callout--lg">What they cannot easily see is the system they are inside.</p>
        <WaitlistCta />
      </div>
    </section>
  );
}

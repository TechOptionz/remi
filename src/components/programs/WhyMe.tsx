import { AUTHORITY_LOGOS, CREDENTIALS } from '@/content/programs';
import { WaitlistCta } from './ui';

// WHY ME? — copy left; restrained credibility panel right (one room, one candid moment, one line of credentials)
export default function WhyMe() {
  return (
    <section className="ry-section" aria-labelledby="why-h">
      <div className="ry-split ry-split--even">
        <div className="ry-prose">
          <h2 id="why-h" className="ry-title">Why <em>me?</em></h2>
          <p className="ry-callout">I founded, built and eventually sold The Coaching Institute, a business that generated more than $200 million over 23 years.</p>
          <p>During that time, I developed intellectual property across human behaviour, emotional change, leadership, decision-making, organisational alignment, consultative sales and the movement from founder-led practice to enterprise.</p>
          <p>I know the emotional and structural reality of building a company because I have lived it. I know what it is to hold the vision, become central to too many decisions, develop leaders, protect culture, create systems, grow intellectual property, make difficult commercial calls and discover that the thing which created success at one stage can become the constraint at the next.</p>
          <p>My work has always crossed boundaries that organisations usually keep separate.</p>
          <p>Strategy affects identity. Structure affects behaviour. Emotional capacity affects decision quality. Leadership dynamics affect execution. People can understand what needs to change and remain unable to do it when the moment arrives.</p>
          <p className="ry-callout">I work with the whole reality.</p>
          <WaitlistCta />
        </div>
        <aside className="ry-proof" aria-label="Selected credentials">
          <div className="ry-proof-photos">
            <img className="photo-print ry-proof-a" loading="lazy" decoding="async" src="/assets/photos/rebel-room.webp" alt="Remi teaching a full room" />
            <img className="photo-print ry-proof-b" loading="lazy" decoding="async" src="/assets/photos/rebel-handshake.webp" alt="Remi reaching across a crowded room to shake a participant's hand" />
          </div>
          <ul className="ry-credentials">
            {CREDENTIALS.map(t => <li key={t}>{t}</li>)}
          </ul>
          {AUTHORITY_LOGOS.length > 0 && (
            <ul className="ry-logos">
              {AUTHORITY_LOGOS.map(l => <li key={l.src}><img loading="lazy" decoding="async" src={l.src} alt={l.alt} /></li>)}
            </ul>
          )}
        </aside>
      </div>
    </section>
  );
}

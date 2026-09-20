import { POOR_FIT } from '@/content/programs';
import { WaitlistCta } from './ui';

// WHO REBEL YELL IS FOR — black band: who it suits left, the poor-fit list in a ruled panel right
export default function WhoFor() {
  return (
    <section className="ry-band ry-band--black" aria-labelledby="who-h">
      <div className="ry-split ry-split--even">
        <div className="ry-prose">
          <h2 id="who-h" className="ry-title">Who Rebel Yell <em>is for</em></h2>
          <p className="ry-callout">Rebel Yell is for a founder, owner, CEO or senior leadership team facing something consequential enough that continuing to circle it has become expensive.</p>
          <p>You may be at an inflection point, dealing with unresolved tension, preparing for substantial growth, struggling to execute a strategy, navigating founder dependence, integrating new leadership or watching an intelligent team become less effective than the people within it should allow.</p>
          <p>You are prepared to examine the diagnosis as seriously as the solution.</p>
          <p>You understand that the person commissioning the work may also be part of the system being examined.</p>
          <p>You want candour, but you also value judgment. The aim is movement that holds, not the theatre of somebody arriving and telling everyone a few brutal truths.</p>
          <WaitlistCta />
        </div>
        <div className="ry-unfit">
          <h3>Rebel Yell will be a poor fit if:</h3>
          <ul>
            {POOR_FIT.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

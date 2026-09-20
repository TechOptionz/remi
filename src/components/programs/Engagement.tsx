import { ENGAGEMENT } from '@/content/programs';
import { WaitlistCta } from './ui';

// WHAT AN ENGAGEMENT MAY INVOLVE — intro and the honest caveats left, the eight elements as a ledger right
export default function Engagement() {
  return (
    <section className="ry-section" aria-labelledby="engage-h">
      <div className="ry-split ry-split--even">
        <div className="ry-prose">
          <h2 id="engage-h" className="ry-title">What an engagement <em>may involve</em></h2>
          <p className="ry-callout">Rebel Yell is designed around a live business problem, so the final structure follows the diagnosis.</p>
          <p>I am not moving into your organisation, attending weekly status meetings or manufacturing months of consulting activity to justify a retainer.</p>
          <p>I stay involved closely enough to see what happens when insight meets the real system. That is where good intentions encounter old behaviour, operational pressure and the first genuinely difficult decision.</p>
          <p>Sometimes one concentrated intervention creates the movement required. Sometimes the initial work reveals a deeper organisational issue that warrants a longer advisory relationship. We will know more once we have stopped guessing about the problem.</p>
          <WaitlistCta />
        </div>
        <div className="ry-ledger">
          <p className="ry-ledger-head">An engagement may include:</p>
          <ol>
            {ENGAGEMENT.map(t => <li key={t}>{t}</li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}

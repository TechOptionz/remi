import { Brush, Head, QuoteBanner } from '@/components/rabbit-holes/ui';
import { ETHICAL, RESPONSIBILITIES, ROOMS } from '@/content/ultimate-influence';
import { Cards } from './ui';

// DESIGN PART ONE: meet Ultimate Influence (the four responsibilities), ethical does not mean passive, the same principles
// in different rooms. The design's "Section 1/2/3" labels are left out, as the client asked on the other designed pages.
export default function UiMeet() {
  return (
    <>
      <section id="meet" className="kb-section ui-meet" aria-labelledby="ui-meet-h">
        <Head id="ui-meet-h">Meet <Brush>ultimate</Brush> influence</Head>
        <p className="kb-sub kb-indent ui-lede">Consultative selling is not a softer script. It is the ability to understand precisely, challenge honestly, communicate intangible value and help someone make a decision that is genuinely right for them.</p>
        <p className="ui-rule-label">The conversation has four responsibilities</p>
        <ol className="ui-flow ui-flow--4">
          {RESPONSIBILITIES.map(r => (
            <li key={r.name}><span className="ui-flow-name">{r.name}</span><span>{r.text}</span></li>
          ))}
        </ol>
        <QuoteBanner>A sales conversation should improve the quality<br /> of the decision, whether the answer is yes or no.</QuoteBanner>
      </section>

      <section className="kb-section ui-ethical" aria-labelledby="ui-ethical-h">
        <Head id="ui-ethical-h">Ethical does not <Brush>mean passive</Brush></Head>
        <p className="kb-sub kb-indent">You can care deeply about the buyer and still be willing to lead the conversation.</p>
        <Cards items={ETHICAL} layout="stack" cols={3} />
        <QuoteBanner>Refusing to influence does not make you ethical.<br /> Being responsible for how you influence does.</QuoteBanner>
      </section>

      <section className="kb-section ui-rooms" aria-labelledby="ui-rooms-h">
        <Head id="ui-rooms-h">The same principles. <Brush>Different</Brush> rooms.</Head>
        <Cards items={ROOMS} layout="side" cols={2} />
      </section>
    </>
  );
}

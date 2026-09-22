import Link from 'next/link';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';
import { DSR_ELEMENTS } from '@/content/dsr';

// DEEP STATE REPATTERNING — breadcrumb, title, why an old experience can stop being over, what the model brings together
export default function DsrIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Deep State Repatterning</span>
      </nav>
      <p className="ideas-eyebrow">Emotional change · A complete methodology</p>
      <PartHead n={1} title="Deep State Repatterning™" aside={<Art name="p4-compass" className="dsr-head-art" />}>
        <Hand v={['underline']}>Why an old experience can stop being over, and how the mind can finally place it in the past.</Hand>
        <p className="dsr-byline">By Remi Pearson</p>
        <Body>Most people know when an experience is over in calendar time. They can tell you the year it happened, where they lived, who was there and how many decades have passed since. Yet the emotional system does not organise experience only by date. Something can be finished factually and remain completely unfinished internally.</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>The person may understand what happened, have talked about it many times, and still find that an apparently ordinary moment in the present produces fear, shame, anger, hurt or powerlessness that belongs partly to another time.</Body>
        <Body>That gap has occupied me for much of my working life. It is one thing to help somebody explain a pattern. It is another to help the pattern lose its authority. Insight matters, sometimes enormously, but conscious understanding does not automatically reach the level at which the original emotional meaning was formed. A person can know they were not responsible for what happened to them and still carry the felt conviction that somehow they were. They can know a present relationship is safe and still react as if abandonment or engulfment is imminent. They can know they are capable and continue to organise their decisions around an old moment of humiliation, rejection or failure.</Body>
        <Body>I created Deep State Repatterning™ to work directly with this problem. The model begins with a simple observation:</Body>
      </div>
      <p className="ideas-note triad-note">Our problems are located in time.</p>
      <div className="triad-prose">
        <Body>We do not merely remember an event as information. We represent it internally through images, sensations, sounds, spatial locations and symbolic arrangements. We have a felt sense of where the past is, where the future is, and how close or distant particular experiences seem. Deep State Repatterning™ uses those representations deliberately. It extends beyond the body of work of NLP by combining the following in one coherent process:</Body>
      </div>
      <ul className="dsr-elements" aria-label="What Deep State Repatterning brings together">
        {DSR_ELEMENTS.map(e => <li key={e}>{e}</li>)}
      </ul>
    </Part>
  );
}

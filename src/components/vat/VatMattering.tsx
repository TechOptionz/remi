import Link from 'next/link';
import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { STAGES } from '@/content/vat';

/** Diagram 2: the five stages as a pathway, with a return loop between inner work and values exploration. */
function Pathway() {
  return (
    <figure className="vat-path" aria-label="The Values Alignment Technique, five stages">
      <ol className="vat-stages">
        {STAGES.map((s, i) => (
          <li key={s.title} className={s.deep ? 'vat-stage vat-stage--deep' : 'vat-stage'}>
            <span className="vat-stage-n">{i + 1}</span>
            <div><h4>{s.title}</h4><p>{s.text}</p></div>
          </li>
        ))}
      </ol>
      <p className="vat-loop" aria-hidden="true">↺ Understanding develops through revisiting: inner work and values exploration return to one another.</p>
      <figcaption className="ladder-cap">Compassionate inquiry, at the person’s capacity.</figcaption>
    </figure>
  );
}

// WHAT DOES MATTERING COST? + WHEN PROTECTION BECOMES VISIBLE, WE DO THE INNER WORK + the pathway
export default function VatMattering() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>What does mattering cost?</H3>
      <div className="triad-prose">
        <Body>Consider a hypothetical person who repeatedly sets aside their needs to preserve a relationship. They say they want to feel important to their partner, yet whenever expressing a need creates tension, they withdraw the request and attend to the other person’s comfort.</Body>
        <Body>Within the language of this technique, self-abandonment is being given priority over self-advocacy. That can be painful to recognise. It does not mean they enjoy being dismissed or have consciously decided that their needs are irrelevant. We need to understand what advocating for themselves seems likely to cost.</Body>
        <Body>Perhaps disagreement threatens their sense of connection. Perhaps they learned early that having needs made them difficult to love. Keeping the relationship undisturbed may feel necessary enough that they repeatedly sacrifice their own experience to preserve it.</Body>
        <Body>As their relationship with themselves changes, we would expect to see self-advocacy begin to have a presence. They may acknowledge discomfort they previously explained away, seek support, or become clearer about what they are willing to participate in. The external outcome might take time.</Body>
        <Body>There is a further distinction worth exploring here. An enormous amount of effort can go into trying to persuade another person to let us matter. From the inside, that effort can feel like standing up for ourselves. Yet we may still be making our worth dependent on receiving their agreement.</Body>
      </div>
      <p className="ideas-note triad-note">Am I responding to the knowledge that I matter, or am I still trying to convince this person to grant me that position?</p>
      <div className="triad-prose">
        <Body>The answer may emerge slowly. It can bring grief as well as clarity, particularly when someone begins to recognise that the relationship they have been trying to secure cannot offer what they need.</Body>
      </div>

      <H3 v={['left', 'rule']}>When protection becomes visible, we do the inner work</H3>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>Recognising a protective pattern tells me where the work needs to deepen. If someone discovers that staying invisible protects them from criticism, I want to understand the part of them for whom criticism feels so threatening, and what that part needs.</Body>
          <Body>This is where I bring in inner-work approaches, including parts work or <Link href="/ideas-models/emotion-integration-technique">EIT, Emotion Integration Technique</Link>, according to what emerges for the person. We explore the protection and develop a relationship with the experience it has been keeping at a distance. That may involve feelings the person has never had enough support to meet.</Body>
          <Body>An intellectual explanation can be useful, but understanding why we do something does not necessarily change what happens inside us when the familiar threat appears. Someone can explain their fear of rejection beautifully and still experience an overwhelming need to retreat when they feel exposed.</Body>
          <Body>I am interested in the felt shift: the person developing enough capacity and self-compassion to be with something they previously had to organise their life around avoiding. That work proceeds at their pace. We cannot assume that recognising a protection means they are ready to relinquish it.</Body>
          <Hand v={['sm']}>As the inner work unfolds, we revisit what matters and what is now possible.</Hand>
          <Body>A familiar priority may loosen its hold. Something the person could previously only wish for may begin to feel available as a way of relating to themselves.</Body>
        </div>
        <Pathway />
      </div>
    </Part>
  );
}

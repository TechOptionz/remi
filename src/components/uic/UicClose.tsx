import Link from 'next/link';
import { Body, Box, Btn, H3, Panel, Part } from '@/components/ideas/ui';
import { RELATED, UIC_TRAINING_HREF } from '@/content/uic';

// A METHOD YOUR TEAM CAN LEARN + the online training + related ideas
export default function UicClose() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>A method your team can learn, and a conversation that still sounds like you</H3>
      <div className="triad-prose">
        <Body>The eight steps give salespeople a structure they can practise and improve. That matters for a founder leading a team, because you can identify where a conversation lost its way. Did the salesperson begin recommending before they understood the buyer? Did they hear a concern and treat it as resistance? Did they skip backtracking because a quick yes felt good?</Body>
        <Body>The same structure is useful if you sell your own work. You can prepare thoroughly and still sound like yourself. In the workshop, I demonstrated the steps through live conversation and showed people how to return to an earlier step when the person they were speaking with wasn&apos;t ready to move forward. That&apos;s a more useful skill than memorising a perfect line and hoping someone responds as expected.</Body>
        <Body>Sales mastery, to me, is being able to achieve good results repeatedly. You develop that capacity by getting better at understanding people and assessing the match, not by becoming better at delivering a speech. When you and the buyer can see clearly that what they want and what you offer belong together, doing business becomes a sensible next step.</Body>
      </div>

      <Panel tone="rust" className="triad-cta">
        <H3 className="panel-title">Learn the full method</H3>
        <p className="panel-body panel-body--center">If you want to learn the full Ultimate Influence method, including how to use the eight steps in your own sales conversations, explore the Ultimate Influence online training program.</p>
        <div className="panel-actions">
          <Btn href={UIC_TRAINING_HREF} v={['outline']}>Explore the Ultimate Influence online training program</Btn>
        </div>
      </Panel>

      <H3 v={['rules']}><span></span>Related ideas<span></span></H3>
      <div className="next-cards related-cards">
        {RELATED.map(r => (
          <Box as="article" className="ncard" key={r.title}>
            <img src={`/assets/ideas/${r.art}.webp`} alt="" aria-hidden="true" />
            <h4>{r.title}</h4><p>{r.text}</p>
            <Link href={r.href} className="ideas-btn ideas-btn--sm">{r.cta} <span aria-hidden="true">→</span></Link>
          </Box>
        ))}
      </div>

      <Btn href="/ideas-models#part-8">Back to Ideas &amp; Models</Btn>
    </Part>
  );
}

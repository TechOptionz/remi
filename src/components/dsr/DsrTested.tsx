import Link from 'next/link';
import { Body, Box, Btn, H3, Hand, NextLink, Part } from '@/components/ideas/ui';
import { RELATED, TEST_QUESTIONS } from '@/content/dsr';

// HOW CHANGE IS TESTED + DEEP WORK SHOULD RESTORE AGENCY + related ideas
export default function DsrTested() {
  return (
    <Part n={6}>
      <H3 v={['left', 'rule']}>How change is tested</H3>
      <div className="triad-prose">
        <Body>A compelling inner experience is not enough. The shift must be tested. After the originating event has been worked with, the client returns through the timeline and notices what happens to subsequent moments linked to it. We then bring to mind situations that previously triggered the emotion or belief.</Body>
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{TEST_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>The process then moves forward. Future pacing allows the person to encounter imagined situations that once activated the pattern and discover how they respond now. This is important because change is not complete merely because the past feels different. The person needs an emerging experience of choice in the future. Their nervous system, imagination and sense of identity begin rehearsing life without the old instruction.</Body>
      </div>

      <H3 v={['left', 'rule']}>Deep work should restore agency</H3>
      <div className="triad-prose">
        <Body>Any method capable of reaching deeply into emotional experience must be handled with care. Depth by itself is not evidence of quality. Intensity is not healing. The practitioner’s task is to preserve agency, pace the work to the person’s capacity, recognise protection rather than battle it, and understand that the client’s unconscious mind is already attempting to help them.</Body>
        <Body>Deep State Repatterning™ was developed through decades of coaching, teaching and intervention work at The Coaching Institute, which I founded. It reflects a conviction that has shaped my entire body of work: people are not defective collections of symptoms. Their patterns make sense in relation to what they experienced, what they concluded, and how they learned to protect themselves. The work becomes possible when we respect that intelligence while helping the system recognise that the conditions which created the pattern are no longer happening now.</Body>
        <Body>A person does not need to forget their past to become free of its automatic authority. The experience can remain part of their history without continuing to dictate identity, intimacy, possibility or choice.</Body>
        <Hand>When the emotional charge releases and the old meaning is no longer necessary, the past can finally become what the calendar has said it was all along: over.</Hand>
      </div>

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

      <Btn href="/ideas-models#part-4">Back to Ideas &amp; Models</Btn>
      <NextLink href="/ideas-models#part-5" decorated>Continue to meaning &amp; alignment</NextLink>
    </Part>
  );
}

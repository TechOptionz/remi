import Link from 'next/link';
import { Body, Box, Btn, H3, Hand, Part } from '@/components/ideas/ui';
import { RELATED } from '@/content/safe';

// CAN YOU BE OKAY WITH NOT FEELING OKAY? — self-acceptance, the triad, "what would love do", then related ideas
export default function SafeOkay() {
  return (
    <Part n={7}>
      <H3 v={['left', 'rule']}>Can you be okay with not feeling okay?</H3>
      <div className="triad-prose">
        <Body>For me, the pathway to self-acceptance includes building a relationship with the emotions we would rather not have. It is difficult to accept ourselves while continually rejecting what we feel.</Body>
        <Body>That does not mean we enjoy every emotion, act on every impulse or remain indefinitely in distress. It means we begin to recognise that sadness can be here without making us inadequate. Loneliness can be acknowledged without making us unlovable. Hurt can receive our attention without becoming evidence that something is wrong with us.</Body>
        <Body>This is what I mean by being okay with not feeling okay. There is room for our actual experience, and we can respond to it with care.</Body>
        <Body>The <Link href="/ideas-models/self-esteem-triad">Self-Esteem Triad</Link> belongs here because emotions, needs and boundaries are involved throughout. Our emotions may help us recognise what requires attention. Our needs give us a clearer sense of what matters. Our boundaries help us act in ways that take that knowledge seriously. The recognition that we are worthy, lovable and enough becomes something we practise in the way we treat ourselves, including when life is difficult.</Body>
      </div>
      <p className="ideas-note triad-note">A question I return to is, “What would love do right now?”</p>
      <div className="triad-prose">
        <Body>Sometimes love would ask us to rest. Sometimes it would help us have a conversation we have been avoiding, or stop making excuses for behaviour that hurts us. Sometimes it would simply stay with the part of us that feels frightened and has spent a long time believing it had to manage alone.</Body>
        <Body>The external problem may still require attention tomorrow. We may still need to act, seek help or make a difficult decision. But there can be a change in how we accompany ourselves through it.</Body>
        <Hand>We no longer have to make our right to compassion conditional on the problem being gone.</Hand>
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

      <Btn href="/ideas-models#part-3">Back to Ideas &amp; Models</Btn>
    </Part>
  );
}

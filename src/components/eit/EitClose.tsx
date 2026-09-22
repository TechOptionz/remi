import Link from 'next/link';
import { Body, Box, Btn, H3, Hand, NextLink, Panel, Part } from '@/components/ideas/ui';
import { EIT_TRAINING_HREF, RELATED } from '@/content/eit';

// A PRECISE INTERVENTION + THE ROUTE HOME IS COMPASSION + practitioner training + related ideas
export default function EitClose() {
  return (
    <Part n={6}>
      <H3 v={['left', 'rule']}>A precise intervention for a particular challenge</H3>
      <div className="triad-prose">
        <Body>Not every client needs EIT. Many people can locate an emotion, access compassion and work directly with their parts. EIT was developed for the clients who cannot get to that first step without becoming more stressed, self-conscious or intellectualised. It is especially useful where dissociation, avoidance and conceptual thinking have become dominant protective strategies.</Body>
        <Body>The technique is simple to describe, but it requires practitioner skill. The practitioner must recognise protection, work with light Ericksonian trance, pace the movement without force, listen for when compassion is genuine, and know when to move outward, return inward or drop beneath the presenting layer. This is not an exercise I recommend as casual self-inquiry. The softness of the process depends on the quality of the facilitation.</Body>
        <Body>EIT is not endorsed by Internal Family Systems, nor is it part of the official IFS model. I developed it as the next step in my own work for clients whose dissociation prevented them from accessing the compassion parts work requires. It belongs in the wider public conversation because practitioners meet these clients every day. We need an approach that does not mistake their protection for resistance or make them responsible for the limits of the intervention being offered.</Body>
      </div>

      <H3 v={['left', 'rule']}>The route home is compassion</H3>
      <div className="triad-prose">
        <Body>There is a particular beauty in watching someone feel compassion for a strategy they have spent years despising. The shoulders soften. The need to get the answer right begins to loosen. The client discovers that they do not need to force their way into the body or perform emotional fluency for the practitioner. They can begin exactly where they are.</Body>
        <Body>The way in is sometimes found by moving further out. Once safety is real, compassion can make the return journey. What was held at a distance can come closer. What was underneath can emerge without being dragged into view. The person does not lose the protector. They gain a relationship with it, and with the grief, hurt, loneliness, fear and shame it has been carrying.</Body>
        <Body>That is the purpose of Emotion Integration Technique. We are not trying to make somebody more emotional. We are helping them become more capable of being with the emotions that already belong to them.</Body>
        <Hand>The result is a wider internal world, a softer relationship with the self and more freedom in the moment when an old protection would once have made the decision.</Hand>
      </div>

      <Panel tone="rust" className="triad-cta">
        <H3 className="panel-title">Practitioner training</H3>
        <p className="panel-body panel-body--center">If you are a practitioner, therapist or coach who would love to access this model, explore the blended practitioner training I will offer once each year, combining Internal Family Systems for practitioners with Emotion Integration Technique.</p>
        <div className="panel-actions"><Btn href={EIT_TRAINING_HREF} v={['outline']}>Explore practitioner training</Btn></div>
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

      <Btn href="/ideas-models#part-4">Back to Ideas &amp; Models</Btn>
      <NextLink href="/ideas-models#part-5" decorated>Continue to meaning &amp; alignment</NextLink>
    </Part>
  );
}

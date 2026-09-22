import Link from 'next/link';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

// EMOTION INTEGRATION TECHNIQUE — breadcrumb, title, the client who understands everything and feels nothing
export default function EitIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Emotion Integration Technique</span>
      </nav>
      <p className="ideas-eyebrow">Emotional change · In the live moment</p>
      <PartHead n={1} title="Emotion Integration Technique" aside={<Art name="p4-woman" className="dsr-head-art" />}>
        <Hand v={['underline']}>How moving further away can become the path back to compassion.</Hand>
        <p className="dsr-byline">By Remi Pearson</p>
        <Body>Some clients can understand themselves brilliantly and still be almost entirely unavailable to themselves emotionally. They can explain their attachment pattern, identify the likely childhood origin of it, recognise the protector, describe what it does in relationships and perhaps even tell you why it developed. Ask them where they feel any of this in their body and the whole process can suddenly stop.</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>They look for the correct answer. They search for an emotion they can name with confidence. They try to work out where a feeling ought to be located, then become frustrated because they cannot find it. The more the practitioner asks them to tune in, the more conceptual they become. What was intended as an invitation begins to feel like a test they are failing.</Body>
        <Body>I developed Emotion Integration Technique, or EIT, because I kept meeting people for whom parts work did not go far enough. This was particularly common among highly dissociative, intellectually defended clients and dismissive-avoidant men who seemed to live from the neck up.</Body>
        <Hand v={['sm']}>They did not need more pressure to feel. They needed a way of beginning that respected the intelligence of the protection already in place.</Hand>
      </div>
    </Part>
  );
}

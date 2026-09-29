import Link from 'next/link';
import ZoomArt from '@/components/ideas/ZoomArt';
import { Art, Body, Hand, Part, PartHead } from '@/components/ideas/ui';

export const PATH_ALT = 'Ultimate Influence by Remi Pearson: eight stepping stones climbing a hillside. 1 Ignite, 2 Excite, 3 Flip, 4 Match, 5 Recommend, 6 Backtrack, 7 Close, 8 Future pace.';

// ULTIMATE INFLUENCE CONSULTATIVE SALES — breadcrumb, title, where the method came from, the eight-step illustration
export default function UicIntro() {
  return (
    <Part n={1} className="triad-intro">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/ideas-models">Ideas &amp; Models</Link><span aria-hidden="true">/</span>
        <span aria-current="page">Ultimate Influence</span>
      </nav>
      <p className="ideas-eyebrow">Influence &amp; enterprise · Consultative sales</p>
      <PartHead n={1} title="Ultimate Influence Consultative Sales" aside={<Art name="p8-star" className="uic-head-art" />}>
        <Hand v={['underline']}>How to know when you and a buyer are the right match.</Hand>
        <Body>Early in my career, I studied a number of sales methods that left me uncomfortable. They taught people to find a buyer&apos;s pain point, aggravate it, and then present the offer as relief. I could see how the techniques worked. I also knew I didn&apos;t want to have conversations with people that way.</Body>
      </PartHead>
      <div className="triad-prose">
        <Body>That question stayed with me … how do you become highly skilled at sales while allowing the person you&apos;re speaking with to feel known, respected, and able to make a good decision? Ultimate Influence grew from my work on that question.</Body>
        <Body>My view of consultative sales is fairly straightforward. We are seeking to understand whether we&apos;re in alignment. If we are, we should be able to do business together. If we&apos;re not, a good conversation will help us discover that too.</Body>
        <Body>That sounds simple until you try to do it well. You need to understand what the person cares about, what they value, what they&apos;re seeking, and what they&apos;re prepared to do to achieve it. You also need to understand your own offer well enough to assess whether you can fulfil what they want. There is a difference between finding a point of connection and establishing a genuine match. A person can like you, enjoy the conversation, and still need something you cannot provide.</Body>
      </div>
      <ZoomArt name="ui-path" alt={PATH_ALT} label="Ultimate Influence" className="triad-diagram uic-plate ideas-bleed" />
    </Part>
  );
}

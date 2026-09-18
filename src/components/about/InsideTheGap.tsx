import Link from 'next/link';
import Icon from '@/components/shared/Icon';

// MY WORK LIVES INSIDE THAT GAP (left, with the EIT card) · HOLDING SPACE (right, with the quote)
export default function InsideTheGap() {
  return (
    <section className="section section--tight section--flush gap-split" aria-labelledby="gap-h">
      <div>
        <h2 id="gap-h" className="part-title part-title--sm"><span className="underline">My work lives inside that gap</span></h2>
        <p className="part-lede part-lede--wide">I work with the emotional and protective architecture beneath our behaviour. This includes trauma, attachment, parts work, self-abandonment, boundaries, conflict, emotional integration and the complicated business of learning how to remain connected to ourselves while we are connected to another person.</p>
        <Link href="/ideas-models#part-4" className="mini-card">
          <span className="mini-card-icon"><Icon name="brain" size={34} /></span>
          <span>
            <span className="mini-card-title">Emotion Integration Technique</span>
            <span className="mini-card-text">A practical process for reaching the emotion a protective pattern has been organised around avoiding.</span>
          </span>
        </Link>
      </div>
      <div>
        <div className="holding">
          <span className="mini-card-icon mini-card-icon--accent"><Icon name="armchair" size={34} /></span>
          <div>
            <h2 className="part-title part-title--xs part-title--accent"><span className="underline">Holding space is one of my deepest strengths</span></h2>
            <p className="part-lede">Not filling the silence.<br />Not rescuing someone from what they feel.<br />Not imposing my preferred answer because their uncertainty makes me uncomfortable.</p>
          </div>
        </div>
        <blockquote className="serif-quote"><p>Sometimes the part that will not change is not broken, stubborn or resistant. Sometimes it is protecting something we have not yet learned how to meet.</p></blockquote>
      </div>
    </section>
  );
}

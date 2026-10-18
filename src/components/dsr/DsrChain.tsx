import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { CHILD_CONCLUSIONS, PEARLS_ALT } from '@/content/dsr';

// WHY CAN A PAST EXPERIENCE STILL FEEL PRESENT? — the child's conclusions, the chain of pearls, the first SEE
export default function DsrChain() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>Why can a past experience still feel present?</H3>
      <div className="triad-prose">
        <Body>When a significant emotional event occurs, especially in childhood, the mind is not recording a neutral documentary. It is trying to make sense of experience with whatever capacities are available at the time. A child thinks personally and emotionally. If a trusted adult is unavailable, rejecting, frightening or violating, the child rarely concludes that the adult lacks capacity. The conclusion is more likely to be about the self:</Body>
      </div>
      <ul className="dsr-conclusions">{CHILD_CONCLUSIONS.map(c => <li key={c}>{c}</li>)}</ul>
      <div className="triad-prose">
        <Body>These conclusions may never become sentences, yet they can become the organising meaning beneath later decisions.</Body>
        <Body>One event then gathers others around it. I describe this as a chain of pearls. Experiences with a similar emotional signature become linked, even when the circumstances are different. An early rejection may connect with exclusion at school, a betrayal in adulthood and a partner arriving home late. The present event may be relatively small, but it activates the emotional weight of the entire chain.</Body>
        <Hand v={['sm']}>The person experiences today through an accumulation of yesterdays.</Hand>
      </div>
      <ZoomArt name="dsr-pearls" alt={PEARLS_ALT} label="The chain of pearls" className="triad-diagram dsr-pearls" />
      <p className="dsr-caption">When the originating emotional meaning changes, the later chain has to reorganise.</p>
      <div className="triad-prose">
        <Body>This is why the first Significant Emotional Event, or SEE, matters in Deep State Repatterning™. The work does not settle for the most recent example simply because it is easiest to describe. We follow the pattern back to the earliest event the person’s mind identifies as relevant. The process is symbolic and imaginative by design. The mind works with symbols, spatial relationships, colour, movement and metaphor. Whether the timeline appears visually, is sensed in the body, or is known in some other way is less important than the person’s ability to work with their own internal representation.</Body>
      </div>
    </Part>
  );
}

import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, H3, Hand, Part } from '@/components/ideas/ui';

const STREET_ALT = 'Taking care of your side of the street: ten safe problems and the risky truths they may protect. Safe problems, what I keep trying to fix, are paired with risky truths, what I might gently explore. For example: if my partner would change I could finally feel okay, paired with what hurts here, what do I need, and what boundary or choice is mine if they do not change. Caption: my agency does not depend on their willingness to change. These are possibilities to explore, not assumptions. Taking responsibility for my response does not make me responsible for someone else’s harm.';

// HOW DO YOU TAKE CARE OF YOUR SIDE OF A RELATIONSHIP? — the anxious/avoidant example, then the poster of ten safe problems
export default function SafeStreet() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>How do you take care of your side of a relationship?</H3>
      <div className="street-grid">
        <div className="triad-prose">
          <Body>The relationship between an anxiously attached person and a dismissively avoidant partner can help illustrate this distinction. These are descriptions of attachment patterns, not fixed identities, and the details differ between relationships. But a familiar dynamic is one person pursuing connection while the other withdraws from it.</Body>
          <Body>The person pursuing may spend enormous energy trying to get their partner to show up consistently, handle conflict and take responsibility. Those requests may be entirely reasonable. The avoidant partner still has responsibility for their behaviour.</Body>
          <Hand v={['sm']}>The inquiry is what the pursuing person can do on their own side of the street.</Hand>
          <Body>What happens inside them when their partner pulls away? What keeps them trying to earn a response from someone who repeatedly refuses it? What do they feel when they consider that this relationship may not be able to offer what they need?</Body>
          <Body>Those questions can bring us into contact with an attachment wound. They can also bring us into contact with grief. It may feel more familiar to keep trying to fix the partner than to acknowledge the possibility that the relationship is unacceptable as it stands.</Body>
          <Body>As the person develops more self-compassion and a clearer relationship with their emotional needs, the dynamic may lose some of its hold. They may become less willing to pursue, persuade or accommodate at their own expense. They may recognise, with considerable sadness, that they cannot keep participating in this relationship.</Body>
          <Hand v={['sm']}>Their partner has not necessarily changed. Their own relationship with themselves has.</Hand>
          <Body>Taking care of your side of the street can therefore lead to a boundary, a different conversation or a decision to leave. It does not mean becoming sufficiently calm to tolerate whatever someone else does. Nor does it mean accepting responsibility for another person’s mistreatment. Their side of the street remains theirs.</Body>
        </div>
        <ZoomArt name="street-poster" alt={STREET_ALT} label="Taking care of your side of the street" className="street-poster" />
      </div>
      <p className="ideas-note safe-caption">My agency does not depend on their willingness to change.</p>
    </Part>
  );
}

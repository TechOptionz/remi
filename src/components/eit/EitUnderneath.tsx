import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { ROOTS } from '@/content/eit';

const TREE_ALT = 'You’re not overreacting. You’re protecting an old wound. A tree at sunset. What people see, in the branches: defensiveness, anger, withdrawal, people-pleasing, chasing. What the pattern is protecting, in the roots: fear, hurt, loneliness, grief, shame. The reaction is the branch. The unintegrated emotion is the root. Stop fighting the behaviour. Integrate what it has been protecting.';

// WHAT LIES BENEATH EMOTIONAL AVOIDANCE AND PROTECTIVE BEHAVIOUR? — outward, inward, then down; grief and shame at the roots; the EIT tree
export default function EitUnderneath() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>What lies beneath emotional avoidance and protective behaviour?</H3>
      <div className="dsr-grid">
        <div className="triad-prose">
          <Body>Once the client can remain compassionately connected to the original presentation, we ask what is underneath it. If the starting point was frustration, sadness may appear. If sadness cannot yet be met with compassion, we move outward again until compassion becomes available, then carry it back inward. Under sadness there may be loneliness. Under loneliness, grief. The same movement repeats: outward, inward, then down.</Body>
          <Body>The sequence is not imposed as a formula, and the client does not need to produce psychologically impressive answers. The process may begin with an emotion, a thought, a physical tightness, a blank space or an amnesic part that protects through forgetting. The practitioner follows what the system offers and continues to make compassion safer than judgement.</Body>
          <Body>In my work, grief and shame consistently appear near the roots. Anger is not a primary emotion to me. It is a secondary emotion, often a more powerful way of expelling or defending against hurt and fear. Grief is woven through the human experience: grief for the childhood we did not have, what we lost, what we needed and never received, what we hoped a relationship might become, or the existential grief of being alive and knowing that everything changes.</Body>
          <Body>Shame sits deeper still, particularly in people who are highly dissociative, defensive or dismissive-avoidant. This is not merely shame about something they did. It is shame organised around who they believe they are not: not lovable enough, not worthy enough, not strong enough, not capable of belonging as they are. I have not found an exception to this in the clients for whom EIT is most useful.</Body>
          <ol className="eit-roots" aria-label="From the branch down to the root">
            {ROOTS.map(r => <li key={r}>{r}</li>)}
          </ol>
        </div>
        <div className="eit-tree-wrap">
          <ZoomArt name="eit-tree" alt={TREE_ALT} label="The EIT tree" className="street-poster eit-tree" />
          <p className="dsr-caption eit-tree-cap">The goal is not to cut off the branches. The goal is to become capable of being with what is underneath them.</p>
        </div>
      </div>
    </Part>
  );
}

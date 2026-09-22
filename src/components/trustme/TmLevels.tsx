import { Body, Hand, Part } from '@/components/ideas/ui';
import { LEVELS } from '@/content/trustme';

/** Heading for one level: its number, name, what it is about and its I / we focus. */
function LevelHead({ num }: { num: number }) {
  const l = LEVELS[num - 1];
  return (
    <h3 className="ideas-h3 ideas-h3--left ideas-h3--rule tm-level-h" id={`level-${l.name.toLowerCase()}`}>
      <span className="tm-level-n" aria-hidden="true">{String(l.num).padStart(2, '0')}</span>
      {l.name}
      <span className="tm-level-meta"><em>{l.tag}</em> · <b className={`tm-focus tm-focus--${l.focus.toLowerCase()}`}>{l.focus} focused</b></span>
    </h3>
  );
}

// THE SEVEN LEVELS: TRUST → EVOLUTION
export default function TmLevels() {
  return (
    <Part n={3}>
      <LevelHead num={1} />
      <div className="triad-prose">
        <Body>Trust is the first individual level. Its question is whether I can survive and whether I have enough agency to affect what happens next. In its unresourceful form, the person experiences themselves as being at effect. The world feels confusing, other people hold the answers, and dependency becomes passive. An external locus of control dominates because life appears to happen to them.</Body>
        <Body>Resourceful Trust may still involve severe difficulty. Someone may have lost their home, entered an unfamiliar field or found themselves at the bottom of an enormous learning curve. The difference is that they seek support consciously. They know they need answers and resources, and they participate in obtaining them. The problem to solve is not dependence itself. It is the recovery of enough safety and agency to begin engaging with other people and the world.</Body>
      </div>

      <LevelHead num={2} />
      <div className="triad-prose">
        <Body>Relatability is the first collective level. Safety is found in belonging to the family, tribe, team or culture. Its unresourceful expression is fitting in at the price of the self. People please, accommodate, wait to be told what is acceptable and suppress personal advocacy. They may agree in the room and resist afterwards because direct disagreement feels too dangerous.</Body>
        <Body>Resourceful Relatability gives us genuine collaboration. We can rely on one another, honour shared history and experience the deep relief of belonging where we actually want to belong. The developmental problem emerges when belonging requires disappearance. To progress, the person must risk differentiation and discover what is true for them, even when their truth is not rewarded by the group.</Body>
      </div>

      <LevelHead num={3} />
      <div className="triad-prose">
        <Body>Uniqueness is the power level. It breaks the spell of conformity and says: this is what I stand for, this is what I prefer, and it is acceptable that it matters to me. It can be selfish, aggressive and deeply mistrustful. At its unresourceful edge, it becomes my way or the highway, with people treated as obstacles or instruments. Results may arrive quickly, but they are rarely sustainable because the leader cannot build anything that survives their force of personality.</Body>
        <Body>And yet Uniqueness is necessary. A person trapped in accommodation cannot collaborate their way into authenticity. Breaking from a family system, an inherited identity or a culture that punishes difference takes energy. Resourceful Uniqueness provides healthy ego, anger, differentiation and commitment. It energises goals. Its next problem appears when freedom without repeatability becomes chaos.</Body>
      </div>

      <LevelHead num={4} />
      <div className="triad-prose">
        <Body>Systems is the return to the collective through order, rules and continuity. It asks how learning can be preserved, how behaviour can become reliable and how a result can be repeated without one heroic person holding the entire operation together. At its best, Systems creates benchmarks, standards, documentation and fair expectations. We can model excellence that already exists instead of solving the same problem over and over.</Body>
        <Body>Its unresourceful expression mistakes the system for the purpose. Correctness becomes more important than usefulness. Anything outside the box is judged, data is treated as the only form of knowing, and bureaucracy begins protecting itself. The developmental task is to retain what creates reliability while recovering initiative, experimentation and the capacity to pursue an outcome rather than merely obey a process.</Body>
      </div>

      <LevelHead num={5} />
      <div className="triad-prose">
        <Body>Tenacity is entrepreneurial. It draws on the power of Uniqueness and the reliability of Systems, then turns them toward achievement. It is pragmatic, productive and willing to bring along people who are heading in the same direction. Resourceful Tenacity creates movement at scale. There is leadership with a purpose, opportunity is recognised, measures matter and things actually happen.</Body>
        <Body>Its shadow is the permanent sense that the next achievement, training, strategy or level of income will finally be enough. The person can become a perpetual student while also over-functioning, forever preparing for the result that might allow them to rest. Tenacity solves the practical problem of getting somewhere. It cannot answer whether the destination has meaning.</Body>
      </div>

      <LevelHead num={6} />
      <div className="triad-prose">
        <Body>Meaning returns to the collective with a wider circle of concern. The person or organisation wants their work to contribute, not merely succeed. Resourceful Meaning becomes possible when the capacities beneath it have been integrated. There is enough agency to act, enough differentiation to withstand disagreement, enough structure to produce reliably and enough enterprise to sustain the work. Financial sustainability matters because a contribution that cannot survive remains an intention.</Body>
        <Body>This is where I gently challenge people who say they are here to make a difference while avoiding the difficult levels required to build anything. Meaning can become an identity that feels virtuous without producing meaningful action. Its unresourceful expression demands that everyone agree about how goodness should look, then judges anyone who will not fit the policy of the group. The person who has not integrated Uniqueness may call self-abandonment compassion. The person who has not integrated Systems may call unreliability freedom. The work is to make meaning real.</Body>
      </div>

      <LevelHead num={7} />
      <div className="triad-prose">
        <Body>Evolution begins a different kind of development. Graves described the movement beyond the first six levels as a substantial change in meaning. In the T.R.U.S.T.M.E. model, Evolution is where the previous capacities become consciously available. The person can use Trust when they genuinely need support, Relatability when belonging matters, Uniqueness when a boundary must be drawn, Systems when reliability is needed, Tenacity when a result must be produced and Meaning when contribution should lead.</Body>
        <Body>This is functional flow. Leadership is not a status to protect. The best person for the situation can lead, and someone operating resourcefully at Evolution does not need that person to be them. They can move between internal reflection, observable behaviour, group culture and organisational systems without insisting that one perspective explains everything.</Body>
        <Body>Evolution also has an unresourceful expression. Complexity can become a hiding place. The person may intellectualise, overanalyse, trust the idea of evolution so completely that they stop intervening, or use their knowledge of the levels to excuse behaviour they should address.</Body>
        <Hand>Access to a map is not evidence that we have travelled the territory.</Hand>
      </div>
    </Part>
  );
}

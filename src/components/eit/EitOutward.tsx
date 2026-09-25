import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { MOVEMENTS, OUTWARD_LAYERS } from '@/content/eit';

/** The outward movement drawn as widening layers, then the three movements EIT repeats. */
function Layers() {
  return (
    <figure className="eit-layers" aria-label="Moving outward until compassion becomes available">
      <ol className="eit-rings">
        {OUTWARD_LAYERS.map((l, i) => (
          <li key={l.ask} className={l.answer === 'Yes.' ? 'eit-ring eit-ring--yes' : 'eit-ring'}>
            <span className="eit-ring-n">Layer {i + 1}</span>
            <p className="eit-ring-q">“{l.ask}”</p>
            <p className="eit-ring-a">{l.answer}</p>
          </li>
        ))}
      </ol>
      <figcaption className="ladder-cap">Moving outward until compassion becomes available.</figcaption>
    </figure>
  );
}

// HOW EMOTION INTEGRATION TECHNIQUE BEGINS + WHY MOVING AWAY FROM A FEELING CAN BE THE WAY BACK TO IT
export default function EitOutward() {
  return (
    <Part n={3}>
      <H3 v={['left', 'rule']}>How Emotion Integration Technique begins</H3>
      <div className="dsr-grid">
        <div className="triad-prose">
          <Body>EIT begins with whatever is actually true for the person. The starting point might be frustration, numbness, tightness, annoyance, blankness, forgetting or simply, “I don’t know.” The client does not have to name the emotion correctly. In fact, insisting on a label can strengthen the very intellectualisation we are trying to soften.</Body>
          <Hand v={['sm']}>A sensation is enough. The absence of sensation is enough. Not knowing is enough.</Hand>
          <Body>I might ask, “Can you feel compassion for the part of you that feels frustrated?” The answer may be no. Good. That is honest, and honesty gives us somewhere real to begin. “Can you feel compassion for the part of you that cannot feel compassion for the frustration?” Again, the answer may be no. Then we go another layer out. “Can you feel compassion for the part that cannot feel compassion for the part that cannot feel compassion?”</Body>
          <Body>It sounds almost absurd when written down, but experientially something important is happening. Instead of asking the client to overcome dissociation, we are allowing the system to create as much distance as it needs. Every step outward makes the original experience less threatening. We keep moving until we reach a part the client can meet with genuine compassion.</Body>
          <Body>Most people need about three layers. The furthest I have gone is five. There is no prize for reaching compassion quickly. The movement outward is not avoidance of the intervention. It is the intervention respecting the person’s existing route to safety.</Body>
        </div>
        <Layers />
      </div>

      <H3 v={['left', 'rule']}>Why moving away from a feeling can be the way back to it</H3>
      <div className="triad-prose">
        <Body>Once compassion becomes available, we reverse direction. I ask the client to bring that compassion one step inward to the part that could not access it before. When the distance has been sufficient and the compassion is genuine, they can. Then we bring it through the next layer, and the next, until the client can feel compassion for the original frustration, numbness, dissociation or bodily sensation.</Body>
        <Body>This is often a completely new experience. Highly dissociative clients are accustomed to judging their dissociation. They have been told, explicitly or implicitly, that they are cut off, too defended, emotionally unavailable, broken or difficult to reach. They may have spent years trying to fix this part of themselves. EIT allows them to encounter the dissociation as something worthy of compassion.</Body>
        <Hand v={['sm']}>What has always been treated as the problem is finally understood as protection.</Hand>
        <Body>That softens the entire frame. There is often rigidity in dismissive-avoidant and highly intellectual defences, a constant sorting of experience into right and wrong, sensible and irrational, acceptable and unacceptable. This narrow lens is not evidence that the person lacks feeling. It is often evidence that feeling became unsafe enough to require a highly controlled relationship with life. Compassion introduces another possibility. The system no longer has to choose between control and overwhelm.</Body>
      </div>
      <ol className="eit-moves" aria-label="The three movements">
        {MOVEMENTS.map(m => <li key={m.title}><h4>{m.title}</h4><p>{m.text}</p></li>)}
      </ol>
    </Part>
  );
}

import { Body, H3, Hand, Part } from '@/components/ideas/ui';
import { MEANING_LADDER } from '@/content/dsr';

/** Moving upward through a hierarchy of meaning, drawn as a rising ladder. */
function MeaningLadder() {
  return (
    <figure className="ladder" aria-label="Moving upward through a hierarchy of meaning">
      <ol className="ladder-steps">
        {MEANING_LADDER.map((s, i) => <li key={s} style={{ '--i': i } as React.CSSProperties}>{s}</li>)}
      </ol>
      <figcaption className="ladder-cap">A learning rises until it reaches a felt sense that is true for the person.</figcaption>
    </figure>
  );
}

// WHAT CHANGES WHEN AN OLD EMOTIONAL PATTERN SHIFTS? + WHY ISN’T UNDERSTANDING THE PATTERN ALWAYS ENOUGH?
export default function DsrChange() {
  return (
    <Part n={4}>
      <H3 v={['left', 'rule']}>What changes when an old emotional pattern shifts?</H3>
      <div className="triad-prose">
        <Body>At the centre of DSR™ is work with a negative emotion or limiting belief attached to a past event. This does not mean deleting memory. It does not mean deciding that harm was acceptable, pretending the past was positive, or becoming incapable of feeling fear, anger or sadness. Emotions belong to us. They carry information and help us respond to life. The difficulty is the historical charge that arrives before the present moment has been accurately assessed.</Body>
        <Body>When the process works, the meaning attached to the event may lose its force, become flat, become unavailable or simply become unnecessary. The memory may remain, but it no longer makes the same demand. The person can look towards it without the old physiological and emotional pull. The event stops being an active instruction about who they are, what relationships mean, or what the future permits.</Body>
        <Hand v={['sm']}>This gives the person a fresh start with the emotion.</Hand>
        <Body>Fear can return to being fear about something genuinely threatening now. Anger can become a boundary signal rather than the accumulated force of every earlier violation. Sadness can belong to an actual loss without opening the whole archive. The emotional capacity remains. The historical chain no longer has to run the present.</Body>
        <Body>The shift also changes time in the other direction. If the past no longer carries the same meaning, the person’s current experience of themselves can change. When the present self changes, the future looks different too. Options that were previously invisible can become imaginable. A person who no longer experiences themselves as fundamentally unsafe, unworthy or powerless does not have to force confidence as a performance. Different choices begin to make sense from the inside.</Body>
      </div>

      <H3 v={['left', 'rule']}>Why isn’t understanding the pattern always enough to change it?</H3>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>I believe meaningful change often begins below the level of conscious reasoning. Willpower is useful for action, but it is a poor instrument for ordering an old hurt to stop hurting. We cannot reason ourselves out of every protective response because many of those responses were formed before we had sophisticated reasoning. They live in emotional learning, bodily anticipation, imagery and meaning.</Body>
          <Body>For that reason, DSR™ uses light Milton Ericksonian hypnosis and precise language to engage the person’s imaginative and symbolic capacities. Hypnosis here is not a loss of agency. It is a focused state in which ordinary analytical interference softens enough for deeper associations to become available. The client is not made unconscious. They are invited into a different quality of attention.</Body>
          <Body>The language matters. The timing matters. The practitioner must recognise when to invite greater distance, when to allow association, when a protective part needs to be heard, and when the person has reached an insight that sounds positive but has not yet arrived at its highest intent.</Body>
          <Body>DSR™ uses a deliberate process of moving upward through a hierarchy of meaning. A learning may begin as <em>I can protect myself</em>, then become <em>I can trust myself</em>, <em>I belong to myself</em>, <em>I am whole</em>, or <em>I am love</em>. The words cannot be imposed. The practitioner listens for the point at which the person reaches a felt sense of self-recognition or belonging that is true for them.</Body>
        </div>
        <MeaningLadder />
      </div>
    </Part>
  );
}

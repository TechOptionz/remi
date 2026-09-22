import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';

const EMOTIONS_ALT = 'Negative emotions: the emotional families we release through Deep State Repatterning. Shame: embarrassed, humiliated, mortified, disgraced, exposed, shy, self-conscious, inhibited, uncomfortable. Anger: fury, rage, anger, frustrated, indignant, resentful, cross, annoyed, irritated, exasperated. Sadness: grief, desolate, misery, sorrow, loss, sadness, upset, lonely, down, blue. Fear: terror, petrified, panic, afraid, fear, anxiety, apprehensive, stressed, nervous, timid. Guilt: ashamed, remorse, guilt, sorry, blame, regret, distressed, worried, concerned, troubled. Powerless: despair, helpless, powerless, depressed, self-pity, bored, apathy, jealous, weak, incapable. Hurt: hate, hurt, abandoned, rejected, offended, disappointed, disillusioned, let down, neglected, vulnerable. Happy: Pollyanna, people pleasing, martyr, rescuer, denial, commitment-phobic, unreliable, toxic positivity. Each family describes a continuum of emotional intensity, expression and protection.';

// ASSOCIATION AND DISSOCIATION ARE BOTH NECESSARY — collaborative by design, then the table of emotions
export default function DsrAssociation() {
  return (
    <Part n={3}>
      <H3 v={['left', 'rule']}>Association and dissociation are both necessary</H3>
      <div className="dsr-grid">
        <div className="triad-prose">
          <Body>People sometimes fear that a deep process means surrendering control. Deep State Repatterning™ is collaborative from beginning to end. I work with the client, never at them. They remain responsive, they make the discoveries, and the symbols and meanings come from their own mind. I routinely record the intervention and give the recording to the client. Listening afterwards often makes something beautifully clear:</Body>
          <Hand v={['sm']}>The practitioner did not insert a revelation. The client found it.</Hand>
          <Body>The process depends on moving intelligently between association and dissociation.</Body>
          <Box className="dsr-pair">
            <div><h4 className="dsr-pair-h dsr-pair-h--rust">Association</h4><p>Allows a person to experience something from within it, looking through their own eyes and noticing the emotion, meaning and bodily response.</p></div>
            <div><h4 className="dsr-pair-h dsr-pair-h--olive">Dissociation</h4><p>Creates distance. The person may imagine floating above the timeline, seeing the event from far enough away to remain safe and resourced.</p></div>
          </Box>
          <Body>Too much association can flood the system. Permanent dissociation leaves the experience untouched. The movement between the two creates enough safety for the old pattern to become available without requiring the person to be swallowed by it again.</Body>
          <Body>That distinction matters, particularly when the original experience involved abuse, abandonment or profound shame. The purpose is not to make somebody relive what happened. We are not looking for emotional theatre or intensity as proof that something important is occurring. We are creating the conditions in which the person can approach an experience, gain distance when needed, discover what was previously unavailable, and return with a different relationship to it.</Body>
        </div>
        <ZoomArt name="dsr-emotions" alt={EMOTIONS_ALT} label="The table of emotions" className="street-poster dsr-emotions" />
      </div>
    </Part>
  );
}

import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';
import { ARMS, STAND_LINES } from '@/content/triad';

// HOW CAN I BEGIN BUILDING SELF-ESTEEM WITH THE TRIAD? — one box of questions per arm, the pace, then the pathway out of self-abandonment
export default function TriadBegin() {
  return (
    <Part n={6}>
      <H3 v={['left', 'rule']}>How can I begin building self-esteem with the Triad?</H3>
      <div className="triad-prose">
        <Body>The starting point is not a score, a diagnosis or another reason to judge yourself. It is gentle, honest observation.</Body>
        <Body>Begin by learning what each arm means and noticing how it currently operates in your life. These questions are places to start, not a test you have to pass.</Body>
      </div>
      <div className="explore-grid">
        {ARMS.map(a => (
          <Box as="article" className={`explore explore--${a.tone}`} key={a.id}>
            <h4 className="explore-h">Explore your {a.name.toLowerCase()}</h4>
            <ul className="arm-list">{a.explore.map(q => <li key={q}>{q}</li>)}</ul>
          </Box>
        ))}
      </div>
      <div className="triad-prose">
        <Body>There is no perfect sequence. You might begin with the arm that feels safest, or with the one creating the most difficulty. Work in one area will often reveal what is happening in the others.</Body>
        <Hand v={['sm']}>The pace matters.</Hand>
        <Body>Awareness needs to be introduced at a rate the person can genuinely integrate. Insight delivered without regard for emotional and cognitive capacity can overwhelm the very system we are trying to help. Sustainable change involves calibration, allowing each realisation to become usable before demanding the next one.</Body>
        <Body>The purpose is not to expose every gap at once. It is to develop enough awareness, safety and capacity that a healthier relationship with the self can take root.</Body>
      </div>

      <H3 v={['left', 'rule']}>A pathway out of self-abandonment</H3>
      <div className="triad-prose">
        <Body>The Self-Esteem Triad gives us a practical way to understand something that can otherwise feel abstract.</Body>
        <Body>Self-esteem is built in the moments when we notice what we need and respond rather than dismissing it. It grows when we let sadness belong, when we listen to anger without allowing it to run the entire show, and when we refuse to trade our identity for temporary approval.</Body>
        <Body>It grows when we recognise that another person’s feelings are real without automatically making them our fault. When we allow ourselves to be known. When we ask directly. When we receive care. When we remain present through discomfort. When we stop demanding that confidence carry the weight of an undeveloped relationship with ourselves.</Body>
        <Body>Over time, these moments become an internal foundation.</Body>
        <Body>We become less dependent on performance to prove our worth. We become more capable of intimacy because connection no longer requires disappearance. We become more emotionally available because we are no longer at war with our own internal experience.</Body>
        <Body>We become differentiated, authentic and able to say, with increasing steadiness:</Body>
      </div>
      <p className="triad-iam triad-iam--stand">{STAND_LINES.map(l => <span key={l}>{l}</span>)}</p>
      <Hand>That is the work of the Self-Esteem Triad.</Hand>
    </Part>
  );
}

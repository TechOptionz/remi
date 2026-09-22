import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';
import { INQUIRY } from '@/content/safe';

const PATH_ALT = 'From recognising protection to finding choice. Four steps on a returning loop: notice the familiar focus; become curious about what it protects; meet the underlying experience with support; discover what choice is available. The support step connects to parts work, EIT, the Self-Esteem Triad, emotional needs, emotions, boundaries and Deep State Repatterning. At the pace of the person’s capacity.';

// AN IDENTIFICATION MODEL, FOLLOWED BY COMPASSIONATE INQUIRY — the five questions, the approaches, the path diagram
export default function SafeInquiry() {
  return (
    <Part n={6}>
      <H3 v={['left', 'rule']}>An identification model, followed by compassionate inquiry</H3>
      <div className="triad-prose">
        <Body>Safe Problems, Risky Truths helps us recognise where we may be directing our attention and what we may be protecting. It gives us a place to begin. The work that follows depends on the person and what emerges.</Body>
        <Body>I might invite someone to consider:</Body>
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{INQUIRY.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>These questions are invitations. They do not come with an answer someone is supposed to produce. If a person cannot yet identify what they are protecting, we can respect that. If the inquiry brings them close to overwhelm, we need to notice and respond to their capacity.</Body>
        <Body>I use different approaches within this work, including IFS-informed parts work, Emotional Integration Technique and the Self-Esteem Triad. Each offers a way of developing the relationship with what has come into view. We might become curious about the part that feels it must keep everyone happy. We might gently explore the emotion beneath an urge to control. We might discover an emotional need the person has scarcely permitted themselves to recognise, or a boundary they have never felt entitled to hold.</Body>
        <Hand v={['sm']}>The pace matters throughout.</Hand>
        <Body>A person can have a powerful intellectual understanding of their pattern and still need time, support and repeated experience before something shifts emotionally. We cannot assume that because they can describe it, they are ready to be without it.</Body>
      </div>
      <ZoomArt name="choice-path" alt={PATH_ALT} label="From recognising protection to finding choice" className="triad-diagram choice-path" />
    </Part>
  );
}

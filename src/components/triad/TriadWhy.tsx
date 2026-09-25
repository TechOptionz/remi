import { Body, H3, Hand, Part } from '@/components/ideas/ui';

// WHAT IS THE SELF-ESTEEM TRIAD? — the model in brief, then why I created it: willpower versus foundations (the diagram is the page's hero illustration)
export default function TriadWhy() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>What is the Self-Esteem Triad?</H3>
      <div className="triad-prose">
        <Body>The Self-Esteem Triad is a mental model I created to understand the foundations of our relationship with ourselves. Its three interdependent capacities are <strong>needs</strong>, <strong>boundaries</strong> and <strong>emotions</strong>. At the centre is the felt experience of being <strong>worthy, lovable and enough</strong>. Each capacity strengthens and protects the others. If one is missing, we often try to compensate in ways that make sense at the time but cost us something later.</Body>
      </div>
      <ul className="triad-three" aria-label="The three capacities">
        <li><a href="#needs">Needs</a></li>
        <li><a href="#boundaries">Boundaries</a></li>
        <li><a href="#emotions">Emotions</a></li>
      </ul>
      <div className="triad-prose">
        <Body>I created the model because I kept seeing people trying to create change through willpower.</Body>
        <Body>They knew what they were supposed to do. They had read the books, listened to the podcasts and understood their patterns intellectually. They made resolutions, created plans and tried to discipline themselves into becoming healthier, happier or more successful.</Body>
        <Hand v={['sm']}>Then the same patterns returned.</Hand>
        <Body>They shut down when emotion entered the room. They agreed to things they did not want. They stayed silent until resentment took over. They pursued achievement, purpose or personal growth while remaining disconnected from their most basic needs. They tried to become more confident without creating the internal conditions that would allow them to feel secure in themselves.</Body>
        <Body>Their difficulty was rarely a lack of information or desire. They were trying to build change on foundations that had never been properly developed.</Body>
        <Body>Willpower can force a behaviour for a while. It cannot give you a relationship with your sadness. It cannot teach you what safety feels like. It cannot show you where another person’s responsibility ends and yours begins. It cannot make all of you feel welcome inside your own life. For that, we need to understand how needs, boundaries and emotions actually operate together.</Body>
      </div>
    </Part>
  );
}

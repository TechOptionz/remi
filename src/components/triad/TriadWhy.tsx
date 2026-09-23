import { Body, H3, Hand, Part, Star } from '@/components/ideas/ui';

// WHY I CREATED THE MODEL — willpower versus foundations (the diagram is the page's hero illustration)
export default function TriadWhy() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>Why I created the model</H3>
      <div className="triad-prose">
        <Body>I kept seeing people trying to create change through willpower.</Body>
        <Body>They knew what they were supposed to do. They had read the books, listened to the podcasts and understood their patterns intellectually. They made resolutions, created plans and tried to discipline themselves into becoming healthier, happier or more successful.</Body>
        <Hand v={['sm']}>Then the same patterns returned.</Hand>
        <Body>They shut down when emotion entered the room. They agreed to things they did not want. They stayed silent until resentment took over. They pursued achievement, purpose or personal growth while remaining disconnected from their most basic needs. They tried to become more confident without creating the internal conditions that would allow them to feel secure in themselves.</Body>
        <Body>Their difficulty was rarely a lack of information or desire. They were trying to build change on foundations that had never been properly developed.</Body>
        <Body>Willpower can force a behaviour for a while. It cannot give you a relationship with your sadness. It cannot teach you what safety feels like. It cannot show you where another person’s responsibility ends and yours begins. It cannot make all of you feel welcome inside your own life.</Body>
        <Body>The Self-Esteem Triad is a mental model for understanding those foundations. It brings together three capacities that shape our relationship with ourselves:</Body>
      </div>
      <ul className="triad-three" aria-label="The three capacities">
        <li><a href="#needs">Needs</a></li>
        <li><a href="#boundaries">Boundaries</a></li>
        <li><a href="#emotions">Emotions</a></li>
      </ul>
      <Hand v={['center', 'tight']}><Star /> At the centre is the lived experience of being worthy, lovable and enough. <Star /></Hand>
    </Part>
  );
}

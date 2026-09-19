import { LEADERSHIP_TOOLS, TOOLKIT } from '@/content/ideas';
import { Art, Body, Box, Btn, H3, Hand, HeadNote, NextLink, Part, PartHead, Rust } from './ui';

const QUAD_ALT = 'The Four Quadrants to Leadership. 1 Self leadership — ownership, responsibility, self-awareness, judgement, learning and modelling the standard. 2 Self-management — priorities, benchmarks, follow-through, initiative, systems and sustained delivery. 3 Leadership of others — vision, trust, emotional intelligence, feedback, possibility and developing capability. 4 Management of others — clear outcomes, reporting, training, performance, appropriate direction and accountability.';

// PART SEVEN · THE FOUR QUADRANTS — the model, then the tools that make it practical (content/ideas.ts)
export default function Part7Quadrants() {
  return (
    <Part n={7}>
      <PartHead n={7} rule title="Leadership is not one job." aside={<Art name="p7-star" />}>
        <Body>Before we can lead and manage other people well, we have to be able to lead and manage ourselves. They are different capabilities, and confusing them creates a great deal of noise.</Body>
      </PartHead>
      <H3 v={['left']}>The Four Quadrants to Leadership</H3>
      <Hand v={['sm']}>Developed and used by Remi Pearson.</Hand>
      <div className="quad-grid">
        <Art name="p7-quad" alt={QUAD_ALT} />
        <HeadNote art="p7-arrow" inline><Hand v={['underline']}>Ninety per cent of effective leadership begins with the ability to lead yourself.</Hand></HeadNote>
      </div>
      <H3 v={['left', 'rule']}>The tools that make it practical</H3>
      <div className="tools">
        {LEADERSHIP_TOOLS.map(t => (
          <article className="tool" key={t.title}><h4>{t.title}</h4><p>{t.text}</p><Hand v={['sm']}>{t.note}</Hand></article>
        ))}
      </div>
      <Box className="toolkit">
        <p className="toolkit-label">Also in the toolkit</p>
        <div className="toolkit-cols">
          {TOOLKIT.map(t => <div key={t.title}><h4>{t.title}</h4><p>{t.text}</p></div>)}
        </div>
      </Box>
      <Hand v={['center']}>Truth before certainty. Standards before slogans. Capability before rescue.</Hand>
      <Btn href="#part-8" v={['dark']}>Continue to influence &amp; building beyond you</Btn>
      <NextLink href="#part-8">Continue to <Rust>influence &amp; enterprise</Rust></NextLink>
    </Part>
  );
}

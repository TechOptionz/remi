import { LEADERSHIP_TOOLS, TOOLKIT } from '@/content/ideas';
import { F90_PAGE_HREF, PHASES } from '@/content/f90';
import { TIMELINE_ALT } from '@/components/f90/F90Intro';
import { Art, Body, Box, Btn, H3, Hand, HeadNote, NextLink, Part, PartHead, Rust } from './ui';
import ZoomArt from './ZoomArt';

// PART SEVEN · YOUR FIRST 90 DAYS AS A LEADER — the model (full chapter: /ideas-models/first-90-days), then the tools that make it practical (content/ideas.ts)
export default function Part7FirstDays() {
  return (
    <Part n={7}>
      <PartHead n={7} rule title="Observe before you intervene. Understand before you decide." aside={<Art name="p7-star" />}>
        <Body>The first 90 days should be treated as a disciplined inquiry. Your work is to observe, collate, synthesise, understand and assess before you begin making substantial changes. Leadership begins with seeing what is actually there, including what nobody thought to tell you.</Body>
      </PartHead>
      <H3 v={['left']}>Your First 90 Days as a Leader</H3>
      <Hand v={['sm']}>Developed by Remi Pearson · built on the Critical Alignment Model.</Hand>
      <ZoomArt name="f90-timeline" alt={TIMELINE_ALT} label="Your First 90 Days as a Leader" className="ideas-art--center ideas-bleed f90-art" />
      <ol className="f90-phases">
        {PHASES.map(p => (
          <li key={p.num} className={`f90-phase-sm f90-phase-sm--${p.num}`}>
            <span className="f90-phase-days">{p.days}</span>
            <h4>{p.title}</h4>
            <p>{p.verbs.join(' · ')}</p>
          </li>
        ))}
      </ol>
      <div className="f90-part-actions">
        <HeadNote art="p5-arrow" inline><Hand v={['underline']}>Do not confuse arriving with authority with arriving in possession of the truth.</Hand></HeadNote>
        <Btn href={F90_PAGE_HREF} v={['sm']}>Read the full guide</Btn>
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

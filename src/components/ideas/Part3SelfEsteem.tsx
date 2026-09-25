import { EMOTIONAL_NEEDS } from '@/content/ideas';
import { TRIAD_PAGE_HREF } from '@/content/triad';
import { SAFE_PAGE_HREF } from '@/content/safe';
import { Art, Body, Box, Btn, H3, Hand, Img, Part, PartHead, Star } from './ui';
import ZoomArt from './ZoomArt';

const TRIAD_ALT = 'The Self-Esteem Triad. Needs: know what matters to you; recognise, express and take responsibility for what you need. Boundaries: the line at which you can love someone and still love and take care of yourself; boundaries clarify what is yours, what is not and what behaviour you will accept. Emotions: vital information about what needs attention, protection, expression or completion; speak for your emotions, not from them. At the centre: worthy, lovable, enough.';

/** The fifteen needs in three columns, numbered continuously (EMOTIONAL_NEEDS in content/ideas.ts). */
function EmotionalNeeds() {
  // First number of each column: 1, 6, 11
  const starts = EMOTIONAL_NEEDS.map((_, i) => EMOTIONAL_NEEDS.slice(0, i).reduce((n, c) => n + c.needs.length, 1));
  return (
    <Box className="needs">
      <Img name="p3-trees-a" className="needs-trees needs-trees--a" />
      <H3 v={['tight']}>The Fifteen Emotional Needs</H3>
      <Hand v={['center', 'sm']}>The emotional-needs map created by Remi Pearson.</Hand>
      <div className="needs-cols">
        {EMOTIONAL_NEEDS.map((col, i) => {
          const from = starts[i];
          return (
            <div key={col.title}>
              <h4 className={`needs-h needs-h--${col.tone}`}>{col.title}</h4>
              <ol className="needs-list" start={from === 1 ? undefined : from}>{col.needs.map(n => <li key={n}>{n}</li>)}</ol>
            </div>
          );
        })}
      </div>
      <Hand v={['center', 'sm']} className="needs-foot"><Star /> Emotions help reveal which need is asking for our attention.</Hand>
      <Img name="p3-trees-b" className="needs-trees needs-trees--b" />
    </Box>
  );
}

function SafeVersusRisky() {
  return (
    <div className="safe-grid">
      <Box className="safe-box">
        <div className="safe-item"><Img name="p3-wrench" /><div><h4 className="safe-h safe-h--olive">Safe problem</h4><p>Fix it out there.</p></div></div>
        <div className="safe-item"><Img name="p3-heart" /><div><h4 className="safe-h safe-h--rust">Risky truth</h4><p>Turn toward what is here.</p><p className="safe-qs">What is coming up for me?<br />What is this asking me to notice?<br />What needs my attention?</p></div></div>
        <Img name="p3-mtn" className="safe-mtn" />
      </Box>
      <Hand className="safe-note"><Star /> The risk is not danger. It is the vulnerability of staying with ourselves.</Hand>
    </div>
  );
}

// PART THREE · SELF-ESTEEM
export default function Part3SelfEsteem() {
  return (
    <Part n={3}>
      <PartHead n={3} title="Self-esteem is something we live." aside={<Art name="p3-scene" />}>
        <Body>It is shaped by whether we know what we need, honour where we end and another person begins, and remain in relationship with our emotional truth.</Body>
      </PartHead>
      <H3>The Self-Esteem Triad</H3>
      <Hand v={['center', 'tight']}>Needs. Boundaries. Emotions.</Hand>
      <ZoomArt name="p3-triad" alt={TRIAD_ALT} label="the Self-Esteem Triad" className="ideas-art--center ideas-bleed triad-art" />
      <Btn href={TRIAD_PAGE_HREF} v={['sm', 'center']}>Read the Self-Esteem Triad in full</Btn>
      <EmotionalNeeds />
      <H3 v={['stars']}><Star /> Safe vs Risky Problems <Star /></H3>
      <SafeVersusRisky />
      <Btn href={SAFE_PAGE_HREF} v={['sm', 'center']}>Read Safe Problems, Risky Truths in full</Btn>
    </Part>
  );
}

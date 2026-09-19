import NewsletterForm from '@/components/shared/NewsletterForm';
import { NEXT_STEPS, PRODUCTS_HREF, RESEARCH } from '@/content/ideas';
import { Art, Body, Box, Btn, H3, Hand, Part, PartHead } from './ui';

// PART NINE · RESEARCH & NEXT STEPS — research cards, credit, where to go next, newsletter and sign-off
export default function Part9Research() {
  return (
    <Part n={9}>
      <PartHead n={9} title="I'll keep following the questions." aside={<Art name="p9-compass" />}>
        <Hand>An idea should be useful enough to live beyond the page.</Hand>
        <Body>I love the process of discovery. But I do not want a clever-sounding model simply because it makes a good diagram. Where research can challenge, strengthen or operationalise an idea, I want it in the room.</Body>
      </PartHead>
      <H3 v={['rules']}><span></span>The Research Thread<span></span></H3>
      <div className="research-cards">
        {RESEARCH.map(r => (
          <Box as="article" className="rcard" key={r.title}>
            <h4>{r.title}</h4>
            {r.paras.map(p => <p key={p}>{p}</p>)}
            <Btn href={PRODUCTS_HREF} v={['sm']}>{r.cta}</Btn>
          </Box>
        ))}
      </div>
      <Box as="p" className="credit-box">Everything on this page was created by Remi Pearson, with intellectual foundations acknowledged where relevant. T.R.U.S.T.M.E. is informed by Spiral Dynamics. The Meta Dynamics Profiler is the measurement application of CAM.</Box>
      <div className="next-grid">
        <img className="next-photo" src="/assets/ideas/p9-photo.webp" alt="Remi Pearson" />
        <div>
          <H3>Where shall we go next?</H3>
          <div className="next-cards">
            {NEXT_STEPS.map(n => (
              <Box as="article" className="ncard" key={n.title}>
                <img src={`/assets/ideas/${n.art}.webp`} alt="" aria-hidden="true" />
                <h4>{n.title}</h4><p>{n.text}</p>
                <Btn href={n.href} v={['sm']}>{n.cta}</Btn>
              </Box>
            ))}
          </div>
        </div>
      </div>
      <div className="panel panel--dark keep-band">
        <H3 className="keep-title">Keep me in the conversation</H3>
        <p className="panel-body">Thoughtful ideas, new Perspectives conversations and the occasional invitation. I'll write when I have something worth saying.</p>
        <NewsletterForm variant="keep" />
      </div>
      <div className="sign-off">
        <Art name="p9-ltl" alt="Let Truth Lead." />
        <Art name="p9-remi" alt="Remi" />
      </div>
    </Part>
  );
}

import Link from 'next/link';
import NewsletterForm from '@/components/shared/NewsletterForm';

// PART NINE · RESEARCH & NEXT STEPS
export default function Part9Research() {
  return (
    <section id="part-9" className="ideas-part" aria-labelledby="p9-h">
      <div className="ideas-head">
        <div>
          <p className="ideas-eyebrow">Ideas &amp; Models · <span className="rust">Part Nine</span></p>
          <h2 id="p9-h" className="ideas-title">I'll keep following the questions.</h2>
          <p className="ideas-hand">An idea should be useful enough to live beyond the page.</p>
          <p className="ideas-body">I love the process of discovery. But I do not want a clever-sounding model simply because it makes a good diagram. Where research can challenge, strengthen or operationalise an idea, I want it in the room.</p>
        </div>
        <img className="ideas-art" src="/assets/ideas/p9-compass.webp" alt="" aria-hidden="true" />
      </div>
      <h3 className="ideas-h3 ideas-h3--rules"><span></span>The Research Thread<span></span></h3>
      <div className="research-cards">
        <article className="hd-box rcard"><h4>Values Alignment Model</h4><p>Created through Remi's Master of Applied Positive Psychology capstone.</p><p>Research-informed by positive psychology, evidence-based coaching, self-concordance, values, goals, ACT and self-regulation.</p><Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm">Read the research <span aria-hidden="true">→</span></Link></article>
        <article className="hd-box rcard"><h4>Organisational Wellbeing</h4><p>An applied study of The Coaching Institute's culture during COVID.</p><p>The work identified authentic leadership and playfulness as important positive practices alongside established organisational-wellbeing research.</p><Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm">Explore the study <span aria-hidden="true">→</span></Link></article>
        <article className="hd-box rcard"><h4>Critical Alignment &amp; the Profiler</h4><p>CAM was challenged, operationalised and translated into the Meta Dynamics Profiling Tool.</p><p>Reliability and factor analysis were used to test the measurement application.</p><Link href="/?interest=Products#contact" className="ideas-btn ideas-btn--sm">See the evidence <span aria-hidden="true">→</span></Link></article>
      </div>
      <p className="hd-box credit-box">Everything on this page was created by Remi Pearson, with intellectual foundations acknowledged where relevant. T.R.U.S.T.M.E. is informed by Spiral Dynamics. The Meta Dynamics Profiler is the measurement application of CAM.</p>
      <div className="next-grid">
        <img className="next-photo" src="/assets/ideas/p9-photo.webp" alt="Remi Pearson" />
        <div>
          <h3 className="ideas-h3">Where shall we go next?</h3>
          <div className="next-cards">
            <article className="hd-box ncard"><img src="/assets/ideas/p9-mic.webp" alt="" aria-hidden="true" /><h4>Watch Perspectives</h4><p>Come for the conversation. Stay for the question.</p><Link href="/#rabbit-holes" className="ideas-btn ideas-btn--sm">Watch or listen <span aria-hidden="true">→</span></Link></article>
            <article className="hd-box ncard"><img src="/assets/ideas/p9-comp.webp" alt="" aria-hidden="true" /><h4>Explore the programs</h4><p>Do something useful with all this.</p><Link href="/#work" className="ideas-btn ideas-btn--sm">See the programs <span aria-hidden="true">→</span></Link></article>
            <article className="hd-box ncard"><img src="/assets/ideas/p9-books.webp" alt="" aria-hidden="true" /><h4>Meet the books</h4><p>Six books. A few questions I still cannot leave alone.</p><Link href="/#work" className="ideas-btn ideas-btn--sm">Meet the books <span aria-hidden="true">→</span></Link></article>
            <article className="hd-box ncard"><img src="/assets/ideas/p9-star.webp" alt="" aria-hidden="true" /><h4>Invite Remi</h4><p>Podcasts, panels, keynotes, books and senior-level facilitation.</p><Link href="/invite-remi" className="ideas-btn ideas-btn--sm">Invite Remi <span aria-hidden="true">→</span></Link></article>
          </div>
        </div>
      </div>
      <div className="panel panel--dark keep-band">
        <h3 className="ideas-h3 keep-title">Keep me in the conversation</h3>
        <p className="panel-body">Thoughtful ideas, new Perspectives conversations and the occasional invitation. I'll write when I have something worth saying.</p>
        <NewsletterForm variant="keep" />
      </div>
      <div className="sign-off">
        <img className="ideas-art" src="/assets/ideas/p9-ltl.webp" alt="Let Truth Lead." />
        <img className="ideas-art" src="/assets/ideas/p9-remi.webp" alt="Remi" />
      </div>
    </section>
  );
}

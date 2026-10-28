// Selling from Stage Fundamentals' sales page, shown at /products/selling-from-stage-fundamentals (see
// app/products/[slug]/page.tsx). Follows the four-part mockup: the dark hero over the audience (part one), "You know
// your subject" and the three videos as photo rows with the dark price band (part two), the eight steps as framed
// boxes on the dark band (part three), Remi's $50M figure, who it is for and what you'll receive, the questions and
// the dark close with the waitlist form (part four). Copy and lists in content/sff-landing.ts; styles
// styles/sff-landing.css (.sff-*).
import Link from 'next/link';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { productHref } from '@/content/products';
import { FAQ, RECEIVE, SFF, SFF_PRICE, STARTING_POINT, STEPS, VIDEOS } from '@/content/sff-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/sff-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="sff-btn">Join the waitlist</a>;
}
const Notify = () => <p className="sff-small">Be notified when we’re taking applications again.</p>;

const pad = (n: number) => String(n).padStart(2, '0');

export default function SffLanding() {
  return (
    <main className="sff">
      {/* PART ONE — the dark hero over the audience */}
      <section className="sff-hero" aria-labelledby="sff-title">
        <div className="sff-hero-copy">
          <nav className="crumbs sff-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{SFF.title}</span>
          </nav>
          <p className="sff-eyebrow">Selling from Stage Fundamentals <span className="sff-with">With Remi Pearson</span></p>
          <h1 id="sff-title" className="sff-title">Know how to make the offer when it’s your turn to speak.</h1>
          <p className="sff-lede">Learn the eight-step pitch structure that helps you connect your teaching to an offer, explain its value and invite your audience to buy.</p>
          <p>A practical introduction for business owners, coaches and consultants presenting through workshops, webinars or live events.</p>
          <p className="sff-meta"><span>Three focused videos</span><span>Self-paced</span><span>{SFF_PRICE}</span></p>
          <div className="sff-buy"><Btn /></div>
          <Notify />
        </div>
        <Img name="sff-hero" alt="A woman in an audience smiling as she listens, her chin resting on her hand" width={603} height={1260} className="sff-hero-photo" eager />
      </section>

      {/* PART TWO — your subject, the three videos */}
      <div className="sff-wrap">
        <section className="sff-section sff-center" aria-labelledby="sff-subject-h">
          <h2 id="sff-subject-h" className="sff-h2 sff-h2--big">You know your subject. Then it’s time to talk about buying.</h2>
          <div className="sff-intro">
            <p>You’ve delivered something useful. People are engaged, asking questions and recognising the value of what you teach. But when you reach the offer, you find yourself rushing, overexplaining or hoping someone will ask how they can work with you.</p>
            <p>Perhaps you keep teaching until there’s barely any time left. Perhaps you mention your program and its price, but struggle to explain why someone should take the next step.</p>
            <p>A pitch becomes easier to prepare when you understand its structure. You know what belongs where, how the offer connects to the presentation and what to say when it’s time to invite action.</p>
          </div>
          <p className="sff-statement">That’s what we’ll cover in Selling from Stage Fundamentals.</p>
          <p className="sff-intro">In three focused videos, I’ll introduce the thinking behind a pitch, walk you through the eight steps and demonstrate how they come together. You can follow along with an offer you already have and start preparing your own version.</p>
        </section>

        <section className="sff-section sff-rule" aria-labelledby="sff-videos-h">
          <p className="sff-label">Inside the program</p>
          <h2 id="sff-videos-h" className="sff-h2 sff-h2--big">Three videos to help you make a clearer, more confident invitation.</h2>
          <ol className="sff-videos">
            {VIDEOS.map((v, i) => (
              <li key={v.name}>
                <Img name={v.image} alt={v.alt} width={628} height={410} className="sff-video-photo" />
                <div className="sff-video-copy">
                  <div className="sff-video-head">
                    <span className="sff-num" aria-hidden="true">{pad(i + 1)}</span>
                    <div><p className="sff-video-label">{v.label}</p><h3>{v.name}</h3></div>
                  </div>
                  {v.text.map(t => <p key={t}>{t}</p>)}
                  <p className="sff-helps"><strong>What this helps you do:</strong> {v.helps}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* PART THREE — the eight steps */}
      <section className="sff-dark" aria-labelledby="sff-steps-h">
        <div className="sff-wrap">
          <p className="sff-label sff-label--light">The eight-step pitch</p>
          <h2 id="sff-steps-h" className="sff-h2 sff-h2--big">The eight steps you’ll be introduced to</h2>
          <ol className="sff-steps">
            {STEPS.map((s, i) => (
              <li key={s.name}>
                <span className="sff-step-n" aria-hidden="true">{pad(i + 1)}</span>
                <div><h3><span className="sr-only">{i + 1}. </span>{s.name}</h3><p>{s.text}</p></div>
              </li>
            ))}
          </ol>
          <p className="sff-steps-foot">You’ll learn the purpose and order of the steps, with enough explanation to begin using them. Bring your own experience and language as you practise.</p>
          <div className="sff-buy sff-center"><Btn /><Notify /></div>
        </div>
      </section>

      {/* PART FOUR — Remi, who it is for, the questions */}
      <div className="sff-wrap">
        <section className="sff-section sff-center" aria-labelledby="sff-remi-h">
          <h2 id="sff-remi-h" className="sff-h2 sff-h2--big">Learn from experience earned in front of the room.</h2>
          <div className="sff-figure">
            <p className="sff-figure-n">$50M+</p>
            <p className="sff-figure-label">I personally generated more than $50 million in sales from stage.</p>
          </div>
          <div className="sff-intro">
            <p>I’m Remi Pearson, founder and former owner of The Coaching Institute. Over twenty-three years, the business generated approximately $200 million in revenue and trained more than 13,000 coaches.</p>
            <p>Selling from Stage Fundamentals introduces the pitch structure I teach from that experience. I’ll help you understand how the pieces fit together, so you can begin applying them to your own offer.</p>
          </div>
          <img className="sff-signature" src="/assets/bm-landing/bm-signature.webp" alt="Remi Pearson" width={585} height={375} loading="lazy" decoding="async" />
        </section>

        <section className="sff-section sff-rule sff-fit" aria-labelledby="sff-fit-h">
          <div>
            <h2 id="sff-fit-h" className="sff-h2">For people with something worthwhile to offer … who want to get better at inviting people into it.</h2>
            <p>This is a useful starting point if you:</p>
            <ul className="sff-ticks">{STARTING_POINT.map(t => <li key={t}>{t}</li>)}</ul>
            <p>The approach applies to webinars, workshops and live stages. You don’t need to be an experienced speaker to follow it.</p>
            <p><strong>This is a focused introduction.</strong> Detailed event planning, a full launch strategy and personal pitch feedback sit beyond its scope. There are no lengthy assignments or workbooks to complete.</p>
          </div>
          <div className="sff-fit-offer">
            <h2 className="sff-h2">A small investment in a skill you can keep using.</h2>
            <p>Your next webinar. A workshop for potential clients. An opportunity to introduce your services to a room of people who could benefit.</p>
            <p>Each is a chance to give your audience a clear way to continue with you. Understanding how to make that invitation gives you something practical to prepare and improve each time.</p>
            <p className="sff-offer-name">Selling from Stage Fundamentals</p>
            <p className="sff-offer-price">{SFF_PRICE}</p>
            <ul className="sff-ticks">{RECEIVE.map(t => <li key={t}>{t}</li>)}</ul>
            <div className="sff-buy"><Btn /></div>
            <Notify />
          </div>
        </section>

        <section className="sff-section sff-rule" aria-labelledby="sff-faq-h">
          <h2 id="sff-faq-h" className="sff-h2 sff-h2--big">A few questions before you join</h2>
          <dl className="sff-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
          <p className="sff-small">Looking for the complete program? <Link href={productHref('selling-from-stage')}>Selling from Stage</Link> explores the wider preparation, design and application in greater depth.</p>
        </section>
      </div>

      <section id="get" className="sff-dark sff-close" aria-labelledby="sff-close-h">
        <div className="sff-wrap sff-center">
          <h2 id="sff-close-h" className="sff-h2 sff-h2--big">Give your next offer the preparation it deserves.</h2>
          <p className="sff-close-text">If you believe in what you do, learn how to explain its value and give people a clear opportunity to work with you.</p>
          <p className="sff-close-text">Start with the eight steps. Hear how they fit together. Then bring your own offer to the conversation.</p>
          <p className="sff-label sff-label--light sff-label--center">Selling from Stage Fundamentals · Three videos</p>
          <p className="sff-close-price">{SFF_PRICE}</p>
          <WaitlistForm product={SFF.title} segment={SFF.segment} prefix="sff" namePlaceholder="First name" thanks="Thank you. You’ll be notified when we’re taking applications again." />
          <Notify />
        </div>
      </section>
    </main>
  );
}

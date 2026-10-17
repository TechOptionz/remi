// Self-Regulation When It Matters' sales page, shown at /products/self-regulation-when-it-matters in place of the
// generic product page (see app/products/[slug]/page.tsx). Follows the three-page mockup: cream sections between
// charcoal bands, serif headings, gold square bullets, a photo beside each video, the workbook and meditation cards, the
// black-and-white note from Remi and the rust closing band. Copy and lists in content/sr-landing.ts; styles
// styles/sr-landing.css (.srl-*); pictures in public/assets/sr-landing/.
import Link from 'next/link';
import NotifyForm from '@/components/products/NotifyForm';
import { FAMILIAR, FAQ, LEARNING, LESSON_IMAGES, LESSONS, SR, TESTIMONIALS } from '@/content/sr-landing';

const INCLUDES = 'Five videos • Workbook • Guided meditation';
const num = (i: number) => String(i + 1).padStart(2, '0');

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/sr-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** "Get the program • AUD $29": the checkout once the product has a `buyHref`, until then the closing band (#get). */
function GetBtn({ dark }: { dark?: boolean }) {
  return <a href={SR.ctaHref} className={`srl-btn${dark ? ' srl-btn--dark' : ''}`}>Get the program • {SR.price}</a>;
}

/** Gold square bullets in two columns: a bold opening sentence (or clause) and what follows it. */
function Squares({ items }: { items: { lead: string; text: string }[] }) {
  return (
    <ul className="srl-squares">
      {items.map(i => <li key={i.lead}><strong>{i.lead}</strong> {i.text}</li>)}
    </ul>
  );
}

export default function SrLanding() {
  return (
    <main className="srl">
      <div className="srl-wrap">
        <nav className="crumbs srl-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{SR.title}</span>
        </nav>

        {/* PAGE 1 — the question beside Remi */}
        <section className="srl-hero" aria-labelledby="srl-title">
          <div className="srl-hero-copy">
            <p className="srl-eyebrow">Self-Regulation When It Matters</p>
            <h1 id="srl-title" className="srl-title">Do you push harder, shut down or disappear when things get difficult?</h1>
            <p>Perhaps you need to settle it right now. You keep explaining, defending yourself or demanding an answer, even as the conversation gets worse. Or you go the other way. Your mind goes blank, you stop responding and you want everyone to leave you alone.</p>
            <p>Afterwards, you’re left with what happened … and a conversation that still needs to be had.</p>
            <p>Self-Regulation When It Matters helps you recognise what happens in your body as intensity builds and practise ways to regain enough steadiness to respond more deliberately.</p>
            <p>Through five videos, a workbook and a guided meditation, you’ll explore what helps when you’re overwhelmed, defensive or struggling to stay present.</p>
            <div className="srl-buy"><GetBtn /></div>
            <p className="srl-fine">{INCLUDES}<br />One payment. Learn and practise at your own pace.</p>
          </div>
          <figure className="srl-hero-fig">
            <img src="/assets/photos/about-hero.webp" alt="Remi Pearson smiling, one arm raised, in a pink jacket" width={1024} height={1365} fetchPriority="high" decoding="async" />
            <figcaption>With Remi Pearson</figcaption>
          </figure>
        </section>
      </div>

      {/* You know how you'd like to respond: the charcoal band, then the couple */}
      <section className="srl-dark" aria-labelledby="srl-respond-h">
        <div className="srl-wrap">
          <h2 id="srl-respond-h" className="srl-h2">You know how you’d like to respond. Then something happens.</h2>
          <p className="srl-lede">Someone questions your decision. A conversation takes a turn you weren’t expecting. You’re already stretched, and one more demand feels like too much.</p>
          <p>You may know that pushing will make things worse. You may want to listen. But in that moment, defending yourself, getting an answer or getting away can feel much more urgent.</p>
          <h3 className="srl-h3">Does any of this sound familiar?</h3>
          <Squares items={FAMILIAR} />
          <p>These responses can leave people around you feeling pushed away or unable to reach you. They can also leave you exhausted, misunderstood and increasingly reluctant to face the next conversation.</p>
          <p className="srl-statement">This program gives you a practical place to begin working with what happens in those moments.</p>
        </div>
      </section>
      <Img name="sr-couple" alt="A man explaining insistently while the woman beside him withdraws, chin in her hand" width={1024} height={260} className="srl-band-photo" />

      {/* PAGE 2 — recognise the intensity; the five videos */}
      <div className="srl-wrap">
        <section className="srl-section" aria-labelledby="srl-intensity-h">
          <h2 id="srl-intensity-h" className="srl-h2">Learn to recognise the intensity before it takes over the conversation.</h2>
          <p className="srl-lede">You might first notice a tight jaw, heat in your face or a powerful urge to interrupt. At other times, you become foggy, distant or unable to find words. Learning your own signals gives you something more useful to work with than the instruction to “just calm down”.</p>
          <p>We’ll draw on polyvagal theory and body-based practices to explore different responses to pressure. You’ll learn the language, connect it with your own experience and try practices that help you discover what supports you.</p>
          <h3 className="srl-h3">You’ll begin learning how to:</h3>
          <Squares items={LEARNING} />
        </section>

        <section className="srl-section srl-section--flush" aria-labelledby="srl-videos-h">
          <h2 id="srl-videos-h" className="srl-h2">Your five-video program</h2>
          <ol className="srl-lessons">
            {LESSONS.map((l, i) => (
              <li key={l.name}>
                <span className="srl-num" aria-hidden="true">{num(i)}</span>
                <div className="srl-lesson-copy">
                  <h3>{l.name}</h3>
                  {l.text.map(t => <p key={t}>{t}</p>)}
                  <p className="srl-take"><strong>What you’ll take from it:</strong> {l.take}</p>
                </div>
                <Img name={`sr-v${i + 1}`} {...LESSON_IMAGES[i]} className="srl-lesson-img" />
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="srl-dark srl-cta" aria-labelledby="srl-care-h">
        <div className="srl-wrap">
          <h2 id="srl-care-h" className="srl-h2">You can still feel angry, hurt or anxious while learning to respond with greater care.</h2>
          <p>The aim is to become more able to participate in what matters, even when it’s uncomfortable.</p>
          <GetBtn />
          <p className="srl-fine">All five videos, the workbook and guided meditation are included.</p>
        </div>
      </section>

      {/* PAGE 3 — between the videos; the note; questions; the rust close */}
      <div className="srl-wrap">
        <section className="srl-section" aria-labelledby="srl-between-h">
          <h2 id="srl-between-h" className="srl-h2">Something to work with between the videos.</h2>
          <div className="srl-cards">
            <article>
              <Img name="sr-workbook" alt="The Self-Regulation When It Matters workbook by Remi Pearson, cream with a rust band and a gold sprig" width={428} height={336} />
              <h3>Your workbook</h3>
              <p>Use the workbook to connect the teaching with your own life. You’ll identify your early signals, record how you respond to the practices and build a plan you can refer to when thinking clearly feels harder.</p>
              <p>Over time, those observations can help you become more specific about what supports you. A practice that helps in one situation may not be the right choice in another.</p>
            </article>
            <article>
              <Img name="sr-meditation" alt="Returning to Steadiness, guided meditation: Remi Pearson holding a microphone, with a play button and a sound wave" width={471} height={331} />
              <h3>Your guided meditation</h3>
              <p>Returning to Steadiness brings the body-based practices into one guided experience you can revisit. It includes choices for keeping your eyes open, moving gently or pausing, so you can respond to how you’re actually feeling.</p>
              <p>There’s no requirement to become completely relaxed. You’re exploring what helps you feel more present and able to choose.</p>
            </article>
          </div>
        </section>
      </div>

      <section className="srl-note" aria-labelledby="srl-note-h">
        <div className="srl-wrap srl-note-grid">
          <Img name="sr-note" alt="Remi Pearson on stage holding a microphone, in black and white" width={347} height={306} className="srl-note-photo" />
          <div>
            <h2 id="srl-note-h" className="srl-h2">A note from Remi</h2>
            <p>I’m Remi Pearson, author and founder of The Coaching Institute. Much of my work has explored the gap between understanding ourselves and being able to live that understanding when something matters.</p>
            <p>It’s one thing to know you want to listen. It’s another to stay available when you feel criticised, misunderstood or afraid of what someone might say. I’ve designed this program to give you a manageable introduction to working with that experience through your body, with practices you can explore in your own time.</p>
            <p>Understanding your response can help you take responsibility for it. You can recognise that a moment felt overwhelming and still care about how you treated someone, what needs repairing and what you want to practise next.</p>
            <p className="srl-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="srl-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="srl-section" aria-labelledby="srl-say-h">
            <h2 id="srl-say-h" className="srl-h2">What people say about learning with Remi</h2>
            <ul className="srl-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} • {t.program}</p></li>)}
            </ul>
          </section>
        )}

        <section className="srl-section" aria-labelledby="srl-faq-h">
          <h2 id="srl-faq-h" className="srl-h2">A few things you might be wondering</h2>
          <dl className="srl-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="srl-close" aria-labelledby="srl-close-h">
        <div className="srl-wrap">
          <h2 id="srl-close-h" className="srl-h2">Give yourself another way to meet a difficult moment.</h2>
          <p>There will be conversations you don’t enjoy, situations you can’t control and days when you have less capacity than you’d like. You can begin learning your signals and discovering what helps you stay more available within those experiences.</p>
          <p>Start with one familiar situation. Work through the videos, try the practices and build a plan you can return to.</p>
          <p className="srl-close-name">Self-Regulation When It Matters <span>With Remi Pearson</span></p>
          <p className="srl-close-terms">{INCLUDES}<br />{SR.price} • One payment</p>
          {SR.buyHref
            ? <GetBtn dark />
            : <div className="srl-soon"><p>Coming soon</p><NotifyForm product={SR.title} segment={SR.segment} /></div>}
        </div>
      </section>
    </main>
  );
}

// Becoming Conscious' sales page, shown at /products/becoming-conscious in place of the generic product page (see
// app/products/[slug]/page.tsx). Follows the three-page mockup: the burgundy hero over Remi's portrait, the four
// "begin to" points with ringed icons, the three videos as alternating photo rows, burgundy button bands, the note,
// questions beside their answers and the burgundy close, with gold buttons. Copy and lists in content/bc-landing.ts;
// styles styles/bc-landing.css (.bcl-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { BC, BEGIN_TO, BEGIN_TO_ICONS, FAQ, LESSON_IMAGES, LESSONS, TESTIMONIALS } from '@/content/bc-landing';

const num = (i: number) => String(i + 1).padStart(2, '0');

/** The gold button with its arrow: the checkout once the product has a `buyHref`, until then the closing band (#get). */
function Btn() {
  return <a href={BC.ctaHref} className="bcl-btn">Get Becoming Conscious • {BC.price}<span aria-hidden="true">→</span></a>;
}

export default function BcLanding() {
  return (
    <main className="bcl">
      {/* PAGE ONE — the question over the burgundy side of Remi's portrait */}
      <section className="bcl-hero" aria-labelledby="bcl-title">
        <img className="bcl-hero-photo" src="/assets/wdk-landing/wdk-hero.webp" alt="Remi Pearson smiling, in a burgundy top" width={1536} height={1024} fetchPriority="high" decoding="async" />
        <div className="bcl-wrap bcl-hero-inner">
          <nav className="crumbs bcl-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{BC.title}</span>
          </nav>
          <div className="bcl-hero-copy">
            <p className="bcl-eyebrow">Becoming Conscious • With Remi Pearson</p>
            <h1 id="bcl-title" className="bcl-title">How much of your life do you spend somewhere other than here?</h1>
            <p>You’re having a conversation, but part of your attention is on what you need to do afterwards. You finally have a quiet moment and find yourself replaying something that happened yesterday. Even when there’s nothing you need to solve, your mind keeps finding something to work on.</p>
            <p>Becoming Conscious is a gentle introduction to being more present in your own life. Through three short videos, I’ll guide you into noticing your surroundings, feeling the sensations in your body and becoming aware of your thoughts without having to follow every one.</p>
            <p>You can begin exactly as you are, with a busy mind and no previous experience.</p>
            <div className="bcl-buy"><Btn /></div>
            <p className="bcl-small">Three short videos with guided practices • Learn at your own pace<br />One payment. Watch and practise in your own time.</p>
          </div>
        </div>
      </section>

      {/* There are moments: the four points with ringed icons */}
      <section className="bcl-section" aria-labelledby="bcl-here-h">
        <div className="bcl-wrap">
          <span className="bcl-rule" aria-hidden="true"></span>
          <h2 id="bcl-here-h" className="bcl-h2">There are moments you’d like to actually be here for.</h2>
          <p className="bcl-lede">The person sitting across from you. The first few minutes of a walk. An evening when you’ve finished what you can reasonably do, yet your attention is still working through tomorrow.</p>
          <p className="bcl-lede">Thinking is useful. But when it occupies nearly all our attention, we can miss much of the experience we’re having. We taste very little of the meal, barely notice our surroundings or reach the end of a conversation and realise we weren’t really listening.</p>
          <h3 className="bcl-h3">This program introduces simple ways to bring your attention back, so you can begin to:</h3>
          <ul className="bcl-points">
            {BEGIN_TO.map((b, i) => (
              <li key={b.lead}>
                <span className="bcl-ring"><Icon name={BEGIN_TO_ICONS[i]} size={28} /></span>
                <div><h4>{b.lead}</h4><p>{b.text}</p></div>
              </li>
            ))}
          </ul>
          <p className="bcl-statement">You won’t be trying to remain present every second. You’ll be learning how to notice when you’ve drifted and find your way back.</p>
        </div>
      </section>

      {/* PAGE TWO — three videos, alternating photo rows */}
      <section className="bcl-videos" aria-labelledby="bcl-videos-h">
        <div className="bcl-wrap"><h2 id="bcl-videos-h" className="bcl-h2">Three short videos. A simple place to begin.</h2></div>
        <ol className="bcl-rows">
          {LESSONS.map((l, i) => (
            <li key={l.name} className={i % 2 ? 'is-flipped' : ''}>
              <img className="bcl-row-photo" src={`/assets/bc-landing/bc-v${i + 1}.webp`} {...LESSON_IMAGES[i]} loading="lazy" decoding="async" />
              <div className="bcl-row-copy">
                <div className="bcl-row-head"><span className="bcl-num" aria-hidden="true">{num(i)}</span><h3>{l.name}</h3></div>
                {l.text.map(t => <p key={t}>{t}</p>)}
                <p className="bcl-take"><strong>What you get from this:</strong> {l.take}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <div className="bcl-band bcl-center">
        <div className="bcl-wrap"><Btn /><p className="bcl-small">Includes all three videos and the guided practices within them.</p></div>
      </div>

      {/* PAGE THREE — the note, questions, the close */}
      <section className="bcl-section" aria-labelledby="bcl-note-h">
        <div className="bcl-wrap bcl-note">
          <img className="bcl-note-photo" src="/assets/bc-landing/bc-note.webp" alt="Remi Pearson seated in an armchair, smiling, in a patterned pink jacket" width={670} height={713} loading="lazy" decoding="async" />
          <div>
            <h2 id="bcl-note-h" className="bcl-h2">A note from Remi</h2>
            <p>I’m Remi Pearson, author and founder of The Coaching Institute. Much of my work explores our relationship with ourselves, including how easily we can become occupied with understanding our lives while barely noticing the experience of living them.</p>
            <p>I’ve kept Becoming Conscious deliberately simple. We’ll spend time noticing things you can experience directly, with enough guidance to help you begin. You don’t need to arrive feeling peaceful or knowing how to meditate. If your attention wanders, that gives us something to notice.</p>
            <p className="bcl-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="bcl-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="bcl-section bcl-section--top0" aria-labelledby="bcl-say-h">
            <span className="bcl-rule bcl-rule--c" aria-hidden="true"></span>
            <h2 id="bcl-say-h" className="bcl-h2 bcl-center">What people say about learning with Remi</h2>
            <ul className="bcl-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} • {t.program}</p></li>)}
            </ul>
          </section>
        )}
        <section className="bcl-section bcl-section--top0" aria-labelledby="bcl-faq-h">
          <span className="bcl-rule bcl-rule--c" aria-hidden="true"></span>
          <h2 id="bcl-faq-h" className="bcl-h2 bcl-center">A few things you might be wondering</h2>
          <dl className="bcl-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="bcl-band bcl-close bcl-center" aria-labelledby="bcl-close-h">
        <div className="bcl-wrap">
          <h2 id="bcl-close-h" className="bcl-h2">Give yourself a few minutes to be where you are.</h2>
          <p>You don’t have to finish every task before you notice the light through the window. You can feel your feet on the ground while there are still things on your mind. These small moments are available within the life you’re already living.</p>
          <p>Join me for a gentle introduction to noticing them.</p>
          <p className="bcl-close-name">Becoming Conscious <span>Three short videos with Remi Pearson</span></p>
          <p className="bcl-small">{BC.price} • One payment</p>
          {BC.buyHref
            ? <Btn />
            : <div className="bcl-soon"><p>Coming soon</p><NotifyForm product={BC.title} segment={BC.segment} /></div>}
        </div>
      </section>
    </main>
  );
}

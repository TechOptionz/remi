// Deep State Repatterning™'s sales page, shown at /products/deep-state-repatterning in place of the generic product
// page (see app/products/[slug]/page.tsx). Follows the three-page mockup: a dark espresso hero, the "over it" list with
// ringed icons, the symbolic memory strips, the five videos as a timeline, the guided experience and workbook cards on
// a dark band, the note, questions with icons and the dark close, with gold buttons. Copy and lists in
// content/dsr-landing.ts; styles styles/dsr-landing.css (.dsl-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { PEARLS_ALT } from '@/content/dsr';
import { DSR, DSR_NAME, FAQ, FAQ_ICONS, LESSON_IMAGES, LESSONS, OPPORTUNITY, OVER_IT, OVER_IT_ICONS, TESTIMONIALS, WORKBOOK } from '@/content/dsr-landing';

const num = (i: number) => String(i + 1).padStart(2, '0');
const INCLUDES = 'Five videos • Workbook • Guided DSR experience';

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/dsr-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** The gold button: the checkout once the product has a `buyHref`, until then the closing band (#get). */
function Btn({ children = <>Get {DSR_NAME} • {DSR.price}</> }: { children?: React.ReactNode }) {
  return <a href={DSR.ctaHref} className="dsl-btn">{children}<span aria-hidden="true">›</span></a>;
}

export default function DsrLanding() {
  return (
    <main className="dsl">
      {/* PAGE ONE — the question beside Remi, on espresso */}
      <section className="dsl-dark dsl-hero" aria-labelledby="dsl-title">
        <div className="dsl-wrap">
          <nav className="crumbs dsl-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{DSR_NAME}</span>
          </nav>
          <div className="dsl-hero-grid">
            <div>
              <p className="dsl-eyebrow">{DSR_NAME} <span>With Remi Pearson</span></p>
              <h1 id="dsl-title" className="dsl-title">You know it’s over. Why does it still have this much power over you?</h1>
              <p>Someone questions your ability and you feel small again. A person you care about pulls away, and the rejection feels painfully familiar. An opportunity appears, but before you’ve considered it properly, you’re remembering the last time you put yourself out there.</p>
              <p>You may understand where these feelings come from. You may have talked about what happened and know that your life is different now. Yet something about that earlier experience still shapes what you expect, how you see yourself and what you allow yourself to do.</p>
              <p>Deep State Repatterning™ introduces a way of working with the emotional meaning attached to past experiences. Through five videos and a guided DSR experience with me, you’ll explore your relationship with the past and the possibility of responding differently in the present.</p>
              <div className="dsl-buy"><Btn /></div>
              <p className="dsl-small">{INCLUDES}<br />One payment. Explore the program at your own pace.</p>
            </div>
            <img className="dsl-hero-photo" src="/assets/dsr-landing/dsr-hero.webp" alt="Remi Pearson in a podcast studio, a microphone in front of her" width={1536} height={1024} fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      {/* How many times: centred, the six ringed icons, then the memories strip */}
      <section className="dsl-section dsl-center" aria-labelledby="dsl-over-h">
        <div className="dsl-wrap">
          <h2 id="dsl-over-h" className="dsl-h2">How many times have you told yourself you should be over it by now?</h2>
          <p className="dsl-lede">Perhaps you’ve made sense of what happened. You can explain why someone behaved as they did. You know you were younger then, had fewer choices or couldn’t possibly have known what you know today.</p>
          <p className="dsl-lede"><strong>But when something touches that familiar place, the explanation can feel a long way away.</strong></p>
          <ul className="dsl-icons">
            {OVER_IT.map((o, i) => (
              <li key={o.lead}><span className="dsl-ring"><Icon name={OVER_IT_ICONS[i]} size={26} /></span><p><strong>{o.lead}</strong> {o.text}</p></li>
            ))}
          </ul>
          <p className="dsl-lede">The frustration can be considerable. You’re living a different life, with more experience and more choices, while an old meaning continues to influence what feels possible.</p>
        </div>
      </section>
      <figure className="dsl-strip">
        <Img name="dsr-memories" alt="A symbolic illustration: a girl in a school corridor, a young woman alone at a café table, a woman at work by a window, an empty desk at dusk, linked by a gold line" width={1024} height={258} />
        <figcaption><span>Different experiences. A familiar emotional theme.</span><small>A symbolic illustration</small></figcaption>
      </figure>

      {/* PAGE TWO — what it came to mean; the timeline; the pearls */}
      <section className="dsl-section dsl-center" aria-labelledby="dsl-mean-h">
        <div className="dsl-wrap">
          <h2 id="dsl-mean-h" className="dsl-h2">What did that experience come to mean about you?</h2>
          <p className="dsl-lede">A painful experience can leave you with more than a memory of what happened. You may also carry a conclusion about your worth, your ability or what to expect from other people.</p>
          <p className="dsl-lede">Perhaps being laughed at became a reason to stay quiet. Being let down became a reason to expect disappointment. A moment when you had little power became connected with the feeling that your choices wouldn’t matter.</p>
          <p className="dsl-lede">In DSR, we explore those meanings and the way you represent the experiences connected with them. We use the idea of a gestalt: memories linked by a familiar emotional theme, like pearls on a string. It offers a way to understand why something happening today can seem to carry so much history.</p>
        </div>
      </section>
      <figure className="dsl-strip dsl-strip--flush">
        <Img name="dsr-timeline" alt="A symbolic illustration: the same woman as a child, a teenager, a young woman, today and in a calm future, linked by a gold timeline" width={1024} height={272} />
        <figcaption><span>Your symbolic experience of past, present and future.</span></figcaption>
      </figure>
      <section className="dsl-section" aria-label="The chain of pearls">
        <div className="dsl-wrap">
          <figure className="dsl-pearls"><img src="/assets/ideas/dsr-pearls.webp" alt={PEARLS_ALT} width={1536} height={1024} loading="lazy" decoding="async" /></figure>
          <p className="dsl-pull">The intention is to change your relationship with the emotional meaning of an experience. You can remember what happened while exploring whether it still needs to define what you expect from yourself or your future.</p>
        </div>
      </section>

      <section className="dsl-section dsl-tint" aria-labelledby="dsl-approach-h">
        <div className="dsl-wrap">
          <h2 id="dsl-approach-h" className="dsl-h2 dsl-center">Understand the approach. Then experience it with me.</h2>
          <p className="dsl-lede dsl-center">I created Deep State Repatterning™ drawing on my background in neuro-linguistic programming and timeline work. This program introduces the ideas in ordinary language before I guide you through an introductory DSR experience.</p>
          <h3 className="dsl-h3">You’ll have the opportunity to:</h3>
          <ul className="dsl-opps">
            {OPPORTUNITY.map(o => <li key={o.lead}><strong>{o.lead}</strong> {o.text}</li>)}
          </ul>
          <p className="dsl-note-line">You’re participating in your own introductory experience. No previous knowledge of NLP or timeline work is needed.</p>
        </div>
      </section>

      {/* Your five-video program, as a timeline with a photo on each stop */}
      <section className="dsl-section" aria-labelledby="dsl-videos-h">
        <div className="dsl-wrap">
          <h2 id="dsl-videos-h" className="dsl-h2 dsl-center">Your five-video program</h2>
          <ol className="dsl-timeline">
            {LESSONS.map((l, i) => (
              <li key={l.name}>
                <Img name={`dsr-v${i + 1}`} {...LESSON_IMAGES[i]} className="dsl-tl-photo" />
                <span className="dsl-tl-dot" aria-hidden="true"></span>
                <span className="dsl-num" aria-hidden="true">{num(i)}</span>
                <div className="dsl-tl-copy">
                  <h3>{l.name}</h3>
                  {l.text.map(t => <p key={t}>{t}</p>)}
                  <p className="dsl-take"><strong>What you’ll take from it:</strong> {l.take}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="dsl-dark dsl-cta">
        <div className="dsl-wrap dsl-center"><Btn /><p className="dsl-small">Includes all five videos, the workbook and guided DSR experience.</p></div>
      </div>

      {/* PAGE THREE — the guided experience and the workbook */}
      <section className="dsl-dark dsl-section" aria-labelledby="dsl-guided-h">
        <div className="dsl-wrap dsl-cards">
          <article>
            <Img name="dsr-experience" alt="Experience DSR with Remi: a gold timeline between a sunlit forest and a woman looking out over a city, with a play button" width={447} height={174} />
            <h2 id="dsl-guided-h" className="dsl-h2">Your guided DSR experience with Remi</h2>
            <p>Once you’ve worked through the videos, I’ll guide you through an introductory experience of Deep State Repatterning™.</p>
            <p>You’ll explore your symbolic timeline and your relationship with a manageable past experience, with invitations to gain perspective and discover understanding that is meaningful to you.</p>
            <p>There’s no requirement to visualise perfectly or have a dramatic emotional release. You remain able to pause or stop, and you won’t be asked to treat an image or impression as proof of something that happened.</p>
            <p>This is where you experience the approach for yourself, then take time to notice what it was like and what you want to carry into your everyday life.</p>
          </article>
          <article>
            <Img name="dsr-workbook" alt="The Deep State Repatterning™ workbook, with three sunset scenes on a gold timeline" width={445} height={188} />
            <h2 className="dsl-h2">Your workbook</h2>
            <p>The workbook accompanies the videos and guided experience, giving you space to:</p>
            <ul className="dsl-dots">{WORKBOOK.map(w => <li key={w}>{w}</li>)}</ul>
            <p>You don’t have to write out your life story. The workbook helps you stay focused on the experience you’ve chosen and what you’re discovering.</p>
          </article>
        </div>
        <div className="dsl-wrap dsl-center dsl-after-cards">
          <Btn>Get the complete program • {DSR.price}</Btn>
          <p className="dsl-small">Five videos, workbook and guided DSR experience. One payment.</p>
        </div>
      </section>

      <section className="dsl-section" aria-labelledby="dsl-note-h">
        <div className="dsl-wrap dsl-note">
          <img className="dsl-note-photo" src="/assets/photos/about-remi.webp" alt="Remi Pearson smiling, in a cream jumper" width={394} height={900} loading="lazy" decoding="async" />
          <div>
            <h2 id="dsl-note-h" className="dsl-h2">A note from Remi</h2>
            <p>I’m Remi Pearson, author, founder of The Coaching Institute and creator of Deep State Repatterning™. A question that has occupied much of my working life is why we can understand an experience so clearly and still feel its influence in moments when we want to respond differently.</p>
            <p>My training in NLP and work with symbolic timelines helped shape DSR. Within this approach, we explore how a person represents an experience, the meaning attached to it and what becomes available when their perspective changes.</p>
            <p>I’ve created this introduction so you can understand the approach and experience it with my guidance. Your own response matters. You don’t need to find a gift in something painful, forgive someone or report a change simply because you think you should.</p>
            <p className="dsl-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="dsl-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="dsl-section" aria-labelledby="dsl-say-h">
            <h2 id="dsl-say-h" className="dsl-h2 dsl-center">What people say about learning with Remi</h2>
            <ul className="dsl-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} • {t.program}</p></li>)}
            </ul>
          </section>
        )}
        <section className="dsl-section dsl-section--top0" aria-labelledby="dsl-faq-h">
          <h2 id="dsl-faq-h" className="dsl-h2 dsl-center">A few things you might be wondering</h2>
          <dl className="dsl-faq">
            {FAQ.map((f, i) => (
              <div key={f.q}><span className="dsl-ring"><Icon name={FAQ_ICONS[i]} size={24} /></span><div><dt>{f.q}</dt><dd>{f.a}</dd></div></div>
            ))}
          </dl>
        </section>
      </div>

      <section id="get" className="dsl-dark dsl-close dsl-center" aria-labelledby="dsl-close-h">
        <div className="dsl-wrap">
          <h2 id="dsl-close-h" className="dsl-h2">What would you like to feel more able to do now?</h2>
          <p>Speak without immediately expecting humiliation. Consider an opportunity without treating an earlier disappointment as a prediction. Let yourself discover what this relationship is like, while remaining attentive to what is actually happening.</p>
          <p>Begin with one familiar pattern and something you would like to experience differently. I’ll introduce you to DSR and guide you through an experience of working with it.</p>
          <p className="dsl-close-name">{DSR_NAME} <span>With Remi Pearson</span></p>
          <p className="dsl-small">{INCLUDES}<br />{DSR.price} • One payment</p>
          {DSR.buyHref
            ? <a href={DSR.buyHref} className="dsl-btn">Get {DSR_NAME} • {DSR.price}<span aria-hidden="true">›</span></a>
            : <div className="dsl-soon"><p>Coming soon</p><NotifyForm product={DSR.title} segment={DSR.segment} /></div>}
        </div>
      </section>
    </main>
  );
}

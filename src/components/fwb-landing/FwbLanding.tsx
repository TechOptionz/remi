// Finding Our Way Back's sales page, shown at /products/finding-our-way-back in place of the generic product page (see
// app/products/[slug]/page.tsx). Follows the three-panel mockup: the couple across the top with the question below it,
// the recognise list beside a photo, the charcoal band of five gold icons, "Imagine knowing how to begin" with its
// gold ticks, the short introduction band, the three videos as photo rows (left, right, left), the charcoal workbook
// band, the note beside the podcast portrait, the offer, "Continue with the support that fits" rows, the questions
// and the charcoal close. Copy and lists in content/fwb-landing.ts; styles styles/fwb-landing.css (.fwb-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { FAQ, FWB, FWB_PRICE, INCLUDES, INTRO, LEARN, NEXT, OVER_TIME, RECOGNISE, TESTIMONIALS, VIDEO_IMAGES, VIDEOS, WORKBOOK, type Part } from '@/content/fwb-landing';

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/fwb-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** The gold button: the checkout once the product has a `buyHref`, until then the closing band (#get). */
function Btn({ children }: { children: React.ReactNode }) {
  return <a href={FWB.ctaHref} className="fwb-btn">{children}</a>;
}

/** Gold-ticked list. */
function Ticks({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`fwb-ticks ${className}`}>
      {items.map(t => (
        <li key={t}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** "What we cover" / "Why this matters" / "What this gives you", as the mockup's bold leads. */
function Parts({ p }: { p: Part }) {
  return (
    <div className="fwb-parts">
      <div><h4>What we cover</h4><ul>{p.cover.map(c => <li key={c}>{c}</li>)}</ul></div>
      <div><h4>Why this matters</h4><p>{p.why}</p></div>
      <div><h4>What this gives you</h4><p>{p.gives}</p></div>
    </div>
  );
}

export default function FwbLanding() {
  return (
    <main className="fwb">
      {/* PANEL ONE — the couple across the top, the question below */}
      <section className="fwb-hero" aria-labelledby="fwb-title">
        <div className="fwb-wrap">
          <nav className="crumbs fwb-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{FWB.title}</span>
          </nav>
        </div>
        <img className="fwb-hero-photo" src="/assets/fwb-landing/fwb-hero.webp" alt="A woman and a man sitting on a sofa, turned towards each other in a quiet conversation" width={1024} height={460} fetchPriority="high" decoding="async" />
        <div className="fwb-wrap fwb-hero-copy">
          <p className="fwb-eyebrow">Finding Our Way Back <span aria-hidden="true">•</span> With Remi Pearson</p>
          <h1 id="fwb-title" className="fwb-title">The argument is over. So why do you still feel miles apart?</h1>
          <p className="fwb-sub">Learn how to return to a difficult conversation, understand each other’s hurt and make agreements that help you reconnect.</p>
          <p className="fwb-inc">A short introduction, three practical videos and a workbook … {FWB_PRICE}.</p>
          <div className="fwb-hero-text">
            <p>Perhaps you’ve apologised. Perhaps you’re talking again, making dinner, getting on with the day. From the outside, everything looks fine. But something between you still feels unsettled, and you don’t know how to bring it up without being accused of starting another argument.</p>
            <p>Finding Our Way Back helps you understand what that unfinished feeling may be asking for, and how to approach the conversation with care.</p>
          </div>
          <div className="fwb-buy"><Btn>Get Finding Our Way Back • {FWB_PRICE}</Btn></div>
          <p className="fwb-small">Self-paced learning. Watch individually or together.</p>
        </div>
      </section>

      {/* Do you recognise these moments: the ticks beside the couple at the table */}
      <section className="fwb-recognise" aria-labelledby="fwb-same-h">
        <div className="fwb-recognise-copy">
          <h2 id="fwb-same-h" className="fwb-h2">“I don’t want another argument. I want us to understand what happened.”</h2>
          <p>There can be so much care in that sentence. You want to feel close again, and you want to know that what hurt you matters. Perhaps you also know you contributed to the distance, but every attempt to explain yourself seems to make things worse.</p>
          <p>Most of us have familiar ways of getting through these moments. We defend our intentions, go quiet, try to smooth things over or wait until enough time has passed that it feels awkward to mention it. Sometimes the warmth returns. Sometimes the same hurt comes back in the next disagreement.</p>
        </div>
        <Img name="fwb-recognise" alt="A woman at a kitchen table, chin in her hand, listening as a man talks with open hands" width={464} height={331} className="fwb-recognise-photo" />
        <div className="fwb-recognise-list">
          <h3 className="fwb-h3">You may recognise yourself here:</h3>
          <Ticks items={RECOGNISE} />
          <p>There are skills you can learn for these conversations. You can begin with something small enough to practise the next time you miss each other.</p>
        </div>
      </section>

      {/* What it costs: the charcoal band of five gold icons */}
      <section className="fwb-band" aria-labelledby="fwb-cost-h">
        <div className="fwb-wrap">
          <h2 id="fwb-cost-h" className="fwb-h2 fwb-center">What does it cost when we keep leaving things unresolved?</h2>
          <p className="fwb-band-lede">An unfinished disagreement can follow us into ordinary moments. A question sounds like criticism. A quiet evening feels like rejection. We start responding to what we expect will happen, sometimes before the other person has finished speaking.</p>
          <h3 className="fwb-h3 fwb-center">Over time:</h3>
          <ul className="fwb-costs">
            {OVER_TIME.map(u => (
              <li key={u.lead}>
                <span className="fwb-icon" aria-hidden="true"><Icon name={u.icon} size={38} /></span>
                <h4>{u.lead}</h4>
                <p>{u.text}</p>
              </li>
            ))}
          </ul>
          <p className="fwb-band-lede">Returning to a difficult moment gives you an opportunity to learn something about each other and respond differently. Both people need room to be heard, and both need to be willing to consider their impact.</p>
          <div className="fwb-buy fwb-center"><Btn>Learn How to Find Your Way Back • {FWB_PRICE}</Btn></div>
        </div>
      </section>

      {/* PANEL TWO — Imagine knowing how to begin */}
      <section className="fwb-section" aria-labelledby="fwb-begin-h">
        <div className="fwb-wrap">
          <h2 id="fwb-begin-h" className="fwb-h2 fwb-h2--big">Imagine knowing how to begin</h2>
          <div className="fwb-prose">
            <p>You don’t need a perfect speech. It may begin with, “I’ve been thinking about yesterday. I don’t think I really heard you.”</p>
            <p>From there, you can learn how to stay with the conversation long enough to understand what happened, acknowledge your contribution and discuss what would help.</p>
          </div>
          <h3 className="fwb-h3">In Finding Our Way Back, you’ll learn how to:</h3>
          <Ticks items={LEARN} className="fwb-ticks--row" />
          <p className="fwb-statement">The aim is to help you become more capable of caring for the relationship when something between you needs attention.</p>
        </div>
      </section>

      {/* Inside: the introduction band, then the three videos as photo rows */}
      <section className="fwb-inside" aria-labelledby="fwb-inside-h">
        <div className="fwb-wrap"><h2 id="fwb-inside-h" className="fwb-h2 fwb-center">Inside Finding Our Way Back</h2></div>
        <div className="fwb-intro">
          <div className="fwb-wrap">
            <p className="fwb-label">{INTRO.label}</p>
            <h3 className="fwb-intro-title">{INTRO.name}</h3>
            <div className="fwb-intro-grid">
              <p className="fwb-intro-text">{INTRO.text}</p>
              <Parts p={INTRO} />
            </div>
          </div>
        </div>
        <ol className="fwb-rows">
          {VIDEOS.map((v, i) => (
            <li key={v.name} className={i % 2 ? 'is-flipped' : ''}>
              <div className="fwb-row-media">
                <Img name={`fwb-v${i + 1}`} {...VIDEO_IMAGES[i]} className="fwb-row-photo" />
                <p className="fwb-say">{v.say}</p>
              </div>
              <div className="fwb-row-copy">
                <p className="fwb-label">{v.label}</p>
                <h3 className="fwb-row-title">{v.name}</h3>
                <p className="fwb-question">{v.question}</p>
                <p>{v.text}</p>
                <Parts p={v} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* The workbook: the charcoal band, the three pages beside the list */}
      <section className="fwb-band fwb-workbook" aria-labelledby="fwb-book-h">
        <div className="fwb-wrap">
          <h2 id="fwb-book-h" className="fwb-h2 fwb-center">Your workbook … bring the learning into a real conversation</h2>
          <div className="fwb-workbook-grid">
            <figure className="fwb-book">
              <Img name="fwb-workbook" alt="Three workbook pages headed “What happened?”, “What can I own?” and “What will we do differently?”" width={426} height={181} />
              <figcaption>Workbook concept</figcaption>
            </figure>
            <div className="fwb-workbook-copy">
              <p>The workbook helps you reflect on a manageable disagreement and prepare for a more thoughtful response. You can use it privately first, then share what feels useful.</p>
              <h3 className="fwb-h3">It includes space to explore:</h3>
              <Ticks items={WORKBOOK} />
              <p>You’ll also have original example phrases to help you begin when the words are hard to find.</p>
              <div className="fwb-buy"><Btn>Get the Videos and Workbook • {FWB_PRICE}</Btn></div>
            </div>
          </div>
        </div>
      </section>

      {/* PANEL THREE — the note beside the podcast portrait */}
      <section className="fwb-note" aria-labelledby="fwb-note-h">
        <img className="fwb-note-photo" src="/assets/dsr-landing/dsr-hero.webp" alt="Remi Pearson in a podcast studio, a microphone in front of her" width={1536} height={1024} loading="lazy" decoding="async" />
        <div className="fwb-note-copy">
          <p className="fwb-label">A note from Remi</p>
          <h2 id="fwb-note-h" className="fwb-h2 fwb-h2--big">If you hurt, I want to understand</h2>
          <p>One of the things I care about most in relationships is whether we are willing to let another person’s experience matter to us, especially when hearing it is uncomfortable. It’s easy to feel caring when things are going well. When someone tells us we’ve hurt them, we discover what we’re able to stay present for, and where we still have work to do.</p>
          <p>I want us to be able to say, “Help me understand. What did that feel like for you? What have I missed?” There is room in that conversation for our own experience too. We can be overwhelmed, have limits and need time, while still taking responsibility for how we treat someone.</p>
          <p>That is the spirit of Finding Our Way Back. We keep learning how to relate to each other. We revisit things. We notice when an agreement isn’t working and speak about it again. Over time, those moments can give us a more honest understanding of the relationship we are creating together.</p>
          <p className="fwb-signature" aria-hidden="true">Remi</p>
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="fwb-section fwb-tint" aria-labelledby="fwb-say-h">
          <div className="fwb-wrap">
            <h2 id="fwb-say-h" className="fwb-h2 fwb-center">What people say about learning with Remi</h2>
            <ul className="fwb-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} • {t.program}</p></li>)}
            </ul>
          </div>
        </section>
      )}

      <div className="fwb-wrap">
        <section className="fwb-section" aria-labelledby="fwb-offer-h">
          <div className="fwb-offer">
            <div>
              <p className="fwb-label">A small program with a clear purpose</p>
              <h2 id="fwb-offer-h" className="fwb-h2">Finding Our Way Back … {FWB_PRICE}</h2>
              <h3 className="fwb-h3">Your program includes:</h3>
              <Ticks items={INCLUDES} />
            </div>
            <div className="fwb-offer-side">
              <p>The program draws on John and Julie Gottman’s work on conflict and repair, with complementary perspectives on compassionate presence from Heather Plett and trust from David Richo.</p>
              <p>This is Remi’s independent educational program.</p>
              <div className="fwb-buy"><Btn>Get Finding Our Way Back • {FWB_PRICE}</Btn></div>
            </div>
          </div>
        </section>

        <section className="fwb-section fwb-section--top0" aria-labelledby="fwb-next-h">
          <h2 id="fwb-next-h" className="fwb-h2">Continue with the support that fits what you’re noticing</h2>
          <p className="fwb-next-lede">You can begin with Finding Our Way Back. These related programs offer further learning if a particular part of the experience needs more attention.</p>
          <ul className="fwb-next">
            {NEXT.map(n => (
              <li key={n.slug}>
                <img className="fwb-next-photo" src={n.image} alt="" loading="lazy" decoding="async" />
                <div className="fwb-next-copy">
                  <p className="fwb-next-head">{n.head}</p>
                  <h3>{n.title} <span>• {n.price}</span></h3>
                  <p>{n.text}</p>
                  <Link href={n.href} className="fwb-next-link">Explore {n.title}<span aria-hidden="true">→</span></Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="fwb-section fwb-section--top0" aria-labelledby="fwb-faq-h">
          <h2 id="fwb-faq-h" className="fwb-h2">Frequently asked questions</h2>
          <div className="fwb-faq">
            {FAQ.map(f => (
              <details key={f.q}>
                <summary><span className="fwb-plus" aria-hidden="true" />{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section id="get" className="fwb-band fwb-close" aria-labelledby="fwb-close-h">
        <div className="fwb-wrap fwb-close-inner">
          <h2 id="fwb-close-h" className="fwb-h2">You don’t have to know exactly what to say to begin</h2>
          <p>Perhaps there is a conversation you have been avoiding because you’re afraid it will end the same way. Perhaps you’ve been waiting for the other person to understand something you haven’t found a way to explain.</p>
          <p>You can start by learning how to approach that moment with more care, clearer responsibility and a practical sense of what comes next.</p>
          <p className="fwb-close-name">Finding Our Way Back</p>
          <p className="fwb-close-line">How to repair after conflict and reconnect with care.</p>
          <p className="fwb-close-terms">Introduction + three videos + workbook … {FWB_PRICE}.</p>
          {FWB.buyHref
            ? <Btn>Get Finding Our Way Back • {FWB_PRICE}</Btn>
            : <div className="fwb-soon"><p>Coming soon</p><NotifyForm product={FWB.title} segment={FWB.segment} /></div>}
        </div>
      </section>
    </main>
  );
}

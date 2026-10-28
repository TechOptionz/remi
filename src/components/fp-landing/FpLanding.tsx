// The Five Paths to a Healthy Relationship's sales page, shown at /products/five-paths-to-a-healthy-relationship in place
// of the generic product page (see app/products/[slug]/page.tsx). Follows the three-panel mockup: Remi's portrait beside
// the title on warm brown, "You can care deeply…" beside the couple with the copper ticks, the burgundy cost band with its
// numbered list, what you'll learn beside the second couple, the Gottman quotation band, the five paths as numbered rows
// with a photo each, the burgundy buy band, the worksheet beside its ticks, the burgundy note, the offer, the questions
// beside their answers and the burgundy close. Copy and lists in content/fp-landing.ts; styles styles/fp-landing.css (.fpl-*).
import Link from 'next/link';
import NotifyForm from '@/components/products/NotifyForm';
import {
  COSTS, FAMILIAR, FAQ, FOR_YOU, FP, FP_PRICE, INCLUDES, LEARN, PATH_IMAGES, PATHS, TESTIMONIALS, TRIGGER_LINKS, TRIGGERS_Q, WORKSHEET,
} from '@/content/fp-landing';

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/fp-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** The copper button with its chevron: the checkout once the product has a `buyHref`, until then the closing band (#get). */
function Btn({ children }: { children: React.ReactNode }) {
  return <a href={FP.ctaHref} className="fpl-btn">{children}<span aria-hidden="true">›</span></a>;
}

/** Copper-ticked list. */
function Ticks({ items, className = '' }: { items: React.ReactNode[]; className?: string }) {
  return (
    <ul className={`fpl-ticks ${className}`}>
      {items.map((t, i) => (
        <li key={i}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

const two = (i: number) => String(i + 1).padStart(2, '0');

export default function FpLanding() {
  return (
    <main className="fpl">
      {/* PANEL ONE — the title on warm brown beside Remi's portrait */}
      <section className="fpl-hero" aria-labelledby="fpl-title">
        <img className="fpl-hero-photo" src="/assets/wdk-landing/wdk-portrait.webp" alt="Remi Pearson smiling, in a burgundy top" width={1086} height={1448} fetchPriority="high" decoding="async" />
        <div className="fpl-wrap fpl-hero-inner">
          <nav className="crumbs fpl-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{FP.title}</span>
          </nav>
          <div className="fpl-hero-copy">
            <p className="fpl-eyebrow">With Remi Pearson</p>
            <h1 id="fpl-title" className="fpl-title">The Five Paths to a Healthy Relationship</h1>
            <p className="fpl-sub">You love each other. So why do you keep ending up hurt, unheard or miles apart?</p>
            <p>Learn how to recognise the patterns that pull you apart, respond to each other’s needs and begin building a relationship with more closeness and room for both of you.</p>
            <p className="fpl-inc">Five videos + companion worksheet · {FP_PRICE}</p>
            <p>A focused, self-paced introduction to what a healthy relationship asks of us, and how to begin putting it into practice.</p>
            <div className="fpl-buy"><Btn>Get access to the program · {FP_PRICE}</Btn></div>
          </div>
        </div>
      </section>

      {/* You can care deeply: the copy beside the couple, then the copper ticks */}
      <section className="fpl-care" aria-labelledby="fpl-care-h">
        <div className="fpl-split">
          <div className="fpl-split-copy">
            <h2 id="fpl-care-h" className="fpl-h2">You can care deeply about someone and still struggle to reach them</h2>
            <p>You try to explain what hurt, and somehow end up arguing about whether you should feel hurt at all. One of you wants to talk now; the other wants space. You eventually settle down, but the original concern remains, waiting for the next disagreement.</p>
            <p>Or perhaps there is very little arguing. You manage the household, check in about practical things and get through another week. Yet you miss being asked a question that shows genuine interest. You miss laughing together. You miss feeling chosen in the ordinary moments when nobody is making a grand gesture.</p>
            <p>You may know that something needs attention without knowing where to begin.</p>
            <p><strong>{FP.title}</strong> gives you a way to understand what is happening and identify something useful to practise. Through five teaching videos and a companion worksheet, you’ll explore the everyday capacities that help two people remain connected while being honest about who they are and what they need.</p>
          </div>
          <Img name="fpl-couple" alt="A man and a woman on a sofa, looking at each other, she rests her chin in her hand" width={464} height={442} className="fpl-split-photo" />
        </div>
        <div className="fpl-wrap fpl-familiar">
          <h3 className="fpl-h3">Does any of this feel familiar?</h3>
          <Ticks items={FAMILIAR} className="fpl-ticks--grid" />
          <p className="fpl-statement">You don’t need to wait for a crisis to pay attention to your relationship. You can begin with the moments you already recognise.</p>
          <div className="fpl-buy fpl-center"><Btn>Explore the five paths · {FP_PRICE}</Btn></div>
        </div>
      </section>

      {/* The cost: the gold heading beside the numbered list on burgundy */}
      <section className="fpl-band" aria-labelledby="fpl-cost-h">
        <div className="fpl-wrap">
          <div className="fpl-cost">
            <div className="fpl-cost-head">
              <h2 id="fpl-cost-h" className="fpl-h2">What can it cost when these patterns go unaddressed?</h2>
              <p>The cost is often felt in ordinary life. A conversation you stop attempting. Affection you hesitate to offer. Something important you decide to keep to yourself because sharing it feels like too much work.</p>
              <p>Here are five ways that distance can develop.</p>
            </div>
            <ol className="fpl-costs">
              {COSTS.map((c, i) => (
                <li key={c.lead}>
                  <span className="fpl-cost-num" aria-hidden="true">{two(i)}</span>
                  <div><h3>{c.lead}</h3><p>{c.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <p className="fpl-band-lede">Recognising these patterns gives you something to work with. It also helps you ask a more useful question than “Why can’t we just get along?”</p>
          <p className="fpl-band-question">What does our relationship need that we haven’t yet learned how to give it?</p>
        </div>
      </section>

      {/* What you'll begin learning: the copy beside the second couple */}
      <section className="fpl-learn" aria-labelledby="fpl-learn-h">
        <div className="fpl-split">
          <div className="fpl-split-copy">
            <h2 id="fpl-learn-h" className="fpl-h2">What you’ll begin learning</h2>
            <p>This program will help you:</p>
            <Ticks items={LEARN.map(l => <><strong>{l.lead}</strong>{l.text}</>)} className="fpl-ticks--two" />
            <p>The aim is to give you a clearer understanding of what to practise and why it matters. A healthy relationship develops through how both people participate over time.</p>
          </div>
          <Img name="fpl-together" alt="A couple sitting close, smiling at each other, she rests her chin in her hand" width={334} height={306} className="fpl-split-photo" />
        </div>
      </section>

      {/* The quotation band */}
      <section className="fpl-band fpl-quote" aria-labelledby="fpl-quote-h">
        <div className="fpl-wrap">
          <h2 id="fpl-quote-h" className="fpl-quote-h">A thought worth bringing into your relationship</h2>
          <figure>
            <blockquote>“When you’re in pain, the world stops and I listen.”</blockquote>
            <figcaption><strong>Dr. John Gottman</strong><span>Published by The Gottman Institute.</span></figcaption>
          </figure>
          <p className="fpl-band-lede">There is something deeply reassuring about knowing your experience matters to the person beside you. Learning how to offer that attention, and how to ask for it, is part of the work we explore here.</p>
        </div>
      </section>

      {/* PANEL TWO — the five paths, numbered rows with a photo each */}
      <section className="fpl-section" aria-labelledby="fpl-paths-h">
        <div className="fpl-wrap">
          <h2 id="fpl-paths-h" className="fpl-h2 fpl-h2--big">Your five paths</h2>
          <ol className="fpl-paths">
            {PATHS.map((p, i) => (
              <li key={p.name}>
                <span className="fpl-path-num" aria-hidden="true">{two(i)}</span>
                <div className="fpl-path-copy">
                  <h3><span>Path {p.n}</span><span className="fpl-sep"> · </span>{p.name}</h3>
                  <p className="fpl-path-lead">{p.lead}</p>
                  {p.text.map(t => <p key={t}>{t}</p>)}
                  <h4>You’ll explore how to:</h4>
                  <ul>{p.explore.map(e => <li key={e}>{e}</li>)}</ul>
                  <p className="fpl-possible"><strong>What this makes possible:</strong> {p.possible}</p>
                </div>
                <Img name={`fpl-p${i + 1}`} {...PATH_IMAGES[i]} className="fpl-path-photo" />
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="fpl-band fpl-band-buy"><Btn>Get all five videos + the worksheet · {FP_PRICE}</Btn></div>

      {/* PANEL THREE — the worksheet beside its ticks */}
      <section className="fpl-section" aria-labelledby="fpl-sheet-h">
        <div className="fpl-wrap">
          <h2 id="fpl-sheet-h" className="fpl-h2 fpl-center">Bring the five paths into your own experience</h2>
          <div className="fpl-sheet">
            <figure className="fpl-sheet-fig">
              <Img name="fpl-worksheet" alt="Pages of The Five Paths to a Healthy Relationship companion worksheet, with numbered reflection questions" width={556} height={310} />
              <figcaption>Worksheet concept preview</figcaption>
            </figure>
            <div>
              <p>Your companion worksheet gives you space to connect the teaching with real moments in your life.</p>
              <h3 className="fpl-h3">Use it to:</h3>
              <Ticks items={WORKSHEET} />
              <p>You can work through it privately or use the prompts to open a conversation with a willing partner. There is no requirement to disclose anything before you are ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="fpl-section fpl-for" aria-labelledby="fpl-for-h">
        <div className="fpl-wrap">
          <h2 id="fpl-for-h" className="fpl-h2 fpl-center">Who is this for?</h2>
          <div className="fpl-prose">
            <p>This program is for you if you want to understand what helps a relationship become healthier, whether you are beginning something new or paying attention to a longstanding partnership.</p>
            <h3 className="fpl-h3">It may be particularly useful if:</h3>
            <Ticks items={FOR_YOU} />
            <p className="fpl-statement">You can begin learning on your own. Creating a mutually healthy partnership will still require participation from both people.</p>
          </div>
        </div>
      </section>

      {/* The note: the framed portrait beside the copy on burgundy */}
      <section className="fpl-band fpl-note-band" aria-labelledby="fpl-note-h">
        <div className="fpl-wrap fpl-note">
          <img className="fpl-note-photo" src="/assets/dsr-landing/dsr-hero.webp" alt="Remi Pearson in a podcast studio, a microphone in front of her" width={1536} height={1024} loading="lazy" decoding="async" />
          <div>
            <h2 id="fpl-note-h" className="fpl-h2">A note from Remi</h2>
            <p>Relationships can bring us face to face with things we find difficult to admit. We may want closeness and then become defensive when someone tells us how they experience us. We may long to be understood while making very little room for a perspective that unsettles our own.</p>
            <p>I’m interested in those moments because they give us something real to work with. We can become more aware of what we do, learn to express what matters and consider how our behaviour affects someone we love.</p>
            <p>I also care about what happens when one person keeps trying to carry the relationship. Taking responsibility for yourself needs to sit alongside an honest view of whether the other person is willing to participate.</p>
            <p>I’ve brought these five paths together to give you a useful introduction. My hope is that you finish with a clearer understanding of what your relationship needs, what is yours to work on and a conversation or practice you feel ready to begin.</p>
            <p className="fpl-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="fpl-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="fpl-section fpl-section--bottom0" aria-labelledby="fpl-say-h">
            <h2 id="fpl-say-h" className="fpl-h2 fpl-center">What people say about learning with Remi</h2>
            <ul className="fpl-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} · {t.program}</p></li>)}
            </ul>
          </section>
        )}

        <section className="fpl-section" aria-labelledby="fpl-offer-h">
          <div className="fpl-offer">
            <h2 id="fpl-offer-h" className="fpl-h2">What’s included</h2>
            <h3 className="fpl-h3">{FP.title}</h3>
            <Ticks items={INCLUDES} />
            <p className="fpl-offer-terms">{FP_PRICE} · One payment</p>
            <p>A focused introduction you can begin with, without committing to an extensive program.</p>
            <div className="fpl-buy"><Btn>Get access to the five paths · {FP_PRICE}</Btn></div>
          </div>
        </section>

        <section className="fpl-section fpl-section--top0" aria-labelledby="fpl-faq-h">
          <h2 id="fpl-faq-h" className="fpl-h2 fpl-center">Frequently asked questions</h2>
          <dl className="fpl-faq">
            {FAQ.map(f => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.q === TRIGGERS_Q
                  ? <>It introduces recognising triggers, taking responsibility for your responses and asking for support. It does not provide an extensive self-regulation or emotional-processing course. Remi’s <Link href={TRIGGER_LINKS.sr.href}><strong>{TRIGGER_LINKS.sr.title}</strong></Link> and <Link href={TRIGGER_LINKS.eit.href}><strong>{TRIGGER_LINKS.eit.title}</strong></Link> explore those areas further; neither is required to begin this program.</>
                  : f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section id="get" className="fpl-band fpl-close" aria-labelledby="fpl-close-h">
        <div className="fpl-wrap fpl-close-inner">
          <h2 id="fpl-close-h" className="fpl-h2">What would you like to become possible between you?</h2>
          <p>Perhaps you want to raise something difficult without losing the whole evening to an argument. Perhaps you want to feel more interested in each other again, or know that your needs can be heard without someone having to win.</p>
          <p>You can begin by understanding what happens between you and choosing something specific to practise. The five paths give you a way into that conversation, including the one you may need to have with yourself.</p>
          <p className="fpl-close-name">{FP.title}</p>
          <p className="fpl-close-line">Five videos + companion worksheet</p>
          <p className="fpl-close-terms">{FP_PRICE} · One payment · Self-paced</p>
          {FP.buyHref
            ? <Btn>Yes, I want access to the program · {FP_PRICE}</Btn>
            : <div className="fpl-soon"><p>Coming soon</p><NotifyForm product={FP.title} segment={FP.segment} /></div>}
        </div>
      </section>
    </main>
  );
}

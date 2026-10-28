// Obstacles to Love's sales page, shown at /products/obstacles-to-love in place of the generic product page (see
// app/products/[slug]/page.tsx). Follows the four-panel mockup: the cream hero with the couple, the recognise list
// beside a photo, the burgundy band of six ringed icons, the seven videos as alternating photo rows with their
// Explore / cost / takeaway / try lines, the burgundy workbook band, the note, the offer, "Where would you like to go
// next?" cards with the planned program's sign-up, the questions and the burgundy close. Copy and lists in
// content/otl-landing.ts; styles styles/otl-landing.css (.otl-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { FAQ, INCLUDES, LEARN, NEXT, OTL, OTL_PRICE, PLANNED, RECOGNISE, TESTIMONIALS, UNEXAMINED, VIDEO_IMAGES, VIDEOS, WORKBOOK } from '@/content/otl-landing';

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/otl-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** The gold button with its chevron: the checkout once the product has a `buyHref`, until then the closing band (#get). */
function Btn({ children }: { children: React.ReactNode }) {
  return <a href={OTL.ctaHref} className="otl-btn">{children}<span aria-hidden="true">›</span></a>;
}

/** Gold-ticked list. */
function Ticks({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`otl-ticks ${className}`}>
      {items.map(t => (
        <li key={t}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** One labelled line of a video: the gold ring with its icon, the label, then the copy. */
function Line({ icon, label, children }: { icon: 'search' | 'heart' | 'gear' | 'chat'; label: string; children: React.ReactNode }) {
  return (
    <div className="otl-line">
      <span className="otl-line-icon" aria-hidden="true"><Icon name={icon} size={20} /></span>
      <div><h4>{label}</h4>{children}</div>
    </div>
  );
}

export default function OtlLanding() {
  return (
    <main className="otl">
      {/* PANEL ONE — the question beside the couple */}
      <section className="otl-hero" aria-labelledby="otl-title">
        <img className="otl-hero-photo" src="/assets/otl-landing/otl-hero.webp" alt="A woman sitting on a sofa, chin in her hand, deep in thought, with a man beside her" width={492} height={534} fetchPriority="high" decoding="async" />
        <div className="otl-wrap otl-hero-inner">
          <nav className="crumbs otl-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{OTL.title}</span>
          </nav>
          <div className="otl-hero-copy">
            <p className="otl-eyebrow">Obstacles to Love <span>With Remi Pearson</span></p>
            <h1 id="otl-title" className="otl-title">You want to feel close. So why do you keep ending up hurt, guarded or alone?</h1>
            <p className="otl-sub">Understand what gets between you and the love you want … and discover a way forward.</p>
            <p>Perhaps you give more than you want to, then feel resentful. Perhaps you pull away when someone gets close, or find yourself asking for reassurance that never quite settles the fear. You may love someone deeply and still feel exhausted by what happens between you.</p>
            <p>Obstacles to Love helps you recognise seven patterns that can make connection difficult, understand how they show up in your life and begin responding with greater awareness and care.</p>
            <p className="otl-inc">Seven focused videos + a practical workbook • {OTL_PRICE}</p>
            <div className="otl-buy"><Btn>Get Obstacles to Love • {OTL_PRICE}</Btn></div>
            <p className="otl-small">Self-paced learning with Remi Pearson. Begin individually or explore together.</p>
          </div>
        </div>
      </section>

      {/* Do you recognise yourself here: the couple beside the gold ticks */}
      <section className="otl-recognise" aria-labelledby="otl-same-h">
        <Img name="otl-couple" alt="A man talking with open hands while a woman listens, chin in her hand, a mug beside her" width={553} height={370} className="otl-recognise-photo" />
        <div className="otl-recognise-copy">
          <h2 id="otl-same-h" className="otl-h2">“I don’t want to keep having a different version of the same relationship.”</h2>
          <p>You may have learned a great deal about yourself already. You can explain your childhood, identify some of your triggers and recognise when you’re becoming defensive. Yet in the moments that matter, you still agree when you want to say no, retreat when you want comfort or keep trying to earn care from someone who rarely offers it.</p>
          <p>Understanding a pattern can be the beginning of change. It helps to see what you’re doing, what you’re trying to protect and what happens to the relationship as a result. From there, you can consider a different response.</p>
        </div>
        <div className="otl-recognise-list">
          <h3 className="otl-h3">You might recognise yourself in some of these experiences:</h3>
          <Ticks items={RECOGNISE} />
          <p>You don’t need to identify with every pattern. One recurring obstacle can be enough to shape a great deal of your experience.</p>
          <div className="otl-buy"><Btn>Understand What’s Getting in the Way • {OTL_PRICE}</Btn></div>
        </div>
      </section>

      {/* What happens: the burgundy band of six ringed icons */}
      <section className="otl-band" aria-labelledby="otl-repeat-h">
        <div className="otl-wrap">
          <h2 id="otl-repeat-h" className="otl-h2 otl-center">What happens when we keep repeating these patterns?</h2>
          <p className="otl-band-lede">Sometimes the cost is obvious: another argument, another relationship ending, another evening spent wondering where you stand. Sometimes it is quieter. You become more careful about what you say. You stop asking for something you need. You tell yourself that this is simply what relationships are like.</p>
          <h3 className="otl-h3 otl-center">When patterns remain unexamined:</h3>
          <ul className="otl-costs">
            {UNEXAMINED.map(u => (
              <li key={u.lead}>
                <span className="otl-ring" aria-hidden="true"><Icon name={u.icon} size={30} /></span>
                <h4>{u.lead}</h4>
                <p>{u.text}</p>
              </li>
            ))}
          </ul>
          <p className="otl-band-lede">Looking honestly at these patterns gives you more information to work with. You can become clearer about what belongs to you, what needs a shared conversation and what the other person would need to be willing to change.</p>
        </div>
      </section>

      {/* Begin to see more clearly */}
      <section className="otl-section" aria-labelledby="otl-clear-h">
        <div className="otl-wrap">
          <h2 id="otl-clear-h" className="otl-h2 otl-center">Begin to see more clearly … and choose more consciously</h2>
          <div className="otl-prose">
            <p>Obstacles to Love brings together accessible ideas from attachment theory, David Richo’s work on mindful loving, Daniel Siegel’s work on presence and connection, and a gentle introduction to the Internal Family Systems model.</p>
            <p>You’ll explore how these ideas relate to ordinary moments: waiting for a reply, receiving affection, saying what you need, hearing that you’ve hurt someone or deciding whether to keep investing in a relationship.</p>
          </div>
          <h3 className="otl-h3">Through the program, you’ll learn to:</h3>
          <Ticks items={LEARN} className="otl-ticks--grid" />
          <p className="otl-statement">You’ll leave with a clearer picture of your patterns and a first practice for each obstacle.</p>
        </div>
      </section>

      {/* PANELS TWO AND THREE — the seven videos, photo rows that alternate sides */}
      <section className="otl-videos" aria-labelledby="otl-videos-h">
        <div className="otl-wrap"><h2 id="otl-videos-h" className="otl-h2 otl-center">Seven obstacles. A pathway forward for each.</h2></div>
        <ol className="otl-rows">
          {VIDEOS.flatMap((v, i) => [
            <li key={v.name} className={i % 2 ? 'is-flipped' : ''}>
              <Img name={`otl-v${i + 1}`} {...VIDEO_IMAGES[i]} className="otl-row-photo" />
              <div className="otl-row-copy">
                <div className="otl-row-head">
                  <span className="otl-num" aria-hidden="true">{i + 1}</span>
                  <h3><span>Video {v.n} …</span> {v.name}</h3>
                </div>
                <p className="otl-quote">{v.quote}</p>
                {v.text.map(t => <p key={t}>{t}</p>)}
                <div className="otl-lines">
                  <Line icon="search" label="What we explore"><ul>{v.explore.map(e => <li key={e}>{e}</li>)}</ul></Line>
                  <Line icon="heart" label="What it can cost you"><p>{v.cost}</p></Line>
                  <Line icon="gear" label="What you’ll take away"><p>{v.take}</p></Line>
                  <Line icon="chat" label="Your first practice:"><p className="otl-try">{v.practice}</p></Line>
                </div>
              </div>
            </li>,
            // the deck's button after video three
            ...(i === 2 ? [<li key="buy" className="otl-rows-buy"><Btn>Get All Seven Videos and the Workbook • {OTL_PRICE}</Btn></li>] : []),
          ])}
        </ol>
      </section>

      {/* The workbook: the burgundy band beside the workbook */}
      <section className="otl-band otl-workbook" aria-labelledby="otl-book-h">
        <div className="otl-wrap otl-workbook-grid">
          <figure className="otl-book">
            <Img name="otl-workbook" alt="The Obstacles to Love workbook cover beside its reflection prompt and examples pages" width={490} height={372} />
            <figcaption>Workbook concept</figcaption>
          </figure>
          <div>
            <h2 id="otl-book-h" className="otl-h2">Your workbook … find your own place to begin</h2>
            <p>The workbook helps you bring each video into your experience, with examples, reflection prompts and a small practice for every theme.</p>
            <h3 className="otl-h3">You’ll have space to consider:</h3>
            <Ticks items={WORKBOOK} />
            <p>A question runs throughout:</p>
            <p className="otl-question">Is this happening within me, between us or in the behaviour I am receiving?</p>
            <p>That question matters. You deserve an honest understanding of your contribution, alongside a clear view of the relationship itself.</p>
            <p>You’ll finish by choosing one pattern to work with and one practical step to take.</p>
            <div className="otl-buy"><Btn>Begin Obstacles to Love • {OTL_PRICE}</Btn></div>
          </div>
        </div>
      </section>

      {/* PANEL FOUR — the note, the offer, where next, questions, the close */}
      <section className="otl-section" aria-labelledby="otl-note-h">
        <div className="otl-wrap otl-note">
          <img className="otl-note-photo" src="/assets/bc-landing/bc-note.webp" alt="Remi Pearson seated in an armchair, smiling, in a patterned pink jacket" width={670} height={713} loading="lazy" decoding="async" />
          <div>
            <h2 id="otl-note-h" className="otl-h2">A note from Remi</h2>
            <p>I’m interested in what happens when people genuinely want love and still find themselves doing things that make it difficult to give or receive. We can be thoughtful in so many areas of life, yet become frightened, guarded or strangely unfamiliar to ourselves when a relationship matters.</p>
            <p>There is something useful in being able to notice, “This is what happens to me here.” It gives us a place to become curious. What am I afraid of? What am I hoping this person will provide? What am I contributing, and what am I tolerating?</p>
            <p>I also want us to keep looking at the relationship we are actually in. Understanding yourself should help you see more clearly, including when another person is unavailable or unwilling to participate. You can have compassion for their history and still take your own experience seriously.</p>
            <p>I created this program to help you begin those conversations with yourself, and where appropriate, with someone you care about. There is room to learn without turning every difficulty into proof that something is wrong with you.</p>
            <p className="otl-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="otl-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="otl-section otl-section--top0" aria-labelledby="otl-say-h">
            <h2 id="otl-say-h" className="otl-h2 otl-center">What people say about learning with Remi</h2>
            <ul className="otl-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} • {t.program}</p></li>)}
            </ul>
          </section>
        )}

        <section className="otl-section otl-section--top0" aria-labelledby="otl-offer-h">
          <div className="otl-offer">
            <h2 id="otl-offer-h" className="otl-h2">Obstacles to Love • {OTL_PRICE}</h2>
            <p className="otl-sub">Understand what gets between you and the closeness you want … and discover a way forward.</p>
            <h3 className="otl-h3">Your program includes:</h3>
            <Ticks items={INCLUDES} />
            <div className="otl-buy"><Btn>Get Obstacles to Love • {OTL_PRICE}</Btn></div>
            <p className="otl-small">Self-paced. Explore individually or together.</p>
          </div>
        </section>

        <section className="otl-section otl-section--top0" aria-labelledby="otl-next-h">
          <h2 id="otl-next-h" className="otl-h2 otl-center">Where would you like to go next?</h2>
          <p className="otl-center otl-next-lede">You can begin with the practices inside this program. If you want more guidance in a particular area, these resources offer different directions.</p>
          <ul className="otl-next">
            {NEXT.map(n => (
              <li key={n.slug}>
                <img className="otl-next-photo" src={n.image} alt="" loading="lazy" decoding="async" />
                <div>
                  <p className="otl-next-head">{n.head}</p>
                  <h3>{n.title} <span>… {n.price}</span></h3>
                  <p>{n.text}</p>
                  <Link href={n.href} className="otl-next-link">Explore {n.title}<span aria-hidden="true">›</span></Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="otl-planned">
            <div>
              <p className="otl-next-head">Get to know your inner responses more deeply</p>
              <h3>{PLANNED.title} <span>… Planned program … {PLANNED.price}</span></h3>
              <p>An introduction to parts work through the Internal Family Systems model, with further exploration of protective responses and inner conflict.</p>
              <p>This program is in development.</p>
            </div>
            <div className="otl-planned-form">
              <p>Register interest in {PLANNED.title}</p>
              <NotifyForm product={PLANNED.title} segment={OTL.segment} />
            </div>
          </div>
        </section>

        <section className="otl-section otl-section--top0" aria-labelledby="otl-faq-h">
          <h2 id="otl-faq-h" className="otl-h2 otl-center">Frequently asked questions</h2>
          <dl className="otl-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="otl-band otl-close" aria-labelledby="otl-close-h">
        <Img name="otl-close" alt="A couple sitting close, his head resting against hers, both smiling" width={388} height={270} className="otl-close-photo" />
        <div className="otl-wrap otl-close-inner">
          <div className="otl-close-copy">
            <h2 id="otl-close-h" className="otl-h2">Choose one place to begin</h2>
            <p>You may already recognise a pattern you want to understand: the things you don’t say, the care you find difficult to receive or the moment fear starts deciding how you respond.</p>
            <p>You can begin there. Give yourself room to understand what happens, consider its impact and practise something different.</p>
            <p className="otl-close-name">Obstacles to Love</p>
            <p className="otl-close-line">Understand what gets between you and the closeness you want … and discover a way forward.</p>
            <p className="otl-close-terms">Seven videos + workbook • {OTL_PRICE}</p>
            {OTL.buyHref
              ? <Btn>Get Obstacles to Love • {OTL_PRICE}</Btn>
              : <div className="otl-soon"><p>Coming soon</p><NotifyForm product={OTL.title} segment={OTL.segment} /></div>}
          </div>
        </div>
      </section>
    </main>
  );
}

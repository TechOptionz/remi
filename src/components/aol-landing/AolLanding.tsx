// Attachment or Love?'s registration page, shown at /products/attachment-or-love in place of the generic product page
// (see app/products/[slug]/page.tsx). A free three-video series, so its goal is registration: full forms in the hero,
// after the videos and in the closing band (#get); every other button scrolls to the closing one. Follows the
// three-panel mockup: the cream hero with Remi on stage beside the form, the recognise list beside the couple, the
// burgundy "somewhere to turn" band, the three videos as alternating photo rows with their covers / why / gives lines,
// the burgundy "begin with your own experience" band, the burgundy note, "If you would like to keep exploring" cards,
// the questions beside their answers and the burgundy close. The deck's sections the mockup leaves out ("You can feel
// deeply connected…", the fear patterns, "What these three videos can help you understand") sit where the deck puts
// them, in the same style. Copy and lists in content/aol-landing.ts; styles styles/aol-landing.css (.aol-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import { EXPLORE, FAQ, FEAR, NEXT, RECOGNISE, TESTIMONIALS, VIDEO_IMAGES, VIDEOS } from '@/content/aol-landing';
import RegisterForm from './RegisterForm';

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/aol-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** The orange button: scrolls to the closing band's form (#get). */
function Btn({ children }: { children: React.ReactNode }) {
  return <a href="#get" className="aol-btn">{children}</a>;
}

/** Gold-ticked list. */
function Ticks({ items, className = '' }: { items: React.ReactNode[]; className?: string }) {
  return (
    <ul className={`aol-ticks ${className}`}>
      {items.map((t, i) => (
        <li key={i}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** One labelled part of a video: the tinted ring with its icon, the gold label, then the copy. */
function Line({ icon, label, children }: { icon: 'book' | 'heart' | 'bars'; label: string; children: React.ReactNode }) {
  return (
    <div className="aol-line">
      <span className="aol-line-icon" aria-hidden="true"><Icon name={icon} size={20} /></span>
      <div><h4>{label}</h4>{children}</div>
    </div>
  );
}

export default function AolLanding() {
  return (
    <main className="aol">
      {/* PANEL ONE — Remi on stage beside the question and the first form */}
      <section className="aol-hero" aria-labelledby="aol-title">
        <div className="aol-wrap aol-hero-grid">
          <img className="aol-hero-photo" src="/assets/sr-landing/sr-meditation.webp" alt="Remi Pearson on stage holding a microphone, in black and white" width={1024} height={768} fetchPriority="high" decoding="async" />
          <div className="aol-hero-copy">
            <nav className="crumbs aol-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">Attachment or Love?</span>
            </nav>
            <p className="aol-eyebrow">Attachment or Love? <span aria-hidden="true">•</span> A free three-video series with Remi Pearson</p>
            <h1 id="aol-title" className="aol-title">You want to feel close. Why does love so often leave you on edge?</h1>
            <p className="aol-sub">Understand what happens when fear takes over, how you contribute to each other’s emotional safety, and what caring for each other looks like when something hurts.</p>
            <p>Perhaps you spend too much time wondering where you stand. Perhaps you want closeness, then feel an urgent need for space when someone needs more from you. You may love each other and still find yourselves caught in a pattern that leaves both of you feeling alone.</p>
            <p><em>Attachment or Love?</em> is a free introduction to understanding those moments with greater honesty and compassion.</p>
            <p>Three videos to help you look more clearly at what draws you in, how you respond under pressure and the relationship you are creating together.</p>
            <RegisterForm button="Get the free three-video series" fine="Free · Self-paced · No purchase required" />
          </div>
        </div>
      </section>

      {/* You can feel deeply connected… (in the deck, not drawn in the mockup) */}
      <section className="aol-section aol-section--line" aria-labelledby="aol-secure-h">
        <div className="aol-wrap">
          <h2 id="aol-secure-h" className="aol-h2 aol-center">You can feel deeply connected to someone and still struggle to feel secure with them</h2>
          <div className="aol-prose">
            <p>A message arrives, and you can finally relax. They are warm again. You feel wanted again. For a while, the uncertainty disappears.</p>
            <p>Or perhaps you recognise the other side. You miss someone when they are distant, but when they want more closeness, you begin to feel crowded. You need room to breathe, and getting away seems like the only way to find it.</p>
            <p>Sometimes these responses happen within the same person. You reach for connection, become frightened by what it asks of you, then retreat from the very thing you wanted.</p>
            <p>There may be real affection here. There may also be patterns that make it difficult to give and receive that affection consistently.</p>
            <p>Understanding the difference begins with looking beyond how strongly you feel. It means becoming curious about what happens between you, particularly when one of you is hurt, uncertain or in need of care.</p>
          </div>
        </div>
      </section>

      {/* Do you recognise yourself: the couple beside the gold ticks */}
      <section className="aol-recognise" aria-labelledby="aol-recognise-h">
        <Img name="aol-couple" alt="A man and a woman sitting together on a sofa, smiling at each other as they talk" width={596} height={481} className="aol-recognise-photo" />
        <div className="aol-recognise-copy">
          <h2 id="aol-recognise-h" className="aol-h2">Do you recognise yourself in any of these moments?</h2>
          <Ticks items={RECOGNISE} />
          <p>This series offers a place to begin understanding what is happening. You don’t need to know your attachment style or arrive with an explanation.</p>
          <div className="aol-buy"><Btn>Yes, I’d like the free series</Btn></div>
        </div>
      </section>

      {/* A relationship should offer somewhere to turn: the burgundy band */}
      <section className="aol-band aol-turn" aria-labelledby="aol-turn-h">
        <div className="aol-wrap aol-center">
          <h2 id="aol-turn-h" className="aol-h2">A relationship should offer somewhere to turn</h2>
          <div className="aol-prose">
            <p>We are affected by the people we love. Their warmth can comfort us. Their inconsistency can unsettle us. How they respond when we are hurting matters, just as our response matters to them.</p>
            <p>Your partner cannot guarantee that you will always feel emotionally safe. Your history, expectations and responses are part of what you bring. But how they treat you contributes to your experience of safety, and how you treat them contributes to theirs.</p>
          </div>
          <p className="aol-gold-line">We have responsibilities to ourselves and to each other.</p>
          <div className="aol-prose">
            <p>There is room to ask for reassurance, to offer comfort and to help each other settle. There is also room for limits, honest disagreement and taking responsibility for our own behaviour.</p>
            <p>In this series, we explore how those things can belong together. You can seek a safe harbour in your relationship without asking another person to control every feeling you have.</p>
          </div>
        </div>
      </section>

      {/* What can happen when fear keeps directing the relationship? */}
      <section className="aol-section" aria-labelledby="aol-fear-h">
        <div className="aol-wrap">
          <h2 id="aol-fear-h" className="aol-h2 aol-center">What can happen when fear keeps directing the relationship?</h2>
          <p className="aol-center aol-lede">These patterns can gradually shape what you believe love requires of you.</p>
          <ul className="aol-cards">
            {FEAR.map(f => <li key={f.lead}><h3>{f.lead}</h3><p>{f.text}</p></li>)}
          </ul>
          <p className="aol-statement">Seeing a pattern more clearly gives you somewhere to begin. It can also help you recognise what requires a shared response, rather than another private effort to become easier to love.</p>
        </div>
      </section>

      {/* What these three videos can help you understand */}
      <section className="aol-section aol-section--tint" aria-labelledby="aol-explore-h">
        <div className="aol-wrap">
          <h2 id="aol-explore-h" className="aol-h2 aol-center">What these three videos can help you understand</h2>
          <p className="aol-center aol-lede">You’ll begin exploring how to:</p>
          <Ticks className="aol-ticks--grid" items={EXPLORE.map(e => <><strong>{e.lead}</strong> {e.text}</>)} />
          <p className="aol-center aol-note-line">This is a focused introduction. You are not being asked to diagnose yourself, label your partner or make a life-changing decision after three videos.</p>
        </div>
      </section>

      {/* PANEL TWO — the three videos, photo rows that alternate sides */}
      <section className="aol-videos" aria-labelledby="aol-videos-h">
        <div className="aol-wrap">
          <p className="aol-ruled" aria-hidden="true"><span>Free <i>•</i> With Remi Pearson</span></p>
          <h2 id="aol-videos-h" className="aol-h2 aol-center">Inside your free series</h2>
        </div>
        <ol className="aol-rows">
          {VIDEOS.flatMap((v, i) => [
            <li key={v.name} className={i % 2 ? 'is-flipped' : ''}>
              <div className={`aol-row-photo aol-row-photo--${i + 1}`}>
                <Img name={`aol-v${i + 1}`} {...VIDEO_IMAGES[i]} />
                <span className="aol-play" aria-hidden="true"></span>
              </div>
              <div className="aol-row-copy">
                <div className="aol-row-head">
                  <span className="aol-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3><span>Video {v.n}</span> {v.name}</h3>
                </div>
                <p className="aol-question"><strong>The question we explore:</strong> <em>{v.question}</em></p>
                {v.text.map(t => <p key={t}>{t}</p>)}
                <div className="aol-lines">
                  <Line icon="book" label="What this video covers"><ul>{v.covers.map(c => <li key={c}>{c}</li>)}</ul></Line>
                  <Line icon="heart" label="Why this matters"><p>{v.why}</p></Line>
                  <Line icon="bars" label="What this gives you"><p>{v.gives}</p></Line>
                </div>
              </div>
            </li>,
            // the deck's button after video two
            ...(i === 1 ? [<li key="buy" className="aol-rows-buy"><Btn>Get free access to all three videos</Btn></li>] : []),
          ])}
        </ol>
      </section>

      {/* You can begin with your own experience: the burgundy band with the second form */}
      <section className="aol-band aol-begin" aria-labelledby="aol-begin-h">
        <div className="aol-wrap aol-begin-grid">
          <div>
            <h2 id="aol-begin-h" className="aol-h2">You can begin with your own experience</h2>
            <p>You might be in a relationship you value and want to understand more deeply. You may be trying to make sense of a pattern that keeps returning, or reflecting on a relationship that has ended.</p>
            <p>You might also be single and wanting to recognise what you bring into closeness before beginning again.</p>
            <p>You can watch privately and take time with what you notice. Your partner does not need to participate for you to begin learning, although creating a mutually caring relationship will require participation from both people.</p>
          </div>
          <div className="aol-form-box">
            <p className="aol-form-name">Attachment or Love?</p>
            <p className="aol-form-line">Three free videos with Remi Pearson</p>
            <RegisterForm button="Give me access to the free series" fine="No purchase required. Any further programs are optional." />
          </div>
        </div>
      </section>

      {/* PANEL THREE — the note on burgundy */}
      <section className="aol-band aol-note" aria-labelledby="aol-note-h">
        <div className="aol-wrap aol-note-grid">
          <img className="aol-note-photo" src="/assets/hs-landing/hs-note.webp" alt="Remi Pearson smiling, her hair windswept, in a green jacket and pearls" width={937} height={645} loading="lazy" decoding="async" />
          <div className="aol-note-copy">
            <h2 id="aol-note-h" className="aol-h2">A note from Remi</h2>
            <p>I want our intimate relationships to be places where we can bring something tender and expect it to matter. We will misunderstand each other sometimes. We will have limits, get defensive and miss things we wish we had noticed. What interests me is our willingness to return and understand.</p>
            <p className="aol-note-pull">If you are hurting, I want to care about that. If I have contributed to your hurt, I want to know how. I want to understand what would help now and what needs to change in how I relate to you. And I want that willingness to exist in both directions.</p>
            <p>I also know how easily fear can narrow our attention. We can become so occupied with keeping someone close, or finding enough distance to feel comfortable, that we lose sight of the person beside us.</p>
            <p>I created this introduction to help you look at those moments with compassion and honesty. You deserve room for your experience, and the people you love deserve room for theirs. Learning how to hold both is something we can keep returning to.</p>
            <p className="aol-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="aol-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="aol-section aol-section--bottom0" aria-labelledby="aol-say-h">
            <h2 id="aol-say-h" className="aol-h2 aol-center">What people say about learning with Remi</h2>
            <ul className="aol-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} • {t.program}</p></li>)}
            </ul>
          </section>
        )}

        {/* If you would like to keep exploring: two by two */}
        <section className="aol-section aol-section--bottom0" aria-labelledby="aol-next-h">
          <h2 id="aol-next-h" className="aol-h2 aol-center">If you would like to keep exploring</h2>
          <p className="aol-center aol-lede">Start with the free series. If a particular question stays with you, these programs offer places to continue. Each is a separate, optional program.</p>
          <ul className="aol-next">
            {NEXT.map(n => (
              <li key={n.slug}>
                <p className="aol-next-quote">{n.quote}</p>
                <h3><span>{n.title}</span> <span className="aol-price"><span className="sr-only">· </span>{n.price}</span></h3>
                <p>{n.text}</p>
                <Link href={n.href} className="aol-next-link">Explore {n.title} <span aria-hidden="true">→</span></Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Questions beside their answers */}
        <section className="aol-section" aria-labelledby="aol-faq-h">
          <h2 id="aol-faq-h" className="aol-h2 aol-center">Frequently asked questions</h2>
          <dl className="aol-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      {/* The burgundy close (#get) with the last form */}
      <section id="get" className="aol-band aol-close" aria-labelledby="aol-close-h">
        <div className="aol-wrap aol-center">
          <h2 id="aol-close-h" className="aol-h2">What might change if you could see the pattern more clearly?</h2>
          <div className="aol-prose">
            <p>You might recognise a moment when you leave yourself behind to keep someone close. You might notice that you retreat just as a conversation becomes important. You may find words for the kind of care you need, or understand something about the care your partner has been asking for.</p>
            <p>You don’t need to resolve the whole relationship before you begin. You can start by becoming more honest about what happens between you and more curious about what a caring response could look like.</p>
          </div>
          <p className="aol-eyebrow aol-close-eyebrow">Attachment or Love? <span aria-hidden="true">•</span> Three free videos with Remi Pearson</p>
          <div className="aol-close-form">
            <RegisterForm wide button="Yes, I’d like the free series" fine="Free · Self-paced · No purchase required" />
          </div>
        </div>
      </section>
    </main>
  );
}

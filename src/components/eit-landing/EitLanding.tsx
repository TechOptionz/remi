// Emotion Integration Technique Foundations' sales page, shown at /products/emotion-integration-technique-foundations
// in place of the generic product page (see app/products/[slug]/page.tsx). Follows the three-page mockup (one, three,
// two): a light hero beside Remi, the avoidance list with icons beside a photo, burgundy bands with gold sprigs, the
// tree beside the compassion question, the five videos in alternating photo rows, the demonstration and workbook cards,
// the note band, questions that open, and the burgundy close. Copy and lists in content/eit-landing.ts; styles
// styles/eit-landing.css (.eil-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { AVOIDING, AVOIDING_ICONS, EIT, FAQ, LESSON_IMAGES, LESSONS, TESTIMONIALS, UNDERSTAND, WORKBOOK } from '@/content/eit-landing';

const num = (i: number) => String(i + 1).padStart(2, '0');

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/eit-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** The copper button with its arrow: the checkout once the product has a `buyHref`, until then the closing band (#get). */
function Btn({ children }: { children: React.ReactNode }) {
  return <a href={EIT.ctaHref} className="eil-btn">{children}<span aria-hidden="true">→</span></a>;
}

/** The gold sprig in the bands' corners: a curved stem with solid leaves either side. */
const LEAVES: [number, number, number][] = [[34, 92, -20], [46, 78, -110], [56, 64, -25], [66, 50, -115], [78, 38, -30], [90, 26, -120], [102, 16, -40]];
function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg className={`eil-sprig ${className}`} viewBox="0 0 130 120" aria-hidden="true">
      <path className="eil-sprig-stem" d="M10 116C40 92 70 58 112 10" />
      {LEAVES.map(([x, y, r], i) => (
        <path key={i} d="M0 0C7-7 19-7 26 0C19 7 7 7 0 0Z" transform={`translate(${x} ${y}) rotate(${r})`} />
      ))}
    </svg>
  );
}

export default function EitLanding() {
  return (
    <main className="eil">
      {/* PAGE ONE — the question beside Remi */}
      <section className="eil-hero" aria-labelledby="eil-title">
        <Img name="eit-hero" alt="Remi Pearson smiling, in a burgundy top, in a sunlit room" width={494} height={715} className="eil-hero-photo" />
        <div className="eil-wrap eil-hero-inner">
          <nav className="crumbs eil-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{EIT.title}</span>
          </nav>
          <div className="eil-hero-copy">
            <p className="eil-eyebrow">Emotion Integration Technique Foundations <span>With Remi Pearson</span></p>
            <h1 id="eil-title" className="eil-title">You can explain why you do it. <em>Why can’t you stop doing it?</em></h1>
            <span className="eil-rule" aria-hidden="true"></span>
            <p>You know you withdraw when things get personal. You know you stay busy when something hurts. You can explain where the pattern began and what you’re probably protecting.</p>
            <p>Then someone asks what you’re feeling, and you go blank. Or you know exactly what you feel, but immediately judge yourself for feeling it.</p>
            <p className="eil-accent">Understanding yourself hasn’t necessarily made it easier to stay with yourself when something uncomfortable comes up.</p>
            <p>Emotion Integration Technique Foundations introduces a compassionate way to understand the feelings you avoid and the responses that help you keep them at a distance. Across five videos, I’ll explain the principles behind EIT, followed by a guided demonstration that shows how the approach works.</p>
            <div className="eil-buy"><Btn>Get EIT Foundations • {EIT.price}</Btn></div>
            <p className="eil-small">Five videos • Guided demonstration with Remi • Workbook</p>
            <p className="eil-fine">One payment. Learn at your own pace.</p>
          </div>
        </div>
      </section>

      {/* What do you do: the avoidance list with icons, beside the woman at the table */}
      <section className="eil-section" aria-labelledby="eil-avoid-h">
        <div className="eil-wrap eil-avoid">
          <div>
            <h2 id="eil-avoid-h" className="eil-h2">What do you do when you don’t want to <em>feel</em> what you’re feeling?</h2>
            <span className="eil-rule" aria-hidden="true"></span>
            <p>Sometimes it’s obvious. You leave the conversation, become defensive or insist you’re fine. At other times, it looks like being productive, staying positive or helping everybody else.</p>
            <p>You may barely notice the moment you move away from your own experience.</p>
            <ul className="eil-icons">
              {AVOIDING.map((a, i) => (
                <li key={a.lead}>
                  <span className="eil-icon"><Icon name={AVOIDING_ICONS[i]} size={26} /></span>
                  <p><strong>{a.lead}</strong> {a.text}</p>
                </li>
              ))}
            </ul>
            <p>These responses can be exhausting. They can also leave you feeling strangely distant from yourself, even after years of personal development.</p>
          </div>
          <Img name="eit-woman" alt="A woman at a kitchen table, chin in her hand, a mug and an open notebook in front of her" width={459} height={536} className="eil-avoid-photo" />
        </div>
      </section>

      <section className="eil-band" aria-label="Where EIT begins">
        <Sprig className="eil-sprig--r" />
        <div className="eil-wrap">
          <p className="eil-band-line">EIT begins with what you can honestly notice, including the frustration, numbness or “I don’t know”.</p>
        </div>
      </section>

      <section className="eil-section" aria-labelledby="eil-shaped-h">
        <div className="eil-wrap">
          <h2 id="eil-shaped-h" className="eil-h2">How much of your life is shaped by what you’re trying not to feel?</h2>
          <span className="eil-rule" aria-hidden="true"></span>
          <div className="eil-cols">
            <p>You turn down an opportunity because you don’t want to feel exposed. You avoid a conversation because you can’t bear the discomfort it might bring. You keep a relationship on the surface because closeness asks something of you that feels difficult to meet.</p>
            <p>Avoidance may bring relief in the moment. Over time, it can narrow the experiences you feel able to have.</p>
            <p>Learning to be with an uncomfortable emotion can create room for a different choice. You might still feel nervous and consider the opportunity. You might acknowledge hurt and express what matters. You might hear someone’s sadness without immediately trying to make it disappear.</p>
          </div>
          <p className="eil-pull">That is the capacity this program introduces: becoming more able to stay connected with yourself while something difficult is present.</p>
        </div>
      </section>

      {/* PAGE THREE — the compassion question beside the tree */}
      <section className="eil-tree-sec" aria-labelledby="eil-compassion-h">
        <div className="eil-wrap eil-tree-grid">
          <div>
            <h2 id="eil-compassion-h" className="eil-h2 eil-h2--lg">What if you can’t feel compassion for the part of you that <em>struggles?</em></h2>
            <span className="eil-rule" aria-hidden="true"></span>
            <p className="eil-accent">This question sits at the heart of Emotion Integration Technique.</p>
            <p>Perhaps you understand why you withdraw, yet hate that you do it. Perhaps you know your numbness has served a protective purpose, but feel impatient with it. Being told to “have compassion for yourself” doesn’t help when compassion is precisely what you cannot access.</p>
            <p>I developed EIT to begin with that difficulty.</p>
            <p>The approach explores whether more room around an experience makes genuine compassion possible. From there, we gently consider how that compassion can be brought closer to the feelings and responses that have been difficult to meet.</p>
            <p>You don’t have to produce the right emotional word or pretend to feel kind towards yourself. An honest starting point gives us something to work with.</p>
            <div className="eil-buy"><Btn>Get EIT Foundations • {EIT.price}</Btn></div>
            <p className="eil-fine">Understand the principles, watch the guided demonstration and reflect with your workbook.</p>
          </div>
          <Img name="eit-tree" alt="An olive tree with its roots spread wide beneath it, in soft light" width={479} height={452} className="eil-tree" />
        </div>
      </section>

      <section className="eil-section eil-section--tint" aria-labelledby="eil-understand-h">
        <div className="eil-wrap">
          <h2 id="eil-understand-h" className="eil-h2">What you’ll begin to understand about yourself</h2>
          <span className="eil-rule" aria-hidden="true"></span>
          <ol className="eil-points">
            {UNDERSTAND.map((u, i) => (
              <li key={u.lead}><span className="eil-point-num" aria-hidden="true">{num(i)}</span><div><h3>{u.lead}</h3><p>{u.text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="eil-band eil-band--slim" aria-label="Welcoming an emotion">
        <Sprig className="eil-sprig--l" />
        <Sprig className="eil-sprig--r" />
        <div className="eil-wrap">
          <p className="eil-band-line">Welcoming an emotion doesn’t require acting on every impulse.</p>
          <p>You can make room for anger and still take responsibility for how you speak. You can acknowledge loneliness while choosing thoughtfully how you seek connection.</p>
        </div>
      </section>

      {/* Your five-video program: photo rows that alternate sides */}
      <section className="eil-videos" aria-labelledby="eil-videos-h">
        <div className="eil-wrap">
          <h2 id="eil-videos-h" className="eil-h2">Your five-video program</h2>
          <span className="eil-rule" aria-hidden="true"></span>
        </div>
        <ol className="eil-rows">
          {LESSONS.map((l, i) => (
            <li key={l.name} className={i % 2 ? 'is-flipped' : ''}>
              <div className="eil-row-copy">
                <span className="eil-num" aria-hidden="true">{num(i)}</span>
                <div>
                  <h3>{l.name}</h3>
                  {l.text.map(t => <p key={t}>{t}</p>)}
                  <p className="eil-take"><strong>What you’ll take from it:</strong> {l.take}</p>
                </div>
              </div>
              <Img name={`eit-v${i + 1}`} {...LESSON_IMAGES[i]} className="eil-row-photo" />
            </li>
          ))}
        </ol>
        <div className="eil-wrap eil-center eil-after-rows">
          <Btn>Get EIT Foundations • {EIT.price}</Btn>
          <p className="eil-small">Five videos • Guided demonstration with Remi • Workbook</p>
        </div>
      </section>

      {/* PAGE TWO — the demonstration and the workbook */}
      <section className="eil-section" aria-labelledby="eil-more-h">
        <div className="eil-wrap">
          <h2 id="eil-more-h" className="sr-only">The guided demonstration and your workbook</h2>
          <div className="eil-cards">
            <article>
              <Img name="eit-demo" alt="Demonstration preview: Remi Pearson smiling, with a play button" width={456} height={277} />
              <h3>See the principles come together in a guided demonstration</h3>
              <p>The separate guided demonstration with me shows how the principles of EIT come together in practice.</p>
              <p>You’ll see the importance of beginning with what is actually present, recognising when compassion is unavailable and allowing enough room around the experience. The demonstration will help you understand the movement outward and inward, and why pace matters.</p>
              <p>You can watch without needing to produce an emotional response of your own. There is nothing to prove by feeling more, going deeper or having a particular result.</p>
              <p className="eil-fine">The demonstration supports your understanding of EIT. It does not train you to facilitate the intervention with another person.</p>
            </article>
            <article>
              <Img name="eit-workbook" alt="Preview artwork: the Emotion Integration Technique Foundations workbook beside its open Noticing What I Feel and Reflections pages" width={461} height={277} />
              <h3>Your workbook</h3>
              <p>Use the workbook to connect the principles with your own experience, with space to explore:</p>
              <ul className="eil-dots">{WORKBOOK.map(w => <li key={w}>{w}</li>)}</ul>
              <p>You can work with everyday examples and leave anything you’re not ready to explore. The workbook is a place for honest reflection, without an expectation to uncover your deepest experience.</p>
            </article>
          </div>
          <div className="eil-center eil-after-cards">
            <Btn>Get the complete program • {EIT.price}</Btn>
            <p className="eil-fine">Five videos, a guided demonstration with Remi and your workbook.</p>
          </div>
        </div>
      </section>

      <section className="eil-band eil-note" aria-labelledby="eil-note-h">
        <Sprig className="eil-sprig--r" />
        <div className="eil-wrap eil-note-grid">
          <Img name="eit-note" alt="Remi Pearson smiling, in a burgundy top" width={557} height={682} className="eil-note-photo" />
          <div>
            <h2 id="eil-note-h" className="eil-h2">A note from Remi</h2>
            <p>I’m Remi Pearson, author, founder of The Coaching Institute and creator of Emotion Integration Technique.</p>
            <p>I developed EIT through working with people who could explain themselves brilliantly but struggled to access what they felt. Some became frustrated when asked to notice an emotion. Others understood their protective responses, yet couldn’t feel compassion towards the part of themselves that was protecting them.</p>
            <p>I began paying closer attention to that difficulty. What happened if we worked with the distance someone needed, instead of asking them to move past it? What if numbness or frustration gave us the place to begin?</p>
            <p>This foundations program introduces the principles that grew from that work. I want you to understand more of your own experience without turning emotional awareness into another test you have to pass.</p>
            <p className="eil-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="eil-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="eil-section" aria-labelledby="eil-say-h">
            <h2 id="eil-say-h" className="eil-h2 eil-center">What people say about learning with Remi</h2>
            <ul className="eil-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} • {t.program}</p></li>)}
            </ul>
          </section>
        )}

        <section className="eil-section" aria-labelledby="eil-faq-h">
          <h2 id="eil-faq-h" className="eil-h2 eil-center">A few things you might be wondering</h2>
          <span className="eil-rule eil-rule--c" aria-hidden="true"></span>
          <div className="eil-faq">
            {FAQ.map(f => (
              <details key={f.q}>
                <summary>{f.q}<span className="eil-chev" aria-hidden="true"></span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section id="get" className="eil-band eil-close eil-center" aria-labelledby="eil-close-h">
        <Sprig className="eil-sprig--l" />
        <Sprig className="eil-sprig--r" />
        <div className="eil-wrap">
          <h2 id="eil-close-h" className="eil-h2">You don’t have to become better at explaining yourself <em>before you begin.</em></h2>
          <span className="eil-rule eil-rule--c" aria-hidden="true"></span>
          <p>Perhaps you already have the explanation. What remains difficult is being with the sadness, hurt or uncertainty when it appears.</p>
          <p>Begin with the experience you recognise, including whatever makes it hard to approach. I’ll introduce you to the principles of EIT and show you how compassion can become part of that relationship.</p>
          <p className="eil-close-name">Emotion Integration Technique Foundations <span>With Remi Pearson</span></p>
          <p className="eil-close-terms">Five videos • Guided demonstration • Workbook<br />{EIT.price} • One payment</p>
          {EIT.buyHref
            ? <a href={EIT.buyHref} className="eil-btn">Get EIT Foundations • {EIT.price}<span aria-hidden="true">→</span></a>
            : <div className="eil-soon"><p>Coming soon</p><NotifyForm product={EIT.title} segment={EIT.segment} /></div>}
        </div>
      </section>
    </main>
  );
}

// Selling from Stage's sales page (the full online program), shown at /products/selling-from-stage in place of the
// generic product page (see app/products/[slug]/page.tsx). Follows the five-part mockup: the hero beside the audience
// with the guarantee line and the burgundy strip of figures, the five reasons as icon rows (part one), Remi's story,
// the 13 lessons as rows beside their drawings (parts two and three), the burgundy band of resources, the two bonuses
// and the burgundy guarantee band with its shield (part four), who it is for, the enrolment table, the questions and
// the close (part five). The deck's testimonial placements render nothing until TESTIMONIALS has verified quotes.
// Copy and lists in content/sfs-landing.ts; styles styles/sfs-landing.css (.sfs-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { productHref } from '@/content/products';
import { DEVELOP, ENROLMENT, FAQ, FUNDAMENTALS_SLUG, GOOD_FIT, LESSONS, NOT_FOR, REASONS, SFS, SFS_AMOUNT, SFS_PRICE, TESTIMONIALS } from '@/content/sfs-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/sfs-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="sfs-btn">Join the waitlist <span aria-hidden="true">→</span></a>;
}
const Notify = () => <p className="sfs-small">Be notified when we’re taking applications again.</p>;

/** The verified quotes, where the deck places them; nothing until TESTIMONIALS has entries. */
function Quotes({ from, count }: { from: number; count: number }) {
  const items = TESTIMONIALS.slice(from, from + count);
  if (!items.length) return null;
  return (
    <ul className="sfs-quotes">
      {items.map(t => <li key={t.name}><blockquote><p>“{t.quote}”</p></blockquote><p className="sfs-quote-by">{t.name} · {t.program}</p></li>)}
    </ul>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');
const LESSON_SIZE: Record<number, [number, number]> = {
  1: [600, 290], 2: [560, 292], 3: [712, 264], 4: [640, 264], 5: [648, 288], 6: [584, 268], 7: [768, 188],
  8: [680, 300], 9: [332, 248], 10: [604, 276], 11: [400, 264], 12: [644, 280], 13: [480, 288],
};

export default function SfsLanding() {
  return (
    <main className="sfs">
      {/* PART ONE — the hero, the figures, the five reasons */}
      <section className="sfs-hero" aria-labelledby="sfs-title">
        <div className="sfs-hero-copy">
          <nav className="crumbs sfs-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{SFS.title}</span>
          </nav>
          <p className="sfs-eyebrow">Selling from Stage with Remi Pearson</p>
          <h1 id="sfs-title" className="sfs-title">Turn the room you’re speaking to into clients you’re excited to work with.</h1>
          <p className="sfs-lede">Learn the eight-step pitch method behind <strong>$50 million in personal sales</strong> by Remi Pearson across <strong>live events, webinars and small teleconferences</strong>.</p>
          <p>Build your own complete sales presentation, understand what helps people decide to buy, and learn how to make an offer with the warmth and conviction your work deserves.</p>
          <p className="sfs-strong">13 in-depth online lessons. Practical pitch-building resources. Two included bonuses valued at $3,600.</p>
          <p className="sfs-price"><strong>{SFS_AMOUNT} AUD</strong> <span>including GST</span></p>
          <div className="sfs-buy"><Btn /></div>
          <Notify />
          <p className="sfs-guarantee-line"><Icon name="shieldcheck" size={22} strokeWidth={1.4} /><em>Includes one place at Remi’s annual two-day training and three recorded expert pitch analyses. Backed by a 12-month investment-back guarantee.</em></p>
        </div>
        <Img name="sfs-room" alt="An audience in a darkened room listening to a speaker, a woman in the front row smiling with her chin on her hand" width={742} height={988} className="sfs-hero-photo" eager />
      </section>
      <section className="sfs-figures" aria-label="Remi Pearson’s results">
        <div className="sfs-wrap sfs-figures-inner">
          <div><p className="sfs-figure-n">$50 million</p><p className="sfs-figure-label">Personally sold through presentations</p><p className="sfs-figure-sub">Live events · Webinars · Small teleconferences</p></div>
          <div><p className="sfs-figure-n">$200 million</p><p className="sfs-figure-label">Founder of a business that generated approximately $200 million over 23 years</p></div>
        </div>
      </section>

      <div className="sfs-wrap">
        <Quotes from={0} count={1} />
        <section className="sfs-section" aria-labelledby="sfs-love-h">
          <h2 id="sfs-love-h" className="sfs-h2 sfs-h2--big">An audience can love your presentation and still leave without buying.</h2>
          <div className="sfs-cols">
            <p>They tell you it was wonderful. They take notes, thank you afterwards and say they’ll be in touch. You’ve given generously, shared useful ideas and put real effort into the experience. Yet the offer doesn’t land the way you hoped.</p>
            <p>Sometimes you’ve taught so much that people feel overwhelmed. Sometimes the value of the offer is clear in your head but hasn’t become clear in theirs. And sometimes, after speaking confidently for most of the session, you reach the price and suddenly sound as though you’re asking for a favour.</p>
            <p>These are moments you can learn to handle differently. You can prepare the connection between your teaching and your offer, understand the questions people bring to a buying decision, and practise an invitation that feels natural to deliver.</p>
            <p><strong>Selling from Stage helps you build that whole experience.</strong></p>
            <p>You’ll develop your own pitch as you work through the program, with a clear purpose for each section and a practical way to bring it together.</p>
          </div>
        </section>

        <section className="sfs-section sfs-rule" aria-labelledby="sfs-stage-h">
          <h2 id="sfs-stage-h" className="sfs-h2 sfs-h2--big">You don’t need a huge stage to use this skill.</h2>
          <div className="sfs-cols">
            <p>Some of my selling has happened at live events. Some has happened through webinars. Some has happened in small teleconferences, where the connection was intimate and the audience was small.</p>
            <p>Across those settings, I’ve personally generated <strong>$50 million in sales</strong>.</p>
            <p>The setting changes how you engage people and how they respond to the offer. The work of understanding your audience, communicating value and helping people make a decision remains.</p>
            <p>Whether you’re presenting to a workshop, delivering a webinar or bringing a small group together to explore your work, you need to know how to make the opportunity clear.</p>
          </div>
        </section>

        <section className="sfs-section sfs-rule" aria-labelledby="sfs-reasons-h">
          <h2 id="sfs-reasons-h" className="sfs-h2 sfs-h2--big">Five reasons to learn how to sell from stage</h2>
          <ol className="sfs-reasons">
            {REASONS.map((r, i) => (
              <li key={r.name}>
                <span className="sfs-reason-icon" aria-hidden="true"><Icon name={r.icon} size={34} strokeWidth={1.2} /></span>
                <div><h3><span className="sfs-reason-n">{i + 1}.</span> {r.name}</h3><p>{r.text}</p></div>
              </li>
            ))}
          </ol>
          <div className="sfs-buy"><Btn /></div>
        </section>

        {/* PART TWO — Remi's story, the 13 lessons */}
        <section className="sfs-section sfs-rule" aria-labelledby="sfs-remi-h">
          <h2 id="sfs-remi-h" className="sfs-h2 sfs-h2--big">Learn the thinking behind $50 million in personal sales</h2>
          <div className="sfs-cols sfs-cols--flow">
            <p>I’m Remi Pearson. I founded The Coaching Institute and built a business that generated approximately $200 million over 23 years. Within that work, I personally sold $50 million through live events, webinars and small teleconferences.</p>
            <p>That experience taught me to pay attention to much more than the words of a pitch. I learned to notice whether people felt understood, whether they could see themselves benefiting from the offer, and whether I had made the next step clear enough for them to consider it.</p>
            <p>I also learned how easily we can get in our own way. We overteach. We explain an inclusion without explaining why it matters. We become uncomfortable with the price and communicate that discomfort to the room.</p>
            <p>In Selling from Stage, I’ll teach you the method and take you through the decisions behind it. You’ll see what I look for, what I prepare and how I connect the parts of a presentation so the offer belongs in the experience.</p>
            <p>You’ll apply that thinking to your own work, in your own voice.</p>
          </div>
          <img className="sfs-signature" src="/assets/bm-landing/bm-signature.webp" alt="Remi Pearson" width={585} height={375} loading="lazy" decoding="async" />
          <Quotes from={1} count={2} />
        </section>

        <section className="sfs-section sfs-rule" aria-labelledby="sfs-lessons-h">
          <h2 id="sfs-lessons-h" className="sfs-h2 sfs-h2--big">Build your complete pitch through 13 in-depth lessons</h2>
          <p className="sfs-lede">The program begins with buying psychology and the preparation that supports a strong offer. You then work through the eight pitch steps in detail, before bringing everything together through rehearsal and follow-through.</p>
          <ol className="sfs-lessons">
            {LESSONS.map((l, i) => {
              const [w, h] = LESSON_SIZE[i + 1];
              return (
                <li key={l.name}>
                  <Img name={`sfs-l${pad(i + 1)}`} alt="" width={w} height={h} className="sfs-lesson-art" />
                  <div className="sfs-lesson-copy">
                    <p className="sfs-lesson-n">{pad(i + 1)}</p>
                    <h3>{l.name}</h3>
                    <p>{l.text}</p>
                    <p className="sfs-result">{l.result}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </div>

      {/* PART THREE — the work you'll finish with */}
      <section className="sfs-band" aria-labelledby="sfs-finish-h">
        <div className="sfs-wrap sfs-finish">
          <div>
            <h2 id="sfs-finish-h" className="sfs-h2 sfs-h2--big">Finish with work you can actually use</h2>
            <p>As you apply the lessons, you’ll develop:</p>
            <ul className="sfs-ticks sfs-ticks--light">{DEVELOP.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
          <div>
            <p>Your resources include the <strong>Pitch Builder</strong>, worked examples, an annotated pitch, an editable slide structure, a question-and-answer planner, a rehearsal scorecard and follow-up templates.</p>
            <p className="sfs-band-strong">The aim is to help you complete your own presentation as you learn.</p>
            <div className="sfs-buy"><Btn /></div>
          </div>
        </div>
      </section>

      {/* PART FOUR — the two bonuses, the guarantee */}
      <div className="sfs-wrap">
        <section className="sfs-section" aria-labelledby="sfs-bonus-h">
          <h2 id="sfs-bonus-h" className="sr-only">Two included bonuses</h2>
          <article className="sfs-bonus">
            <div className="sfs-bonus-copy">
              <p className="sfs-label">Bonus one</p>
              <h3 className="sfs-h2">Two days of training with Remi</h3>
              <p className="sfs-bonus-value">Valued at $3,000. Included at no additional charge.</p>
              <p>Your enrolment includes one place at my annual two-day Selling from Stage training.</p>
              <p>Spend focused time with me on the work and deepen what you’ve learned through the online program. Come back to the method with greater familiarity, your own developing pitch and a clearer understanding of the questions that matter to you.</p>
              <p>Dedicated time makes room to think more carefully about your offer and how you communicate it. This bonus gives you the opportunity to immerse yourself in the subject alongside the recorded program.</p>
              <p className="sfs-small"><strong>One place at one annual two-day training event is included. Dates and delivery details will be announced.</strong></p>
            </div>
            <Img name="sfs-bonus" alt="Participants at a training day, a woman smiling as she listens with a pen in hand" width={804} height={625} className="sfs-bonus-photo" />
          </article>
          <article className="sfs-bonus sfs-bonus--two">
            <div className="sfs-bonus-copy">
              <p className="sfs-label">Bonus two</p>
              <h3 className="sfs-h2">Inside the Pitch: Three Expert Breakdowns</h3>
              <p className="sfs-bonus-value">Valued at $600. Included at no additional charge.</p>
              <p>Watch three people pitch and follow my analysis of the choices they make.</p>
              <p>I’ll examine how they establish connection, whether the teaching supports the offer, how clearly the value comes across and what happens when they ask people to act. You’ll hear what I would keep, where I would make a change and why.</p>
              <p>Seeing a pitch through an experienced practitioner’s eyes gives you another way to understand the method. You can begin recognising patterns that are harder to notice when you’re absorbed in delivering your own presentation.</p>
              <p><strong>Learn how to assess a pitch, so you can become more discerning about your own.</strong></p>
              <p className="sfs-small">These three recorded analyses are included alongside your 13 core lessons.</p>
            </div>
            <ul className="sfs-pitches" aria-label="The three recorded pitch analyses">
              {[1, 2, 3].map(n => <li key={n}><Img name={`sfs-pitch${n}`} alt={`Recorded pitch analysis ${n}: a speaker presenting to an audience`} width={250} height={237} /></li>)}
            </ul>
          </article>
          <Quotes from={3} count={1} />
        </section>
      </div>

      <section className="sfs-band sfs-band--guarantee" aria-labelledby="sfs-guarantee-h">
        <div className="sfs-wrap sfs-guarantee">
          <Img name="sfs-shield" alt="A gold shield reading 12 months" width={453} height={423} className="sfs-shield" />
          <div>
            <h2 id="sfs-guarantee-h" className="sfs-h2 sfs-h2--big">Earn back your investment within 12 months … or receive a full refund.</h2>
            <p>I want you to feel confident investing in this skill and putting the teaching into practice.</p>
            <p><strong>If you don’t earn back your entire {SFS_AMOUNT} investment from applying what you learn in Selling from Stage within 12 months of enrolment, you can request a complete refund.</strong></p>
            <p><strong>You also get to keep all the program materials.</strong></p>
            <p>Learn the method, apply it to your offer and give yourself the opportunity to develop your ability. If it hasn’t earned back your investment within those 12 months, the guarantee is there for you.</p>
          </div>
        </div>
      </section>

      {/* PART FIVE — who it is for, the enrolment, the questions */}
      <div className="sfs-wrap">
        <section className="sfs-section" aria-labelledby="sfs-fit-h">
          <h2 id="sfs-fit-h" className="sfs-h2 sfs-h2--big">Is Selling from Stage right for you?</h2>
          <p>This program is designed for business owners, coaches, consultants, educators and service providers who want to sell their work through presentations.</p>
          <div className="sfs-fit">
            <div>
              <h3 className="sfs-h3">It’s a strong fit if you:</h3>
              <ul className="sfs-ticks">{GOOD_FIT.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="sfs-fit-not">
              <h3 className="sfs-h3">It won’t suit you if you:</h3>
              <ul className="sfs-crosses">{NOT_FOR.map(t => <li key={t}>{t}</li>)}</ul>
              <p className="sfs-small">The three expert pitch breakdowns are recorded teaching examples. Personal reviews of your own pitch are not included.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="sfs-enrol" aria-labelledby="sfs-enrol-h">
        <div className="sfs-wrap">
          <div className="sfs-enrol-panel">
            <div>
              <h2 id="sfs-enrol-h" className="sfs-h2 sfs-h2--big">Your complete enrolment</h2>
              <table className="sfs-table">
                <thead><tr><th scope="col">Included</th><th scope="col">What it helps you do</th></tr></thead>
                <tbody>
                  {ENROLMENT.map(e => <tr key={e.item}><th scope="row"><span className="sfs-table-item"><Icon name={e.icon} size={22} strokeWidth={1.3} /><span>{e.item}</span></span></th><td>{e.does}</td></tr>)}
                </tbody>
              </table>
            </div>
            <div className="sfs-enrol-offer">
              <p className="sfs-enrol-price">{SFS_AMOUNT}</p>
              <p className="sfs-enrol-gst">AUD including GST</p>
              <p className="sfs-enrol-bonus">Both bonuses, valued at $3,600 combined, are included at no additional charge.</p>
              <Btn />
              <Notify />
            </div>
          </div>
        </div>
      </section>

      <div className="sfs-wrap">
        <section className="sfs-section" aria-labelledby="sfs-faq-h">
          <h2 id="sfs-faq-h" className="sfs-h2 sfs-h2--big">Your questions, answered</h2>
          <dl className="sfs-faq">
            {FAQ.map((f, i) => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{i === 0 ? <>{f.a} Looking for the introduction? <Link href={productHref(FUNDAMENTALS_SLUG)}>Selling from Stage Fundamentals</Link>.</> : f.a}</dd>
              </div>
            ))}
          </dl>
          <Quotes from={4} count={1} />
        </section>
      </div>

      <section id="get" className="sfs-close" aria-labelledby="sfs-close-h">
        <div className="sfs-wrap sfs-close-inner">
          <div>
            <h2 id="sfs-close-h" className="sfs-h2 sfs-h2--big">Your next audience deserves to understand what’s possible with you.</h2>
            <p>You may already have an offer that could make a meaningful difference to the people listening. Learning how to communicate its value gives them a better opportunity to recognise that and decide whether to work with you.</p>
            <p>You don’t have to leave the invitation to whatever words occur to you at the end. You can prepare it, practise it and develop the skill to deliver it with conviction.</p>
            <p>Learn from the method behind <strong>$50 million in Remi’s personal sales across live events, webinars and small teleconferences</strong>. Bring it to your own offer and begin building a pitch you’re proud to deliver.</p>
          </div>
          <div className="sfs-close-offer">
            <p className="sfs-label sfs-label--light">Selling from Stage with Remi Pearson</p>
            <p className="sfs-close-price">{SFS_PRICE}</p>
            <p className="sfs-close-line">Includes two bonuses valued at $3,600, at no additional charge.</p>
            <p className="sfs-close-line">Backed by the 12-month investment-back guarantee.</p>
            <WaitlistForm product={SFS.title} segment={SFS.segment} prefix="sfs" namePlaceholder="First name" thanks="Thank you. You’ll be notified when we’re taking applications again." />
            <Notify />
          </div>
        </div>
        <div className="sfs-wrap sfs-fine">
          <p><em>Training scheduling: The dates and scheduling of the annual two-day bonus training are at Remi Pearson’s discretion and will be communicated to enrolled participants. Your enrolment includes one place at one annual two-day training event. Scheduling may be subject to change.</em></p>
          <p><em>Results: Remi’s $50 million in personal sales represents her own results across live events, webinars and small teleconferences. The approximately $200 million figure refers to the business’s revenue over 23 years. These figures describe past results and are not a promise of your earnings. Your results will depend on your offer, audience and application of the teaching. This does not limit the investment-back guarantee stated above.</em></p>
        </div>
      </section>
    </main>
  );
}

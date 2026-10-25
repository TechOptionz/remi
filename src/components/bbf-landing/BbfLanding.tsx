// Build Beyond the Founder's sales page, shown at /products/build-beyond-the-founder in place of the generic bundle
// page (see app/products/[slug]/page.tsx). Follows the four-panel mockup: the hero beside the three at the table, "The
// business is growing" beside the desk, "Keep what makes your business good" with the five numbered rows beside their
// photos and the rust waitlist band (mockup two), the three programs as framed cards beside their photos (mockup
// three), Remi's note with its two figures beside the photo, who it is for / not for, the questions in three columns
// and the rust close with the waitlist form (mockup four). The deck's "Why work through them together?" and "Begin
// with one meaningful change", which the mockups leave out, sit where the deck places them. Copy and lists in
// content/bbf-landing.ts; styles styles/bbf-landing.css (.bbf-*).
import Link from 'next/link';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { BBF, BBF_OFFER, BBF_WAS, FAQ, PROGRAMS, RELEVANT, TOWARDS, type Program } from '@/content/bbf-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/bbf-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn({ light }: { light?: boolean }) {
  return <a href="#get" className={`bbf-btn${light ? ' bbf-btn--light' : ''}`}>Join the waitlist <span aria-hidden="true">→</span></a>;
}

/** The struck catalogue price beside the offer, as the deck prints it. */
function Price({ note }: { note: string }) {
  return (
    <p className="bbf-price">
      <span className="sr-only">Was </span><s>{BBF_WAS}</s> <span className="sr-only">now </span><strong>{BBF_OFFER}</strong> <span className="bbf-aud">AUD</span> <span className="bbf-price-note">· {note}</span>
    </p>
  );
}

/** The gold sprig drawn beside rules and in the rust band: a curved stem with outlined leaves. */
const LEAVES: [number, number, number][] = [[20, 98, -24], [30, 82, -112], [42, 66, -30], [52, 50, -120], [66, 36, -38], [78, 22, -128]];
function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg className={`bbf-sprig ${className}`} viewBox="0 0 110 110" aria-hidden="true">
      <path d="M4 108C26 82 54 46 100 8" />
      {LEAVES.map(([x, y, r], i) => <path key={i} d="M0 0C7-7 19-7 26 0C19 7 7 7 0 0Z" transform={`translate(${x} ${y}) rotate(${r})`} />)}
    </svg>
  );
}

/** The line icons beside each program's outcome (mockup three), and the play ring beside its contents. */
function OutcomeIcon({ name }: { name: Program['icon'] }) {
  return (
    <svg className="bbf-icon" viewBox="0 0 40 40" aria-hidden="true">
      {name === 'star' && <path d="M20 3l3 14 14 3-14 3-3 14-3-14-14-3 14-3z" />}
      {name === 'target' && <><circle cx="19" cy="21" r="14" /><circle cx="19" cy="21" r="9" /><circle cx="19" cy="21" r="4" /><path d="M19 21L34 6M29 6h5v5" /></>}
      {name === 'sprout' && <><path d="M20 36V18" /><path d="M20 22C20 12 12 8 5 9c0 8 6 13 15 13z" /><path d="M20 18c0-8 6-12 14-12 0 8-6 12-14 12z" /></>}
    </svg>
  );
}
function Play() {
  return <svg className="bbf-play" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14.5" /><path d="M13 10.5l8.5 5.5-8.5 5.5z" /></svg>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function BbfLanding() {
  return (
    <main className="bbf">
      {/* MOCKUP ONE — the hero beside the three at the table */}
      <section className="bbf-hero" aria-labelledby="bbf-title">
        <div className="bbf-hero-copy">
          <nav className="crumbs bbf-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{BBF.title}</span>
          </nav>
          <p className="bbf-eyebrow">Build Beyond the Founder</p>
          <p className="bbf-with">A self-paced collection with Remi Pearson</p>
          <h1 id="bbf-title" className="bbf-title">Build a business that gives you more freedom as it grows.</h1>
          <p className="bbf-lede">Make your expertise teachable, give others the confidence to take responsibility, and understand what your business needs next … without becoming the answer to every question.</p>
          <p>You’ve built something people want. Now you want it to work without so much of it depending on your personal involvement. Build Beyond the Founder brings together Technician to Entrepreneur, Core, Improve, Innovate and Trust That Holds to help you begin making that shift.</p>
          <Price note="Three self-paced programs" />
          <div className="bbf-buy"><Btn /></div>
          <p className="bbf-small">The collection is being created. Leave your details and I’ll let you know when it’s ready. No payment is taken.</p>
        </div>
        <Img name="bbf-hero" alt="Remi Pearson smiling across a table as she talks with two people" width={712} height={1015} className="bbf-hero-photo" eager />
      </section>

      <section className="bbf-growing" aria-labelledby="bbf-growing-h">
        <div className="bbf-growing-copy">
          <h2 id="bbf-growing-h" className="bbf-h2 bbf-h2--big">The business is growing. Your room to move isn’t.</h2>
          <p>You can be proud of what you’ve built and still wonder why its success keeps asking more of you. There are clients who want your expertise, people waiting for your decisions, and work that somehow finds its way back to you after you thought you’d handed it over.</p>
          <p>Perhaps you’ve hired good people. Perhaps you’ve documented processes. Yet you’re still the person who notices what’s missing, protects the standard and steps in when something gets difficult. Taking time away means either preparing for it exhaustively or knowing you’ll have work waiting when you return.</p>
          <p>That dependence deserves attention. As long as the knowledge, authority and judgement needed to run the business remain concentrated in you, growth can make your role harder to leave.</p>
          <p>This collection helps you see where that is happening and choose a practical place to change it.</p>
          <div className="bbf-sprig-rule"><Sprig /></div>
        </div>
        <Img name="bbf-desk" alt="" width={559} height={763} className="bbf-growing-photo" />
      </section>

      {/* MOCKUP TWO — more choice, the five rows */}
      <div className="bbf-wrap">
        <p className="bbf-crumb-label">Build Beyond the Founder <span aria-hidden="true">/</span> <em>More choice</em></p>
        <section className="bbf-keep" aria-labelledby="bbf-keep-h">
          <div>
            <h2 id="bbf-keep-h" className="bbf-h2 bbf-h2--big">Keep what makes your business good. <em>Help it become less dependent on you.</em></h2>
            <span className="bbf-short-rule" aria-hidden="true" />
            <p>You don’t have to disappear from the work you love. You might want to keep creating, stay close to certain clients, or spend more time thinking about where the business could go. The aim is to give you more choice about your involvement.</p>
          </div>
          <Img name="bbf-team" alt="Three colleagues talking around a laptop at a table" width={688} height={588} className="bbf-keep-photo" />
        </section>
        <p className="bbf-towards-intro">Through the programs and their exercises, you’ll work towards:</p>
        <ol className="bbf-rows">
          {TOWARDS.map((t, i) => (
            <li key={t.lead}>
              <div className="bbf-row-copy">
                <span className="bbf-num" aria-hidden="true">{pad(i + 1)}</span>
                <div>
                  <h3>{t.lead}</h3>
                  <p>{t.text}</p>
                </div>
              </div>
              <Img name={t.image} alt={t.alt} width={584} height={216} className="bbf-row-photo" />
            </li>
          ))}
        </ol>
      </div>

      <section className="bbf-band" aria-labelledby="bbf-band-h">
        <Sprig className="bbf-sprig--band" />
        <div className="bbf-wrap bbf-band-inner">
          <h2 id="bbf-band-h" className="bbf-h2">More capability in the business. More room for you.</h2>
          <div className="bbf-band-buy">
            <Price note="Three self-paced programs" />
            <Btn light />
          </div>
        </div>
      </section>

      {/* MOCKUP THREE — the collection: three framed cards */}
      <div className="bbf-wrap">
        <section className="bbf-section" aria-label="The three programs">
          <p className="bbf-crumb-label">Build Beyond the Founder <span aria-hidden="true">/</span> <em>The collection</em></p>
          <div className="bbf-programs">
            {PROGRAMS.map((p, i) => (
              <article key={p.name} className="bbf-program" aria-labelledby={`bbf-prog-${i}`}>
                <div className="bbf-program-copy">
                  <p className="bbf-program-name"><span>{pad(i + 1)}</span> / <Link className="bbf-program-link" href={p.href}>{p.name}</Link></p>
                  <h2 id={`bbf-prog-${i}`} className="bbf-h2">{p.kicker}</h2>
                  <p className="bbf-program-lede">{p.lede}</p>
                  {p.text.map(t => <p key={t}>{t}</p>)}
                  <div className="bbf-outcome">
                    <OutcomeIcon name={p.icon} />
                    <p><strong>What you get out of it:</strong> {p.gets}</p>
                  </div>
                  <p className="bbf-contents"><Play />{p.contents}</p>
                </div>
                <Img name={p.image} alt={p.alt} width={642} height={540} className="bbf-program-photo" />
              </article>
            ))}
          </div>
          <div className="bbf-buy bbf-center"><Btn /></div>
        </section>

        <section className="bbf-section bbf-rule" aria-labelledby="bbf-together-h">
          <h2 id="bbf-together-h" className="bbf-h2 bbf-h2--big">Why work through them together?</h2>
          <div className="bbf-cols">
            <p>A handover can look straightforward until you feel the urge to take the work back. An improvement project can sound sensible until you realise it’s consuming time that should be protecting your core business. Understanding your patterns becomes more useful when you have a real decision in front of you.</p>
            <p>These programs let you examine the same business challenge from different angles. Technician to Entrepreneur helps you work on dependence. Core, Improve, Innovate helps you decide where your effort belongs. T.R.U.S.T.M.E. helps you examine the thinking you bring to both.</p>
            <p>You can carry one challenge through the collection, applying each model to something that matters in your business now.</p>
          </div>
        </section>
      </div>

      {/* MOCKUP FOUR — Remi's note beside the photo */}
      <section className="bbf-remi" aria-labelledby="bbf-remi-h">
        <div className="bbf-remi-copy">
          <p className="bbf-crumb-label">Build Beyond the Founder <span aria-hidden="true">/</span> <em>Your next step</em></p>
          <h2 id="bbf-remi-h" className="bbf-h2 bbf-h2--big">Built from the experience of making the business bigger than my own role.</h2>
          <dl className="bbf-figures">
            <div><dt><span>$</span>200 million</dt><dd>Approximate revenue over 23 years</dd></div>
            <div><dt>2024</dt><dd>The year Remi sold the business</dd></div>
          </dl>
          <p>I founded The Coaching Institute and built a business that generated approximately $200 million in revenue over 23 years. Along the way, I had to learn how to make the work deliverable by people other than me.</p>
          <p>One of the important shifts was replacing myself as the talent. Other people took over trainings, classes and content delivery before I put management in place. That meant finding ways for what I knew to become something others could learn and deliver.</p>
          <p>I went on to sell the business in 2024. You may have no interest in selling yours, but creating value that can exist beyond your personal involvement gives you options. That is the experience behind this collection.</p>
          <img className="bbf-signature" src="/assets/bm-landing/bm-signature.webp" alt="" width={585} height={375} loading="lazy" decoding="async" />
          <p className="bbf-sign"><strong>Remi Pearson</strong><br />Founder, author and creator of the <Link href="/ideas-models/trustme-model">T.R.U.S.T.M.E. Model</Link></p>
        </div>
        <Img name="bbf-remi" alt="A woman presenting to a small group in a bright room, a laptop and notebooks on the table in front" width={634} height={900} className="bbf-remi-photo" />
      </section>

      <div className="bbf-wrap">
        <section className="bbf-section" aria-labelledby="bbf-fit-h">
          <h2 id="bbf-fit-h" className="bbf-h2 bbf-h2--big">Is this where you are?</h2>
          <div className="bbf-fit">
            <div>
              <h3 className="bbf-h3">For you if…</h3>
              <p>This collection is designed for business owners and experienced practitioners who already have work people want, and are ready to examine how that work gets delivered.</p>
              <p>It will be especially relevant if:</p>
              <ul className="bbf-ticks">{RELEVANT.map(t => <li key={t}>{t}</li>)}</ul>
              <p>You’ll get the most from it if you’re willing to apply the exercises to an actual responsibility, process or decision.</p>
            </div>
            <div className="bbf-fit-not">
              <h3 className="bbf-h3">Not the right fit if…</h3>
              <p>If you’re still looking for your first business idea, this collection is likely to be ahead of where you need to focus. It also won’t suit someone seeking individual consulting or a team to implement the changes for them. The programs guide your thinking and application; you bring the business and do the work.</p>
            </div>
          </div>
        </section>

        <section className="bbf-section bbf-rule" aria-labelledby="bbf-begin-h">
          <h2 id="bbf-begin-h" className="bbf-h2 bbf-h2--big">Begin with one meaningful change.</h2>
          <div className="bbf-cols">
            <p>You don’t need to redesign the whole business to make this useful. Start with something that currently depends too heavily on you.</p>
            <p>It might be a service only you can deliver, a decision nobody feels authorised to make, or a process you keep explaining. Work through the relevant lessons, use the exercises and test what changes when you make the knowledge and expectations clearer.</p>
            <p>The first useful result is being able to see what needs to happen next, who needs to be involved, and how you’ll know the responsibility is becoming less dependent on you.</p>
          </div>
        </section>

        <section className="bbf-section bbf-rule" aria-labelledby="bbf-faq-h">
          <h2 id="bbf-faq-h" className="bbf-h2 bbf-h2--big">A few questions you may have</h2>
          <dl className="bbf-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="bbf-close" aria-labelledby="bbf-close-h">
        <div className="bbf-close-copy">
          <h2 id="bbf-close-h" className="bbf-h2 bbf-h2--big">You’ve built something worth having. <span>Give yourself more choice in how you run it.</span></h2>
          <p>Begin making your expertise transferable, your priorities clearer and your business more capable of working beyond your personal involvement.</p>
          <p className="bbf-close-name"><strong>{BBF.title}</strong><br />Technician to Entrepreneur · Core, Improve, Innovate · Trust That Holds</p>
          <Price note="Self-paced collection" />
          <WaitlistForm product={BBF.title} segment={BBF.segment} prefix="bbf" thanks="Thank you. You’re on the waitlist, and I’ll let you know when the collection is ready." />
          <p className="bbf-small">Leave your name and email. I’ll let you know when it’s ready.<br />No payment today. No commitment to purchase.</p>
        </div>
        <Img name="bbf-close" alt="" width={501} height={579} className="bbf-close-photo" />
      </section>
    </main>
  );
}

// Disruptive Leadership's sales page (the free introductory program), shown at /products/disruptive-leadership in
// place of the generic product page (see app/products/[slug]/page.tsx). Follows the four-part mockup: the hero on the
// paper and the team across the window under it, "You've explained it" with its quoted thoughts, the five reasons as
// numbered rows beside their still lifes and the rust waitlist band (part two), what your team is noticing, what you'll
// explore as numbered rows with the Four Pillars table, the espresso band of what it costs (part three), Remi's note
// with its two figures and her signature, who it is for, the questions and the rust close with the waitlist form
// (part four). Copy and lists in content/dlp-landing.ts; styles styles/dlp-landing.css (.dlp-*).
import Link from 'next/link';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { COSTS, DLP, EXPLORE, FAMILIAR, FAQ, FOR_YOU, HERO_POINTS, NOTICING, PILLARS, PILLARS_QUESTION, REASONS, WILLING } from '@/content/dlp-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/dlp-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn({ light }: { light?: boolean }) {
  return <a href="#get" className={`dlp-btn${light ? ' dlp-btn--light' : ''}`}>Join the waitlist <span aria-hidden="true">→</span></a>;
}

function Dots({ items, className = '' }: { items: React.ReactNode[]; className?: string }) {
  return <ul className={`dlp-dots ${className}`}>{items.map((t, i) => <li key={i}>{t}</li>)}</ul>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function DlpLanding() {
  return (
    <main className="dlp">
      {/* PART ONE — the hero, the team, the quoted thoughts */}
      <section className="dlp-hero" aria-labelledby="dlp-title">
        <div className="dlp-wrap">
          <nav className="crumbs dlp-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{DLP.title}</span>
          </nav>
          <div className="dlp-hero-grid">
            <div>
              <p className="dlp-eyebrow">Free introductory program with Remi Pearson</p>
              <p className="dlp-kicker">Disruptive Leadership</p>
              <h1 id="dlp-title" className="dlp-title">Build a team that takes responsibility, so you can stop carrying everyone else’s.</h1>
            </div>
            <div>
              <p className="dlp-lede">When the same problems keep coming back to you, working harder becomes an expensive habit. Learn to recognise what keeps those problems in place and how your leadership can begin changing them.</p>
              <Dots items={HERO_POINTS} />
              <div className="dlp-buy"><Btn /></div>
              <p className="dlp-small">Free introductory program for business owners and team leaders.</p>
            </div>
          </div>
        </div>
      </section>
      <Img name="dlp-team" alt="Four colleagues in conversation around a low table, one woman explaining while the others listen" width={1536} height={580} className="dlp-team" eager />

      <div className="dlp-wrap">
        <section className="dlp-section" aria-labelledby="dlp-explained-h">
          <h2 id="dlp-explained-h" className="dlp-h2 dlp-h2--big">You’ve explained it. You’ve reminded them. Why are you still doing it yourself?</h2>
          <p className="dlp-lede">You care about the work, so you step in. You care about your people, so you give them another chance. But somewhere along the way, being supportive has turned into carrying responsibilities that belong to someone else.</p>
          <h3 className="dlp-h3">Does any of this sound familiar?</h3>
          <ul className="dlp-familiar">
            {FAMILIAR.map(f => <li key={f.lead}><strong>{f.lead}</strong> <span>{f.text}</span></li>)}
          </ul>
          <p className="dlp-statement">Disruptive Leadership gives you a way to examine these patterns and decide where your response needs to change.</p>
        </section>
      </div>

      {/* PART TWO — five reasons */}
      <section className="dlp-reasons" aria-labelledby="dlp-reasons-h">
        <div className="dlp-wrap">
          <p className="dlp-crumb-label">Disruptive Leadership <span aria-hidden="true">/</span> Why join</p>
          <h2 id="dlp-reasons-h" className="dlp-h2 dlp-h2--big">Five reasons to put yourself on this waitlist</h2>
        </div>
        <ol className="dlp-rows">
          {REASONS.map((r, i) => (
            <li key={r.name}>
              <div className="dlp-wrap dlp-row">
                <span className="dlp-num" aria-hidden="true">{pad(i + 1)}</span>
                <Img name={r.image} alt="" width={496} height={360} className="dlp-row-photo" />
                <div>
                  <h3 className="dlp-row-title">{r.name}</h3>
                  {r.text.map(t => <p key={t}>{t}</p>)}
                  <p className="dlp-list-label">{r.listLabel}</p>
                  <Dots items={r.list} />
                  {r.after && <p>{r.after}</p>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="dlp-band" aria-label="Join the waitlist">
        <div className="dlp-wrap dlp-band-inner">
          <p className="dlp-band-line">Clearer leadership starts with seeing the pattern.</p>
          <Btn light />
        </div>
      </section>

      {/* PART THREE — what your team is noticing, what you'll explore */}
      <div className="dlp-wrap">
        <section className="dlp-section dlp-noticing" aria-labelledby="dlp-learns-h">
          <div>
            <h2 id="dlp-learns-h" className="dlp-h2 dlp-h2--big">Your team learns from what happens here</h2>
            <p>Every business has unwritten rules. People discover them by watching what gets praised, what gets ignored and what happens when someone speaks up.</p>
            <p>Those experiences shape how people behave long after the meeting about values is over. Disruptive Leadership helps you see what your everyday decisions are teaching.</p>
          </div>
          <div className="dlp-panel">
            <p className="dlp-list-label">Your team is noticing:</p>
            <Dots items={NOTICING} />
          </div>
        </section>

        <section className="dlp-section dlp-rule" aria-labelledby="dlp-explore-h">
          <p className="dlp-crumb-label">Disruptive Leadership <span aria-hidden="true">/</span> Inside the program</p>
          <h2 id="dlp-explore-h" className="dlp-h2 dlp-h2--big">What you’ll explore</h2>
          <ol className="dlp-explore">
            {EXPLORE.map((e, i) => (
              <li key={e.name}>
                <span className="dlp-num" aria-hidden="true">{pad(i + 1)}</span>
                <div>
                  <h3 className="dlp-row-title">{e.name}</h3>
                  <p>{e.text}</p>
                  <p className="dlp-question"><strong>The practical question:</strong> <em>{e.question}</em></p>
                </div>
              </li>
            ))}
            <li>
              <span className="dlp-num" aria-hidden="true">{pad(EXPLORE.length + 1)}</span>
              <div>
                <h3 className="dlp-row-title">The Four Pillars of Business</h3>
                <p>Use Remi’s framework to consider the wider consequences of your decisions.</p>
                <table className="dlp-pillars">
                  <thead><tr><th scope="col">Pillar</th><th scope="col">What you’ll examine</th></tr></thead>
                  <tbody>{PILLARS.map(p => <tr key={p.name}><th scope="row">{p.name}</th><td>{p.text}</td></tr>)}</tbody>
                </table>
                <p className="dlp-question"><strong>The practical question:</strong> <em>{PILLARS_QUESTION}</em></p>
              </div>
            </li>
          </ol>
          <div className="dlp-buy"><Btn /></div>
        </section>
      </div>

      <section className="dlp-dark" aria-labelledby="dlp-cost-h">
        <div className="dlp-wrap dlp-cost">
          <div>
            <h2 id="dlp-cost-h" className="dlp-h2 dlp-h2--big">What does leaving it unchanged cost you?</h2>
            <p>The cost rarely appears as one obvious number. It accumulates in interrupted days, conversations you keep postponing and capable people becoming frustrated.</p>
            <p className="dlp-aside">You don’t have to tackle every issue at once. You do need a clearer understanding of where to begin.</p>
          </div>
          <Dots items={COSTS.map(c => <><strong>{c.lead}</strong> {c.text}</>)} className="dlp-dots--lg" />
        </div>
      </section>

      {/* PART FOUR — Remi, who it is for, the questions */}
      <div className="dlp-wrap">
        <section className="dlp-section" aria-labelledby="dlp-remi-h">
          <p className="dlp-crumb-label">Disruptive Leadership <span aria-hidden="true">/</span> Your next step</p>
          <h2 id="dlp-remi-h" className="dlp-h2 dlp-h2--big">Learn from the experience behind a $200 million business</h2>
          <div className="dlp-remi">
            <div>
              <h3 className="dlp-h3">Meet Remi Pearson</h3>
              <p>I founded The Coaching Institute and built a business that generated approximately <strong>$200 million in revenue over 23 years</strong>. Developing people and building teams were daily responsibilities, with consequences when I got them wrong.</p>
              <p>I’ve worked with talented people whose behaviour cost the team too much. I’ve watched new team members become confident contributors once they understood what was expected. I’ve also hired good people into roles that didn’t suit them and had to acknowledge my part in that decision.</p>
              <p>Disruptive Leadership draws on that experience and the thinking I developed while building the business.</p>
              <Dots items={[
                'Founder and former owner of The Coaching Institute.',
                <>A business that trained more than <strong>13,000 coaches</strong>.</>,
                <>Author of <Link href="/books/disruptive-leadership"><strong>Disruptive Leadership</strong></Link>.</>,
                <>Creator of the <Link href="/ideas-models/critical-alignment-model"><strong>Critical Alignment Model</strong></Link>.</>,
              ]} />
              <p>My aim is to help you see your business more clearly, question what you’ve come to accept and make more deliberate leadership decisions.</p>
              <div className="dlp-buy"><Btn /></div>
            </div>
            <div className="dlp-figures">
              <dl>
                <div><dt>$200M</dt><dd>Business revenue over 23 years</dd></div>
                <div><dt>13,000+</dt><dd>Coaches trained by the business</dd></div>
              </dl>
              <img className="dlp-signature" src="/assets/bm-landing/bm-signature.webp" alt="" width={585} height={375} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <section className="dlp-section dlp-rule" aria-labelledby="dlp-who-h">
          <h2 id="dlp-who-h" className="dlp-h2 dlp-h2--big">Who will get the most from this?</h2>
          <div className="dlp-who">
            <div>
              <h3 className="dlp-h3">This is for you if:</h3>
              <ul className="dlp-ticks">{FOR_YOU.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="dlp-who-right">
              <h3 className="dlp-h3">You’ll need to be willing to:</h3>
              <ul className="dlp-ticks">{WILLING.map(t => <li key={t}>{t}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="dlp-section dlp-rule" aria-labelledby="dlp-faq-h">
          <h2 id="dlp-faq-h" className="dlp-h2 dlp-h2--big">A few questions before you join</h2>
          <dl className="dlp-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="dlp-close" aria-labelledby="dlp-close-h">
        <div className="dlp-wrap">
          <h2 id="dlp-close-h" className="dlp-h2 dlp-h2--big">Give your team clearer leadership. <span>Give yourself room to lead.</span></h2>
          <p className="dlp-close-text">Start recognising the patterns behind the problems, the expectations that need to become explicit and the decisions that shape your culture every day.</p>
          <span className="dlp-short-rule" aria-hidden="true" />
          <p className="dlp-close-name">Join the waitlist for Disruptive Leadership.</p>
          <WaitlistForm product={`${DLP.title} (free introductory program)`} segment={DLP.segment} prefix="dlp" namePlaceholder="First name" thanks="Thank you. You’re on the waitlist, and you’ll hear as soon as the program opens." />
          <p className="dlp-caps">Free introductory program with Remi Pearson</p>
        </div>
      </section>
    </main>
  );
}

// Technician to Entrepreneur's sales page, shown at /products/from-practice-to-enterprise in place of the generic
// product page (see app/products/[slug]/page.tsx). Follows the four-part mockup: the hero with its ringed ticks beside
// the photo, the price strip and the charcoal "When everyone needs you" band (part one), Remi's story as a charcoal
// band with its three figures, the five reasons as numbered rows (part two), the six modules as framed cards (part
// three), the workbook ticks, who it is for and the questions, and the rust close with the waitlist form (part four).
// Copy and lists in content/tte-landing.ts; styles styles/tte-landing.css (.tte-*).
import Link from 'next/link';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { DEVELOP, FAQ, HERO_POINTS, INCLUDES, MODULES, PERHAPS, REASONS, RELEVANT, STORY_FIGURES, TTE, TTE_NAME } from '@/content/tte-landing';

/** Every button goes to the waitlist form in the closing band. */
function Btn({ outline }: { outline?: boolean }) {
  return <a href="#get" className={`tte-btn${outline ? ' tte-btn--outline' : ''}`}>Join the waitlist <span aria-hidden="true">→</span></a>;
}

function Ticks({ items, className = '' }: { items: React.ReactNode[]; className?: string }) {
  return (
    <ul className={`tte-ticks ${className}`}>
      {items.map((t, i) => (
        <li key={i}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" /><path d="M7.5 12.5l3 3 6-6.5" /></svg><span>{t}</span></li>
      ))}
    </ul>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');
const WORDS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

export default function TteLanding() {
  return (
    <main className="tte">
      {/* PART ONE — the hero, the price, everyone needs you */}
      <section className="tte-hero" aria-labelledby="tte-title">
        <div className="tte-hero-copy">
          <nav className="crumbs tte-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{TTE_NAME}</span>
          </nav>
          <p className="tte-eyebrow">{TTE_NAME}<br />With Remi Pearson</p>
          <h1 id="tte-title" className="tte-title">Your business should give you more freedom as it grows.</h1>
          <p className="tte-lede">Learn how to build a business that can deliver excellent work without you having to deliver it all.</p>
          <p>You’ve built something people value. You have customers, expertise and a reputation you’ve worked hard to earn. Yet the more successful the business becomes, the more people seem to need you.</p>
          <p><strong>Technician to Entrepreneur helps you begin changing that.</strong></p>
          <p>Learn how to make your expertise teachable, hand over responsibility with greater confidence and create more room for the work and life you want.</p>
          <Ticks items={HERO_POINTS.map(p => <strong key={p}>{p}</strong>)} />
        </div>
        <img className="tte-hero-photo" src="/assets/tte-landing/tte-hero.webp" alt="A business owner standing at the back of a bright training room, watching a colleague lead a session at the whiteboard" width={576} height={1086} fetchPriority="high" decoding="async" />
      </section>
      <section className="tte-price-strip" aria-label="Price">
        <div className="tte-wrap">
          <p className="tte-includes">Six self-paced video modules with Remi, supported by a practical workbook, worked examples and your own 90-day action plan.</p>
          <div className="tte-price-row">
            <p className="tte-price"><span>Investment …</span> {TTE.price}</p>
            <Btn />
          </div>
          <p className="tte-small"><em>Learn from Remi Pearson, founder of The Coaching Institute, which generated approximately $200 million in cumulative revenue during her ownership. Successfully exited in 2024.</em></p>
        </div>
      </section>

      <section className="tte-dark" aria-labelledby="tte-needs-h">
        <div className="tte-wrap tte-needs">
          <div>
            <h2 id="tte-needs-h" className="tte-h2 tte-h2--big">When everyone needs you, success can feel surprisingly restrictive.</h2>
            <p>A new customer is good news … until you look at your diary. Hiring someone should create capacity, yet you’re still explaining, checking and stepping in. A holiday sounds wonderful, provided you can get everything organised before you leave and remain available while you’re away.</p>
            <p>You may love your business. You may also be tired of how much of you it requires.</p>
          </div>
          <div>
            <p className="tte-subhead">Perhaps you’d like to:</p>
            <Ticks items={PERHAPS} />
            <span className="tte-short-rule" aria-hidden="true" />
            <p className="tte-aside">Those changes begin with making the business’s knowledge and capability available beyond you. This program helps you work out how, starting with a manageable part of your own business.</p>
          </div>
        </div>
      </section>

      {/* PART TWO — Remi's story, five reasons */}
      <section className="tte-dark tte-dark--story" aria-labelledby="tte-story-h">
        <div className="tte-wrap">
          <h2 id="tte-story-h" className="tte-h2 tte-h2--big">I know what it takes to replace yourself as the person everyone comes to see.</h2>
          <div className="tte-cols">
            <p>When I built The Coaching Institute, I was central to the trainings, classes and content delivery. People came to learn from me. I had built a guru model, and the business depended on my presence.</p>
            <p>The significant moment came when other people could run the trainings and deliver the content. <strong>I no longer had to be the talent at the front of the room for the business to deliver its value.</strong></p>
            <p>That happened before I put management in place.</p>
            <p>My expertise had become something others could learn and use. There were methodologies, curriculum, facilitator guides and standards. People had a way to develop the capability to carry the work.</p>
            <p>By 2014, I had stepped out of day-to-day management. I could choose where to contribute, with space to study, write books and make art. In 2024, I successfully exited the business.</p>
            <p>I want you to understand the thinking behind that transition and begin applying it to your own business. You may want to sell one day. You may simply want a Thursday that belongs to you. Either way, it helps to know what needs to change.</p>
          </div>
          <dl className="tte-figures">
            {STORY_FIGURES.map(f => <div key={f.figure}><dt>{f.figure}</dt><dd>{f.label}</dd></div>)}
          </dl>
          <img className="tte-signature" src="/assets/bm-landing/bm-signature.webp" alt="" width={585} height={375} loading="lazy" decoding="async" />
        </div>
      </section>

      <div className="tte-wrap">
        <section className="tte-section" aria-labelledby="tte-reasons-h">
          <h2 id="tte-reasons-h" className="tte-h2 tte-h2--big">Five reasons to begin</h2>
          <ol className="tte-reasons">
            {REASONS.map((r, i) => (
              <li key={r.name}>
                <span className="tte-num" aria-hidden="true">{pad(i + 1)}</span>
                <div><h3>{r.name}</h3><p>{r.text}</p></div>
              </li>
            ))}
          </ol>
          <div className="tte-buy tte-center"><Btn /></div>
        </section>

        {/* PART THREE — the six modules */}
        <section className="tte-section tte-rule" aria-labelledby="tte-modules-h">
          <p className="tte-label">{TTE_NAME}</p>
          <h2 id="tte-modules-h" className="tte-h2 tte-h2--big tte-center">What you’ll learn … and what it will help you change</h2>
          <ol className="tte-modules">
            {MODULES.map((m, i) => (
              <li key={m.lede}>
                <p className="tte-module-label">Module {WORDS[i]}</p>
                <div className="tte-module-head"><span className="tte-module-n" aria-hidden="true">{pad(i + 1)}</span><h3>{m.lede}</h3></div>
                {m.text.map(t => <p key={t}>{t}</p>)}
                <p className="tte-subhead">You’ll learn how to:</p>
                <ul className="tte-dots">{m.learn.map(t => <li key={t}>{t}</li>)}</ul>
                <p className="tte-takeaway"><strong>What you’ll take away:</strong> {m.takeaway}</p>
              </li>
            ))}
          </ol>
          <p className="tte-statement">Six modules designed to help you create more capability in the business and more choice in your life.</p>
          <div className="tte-center tte-buy"><p className="tte-price tte-price--sm"><span>Investment …</span> {TTE.price}</p><Btn /></div>
        </section>

        {/* PART FOUR — the workbook, who it is for, the questions */}
        <section className="tte-section tte-rule" aria-labelledby="tte-work-h">
          <h2 id="tte-work-h" className="tte-h2 tte-h2--big">Work on your business as you learn.</h2>
          <p>The workbook helps you turn each lesson into a decision, a handover or a practical piece of guidance.</p>
          <p className="tte-subhead">By completing the exercises, you’ll develop:</p>
          <Ticks items={DEVELOP.map(d => <><strong>{d.lead}</strong>{d.text}</>)} className="tte-ticks--grid" />
          <p className="tte-aside">Work through the videos at your own pace. Bring a real responsibility to the exercises and build your approach around it.</p>
        </section>

        <section className="tte-section tte-rule" aria-labelledby="tte-fit-h">
          <h2 id="tte-fit-h" className="tte-h2 tte-h2--big">Is this the next step for you?</h2>
          <div className="tte-fit">
            <div className="tte-fit-box">
              <p className="tte-fit-label">For you if…</p>
              <p className="tte-strong">Technician to Entrepreneur is for established business owners who want success to create more freedom.</p>
              <p>It is especially relevant if:</p>
              <Ticks items={RELEVANT} className="tte-ticks--filled" />
            </div>
            <div className="tte-fit-copy">
              <p>You don’t need a large team or a management structure to begin. You need a real business and a willingness to examine how the work could become less dependent on you.</p>
              <h3 className="tte-h3">What would you do with a business that needed less of your constant attention?</h3>
              <p>Perhaps you’d develop the idea you keep putting off. Teach only the sessions you love. Spend more time with people who matter to you. Take a break without organising your days around checking in.</p>
              <p>The practical beginnings may look modest: someone delivers a session well, a decision gets made without you, a recurring problem is handled through a process that works.</p>
              <p>Those changes matter because they give responsibility somewhere else to live. They are how a different working week begins to become possible.</p>
            </div>
          </div>
        </section>

        <section className="tte-section tte-rule" aria-labelledby="tte-faq-h">
          <h2 id="tte-faq-h" className="tte-h2 tte-h2--big">Your questions answered</h2>
          <dl className="tte-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="tte-close" aria-labelledby="tte-close-h">
        <div className="tte-wrap tte-close-inner">
          <div>
            <h2 id="tte-close-h" className="tte-h2 tte-h2--big">Make your next stage of success one you have more freedom to enjoy.</h2>
            <p>You’ve put considerable effort into becoming someone customers can rely on. Now you can begin building a business with more people, knowledge and capability they can rely on too.</p>
            <p className="tte-close-name">{TTE_NAME}<br /><span>With Remi Pearson</span></p>
            <p>Learn how to make your expertise transferable, develop greater ownership in your team and begin reducing the work that can only happen through you.</p>
          </div>
          <div>
            <p className="tte-subhead">Your program includes:</p>
            <Ticks items={INCLUDES} className="tte-ticks--light" />
            <p className="tte-price tte-price--light"><span>Investment …</span> {TTE.price}</p>
            <p className="tte-close-cta">Join the waitlist</p>
            <WaitlistForm product={TTE_NAME} segment={TTE.segment} prefix="tte" namePlaceholder="First name" thanks="Thank you. You’re on the waitlist, and you’ll hear as soon as Technician to Entrepreneur opens." />
          </div>
        </div>
      </section>
    </main>
  );
}

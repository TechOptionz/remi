// The Performance Management Blueprint's sales page, shown at /products/the-performance-management-blueprint in place
// of the generic product page (see app/products/[slug]/page.tsx). Follows the four-part mockup: the hero beside the
// leader at the table, "You've had the conversation" centred under it (part one), "Make it easier for people to
// succeed" with the team across the window and the numbered cards (part two), the four lessons in framed boxes with
// rust numerals and the rust band (part three), the workbook beside the conversation, who it is for, Remi's note on
// the charcoal band beside her signature, the questions and the rust close with the waitlist form (part four). Copy
// and lists in content/pmb-landing.ts; styles styles/pmb-landing.css (.pmb-*).
import Link from 'next/link';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { FAQ, LEARN, LESSONS, PMB } from '@/content/pmb-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/pmb-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn({ light }: { light?: boolean }) {
  return <a href="#get" className={`pmb-btn${light ? ' pmb-btn--light' : ''}`}>Join the waitlist</a>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function PmbLanding() {
  return (
    <main className="pmb">
      {/* PART ONE — the hero, the follow-up */}
      <section className="pmb-hero" aria-labelledby="pmb-title">
        <div className="pmb-hero-copy">
          <nav className="crumbs pmb-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{PMB.title}</span>
          </nav>
          <p className="pmb-eyebrow">The Performance Management Blueprint</p>
          <h1 id="pmb-title" className="pmb-title">Lead a team that takes responsibility <em>… without having to chase every result.</em></h1>
          <p className="pmb-lede">Learn how to make expectations clear, address performance gaps and give feedback people can act on, so you can spend less time repeating yourself and more time leading.</p>
          <p className="pmb-meta"><strong>A focused, self-paced program with Remi Pearson</strong><br />Four practical videos and an application workbook · <strong>{PMB.price}</strong> · Coming soon</p>
          <div className="pmb-buy"><Btn /></div>
          <p className="pmb-small">Be notified when the program opens. No payment required to join.</p>
        </div>
        <Img name="pmb-hero" alt="A smiling leader in a navy jacket talking with two colleagues across a table" width={748} height={891} className="pmb-hero-photo" eager />
      </section>

      <div className="pmb-wrap">
        <section className="pmb-section pmb-center" aria-labelledby="pmb-follow-h">
          <h2 id="pmb-follow-h" className="pmb-h2 pmb-h2--big">You’ve had the conversation. Why are you still having to follow up?</h2>
          <div className="pmb-intro">
            <p>You thought you were clear. They seemed to understand. Yet the deadline slips, the work comes back unfinished, or the same issue appears again. You find yourself explaining it differently, checking more often, perhaps quietly doing it yourself because that feels easier than another conversation.</p>
            <p>Over time, your capable people start carrying the gaps too. Frustration builds, expectations become uneven, and something that should belong to the team becomes another thing you have to hold in your head.</p>
            <p>Sometimes someone needs to take greater responsibility. Sometimes the standard was never clear enough, the process is getting in the way, or they haven’t developed the skill the work requires. Knowing the difference changes what you do next.</p>
          </div>
          <p className="pmb-statement">The Performance Management Blueprint helps you work out where the gap is and respond with a clear, practical next step.</p>
        </section>
      </div>

      {/* PART TWO — clarity that changes the work */}
      <section className="pmb-clarity" aria-labelledby="pmb-easier-h">
        <div className="pmb-wrap">
          <p className="pmb-label">Clarity that changes the work</p>
          <h2 id="pmb-easier-h" className="pmb-h2 pmb-h2--big">Make it easier for people to succeed, and clearer when something needs to change.</h2>
          <div className="pmb-cols">
            <p>Performance management begins well before a difficult conversation. It lives in what people understand about their role, the standards you establish and what happens when an agreement isn’t met.</p>
            <p>This program brings those everyday leadership decisions into focus. You’ll learn how to:</p>
          </div>
        </div>
        <Img name="pmb-team" alt="Two colleagues listening thoughtfully around a meeting table" width={1536} height={585} className="pmb-team" />
        <div className="pmb-wrap">
          <ol className="pmb-learn">
            {LEARN.map((l, i) => (
              <li key={l.lead}>
                <p className="pmb-learn-n"><span>{pad(i + 1)}</span></p>
                <h3>{l.lead}</h3>
                <p>{l.text}</p>
              </li>
            ))}
          </ol>
          <div className="pmb-buy"><Btn /></div>
          <p className="pmb-small">{PMB.price} when available · No payment required today</p>
        </div>
      </section>

      {/* PART THREE — the four lessons */}
      <div className="pmb-wrap">
        <section className="pmb-section" aria-labelledby="pmb-lessons-h">
          <p className="pmb-label">Four focused lessons</p>
          <h2 id="pmb-lessons-h" className="pmb-h2 pmb-h2--big">Four focused lessons you can bring straight into your next team conversation.</h2>
          <ol className="pmb-lessons">
            {LESSONS.map((l, i) => (
              <li key={l.name}>
                <span className="pmb-num" aria-hidden="true">{pad(i + 1)}</span>
                <div className="pmb-lesson-copy">
                  <h3 className="pmb-lesson-title">{l.name}</h3>
                  <p className="pmb-lesson-so">{l.so}</p>
                  {l.text.map(t => <p key={t}>{t}</p>)}
                  <p className="pmb-work"><em>Put it to work:</em> {l.work}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* PART FOUR — the workbook, who it is for, Remi, the questions, the close */}
      <section className="pmb-workbook" aria-labelledby="pmb-workbook-h">
        <div className="pmb-workbook-copy">
          <h2 id="pmb-workbook-h" className="pmb-h2 pmb-h2--big">Leave with your next conversation prepared.</h2>
          <span className="pmb-short-rule" aria-hidden="true" />
          <p>The accompanying workbook helps you apply the lessons to one real situation in your team. As you work through it, you’ll clarify the standard, examine the gap and prepare how you want to address it.</p>
          <p>By the end, you’ll have a written plan for the conversation and a way to capture the actions you agree on. You can return to the same process when another situation needs your attention.</p>
        </div>
        <Img name="pmb-talk" alt="A woman explaining something to a colleague across a desk with a laptop and an open notebook" width={741} height={759} className="pmb-workbook-photo" />
      </section>
      <section className="pmb-band" aria-label="Join the waitlist">
        <div className="pmb-wrap pmb-band-inner">
          <p className="pmb-band-line">Four short videos. One practical workbook. Room to apply what you learn.</p>
          <Btn light />
        </div>
      </section>

      <div className="pmb-wrap">
        <section className="pmb-section pmb-fit" aria-labelledby="pmb-for-h">
          <div>
            <h2 id="pmb-for-h" className="pmb-h2 pmb-h2--big">For leaders who care about people and expect good work.</h2>
            <p>This program is for you if you manage people and want to feel more capable of addressing performance clearly. You might be a business owner who keeps picking up unfinished work, a new manager unsure how direct to be, or an experienced leader who wants more consistency in how expectations are set and followed through.</p>
            <p>It will be especially useful if you recognise yourself in this thought: <em className="pmb-thought">“I don’t want to micromanage them, but I can’t keep letting this slide.”</em></p>
            <p>You’ll need to be willing to examine your own clarity and follow-through too. The work starts with the standard you help establish and the conversations you’re prepared to have.</p>
          </div>
          <div className="pmb-fit-not">
            <h3 className="pmb-h3">Who this won’t suit</h3>
            <p>If you want a script that makes people comply without discussion, this approach won’t fit. It also isn’t a comprehensive HR qualification or a formal disciplinary procedure. It is a focused introduction to the everyday leadership practices that support better performance.</p>
          </div>
        </section>
      </div>

      <section className="pmb-dark" aria-labelledby="pmb-remi-h">
        <div className="pmb-wrap pmb-remi">
          <img className="pmb-signature" src="/assets/bm-landing/bm-signature.webp" alt="" width={585} height={375} loading="lazy" decoding="async" />
          <div className="pmb-remi-copy">
            <h2 id="pmb-remi-h" className="pmb-h2 pmb-h2--big">Learn from someone who has carried the responsibility herself.</h2>
            <p>Remi Pearson founded The Coaching Institute and built a business that generated approximately <strong>$200 million in revenue over 23 years</strong>.</p>
            <p>Her experience includes developing teams, establishing standards and navigating the reality of growing a business where people’s decisions affect one another every day. Her teaching draws on that experience alongside her <Link href="/ideas-models/critical-alignment-model">Critical Alignment Model</Link> and <Link href="/ideas-models/disruptive-leadership">Disruptive Leadership</Link> work.</p>
            <p>The Performance Management Blueprint brings a focused part of that work into an accessible program you can use with your own team.</p>
          </div>
        </div>
      </section>

      <div className="pmb-wrap">
        <section className="pmb-section" aria-labelledby="pmb-faq-h">
          <h2 id="pmb-faq-h" className="pmb-h2 pmb-h2--big">A few things you might want to know.</h2>
          <span className="pmb-short-rule pmb-short-rule--wide" aria-hidden="true" />
          <dl className="pmb-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="pmb-close" aria-labelledby="pmb-close-h">
        <div className="pmb-close-copy">
          <h2 id="pmb-close-h" className="pmb-h2 pmb-h2--big">Make your next performance conversation one you’re prepared to have.</h2>
          <p>Imagine going into it knowing what you’ve observed, what good performance would look like and what you still need to understand. You can be direct about the gap while giving the other person room to contribute to the solution.</p>
          <p>That is what this program is designed to help you do.</p>
          <p className="pmb-close-name"><strong>{PMB.title}</strong><br />Four focused videos and an application workbook · <strong>{PMB.price}</strong></p>
          <p>Leave your first name and email address to hear when the program is ready.</p>
          <WaitlistForm product={PMB.title} segment={PMB.segment} prefix="pmb" namePlaceholder="First name" thanks="Thank you. You’re on the waitlist, and we’ll email you when enrolment opens." />
          <p className="pmb-small">No payment required. We’ll email you when enrolment opens.</p>
        </div>
        <Img name="pmb-desk" alt="" width={351} height={426} className="pmb-close-photo" />
      </section>
    </main>
  );
}

// Trust That Holds' sales page (the T.R.U.S.T.M.E. program), shown at /products/trust-that-holds in place of the
// generic product page (see app/products/[slug]/page.tsx). Follows the four-part mockup: the hero beside Remi in her
// pink jacket with the strip of figures, "What is it costing you" and the framed cards of what you'll work on (part
// one), the eleven videos in two columns and the burgundy band (part two), the self-assessment and workbook beside the
// woman writing, the burgundy question band and who it is for (part three), Remi, the participants' words, the
// questions and the burgundy close with the waitlist form (part four). The deck's "Understand what's happening",
// cost story and workbook table, which the mockups leave out, sit where the deck places them. Copy and lists in
// content/tth-landing.ts; styles styles/tth-landing.css (.tth-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { FAQ, GOOD_FIT, NOT_FOR, STRIP, TESTIMONIALS, TTH, VIDEOS, WORKBOOK, WORK_ON } from '@/content/tth-landing';

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="tth-btn">Join the waitlist <span aria-hidden="true">→</span></a>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function TthLanding() {
  return (
    <main className="tth">
      {/* PART ONE — the hero, the cost, what you'll work on */}
      <section className="tth-hero" aria-labelledby="tth-title">
        <div className="tth-hero-copy">
          <nav className="crumbs tth-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{TTH.title}</span>
          </nav>
          <p className="tth-eyebrow">Trust That Holds <span aria-hidden="true">/</span><br />The <Link href="/ideas-models/trustme-model" className="tth-eyebrow-link">T.R.U.S.T.M.E.</Link> program with Remi Pearson</p>
          <h1 id="tth-title" className="tth-title">Lead with your best thinking … especially when things stop going to plan.</h1>
          <p className="tth-lede">Understand why pressure pulls you back into old patterns, recognise what’s keeping you and your team stuck, and develop more useful ways to respond.</p>
          <p>You want people to take ownership. Then something goes wrong, and you take the decision back. You welcome honest feedback, until someone questions the thing you’ve worked hardest to build. You achieve the goal you thought would settle something inside you, only to find yourself chasing the next one.</p>
          <p>There is something worth understanding beneath those moments. T.R.U.S.T.M.E. helps you examine the thinking driving your response, see where its usefulness ends, and identify the capacity you need next.</p>
          <span className="tth-short-rule" aria-hidden="true" />
          <p className="tth-strong">Explore your patterns through a self-assessment. Learn with Remi across 11 videos. Apply the model to your own challenges in the accompanying workbook.</p>
          <p className="tth-meta"><strong>Advanced thinking,</strong> explained step by step. Self-paced. {TTH.price}.</p>
          <div className="tth-buy"><Btn /></div>
          <p className="tth-small">No payment required. Joining puts you on the invitation list, with no obligation to purchase.</p>
        </div>
        <img className="tth-hero-photo" src="/assets/ltl/ltl-hero.webp" alt="Remi Pearson in a pink jacket, smiling with one arm raised on stage" width={900} height={1092} fetchPriority="high" decoding="async" />
      </section>
      <ul className="tth-strip" aria-label="About Remi Pearson">
        {STRIP.map(s => <li key={s.figure}>{s.pre && <>{s.pre} </>}<strong>{s.figure}</strong> {s.label}</li>)}
      </ul>

      <div className="tth-wrap">
        <section className="tth-section" aria-labelledby="tth-cost-h">
          <h2 id="tth-cost-h" className="tth-h2 tth-h2--big">What is it costing you to keep responding the same way?</h2>
          <div className="tth-cols">
            <p>Perhaps your team brings every difficult decision back to you. You want more independence, yet you’re also the person who corrects their approach whenever it differs from yours. Over time, they learn to wait.</p>
            <p>Perhaps you keep introducing better processes, only to watch people work around them. Or you’re pursuing growth while avoiding the operational problems that growth keeps making bigger.</p>
            <p>These patterns consume time and attention. They can leave capable people frustrated, difficult conversations unfinished, and a business increasingly dependent on the person who most wants it to become independent.</p>
            <p>You may already know the behaviour you want to change. The harder question is why your existing response still feels so necessary in the moment.</p>
          </div>
          <p className="tth-statement">This program helps you investigate that question, so you can work on what is sustaining the pattern.</p>
        </section>

        <section className="tth-section tth-rule" aria-labelledby="tth-understand-h">
          <h2 id="tth-understand-h" className="tth-h2 tth-h2--big">Understand what’s happening before you decide what to do.</h2>
          <div className="tth-cols">
            <p>T.R.U.S.T.M.E. explores seven levels of thinking: Trust, Relatability, Uniqueness, Systems, Tenacity, Meaning and Evolution.</p>
            <p>Each offers capacities we need. Each also has limitations. The way of thinking that helped you find your voice may struggle when other people need a voice too. The structure that made your business reliable may eventually discourage the initiative you now need.</p>
          </div>
          <p>As you work through the model, you’ll learn to ask a more useful question of yourself and the people you lead:</p>
          <p className="tth-question">What is this situation asking of us that our current thinking isn’t providing?</p>
          <p>That question can change how you approach a performance conversation, a disagreement or a decision you’ve been avoiding.</p>
        </section>

        <section className="tth-section tth-section--top0" aria-labelledby="tth-work-h">
          <h2 id="tth-work-h" className="tth-h2 tth-h2--big">What you’ll be able to work on</h2>
          <ul className="tth-cards">
            {WORK_ON.map(w => (
              <li key={w.name}>
                <span className="tth-ring" aria-hidden="true"><Icon name={w.icon} size={30} strokeWidth={1.2} /></span>
                <h3>{w.name}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
          <div className="tth-buy tth-center"><Btn /></div>
        </section>
      </div>

      {/* PART TWO — the self-assessment, the eleven videos */}
      <section className="tth-assess" aria-labelledby="tth-assess-h">
        <div className="tth-assess-copy">
          <p className="tth-label">Make the learning personal</p>
          <h2 id="tth-assess-h" className="tth-h2 tth-h2--big">Know where to begin with yourself.</h2>
          <h3 className="tth-h3"><Icon name="search" size={26} strokeWidth={1.3} /> A self-assessment that makes the learning personal</h3>
          <p>It’s easy to recognise ourselves in a description we admire. Our actual responses can tell a more complicated story.</p>
          <p>The T.R.U.S.T.M.E. self-assessment will help you explore the thinking most evident in your answers, including what changes when you feel challenged or uncertain. You’ll use the lessons and workbook to compare those answers with real experiences.</p>
          <p>You might find that you’re decisive in business and highly accommodating in your family. You might see that you value independence until somebody else exercises it.</p>
          <p><strong>The benefit is a clearer development focus:</strong> what you already draw on, where you become less resourceful, and what you could begin practising.</p>
          <p className="tth-note"><Icon name="sprout" size={24} strokeWidth={1.3} /><span>This is a reflective educational assessment. Its purpose is to support enquiry, rather than assign you a permanent identity.</span></p>
        </div>
        <img className="tth-assess-photo" src="/assets/tth-landing/tth-writing.webp" alt="A woman writing in an open notebook at a table, her chin resting on her hand, a mug beside her" width={678} height={642} loading="lazy" decoding="async" />
      </section>

      <div className="tth-wrap">
        <section className="tth-section" aria-labelledby="tth-videos-h">
          <p className="tth-label tth-label--center">Trust That Holds <span aria-hidden="true">·</span> Learn with Remi</p>
          <h2 id="tth-videos-h" className="tth-h2 tth-h2--big tth-center">Eleven videos that help you see the pattern and work with it.</h2>
          <ol className="tth-videos">
            {VIDEOS.map((v, i) => (
              <li key={v.name}>
                <span className="tth-num" aria-hidden="true">{pad(i + 1)}</span>
                <div>
                  <h3><span className="sr-only">{i + 1} · </span>{v.name}<span className="tth-video-lede">{v.lede}</span></h3>
                  <p>{v.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="tth-band" aria-labelledby="tth-story-h">
        <div className="tth-wrap tth-story">
          <div>
            <h2 id="tth-story-h" className="tth-h2 tth-h2--big">More ambition cannot solve every business problem.</h2>
            <p>I once worked with a business carrying more than a million dollars a year in bad debt. Its leaders were focused on acquiring new customers and continuing to grow. They resisted the work of measurement and accountability because it felt restrictive.</p>
            <p>The ambition was there. So was the activity. The capacity to deal reliably with a growing problem was being rejected, and eventually the business failed.</p>
          </div>
          <div>
            <p>T.R.U.S.T.M.E. gives you a way to examine that kind of mismatch. You can begin asking whether the approach you’re most comfortable using is actually capable of addressing the problem in front of you.</p>
            <p className="tth-band-strong">That matters when the cost of repeating your preferred approach keeps increasing.</p>
          </div>
        </div>
      </section>

      {/* PART THREE — the workbook, who it is for */}
      <div className="tth-wrap">
        <section className="tth-section" aria-labelledby="tth-workbook-h">
          <h2 id="tth-workbook-h" className="tth-h2 tth-h2--big">Bring your own challenge into the workbook.</h2>
          <p className="tth-lede">Leave with a considered next step.</p>
          <p>The workbook guides you through applying the model to your own experience. You’ll choose a situation, examine your first interpretation and consider what another perspective makes visible.</p>
          <table className="tth-table">
            <thead><tr><th scope="col">What you’ll work with</th><th scope="col">What it helps you do</th></tr></thead>
            <tbody>{WORKBOOK.map(w => <tr key={w.item}><th scope="row">{w.item}</th><td>{w.does}</td></tr>)}</tbody>
          </table>
          <p>You can work through the lessons around your existing commitments. There are no scheduled classes to keep up with, and you have room to think between videos.</p>
          <div className="tth-buy"><Btn /></div>
        </section>
      </div>

      <section className="tth-band tth-band--quote" aria-label="The question at the heart of the program">
        <div className="tth-wrap"><p className="tth-band-quote">“What is this situation asking of us that our current thinking isn’t providing?”</p></div>
      </section>

      <div className="tth-wrap">
        <section className="tth-section" aria-labelledby="tth-fit-h">
          <h2 id="tth-fit-h" className="tth-h2 tth-h2--big">Is this the work you need right now?</h2>
          <div className="tth-fit">
            <div>
              <h3 className="tth-h3">This program is a good fit if…</h3>
              <ul className="tth-dots">{GOOD_FIT.map(g => <li key={g.lead}><strong>{g.lead}</strong> {g.text}</li>)}</ul>
              <p>You can begin without prior knowledge of the model. Bring curiosity and a situation you’re prepared to examine honestly.</p>
            </div>
            <div className="tth-fit-not">
              <h3 className="tth-h3">This program is unlikely to suit you if…</h3>
              <ul className="tth-dots">{NOT_FOR.map(t => <li key={t}>{t}</li>)}</ul>
              <p>The learning is self-paced. You’ll get more from it by reflecting and applying than by watching all the videos in one sitting.</p>
            </div>
          </div>
        </section>

        {/* PART FOUR — Remi, the offer, the questions */}
        <section className="tth-section tth-rule" aria-labelledby="tth-remi-h">
          <h2 id="tth-remi-h" className="tth-h2 tth-h2--big">Learn with Remi Pearson.</h2>
          <p className="tth-lede">Experience of building a business, and a willingness to question how we lead.</p>
          <div className="tth-cols">
            <p>Over 23 years, I built a business that generated approximately $200 million in revenue and trained more than 13,000 coaches. That involved decisions with consequences, people who saw things differently from me, and plenty of opportunities to examine my own thinking.</p>
            <p>I developed T.R.U.S.T.M.E. as a practical way to work with questions that kept appearing in leadership and human development. Why can someone explain a better approach and still struggle to use it? Why does a team repeat a pattern that everyone says they want to change? What needs to develop before a different response becomes available?</p>
          </div>
          <p>In this program, I’ll help you examine those questions in your own context. We’ll keep bringing the ideas back to what you do, what happens as a result, and what you could approach differently.</p>
          <h3 className="tth-h3">What people have said about learning with Remi</h3>
          <ul className="tth-quotes">
            {TESTIMONIALS.map(t => (
              <li key={t.name}><blockquote><p>“{t.quote}”</p></blockquote><p className="tth-quote-by">{t.name}</p></li>
            ))}
          </ul>
          <p className="tth-small tth-center"><em>Feedback from participants in Remi’s previous training.</em></p>
        </section>

        <section className="tth-section tth-rule tth-offer" aria-labelledby="tth-offer-h">
          <h2 id="tth-offer-h" className="tth-h2 tth-h2--big">A practical program for {TTH.price}.</h2>
          <p className="tth-lede">Learn to recognise the thinking shaping a challenge, understand its limits, and identify what to develop next.</p>
          <p className="tth-subhead">Your enrolment includes:</p>
          <ul className="tth-dots">
            <li><strong>11 videos with Remi</strong>, helping you understand each level and how the model works as a whole.</li>
            <li><strong>A reflective self-assessment</strong>, giving you a personal starting point for the learning.</li>
            <li><strong>An application workbook</strong>, helping you use the ideas in a real situation and plan your next step.</li>
          </ul>
          <div className="tth-buy"><Btn /></div>
          <p className="tth-small">No payment details required. You’ll receive an invitation when enrolment opens and can decide then whether to purchase.</p>
        </section>

        <section className="tth-section tth-rule" aria-labelledby="tth-faq-h">
          <h2 id="tth-faq-h" className="tth-h2 tth-h2--big">Before you decide</h2>
          <dl className="tth-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="tth-close" aria-labelledby="tth-close-h">
        <div className="tth-wrap tth-close-inner">
          <div>
            <h2 id="tth-close-h" className="tth-h2 tth-h2--big">What keeps happening when your best thinking is hardest to reach?</h2>
            <p>Start with that moment. The decision you take back. The disagreement you avoid. The target you reach without allowing yourself to feel satisfied.</p>
            <p>Understanding your response gives you something specific to work with. T.R.U.S.T.M.E. helps you examine it and consider what a more resourceful response would require.</p>
            <span className="tth-short-rule" aria-hidden="true" />
            <p className="tth-close-name">Trust That Holds<br /><span>The T.R.U.S.T.M.E. program with Remi Pearson</span></p>
            <p><strong>11 guided videos, a reflective assessment and an application workbook.</strong><br />Self-paced · {TTH.price}</p>
          </div>
          <div>
            <WaitlistForm product={TTH.title} segment={TTH.segment} prefix="tth" namePlaceholder="First name" thanks="Thank you. You’re on the list, and you’ll receive your invitation when enrolment opens." />
            <p className="tth-small">No payment today. Receive your invitation and decide from there.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// Holding Space for Magnetic Sales' sales page (the free introduction), shown at /products/holding-space-for-magnetic-
// sales in place of the generic product page (see app/products/[slug]/page.tsx). Follows the three-part mockup: the
// hero beside the two women in armchairs, "You've told them everything" with its ringed habits, the charcoal band of
// the principle (part one), what you'll practise beside the listening photo, the three lessons as numbered rows
// beside their photos and the framed workbook panel (part two), who it is for beside the conversation on the sofa,
// Remi's note beside the still life with her signature, the questions and the charcoal close with the waitlist form
// (part three). Copy and lists in content/hms-landing.ts; styles styles/hms-landing.css (.hms-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { productHref } from '@/content/products';
import { FAMILIAR, FAQ, HMS, LESSONS, NOT_FOR, PRACTISE, UI_SLUG, WORKBOOK } from '@/content/hms-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/hms-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="hms-btn">Join the waitlist</a>;
}

const UiLink = () => <Link href={productHref(UI_SLUG)}><strong>Ultimate Influence</strong></Link>;
const pad = (n: number) => String(n).padStart(2, '0');

export default function HmsLanding() {
  return (
    <main className="hms">
      {/* PART ONE — the hero, the habits, the principle */}
      <section className="hms-hero" aria-labelledby="hms-title">
        <div className="hms-hero-copy">
          <nav className="crumbs hms-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{HMS.title}</span>
          </nav>
          <p className="hms-eyebrow">Holding Space for Magnetic Sales</p>
          <p className="hms-with">A free introduction with Remi Pearson</p>
          <h1 id="hms-title" className="hms-title">Give your next client room to <em>want</em> what you offer.</h1>
          <p className="hms-lede">Learn to stop crowding the sales conversation, listen with intention and create the space for potential clients to move towards you.</p>
          <p>You believe in your work. You know it can help. Yet when someone enquires, you can find yourself explaining every detail, filling every pause and working harder than they are to keep the conversation moving.</p>
          <p>There is another way to be in that conversation. One where you can remain warm and confident, understand what matters to the person in front of you and give them room to discover their own reasons for wanting to work with you.</p>
          <p className="hms-strong">Three focused videos and a practical workbook, drawn from Remi Pearson’s Ultimate Influence methodology.</p>
          <p className="hms-caps">Free · Self-paced · Practical sales demonstrations</p>
          <div className="hms-buy"><Btn /></div>
        </div>
        <Img name="hms-hero" alt="Two women talking in armchairs beside a low table, one smiling with her chin on her hand" width={718} height={981} className="hms-hero-photo" eager />
      </section>

      <div className="hms-wrap">
        <section className="hms-section" aria-labelledby="hms-told-h">
          <h2 id="hms-told-h" className="hms-h2 hms-h2--big hms-center">You’ve told them everything. Have you left them room to buy?</h2>
          <div className="hms-intro">
            <p>Someone asks about your work, and you’re pleased they’re interested. You tell them about your approach, the support they’ll receive and everything you think they should know. When they hesitate, you offer another explanation.</p>
            <p>You might leave that conversation knowing you communicated the value of your work, yet barely knowing what the person wanted from it.</p>
          </div>
          <p className="hms-subhead hms-center">See if any of this feels familiar:</p>
          <ul className="hms-habits">
            {FAMILIAR.map(f => (
              <li key={f.lead}>
                <span className="hms-ring" aria-hidden="true"><Icon name={f.icon} size={24} strokeWidth={1.3} /></span>
                <p><strong>{f.lead}</strong>{f.text}</p>
              </li>
            ))}
          </ul>
          <p className="hms-statement">These are habits you can learn to notice and change. This free introduction gives you somewhere specific to begin.</p>
        </section>
      </div>

      <section className="hms-dark" aria-labelledby="hms-quote-h">
        <div className="hms-wrap hms-principle">
          <div>
            <h2 id="hms-quote-h" className="hms-quote">“Whoever fills the space is buying.”</h2>
            <p className="hms-quote-by">Remi Pearson</p>
          </div>
          <div className="hms-principle-copy">
            <p>There is an energetic space between you and a potential client. How you occupy that space changes the conversation.</p>
            <p>When you fill it with explanations, persuasion and reasons to say yes, you are doing the work of wanting the sale. You leave very little room for the other person to explore what they want or move towards you.</p>
            <p>I describe this through a simple principle: <strong>whoever fills the space is buying.</strong></p>
            <p>When you learn to hold that space, the potential client has room to contribute. They can tell you why something matters, ask the questions they need answered and consider how your work might fit their life.</p>
            <p>You remain present and involved. Your warmth, curiosity and ability to guide the conversation give them somewhere to step into.</p>
            <p className="hms-sign">— Remi Pearson</p>
            <div className="hms-buy"><Btn /></div>
          </div>
        </div>
      </section>

      {/* PART TWO — what you'll practise, the lessons, the workbook */}
      <section className="hms-split" aria-labelledby="hms-ease-h">
        <div className="hms-split-copy">
          <h2 id="hms-ease-h" className="hms-h2 hms-h2--big">Feel more at ease selling work you believe in.</h2>
          <p>Learn to bring your attention back to the person in front of you, even when you care deeply about the outcome.</p>
          <p className="hms-subhead">You’ll practise how to:</p>
          <ul className="hms-dots">{PRACTISE.map(p => <li key={p.lead}><strong>{p.lead}</strong>{p.text}</li>)}</ul>
        </div>
        <Img name="hms-listen" alt="A woman in a cream cardigan listening closely, her chin resting on her hand" width={696} height={594} className="hms-split-photo" />
      </section>

      <div className="hms-wrap">
        <section className="hms-section hms-rule" aria-labelledby="hms-lessons-h">
          <h2 id="hms-lessons-h" className="hms-h2 hms-h2--big">Three short lessons. Something useful to bring to your very next enquiry.</h2>
          <ol className="hms-lessons">
            {LESSONS.map((l, i) => (
              <li key={l.name}>
                <span className="hms-num" aria-hidden="true">{pad(i + 1)}</span>
                <div className="hms-lesson-copy">
                  <h3 className="hms-lesson-title">{l.name}</h3>
                  <p className="hms-lesson-lede">{l.lede}</p>
                  <p>{l.text}</p>
                  <p className="hms-subhead">You’ll learn to:</p>
                  <ul className="hms-dots">{l.learn.map(t => <li key={t}>{t}</li>)}</ul>
                  <p><strong>Your practical takeaway:</strong> {l.takeaway}</p>
                </div>
                <Img name={l.image} alt={l.alt} width={435} height={300} className="hms-lesson-photo" />
              </li>
            ))}
          </ol>
          <div className="hms-buy"><Btn /></div>
        </section>

        <section className="hms-workbook" aria-labelledby="hms-workbook-h">
          <div className="hms-workbook-copy">
            <h2 id="hms-workbook-h" className="hms-h2 hms-h2--big">A workbook you can keep beside you when you sell.</h2>
            <p>Use the six-page practice workbook to turn the teaching into something you can repeat.</p>
            <ul className="hms-dots">{WORKBOOK.map(w => <li key={w.lead}><strong>{w.lead}</strong> {w.text}</li>)}</ul>
          </div>
          <Img name="hms-workbook" alt="An open practice workbook with pages headed Prepare for your calls and Notice your habits, beside a pen and a cup of coffee" width={661} height={474} className="hms-workbook-photo" />
        </section>
      </div>

      {/* PART THREE — who it is for, Remi, the questions, the close */}
      <section className="hms-split hms-split--top" aria-labelledby="hms-for-h">
        <div className="hms-split-copy">
          <h2 id="hms-for-h" className="hms-h2 hms-h2--big">For people whose work is good, but whose sales conversations could feel better.</h2>
        </div>
        <Img name="hms-talk" alt="Two women in conversation on a sofa, one holding a tablet and smiling" width={718} height={585} className="hms-split-photo" />
      </section>
      <div className="hms-wrap">
        <section className="hms-section hms-section--top0 hms-fit" aria-label="Who this is for">
          <div>
            <h3 className="hms-h3">This introduction is for you if:</h3>
            <ul className="hms-dots">
              <li>You’re a <strong>coach, consultant, practitioner or service business owner</strong> who sells through conversation.</li>
              <li>You believe in your offer and want to communicate its relevance with more confidence.</li>
              <li>You’re warm and helpful, but sometimes leave enquiries feeling you gave everything and learned very little.</li>
              <li>You notice yourself talking more when you’re nervous.</li>
              <li>You want potential clients to participate more actively in the decision.</li>
              <li>You’re willing to practise listening, even when you already consider yourself a good listener.</li>
            </ul>
          </div>
          <div className="hms-fit-not">
            <h3 className="hms-h3">Who this won’t suit</h3>
            <p>This introduction won’t be the right fit if:</p>
            <ul className="hms-dots">
              <li>{NOT_FOR[0]}</li>
              <li>{NOT_FOR[1]}</li>
              <li>You want the complete eight-step sales methodology in this short introduction. That is covered in <UiLink />.</li>
              <li>{NOT_FOR[2]}</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="hms-remi" aria-labelledby="hms-remi-h">
        <Img name="hms-still" alt="" width={519} height={348} className="hms-remi-photo" />
        <div className="hms-remi-copy">
          <h2 id="hms-remi-h" className="hms-h2 hms-h2--big">Learn with someone who has sold, built and taught.</h2>
          <p>I began selling door-to-door before building The Coaching Institute into a business that turned over more than $200 million across twenty-three years. I exited in 2024.</p>
          <p>Along the way, I had to understand how to invite people into work I believed in, and how to teach others to have those conversations as the business grew. Ultimate Influence developed through that work.</p>
          <p>One of the most useful things I can share with you is how to recognise the space between you and a potential client, and notice what happens when you stop filling all of it yourself.</p>
          <p>In this free introduction, I’ll show you what that looks like and give you practical ways to begin using it.</p>
          <img className="hms-signature" src="/assets/bm-landing/bm-signature.webp" alt="Remi" width={585} height={375} loading="lazy" decoding="async" />
          <div className="hms-buy"><Btn /></div>
        </div>
      </section>

      <div className="hms-wrap">
        <section className="hms-section" aria-labelledby="hms-start-h">
          <h2 id="hms-start-h" className="hms-h2 hms-h2--big">A useful starting point for Ultimate Influence.</h2>
          <div className="hms-cols">
            <p>Holding Space for Magnetic Sales focuses on the quality of the conversation: how you show up, listen and leave room for someone to move towards your work.</p>
            <p>If you want to develop the whole conversation, <UiLink /> takes you through the eight-step consultative sales methodology. <strong>Understand Before You Prescribe</strong> focuses more closely on exploring what a buyer needs before recommending a solution.</p>
            <p>You can begin here and practise what you learn in your own business.</p>
          </div>
        </section>

        <section className="hms-section hms-rule" aria-labelledby="hms-faq-h">
          <h2 id="hms-faq-h" className="hms-h2 hms-h2--big">Questions you might have</h2>
          <dl className="hms-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="hms-dark hms-close" aria-labelledby="hms-close-h">
        <div className="hms-close-copy">
          <h2 id="hms-close-h" className="hms-h2 hms-h2--big">Make room for a different kind of sales conversation.</h2>
          <p>Think about your next enquiry. Someone has shown an interest in your work. You have an opportunity to understand what brought them to you, hear what they want and explore whether you can help.</p>
          <p>Learn to hold that conversation with enough confidence to leave them room.</p>
          <span className="hms-short-rule" aria-hidden="true" />
          <p className="hms-close-name">{HMS.title}</p>
          <p className="hms-close-line">Three focused videos and a six-page practice workbook with Remi Pearson.</p>
          <p className="hms-caps">Free · Self-paced · Drawn from Ultimate Influence</p>
          <WaitlistForm product={HMS.title} segment={HMS.segment} prefix="hms" thanks="Thank you. You’re on the waitlist, and you’ll receive an email when enrolment opens." />
          <p className="hms-small">Register your interest and receive an email when enrolment opens.</p>
        </div>
        <Img name="hms-close" alt="" width={726} height={429} className="hms-close-photo" />
      </section>
    </main>
  );
}

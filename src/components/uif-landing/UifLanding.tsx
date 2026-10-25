// Ultimate Influence Foundations' sales page, shown at /products/ultimate-influence-foundations (see
// app/products/[slug]/page.tsx). Follows the four-part mockup: the hero beside the two women in armchairs, "You know
// your work can help" beside the still life (part one), "Become someone who can hear what matters" beside the
// listening photo with its ringed icons, and the burgundy "Is this the right place for you?" band (part two), the six
// lessons in two columns and the burgundy workbook band (part three), Remi, the questions and the burgundy close over
// the desk with the waitlist form (part four). The deck's map section and "Enough structure to use", which the mockups
// leave out, sit where the deck places them. Copy and lists in content/uif-landing.ts; styles styles/uif-landing.css.
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { productHref } from '@/content/products';
import { FAQ, LEARN, LESSONS, UIF, UIF_PRICE, UIF_PRICE_INC_GST, UI_SLUG } from '@/content/uif-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/uif-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="uif-btn">Join the waitlist <span aria-hidden="true">→</span></a>;
}

function Price({ light }: { light?: boolean }) {
  return <p className={`uif-price${light ? ' uif-price--light' : ''}`}><strong>{UIF_PRICE} + GST</strong> <span>{UIF_PRICE_INC_GST} including GST</span></p>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function UifLanding() {
  return (
    <main className="uif">
      {/* PART ONE — the hero, the value that's hard to explain */}
      <section className="uif-hero" aria-labelledby="uif-title">
        <div className="uif-hero-copy">
          <nav className="crumbs uif-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{UIF.title}</span>
          </nav>
          <p className="uif-eyebrow">Ultimate Influence Foundations <span className="uif-with">With Remi Pearson</span></p>
          <h1 id="uif-title" className="uif-title">Help the right people see the value in working with you … and feel confident asking them to begin.</h1>
          <p className="uif-lede">Learn how to understand what your buyer really wants, lead a meaningful sales conversation and make a recommendation that feels relevant to them. An accessible introduction to the psychology, eight-step process and persuasive language behind <Link href={productHref(UI_SLUG)}>Ultimate Influence</Link>.</p>
          <span className="uif-short-rule" aria-hidden="true" />
          <Price />
          <p className="uif-meta">Six self-paced video lessons and a practical workbook.</p>
          <p className="uif-strong">Give your work the conversation it deserves.</p>
          <div className="uif-buy"><Btn /></div>
          <p className="uif-small">We’ll email you when we’re taking applications again. Joining the waitlist is free and carries no obligation to purchase.</p>
        </div>
        <Img name="uif-hero" alt="Two women talking in armchairs, one explaining with open hands while the other listens" width={758} height={1226} className="uif-hero-photo" eager />
      </section>

      <section className="uif-split" aria-labelledby="uif-value-h">
        <div className="uif-split-copy">
          <h2 id="uif-value-h" className="uif-h2 uif-h2--big">You know your work can help. So why is explaining its value sometimes the hardest part?</h2>
          <p>You can talk confidently about your expertise. You care about your clients, and you’ve put real thought into what you offer. Then someone asks about working with you, and something shifts. You start explaining everything they’ll receive, hoping that somewhere in the detail they’ll hear the reason to say yes.</p>
          <p>Perhaps the conversation feels warm and promising until you mention the investment. Perhaps you finish with “I’ll send you some information,” even though there was more you wanted to ask. Afterwards, you find yourself replaying it, wondering whether you said too much or never quite reached what mattered.</p>
          <p>There is a craft to these conversations. You can learn to recognise what someone is trying to change, explore why it matters to them and connect your recommendation to what they’ve actually told you. You can also learn to ask for a decision without losing the warmth that made the conversation worthwhile.</p>
          <p className="uif-strong">Ultimate Influence Foundations gives you somewhere practical to begin.</p>
        </div>
        <Img name="uif-still" alt="" width={544} height={502} className="uif-split-photo" />
      </section>

      {/* PART TWO — hear what matters, the map */}
      <div className="uif-wrap">
        <section className="uif-section uif-rule" aria-labelledby="uif-hear-h">
          <p className="uif-label">A more thoughtful way to sell</p>
          <h2 id="uif-hear-h" className="uif-h2 uif-h2--big">Become someone who can hear what matters … and knows what to do with it.</h2>
          <div className="uif-cols">
            <p>Imagine entering your next conversation with a sense of direction. You have questions worth asking and enough room to listen to the answers. When the person describes what they want, you know how to explore it beyond the first response.</p>
            <p>By the time you recommend something, you can explain why it fits. You can state the investment, pause and let them respond. Whatever their decision, you have a clearer understanding of the conversation you’ve just had.</p>
          </div>
          <div className="uif-learn-grid">
            <Img name="uif-listen" alt="A woman with her chin on her hand listening closely to someone across a table" width={831} height={740} className="uif-learn-photo" />
            <div>
              <p className="uif-subhead">Inside Foundations, you’ll begin learning how to:</p>
              <ul className="uif-learn">
                {LEARN.map(l => (
                  <li key={l.lead}>
                    <span className="uif-ring" aria-hidden="true"><Icon name={l.icon} size={24} strokeWidth={1.3} /></span>
                    <p><strong>{l.lead}</strong>{l.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="uif-section uif-rule" aria-labelledby="uif-map-h">
          <h2 id="uif-map-h" className="uif-h2 uif-h2--big">A map for the conversation, with room for the human being.</h2>
          <div className="uif-cols">
            <p>Ultimate Influence brings together the psychology of buying, an eight-step conversation process and language that helps people understand the relevance of your offer.</p>
            <p>The steps give you direction. The psychology helps you understand what you’re listening for. The language helps you communicate what you’ve understood.</p>
          </div>
          <p className="uif-statement">Throughout the program, you’ll follow one buyer example as the conversation develops. Alongside it, you’ll work on your own offer, building a conversation plan you can take into practice.</p>
        </section>
      </div>

      {/* PART THREE — the six lessons */}
      <div className="uif-wrap">
        <section className="uif-section uif-rule" aria-labelledby="uif-lessons-h">
          <p className="uif-label">Inside Ultimate Influence Foundations</p>
          <h2 id="uif-lessons-h" className="uif-h2 uif-h2--big">What you’ll learn … and where it will help.</h2>
          <ol className="uif-lessons">
            {LESSONS.map((l, i) => (
              <li key={l.name}>
                <span className="uif-num" aria-hidden="true">{pad(i + 1)}</span>
                <div>
                  <h3>{l.name}</h3>
                  <p>{l.text}{l.steps && <strong>{l.steps}</strong>}{l.after}</p>
                  <p className="uif-result">{l.result}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="uif-band" aria-labelledby="uif-enough-h">
        <div className="uif-wrap uif-band-inner">
          <div>
            <h2 id="uif-enough-h" className="uif-h2 uif-h2--big">Enough structure to use. A manageable place to start.</h2>
            <p>Your enrolment includes six focused video lessons, approximately 80 minutes in total, which you can pause and revisit at your own pace.</p>
            <p>Your accompanying workbook helps you turn the teaching into something you can use. It includes the eight-step reference map, buyer motivation exercises, language practice and space to prepare your recommendation. You’ll also have preparation and review sheets to return to as you practise.</p>
            <p>There are no scheduled classes to fit into your week. Work through a lesson, apply it to your offer and continue when you’re ready.</p>
          </div>
          <div className="uif-band-offer">
            <p className="uif-band-name">Ultimate Influence Foundations</p>
            <Price light />
            <p className="uif-band-line">Make your next sales conversation a more considered one.</p>
            <Btn />
            <p className="uif-small">Receive an email when we’re taking applications again.</p>
          </div>
        </div>
      </section>

      {/* PART FOUR — Remi, who it is for, the questions, the close */}
      <div className="uif-wrap">
        <section className="uif-section" aria-labelledby="uif-remi-h">
          <h2 id="uif-remi-h" className="uif-h2 uif-h2--big">Learn with someone who has spent decades having these conversations.</h2>
          <div className="uif-cols uif-cols--flow">
            <p>I’m Remi Pearson, founder and former owner of The Coaching Institute, a business that generated approximately $200 million in revenue over 23 years.</p>
            <p>My early experience of selling was walking into businesses with a bag of products and hoping someone would buy. I had enthusiasm and persistence. The understanding came later, through building my own practice, growing a business and teaching others how to have conversations that led somewhere.</p>
            <p>What began to change things was learning to understand people well enough to reflect their situation clearly. I became more interested in what they wanted, what mattered to them and the experience they were hoping to have. I also learned how much warmth and genuine attention could change the quality of a conversation.</p>
            <p>Ultimate Influence developed from that work. Foundations is where I introduce you to the approach and help you begin applying it to your own.</p>
          </div>
          <img className="uif-signature" src="/assets/bm-landing/bm-signature.webp" alt="Remi" width={585} height={375} loading="lazy" decoding="async" />
        </section>

        <section className="uif-section uif-rule" aria-labelledby="uif-fit-h">
          <h2 id="uif-fit-h" className="uif-h2 uif-h2--big">Is this the right place for you?</h2>
          <div className="uif-cols">
            <p>This program is designed for coaches, consultants, service providers and business owners who have an offer and want to become more capable in conversations with prospective clients.</p>
            <p>It is particularly relevant if you sell something people cannot hold in their hands, find yourself over-explaining its value, or feel comfortable helping people until the conversation turns towards buying.</p>
            <p>You’ll get the most from it if you’re willing to bring a real offer to the exercises and practise what you learn. You can be experienced in your profession and still benefit from an introduction to this way of selling.</p>
            <p>If you’re looking for advanced sales mastery, personalised feedback or stage-presentation training, those require more depth than this Foundations program provides. And if you want lines to recite regardless of what the buyer says, you’ll find this approach asks much more of your attention.</p>
          </div>
        </section>

        <section className="uif-section uif-rule" aria-labelledby="uif-faq-h">
          <h2 id="uif-faq-h" className="uif-h2 uif-h2--big">A few things you may be wondering.</h2>
          <dl className="uif-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="uif-close" aria-labelledby="uif-close-h">
        <Img name="uif-desk" alt="" width={896} height={417} className="uif-close-photo" />
        <div className="uif-wrap uif-close-inner">
          <div>
            <h2 id="uif-close-h" className="uif-h2 uif-h2--big">How much longer do you want the value of your work to be the thing you struggle to explain?</h2>
            <p>There may be people who would benefit enormously from what you do, but need a better conversation to understand whether it is right for them. Learning to have that conversation is a skill you can bring to your business for years.</p>
            <p>You’ve already invested in becoming good at your work. Give yourself the opportunity to become more capable at communicating its value, too. To listen with greater understanding, make a thoughtful recommendation and ask someone to begin without wishing you could hand that part to somebody else.</p>
            <p>Your next prospective client will bring their own hopes and questions. You can begin preparing to meet them with more skill.</p>
          </div>
          <div className="uif-close-offer">
            <p className="uif-band-name">Ultimate Influence Foundations with Remi Pearson</p>
            <p className="uif-close-line">Six self-paced lessons and a practical workbook.</p>
            <Price light />
            <p>Join the waitlist and we’ll let you know when we’re taking applications again.</p>
            <WaitlistForm product={UIF.title} segment={UIF.segment} prefix="uif" namePlaceholder="First name" thanks="Thank you. You’re on the waitlist, and we’ll let you know when we’re taking applications again." />
          </div>
        </div>
      </section>
    </main>
  );
}

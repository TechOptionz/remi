// Benchmarking's sales page, shown at /products/benchmarking-what-good-actually-looks-like in place of the generic
// product page (see app/products/[slug]/page.tsx). Follows the one-page mockup: the hero beside the two women at the
// table and the credentials strip under it, "I thought that was obvious" in two columns, the charcoal lead / lag band,
// the gold numerals of what you'll learn, the framed lesson boxes on the tinted band, the workbook beside its copy,
// Remi's note beside her signature and the rust close with the waitlist form. The deck's "What this looks like in
// practice" and "For the owner or leader…" sections, which the mockup leaves out, sit where the deck places them.
// Copy and lists in content/bm-landing.ts; styles styles/bm-landing.css (.bml-*).
import Link from 'next/link';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { BM, BM_NAME, BM_PRICE, LEARN, LESSONS, STRIP } from '@/content/bm-landing';
import { productHref } from '@/content/products';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/bm-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="bml-btn">Join the waitlist</a>;
}

/** The gold sprig beside the close: a curved stem with outlined leaves either side. */
const LEAVES: [number, number, number][] = [[24, 150, -28], [34, 128, -118], [46, 106, -34], [56, 84, -124], [70, 64, -40], [80, 44, -130], [96, 26, -48]];
function Sprig() {
  return (
    <svg className="bml-sprig" viewBox="0 0 130 180" aria-hidden="true">
      <path d="M6 176C30 140 60 90 116 12" />
      {LEAVES.map(([x, y, r], i) => (
        <path key={i} d="M0 0C9-9 25-9 34 0C25 9 9 9 0 0ZM0 0H30" transform={`translate(${x} ${y}) rotate(${r})`} />
      ))}
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function BmLanding() {
  return (
    <main className="bml">
      <section className="bml-hero" aria-labelledby="bml-title">
        <div className="bml-hero-copy">
          <nav className="crumbs bml-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{BM.title}</span>
          </nav>
          <p className="bml-eyebrow">Benchmarking <span aria-hidden="true">•</span> Business &amp; leadership</p>
          <h1 id="bml-title" className="bml-title">What good actually looks like.</h1>
          <p className="bml-question">How can your team meet a standard that only exists in your head?</p>
          <p>You know when something has been done well. You also know when it hasn’t, which is often when you find yourself stepping back in, explaining it again or fixing it yourself. Somewhere between what you expected and what someone else understood, the standard went missing.</p>
          <p>Learn how to make that standard clear, measure the work that contributes to better results, and give your team something more useful than “we need to do better”.</p>
          <p className="bml-meta"><strong>A practical program with Remi Pearson</strong><br />{BM_PRICE} · Short video lessons and an implementation workbook</p>
          <div className="bml-buy"><Btn /></div>
        </div>
        <Img name="bm-hero" alt="Two women at a table reviewing printed pages together, with notebooks, a coffee cup and a laptop" width={728} height={716} className="bml-hero-photo" eager />
      </section>
      <ul className="bml-strip" aria-label="About Remi Pearson">
        {STRIP.map(s => <li key={s}>{s}</li>)}
      </ul>

      <div className="bml-wrap">
        <section className="bml-section" aria-labelledby="bml-obvious-h">
          <h2 id="bml-obvious-h" className="bml-h2 bml-h2--big">“I thought that was obvious” is an expensive way to run a business.</h2>
          <div className="bml-split">
            <div>
              <p>An enquiry gets answered, but the customer’s question remains unresolved. A task gets marked complete, but you wouldn’t send it to a client. Everyone has been busy all week, yet the work that would move the business forward is still waiting.</p>
              <p>People can be working hard and working to entirely different definitions of success. When expectations remain implicit, you become the person who interprets them, checks them and repeatedly explains what you meant.</p>
            </div>
            <p className="bml-split-side">Benchmarking gives you a way to decide, in advance, what a good result looks like and what needs to happen along the way. It makes expectations usable.</p>
          </div>
        </section>
      </div>

      <section className="bml-dark" aria-labelledby="bml-measures-h">
        <div className="bml-wrap">
          <h2 id="bml-measures-h" className="bml-h2 bml-center">Know what to improve while you can still influence the result.</h2>
          <div className="bml-measures">
            <div>
              <h3 className="bml-label">Lag measures</h3>
              <p>Revenue, sales and customer retention tell you something important about what has happened. These are lag measures. By the time you review them, the work that produced them has already taken place.</p>
            </div>
            <div>
              <h3 className="bml-label">Lead measures</h3>
              <p>Lead measures focus your attention on actions you can influence now that are expected to contribute to the outcome. You can see whether those actions are happening, examine their quality and test whether they are making a difference.</p>
            </div>
          </div>
          <p className="bml-measures-foot">Combined with clear benchmarks, this gives you a more useful conversation than “Why didn’t we hit the target?” You can examine where the process broke down and decide what to change.</p>
        </div>
      </section>

      <div className="bml-wrap">
        <section className="bml-section" aria-labelledby="bml-learn-h">
          <h2 id="bml-learn-h" className="bml-h2 bml-h2--big">Turn your expectations into something people can work with.</h2>
          <p>Through this program, you’ll learn how to:</p>
          <ol className="bml-learn">
            {LEARN.map((l, i) => (
              <li key={l.lead}>
                <span className="bml-num" aria-hidden="true">{pad(i + 1)}</span>
                <h3>{l.lead}</h3>
                <p>{l.text}</p>
              </li>
            ))}
          </ol>
          <p className="bml-note">You can apply the method to your own work, a team workflow or an area of the business that keeps coming back to you.</p>
        </section>

        <section className="bml-section bml-rule" aria-labelledby="bml-practice-h">
          <h2 id="bml-practice-h" className="bml-h2">What this looks like in practice</h2>
          <div className="bml-cols">
            <p>Consider customer enquiries. “Deliver excellent service” leaves a great deal open to interpretation. “Reply within 24 hours” is clearer, but speed alone doesn’t tell you whether the response helped.</p>
            <p>Your benchmark can define both. What must a useful reply include? Who owns the next step? Where is follow-up recorded? What happens when the enquiry needs someone else’s input?</p>
            <p>You can then monitor whether the agreed actions are happening and review the resulting customer experience. If the team meets the response-time standard but customers keep contacting you about unresolved questions, you have something specific to investigate.</p>
            <p>The same thinking applies to sales follow-up, client onboarding and the work you are trying to delegate. You begin with a real outcome and make the practices behind it visible.</p>
          </div>
        </section>
      </div>

      <section className="bml-tint" aria-labelledby="bml-lessons-h">
        <div className="bml-wrap">
          <p className="bml-label">Inside the program</p>
          <h2 id="bml-lessons-h" className="bml-h2 bml-h2--big">Four focused video lessons</h2>
          <ol className="bml-lessons">
            {LESSONS.map((l, i) => (
              <li key={l.name}>
                <h3><span>{i + 1}.</span> {l.name}</h3>
                <p>{l.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bml-workbook" aria-labelledby="bml-workbook-h">
        <Img name="bm-workbook" alt="The Benchmarking workbook, with a rust spine and a gold sprig on its cover, beside a vase of leaves" width={684} height={596} className="bml-workbook-photo" />
        <div className="bml-workbook-copy">
          <h2 id="bml-workbook-h" className="bml-h2 bml-h2--big">Your implementation workbook</h2>
          <p>Work through your chosen outcome, your current standard and the gap you want to close. Define the process and outcome benchmarks, select useful measures, and establish who will review them and when.</p>
          <p className="bml-workbook-foot">You’ll have a working document to use in your business and revisit as you learn what produces better results.</p>
        </div>
      </section>

      <div className="bml-wrap">
        <section className="bml-section bml-remi" aria-labelledby="bml-remi-h">
          <div>
            <h2 id="bml-remi-h" className="bml-h2 bml-h2--big">Learn from someone who used this thinking to build her business.</h2>
            <p>Remi Pearson founded The Coaching Institute and built a business that generated approximately $200 million in revenue over 23 years.</p>
            <p>Benchmarking informed the everyday work behind that growth, from customer support and sales processes to website testing. Her approach also recognises that a successful method elsewhere may clash with your values. When the sales approaches she studied didn’t fit the way she wanted to serve people, she developed <Link href={productHref('ultimate-influence-consultative-sales-introduction')}>Ultimate Influence</Link>.</p>
            <p>This program brings that practical judgement to your business: learn from excellence, test what fits, and make the standards that matter clear enough to use.</p>
          </div>
          <Img name="bm-signature" alt="" width={585} height={375} className="bml-signature" />
        </section>

        <section className="bml-section bml-rule" aria-labelledby="bml-for-h">
          <h2 id="bml-for-h" className="bml-h2">For the owner or leader who keeps thinking, “Why am I explaining this again?”</h2>
          <div className="bml-cols bml-cols--3">
            <p>This program is for you if work comes back for correction, delegation still requires constant checking, or your team tracks results without a clear understanding of the actions that influence them.</p>
            <p>It is equally useful when you work alone. Clear benchmarks give you a way to evaluate your own work beyond how busy you’ve been or how you feel about the week.</p>
            <p>Choose one area, work through the lessons and use the workbook to make your expectations explicit.</p>
          </div>
          <div className="bml-buy"><Btn /></div>
        </section>
      </div>

      <section id="get" className="bml-close" aria-labelledby="bml-close-h">
        <Sprig />
        <div className="bml-wrap bml-close-inner">
          <div>
            <h2 id="bml-close-h" className="bml-h2">Give your team a clearer standard to work towards.</h2>
            <p>Start with one recurring frustration. Define what a good outcome looks like, make the process visible and decide how you’ll know whether it is improving.</p>
            <p className="bml-close-name">{BM_NAME}<br />{BM_PRICE} · Four video lessons and an implementation workbook</p>
          </div>
          <div>
            <WaitlistForm product={BM_NAME} segment={BM.segment} prefix="bml" namePlaceholder="First name" thanks="Thank you. You’re on the waitlist, and you’ll hear as soon as the program opens." />
            <p className="bml-small">Leave your name and email to hear when the program opens.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

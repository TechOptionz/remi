// Come Back to Yourself's sales page, shown at /products/come-back-to-yourself in place of the generic bundle page
// (see app/products/[slug]/page.tsx). Follows the four-panel mockup (read TWO, ONE, THREE, FOUR): the hero beside the
// woman at the window, "You're managing everybody's experience" beside the vase with its ringed moments, "What could
// change" with its ringed icons beside the two friends, the first two programs as cards, the other three as rows
// beside their photos, the espresso waitlist band, who it is for / not for, the note from Remi, the bundle table on
// the espresso panel beside the woman with her mug, the questions and the close between the olive branch and the
// hills, with the waitlist form. The deck's "Why learn these together?" and "Learn at a pace that lets you use it",
// which the mockups leave out, sit where the deck places them. Copy and lists in content/cby-landing.ts; styles
// styles/cby-landing.css (.cby-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { productHref } from '@/content/products';
import { BUNDLE_ROWS, CBY, COMBINED, FAQ, FOR_YOU, MOMENTS, NOT_FOR, PACE, PROGRAMS, PROGRAM_INCLUDES, SAVING, WAYS, type Program } from '@/content/cby-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/cby-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="cby-btn">Join the waitlist <span aria-hidden="true">→</span></a>;
}

function Ring({ icon }: { icon: React.ComponentProps<typeof Icon>['name'] }) {
  return <span className="cby-ring" aria-hidden="true"><Icon name={icon} size={24} strokeWidth={1.3} /></span>;
}

/** The sprig between the gold rules. */
function SprigRule() {
  return (
    <div className="cby-sprig-rule" aria-hidden="true">
      <svg viewBox="0 0 40 24"><path d="M4 20C14 14 24 9 36 4" /><path d="M12 15c1-5 5-7 8-7-1 4-4 7-8 7zM20 11c1-5 5-7 9-7-1 4-5 7-9 7zM14 15c4-1 8 0 10 3-4 1-8 0-10-3z" /></svg>
    </div>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

function ProgramBody({ p, i }: { p: Program; i: number }) {
  return (
    <>
      <p className="cby-prog-num"><span>{pad(i + 1)}</span></p>
      <h3 className="cby-prog-name"><Link className="cby-prog-link" href={productHref(p.slug)}>{p.name}</Link></h3>
      <p className="cby-prog-lede">{p.lede}</p>
      <p>{p.intro}</p>
      <p className="cby-prog-includes">{PROGRAM_INCLUDES[p.slug]}</p>
      <p className="cby-prog-explore">You’ll explore:</p>
      <ul className="cby-dots">{p.explore.map(e => <li key={e.lead}><strong>{e.lead}</strong>{e.text}</li>)}</ul>
      <p>{p.after}</p>
      <p className="cby-prog-price">{p.price}</p>
    </>
  );
}

export default function CbyLanding() {
  return (
    <main className="cby">
      {/* MOCKUP TWO — the hero beside the woman at the window */}
      <section className="cby-hero" aria-labelledby="cby-title">
        <div className="cby-hero-copy">
          <nav className="crumbs cby-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{CBY.title}</span>
          </nav>
          <p className="cby-eyebrow">Come Back to Yourself <span className="cby-with">With Remi Pearson</span></p>
          <h1 id="cby-title" className="cby-title">You can care about other people without leaving yourself behind.</h1>
          <p className="cby-lede">Understand your patterns, take your needs seriously and learn to stay with yourself when things get difficult.</p>
          <p>You know what you want to say. Then someone looks disappointed, and you hear yourself agreeing. You promise you’ll handle the next conversation differently, but when it arrives, the familiar response takes over. Afterwards, you can explain exactly what happened … which makes doing it again all the more frustrating.</p>
          <p><strong>Come Back to Yourself brings together five self-paced programs to help you understand those moments and practise responding differently.</strong> Explore the relationship between your emotions, needs and boundaries, discover what your protective patterns may be doing for you, and develop ways to remain present when you would usually push harder, go quiet or disconnect.</p>
          <span className="cby-short-rule" aria-hidden="true" />
          <p className="cby-price"><strong>{CBY.price} · Five programs with Remi · Learn at your own pace</strong></p>
          <p className="cby-save">Purchased separately: {COMBINED}. Save {SAVING}.</p>
          <div className="cby-buy"><Btn /></div>
          <p className="cby-small">We’ll let you know when we’re taking applications again.</p>
        </div>
        <Img name="cby-hero" alt="A woman with a mug sitting by a window, her chin on her hand, gazing out" width={648} height={1068} className="cby-hero-photo" eager />
      </section>

      <section className="cby-managing" aria-labelledby="cby-managing-h">
        <Img name="cby-vase" alt="" width={352} height={1050} className="cby-managing-photo" />
        <div className="cby-managing-copy">
          <h2 id="cby-managing-h" className="cby-h2 cby-h2--big">You’re managing everybody’s experience. Is there room for yours?</h2>
          <div className="cby-cols">
            <p>Perhaps you’re the capable one. People turn to you because you’re thoughtful, reliable and good at making things work. You can see several sides of a situation, understand why someone behaves as they do and find a reasonable explanation for almost anything.</p>
            <p>But understanding other people can become a way of overlooking yourself. You explain away your disappointment. You put off asking for what you need. You keep being accommodating until resentment starts saying what you haven’t.</p>
            <p>Or your experience goes in another direction. When something matters, you need to resolve it immediately. You keep explaining, defending or pushing for an answer, even as the conversation becomes harder.</p>
          </div>
          <p className="cby-subhead">You might recognise some of these moments:</p>
          <ul className="cby-moments">
            {MOMENTS.map(m => <li key={m.text}><Ring icon={m.icon} /><span>{m.text}</span></li>)}
          </ul>
          <span className="cby-short-rule cby-short-rule--c" aria-hidden="true" />
          <p className="cby-statement">These are useful places to begin. Each gives you something specific to explore, beyond another promise to “do better next time”.</p>
        </div>
      </section>

      {/* MOCKUP ONE — what could change, the first two programs */}
      <section className="cby-change" aria-labelledby="cby-change-h">
        <div className="cby-change-copy">
          <h2 id="cby-change-h" className="cby-h2 cby-h2--big">What could change if you included yourself?</h2>
          <p>A clearer relationship with yourself can affect ordinary decisions. Whether you agree to the favour. How you respond to criticism. Whether you acknowledge that something hurt, or spend the evening trying to convince yourself it shouldn’t have.</p>
          <p>Across this bundle, you’ll learn and practise ways to:</p>
          <ul className="cby-ways">
            {WAYS.map(w => (
              <li key={w.lead}><Ring icon={w.icon} /><h3>{w.lead}</h3><p>{w.text}</p></li>
            ))}
          </ul>
          <div className="cby-buy"><Btn /></div>
        </div>
        <Img name="cby-friends" alt="Two women laughing together on a sofa, mugs in hand" width={687} height={795} className="cby-change-photo" />
      </section>

      <div className="cby-wrap">
        <SprigRule />
        <section className="cby-section cby-section--top0" aria-labelledby="cby-five-h">
          <h2 id="cby-five-h" className="cby-h2 cby-h2--big cby-center">Five programs that help you bring the pieces together.</h2>
          <div className="cby-intro">
            <p>You may need a framework for understanding your needs. You may already know what you need, but struggle to say it when emotions rise. Sometimes the first useful step is simply noticing that you’ve gone quiet, become defensive or drifted away from your own experience.</p>
            <p>Each program gives you a different way into that work.</p>
          </div>
          <div className="cby-cards">
            {PROGRAMS.slice(0, 2).map((p, i) => (
              <article key={p.slug} className="cby-card">
                <Img name={p.image} alt={p.alt} width={650} height={334} className="cby-card-photo" />
                <ProgramBody p={p} i={i} />
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* MOCKUP THREE — the other three programs as rows beside their photos */}
      <ol className="cby-rows" start={3} aria-label="Programs three to five">
        {PROGRAMS.slice(2).map((p, i) => (
          <li key={p.slug} className="cby-row">
            <Img name={p.image} alt={p.alt} width={666} height={520} className="cby-row-photo" />
            <div className="cby-row-copy"><ProgramBody p={p} i={i + 2} /></div>
          </li>
        ))}
      </ol>

      <section className="cby-band" aria-label="Join the waitlist">
        <div className="cby-wrap cby-band-inner">
          <p className="cby-band-line">Learn at your pace. Bring it into your life.</p>
          <Btn />
        </div>
      </section>

      <div className="cby-wrap">
        <section className="cby-section" aria-labelledby="cby-together-h">
          <h2 id="cby-together-h" className="cby-h2 cby-h2--big">Why learn these together?</h2>
          <div className="cby-cols">
            <p>Suppose someone asks something of you that you don’t want to give. The Self-Esteem Triad helps you explore your reluctance and the boundary involved. The parts introduction helps you understand why another part of you urgently wants to agree.</p>
            <p>Self-Regulation When It Matters gives you practices to explore when that moment becomes intense. Becoming Conscious helps you notice what is happening while it is happening. EIT Foundations introduces a way of understanding the feelings and protective responses you find difficult to meet.</p>
            <p><strong>You have several ways to work with the same real-life moment.</strong> As you learn, you can return to whichever program helps you understand the part you’re finding difficult.</p>
          </div>
        </section>

        <section className="cby-section cby-rule" aria-labelledby="cby-pace-h">
          <div className="cby-pace">
            <div>
              <h2 id="cby-pace-h" className="cby-h2 cby-h2--big">Learn at a pace that lets you use it.</h2>
              <p>The bundle is self-paced, with recorded teaching you can pause and revisit. You can begin with the Self-Esteem Triad and follow the sequence above, or spend longer with a program that speaks to something happening in your life.</p>
              <p>You can take one useful idea into a conversation and notice what happens before moving on.</p>
            </div>
            <ul className="cby-dots cby-dots--lg">{PACE.map(p => <li key={p.lead}><strong>{p.lead}</strong> {p.text}</li>)}</ul>
          </div>
        </section>

        {/* MOCKUP FOUR — who it is for, the note, the bundle, the questions */}
        <section className="cby-section cby-rule" aria-labelledby="cby-fit-h">
          <h2 id="cby-fit-h" className="cby-h2 cby-h2--big">Is Come Back to Yourself right for you?</h2>
          <div className="cby-fit">
            <div>
              <h3 className="cby-h3">This bundle is for you if …</h3>
              <ul className="cby-marks">{FOR_YOU.map(t => <li key={t}><span className="cby-mark" aria-hidden="true">✓</span>{t}</li>)}</ul>
            </div>
            <div className="cby-fit-not">
              <h3 className="cby-h3">This bundle won’t suit you if …</h3>
              <ul className="cby-marks">{NOT_FOR.map(t => <li key={t}><span className="cby-mark" aria-hidden="true">×</span>{t}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="cby-section cby-rule cby-note" aria-labelledby="cby-note-h">
          <h2 id="cby-note-h" className="cby-h2 cby-h2--big">A note from Remi</h2>
          <div className="cby-cols cby-cols--2">
            <p>I’m Remi Pearson, author, founder of The Coaching Institute and creator of the <Link href="/ideas-models/self-esteem-triad">Self-Esteem Triad</Link> and <Link href="/ideas-models/emotion-integration-technique">Emotion Integration Technique</Link>. For more than two decades, my work has explored how we think, relate and change.</p>
            <p>I keep coming back to the gap between understanding ourselves and being able to live that understanding. We can have an excellent explanation for a pattern and still find ourselves caught in it when a relationship, a feeling or a decision matters.</p>
            <p>I’ve brought these programs together because different moments ask different things of us. Sometimes we need language for a need. Sometimes we need to recognise that we’re overwhelmed. Sometimes we need to become curious about the part of ourselves we’ve spent years criticising.</p>
            <p>My invitation is to bring something real from your life into this work. Give yourself time to understand it and see what you become able to notice, express or choose.</p>
          </div>
          <img className="cby-signature" src="/assets/bm-landing/bm-signature.webp" alt="Remi" width={585} height={375} loading="lazy" decoding="async" />
        </section>
      </div>

      <section className="cby-bundle" aria-labelledby="cby-bundle-h">
        <div className="cby-wrap cby-bundle-inner">
          <div className="cby-bundle-panel">
            <h2 id="cby-bundle-h" className="cby-h2 cby-h2--big">Your Come Back to Yourself bundle</h2>
            <table className="cby-table">
              <thead><tr><th scope="col">Included program</th><th scope="col">Individual price</th></tr></thead>
              <tbody>
                {BUNDLE_ROWS.map(r => <tr key={r.slug}><th scope="row"><Link className="cby-table-link" href={productHref(r.slug)}>{r.name}</Link></th><td>{r.price}</td></tr>)}
              </tbody>
              <tfoot><tr><th scope="row">Combined individual price</th><td>AUD {COMBINED}</td></tr></tfoot>
            </table>
            <p className="cby-invest"><span>Your bundle investment:</span> <strong>{CBY.price}</strong></p>
            <p><strong>Save {SAVING} on the four paid programs.</strong> The five-part introductory series is also included, bringing the complete learning pathway together in one bundle.</p>
            <div className="cby-buy"><Btn /></div>
            <p className="cby-small">We’ll email you when we’re taking applications again.</p>
          </div>
          <Img name="cby-bundle" alt="A smiling woman resting her chin on her hand beside a mug" width={591} height={591} className="cby-bundle-photo" />
        </div>
      </section>

      <div className="cby-wrap">
        <section className="cby-section" aria-labelledby="cby-faq-h">
          <h2 id="cby-faq-h" className="cby-h2 cby-h2--big cby-faq-h">Your questions, answered.</h2>
          <dl className="cby-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="cby-close" aria-labelledby="cby-close-h">
        <Img name="cby-olive" alt="" width={354} height={357} className="cby-close-olive" />
        <Img name="cby-hills" alt="" width={351} height={285} className="cby-close-hills" />
        <div className="cby-wrap cby-close-inner">
          <h2 id="cby-close-h" className="cby-h2 cby-h2--big">You have a place in the life you’re working so hard to manage.</h2>
          <p>Your needs can be part of the decision. Your feelings can receive some attention before you explain them away. A difficult conversation can include what matters to you, even when expressing it takes practice.</p>
          <p>Come Back to Yourself gives you a place to begin that work, with guidance you can return to as you learn.</p>
          <p className="cby-close-name"><strong>Five self-paced programs with Remi Pearson</strong><br />{CBY.price} · Save {SAVING}</p>
          <p>Join the waitlist and we’ll let you know when we’re taking applications again.</p>
          <WaitlistForm product={CBY.title} segment={CBY.segment} prefix="cby" thanks="Thank you. You’re on the waitlist, and we’ll let you know when we’re taking applications again." />
          <img className="cby-signature" src="/assets/bm-landing/bm-signature.webp" alt="" width={585} height={375} loading="lazy" decoding="async" />
        </div>
      </section>
    </main>
  );
}

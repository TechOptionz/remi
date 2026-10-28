// The 90-Day Review's sales page, shown at /products/the-90-day-review in place of the generic product page (see
// app/products/[slug]/page.tsx). Follows the four-panel mockup in the deck's order: the hero beside the two women at
// the table and the strip under it, the question and its ringed ticks, the Critical Alignment Model lens as numbered
// rows, the three modules with their big gold numerals and tinted boxes, the dark waitlist band, the template pack
// beside the desk, the rust "be more proactive" panel over the pair at the table, Remi's note beside the olive branch,
// ideal / not for in two columns, the questions in three columns and the rust closing band with the waitlist form.
// Copy and lists in content/n90-landing.ts; styles styles/n90-landing.css (.n90-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from './WaitlistForm';
import { BENEFITS, FAQ, IDEAL, LENSES, MODULES, N90, N90_NAME, STRIP, TEMPLATES } from '@/content/n90-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/n90-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn({ dark }: { dark?: boolean }) {
  return <a href="#get" className={`n90-btn${dark ? ' n90-btn--dark' : ''}`}>Join the waitlist</a>;
}

function Tick({ filled }: { filled?: boolean }) {
  return (
    <svg className={`n90-tick${filled ? ' n90-tick--filled' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" /><path d="M7.5 12.5l3 3 6-6.5" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function N90Landing() {
  return (
    <main className="n90">
      {/* MOCKUP ONE — the hero beside the two women at the table */}
      <section className="n90-hero" aria-labelledby="n90-title">
        <div className="n90-hero-copy">
          <nav className="crumbs n90-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{N90.title}</span>
          </nav>
          <p className="n90-eyebrow">{N90_NAME} <span className="n90-with">With Remi Pearson</span></p>
          <h1 id="n90-title" className="n90-title">Help your people take greater ownership … starting with a better review.</h1>
          <p>Run meaningful performance conversations that connect your team’s everyday work to your vision and values, make expectations clear and turn good intentions into measurable progress.</p>
          <p>Three practical videos and editable review templates guide you through preparing the conversation, reviewing performance and agreeing on the next 90 days.</p>
          <div className="n90-buy"><Btn /></div>
          <p className="n90-small">Receive launch details when the program becomes available. Joining the waitlist is free and carries no obligation to purchase.</p>
        </div>
        <Img name="n90-hero" alt="Two women talking at a sunlit table, one gesturing as she explains, the other listening with a pen and notebook" width={530} height={790} className="n90-hero-photo" eager />
      </section>
      <ul className="n90-strip" aria-label="What the program includes">
        {STRIP.map(s => <li key={s}>{s}</li>)}
      </ul>

      <div className="n90-wrap">
        <section className="n90-section" aria-labelledby="n90-chase-h">
          <h2 id="n90-chase-h" className="n90-h2 n90-h2--big">You’ve had the conversation. So why are you still chasing the same things?</h2>
          <div className="n90-cols">
            <p>You sit down with someone, discuss how things are going and agree that a few things need to improve. They seem to understand. You leave feeling reasonably positive. Then a few weeks pass, and you’re reminding them about the same deadline or stepping in to finish something you thought they owned.</p>
            <p>Sometimes the expectation was never clear enough. Sometimes the person needs a skill they haven’t developed yet, or a system that makes it possible to do the job well. Sometimes they need an honest conversation about following through. Knowing which conversation to have makes a considerable difference.</p>
            <p>The 90-Day Review &amp; Personal Success Plan gives you a way to work through those questions and leave with agreements you can both use. Your team member knows what success looks like, and you know what support to provide and what responsibility they’re ready to take.</p>
          </div>
        </section>

        <section className="n90-section n90-section--top0" aria-labelledby="n90-worth-h">
          <h2 id="n90-worth-h" className="n90-h2">Make your next review worth the time you put into it.</h2>
          <ul className="n90-benefits">
            {BENEFITS.map(b => (
              <li key={b.lead}><Tick /><div><h3>{b.lead}</h3><p>{b.text}</p></div></li>
            ))}
          </ul>
        </section>

        {/* MOCKUP THREE — the Critical Alignment Model lens as numbered rows */}
        <section className="n90-section n90-rule" aria-labelledby="n90-build-h">
          <h2 id="n90-build-h" className="n90-h2 n90-h2--big">A review that starts with the business you’re trying to build.</h2>
          <div className="n90-lede">
            <p>Your vision gives people a direction. Your values establish how you expect them to work together. A useful review connects both to the person’s actual role.</p>
            <p>Remi’s <Link href="/ideas-models/critical-alignment-model">Critical Alignment Model</Link> gives you the framework for that conversation. You work through Environment, Structure, Implementation and People to understand what is helping performance and what needs to change.</p>
          </div>
          <table className="n90-lens">
            <thead><tr><th scope="col" colSpan={2}>The review lens</th><th scope="col">What it helps you do</th></tr></thead>
            <tbody>
              {LENSES.map((l, i) => (
                <tr key={l.name}><td className="n90-lens-n">{pad(i + 1)}</td><th scope="row">{l.name}</th><td>{l.text}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="n90-statement">You can hold people accountable while also examining whether you have set them up to succeed. That gives you a more useful starting point for improvement.</p>
        </section>

        {/* MOCKUP TWO — the three modules */}
        <section className="n90-section n90-rule" aria-labelledby="n90-know-h">
          <h2 id="n90-know-h" className="n90-h2 n90-h2--big">Know what to ask. Know what to agree. Know how to follow through.</h2>
          <ol className="n90-modules">
            {MODULES.map((m, i) => (
              <li key={m.name}>
                <span className="n90-mod-n" aria-hidden="true">{pad(i + 1)}</span>
                <div className="n90-mod-copy">
                  <p className="n90-label">Module {i + 1}</p>
                  <h3 className="n90-mod-title">{m.name}</h3>
                  {m.text.map(t => <p key={t}>{t}</p>)}
                  <div className="n90-box">
                    <p><strong>What this gives you:</strong> {m.gives}</p>
                    <p><strong>You’ll leave this module with:</strong> {m.leave}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="n90-dark" aria-labelledby="n90-mid-h">
        <div className="n90-wrap n90-dark-inner">
          <h2 id="n90-mid-h" className="n90-h2">Get the launch details for the 90-Day Review &amp; Personal Success Plan.</h2>
          <Btn />
        </div>
      </section>

      {/* MOCKUP FOUR — the template pack beside the desk */}
      <section className="n90-templates" aria-labelledby="n90-tpl-h">
        <div className="n90-templates-copy">
          <h2 id="n90-tpl-h" className="n90-h2 n90-h2--big">The templates do the organising, so you can focus on the conversation.</h2>
          <p>You’ll receive an editable pack you can adapt to your business and reuse each quarter.</p>
          <ul className="n90-pack">
            {TEMPLATES.map(t => (
              <li key={t.lead}>
                <span className="n90-ring" aria-hidden="true"><Icon name={t.icon} size={26} /></span>
                <p><strong>{t.lead}</strong> {t.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <Img name="n90-desk" alt="" width={604} height={396} className="n90-templates-photo" />
      </section>

      {/* MOCKUP THREE — the rust panel over the pair at the table */}
      <section className="n90-proactive" aria-labelledby="n90-pro-h">
        <div className="n90-wrap">
          <div className="n90-panel">
            <h2 id="n90-pro-h" className="n90-h2">Replace “be more proactive” with an agreement someone can act on.</h2>
            <p>“Be more proactive” can mean something different to each person in the room. A useful agreement makes the expectation visible:</p>
            <blockquote className="n90-quote">“You’ll own the weekly client update. Send it by Thursday at 3 pm using the agreed checklist. For the first two weeks, we’ll review your draft together. Once it consistently meets the standard, you’ll send it independently. Raise anything that could delay delivery as soon as you identify it.”</blockquote>
            <p className="n90-panel-foot">Now the person knows what to do, what support they’ll receive and how they can earn greater independence. You have something specific to recognise, review and develop.</p>
          </div>
        </div>
        <Img name="n90-pair" alt="A woman and a man reviewing notes together at a table, both concentrating" width={1024} height={328} className="n90-pair" />
      </section>

      <section className="n90-created" aria-labelledby="n90-created-h">
        <div className="n90-created-copy">
          <h2 id="n90-created-h" className="n90-h2">Created from the work of building and leading a business.</h2>
          <p>Remi Pearson founded The Coaching Institute and built a business that generated approximately $200 million in revenue over 23 years.</p>
          <p>This program draws on her Critical Alignment Model, her <Link href="/ideas-models/disruptive-leadership">Disruptive Leadership</Link> work and the quarterly review templates she used with her own team. Those templates brought values, cultural contribution and measurable performance into the same conversation, with responsibilities for the leader as well as the team member.</p>
          <p>You’re learning an approach developed through the practical demands of leading people, maintaining standards and helping others grow into greater responsibility.</p>
        </div>
        <Img name="n90-olive" alt="" width={272} height={178} className="n90-created-photo" />
      </section>

      <div className="n90-wrap">
        <section className="n90-section n90-fit" aria-label="Who this is for">
          <div>
            <h2 className="n90-h2">Who this is ideal for</h2>
            <p>This program is designed for business owners, managers and team leaders who already have people to lead and want a more useful way to review their contribution.</p>
            <p>It’s particularly suited to you if:</p>
            <ul className="n90-ideal">{IDEAL.map(t => <li key={t}><Tick filled /><span>{t}</span></li>)}</ul>
          </div>
          <div className="n90-fit-not">
            <h2 className="n90-h2">Who it isn’t for</h2>
            <p>This won’t be the right fit if you’re looking for a form to complete without having the conversation, or if you want to assess everyone else while leaving your own leadership out of the review.</p>
            <p>It also isn’t a comprehensive HR compliance program or a substitute for advice on formal disciplinary matters. Its focus is practical leadership: reviewing contribution, developing capability and agreeing on what happens next.</p>
          </div>
        </section>

        <section className="n90-section n90-section--top0" aria-labelledby="n90-faq-h">
          <h2 id="n90-faq-h" className="n90-h2">A few questions you may have</h2>
          <dl className="n90-faq">
            {FAQ.map(f => <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>)}
          </dl>
        </section>
      </div>

      <section id="get" className="n90-close" aria-labelledby="n90-close-h">
        <div className="n90-wrap">
          <h2 id="n90-close-h" className="n90-h2">Give your people a clearer path to succeeding without constant reminders.</h2>
          <p className="n90-close-text">Your next review can help someone understand the contribution they’re making, the standards they need to meet and the responsibility they’re ready to own. With a clear plan and the right support, you both leave knowing what happens next.</p>
          <p className="n90-close-name">{N90_NAME} with Remi Pearson</p>
          <WaitlistForm product={N90_NAME} segment={N90.segment} />
          <p className="n90-small">Free to join. No obligation to purchase.</p>
        </div>
      </section>
    </main>
  );
}

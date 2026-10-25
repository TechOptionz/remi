// Core, Improve, Innovate's sales page, shown at /products/core-improve-innovate in place of the generic product page
// (see app/products/[slug]/page.tsx). Follows the three-part mockup: the dark hero beside Remi on the set and the strip
// of figures under it, "You can work incredibly hard on the wrong thing" on the paper, the three numbered columns of
// the model, the dark band of the three videos, the workbook with its ringed questions, "Leaving this unclear" beside
// "Is this for you?", Remi's note beside her photo on the dark band, the questions and the dark close with the waitlist
// form. The deck's sales story ("More sales won't fix every business problem") and "What could change in the way you
// lead?", which the mockups leave out, sit where the deck places them. Copy and lists in content/cii-landing.ts;
// styles styles/cii-landing.css (.cii-*).
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import WaitlistForm from '@/components/landing/WaitlistForm';
import { CII, FAQ, PARTS, QUESTIONS, RELEVANT, STATS, VIDEOS } from '@/content/cii-landing';

function Img({ name, alt, width, height, className = '', eager }: { name: string; alt: string; width: number; height: number; className?: string; eager?: boolean }) {
  return <img className={className} src={`/assets/cii-landing/${name}.webp`} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />;
}

/** Every button goes to the waitlist form in the closing band. */
function Btn() {
  return <a href="#get" className="cii-btn">Join the waitlist <span aria-hidden="true">›</span></a>;
}

function Ring({ icon, small }: { icon: React.ComponentProps<typeof Icon>['name']; small?: boolean }) {
  return <span className={`cii-ring${small ? ' cii-ring--sm' : ''}`} aria-hidden="true"><Icon name={icon} size={small ? 22 : 28} strokeWidth={1.3} /></span>;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function CiiLanding() {
  return (
    <main className="cii">
      {/* PART ONE — the dark hero beside Remi on the set */}
      <section className="cii-hero" aria-labelledby="cii-title">
        <div className="cii-hero-copy">
          <nav className="crumbs cii-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{CII.title}</span>
          </nav>
          <p className="cii-eyebrow">Free program with Remi Pearson <span aria-hidden="true">·</span> Three videos + workbook</p>
          <h1 id="cii-title" className="cii-title">Your next big idea might be taking you away from what your business <em>actually needs</em>.</h1>
          <p>There’s no shortage of things you could do. Launch another offer. Upgrade your systems. Hire someone. Finally do something about the part of the business that keeps needing your attention.</p>
          <p>The harder decision is knowing which deserves your time now. Especially when the new idea is exciting, the existing problem is frustrating, and both can make a convincing case for being your priority.</p>
          <p><strong>Core, Improve, Innovate</strong> gives you a practical way to make that decision. Learn to recognise what keeps your business working, where improvement will make a difference, and when a genuinely new direction deserves your investment.</p>
          <div className="cii-buy"><Btn /></div>
          <p className="cii-caps">Free program · Three videos and a workbook</p>
        </div>
        <Img name="cii-hero" alt="Remi Pearson smiling on a television set, cameras and stage lights behind her" width={669} height={1002} className="cii-hero-photo" eager />
      </section>
      <ul className="cii-stats" aria-label="About Remi Pearson">
        {STATS.map(s => (
          <li key={s.figure}><Ring icon={s.icon} small /><strong>{s.figure}</strong><span>{s.label}</span></li>
        ))}
      </ul>

      <div className="cii-wrap">
        <section className="cii-section" aria-labelledby="cii-hard-h">
          <h2 id="cii-hard-h" className="cii-h2 cii-h2--big">You can work incredibly hard on the <em>wrong thing.</em></h2>
          <div className="cii-prose">
            <p>You’ve spent the week doing things that seemed necessary. Your team needed answers. A new opportunity deserved a conversation. Something broke, something ran late, and an idea you were excited about took longer than expected.</p>
            <p>By Friday, the work that would have made the business more dependable still hasn’t happened. The same delivery problem is waiting for you. A process still lives in your head. You’re making sales, but you’re not entirely confident that everything promised is happening consistently.</p>
            <p className="cii-aside">Then someone suggests another project.</p>
            <p>When you run a business, almost anything can be made to sound like a priority. Without a way to examine those competing demands, you can spend months creating activity while the problem underneath it all becomes more expensive.</p>
          </div>
          <p className="cii-statement">Core, Improve, Innovate helps you look at what each decision is actually doing for the business, including what it will take your attention away from.</p>
        </section>

        {/* PART TWO — the three numbered columns */}
        <section className="cii-section cii-rule" aria-labelledby="cii-know-h">
          <h2 id="cii-know-h" className="cii-h2 cii-h2--big">Know what to protect, what to strengthen and <em>where to go next.</em></h2>
          <p className="cii-lede">These are different kinds of work. Understanding the difference changes how you approach them.</p>
          <ol className="cii-parts">
            {PARTS.map((p, i) => (
              <li key={p.name}>
                <span className="cii-num" aria-hidden="true">{pad(i + 1)}</span>
                <p className="cii-part-name">{p.name}</p>
                <h3>{p.lead}</h3>
                {p.text.map(t => <p key={t}>{t}</p>)}
              </li>
            ))}
          </ol>
          <div className="cii-buy cii-center"><Btn /></div>
        </section>

        <section className="cii-section cii-rule cii-story" aria-labelledby="cii-story-h">
          <h2 id="cii-story-h" className="cii-h2 cii-h2--big">More sales won’t fix every business problem.</h2>
          <div className="cii-prose cii-prose--2">
            <p>I once took my management team into a company that wanted help growing. Each of us examined a different part of the business, while I worked with sales.</p>
            <p>The finance work revealed that, on roughly $10 million in ongoing payments due, around $1 million had become bad debt in collections. The company wanted new ways to bring in business. Meanwhile, a fundamental part of turning its existing sales into collected income was failing.</p>
            <p>That company eventually collapsed. There was more to its story than one number, but the lesson stayed with me. More sales passing through a broken process can make the underlying problem bigger.</p>
            <p>Core, Improve, Innovate gives you a way to examine those decisions before enthusiasm for growth carries you past something your business urgently needs you to see.</p>
          </div>
        </section>
      </div>

      <section className="cii-dark cii-videos" aria-labelledby="cii-videos-h">
        <div className="cii-wrap">
          <h2 id="cii-videos-h" className="cii-h2 cii-h2--big">Three videos. A workbook. <em>Your own business under examination.</em></h2>
          <ol className="cii-video-list">
            {VIDEOS.map((v, i) => (
              <li key={v.name}>
                <span className="cii-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 6.5l9 5.5-9 5.5z" /></svg></span>
                <span className="cii-video-n" aria-hidden="true">{pad(i + 1)}</span>
                <div>
                  <p className="cii-label">Video {i + 1}</p>
                  <h3>{v.name}</h3>
                  <p>{v.text}</p>
                  <p><strong>The practical benefit:</strong> {v.benefit}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="cii-wrap">
        <section className="cii-section cii-workbook" aria-labelledby="cii-workbook-h">
          <Img name="cii-workbook" alt="The Core, Improve, Innovate workbook by Remi Pearson, in a dark brown cover with gold lettering" width={420} height={534} className="cii-workbook-photo" />
          <div>
            <h2 id="cii-workbook-h" className="cii-h2 cii-h2--big">Your Core, Improve, Innovate <em>workbook</em></h2>
            <p>Bring the model into the decisions already on your desk. Use the workbook to examine your current activities, identify what each is intended to achieve and consider the demands they place on the rest of the business.</p>
            <p className="cii-subhead">You’ll work through questions including:</p>
            <ul className="cii-questions">
              {QUESTIONS.map(q => <li key={q.text}><Ring icon={q.icon} small /><span>{q.text}</span></li>)}
            </ul>
            <div className="cii-buy"><Btn /></div>
          </div>
        </section>

        {/* PART THREE — what could change, the cost, who it is for */}
        <section className="cii-section cii-rule" aria-labelledby="cii-lead-h">
          <h2 id="cii-lead-h" className="cii-h2 cii-h2--big">What could change in the way you lead?</h2>
          <div className="cii-prose">
            <p>You could approach your next planning meeting with a clearer distinction between maintaining the business, strengthening it and taking it somewhere new. That gives you a more useful conversation than a long list of projects all competing to be called urgent.</p>
            <p>When someone proposes a change, you can ask what problem it solves and what evidence supports it. When delivery keeps breaking down, you can examine the Core instead of repeatedly stepping in. And when an opportunity genuinely deserves your attention, you can consider how to resource it while continuing to care for the business you have.</p>
            <p className="cii-aside">The aim is to make decisions you can explain, with a clearer understanding of their consequences.</p>
          </div>
        </section>

        <section className="cii-section cii-rule cii-pair" aria-label="The cost of leaving this unclear, and who this is for">
          <div>
            <div className="cii-pair-head"><Ring icon="bars" /><h2 className="cii-h2">Leaving this unclear <em>has a cost.</em></h2></div>
            <p>The projects you choose consume more than the hours you spend on them. Your team has to adjust. Existing work gets delayed. A system that needed attention has to hold together for another month.</p>
            <p>Over time, the owner can become busier while the business becomes more dependent on them. New offers add complexity to unreliable delivery. Repeated changes leave people uncertain about what matters. The work everyone knows needs doing keeps being displaced by something more immediately compelling.</p>
            <p>There is also a cost to protecting the familiar for too long. A business can become excellent at delivering something its market increasingly wants less of.</p>
            <p>Knowing where you need stability and where you need change is part of leading a business that can keep earning its place.</p>
          </div>
          <div className="cii-pair-right">
            <div className="cii-pair-head"><Ring icon="people" /><h2 className="cii-h2">Is this for you?</h2></div>
            <p>This program is for business owners and leaders who have real work underway and need a clearer way to decide where their effort belongs.</p>
            <p>It will be particularly relevant if you’re:</p>
            <ul className="cii-ticks">{RELEVANT.map(t => <li key={t}>{t}</li>)}</ul>
            <p>You don’t need a large team to use the model. You do need a willingness to examine what is happening, including the parts you would prefer were already working.</p>
            <p>If you’re looking for a fixed formula that makes every decision for you, this won’t provide one. The point is to improve your judgement about the business you actually have.</p>
          </div>
        </section>
      </div>

      <section className="cii-dark cii-remi" aria-labelledby="cii-remi-h">
        <Img name="cii-remi" alt="Remi Pearson laughing, in a green jacket and pearls" width={757} height={618} className="cii-remi-photo" />
        <div className="cii-remi-copy">
          <h2 id="cii-remi-h" className="cii-h2 cii-h2--big">Learn from someone who has had to make <em>these decisions.</em></h2>
          <p className="cii-label">Remi Pearson</p>
          <p>I founded The Coaching Institute and built a business that generated approximately $200 million in revenue over 23 years, before selling it in 2024. Over that time, we trained more than 13,000 coaches.</p>
          <p>Building that business meant developing people who could deliver well, making our standards teachable and deciding where our attention belonged as the organisation grew. There were always more possibilities than there was time to pursue them.</p>
          <p>Core, Improve, Innovate is one of the models I use to think through those choices. I teach it because a business owner needs a way to question a compelling idea, recognise a neglected responsibility and respond when something genuinely needs to change.</p>
        </div>
      </section>

      <div className="cii-wrap">
        <section className="cii-section" aria-labelledby="cii-faq-h">
          <h2 id="cii-faq-h" className="cii-h2 cii-h2--big">A few things you may be <em>wondering</em></h2>
          <dl className="cii-faq">
            {FAQ.map(f => (
              <div key={f.q}>
                <span className="cii-q" aria-hidden="true">?</span>
                <div><dt>{f.q}</dt><dd>{f.a}</dd></div>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section id="get" className="cii-dark cii-close" aria-labelledby="cii-close-h">
        <div className="cii-wrap">
          <h2 id="cii-close-h" className="cii-h2 cii-h2--big">Before you commit to another project, get clearer about <em>what your business needs.</em></h2>
          <p className="cii-close-text">Bring the decisions you’re already facing. Use Core, Improve, Innovate to examine where your effort belongs and what deserves to happen next.</p>
          <p className="cii-caps cii-caps--gold">Three videos and a workbook. Free.</p>
          <WaitlistForm product={CII.title} segment={CII.segment} prefix="cii" namePlaceholder="First name" thanks="Thank you. You’re on the waitlist, and you’ll hear as soon as Core, Improve, Innovate opens." />
        </div>
      </section>
    </main>
  );
}

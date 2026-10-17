// Holding Space Without Rescuing or Disappearing's sales page, shown at
// /products/holding-space-without-rescuing-or-disappearing in place of the generic product page (see
// app/products/[slug]/page.tsx). Follows the three-page mockup: the dark hero with Remi, gold-tick lists beside photos,
// burgundy bands, the three practices as icons, the five videos in alternating photo rows, the workbook, the note band,
// questions that open, and the burgundy close. Copy and lists in content/hs-landing.ts; styles styles/hs-landing.css.
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import NotifyForm from '@/components/products/NotifyForm';
import { FAQ, HS, INCLUDES, LESSON_IMAGES, LESSONS, PILLARS, PRACTISE, RECOGNISE, TESTIMONIALS, WORKBOOK } from '@/content/hs-landing';

const num = (i: number) => String(i + 1).padStart(2, '0');

function Img({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  return <img className={className} src={`/assets/hs-landing/${name}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
}

/** The orange button: the checkout once the product has a `buyHref`, until then the closing band (#get). */
function Btn({ children }: { children: React.ReactNode }) {
  return <a href={HS.ctaHref} className="hsl-btn">{children}</a>;
}

/** Gold-ticked list. */
function Ticks({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`hsl-ticks ${className}`}>
      {items.map(t => (
        <li key={t}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HsLanding() {
  return (
    <main className="hsl">
      {/* PAGE ONE — the question over Remi's portrait */}
      <section className="hsl-hero" aria-labelledby="hsl-title">
        <img className="hsl-hero-photo" src="/assets/wdk-landing/wdk-portrait.webp" alt="Remi Pearson smiling, in a burgundy top" width={1086} height={1448} fetchPriority="high" decoding="async" />
        <div className="hsl-wrap hsl-hero-inner">
          <nav className="crumbs hsl-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Programs &amp; products</Link><span aria-hidden="true">/</span><span aria-current="page">{HS.title}</span>
          </nav>
          <div className="hsl-hero-copy">
            <p className="hsl-eyebrow">Holding Space Without Rescuing or Disappearing <span>With Remi Pearson</span></p>
            <h1 id="hsl-title" className="hsl-title">When someone you love is upset, do you rush to fix it … or wish you could escape?</h1>
            <p>You want to help. But sometimes your advice lands badly, your reassurance closes the conversation down, or you find yourself getting defensive when you meant to be supportive. Other times, you simply don’t know what to say, and the distance between you grows.</p>
            <p>Learn how to stay with a difficult conversation, understand what someone needs from you and offer support without taking responsibility for making their feelings go away.</p>
            <p className="hsl-hero-inc">Five videos + companion workbook · {HS.price}</p>
            <p>A self-paced program for people who want deeper connections and a more honest, sustainable way to be there for others.</p>
            <div className="hsl-buy"><Btn>Yes, I want to learn this · {HS.price}</Btn></div>
          </div>
        </div>
      </section>

      {/* You care about them: the conversation photo beside the ticks */}
      <section className="hsl-section" aria-labelledby="hsl-wrong-h">
        <div className="hsl-wrap">
          <h2 id="hsl-wrong-h" className="hsl-h2 hsl-center">You care about them. So why do these conversations keep going wrong?</h2>
          <div className="hsl-prose">
            <p>Someone opens up, and you can already see what they should do. You offer a solution, perhaps several, and feel confused when they become frustrated. You were trying to help.</p>
            <p>Or they tell you something has hurt them, and you begin explaining why it happened. By the time you have finished defending your intentions, the thing they wanted you to understand has almost disappeared from the conversation.</p>
            <p>Perhaps your response is quieter. You nod and say very little, but inside you are waiting for it to be over. You avoid asking how they are because you’re not sure you can manage the answer.</p>
          </div>
          <div className="hsl-split">
            <Img name="hs-women" alt="Two women in conversation on a sofa; one listens, chin in her hand, as the other talks" width={601} height={380} className="hsl-split-photo" />
            <div>
              <h3 className="hsl-h3">You might recognise yourself here:</h3>
              <Ticks items={RECOGNISE.map(r => r.lead)} />
            </div>
          </div>
          <p className="hsl-after">These responses can happen in loving relationships. Caring about someone doesn’t automatically give us the capacity to be with everything they feel, particularly when their experience brings up something uncomfortable in us.</p>
        </div>
      </section>

      <section className="hsl-band" aria-labelledby="hsl-price-h">
        <div className="hsl-wrap hsl-center">
          <h2 id="hsl-price-h" className="hsl-h2">The price we pay when we keep missing each other</h2>
          <p className="hsl-band-lede">A conversation can end politely and still leave someone feeling alone.</p>
          <p>They shared something painful, and received a solution they weren’t ready for. They tried to explain their disappointment, and ended up reassuring you that you’re a good person. They wanted a little company in their uncertainty, and felt pushed towards an answer.</p>
          <p>Meanwhile, you may leave feeling unappreciated. You gave your time, tried to help and somehow got it wrong again.</p>
          <p>When this becomes familiar, people may begin editing what they share. Certain subjects become too difficult. You can still talk about the day, organise dinner and get everything done, while knowing there are parts of your experience that rarely make it into the relationship.</p>
          <span className="hsl-rule" aria-hidden="true"></span>
        </div>
      </section>

      {/* PAGE TWO — deeper connections beside the couple, with the three practices */}
      <section className="hsl-deeper" aria-labelledby="hsl-deeper-h">
        <div className="hsl-wrap hsl-deeper-grid">
          <div>
            <h2 id="hsl-deeper-h" className="hsl-h2">If you want deeper connections, how you receive someone matters.</h2>
            <p>Holding space gives you something to practise in those moments. It helps you become more available to the person in front of you, while remaining aware of your own feelings, limits and responsibilities.</p>
            <ul className="hsl-pillars">
              {PILLARS.map(p => <li key={p.text}><span className="hsl-pillar-icon"><Icon name={p.icon} size={30} /></span>{p.text}</li>)}
            </ul>
          </div>
          <Img name="hs-couple" alt="A woman listening closely, chin in her hand, as a man talks across a table" width={424} height={468} className="hsl-deeper-photo" />
        </div>
      </section>

      <section className="hsl-section" aria-labelledby="hsl-involve-h">
        <div className="hsl-wrap">
          <h2 id="hsl-involve-h" className="hsl-h2">What does holding space actually involve?</h2>
          <div className="hsl-prose">
            <p>Holding space means giving someone room to have their experience while you remain attentive and responsive. You listen closely enough to discover what they mean, rather than assuming you already know. You allow some uncertainty without immediately trying to remove it.</p>
            <p>That can sound simple until someone is disappointed in you, making a choice you disagree with or feeling something you desperately want to make better.</p>
            <p>This is where the work becomes personal. Can you notice the urge to take over without automatically following it? Can you acknowledge their hurt before explaining yourself? Can you remain interested when there is no quick solution?</p>
            <p>You also remain a person in the conversation. Your perspective matters. Your capacity matters. Holding space includes knowing what you can offer and communicating that honestly.</p>
            <p>Holding Space Without Rescuing or Disappearing introduces these skills through five videos and a companion workbook, with examples you can recognise and bring into your own relationships.</p>
          </div>

          <h2 id="hsl-different-h" className="hsl-h2 hsl-gap">What could become different in your conversations?</h2>
          <h3 className="hsl-h3">This program will help you begin practising how to:</h3>
          <ul className="hsl-practise">
            {PRACTISE.map(p => (
              <li key={p.lead}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5" /><path d="M7.5 12.5l3 3 6-6.5" /></svg>
                <div><strong>{p.lead}</strong> {p.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Five videos: photo rows that alternate sides */}
      <section className="hsl-videos" aria-labelledby="hsl-videos-h">
        <div className="hsl-wrap"><h2 id="hsl-videos-h" className="hsl-h2 hsl-center">Five videos to help you be there when it matters</h2></div>
        <ol className="hsl-rows">
          {LESSONS.map((l, i) => (
            <li key={l.name} className={i % 2 ? 'is-flipped' : ''}>
              <div className="hsl-row-copy">
                <span className="hsl-num" aria-hidden="true">{num(i)}</span>
                <div>
                  <h3>{l.name}</h3>
                  {l.text.map(t => <p key={t}>{t}</p>)}
                  <p className="hsl-take"><strong>What you’ll take away:</strong> {l.take}</p>
                </div>
              </div>
              <Img name={`hs-v${i + 1}`} {...LESSON_IMAGES[i]} className="hsl-row-photo" />
            </li>
          ))}
        </ol>
      </section>

      <section className="hsl-band hsl-center" aria-labelledby="hsl-right-h">
        <div className="hsl-wrap">
          <h2 id="hsl-right-h" className="hsl-h2">You do not have to get every response right.</h2>
          <p>Learning to notice what happened and return with genuine interest gives you somewhere to begin.</p>
          <div className="hsl-buy"><Btn>Start learning with Remi · {HS.price}</Btn></div>
          <p className="hsl-ruled">Holding Space Without Rescuing or Disappearing</p>
        </div>
      </section>

      {/* PAGE THREE — the workbook, who it's for, the note, questions, the close */}
      <section className="hsl-section" aria-labelledby="hsl-workbook-h">
        <div className="hsl-wrap">
          <h2 id="hsl-workbook-h" className="hsl-h2 hsl-center">A workbook to bring this into your own life</h2>
          <div className="hsl-split hsl-split--book">
            <figure className="hsl-book">
              <Img name="hs-workbook" alt="The Holding Space Without Rescuing or Disappearing companion workbook, open at its Reflection and My next step pages" width={582} height={366} />
              <figcaption>Workbook concept preview</figcaption>
            </figure>
            <div>
              <p>It is easy to recognise yourself in a video and then respond in exactly the same way when a familiar conversation becomes difficult. The workbook gives you a place to slow down and look at what is happening in your relationships.</p>
              <h3 className="hsl-h3">Use it alongside the videos to:</h3>
              <Ticks items={WORKBOOK} />
              <p>The aim is to develop your understanding so the words you use are your own.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hsl-section hsl-tint" aria-labelledby="hsl-for-h">
        <div className="hsl-wrap">
          <h2 id="hsl-for-h" className="hsl-h2">This is for you if you want more depth in your relationships</h2>
          <div className="hsl-prose hsl-cols">
            <p>Perhaps you want your partner to feel able to tell you something difficult. You want to be a friend who can hear pain without immediately searching for a positive. You want to support an adult child without directing their life, or listen to someone at work without turning every concern into a task you must solve.</p>
            <p>You may already be the person everyone comes to, and need a way to care that doesn’t leave you carrying everything afterwards.</p>
            <p>Or you may recognise that you often retreat when people need you emotionally, even though connection matters to you.</p>
            <p>You can begin learning this from wherever you honestly are. You don’t need a coaching background or knowledge of psychological terminology.</p>
          </div>
        </div>
      </section>

      <section className="hsl-band hsl-note" aria-labelledby="hsl-note-h">
        <div className="hsl-wrap hsl-note-grid">
          <Img name="hs-note" alt="Remi Pearson laughing, close to the camera, on a film set" width={356} height={245} className="hsl-note-photo" />
          <div className="hsl-note-copy">
            <h2 id="hsl-note-h" className="hsl-h2">A note from Remi</h2>
            <p>Over the years, I’ve spent a great deal of time with people who are trying to say something they don’t yet have clear words for. Those moments ask something of us. It can be uncomfortable to listen when we cannot resolve the situation, especially when we care deeply about the person.</p>
            <p>I’m interested in what happens when we become a little more willing to stay curious. When we notice that the answer we are about to offer might be arriving because we want relief from the uncertainty. When we can hear something difficult without immediately making the conversation about our intentions.</p>
            <p>I also care about the person doing the listening. Being available to others cannot depend on repeatedly overriding yourself. There needs to be room for your honesty and your limits, alongside your willingness to remain connected.</p>
            <p className="hsl-note-pull">That is what I want to help you explore in this program. We all miss each other sometimes. There is something worth learning about how we find our way back.</p>
            <p className="hsl-signature" aria-hidden="true">Remi</p>
          </div>
        </div>
      </section>

      <div className="hsl-wrap">
        {TESTIMONIALS.length > 0 && (
          <section className="hsl-section" aria-labelledby="hsl-say-h">
            <h2 id="hsl-say-h" className="hsl-h2 hsl-center">What people say about learning with Remi</h2>
            <ul className="hsl-quotes">
              {TESTIMONIALS.map(t => <li key={t.name}><blockquote>{t.quote}</blockquote><p>{t.name} · {t.program}</p></li>)}
            </ul>
          </section>
        )}

        <section className="hsl-section" aria-labelledby="hsl-includes-h">
          <div className="hsl-offer">
            <h2 id="hsl-includes-h" className="hsl-h2">Your program includes</h2>
            <Ticks items={INCLUDES} />
            <p className="hsl-offer-price">{HS.price} · One payment</p>
            <Btn>Get Holding Space Without Rescuing or Disappearing · {HS.price}</Btn>
          </div>
        </section>

        <section className="hsl-section hsl-section--top0" aria-labelledby="hsl-faq-h">
          <h2 id="hsl-faq-h" className="hsl-h2 hsl-center">A few questions you might have</h2>
          <div className="hsl-faq">
            {FAQ.map(f => (
              <details key={f.q}>
                <summary>{f.q}<span className="hsl-chev" aria-hidden="true"></span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section id="get" className="hsl-band hsl-close hsl-center" aria-labelledby="hsl-close-h">
        <div className="hsl-wrap">
          <h2 id="hsl-close-h" className="hsl-h2">When someone opens up to you, what happens next matters</h2>
          <p>You may not be able to change what they are facing. You can learn to notice when you are moving too quickly, ask a question that helps you understand and leave room for something you haven’t heard yet.</p>
          <p>Over time, those are the moments in which a relationship can become more honest. Someone gets to finish what they were trying to say. You discover that you don’t have to supply every answer. A difficult conversation has a little more room for both of you.</p>
          <p>If you want to become more capable of being there, this is a place to begin.</p>
          <p className="hsl-ruled">Holding Space Without Rescuing or Disappearing</p>
          <p className="hsl-close-terms">Five videos with Remi Pearson + companion workbook<br />{HS.price} · One payment · Self-paced</p>
          {HS.buyHref
            ? <a href={HS.buyHref} className="hsl-btn">Yes, I want to learn this · {HS.price}</a>
            : <div className="hsl-soon"><p>Coming soon</p><NotifyForm product={HS.title} segment={HS.segment} /></div>}
        </div>
      </section>
    </main>
  );
}

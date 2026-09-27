import Link from 'next/link';
import { READ, UNTRIGGERABLE_HREF, WATCH } from '@/content/know-better';
import { Art, Brush, PlayRing, Sym } from '@/components/rabbit-holes/ui';

// WANT TO DO SOMETHING WITH THIS? — the Untriggerable book, then GO DEEPER: two conversations to watch, two articles to read (design part three)
export default function KbNext() {
  return (
    <>
      <section className="kb-section kb-next" aria-labelledby="kb-next-h">
        <Sym name="hm-spark" className="kb-spark" />
        <h2 id="kb-next-h" className="kb-h2 kb-center">Want to do <Brush>something with</Brush> this?</h2>
        <p className="kb-sub kb-center">Choose how deeply you want to go.</p>
        <div className="kb-book">
          <div className="kb-book-art">
            <Sym name="hm-loop" className="kb-book-loop" />
            <Art name="kb-book" className="kb-book-img" />
          </div>
          <div className="kb-book-copy">
            <h3 className="kb-book-title"><Brush>Untriggerable</Brush></h3>
            <p>Remain connected to yourself when discomfort is present.</p>
            <Link href={UNTRIGGERABLE_HREF} className="hm-btn hm-btn--sm" data-interest="Products">See what’s inside</Link>
          </div>
        </div>
      </section>

      <section className="kb-section kb-deeper" aria-labelledby="kb-deeper-h">
        <div className="kb-deeper-head">
          <Sym name="hm-spark" className="kb-spark" />
          <h2 id="kb-deeper-h" className="kb-h2"><Brush>Go deeper</Brush></h2>
          <Sym name="hm-spark" className="kb-spark" />
        </div>
        <div className="kb-deeper-grid">
          <div className="kb-deeper-col">
            <h3 className="kb-col-title">Watch</h3>
            {WATCH.map(w => (
              <a key={w.title} href={w.href} target="_blank" rel="noopener" className="kb-card kb-card--watch">
                <img src={w.image} alt="" loading="lazy" decoding="async" />
                <span className="kb-card-body">
                  <span className="kb-card-title">{w.title}</span>
                  <span className="kb-card-link"><PlayRing /> Watch the conversation</span>
                </span>
              </a>
            ))}
          </div>
          <div className="kb-deeper-col">
            <h3 className="kb-col-title">Read</h3>
            {READ.map(r => (
              <Link key={r.title} href={r.href} className="kb-card kb-card--read">
                <img src={r.image} alt="" loading="lazy" decoding="async" />
                <span className="kb-card-body">
                  <span className="kb-card-title">{r.title}</span>
                  <span className="kb-card-link">Read the article <span aria-hidden="true">⟶</span></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

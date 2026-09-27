import NewsletterForm from '@/components/shared/NewsletterForm';
import { Art, Brush, Sym } from './ui';

// I'LL WRITE WHEN I HAVE SOMETHING WORTH SAYING — the torn rust newsletter band that closes a rabbit-hole page.
// "centred" (I know better): heading, line and a one-row form in the middle. "envelope" (loving someone): the gold envelope
// drawing on the left, heading and stacked form on the right. The design's charcoal "Fancy a proper conversation?"
// strip below it is the site footer, which already carries it.
export default function KeepBand({ variant = 'centred' }: { variant?: 'centred' | 'envelope' }) {
  const envelope = variant === 'envelope';
  return (
    <section className={`kb-keep kb-keep--${variant}`} aria-labelledby="kb-keep-h">
      {envelope
        ? <Art name="ls-envelope" className="kb-keep-envelope" />
        : <><Art name="kb-flourish-light" className="kb-keep-flourish" /><Sym name="hm-spark" className="kb-keep-star" /></>}
      <div className="kb-keep-copy">
        <h2 id="kb-keep-h" className="kb-keep-title">I’ll write when <Brush>I have something</Brush> worth saying</h2>
        <p>Thoughtful ideas, new conversations and the occasional invitation.</p>
        <NewsletterForm className="news-form kb-news-form" />
      </div>
      <span className="kb-keep-sign" role="img" aria-label="Remi"></span>
    </section>
  );
}

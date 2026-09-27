import NewsletterForm from '@/components/shared/NewsletterForm';
import { Art, Brush, Sym } from './ui';

// I'LL WRITE WHEN I HAVE SOMETHING WORTH SAYING — torn rust newsletter band (design part three). The design's charcoal
// "Fancy a proper conversation?" strip below it is the site footer, which already carries it.
export default function KbKeep() {
  return (
    <section className="kb-keep" aria-labelledby="kb-keep-h">
      <Art name="kb-flourish-light" className="kb-keep-flourish" />
      <Sym name="hm-spark" className="kb-keep-star" />
      <h2 id="kb-keep-h" className="kb-keep-title">I’ll write when <Brush>I have something</Brush> worth saying</h2>
      <p>Thoughtful ideas, new conversations and the occasional invitation.</p>
      <NewsletterForm className="news-form kb-news-form" />
      <span className="kb-keep-sign" role="img" aria-label="Remi"></span>
    </section>
  );
}

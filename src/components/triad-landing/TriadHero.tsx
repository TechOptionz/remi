// PART 01 — "You can be confident in your work and still lose yourself in a relationship": title and lede beside the
// ring sculpture, then the book with the price, what's included and the button.
import { BuyBtn, Head, Photo } from './ui';
import { INCLUDES, TRIAD_PRICE } from '@/content/triad-landing';

export default function TriadHero() {
  return (
    <section className="stl-hero" aria-labelledby="stl-title">
      <div className="stl-hero-copy">
        <p className="stl-eyebrow">The Self-Esteem Triad <span>by Remi Pearson</span></p>
        <Head id="stl-title" as="h1">You can be confident in your work and still lose yourself in a relationship.</Head>
        <p className="stl-lede">Learn how to recognise what you feel, take your needs seriously and hold boundaries that let you stay connected without leaving yourself behind.</p>
        <p className="stl-hero-note">The Self-Esteem Triad is a practical, self-paced program exploring the relationship between your emotions, emotional needs and boundaries … and the lived sense that you are worthy, lovable and enough.</p>
      </div>
      <Photo name="stl-hero" width={480} height={850} className="stl-hero-photo" />
      <Photo name="stl-book" alt="The Self-Esteem Triad by Remi Pearson, a dark cloth-bound book with three gold rings around a stone sphere on the cover" width={480} height={590} className="stl-hero-book" />
      <div className="stl-buy">
        <p className="stl-price">{TRIAD_PRICE}<span>AUD</span></p>
        <p className="stl-includes">{INCLUDES.join(' • ')}</p>
        <BuyBtn />
        <p className="stl-fine">One payment. Learn at your own pace.</p>
      </div>
    </section>
  );
}

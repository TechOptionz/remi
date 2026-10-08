// PART 07 — "Use the model. Share the opportunity." (the ambassador offer) and "Bring a real situation." beside the arch;
// then the closing rust band (#get) with the book, the price and the button, or the "tell me when it's ready" sign-up
// until the product has a checkout link.
import NotifyForm from '@/components/products/NotifyForm';
import { CATEGORIES } from '@/content/products';
import { BuyBtn, Head, Photo, Price } from './ui';
import { CAML_BUY_HREF, INCLUDES } from '@/content/cam-landing';

export function CamShare() {
  return (
    <section className="stl-section stl-split cml-share" aria-labelledby="cml-share-h">
      <div className="stl-split-copy">
        <Head id="cml-share-h">Use the model. <br />Share the opportunity.</Head>
        <p className="cml-stat"><strong>100%</strong> of the proceeds from your sales</p>
        <p>After purchasing, you can become an ambassador for this product, sell it to others and keep 100% of the proceeds from your sales. I receive no share of those sales.</p>
        <p>Payment processing fees, taxes and other costs associated with your sales remain yours to account for. Participation is optional. The ambassador terms explain how it works.</p>
        <p>I’m offering this because I want useful work to reach more people. If CAM earns a place in how you think and work, you have an opportunity to introduce it to others and earn from the sales you make.</p>
        <div className="cml-real">
          <Head id="cml-real-h">Bring a real situation. Learn how to assess it.</Head>
          <p>Start with something you’re responsible for now. Examine what is happening, what excellence would require and where the gap sits.</p>
        </div>
      </div>
      <Photo name="cml-share" width={495} height={510} className="stl-split-photo" />
    </section>
  );
}

export default function CamClose() {
  return (
    <section id="get" className="stl-close" aria-labelledby="cml-close-h">
      <div className="stl-close-inner stl-close-offer">
        <Photo name="cml-close" alt="Critical Alignment Model for Leaders by Remi Pearson, with its workbook pages" width={515} height={460} className="stl-close-photo" />
        <div className="stl-close-buy">
          <h2 id="cml-close-h" className="stl-h2">Critical Alignment Model for Leaders</h2>
          <p className="cml-with cml-with--light">With Remi Pearson</p>
          <p className="stl-close-includes">{INCLUDES.map(i => i.replace(' with Remi', '')).join(' • ')}</p>
          <Price note="One payment. Self-paced. Immediate access." />
          {CAML_BUY_HREF
            ? <BuyBtn light />
            : <><p className="stl-close-soon">Coming soon</p><NotifyForm product="Critical Alignment Model for Leaders" segment={CATEGORIES.leadership.segment} /></>}
        </div>
      </div>
    </section>
  );
}

// PART 06 — "Love the work? Help it reach someone else." (the ambassador offer) and the closing rust band (#get) with the
// book, the price and the button, or the "tell me when it's ready" sign-up until the product has a checkout link.
import NotifyForm from '@/components/products/NotifyForm';
import { CATEGORIES } from '@/content/products';
import { BuyBtn, Head, Photo } from './ui';
import { INCLUDES, TRIAD_BUY_HREF, TRIAD_PRICE } from '@/content/triad-landing';

export function TriadAmbassador() {
  return (
    <section className="stl-section stl-ambassador" aria-labelledby="stl-amb-h">
      <div className="stl-amb-art">
        <Photo name="stl-rings" width={300} height={540} className="stl-amb-photo" />
        <p className="stl-amb-stat"><strong>100%</strong> of the profit from your sales</p>
      </div>
      <div>
        <Head id="stl-amb-h">Love the work? <span className="stl-h2-sub">Help it reach someone else.</span></Head>
        <p>After purchasing, you’ll have the option to become a Self-Esteem Triad ambassador. You can sell the product for $29 or more and keep 100% of the profit from your sales.</p>
        <p>I receive no share of those sales. Any payment fees, taxes or other selling costs still need to be accounted for. Participation is optional, and the ambassador terms explain how it works.</p>
        <p>I want these tools to reach more people. If the work matters to you and you’d like to share it, this gives you a way to do that and earn from the sales you make.</p>
      </div>
    </section>
  );
}

export default function TriadClose() {
  return (
    <section id="get" className="stl-close" aria-labelledby="stl-close-h">
      <div className="stl-close-inner">
        <h2 id="stl-close-h" className="stl-h2">Make room for yourself <br />in the life you’re already living.</h2>
        <p className="stl-close-lede">Begin with one situation. A conversation you keep replaying. A need you’ve found difficult to name. A yes you’d like to reconsider. The Self-Esteem Triad gives you a framework for exploring it and choosing what to practise next.</p>
        <div className="stl-close-offer">
          <Photo name="stl-kit-rust" alt="The Self-Esteem Triad with Remi Pearson, with its workbook and transcripts" width={580} height={395} className="stl-close-photo" />
          <div className="stl-close-buy">
            <p className="stl-close-name">The Self-Esteem Triad with Remi Pearson</p>
            <p className="stl-close-includes">{INCLUDES.map(i => i.replace(' with Remi', '')).join(' • ')}</p>
            <p className="stl-price">{TRIAD_PRICE}<span>AUD</span></p>
            <p className="stl-close-once">One payment.</p>
            {TRIAD_BUY_HREF
              ? <BuyBtn light />
              : <><p className="stl-close-soon">Coming soon</p><NotifyForm product="The Self-Esteem Triad" segment={CATEGORIES.personal.segment} /></>}
          </div>
        </div>
      </div>
    </section>
  );
}

// PART 01 — "Before you solve the problem, make sure you're solving the right one.": title and copy beside the balanced
// sculpture, then the book beside what's included, the price and the button.
import { BuyBtn, Head, Photo, Price } from './ui';
import { INCLUDES } from '@/content/cam-landing';

export default function CamHero() {
  return (
    <section className="stl-hero cml-hero" aria-labelledby="cml-title">
      <div className="stl-hero-copy">
        <p className="stl-eyebrow">Critical Alignment Model for Leaders <span>With Remi Pearson</span></p>
        <Head id="cml-title" as="h1">Before you solve the problem, make sure you’re solving the right one.</Head>
        <div className="cml-hero-body">
          <p>A project keeps slipping. Someone isn’t performing. Your team agrees in the meeting, then returns to doing things the way they’ve always done them. You can see that something needs to change … working out exactly what to change is where leadership gets interesting.</p>
          <p>The Critical Alignment Model gives you a practical framework for assessing what’s happening, comparing it with what excellence would look like, and deciding where to intervene.</p>
          <p>Use it to make decisions, design projects, lead teams, manage performance and bring structure to your work with clients.</p>
        </div>
      </div>
      <Photo name="cml-hero" width={470} height={900} className="stl-hero-photo" />
      <Photo name="cml-book" alt="Critical Alignment Model for Leaders by Remi Pearson, a dark cloth-bound book with a gold ring and stone sphere on the cover" width={420} height={485} className="stl-hero-book" />
      <div className="stl-buy">
        <p className="stl-includes">{INCLUDES.join(' • ')}</p>
        <Price note="One payment. Self-paced. Immediate access." />
        <BuyBtn />
      </div>
    </section>
  );
}

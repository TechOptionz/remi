// "How do I sell without scripts, pressure or bullshit?" — the fifth rabbit hole from the homepage, after the design
// (Photos-Images/13–15. ULTIMATE INFLUENCE). There was no copy deck, so the copy is transcribed from the designs. Sections in
// components/influence/ (the pieces shared with the other rabbit-hole pages in components/rabbit-holes/), lists and links in
// content/ultimate-influence.ts, styles in styles/rabbit-holes.css (shared) + styles/ultimate-influence.css.
import type { Metadata } from 'next';
import UiHero from '@/components/influence/UiHero';
import UiMeet from '@/components/influence/UiMeet';
import UiMethod from '@/components/influence/UiMethod';
import UiHardToHold from '@/components/influence/UiHardToHold';
import ReadyStrip from '@/components/rabbit-holes/ReadyStrip';
import Product from '@/components/rabbit-holes/Product';
import OtherHoles from '@/components/rabbit-holes/OtherHoles';
import KeepBand from '@/components/rabbit-holes/KeepBand';
import { Brush } from '@/components/rabbit-holes/ui';
import { GUIDE_HREF, GUIDE_PRICE, GUIDE_STEPS } from '@/content/ultimate-influence';

export const metadata: Metadata = {
  title: 'How Do I Sell Without Scripts, Pressure or Bullshit? Ultimate Influence — Remi Pearson',
  description: 'Consultative selling is not a softer script. Ultimate Influence: an eight-step consultative sales process for buying conversations that feel natural, emotionally intelligent and exact.',
};

export default function UltimateInfluencePage() {
  return (
    <main className="kb ui">
      <div className="kb-page">
        <UiHero />
        <UiMeet />
        <ReadyStrip href="#method" arrows="down">Ready to see where your sales conversation breaks?</ReadyStrip>
        <UiMethod />
        <ReadyStrip href="#fast-start" arrows="down">Ready to see the eight steps<br /> in your own conversation?</ReadyStrip>
        <Product
          id="fast-start"
          title={<>The ultimate influence <Brush>fast start</Brush> guide</>}
          art="ui-book"
          price={GUIDE_PRICE}
          lede="A practical, self-directed guide to consultative sales conversations that lead to a quality buying decision without hard closes, pressure or sounding like somebody else."
          steps={GUIDE_STEPS}
          cta={{ label: 'Start with Ultimate Influence', href: GUIDE_HREF }}
          note="Learn in your own time. No classes. No calls. No weekly obligation."
        />
        <UiHardToHold />
        <OtherHoles show={[3, 5]} className="kb-isolation--left" title={<>Nothing important <Brush>stays in</Brush> one box</>} />
      </div>
      <KeepBand variant="envelope" />
    </main>
  );
}

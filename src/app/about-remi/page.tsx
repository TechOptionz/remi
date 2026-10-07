// About Remi. Sections live in components/about/.
import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import Awards from '@/components/about/Awards';
import LifesWork from '@/components/about/LifesWork';
import ChangePossible from '@/components/about/ChangePossible';
import InsideTheGap from '@/components/about/InsideTheGap';
import Relationships from '@/components/about/Relationships';
import Models from '@/components/about/Models';
import BuiltBusiness from '@/components/about/BuiltBusiness';
import ShinyThings from '@/components/about/ShinyThings';
import Foundation from '@/components/about/Foundation';
import ProperConversation from '@/components/about/ProperConversation';
import Stats from '@/components/about/Stats';
import DoingNow from '@/components/about/DoingNow';
import AboutCta from '@/components/about/AboutCta';

export const metadata: Metadata = {
  title: 'About Remi — Remi Pearson',
  description: "Remi Pearson is a bestselling author, entrepreneur and creator of the Critical Alignment Model. Explore her tools and ideas for clearer thinking, better leadership and business growth.",
  openGraph: {
    title: 'About Remi — Remi Pearson',
    description: "Remi Pearson is a bestselling author, entrepreneur and creator of the Critical Alignment Model. Explore her tools and ideas for clearer thinking, better leadership and business growth.",
    images: ['/assets/photos/about-hero.webp'],
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Awards />
      <LifesWork />
      <ChangePossible />
      <InsideTheGap />
      <Relationships />
      <Models />
      <BuiltBusiness />
      <ShinyThings />
      <Foundation />
      <ProperConversation />
      <Stats />
      <DoingNow />
      <AboutCta />
    </main>
  );
}

// About Remi. Sections live in components/about/.
import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
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
  description: "In 2003 Remi Pearson wasn't searching for a new career. One burning question — why some people experience heartbreak and still find a way to triumph — became her life's work.",
  openGraph: {
    title: 'About Remi — Remi Pearson',
    description: "In 2003 Remi wasn't searching for a new career. One burning question became her life's work.",
    images: ['/assets/photos/about-hero.webp'],
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
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

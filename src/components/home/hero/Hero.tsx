'use client';

// Home hero: renders the variant picked in the Variants menu.
import { useSiteState } from '@/lib/site-state';
import { HeroA, HeroB, HeroC, HeroC1, HeroC2, HeroD, HeroE } from './variants';

export default function Hero() {
  const { hero } = useSiteState();

  return (
    <>
      {hero === 'E' && <HeroE />}
      {hero === 'A' && <HeroA />}
      {hero === 'B' && <HeroB />}
      {hero === 'C' && <HeroC />}
      {hero === 'C1' && <HeroC1 />}
      {(hero === 'C2' || hero === 'C3') && <HeroC2 />}
      {hero === 'D' && <HeroD />}
    </>
  );
}

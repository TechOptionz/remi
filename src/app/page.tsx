// Homepage. Each section is its own component in components/home/ — reorder or remove them here.
// The first six follow the homepage design (Photos-Images/NEW HOME PAGE PART ONE + PART TWO).
import Hero from '@/components/home/hero/Hero';
import Spotlight from '@/components/home/Spotlight';
import RabbitHoles from '@/components/home/RabbitHoles';
import Curious from '@/components/home/Curious';
import HomePerspectives from '@/components/home/HomePerspectives';
import EntryProducts from '@/components/home/EntryProducts';
import FigureOut from '@/components/home/FigureOut';
import WhoThisIsFor from '@/components/home/WhoThisIsFor';
import Story from '@/components/home/Story';
import WaysToWork from '@/components/home/WaysToWork';
import Contact from '@/components/home/Contact';
import ClosingCta from '@/components/home/ClosingCta';

// Refreshed hourly so the spotlight's "this week's article" moves on each Monday without a new deploy
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Spotlight />
      <RabbitHoles />
      <Curious />
      <HomePerspectives />
      <EntryProducts />
      <FigureOut />
      <WhoThisIsFor />
      <Story />
      <WaysToWork />
      <Contact />
      <ClosingCta />
    </>
  );
}

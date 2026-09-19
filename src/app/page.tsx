// Homepage. Each section is its own component in components/home/ — reorder or remove them here.
import Hero from '@/components/home/hero/Hero';
import PhotoBand from '@/components/home/PhotoBand';
import RabbitHoles from '@/components/home/RabbitHoles';
import Curious from '@/components/home/Curious';
import Frames from '@/components/home/Frames';
import TrustmeIntro from '@/components/home/TrustmeIntro';
import WhoThisIsFor from '@/components/home/WhoThisIsFor';
import Story from '@/components/home/Story';
import WaysToWork from '@/components/home/WaysToWork';
import Contact from '@/components/home/Contact';
import ClosingCta from '@/components/home/ClosingCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhotoBand />
      <RabbitHoles />
      <Curious />
      <Frames />
      <TrustmeIntro />
      <WhoThisIsFor />
      <Story />
      <WaysToWork />
      <Contact />
      <ClosingCta />
    </>
  );
}

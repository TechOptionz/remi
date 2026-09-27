import Product from '@/components/rabbit-holes/Product';
import ReadyStrip from '@/components/rabbit-holes/ReadyStrip';
import { Brush } from '@/components/rabbit-holes/ui';
import { FIVE_PATHS, FIVE_PATHS_HREF, FIVE_PATHS_PRICE } from '@/content/loving-someone';

// READY FOR THE FIVE PATHS? — the torn rust strip, then the book, price, the five paths and the way in (design parts two and three)
export default function LsFivePaths() {
  return (
    <>
      <ReadyStrip href="#five-paths">Ready for the five paths?</ReadyStrip>
      <Product
        id="five-paths"
        title={<>The five paths to your<br /> <Brush>healthy</Brush> relationship</>}
        art="ls-book"
        price={FIVE_PATHS_PRICE}
        lede="A clear, practical guide to creating relationships that are more honest, secure and capable of repair."
        steps={FIVE_PATHS}
        cta={{ label: 'Start the five paths', href: FIVE_PATHS_HREF }}
        note="Learn in your own time. No classes. No calls. No weekly obligation."
      />
    </>
  );
}

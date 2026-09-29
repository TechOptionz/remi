import PatternBoxes from '@/components/rabbit-holes/PatternBoxes';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { PATTERNS, PATTERN_LABELS } from '@/content/build-an-asset';

// WHERE IS THE BUSINESS STILL BORROWING YOU? — the six hover-expanding pattern boxes (copy in PATTERNS, content/build-an-asset.ts)
export default function BdPatterns() {
  return (
    <PatternBoxes patterns={PATTERNS} labels={PATTERN_LABELS} className="bd-patterns" labelledBy="bd-patterns-h" head={<>
      <Head id="bd-patterns-h">Where is the business <Brush>still borrowing</Brush> you?</Head>
      <p className="kb-sub kb-indent">Founder dependence can look exactly like quality, commitment<br /> and high standards. Until you try to step away.</p>
    </>} />
  );
}

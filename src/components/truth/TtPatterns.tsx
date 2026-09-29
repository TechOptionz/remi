import PatternBoxes from '@/components/rabbit-holes/PatternBoxes';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { PATTERNS, PATTERN_LABELS } from '@/content/tell-me-the-truth';

// WHERE DOES TRUTH GET COMPLICATED FOR YOU? — the six hover-expanding pattern boxes (copy in PATTERNS, content/tell-me-the-truth.ts)
export default function TtPatterns() {
  return (
    <PatternBoxes category="truth" patterns={PATTERNS} labels={PATTERN_LABELS} className="tt-patterns" labelledBy="tt-patterns-h" head={<>
      <Head id="tt-patterns-h">Where does truth get <Brush>complicated</Brush> for you?</Head>
      <p className="kb-sub kb-indent">We don’t usually lie to ourselves outright. We edit, explain, justify and look away.</p>
    </>} />
  );
}

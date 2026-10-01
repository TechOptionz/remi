import PatternBoxes from '@/components/rabbit-holes/PatternBoxes';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { PATTERNS, PATTERN_LABELS } from '@/content/leadership';

// WHERE HAS LEADERSHIP BECOME CARRYING? — the six hover-expanding pattern boxes (copy in PATTERNS, content/leadership.ts)
export default function LdPatterns() {
  return (
    <PatternBoxes category="leadership" patterns={PATTERNS} labels={PATTERN_LABELS} className="ld-patterns" labelledBy="ld-patterns-h" head={<>
      <Head id="ld-patterns-h">Where has leadership <Brush>become carrying?</Brush></Head>
      <p className="kb-sub kb-indent">It can look like commitment from the inside. Until you notice nobody else is becoming more capable.</p>
    </>} />
  );
}

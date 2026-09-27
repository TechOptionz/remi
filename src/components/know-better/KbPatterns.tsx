import PatternBoxes from '@/components/rabbit-holes/PatternBoxes';
import { Brush, Sym } from '@/components/rabbit-holes/ui';
import { PATTERNS, PATTERN_LABELS } from '@/content/know-better';

// WHICH VERSION OF THIS IS YOURS? — the six hover-expanding pattern boxes (copy in PATTERNS, content/know-better.ts)
export default function KbPatterns() {
  return (
    <PatternBoxes patterns={PATTERNS} labels={PATTERN_LABELS} labelledBy="kb-patterns-h" head={<>
      <h2 id="kb-patterns-h" className="kb-h2 kb-center">Which version <Brush>of this is</Brush> yours?</h2>
      <p className="kb-sub kb-patterns-sub"><Sym name="hm-loop" className="kb-patterns-loop" />Because protective patterns rarely introduce themselves politely.</p>
    </>} />
  );
}

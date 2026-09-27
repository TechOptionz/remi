import PatternBoxes from '@/components/rabbit-holes/PatternBoxes';
import PatternPanel from '@/components/rabbit-holes/PatternPanel';
import { Brush, Sym } from '@/components/rabbit-holes/ui';
import { PATTERNS, PATTERN_LABELS } from '@/content/loving-someone';

// WHAT HAPPENS TO YOU WHEN IT REALLY MATTERS? — the six hover-expanding pattern boxes, then its own section: the rust panel
// for "I disappear to keep the peace" with its four tabs (copy in PATTERNS, content/loving-someone.ts)
export default function LsPatterns() {
  return (
    <>
      <PatternBoxes patterns={PATTERNS} labels={PATTERN_LABELS} className="ls-patterns" labelledBy="ls-patterns-h" head={<>
        <div className="ls-starred">
          <Sym name="hm-spark" className="ls-starred-star" />
          <h2 id="ls-patterns-h" className="kb-h2 kb-center">What happens to you<br /> <Brush>when it really</Brush> matters?</h2>
          <Sym name="hm-spark" className="ls-starred-star" />
        </div>
        <p className="kb-sub kb-center">Because we are rarely at our most rational<br /> when connection feels threatened.</p>
      </>} />
      <PatternPanel pattern={PATTERNS[0]} labels={PATTERN_LABELS} art="ls-rings" />
    </>
  );
}

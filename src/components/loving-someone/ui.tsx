import { Sym } from '@/components/rabbit-holes/ui';

/** Left-aligned section heading with the gold star hanging to its left, as on this page's design. */
export function Head({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="ls-head">
      <Sym name="hm-spark" className="ls-head-star" />
      <h2 id={id} className="kb-h2">{children}</h2>
    </div>
  );
}

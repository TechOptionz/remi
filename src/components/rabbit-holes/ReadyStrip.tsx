import { Sym } from './ui';

/** The torn rust strip ("Ready for the five paths?", "Ready to look at your own gap?") that points down to the product. */
export default function ReadyStrip({ href, children, arrows = 'sides' }: { href: string; children: React.ReactNode; arrows?: 'sides' | 'down' }) {
  return (
    <p className={`kb-ready kb-ready--${arrows}`}>
      {arrows === 'sides' && <Sym name="hm-swirl-sm" className="kb-ready-arrow kb-ready-arrow--l" />}
      <a href={href}>{children}{arrows === 'down' && <span className="kb-ready-down" aria-hidden="true">↓</span>}</a>
      {arrows === 'sides' && <Sym name="hm-swirl-sm" className="kb-ready-arrow" />}
    </p>
  );
}

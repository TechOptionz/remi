import Link from 'next/link';
import { Box, Btn, H3, Panel, Part } from '@/components/ideas/ui';
import { RELATED, TRIAD_PRODUCT_HREF } from '@/content/triad';
import TriadNotify from './TriadNotify';

/** Link that picks <a> for same-page anchors and next/link for routes. */
function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return href.startsWith('#') ? <a href={href} className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

// RELATED IDEAS + CTA — three related cards, then "Begin exploring your Self-Esteem Triad"
export default function TriadClose() {
  return (
    <Part n={7}>
      <H3 v={['rules']}><span></span>Related ideas<span></span></H3>
      <div className="next-cards related-cards">
        {RELATED.map(r => (
          <Box as="article" className="ncard" key={r.title}>
            <img src={`/assets/ideas/${r.art}.webp`} alt="" aria-hidden="true" />
            <h4>{r.title}</h4><p>{r.text}</p>
            <SmartLink href={r.href} className="ideas-btn ideas-btn--sm">{r.cta} <span aria-hidden="true">→</span></SmartLink>
          </Box>
        ))}
      </div>

      <Panel tone="rust" className="triad-cta">
        <H3 className="panel-title">Begin exploring your Self-Esteem Triad</H3>
        <p className="panel-body panel-body--center">A guided introduction to understanding your needs, boundaries and emotions, recognising the protective patterns that developed around them, and beginning to build a more grounded relationship with yourself.</p>
        {TRIAD_PRODUCT_HREF
          ? <div className="panel-actions"><Btn href={TRIAD_PRODUCT_HREF} v={['outline']}>Explore the Self-Esteem Triad</Btn></div>
          : <TriadNotify />}
      </Panel>

      <Btn href="/ideas-models#part-3">Back to Ideas &amp; Models</Btn>
    </Part>
  );
}

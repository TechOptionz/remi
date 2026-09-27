import Icon from '@/components/shared/Icon';
import { Brush, Head } from '@/components/rabbit-holes/ui';
import { TRUTH_LEADS } from '@/content/tell-me-the-truth';

// LET TRUTH LEAD — four outlined cards: life, relationship, leadership, business (design part two)
export default function TtLead() {
  return (
    <section className="kb-section tt-lead" aria-labelledby="tt-lead-h">
      <Head id="tt-lead-h"><Brush>Let truth</Brush> lead</Head>
      <p className="kb-sub kb-indent">Truth is not brutality. It is the willingness to stop asking<br /> reality to agree with the story we would prefer.</p>
      <ul className="tt-lead-grid">
        {TRUTH_LEADS.map(t => (
          <li key={t.where}><Icon name={t.icon} size={36} strokeWidth={1.2} /><span className="tt-lead-where">{t.where}</span><span>{t.text}</span></li>
        ))}
      </ul>
    </section>
  );
}

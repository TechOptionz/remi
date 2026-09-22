import { Body, H3, Hand, Part, Star } from '@/components/ideas/ui';
import { LAYERS, LAYERS_PATH } from '@/content/safe';

/** Diagram 1: the visible problem, the protective function and what sits beneath, as a cross-section. */
function CrossSection() {
  return (
    <figure className="strata" aria-label="The problem we see, the truth we avoid">
      <figcaption className="strata-cap">The problem we see, the truth we avoid.</figcaption>
      {LAYERS.map((l, i) => (
        <div className={`stratum stratum--${i + 1}`} key={l.title}>
          <p className="stratum-label">{l.label}</p>
          <h4 className="stratum-title">{l.title}</h4>
          <ul className="stratum-items">{l.items.map(t => <li key={t}>{t}</li>)}</ul>
        </div>
      ))}
      <p className="strata-path"><Star /> {LAYERS_PATH}</p>
    </figure>
  );
}

// WHAT MAKES A PROBLEM "SAFE"? — the protection a safe problem provides, then the cross-section
export default function SafeWhat() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>What makes a problem “safe”?</H3>
      <div className="triad-prose">
        <Body>A safe problem can be deeply painful. It can consume years of someone’s life and have serious consequences. The word safe describes the protection that focusing on it provides.</Body>
        <Hand v={['sm']}>Focusing on a safe problem lets us avoid a more emotionally exposing truth.</Hand>
        <Body>We may be consumed by someone else’s lack of love while barely recognising how often we abandon ourselves to keep their attention. We may be trying to eliminate a behaviour without having any relationship with the loneliness that makes the behaviour so compelling. We may keep returning to an account of why our life cannot change because considering what we could do next brings us into contact with fear we do not yet know how to hold.</Body>
        <Body>None of this needs to be conscious. Someone can sincerely want a problem to end while also relying on the protection it offers. That is part of what makes these patterns so confusing. We can be exhausted by something and still feel threatened by the possibility of living without it.</Body>
        <Body>A safe problem can also be something we can directly change. Procrastination, for example, is a behaviour we can interrupt. But if we focus exclusively on getting ourselves to act, we may never discover what acting would expose us to. Perhaps completing the work means letting it be seen. Perhaps being seen brings the possibility of judgement, and judgement touches a much older uncertainty about whether we are enough.</Body>
        <Hand v={['sm']}>The behaviour matters. Understanding its protective function changes how we approach it.</Hand>
      </div>
      <CrossSection />
    </Part>
  );
}

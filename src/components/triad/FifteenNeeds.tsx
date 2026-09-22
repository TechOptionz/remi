import ZoomArt from '@/components/ideas/ZoomArt';
import { Body, H3, Hand, Part, Star } from '@/components/ideas/ui';
import { NEED_STAGES } from '@/content/triad';

const POSTER_ALT = 'The Fifteen Emotional Needs, drawn as a path up a mountain. Stage one, Safety and Connection: safety and security; stability and predictability; attachment and belonging; love and acceptance; to matter, be seen and be truly known. Stage two, Selfhood and Agency: authenticity and truth; emotional expression; autonomy and agency; freedom and sovereignty; competence and capability. Stage three, Wholeness and Expansion: self-worth and identity; playfulness, joy and aliveness; meaning and purpose; growth and expansion; transcendence and existential peace.';

// THE FIFTEEN EMOTIONAL NEEDS — the hierarchy inside the Needs arm: poster beside the three stages
export default function FifteenNeeds() {
  return (
    <Part n={5} className="fifteen">
      <div id="fifteen-needs" className="fifteen-anchor" />
      <H3 v={['left', 'rule']}>The fifteen emotional needs</H3>
      <div className="triad-prose">
        <Body>Within the needs arm of the triad is a developmental hierarchy of fifteen core human needs. They move from our most foundational requirements for safety and connection towards selfhood, meaning, growth and existential peace.</Body>
      </div>
      <div className="fifteen-grid">
        <ZoomArt name="needs-poster" alt={POSTER_ALT} label="the Fifteen Emotional Needs" className="fifteen-poster" />
        <div className="fifteen-stages">
          {NEED_STAGES.map((s, i) => (
            <section key={s.title} className={`stage stage--${s.tone}`} aria-labelledby={`stage-${i + 1}`}>
              <p className="stage-eyebrow">{s.stage}</p>
              <h4 id={`stage-${i + 1}`} className="stage-title">{s.title}</h4>
              <p className="stage-lede">{s.lede}</p>
              <ol className="stage-list" start={i * 5 + 1}>{s.needs.map(n => <li key={n}>{n}</li>)}</ol>
            </section>
          ))}
          <Hand v={['sm']} className="stage-note"><Star /> Interdependent, not completed like levels in a game. The sequence matters, though.</Hand>
        </div>
      </div>
      <div className="triad-prose">
        <Body>We can spend years pursuing purpose, growth, transcendence or the idea of finally being happy while having very little relationship with safety, belonging or acceptance. What looks like expansion may actually be escape. We keep reaching for something “out there” because turning towards the original hurt feels unbearable.</Body>
        <Hand v={['sm']}>The language may sound elevated. The nervous system may still be trying to survive.</Hand>
        <Body>There is nothing wrong with wanting a meaningful life. The question is whether our pursuit of meaning grows from a secure enough foundation, or whether we are using it to avoid taking care of business closer to home.</Body>
      </div>
    </Part>
  );
}

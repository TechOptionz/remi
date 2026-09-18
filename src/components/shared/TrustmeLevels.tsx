// The seven-level T.R.U.S.T.M.E. stack. Levels live in content/site.ts.
import { TRUSTME_LEVELS } from '@/content/site';

export default function TrustmeLevels() {
  return (
    <ol className="levels" reversed aria-label="The seven levels of T.R.U.S.T.M.E.">
      {TRUSTME_LEVELS.map(l => (
        <li className={l.tone ? `level level--${l.tone}` : 'level'} key={l.num}>
          <span className="level-num">{l.num}</span><span className="level-name">{l.name}</span><span className="level-q">{l.question}</span>
        </li>
      ))}
    </ol>
  );
}

import { Body, H3, Part } from '@/components/ideas/ui';
import { STEPS, stepId } from '@/content/uic';

// WHAT MAKES A SALES CONVERSATION CONSULTATIVE? + the eight steps at a glance (each links to its step below)
export default function UicConsultative() {
  return (
    <Part n={2}>
      <H3 v={['left', 'rule']}>What makes a sales conversation consultative?</H3>
      <div className="triad-prose">
        <Body>In consultative sales, the salesperson takes responsibility for curiosity. You ask, listen, reflect, test your understanding, and make a recommendation based on what you&apos;ve learned. The buyer contributes their knowledge of their own situation. Neither of you has the whole picture at the start.</Body>
        <Body>I don&apos;t think this makes the conversation passive. A skilled salesperson guides it, helps the buyer think through possibilities, and builds commitment where there is a match. The buyer remains free to disagree or decline. In fact, you need them to be able to tell you when you&apos;ve misunderstood something. Otherwise, how would you know whether your recommendation is any good?</Body>
        <Body>That is why I teach Ultimate Influence as an eight-step process. The steps give a conversation direction without requiring you to deliver a pitch at someone. They also give you a way to recognise when you&apos;ve moved ahead before the other person is ready.</Body>
      </div>
      <ol className="uic-path" aria-label="The eight steps">
        {STEPS.map(s => (
          <li key={s.num} className={`uic-stone uic-stone--${s.num}`}>
            <a href={`#${stepId(s)}`}>
              <span className="uic-stone-n" aria-hidden="true">{s.num}</span>
              <span className="uic-stone-name">{s.name}</span>
            </a>
          </li>
        ))}
      </ol>
    </Part>
  );
}

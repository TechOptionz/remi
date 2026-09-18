import { Fragment } from 'react';
import { JOURNEY, type JourneyModel } from '@/content/ideas';
import { Arrow, Art, Body, Btn, H3, Hand, Part, PartHead } from './ui';

/** "Catch → Stay → Choose" */
function Steps({ steps }: { steps: string[] }) {
  return <p className="ideas-steps">{steps.map((s, i) => <Fragment key={s}>{i > 0 && <> <Arrow /> </>}{s}</Fragment>)}</p>;
}

/** One model on the past → present → future line: the human question, the accurate explanation and a way in. */
function JourneyModelCard({ model }: { model: JourneyModel }) {
  return (
    <div className="journey-model">
      <H3 v={['left']}>{model.title}{model.trademark && <sup>™</sup>}</H3>
      <Hand v={['label']}>Human question:</Hand>
      <Body sm>{model.question}</Body>
      <Hand v={['label']}>Accurate explanation:</Hand>
      <Body sm>{model.explanation}</Body>
      {model.tags && <Hand v={['tags']}>{model.tags}</Hand>}
      {model.steps && <Steps steps={model.steps} />}
      {model.fine && <p className="ideas-fine">{model.fine}</p>}
      <Btn href={model.cta.href} v={['sm']}>{model.cta.label}</Btn>
    </div>
  );
}

// PART FOUR · PAST, PRESENT & FUTURE — three models beside the timeline (JOURNEY in content/ideas.ts)
export default function Part4Change() {
  return (
    <Part n={4}>
      <PartHead n={4} rule title="Change has a past, a present and a future" aside={<Art name="p4-tags" />}>
        <Body>Knowing why a pattern exists is not the same as being free to respond differently. These three models work at different points in the human-change journey.</Body>
      </PartHead>
      <div className="journey">
        <img className="journey-line" src="/assets/ideas/p4-timeline.webp" alt="Past, present, future" aria-hidden="true" />
        {JOURNEY.map(model => (
          <Fragment key={model.title}>
            <JourneyModelCard model={model} />
            {model.art ? <Art name={model.art} className="journey-art" /> : <div className="journey-art"></div>}
          </Fragment>
        ))}
      </div>
      <Hand v={['center']}>Different questions. Different moments. One human life.</Hand>
      <Btn href="#part-5">Continue to alignment</Btn>
    </Part>
  );
}

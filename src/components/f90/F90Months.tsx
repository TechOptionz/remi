import Link from 'next/link';
import { Body, Box, H3, Hand, Part } from '@/components/ideas/ui';
import { MONTH_ONE_QUESTIONS, MONTH_THREE_MODELS, PHASES } from '@/content/f90';

/** Heading for one month: its number, its days and its title. */
function MonthHead({ num, children }: { num: number; children: React.ReactNode }) {
  const p = PHASES[num - 1];
  return (
    <h3 className={`ideas-h3 ideas-h3--left ideas-h3--rule f90-month-h f90-month-h--${num}`} id={`month-${num}`}>
      <span className="f90-month-n" aria-hidden="true">{String(p.num).padStart(2, '0')}</span>
      {children}
      <span className="f90-month-days">{p.days}</span>
    </h3>
  );
}

/** The phase card from the poster, beside the month's copy. */
function PhaseCard({ num }: { num: number }) {
  const p = PHASES[num - 1];
  return (
    <aside className={`f90-phase f90-phase--${num}`} aria-label={`${p.days}: ${p.title}`}>
      <span className="f90-phase-days">{p.days}</span>
      <h4>{p.title}</h4>
      <ul>{p.verbs.map(v => <li key={v}>{v}</li>)}</ul>
      <p className="f90-phase-note">{p.note}</p>
    </aside>
  );
}

// MONTH ONE + MONTH TWO + AN EXAMPLE + MONTH THREE
export default function F90Months() {
  return (
    <Part n={3}>
      <MonthHead num={1}>Month one: observe and map reality</MonthHead>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>The first month is much more than listening politely while everybody tells you what they want you to hear. You are building a map of reality. That requires curiosity, questions, observation across different settings, access to the available data and the patience to notice contradictions without rushing to explain them. You are learning how the team thinks, decides, communicates, responds under pressure and understands its purpose.</Body>
          <Body>Begin with the outcome. What is this team here to produce, for whom, and how will anyone know whether it has succeeded? Ask the formal question and then listen for the lived answer. People may repeat a company objective while organising their days around avoiding complaints, pleasing a senior stakeholder or completing activities that are easy to count. Those are not minor discrepancies. They reveal the difference between the written and unwritten ground rules.</Body>
          <Body>Then examine Environment and Structure in detail. What is permitted here? What is rewarded? What gets someone quietly excluded? How safe is it to disagree with a senior person? What happens when a promise cannot be kept? Are team members personally responsible for outcomes or only for completing their portion of a task? Which standards are genuinely uncompromising and which are applied according to mood, hierarchy or convenience?</Body>
          <Body>Look at what is measured and what remains invisible. Find out who measures it, how often, why it matters and what decisions are made from the information. A dashboard that nobody uses is decoration. Data collected without interpretation creates administrative work rather than intelligence. Equally, a team may care deeply about an outcome and have no meaningful way of detecting whether it is improving.</Body>
          <Body>Trace the flow of work. Where does something begin, who receives it next, what has to be true before it can move forward, and where does it repeatedly slow down? What knowledge lives in one person’s head? Where are approvals duplicated? Which bottlenecks are treated as personality defects because nobody has mapped the sequence? Talk with the people closest to the work. They often know exactly where the friction is, even if they have stopped believing anyone wants to hear it.</Body>
          <Body>During this first month, you are assessing all five dimensions of CAM without making premature conclusions about the final one. You will notice people, of course, but keep asking what the environment, structure and implementation are eliciting from them. The questions you are trying to answer include:</Body>
        </div>
        <PhaseCard num={1} />
      </div>
      <Box className="arm-box">
        <ul className="arm-list">{MONTH_ONE_QUESTIONS.map(q => <li key={q}>{q}</li>)}</ul>
      </Box>
      <div className="triad-prose">
        <Body>Your credibility in this phase comes from the quality of your attention. Ask questions you do not already know the answer to. Say when you do not understand something. Follow the work far enough to discover whether the first explanation survives contact with reality. Let people see that you are interested in the system rather than collecting evidence for a verdict you formed before arriving.</Body>
        <Hand v={['sm']}>Your credibility comes from the quality of your attention.</Hand>
      </div>

      <MonthHead num={2}>Month two: interrogate what you think you understand</MonthHead>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>By the second month, you should have an emerging account of what is present. Now you begin to question it. This is where observation becomes synthesis. You compare what people say with what the data shows, what the process promises with what actually occurs, and what the organisation values with what leaders reward when the pressure is on.</Body>
          <Body>The central question is: what is the observed reality? Be careful with the word observed. A confident opinion is not an observation. A complaint repeated by several people may be important, but repetition does not automatically make the explanation accurate. If the team says one person is unreliable, trace the dependencies around their work. If everyone believes a meeting is useless, identify its intended purpose, who needs its information and what happens elsewhere when the meeting is cancelled. If a process is described as bureaucratic, examine whether the process is unnecessary or whether people resent the accountability it creates.</Body>
          <Body>Begin a trust analysis. Trust is not created through friendliness or team-building theatre. It is built when people say what they mean, do what they said they would do, admit what they do not know, communicate early when something changes and apply standards consistently. Look for the gap between promise and delivery, between what is said in the room and what is said afterwards, and between the permission to contribute and what happens when somebody offers a difficult truth.</Body>
          <Body>This month is also where you test your own interpretation. Bring your emerging map back to the team. Explain what you think you are seeing and invite correction. Ask what you have missed. Ask whose perspective is absent. Transparency matters because secret diagnosis produces anxiety, while shared inquiry develops people’s capacity to think about the whole system. You are already developing leaders by showing them how to observe without blame and question without turning every conversation into a contest.</Body>
          <Body>Use contrast analysis to locate the differentiators. If this is the outcome we intend and this is the outcome we are producing, what accounts for the gap? Some gaps will sit in Environment: a protective culture, conflicting values or a lack of psychological and intellectual safety. Others will sit in Structure: missing benchmarks, unclear authority, inadequate tools or an incoherent sequence. Some will sit in Implementation: the process exists, but is not trained, followed, measured or improved. Only some gaps will be located primarily in People.</Body>
        </div>
        <PhaseCard num={2} />
      </div>

      <H3 v={['left', 'rule']}>An example: the team that looked resistant</H3>
      <div className="triad-prose">
        <Body>Imagine a newly appointed leader entering a service team described as resistant to change and weak on accountability. Customer response times are inconsistent, two experienced team members appear cynical, and newer people wait to be told what to do. It would be easy to begin with a speech about attitude, announce a tougher performance standard and identify the people who seem least enthusiastic.</Body>
        <Body>A CAM review produces a different picture. The team has three competing priorities, each described as urgent by a different senior stakeholder. Response time is reported, but the clock begins at different points depending on who prepares the data. The operating manual describes a clean sequence that the current software cannot support. Experienced people have raised the same bottleneck several times and learned that doing so makes them look negative. New people wait because acting independently has previously led to public correction. The unwritten ground rule is clear: protect yourself, keep senior people happy and do not own a decision that may later be questioned.</Body>
        <Body>The leader does not excuse poor work. They correct the leadership conditions that made poor work predictable. They clarify the primary outcome, establish one definition for the measure, repair the sequence, define decision rights and make it safe to identify a bottleneck without being labelled difficult. Once those changes are in place, individual accountability becomes much easier to see and much fairer to hold. The team did not need a more forceful leader. It needed a leader capable of seeing the system it had been surviving.</Body>
      </div>
      <p className="ideas-note triad-note">The team did not need a more forceful leader. It needed a leader capable of seeing the system it had been surviving.</p>

      <MonthHead num={3}>Month three: improve the system and develop its leadership capacity</MonthHead>
      <div className="dsr-grid dsr-grid--ladder">
        <div className="triad-prose">
          <Body>The third month is where you begin making deliberate improvements, establishing useful rhythms and developing the team’s capacity to continue the work without depending on you for every answer. The aim is not to complete leadership in 90 days. It is to leave the first 90 days with an accurate map, trusted working relationships, clear priorities and a way of improving that the team can participate in.</Body>
          <ul className="f90-models">
            {MONTH_THREE_MODELS.map(m => <li key={m.name}>Use <Link href={m.href}>{m.name}</Link> {m.use}</li>)}
          </ul>
          <Body>Improvement should include rhythm without creating bureaucracy for its own sake. Establish meetings that have an intelligible purpose. Create measures that support decisions. Clarify who leads, who contributes, who decides and who needs to be informed. Make commitments visible. Review what was learned, not only what was completed. Notice where the system is improving and where an intervention has produced an unintended consequence.</Body>
          <Body>Most importantly, begin developing future leaders. Do not make yourself the permanent centre of competence. Invite the person with the strongest fit to lead the relevant work. Ask team members to explain the reasoning behind a recommendation, assess consequences, identify the benchmark of excellence and consider what would make the result replicable. Leadership capacity grows when people are trusted with real thinking and real responsibility, then supported to learn from what happens.</Body>
          <Body>Functional flow does not mean vagueness about authority. Someone still owns the decision. The difference is that title does not silence expertise, and collaboration does not become an endless committee. The responsible person listens widely, decides clearly, explains enough of the reasoning for others to understand the direction, and then the team throws its weight behind the decision. If new evidence appears, the decision can be revisited through the same disciplined process. Until then, alignment matters.</Body>
          <Hand v={['sm']}>Do not make yourself the permanent centre of competence.</Hand>
        </div>
        <PhaseCard num={3} />
      </div>
    </Part>
  );
}

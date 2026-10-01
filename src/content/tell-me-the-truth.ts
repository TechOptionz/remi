// "Tell me the truth. What am I not seeing?" — the third rabbit hole from the homepage (/tell-me-the-truth).
// The six patterns are carried over word for word from the copy deck (TELL ME THE TRUTH — WHAT TO DO WITH THE BOXES, Sept 2026).
import { ENTRY_PRICE } from '@/content/home';
import type { Pattern } from '@/content/rabbit-holes';

// The four answers under each pattern, in the order of PATTERN_LABELS
export const PATTERN_LABELS = ['What I say', 'What keeps happening', 'What I’m protecting', 'What truth requires'];

export const PATTERNS: Pattern[] = [
  {
    title: 'I keep circling the same decision',
    panel: ['You collect more information, revisit the same arguments and call it careful thinking.', 'Sometimes the missing piece isn’t more evidence.', 'It’s the willingness to accept what the evidence already means.'],
    answers: [
      'I just need a little more time or information before I decide.',
      'I return to the same question without getting any closer to a choice.',
      'A decision would mean giving up other possibilities and taking responsibility for what happens next.',
      'I need to name what I already know, what remains uncertain and what I’m willing to choose anyway.',
    ],
  },
  {
    title: 'I say something matters, but behave as if something else does',
    panel: ['You genuinely care about what you say you value.', 'Yet your time, attention or choices keep going elsewhere.', 'The gap between intention and behaviour has something to tell you.'],
    answers: [
      'This matters to me. I want to make it a priority.',
      'Other demands take its place, and I keep promising I’ll get to it later.',
      'My current choices may be meeting a need I haven’t admitted, or helping me avoid the cost of changing.',
      'I need to look honestly at what my behaviour is prioritising, then decide whether to change my choices or revise what I claim to want.',
    ],
  },
  {
    title: 'I cannot tell whether it’s intuition or fear',
    panel: ['Something in you says stop, but you cannot tell what it is responding to.', 'There may be a real signal worth listening to.', 'There may also be an old alarm sounding in a new situation.'],
    answers: [
      'I have a feeling about this, but I don’t know whether to trust it.',
      'I swing between dismissing my reaction and treating it as certainty.',
      'If I can be completely sure before acting, I won’t have to risk getting it wrong.',
      'I need to slow down, identify what I’ve actually observed and explore what my response may be remembering.',
    ],
  },
  {
    title: 'I keep explaining instead of changing',
    panel: ['You understand why you do it and can describe the pattern beautifully.', 'Then the same situation arrives, and you respond in the same way.', 'Insight has become familiar, but the behaviour is still doing a job.'],
    answers: [
      'I know exactly why I’m like this.',
      'I explain the pattern after it happens, then repeat it when I’m under pressure.',
      'Understanding feels safer than trying something unfamiliar and facing the feelings that come with it.',
      'I need to notice the pattern as it begins and practise one different response while it still feels uncomfortable.',
    ],
  },
  {
    title: 'Everyone around me can see it except me',
    panel: ['People who care about you keep pointing to the same thing.', 'You have reasons for disagreeing, and some of them may be fair.', 'Still, it may be worth asking what they can see from where they stand.'],
    answers: [
      'They don’t understand the whole situation.',
      'Different people raise a similar concern, and I find a reason to dismiss each one.',
      'Taking their observation seriously might change how I see myself or a choice I’ve already made.',
      'I need to listen for the pattern in what they’re saying, check it against my own experience and stay open long enough to learn something.',
    ],
  },
  {
    title: 'I know the truth, but I don’t want the consequences',
    panel: ['You may already be clear about what is happening and what you need to do.', 'The difficulty lies in what honesty could disrupt.', 'So you keep negotiating with a truth that has not gone away.'],
    answers: [
      'It’s complicated. Now isn’t the right time.',
      'I delay, accommodate or revisit a question I’ve privately answered.',
      'Speaking or acting on the truth could bring loss, conflict or a change I cannot undo.',
      'I need to acknowledge the real cost, find the support I need and decide what I can do without pretending I don’t know.',
    ],
  },
];

// ---------- Links ----------
export const CAM_HREF = '/ideas-models/critical-alignment-model';
/** "Start the truth audit": the enquiry form preset to Books & programs until the product page exists. */
export const TRUTH_AUDIT_HREF = '/products/find-the-gap-in-your-own-life';

// ---------- Four questions I keep returning to (each opens the Critical Alignment Model chapter) ----------
export const QUESTIONS = [
  { q: 'What do I say I want?', text: 'Name the outcome without shrinking it to what feels safe.' },
  { q: 'What am I actually producing?', text: 'Look at the pattern, not the explanation.' },
  { q: 'What am I protecting by keeping this?', text: 'Find the certainty, identity, belonging or safety the pattern preserves.' },
  { q: 'What would truth require now?', text: 'A decision, a conversation, a boundary or a different action.' },
];

// ---------- Let truth lead ----------
export const TRUTH_LEADS = [
  { icon: 'northstar', where: 'In your own life', text: 'Stop negotiating with what you already know.' },
  { icon: 'heart', where: 'In a relationship', text: 'Say the true thing without punishing, rescuing or disappearing.' },
  { icon: 'crown', where: 'In leadership', text: 'Respond to what is happening, not merely what was promised.' },
  { icon: 'growth', where: 'In business', text: 'Build from what the evidence says, not what the ego needs.' },
] as const;

// ---------- The Truth Audit (same $29 entry price as the homepage products) ----------
export const TRUTH_AUDIT_PRICE = ENTRY_PRICE;
export const TRUTH_AUDIT_STEPS = ['Name the outcome you actually want', 'Get honest about what is happening now', 'Identify what the pattern may be protecting', 'See what truth requires next'];

// ---------- Conversations to disappear into: each opens the Perspectives archive on its closest topic ----------
export const TOPIC_LINKS = [
  { icon: 'brain', title: 'Self-deception and the stories we protect', topic: 'Human change' },
  { icon: 'compass', title: 'Decisions, values and alignment', topic: 'Ideas & meaning' },
  { icon: 'eye', title: 'Why insight does not always change behaviour', topic: 'Human change' },
  { icon: 'people', title: 'Truth in relationships, leadership and business', topic: 'Founders & business' },
] as const;

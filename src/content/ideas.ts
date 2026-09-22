// Content for the Ideas & Models page: the lists and cards each part renders. Headings and body copy live in the part files.

/** Where "Explore …" buttons go until the product pages exist: the homepage enquiry form, preset to Books & programs. */
export const PRODUCTS_HREF = '/?interest=Products#contact';

// ---------- Part One: clickable regions over the hand-drawn map (percentages of the image) ----------
export const MAP_HOTSPOTS = [
  { href: '#part-3', label: 'Human needs & self', x: '36.5%', y: '2%', w: '26%', h: '23%' },
  { href: '#part-4', label: 'Emotional change', x: '3%', y: '31%', w: '29%', h: '31%' },
  { href: '#part-5', label: 'Meaning & alignment', x: '68%', y: '28%', w: '31%', h: '32%' },
  { href: '#part-6', label: 'Leadership & human systems', x: '11%', y: '69%', w: '29%', h: '29%' },
  { href: '#part-8', label: 'Influence & building beyond you', x: '56%', y: '69%', w: '32%', h: '29%' },
  { href: '#part-2', label: 'Let truth lead — the body of work at a glance', x: '40%', y: '38%', w: '20%', h: '30%' },
];

// ---------- Part Two: the body of work at a glance ----------
export type GlanceIconName = 'triangle' | 'warning' | 'spiral' | 'waves' | 'rose' | 'venn' | 'team' | 'summit' | 'days' | 'exchange' | 'growth';
export type GlanceCard = { href: string; icon: GlanceIconName; title: string; question: string; tag?: string };
export const GLANCE: { name: string; href: string; art: string; cards: GlanceCard[] }[] = [
  { name: 'Human foundations', href: '#part-3', art: 'p2-v1', cards: [
    { href: '/ideas-models/self-esteem-triad', icon: 'triangle', title: 'Self-Esteem Triad', question: 'Needs. Boundaries. Emotions.', tag: 'Fifteen Emotional Needs · Within the Needs arm' },
    { href: '/ideas-models/safe-problems-risky-truths', icon: 'warning', title: 'Safe versus Risky Problems', question: 'Am I fixing out there so I do not have to turn within?' },
  ] },
  { name: 'Emotional change', href: '#part-4', art: 'p2-v2', cards: [
    { href: '/ideas-models/deep-state-repatterning', icon: 'spiral', title: 'Deep State Repatterning', question: 'How is the past still shaping what happens now?' },
    { href: '/ideas-models/emotion-integration-technique', icon: 'waves', title: 'Emotion Integration Technique', question: 'What do I do in the live moment of activation?' },
  ] },
  { name: 'Meaning & alignment', href: '#part-5', art: 'p2-v3', cards: [
    { href: '/ideas-models/values-alignment-technique', icon: 'rose', title: 'Values Alignment Model', question: 'How do I build a meaningful life that is actually mine?' },
    { href: '/ideas-models/critical-alignment-model', icon: 'venn', title: 'Critical Alignment Model', question: 'Where is alignment really breaking?', tag: 'Meta Dynamics Profiling Tool · The measurement application' },
  ] },
  { name: 'Leadership & evolution', href: '#part-6', art: 'p2-v4', cards: [
    { href: '/ideas-models/trustme-model', icon: 'team', title: 'T.R.U.S.T.M.E.', question: 'What operating logic is this person, team or organisation using?' },
    { href: '/ideas-models/disruptive-leadership', icon: 'summit', title: 'Disruptive Leadership', question: 'How do I lead without carrying everybody?' },
    { href: '/ideas-models/first-90-days', icon: 'days', title: 'Your First 90 Days as a Leader', question: 'Observe before you intervene. Understand before you decide.', tag: 'Benchmarking · Critical Thinking · CAM Top Five · Written & Unwritten Ground Rules · 90-Day Review' },
  ] },
  { name: 'Influence & enterprise', href: '#part-8', art: 'p2-v5', cards: [
    { href: '#part-8', icon: 'exchange', title: 'Ultimate Influence Consultative Sales', question: 'How do I help someone make a quality buying decision?' },
    { href: '#part-8', icon: 'growth', title: 'Core → Improve → Innovate', question: 'What deserves most of my attention?', tag: 'Practice to Business · The field-tested application' },
  ] },
];

// ---------- Part Three: the fifteen emotional needs (numbered 1–15 across the three columns) ----------
export const EMOTIONAL_NEEDS: { tone: 'rust' | 'gold' | 'olive'; title: string; needs: string[] }[] = [
  { tone: 'rust', title: 'Safety & connection', needs: ['Safety & Security', 'Stability & Predictability', 'Attachment & Belonging', 'Love & Acceptance', 'To Matter, Be Seen & Truly Known'] },
  { tone: 'gold', title: 'Selfhood & agency', needs: ['Authenticity & Truth', 'Emotional Expression', 'Autonomy & Agency', 'Freedom & Sovereignty', 'Competence & Capability'] },
  { tone: 'olive', title: 'Wholeness & expansion', needs: ['Self-Worth & Identity', 'Playfulness, Joy & Aliveness', 'Meaning & Purpose', 'Growth & Expansion', 'Transcendence & Existential Peace'] },
];

// ---------- Part Four: three models along the past → present → future line ----------
export type JourneyModel = {
  title: string; trademark?: boolean; question: string; explanation: string;
  tags?: string; steps?: string[]; fine?: string;
  cta: { label: string; href: string };
  art: string | null; // illustration shown beside the model (null leaves the space empty)
};
export const JOURNEY: JourneyModel[] = [
  { title: 'Deep State Repatterning', trademark: true,
    question: 'Why does something that happened long ago still have so much power now?',
    explanation: 'A complete methodology for finding the emotional history beneath a current pattern, loosening the charge and limiting beliefs attached to earlier experiences, reclaiming the authentic self and carrying new learning into action.',
    tags: 'Detailed Personal History · emotional and belief release · Five Steps to Lack · Five Steps to Self-Love · future vision',
    cta: { label: 'Explore DSR', href: '/ideas-models/deep-state-repatterning' }, art: null },
  { title: 'Emotion Integration Technique',
    question: 'What happens in the thirty seconds when I know better and still leave myself?',
    explanation: 'EIT works in the live moment of activation. Catch the Point of Departure. Stay with the emotion beneath the protective response. Choose while remaining connected to yourself.',
    steps: ['Catch', 'Stay', 'Choose'],
    cta: { label: 'Explore EIT', href: '/ideas-models/emotion-integration-technique' }, art: 'p4-woman' },
  { title: 'Values Alignment Model',
    question: 'How do I build a life that feels meaningful because it is actually mine?',
    explanation: 'A research-informed framework for strengthening meaning in life by connecting personal values with self-concordant goals, action, self-regulation and reflection.',
    steps: ['Exploration', 'Elicitation', 'Direction', 'Action', 'Reflection'],
    fine: "Developed through Remi's Master of Applied Positive Psychology capstone, drawing on positive psychology, evidence-based coaching, ACT and self-concordance research.",
    cta: { label: 'Explore the technique', href: '/ideas-models/values-alignment-technique' }, art: 'p4-compass' },
];

// ---------- Part Five: the research behind CAM ----------
export const CAM_STATS = [
  { num: '4', label: 'Domains' },
  { num: '16', label: 'Leadership dimensions' },
  { num: '41', label: 'Thinking characteristics' },
  { num: '535', label: 'People in the normative sample' },
];
export const CAM_PAIR = [
  { title: 'CAM is the model', text: 'It reveals where alignment is breaking and what kind of thinking or action the situation requires.', cta: 'Explore CAM', href: '/ideas-models/critical-alignment-model' },
  { title: 'The Meta Dynamics™ Profiling Tool is the measurement', text: 'It translates CAM into a developmental assessment of thinking preferences across 16 dimensions and 41 characteristics.', cta: 'Take the mini profiler', href: PRODUCTS_HREF },
];

// ---------- Part Six ----------
export const DISRUPTIVE_LEADERSHIP_PILLARS = ['Truth', 'Responsibility', 'Accountability', 'Healthy relationships', 'Holding space'];

// ---------- Part Seven: leadership tools ----------
export const LEADERSHIP_TOOLS = [
  { title: 'Benchmarking & modelling excellence', text: 'Decide what excellent looks like. Find an aligned model of excellence. Study the thinking, process and standards. Apply it, measure it and adapt.', note: 'Research-informed practice, not a claim that everything must be invented from scratch.' },
  { title: 'Critical thinking criteria', text: 'What is the rationale? What facts are needed? What problem does this solve? Which CAM domain is actually weak? What are the consequences, costs and possibilities? Is the decision replicable and sustainable?', note: 'A decision tool for replacing reflex with inquiry.' },
];
export const TOOLKIT = [
  { title: 'CAM Top Five System', text: 'Weekly priorities that keep 90-day goals moving.' },
  { title: 'Written & unwritten ground rules', text: 'The culture on paper versus what actually happens.' },
  { title: '90-day review', text: 'Benchmarks, development, performance and the next cycle.' },
];

// ---------- Part Eight ----------
export const SALES_STEPS = ['Connect', 'Build', 'Flip', 'Match', 'Recommend', 'Backtrack', 'Close', 'Future pace'];
export const PRACTICE_VS_BUSINESS = [
  { title: 'Practice', text: 'The owner delivers the widget. The owner goes away and so does the income.' },
  { title: 'Business', text: 'Core can be delivered by others through documented systems, benchmarks and capability.' },
];
export const PROOF = [
  { big: 'Nearly $200M', small: 'in revenue' },
  { big: '11,000+', small: 'coaches trained' },
  { big: 'The Coaching Institute', small: 'built & sold' },
];

// ---------- Part Nine ----------
export const RESEARCH = [
  { title: 'Values Alignment Model', paras: ["Created through Remi's Master of Applied Positive Psychology capstone.", 'Research-informed by positive psychology, evidence-based coaching, self-concordance, values, goals, ACT and self-regulation.'], cta: 'Read the research' },
  { title: 'Organisational Wellbeing', paras: ["An applied study of The Coaching Institute's culture during COVID.", 'The work identified authentic leadership and playfulness as important positive practices alongside established organisational-wellbeing research.'], cta: 'Explore the study' },
  { title: 'Critical Alignment & the Profiler', paras: ['CAM was challenged, operationalised and translated into the Meta Dynamics Profiling Tool.', 'Reliability and factor analysis were used to test the measurement application.'], cta: 'See the evidence' },
];
export const NEXT_STEPS = [
  { art: 'p9-mic', title: 'Watch Perspectives', text: 'Come for the conversation. Stay for the question.', cta: 'Watch or listen', href: '/perspectives' },
  { art: 'p9-comp', title: 'Explore the programs', text: 'Do something useful with all this.', cta: 'See the programs', href: '/programs' },
  { art: 'p9-books', title: 'Meet the books', text: 'Six books. A few questions I still cannot leave alone.', cta: 'Meet the books', href: '/#work' },
  { art: 'p9-star', title: 'Invite Remi', text: 'Podcasts, panels, keynotes, books and senior-level facilitation.', cta: 'Invite Remi', href: '/invite-remi' },
];

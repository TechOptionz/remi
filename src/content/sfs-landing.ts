// Selling from Stage's sales page (/products/selling-from-stage), from the seven-page design "Selling-from-Stage-Complete-
// Seven-Page-Landing-Page" (Oct 2026), copy carried over word for word. It is listed both as a self-paced product
// (PRODUCTS, the influence range) and on /programs (PROGRAMS). Component: components/sfs-landing/SfsLanding.tsx; styles:
// styles/sfs-landing.css on the shared kit (landing.css, cam-landing.css); photos cut from the design in
// public/assets/sfs-landing/. Buttons go to the closing band (#get) until the product has a `buyHref`.
import { productBySlug } from '@/content/products';

export const SFS_SLUG = 'selling-from-stage';
const product = productBySlug(SFS_SLUG);

export const SFS_BUY_HREF = product?.buyHref ?? null;
export const SFS_CTA_HREF = SFS_BUY_HREF ?? '#get';

/** Prices before GST, as the design prints them; the GST-inclusive figures add Australia's 10%. */
const money = (n: number) => `$${n.toLocaleString('en-AU', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })}`;
const gst = (n: number) => `$${(n * 1.1).toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const PRICE = 1997, INSTALMENT = 499, INSTALMENTS = 5;
export const SFS_PRICE = money(PRICE);
export const SFS_PRICE_INC_GST = gst(PRICE);
export const SFS_INSTALMENT = money(INSTALMENT);
export const SFS_INSTALMENT_INC_GST = gst(INSTALMENT);
export const SFS_PLAN_TOTAL = money(INSTALMENT * INSTALMENTS);
export const SFS_PLAN_TOTAL_INC_GST = gst(INSTALMENT * INSTALMENTS);

export const FOR_WHOM_SHORT = ['Coaches', 'Speakers', 'Business owners', 'Online marketers', 'Event presenters'];
export const FORMAT_SHORT = ['Recorded teaching with Remi', 'Workbooks', 'Supporting resources'];

export const PATH = [
  { name: 'Before you present', text: 'Know your market, establish your character as the speaker and design an offer that fits the problem you are addressing.' },
  { name: 'While you present', text: 'Create connection, gain permission, engage through useful content and seeding, then reveal and explain the offer.' },
  { name: 'After the pitch', text: 'Follow up with interested people and help new buyers feel clear about their decision and what happens next.' },
];

export const LEARN = [
  { name: 'Understand your audience', text: 'Identify the outcome they want, the problem they experience and the concerns that influence a buying decision. Use that understanding to choose relevant examples and language.' },
  { name: 'Strengthen your offer', text: 'Clarify who it is for, what it includes and how each part helps. Explain features, benefits and what those benefits mean in the buyer’s situation.' },
  { name: 'Build connection and participation', text: 'Open the room with purpose. Establish your role as the speaker, invite engagement and prepare the audience for a possible offer.' },
  { name: 'Make the transition to the sale', text: 'Connect the content to the offer through seeding. Reveal what you have created and explain why it is relevant to the people listening.' },
  { name: 'Present value and price', text: 'Help the audience understand the offer before asking for a decision. Address fit, questions, genuine urgency and the next step.' },
  { name: 'Follow through', text: 'Plan the communication with people who have expressed interest and the reassurance buyers need after saying yes.' },
];

export const WHO = [
  { icon: 'people', text: 'Coaches and consultants presenting a program or service.' },
  { icon: 'mic', text: 'Speakers and facilitators who want their presentations to lead to enquiries or sales.' },
  { icon: 'bars', text: 'Business owners and online marketers developing a webinar around an existing offer.' },
  { icon: 'stage', text: 'Event presenters who need to explain an offer clearly in a live room.' },
] as const;

export const MODULES = [
  { part: 'Part one', title: 'Before you step on stage', steps: [
    { name: 'Know your market', text: 'Define your audience, their desired outcome, the problem they want solved and the concerns that shape their decision.' },
    { name: 'Your character as the speaker', text: 'Clarify how you establish credibility, communicate your experience and lead an audience.' },
    { name: 'Design the offer', text: 'Work through audience fit, inclusions, features, benefits, meaning, value and price.' },
    { name: 'Build the presentation', text: 'Choose content, stories and examples that support the offer. Plan the sequence and rehearse the transitions.' },
  ] },
  { part: 'Part two', title: 'The presentation and pitch', steps: [
    { name: 'Connection and permission', text: 'Open the room, invite participation and establish permission for the teaching and the offer.' },
    { name: 'Engagement and seeding', text: 'Use useful content and participation to prepare the audience for the decision ahead.' },
    { name: 'The reveal', text: 'Move from teaching to introducing the offer. Explain what it is and why it belongs in this conversation.' },
    { name: 'Who it is for and the price', text: 'Clarify suitability and explain the inclusions, their benefits and the investment.' },
    { name: 'The compelling offer', text: 'Bring the value together. Address security and genuine urgency where relevant to your offer.' },
    { name: 'The call to action', text: 'Make the next step clear. Adapt the invitation and response process for a live stage or webinar.' },
  ] },
  { part: 'Part three', title: 'After the pitch', steps: [
    { name: 'Follow-up', text: 'Plan the next conversation with people who have shown interest or have questions.' },
    { name: 'Post-sale reassurance', text: 'Help buyers feel clear about their decision, expectations and what happens next.' },
  ] },
];

export const INCLUDED = ['Recorded teaching with Remi', 'Workbooks', 'Supporting resources', 'Webinar delivery'];

export const FAQ = [
  { q: 'Is this live or self-paced?', a: 'It is a self-paced online program with recorded teaching. Work through the material around your own schedule.' },
  { q: 'Does it include webinar delivery?', a: 'Yes. It covers webinar delivery as well as live-stage presenting.' },
  { q: 'Do I need an existing offer?', a: 'Yes. You need something to sell. Your offer can need refining, and offer design is part of the preparation.' },
  { q: 'Will Remi review my presentation?', a: 'No. Individual feedback is not included in this self-paced program.' },
  { q: 'Is this only for experienced speakers?', a: 'It is introductory. Bring an existing offer and a willingness to develop and practise your presentation.' },
  { q: 'What resources are included?', a: 'Recorded teaching with Remi, workbooks and supporting resources to help you apply the work.' },
];

export const PROGRAM_INCLUDES = [
  { icon: 'play', text: 'Recorded teaching with Remi' },
  { icon: 'document', text: 'Workbooks and supporting resources' },
  { icon: 'people', text: 'Preparation and offer design' },
  { icon: 'tv', text: 'Live-stage and webinar delivery' },
  { icon: 'mic', text: 'Pitch structure and communication' },
  { icon: 'target', text: 'Follow-up and post-sale reassurance' },
] as const;

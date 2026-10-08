// The Critical Alignment Model for Leaders product's sales page (/products/critical-alignment-model-for-leaders), from the
// seven-part design "Critical-Alignment-Model-for-Leaders-Mockup" (Oct 2026), copy carried over word for word. Sections in
// components/cam-landing/, styles in styles/cam-landing.css on the shared kit in styles/landing.css, photos cut from the
// design in public/assets/cam-landing/. The price comes from the product in content/products.ts (shown plus GST, with the
// GST-inclusive figure worked out here); until it has a `buyHref` every buy button goes to the closing band (#get), which
// takes "tell me when it's ready" sign-ups instead of a payment.
import { productBySlug } from '@/content/products';
import { CAM_PROFILER_HREF } from '@/content/ideas';

export const CAML_SLUG = 'critical-alignment-model-for-leaders';
const product = productBySlug(CAML_SLUG);

export const CAML_BUY_HREF = product?.buyHref ?? null;
export const CAML_CTA_HREF = CAML_BUY_HREF ?? '#get';
export { CAM_PROFILER_HREF };

/** "$79" and "$86.90": the product's price before GST, and with Australia's 10% GST added. */
const amount = Number((product?.price ?? 'AUD $79').replace(/[^0-9.]/g, ''));
export const CAML_PRICE = `$${amount}`;
export const CAML_PRICE_INC_GST = `$${(amount * 1.1).toFixed(2)}`;

export const INCLUDES = ['Nine videos with Remi', 'Workbooks', 'Practical examples', 'Downloadable transcripts', 'Free Mini Profiler access'];

/** The five dimensions; the line falls between Structure and Implementation (`belowLine` starts below it). */
export const DIMENSIONS = [
  { name: 'Purpose', question: 'What is this for? What result are we working towards, and why does it matter?', text: 'Purpose gives your assessment its direction.' },
  { name: 'Environment', question: 'What context and conditions will support that purpose?', text: 'Examine direction, culture, values and standards.' },
  { name: 'Structure', question: 'How does this need to be designed?', text: 'Examine roles, responsibilities, systems, resources and how the elements fit together.' },
  { name: 'Implementation', question: 'What needs to happen in practice?', text: 'Examine execution, priorities, follow-through and evidence of progress.', belowLine: true },
  { name: 'People', question: 'What do people need to contribute successfully?', text: 'Consider capability, communication, relationships, support and accountability.' },
];

export const ARCHETYPES = [
  { name: 'The Visionary', dimension: 'Environment', art: 'cml-visionary', text: 'Holds the wider context and direction, keeping culture and values in view.' },
  { name: 'The Architect', dimension: 'Structure', art: 'cml-architect', text: 'Designs how the work will function, giving an intention a framework that supports it.' },
  { name: 'The Dynamo', dimension: 'Implementation', art: 'cml-dynamo', text: 'Brings movement and execution, translating decisions into what gets done.' },
  { name: 'The Collaborator', dimension: 'People', art: 'cml-collaborator', text: 'Attends to the people and relationships through which the work happens.' },
];

export const ABILITIES = [
  'Assess a situation with greater accuracy.',
  'Define what good would actually look like.',
  'Compare current practice with that benchmark.',
  'Make decisions you can explain.',
  'Design projects with a coherent foundation.',
  'Bring clarity to performance conversations.',
  'Facilitate with a deliberate structure.',
  'Apply the framework across different contexts.',
];

export const FACILITATION = [
  { icon: 'sprout', name: 'Environment', text: 'Assess the context, relevant values and standards you want to bring into the room.' },
  { icon: 'stairs', name: 'Structure', text: 'Design the sequence and format so the activities contribute to the purpose.' },
  { icon: 'gear', name: 'Implementation', text: 'Plan how the day will run and how agreed actions will be carried forward.' },
  { icon: 'people', name: 'People', text: 'Consider who is involved, what they need and how they will contribute.' },
] as const;

export const AUDIENCE = ['Business owners', 'Leaders', 'Managers', 'Consultants', 'Coaches', 'Speakers', 'Trainers', 'Facilitators', 'Product designers', 'Project managers'];

export const VIDEOS = [
  { name: 'Introduction', text: 'Meet the framework and its applications in leadership and professional work.' },
  { name: 'Overview of the whole model', text: 'See how the five dimensions fit together, including above and below the line.' },
  { name: 'Purpose', text: 'Establish what you are trying to achieve and use it to guide your assessment.' },
  { name: 'Environment', text: 'Explore context, culture, values and standards. The contribution of the Visionary.' },
  { name: 'Structure', text: 'Examine how work needs to be designed and supported. The contribution of the Architect.' },
  { name: 'Implementation', text: 'Bring the framework into execution and progress. The contribution of the Dynamo.' },
  { name: 'People', text: 'Assess what people need to contribute successfully. The contribution of the Collaborator.' },
  { name: 'How the dimensions interact', text: 'Examine how a change in one area affects the others.' },
  { name: 'Conclusion and applying the model', text: 'Bring your learning together and apply CAM to a real situation.' },
];

export const FAQ = [
  { q: 'Is this live or self-paced?', a: ['Self-paced recorded videos.', 'Immediate access after purchase.'] },
  { q: 'What is included?', a: ['Nine videos, workbooks, examples, transcripts and free Mini Profiler access.'] },
  { q: 'Can I use it with paying clients?', a: ['Yes, including consulting, coaching, training and facilitation.'] },
  { q: 'Is this a subscription?', a: [`No. ${CAML_PRICE} AUD + GST.`, `${CAML_PRICE_INC_GST} AUD including GST.`, 'One payment.'] },
  { q: 'Does it teach Purpose?', a: ['Yes, within the overview and in a dedicated video.'] },
  { q: 'What about refunds?', a: ['No change-of-mind refunds for this immediate-access digital product.', 'Applicable consumer rights remain unaffected.'] },
];

/** "What people say about using CAM": empty until real testimonials arrive (the design's two boxes say "[Testimonial to be
 *  added]": one leadership, project or performance example, one consultant or facilitator's client-work example). The
 *  section renders nothing while it is empty. Never invent one. */
export const TESTIMONIALS: { quote: string; name: string; context: string }[] = [];

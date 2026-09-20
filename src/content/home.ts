// Homepage lists that are meant to be swapped often: the three featured Perspectives and the three entry products.
import { CONVERSATIONS } from '@/content/perspectives';

// ---------- Featured Perspectives: the first entry is the large card. `title` overrides the archive title on the homepage ----------
const FEATURED: { id: string; title: string }[] = [
  { id: 'schwartz', title: 'An Exploration of Internal Family Systems Therapy' },
  { id: 'richo', title: 'Relationships: Should I Stay or Should I Go?' },
  { id: 'gerber', title: 'The Importance of Looking Outward' },
];
export const HOME_PERSPECTIVES = FEATURED.map(f => {
  const c = CONVERSATIONS.find(x => x.id === f.id)!;
  return { ...f, guest: c.guest, href: c.href, image: c.image };
});

// ---------- Entry products. Until the product pages exist, each opens the enquiry form preset to Books & programs ----------
export const ENTRY_PRICE = 'AUD $29';
export const ENTRY_PRODUCTS: { tone: 'rust' | 'navy' | 'green'; title: string; text?: string; image: string; alt: string; href: string }[] = [
  { tone: 'rust', title: 'Why do I keep doing this?', text: 'EIT, trauma-informed emotional integration, protective patterns and IFS-informed parts work.', image: '/assets/home/hm-prod-1.webp', alt: 'Hands writing in a notebook', href: '#contact' },
  { tone: 'navy', title: 'The five paths to a healthy relationship', text: 'A practical introduction to the five paths that support healthier, more connected relationships.', image: '/assets/home/hm-prod-2.webp', alt: 'Two people talking, hands open', href: '#contact' },
  { tone: 'green', title: 'Core, improve, innovate', image: '/assets/home/hm-prod-3.webp', alt: 'A hand sketching a model among sticky notes', href: '#contact' },
];

// ---------- "Things I've spent years trying to figure out" — the model names in the dark band ----------
export const MODEL_NAMES = ['EIT', 'CAM', 'The Self-Esteem Triad', 'T.R.U.S.T.M.E.', 'Ultimate Influence', 'Disruptive Leadership'];

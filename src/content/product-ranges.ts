// Product ranges with their own design (Photos-Images/PRODUCT INFLUENCE.png and PRODUCT BUSINESS.png): ProductRange draws
// these with components/products/DesignedRange instead of the plain cards, wherever the range appears (/products and the
// category's rabbit-hole page). The products, their copy and prices still come from PRODUCTS (content/products.ts); this
// file adds the photos cut from the mock-ups (public/assets/product-ranges) and the range's own lines.
import type { CategoryId } from '@/content/products';

export type RangeArt = { src: string; width: number; height: number; alt?: string };
export type RangeDesign = {
  layout: 'bands' | 'cards';    // bands: full-width photo bands with a curved seam (influence); cards: framed cards (business)
  intro?: string;               // a line under the range's question
  hero?: RangeArt;              // business: the photograph beside the range's title
  art: Record<string, RangeArt & { side?: 'left' | 'right' }>; // by product slug; `side` is where the photo sits in a band
};

const art = (name: string, width: number, height: number, alt = '') => ({ src: `/assets/product-ranges/${name}.webp`, width, height, alt });

export const RANGE_DESIGNS: Partial<Record<CategoryId, RangeDesign>> = {
  influence: {
    layout: 'bands',
    art: {
      'ultimate-influence-consultative-sales-introduction': art('pb-inf-stage', 864, 1064, 'Remi Pearson seated on stage with a headset microphone, speaking to a full auditorium'),
      'holding-space-for-magnetic-sales': { ...art('pb-inf-holding', 824, 574), side: 'left' },
      'understand-before-you-prescribe': { ...art('pb-inf-listen', 964, 558), side: 'right' },
      'selling-from-stage': { ...art('pb-inf-room', 1004, 542), side: 'left' },
      'influence-without-pressure': art('pb-inf-steps', 504, 332),
    },
  },
  business: {
    layout: 'cards',
    intro: 'Created from the experience of building and selling a business that generated nearly $200 million.',
    hero: art('pb-bus-table', 1128, 924, 'A founder talking her team through the plans spread across a table'),
    art: {
      'from-practice-to-enterprise': art('pb-bus-system', 998, 884),
      'core-improve-innovate': art('pb-bus-cards', 772, 692),
      'trust-that-holds': art('pb-bus-spiral', 648, 982, 'The T.R.U.S.T.M.E. levels as a spiral of ribbons: trust, relatability, uniqueness, systems, tenacity, meaning, evolution'),
      'build-beyond-the-founder': art('pb-bus-founder', 992, 654),
    },
  },
};

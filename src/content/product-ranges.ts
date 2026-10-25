// Product ranges with their own design (Photos-Images/PRODUCT INFLUENCE.png and PRODUCT BUSINESS.png, and since Oct 2026
// every range: the influence bands): ProductRange draws these with components/products/DesignedRange instead of the plain cards, wherever the range appears (/products and the
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
/** A photo already on the site (the program's own sales page where it has one), by its path under /assets. */
const pic = (path: string, width: number, height: number, alt = '') => ({ src: `/assets/${path}.webp`, width, height, alt });

export const RANGE_DESIGNS: Partial<Record<CategoryId, RangeDesign>> = {
  // Every other range uses the influence bands too (client, Oct 2026: no plain boxes on /products). A program with its own
  // sales page shows that page's hero photo (client, Oct 2026); the others use the site's photographs. Selling from Stage keeps
  // the stage photo: its sales-page hero is a 320px-wide strip.
  personal: {
    layout: 'bands',
    art: {
      'self-esteem-triad': pic('triad-landing/stl-hero', 480, 850),
      'why-do-i-keep-doing-this': pic('wdk-landing/wdk-portrait', 1086, 1448, 'Remi Pearson in a burgundy portrait'),
      'becoming-conscious': pic('wdk-landing/wdk-portrait', 1086, 1448, 'Remi Pearson in a burgundy portrait'),
      'self-regulation-when-it-matters': pic('photos/about-hero', 941, 1254, 'Remi Pearson'),
      'deep-state-repatterning': pic('dsr-landing/dsr-hero', 1536, 1024, 'Remi Pearson in her podcast studio'),
      'emotion-integration-technique-foundations': pic('eit-landing/eit-hero', 1001, 1448),
      'holding-space-without-rescuing-or-disappearing': pic('wdk-landing/wdk-portrait', 1086, 1448, 'Remi Pearson in a burgundy portrait'),
      'come-back-to-yourself': pic('cby-landing/cby-hero', 648, 1068),
    },
  },
  relationships: {
    layout: 'bands',
    art: {
      'five-paths-to-a-healthy-relationship': pic('wdk-landing/wdk-portrait', 1086, 1448, 'Remi Pearson in a burgundy portrait'),
      'attachment-or-love': pic('sr-landing/sr-meditation', 1024, 768),
      'finding-our-way-back': pic('fwb-landing/fwb-hero', 1024, 460),
      'holding-space-without-rescuing-or-disappearing': pic('wdk-landing/wdk-portrait', 1086, 1448, 'Remi Pearson in a burgundy portrait'),
      'obstacles-to-love': pic('otl-landing/otl-hero', 492, 534),
      'love-without-losing-yourself': pic('otl-landing/otl-close', 388, 270),
    },
  },
  truth: {
    layout: 'bands',
    art: {
      'find-the-gap-in-your-own-life': pic('rabbit-holes/tt-hero', 982, 1344, 'A round mirror on a stand beside a soft curtain'),
      'when-your-values-and-your-life-stop-matching': pic('photos/frame-3', 720, 480),
      'safe-or-risky-problems': pic('photos/rebel-listening', 585, 690),
      'let-truth-lead': pic('photos/frame-1', 1682, 927),
      'find-the-truth-of-the-situation': pic('photos/story', 1040, 694),
    },
  },
  leadership: {
    layout: 'bands',
    art: {
      'disruptive-leadership': pic('dlp-landing/dlp-team', 1536, 580, 'Four colleagues in conversation around a low table'),
      'the-performance-management-blueprint': pic('pmb-landing/pmb-hero', 748, 891),
      'your-first-90-days-as-a-leader': pic('photos/invite-teaching', 900, 1200),
      'the-ground-rules-nobody-wrote-down': pic('photos/about-audience', 1400, 1050),
      'the-90-day-review': pic('n90-landing/n90-hero', 530, 790),
      'benchmarking-what-good-actually-looks-like': pic('bm-landing/bm-hero', 728, 716),
      'critical-alignment-model-for-leaders': pic('cam-landing/cml-hero', 470, 900),
      'lead-align-and-perform': pic('cam-landing/cml-arch', 515, 710),
    },
  },
  further: {
    layout: 'bands',
    art: {
      'untriggerable': pic('photos/rebel-hero', 1800, 1090, 'Remi Pearson speaking, hands raised mid-thought'),
      'critical-alignment-model-for-leaders': pic('cam-landing/cml-hero', 470, 900),
      'ultimate-influence-consultative-sales-introduction': pic('ui-landing/uil-hero', 495, 880),
      'selling-from-stage': pic('product-ranges/pb-inf-room', 1004, 542),
    },
  },
  influence: {
    layout: 'bands',
    art: {
      'ultimate-influence-consultative-sales-introduction': pic('ui-landing/uil-hero', 495, 880),
      'ultimate-influence-foundations': pic('uif-landing/uif-hero', 758, 1226, 'Two women in conversation in armchairs'),
      'holding-space-for-magnetic-sales': { ...art('pb-inf-holding', 824, 574), side: 'left' },
      'selling-from-stage': { ...art('pb-inf-room', 1004, 542), side: 'right' },
      'selling-from-stage-fundamentals': pic('sff-landing/sff-hero', 603, 1260, 'A woman in an audience smiling as she listens'),
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

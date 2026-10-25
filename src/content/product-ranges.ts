// Product ranges with their own design (Photos-Images/PRODUCT INFLUENCE.png and PRODUCT BUSINESS.png, and since Oct 2026
// every range: the influence bands): ProductRange draws these with components/products/DesignedRange instead of the plain cards, wherever the range appears (/products and the
// category's rabbit-hole page). The products, their copy and prices still come from PRODUCTS (content/products.ts); this
// file adds the photos cut from the mock-ups (public/assets/product-ranges) and the range's own lines.
import type { CategoryId } from '@/content/products';

/** `pos` is the photo's focal point (CSS object-position) when the band crops it. `scale` shrinks the photo's size cap when
 *  its file is stored above the usual 1.5x of the mockup (Benchmarking's cuts are 2x: 0.75). */
export type RangeArt = { src: string; width: number; height: number; alt?: string; pos?: string; scale?: number };
export type RangeDesign = {
  layout: 'bands' | 'cards';    // bands: full-width photo bands with a curved seam (influence); cards: framed cards (business)
  intro?: string;               // a line under the range's question
  hero?: RangeArt;              // business: the photograph beside the range's title
  art: Record<string, RangeArt & { side?: 'left' | 'right' }>; // by product slug; `side` is where the photo sits in a band
};

const art = (name: string, width: number, height: number, alt = '') => ({ src: `/assets/product-ranges/${name}.webp`, width, height, alt });
/** A photo already on the site (the program's own sales page where it has one), by its path under /assets. */
const pic = (path: string, width: number, height: number, alt = '', pos?: string) => ({ src: `/assets/${path}.webp`, width, height, alt, pos });

export const RANGE_DESIGNS: Partial<Record<CategoryId, RangeDesign>> = {
  // Every other range uses the influence bands too (client, Oct 2026: no plain boxes on /products). A program with its own
  // sales page shows that page's hero photo (client, Oct 2026); the others use the site's photographs. Selling from Stage keeps
  // the stage photo: its sales-page hero is a 320px-wide strip. No two programs share a photo (client, Oct 2026: the burgundy
  // portrait had been on five bands); each is taken from that program's own sales page.
  personal: {
    layout: 'bands',
    art: {
      'self-esteem-triad': pic('triad-landing/stl-hero', 480, 850, '', '50% 40%'),
      'why-do-i-keep-doing-this': pic('wdk-landing/wdk-still', 1536, 1024, 'Remi Pearson in a pink jacket, smiling in her studio', '50% 35%'),
      'becoming-conscious': pic('bc-landing/bc-v1', 532, 412, 'A woman outdoors in the sun, eyes lifted, quietly noticing her surroundings', '50% 30%'),
      'self-regulation-when-it-matters': pic('sr-landing/sr-meditation', 1024, 768, 'Remi Pearson holding a microphone, in black and white', '50% 4%'),
      'deep-state-repatterning': pic('dsr-landing/dsr-hero', 1536, 1024, 'Remi Pearson in her podcast studio', '60% 30%'),
      'emotion-integration-technique-foundations': pic('eit-landing/eit-hero', 1001, 1448, 'Remi Pearson smiling, in a burgundy top', '50% 12%'),
      'holding-space-without-rescuing-or-disappearing': pic('hs-landing/hs-women', 601, 380, 'Two women talking on a sofa, one listening with her chin on her hand', '45% 40%'),
      'come-back-to-yourself': pic('cby-landing/cby-bundle', 591, 591, 'A smiling woman resting her chin on her hand beside a mug', '50% 8%'),
    },
  },
  relationships: {
    layout: 'bands',
    art: {
      'five-paths-to-a-healthy-relationship': pic('fp-landing/fpl-couple', 464, 442, 'A couple sitting close on a sofa, turned towards each other', '50% 35%'),
      'attachment-or-love': pic('aol-landing/aol-couple', 596, 481, 'A couple talking on a sofa, she smiling with her chin on her hand', '55% 35%'),
      'finding-our-way-back': pic('fwb-landing/fwb-hero', 1024, 460, 'A woman and a man on a sofa, turned towards each other in a quiet conversation', '50% 40%'),
      'holding-space-without-rescuing-or-disappearing': pic('hs-landing/hs-women', 601, 380, 'Two women talking on a sofa, one listening with her chin on her hand', '45% 40%'),
      'obstacles-to-love': pic('otl-landing/otl-hero', 492, 534, '', '50% 30%'),
      'love-without-losing-yourself': pic('otl-landing/otl-couple', 553, 370, 'A couple talking on a sofa with mugs of tea', '50% 35%'),
    },
  },
  truth: {
    layout: 'bands',
    art: {
      'find-the-gap-in-your-own-life': pic('rabbit-holes/tt-hero', 982, 1344, 'A round mirror on a stand beside a soft curtain', '45% 58%'),
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
      'the-performance-management-blueprint': pic('pmb-landing/pmb-hero', 748, 891, 'A leader in a navy jacket smiling as she talks with a colleague', '30% 14%'),
      'your-first-90-days-as-a-leader': pic('photos/invite-teaching', 900, 1200, 'Remi Pearson teaching in front of a screen', '40% 28%'),
      'the-ground-rules-nobody-wrote-down': pic('photos/about-audience', 1400, 1050),
      'the-90-day-review': pic('n90-landing/n90-hero', 530, 790, '', '40% 45%'),
      'benchmarking-what-good-actually-looks-like': { ...pic('bm-landing/bm-hero', 728, 716, 'Two women reviewing printed pages together at a table'), scale: 0.75 },
      'critical-alignment-model-for-leaders': pic('cam-landing/cml-hero', 470, 900),
      'lead-align-and-perform': pic('cam-landing/cml-arch', 515, 710, '', '50% 62%'),
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
      'selling-from-stage-fundamentals': pic('sff-landing/sff-hero', 603, 1260, 'A woman in an audience smiling as she listens', '50% 17%'),
      'influence-without-pressure': art('pb-inf-steps', 504, 332),
    },
  },
  business: {
    // The business range used its own framed-card layout (PRODUCT BUSINESS.png); the client found those cards far larger
    // than the other ranges (Oct 2026), so it uses the same bands, each with a photo from the program's own sales page.
    layout: 'bands',
    art: {
      'from-practice-to-enterprise': pic('tte-landing/tte-hero', 576, 1086, 'A business owner at the back of a training room, watching a colleague lead the session', '45% 30%'),
      'core-improve-innovate': pic('cii-landing/cii-remi', 757, 618, 'Remi Pearson laughing, in a green jacket and pearls', '50% 25%'),
      'trust-that-holds': pic('tth-landing/tth-writing', 678, 642, 'A woman writing in an open notebook, her chin on her hand', '50% 35%'),
      'build-beyond-the-founder': pic('bbf-landing/bbf-team', 688, 588, 'Three colleagues talking around a laptop at a table', '50% 35%'),
    },
  },
};

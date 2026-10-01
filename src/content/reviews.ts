// Reviews (/reviews). Remi is sending these; add each one here exactly as supplied and it appears on the page.
// Proof is never invented: until the list has entries the page shows "Coming soon".
export type Review = {
  quote: string;            // the review, word for word (one string per paragraph)
  name: string;             // as the reviewer agreed to be named
  role?: string;            // e.g. 'CEO, Company' or 'Rebel Yell participant'
};

export const REVIEWS: Review[] = [];

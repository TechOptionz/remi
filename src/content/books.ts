// The books on /books. Remi writes each book's copy; Rashid supplies the online purchase links.
// To open a book up: fill in `text` (paragraphs) and set `buyHref` (or several `retailers`). Until then its card says
// "Copy to come" and "Buy links coming soon".
export type Book = {
  slug: string; title: string; subtitle?: string;
  text?: string[];                                  // Remi's copy, one string per paragraph
  retailers?: { label: string; href: string }[];    // where to buy online
};

export const BOOKS: Book[] = [
  { slug: 'ultimate-you', title: 'Ultimate You' },
  { slug: 'ultimate-you-quest', title: 'Ultimate You Quest' },
  { slug: 'disruptive-leadership', title: 'Disruptive Leadership', subtitle: 'The bestselling book' },
];

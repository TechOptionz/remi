// Uploads the ebook files to private Vercel Blob storage, where /api/books/download reads them (lib/book-sales.ts).
// Name each file after its book's slug: disruptive-leadership.pdf, ultimate-you.pdf, ultimate-you-quest.pdf (.epub too).
// Run: npm run upload-books -- <folder with the files>   (needs BLOB_READ_WRITE_TOKEN in .env.local; replaces older copies)
import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { put } from '@vercel/blob';

const SLUGS = ['disruptive-leadership', 'ultimate-you', 'ultimate-you-quest'];
const TYPES = { '.pdf': 'application/pdf', '.epub': 'application/epub+zip' };

const dir = process.argv[2];
if (!dir) { console.error('Usage: npm run upload-books -- <folder>'); process.exit(1); }
if (!process.env.BLOB_READ_WRITE_TOKEN) { console.error('Set BLOB_READ_WRITE_TOKEN in .env.local first.'); process.exit(1); }

let count = 0;
for (const name of await readdir(dir)) {
  const ext = extname(name).toLowerCase(), slug = name.slice(0, -ext.length);
  if (!TYPES[ext] || !SLUGS.includes(slug)) { console.log(`skipped ${name}`); continue; }
  const blob = await put(`books/${slug}${ext}`, await readFile(join(dir, name)), {
    access: 'private', contentType: TYPES[ext], addRandomSuffix: false, allowOverwrite: true,
  });
  console.log(`uploaded ${name} → ${blob.pathname}`);
  count++;
}
console.log(count ? `${count} file(s) uploaded.` : 'Nothing uploaded: name the files after the book slugs.');

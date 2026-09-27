// "I know better. Why do I still keep doing this?" — the first rabbit hole from the homepage, after the design
// (Photos-Images/1–3. I KNOW BETTER) and its copy deck. Sections in components/know-better/, lists and links in
// content/know-better.ts, styles in styles/know-better.css.
import type { Metadata } from 'next';
import KbHero from '@/components/know-better/KbHero';
import KbPatterns from '@/components/know-better/KbPatterns';
import KbProtection from '@/components/know-better/KbProtection';
import KbEit from '@/components/know-better/KbEit';
import KbNext from '@/components/know-better/KbNext';
import KbIsolation from '@/components/know-better/KbIsolation';
import KbKeep from '@/components/know-better/KbKeep';

export const metadata: Metadata = {
  title: 'I Know Better. Why Do I Still Keep Doing This? — Remi Pearson',
  description: 'You can understand your childhood, know your attachment style and recognise every protective pattern you have, and still keep doing the thing that hurts you. The pattern isn’t the problem. It’s the protection.',
};

export default function KnowBetterPage() {
  return (
    <main className="kb">
      <div className="kb-page">
        <KbHero />
        <KbPatterns />
        <KbProtection />
        <KbEit />
        <KbNext />
        <KbIsolation />
      </div>
      <KbKeep />
    </main>
  );
}

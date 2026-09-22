// Your First 90 Days as a Leader — a chapter of Ideas & Models on its own page. Sections in components/f90/;
// lists in content/f90.ts; styles in styles/f90.css (on top of the shared chapter styles).
import type { Metadata } from 'next';
import F90Intro from '@/components/f90/F90Intro';
import F90Ground from '@/components/f90/F90Ground';
import F90Months from '@/components/f90/F90Months';
import F90Close from '@/components/f90/F90Close';

export const metadata: Metadata = {
  title: 'Your First 90 Days as a Leader — Remi Pearson',
  description: 'Observe before you intervene. Understand before you decide. Remi Pearson’s first 90 days for a new leader, built on the Critical Alignment Model: month one to observe and map reality, month two to interrogate and synthesise, month three to improve the system and develop its leadership capacity.',
};

export default function First90DaysPage() {
  return (
    <main className="ideas triad safe dsr eit vat cam tm dl f90">
      <div className="ideas-page">
        <F90Intro />
        <F90Ground />
        <F90Months />
        <F90Close />
      </div>
    </main>
  );
}

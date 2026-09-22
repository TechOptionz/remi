// The Critical Alignment Model — a chapter of Ideas & Models on its own page. Sections in components/cam/;
// lists in content/cam.ts; styles in styles/cam.css (on top of the shared chapter styles).
import type { Metadata } from 'next';
import CamIntro from '@/components/cam/CamIntro';
import CamIntended from '@/components/cam/CamIntended';
import CamExpressed from '@/components/cam/CamExpressed';
import CamResearch from '@/components/cam/CamResearch';
import CamClose from '@/components/cam/CamClose';

export const metadata: Metadata = {
  title: 'The Critical Alignment Model — Remi Pearson',
  description: 'Why people come last because people come first. Remi Pearson’s Critical Alignment Model: Purpose, Environment, Structure, Implementation and People, the alignment gap between what is intended and what is expressed, and the research behind the Meta Dynamics profiling tools.',
};

export default function CriticalAlignmentPage() {
  return (
    <main className="ideas triad safe dsr eit vat cam">
      <div className="ideas-page">
        <CamIntro />
        <CamIntended />
        <CamExpressed />
        <CamResearch />
        <CamClose />
      </div>
    </main>
  );
}

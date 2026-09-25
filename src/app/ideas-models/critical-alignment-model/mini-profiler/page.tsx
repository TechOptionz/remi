// The CAM Mini Profiler — the landing page before the online quiz, in three parts (design: CAM Mini Profiler screenshots).
// Sections in components/cam/Profiler*.tsx; lists and the quiz link in content/cam.ts; styles in styles/cam.css (.cam-mp).
import type { Metadata } from 'next';
import ProfilerIntro from '@/components/cam/ProfilerIntro';
import ProfilerDimensions from '@/components/cam/ProfilerDimensions';
import ProfilerBegin from '@/components/cam/ProfilerBegin';

export const metadata: Metadata = {
  title: 'The CAM Mini Profiler — Remi Pearson',
  description: 'What’s really getting in the way? The Critical Alignment Model mini profiler: answer a concise set of questions and receive a development map showing which of four dimensions (Environment, Structure, Implementation, People) deserves attention first.',
};

export default function CamProfilerPage() {
  return (
    <main className="ideas triad cam cam-mp">
      <div className="ideas-page">
        <ProfilerIntro />
        <ProfilerDimensions />
        <ProfilerBegin />
      </div>
    </main>
  );
}

// The free Attachment Style Assessment ("How do you attach?", from the programs summary mock-up). The quiz itself is
// still to come (free, with an email opt-in for the results); until then this page takes "tell me when it's ready" sign-ups.
import type { Metadata } from 'next';
import Link from 'next/link';
import NotifyForm from '@/components/products/NotifyForm';

export const metadata: Metadata = {
  title: 'How Do You Attach? Attachment Style Assessment — Remi Pearson',
  description: 'A free Attachment Style Assessment for relationships, self-esteem and emotional change.',
};

export default function AttachmentQuizPage() {
  return (
    <main className="pr-page pr-page--burgundy">
      <section className="pr-hero" aria-labelledby="attach-h">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/programs">Programs</Link><span aria-hidden="true">/</span><span aria-current="page">Attachment Style Assessment</span>
        </nav>
        <p className="pr-eyebrow">Free assessment</p>
        <h1 id="attach-h" className="pr-title">How Do You Attach?</h1>
        <p className="pr-lede">A free Attachment Style Assessment for relationships, self-esteem and emotional change.</p>
        <p className="pr-soon"><span>Coming soon</span></p>
      </section>
      <section className="pr-notify-band" aria-labelledby="attach-w">
        <h2 id="attach-w" className="pr-h2">Be the first to take it</h2>
        <p>Leave your email and I’ll tell you the moment the assessment is ready.</p>
        <NotifyForm product="Attachment Style Assessment" segment="relationships" />
        <p className="pr-fine">In the meantime, <Link href="/loving-someone">why does loving someone bring all my shit to the surface?</Link></p>
      </section>
    </main>
  );
}

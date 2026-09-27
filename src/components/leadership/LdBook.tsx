import Link from 'next/link';
import { Art, Brush, Head } from '@/components/rabbit-holes/ui';
import { DL_HREF } from '@/content/leadership';

// THE BESTSELLING BOOK BEHIND THE QUESTION — Disruptive Leadership, into its chapter (design part three)
export default function LdBook() {
  return (
    <section className="kb-section ld-book" aria-labelledby="ld-book-h">
      <Head id="ld-book-h">The bestselling book <Brush>behind the</Brush> question</Head>
      <div className="ld-book-grid">
        <Art name="ld-dl-book" className="ld-book-art" />
        <div>
          <p>Leadership is not about becoming more indispensable.<br /> It is about creating the capability, thinking and culture that allow people and organisations to grow beyond you.</p>
          <Link href={DL_HREF} className="kb-btn-outline ld-book-btn">Meet Disruptive Leadership <span aria-hidden="true">⟶</span></Link>
        </div>
      </div>
    </section>
  );
}

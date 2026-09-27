import Link from 'next/link';
import { Art, Head, Sym } from './ui';

type Props = {
  id: string; title: React.ReactNode; art: string; price: string; lede: string; steps: string[];
  cta: { label: string; href: string }; note: string;
};

/** The product block that closes a rabbit hole's argument (the Five Paths, the Truth Audit): heading, the product drawn on
 *  the left, then price, lede, numbered steps, button and a small note. Buttons preset the enquiry form to Books & programs. */
export default function Product({ id, title, art, price, lede, steps, cta, note }: Props) {
  return (
    <section id={id} className="kb-section kb-product-section" aria-labelledby={`${id}-h`}>
      <Head id={`${id}-h`}>{title}</Head>
      <Sym name="hm-loop" className="kb-product-loop" />
      <div className="kb-product">
        <Art name={art} className="kb-product-art" />
        <div className="kb-product-copy">
          <p className="kb-price">{price}</p>
          <p>{lede}</p>
          <ol className="kb-product-list">{steps.map(s => <li key={s}>{s}</li>)}</ol>
          <Link href={cta.href} className="hm-btn kb-product-btn" data-interest="Products">{cta.label}</Link>
          <p className="kb-product-note">{note}</p>
        </div>
      </div>
    </section>
  );
}

// The sales-page kit (components/landing/ui.tsx) set up for CAM for Leaders: its photo folder, its buy link and its
// price block (before GST, with the GST-inclusive line under it).
import { BuyBtn as LandingBuyBtn, Photo as LandingPhoto } from '@/components/landing/ui';
import { CAML_CTA_HREF, CAML_PRICE, CAML_PRICE_INC_GST } from '@/content/cam-landing';

export { Head } from '@/components/landing/ui';

export function Photo(props: Omit<Parameters<typeof LandingPhoto>[0], 'dir'>) {
  return <LandingPhoto dir="cam-landing" {...props} />;
}

export function BuyBtn({ children = 'Get Critical Alignment Model for Leaders', arrow = true, ...rest }: { children?: React.ReactNode; light?: boolean; arrow?: boolean }) {
  return <LandingBuyBtn href={CAML_CTA_HREF} arrow={arrow} {...rest}>{children}</LandingBuyBtn>;
}

/** "$79 AUD + GST" over "$86.90 AUD including GST"; `compact` sets the GST lines beside the figure, as in the CTA rows. */
export function Price({ compact, note }: { compact?: boolean; note?: string }) {
  return (
    <div className={`cml-price${compact ? ' cml-price--compact' : ''}`}>
      <p className="stl-price">{CAML_PRICE}<span>AUD + GST</span></p>
      <p className="cml-gst">{CAML_PRICE_INC_GST} AUD including GST</p>
      {note && <p className="cml-price-note">{note}</p>}
    </div>
  );
}

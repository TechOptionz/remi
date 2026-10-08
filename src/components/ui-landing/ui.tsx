// The sales-page kit (components/landing/ui.tsx) set up for Ultimate Influence: photo folder, buy link, price block.
import { BuyBtn as LandingBuyBtn, Photo as LandingPhoto } from '@/components/landing/ui';
import { UIL_CTA_HREF, UIL_PRICE, UIL_PRICE_INC_GST } from '@/content/ui-landing';

export { Head } from '@/components/landing/ui';

export function Photo(props: Omit<Parameters<typeof LandingPhoto>[0], 'dir'>) {
  return <LandingPhoto dir="ui-landing" {...props} />;
}

export function BuyBtn({ children = 'Get Ultimate Influence', arrow = true, ...rest }: { children?: React.ReactNode; light?: boolean; arrow?: boolean }) {
  return <LandingBuyBtn href={UIL_CTA_HREF} arrow={arrow} {...rest}>{children}</LandingBuyBtn>;
}

/** "$79 AUD + GST" over "$86.90 AUD including GST" (the .cml-price styles, shared with CAM for Leaders). */
export function Price({ note }: { note?: string }) {
  return (
    <div className="cml-price">
      <p className="stl-price">{UIL_PRICE}<span>AUD + GST</span></p>
      <p className="cml-gst">{UIL_PRICE_INC_GST} AUD including GST</p>
      {note && <p className="cml-price-note">{note}</p>}
    </div>
  );
}

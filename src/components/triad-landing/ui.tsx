// The sales-page kit (components/landing/ui.tsx) set up for the Self-Esteem Triad: its photo folder and its buy link.
import { BuyBtn as LandingBuyBtn, Photo as LandingPhoto } from '@/components/landing/ui';
import { TRIAD_CTA_HREF } from '@/content/triad-landing';

export { Head } from '@/components/landing/ui';

export function Photo(props: Omit<Parameters<typeof LandingPhoto>[0], 'dir'>) {
  return <LandingPhoto dir="triad-landing" {...props} />;
}

/** "Get the Self-Esteem Triad": the checkout once it exists, until then the closing band's sign-up. */
export function BuyBtn({ children = 'Get the Self-Esteem Triad', ...rest }: { children?: React.ReactNode; light?: boolean; arrow?: boolean }) {
  return <LandingBuyBtn href={TRIAD_CTA_HREF} {...rest}>{children}</LandingBuyBtn>;
}

'use client';

// Whether the program on this page is on sale right now, as set on the admin screen (lib/program-links.ts). The product
// route (app/products/[slug]/page.tsx) wraps every product page in <BuyMode>, so the page's own sign-up forms
// (NotifyForm, landing/WaitlistForm), its "Coming soon" labels (<SoonLabel>) and the kit's buy buttons (<LiveHref>)
// switch to the checkout without each page knowing about it. A free program that is open has `free` instead of a
// checkout: the same forms become its registration (landing/FreeAccessForm), which enrols the person straight away.
import { createContext, useContext } from 'react';

type Buy = {
  /** Stripe Checkout for a paid program; unused for a free one. */
  href: string;
  label: string;
  /** A free program that is open: its slug, and the school's sign-in page shown once registered. */
  free?: { slug: string; access: string | null };
} | null;
const BuyContext = createContext<Buy>(null);

export function BuyMode({ buy, children }: { buy: Buy; children: React.ReactNode }) {
  return <BuyContext.Provider value={buy}>{children}</BuyContext.Provider>;
}

export const useBuy = () => useContext(BuyContext);

/** "Coming soon", hidden once the program is on sale. */
export function SoonLabel({ className, children = 'Coming soon' }: { className?: string; children?: React.ReactNode }) {
  return useBuy() ? null : <p className={className}>{children}</p>;
}

/** `sale` once the program is on sale (`free`, when given, for a free program that is open), otherwise `children`
 *  (the page's waitlist wording). */
export function OnSale({ sale, free, children }: { sale: React.ReactNode; free?: React.ReactNode; children?: React.ReactNode }) {
  const buy = useBuy();
  return <>{buy ? (buy.free && free !== undefined ? free : sale) : children}</>;
}

/** A link to the closing band (#get) that goes straight to checkout once the program is on sale. A free program's
 *  registration form is in that band, so its links keep scrolling there. */
export function LiveHref({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const buy = useBuy();
  return <a href={href === '#get' && buy && !buy.free ? buy.href : href} className={className}>{children}</a>;
}

/** The program's own button, only once it is on sale: "Buy now • <price>" to checkout, or "Get free access" down to
 *  the registration form (#get). */
export function BuyLink({ className }: { className?: string }) {
  const buy = useBuy();
  return buy ? <a href={buy.free ? '#get' : buy.href} className={className}>{buy.label}</a> : null;
}

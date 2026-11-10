'use client';

// Whether the program on this page is on sale right now, as set on the admin screen (lib/program-links.ts). The product
// route (app/products/[slug]/page.tsx) wraps every product page in <BuyMode>, so the page's own sign-up forms
// (NotifyForm, landing/WaitlistForm), its "Coming soon" labels (<SoonLabel>) and the kit's buy buttons (<LiveHref>)
// switch to the checkout without each page knowing about it.
import { createContext, useContext } from 'react';

type Buy = { href: string; label: string } | null;
const BuyContext = createContext<Buy>(null);

export function BuyMode({ buy, children }: { buy: Buy; children: React.ReactNode }) {
  return <BuyContext.Provider value={buy}>{children}</BuyContext.Provider>;
}

export const useBuy = () => useContext(BuyContext);

/** "Coming soon", hidden once the program is on sale. */
export function SoonLabel({ className, children = 'Coming soon' }: { className?: string; children?: React.ReactNode }) {
  return useBuy() ? null : <p className={className}>{children}</p>;
}

/** A link to the closing band (#get) that goes straight to checkout once the program is on sale. */
export function LiveHref({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const buy = useBuy();
  return <a href={href === '#get' && buy ? buy.href : href} className={className}>{children}</a>;
}

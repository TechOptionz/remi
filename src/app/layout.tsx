// Root layout: fonts, global styles and the chrome shared by every page (header, footer, chat).
import type { Metadata } from 'next';
import '@/styles/index.css';
import { DEFAULT_PALETTE } from '@/content/site';
import { PALETTE_BOOT_SCRIPT, SiteStateProvider } from '@/lib/site-state';
import Header from '@/components/layout/Header';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/shared/ChatWidget';

export const metadata: Metadata = {
  title: 'Remi Pearson — Let truth lead',
  description: "I'm Remi. I'm fascinated by why intelligent, self-aware humans get stuck — and how truth can set us free.",
};

// Instrument Serif + Manrope site-wide; Noto Serif Display + Caveat for the hand-drawn Ideas & Models page;
// League Gothic (condensed width) for the Perspectives rabbit-hole sheet
const FONTS = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&family=Noto+Serif+Display:wdth,wght@62.5,600;62.5,700&family=Caveat:wght@500;600&family=League+Gothic:wdth@75..100&display=swap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette={DEFAULT_PALETTE} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={FONTS} rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: PALETTE_BOOT_SCRIPT }} />
      </head>
      <body>
        <SiteStateProvider>
          <ScrollToTop />
          <div className="wrap" id="top">
            <Header />
            {children}
            <Footer />
          </div>
          <ChatWidget />
        </SiteStateProvider>
      </body>
    </html>
  );
}

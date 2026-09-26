// Site footer: brand + invite CTA, newsletter, link columns and legal line. Copy and links live in content/site.ts.
import Link from 'next/link';
import { FOOTER, NAV, SITE } from '@/content/site';
import NewsletterForm from '@/components/shared/NewsletterForm';
import SocialLinks from '@/components/shared/SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/remi-logo.webp" alt={SITE.logoAlt} width="167" height="60" loading="lazy" decoding="async" />
          <p className="footer-statement">{FOOTER.statementStart} <em>{FOOTER.statementEm}</em></p>
          <Link href={FOOTER.inviteCta.href} className="btn btn--footer">{FOOTER.inviteCta.label}</Link>
        </div>
        <div className="footer-news">
          <p className="footer-head">{FOOTER.newsHead}</p>
          <p className="footer-news-copy">{FOOTER.newsCopy}</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="footer-links">
        <nav className="footer-col" aria-label="Explore">
          <span className="footer-head">Explore</span>
          {NAV.map(item => <Link href={item.href} key={item.label}>{item.label}</Link>)}
        </nav>
        <nav className="footer-col" aria-label="Enquire">
          <span className="footer-head">Enquire</span>
          {/* data-interest presets the homepage enquiry form (see lib/forms.ts) */}
          {FOOTER.enquire.map(item => (
            <Link href={`/?interest=${item.interest}#contact`} data-interest={item.interest} key={item.label}>{item.label}</Link>
          ))}
        </nav>
        <div className="footer-col">
          <span className="footer-head">Follow Remi</span>
          <div className="footer-social">
            <SocialLinks only={['linkedin', 'instagram', 'youtube', 'facebook', 'podcast']} />
          </div>
          <p className="footer-note">{FOOTER.note}</p>
        </div>
      </div>

      <div className="footer-base">
        <div className="footer-base-brand">
          <span>{SITE.copyright}</span>
        </div>
        <div className="footer-legal">
          {FOOTER.legal.map(item => <a href={item.href} key={item.label}>{item.label}</a>)}        </div>
      </div>
    </footer>
  );
}

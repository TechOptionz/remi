/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed on Vercel. Pages are prerendered at build time; only /api/lead (the forms → Resend) runs on the server.
  images: { unoptimized: true },
  // The old hand-written site used .html addresses (and /programs was Rebel Yell, now /programs/rebel-yell). Google and
  // other sites may still link to them: send each to its current page with one permanent (308) redirect.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      // The Self-Esteem Triad product was 'Self-Esteem from the Inside Out' until its sales page arrived (Oct 2026)
      { source: '/products/self-esteem-from-the-inside-out', destination: '/products/self-esteem-triad', permanent: true },
      { source: '/about-remi.html', destination: '/about-remi', permanent: true },
      { source: '/invite-remi.html', destination: '/invite-remi', permanent: true },
      { source: '/ideas-models.html', destination: '/ideas-models', permanent: true },
      { source: '/trustme-model.html', destination: '/ideas-models/trustme-model', permanent: true },
      // Any other old .html address drops the extension (/anything.html -> /anything)
      { source: '/:page((?!assets/)[^/]+)\\.html', destination: '/:page', permanent: true },
      // Addresses people and Google are likely to try that never existed here, sent to the closest page
      { source: '/about', destination: '/about-remi', permanent: true },
      { source: '/about-us', destination: '/about-remi', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/contact', destination: '/invite-remi', permanent: true },
      { source: '/invite', destination: '/invite-remi', permanent: true },
      { source: '/speaking', destination: '/invite-remi', permanent: true },
      { source: '/speaker', destination: '/invite-remi', permanent: true },
      { source: '/ideas', destination: '/ideas-models', permanent: true },
      { source: '/models', destination: '/ideas-models', permanent: true },
      { source: '/podcast', destination: '/perspectives', permanent: true },
      { source: '/blog', destination: '/articles', permanent: true },
      { source: '/book', destination: '/books', permanent: true },
      { source: '/program', destination: '/programs', permanent: true },
      // The previous Wix site at this domain (addresses Google still crawls). Podcast show-notes posts go to the
      // Perspectives archive: searched for the guest when their episode is in CONVERSATIONS, else filtered by topic
      // (topics as slugs: Next decodes %26, so "Ideas & meaning" would split the query; the archive matches either form).
      ...Object.entries({
        'an-exploration-of-internal-family-systems-therapy-with-dr-richard-schwartz': 'q=Schwartz',
        'how-to-be-an-adult-in-relationships-with-psychotherapist-david-richo': 'q=Richo',
        'how-are-you-choosing-to-spend-your-4-thousand-weeks-with-oliver-burkeman': 'q=Burkeman',
        'the-importance-of-looking-outward-my-conversation-with-the-emyth-legend-michael-e-gerber': 'q=Gerber',
        'perspectives-when-coaching-meets-therapy': 'topic=human-change',
        'changing-the-self-with-matt-lavars-perspectives-podcast-with-sharon-pearson': 'topic=human-change',
        'mother-load-part-iii-live-coaching-session-perspectives-podcast-with-sharon-pearson': 'topic=live-human-change',
        'breaking-the-parental-hierarchy-with-dr-shefali-tsabury': 'topic=relationships',
        'why-strongertogether-is-so-much-more-than-a-hashtag': 'topic=ideas-meaning',
        'new-frontiers-of-psychedelics': 'topic=ideas-meaning',
        'brave-new-post-corona-world-with-bernard-salt-perspectives-podcast-with-sharon-pearson': 'topic=ideas-meaning',
        'how-to-embrace-ambiguity-with-srini-pillay': 'topic=ideas-meaning',
        'how-many-nights-until-an-overnight-success-with-dorie-clark': 'topic=founders-business',
        'don-t-waste-a-good-crisis-with-kristina-karlsson': 'topic=founders-business',
        'your-time-starts-now-with-kate-christie-perspectives-with-sharon-pearson': 'topic=founders-business',
        'lessons-from-successful-entrepreneurs-the-one-thing-you-never-change-with-karen-beattie': 'topic=founders-business',
      }).map(([slug, query]) => ({ source: `/post/${slug}`, destination: `/perspectives?${query}#archive`, permanent: true })),
      { source: '/post/:slug*', destination: '/perspectives#archive', permanent: true },
      { source: '/blog/:path*', destination: '/perspectives#archive', permanent: true },
      { source: '/copy-of-speaking-v2', destination: '/invite-remi', permanent: true },
      { source: '/workwithremi', destination: '/invite-remi', permanent: true },
      { source: '/ambassador-program', destination: '/programs', permanent: true },
      { source: '/plans-pricing', destination: '/programs', permanent: true },
      { source: '/event-details/emotional-intimacy-breakthrough', destination: '/loving-someone', permanent: true },
      { source: '/event-details/:slug*', destination: '/programs', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] }];
  },
};
export default nextConfig;

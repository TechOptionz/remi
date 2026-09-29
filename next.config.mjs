/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed on Vercel. Pages are prerendered at build time; only /api/lead (the forms → Resend) runs on the server.
  images: { unoptimized: true },
  // The old hand-written site used .html addresses (and /programs was Rebel Yell, now /programs/rebel-yell). Google and
  // other sites may still link to them: send each to its current page with one permanent (308) redirect.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
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
      { source: '/program', destination: '/programs', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] }];
  },
};
export default nextConfig;

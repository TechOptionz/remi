/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed on Vercel. Pages are prerendered at build time; only /api/lead (the forms → Resend) runs on the server.
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] }];
  },
};
export default nextConfig;

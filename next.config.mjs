/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to out/ (deployed by Netlify).
  output: 'export',
  images: { unoptimized: true },
};
export default nextConfig;

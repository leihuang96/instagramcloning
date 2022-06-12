/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cloudflare-ipfs.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

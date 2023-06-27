/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'src'],
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;

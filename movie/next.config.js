/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    addDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;

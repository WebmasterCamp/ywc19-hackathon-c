/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["images.unsplash.com", "www.computop-paygate.com"],
  },
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

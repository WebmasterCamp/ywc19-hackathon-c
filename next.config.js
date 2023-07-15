/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["images.unsplash.com", "www.computop-paygate.com"],
  },
};

module.exports = nextConfig;

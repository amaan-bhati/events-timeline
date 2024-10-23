/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // domains: ['assets.aceternity.com'],
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images from picsum.photos during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;

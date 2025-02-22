import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['upload.wikimedia.org', 'img.freepik.com'],  // Add the external domain here
  },
  // Add any other config options you need here
};

export default nextConfig;
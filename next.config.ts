// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourcdn.com", "localhost"], // Add any additional domains as needed
  },
  experimental: {
    // appDir: true, // Enable the app directory if you're using Next.js App Router
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        port: "",
        pathname: "/**",
      }
    ],
    unoptimized: true,
  },
  // Disable ESLint during builds (set to false to re-enable)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during builds (set to false to re-enable)
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;

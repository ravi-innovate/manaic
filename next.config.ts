import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {},
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/blogs",
  //       destination: "/blog",
  //     },
  //   ];
  // },
};

export default nextConfig;

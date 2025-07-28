import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'direjnublbrgoirtyqsg.supabase.co',
        pathname: '/storage/v1/object/public/blog-images/*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/tech",
        permanent: true,
      },
      {
        source: "/blog/:blogSlug",
        destination: "/tech/:blogSlug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

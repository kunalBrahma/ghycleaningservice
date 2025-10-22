import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://maps.google.com https://*.google.com; style-src 'self' 'unsafe-inline' https://www.google.com https://maps.google.com https://*.google.com; img-src 'self' data: https:; connect-src 'self' https://www.google.com https://maps.google.com https://*.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

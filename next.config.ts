import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Image optimalisatie
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Productie optimalisaties
  compress: true,
  poweredByHeader: false,

  // Headers voor betere SEO en security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // 301 Redirects van /gids naar /blog
  async redirects() {
    return [
      {
        source: "/gids/wat-kost-stucwerk",
        destination: "/blog/wat-kost-stucwerk",
        permanent: true,
      },
      {
        source: "/gids/hoe-lang-duurt-stucwerk",
        destination: "/blog/hoe-lang-duurt-stucwerk",
        permanent: true,
      },
      {
        source: "/gids/wat-kost-schilderwerk",
        destination: "/blog/wat-kost-schilderwerk",
        permanent: true,
      },
      {
        source: "/gids/stucwerk-scheuren-repareren",
        destination: "/blog/stucwerk-scheuren-repareren",
        permanent: true,
      },
      {
        source: "/gids/verschil-spackspuiten-traditioneel",
        destination: "/blog/verschil-spackspuiten-traditioneel",
        permanent: true,
      },
      {
        source: "/gids/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

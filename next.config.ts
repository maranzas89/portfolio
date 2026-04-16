import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Exclude static assets — these must pass through to public/pulse/assets/
        {
          source: "/pulse/assets/:path*",
          destination: "/pulse/assets/:path*",
        },
        {
          source: "/pulse/favicon.svg",
          destination: "/pulse/favicon.svg",
        },
        {
          source: "/pulse/icons.svg",
          destination: "/pulse/icons.svg",
        },
      ],
      afterFiles: [
        // PRD Hub — proxy to separate Vercel deployment
        { source: "/prd", destination: "https://prd-hub-chi.vercel.app/" },
        { source: "/prd/:path*", destination: "https://prd-hub-chi.vercel.app/:path*" },
        // SPA routes — after static files are checked, rewrite app routes to index.html
        { source: "/pulse", destination: "/pulse/index.html" },
        { source: "/pulse/store", destination: "/pulse/index.html" },
        { source: "/pulse/store/:path*", destination: "/pulse/index.html" },
        { source: "/pulse/dashboard", destination: "/pulse/index.html" },
        { source: "/pulse/dashboard/:path*", destination: "/pulse/index.html" },
        // Voice — speech-to-text tool
        { source: "/voice", destination: "/voice/index.html" },
      ],
    };
  },
};

export default nextConfig;

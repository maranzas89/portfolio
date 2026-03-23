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
        // SPA routes — after static files are checked, rewrite app routes to index.html
        { source: "/pulse", destination: "/pulse/index.html" },
        { source: "/pulse/store", destination: "/pulse/index.html" },
        { source: "/pulse/store/:path*", destination: "/pulse/index.html" },
        { source: "/pulse/dashboard", destination: "/pulse/index.html" },
        { source: "/pulse/dashboard/:path*", destination: "/pulse/index.html" },
      ],
    };
  },
};

export default nextConfig;

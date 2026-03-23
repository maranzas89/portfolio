import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Pulse SPA routes — rewrite to index.html, let React Router handle them
      // Excludes /pulse/assets/* and /pulse/favicon.svg which are real static files
      { source: "/pulse/store", destination: "/pulse/index.html" },
      { source: "/pulse/store/:path*", destination: "/pulse/index.html" },
      { source: "/pulse/dashboard", destination: "/pulse/index.html" },
      { source: "/pulse/dashboard/:path*", destination: "/pulse/index.html" },
    ];
  },
};

export default nextConfig;

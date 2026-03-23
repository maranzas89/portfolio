import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // beforeFiles rewrites run before static file serving — this ensures
      // /pulse/store and /pulse/dashboard resolve to the SPA index.html
      // while /pulse/assets/* still serves actual static files
      beforeFiles: [
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

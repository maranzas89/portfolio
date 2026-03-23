import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/pulse/:path*",
        destination: "/pulse/index.html",
      },
    ];
  },
};

export default nextConfig;

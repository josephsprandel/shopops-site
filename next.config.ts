import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '100.82.128.42',
    'localhost',
    '192.168.0.189',
  ],
};

export default nextConfig;

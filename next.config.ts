import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/counting-board' : '',
  assetPrefix: isProd ? '/counting-board/' : '',
  images: {
      unoptimized: true
      },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env?.NEXT_PUBLIC_BASE_PATH ?? '',
  assetPrefix: process.env?.NEXT_PUBLIC_ASSET_PREFIX ?? '',
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

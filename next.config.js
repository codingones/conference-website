const isDefinedAssetPrefix = process.env?.NEXT_PUBLIC_ASSET_PREFIX != null && process.env.NEXT_PUBLIC_ASSET_PREFIX !== '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env?.NEXT_PUBLIC_BASE_PATH ?? '',
  assetPrefix: process.env?.NEXT_PUBLIC_ASSET_PREFIX ?? '',
  output: 'export',
  images: {
    unoptimized: true
  },
  sassOptions: {
    additionalData: `$asset-prefix: ${isDefinedAssetPrefix ? process.env.NEXT_PUBLIC_ASSET_PREFIX : "''"};`
  }
};

module.exports = nextConfig;

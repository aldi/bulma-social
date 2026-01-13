import rootPackage from '../package.json' with { type: 'json' };

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/bulma-social' : '',
  reactStrictMode: true,

  turbopack: {
    root: process.cwd(),
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizePackageImports: ['shiki'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  env: {
    BULMA_SOCIAL_VERSION: rootPackage.version,
  },
};

export default nextConfig;

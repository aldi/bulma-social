import rootPackage from '../package.json' with { type: 'json' };

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/bulma-social' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  reactStrictMode: true,

  compiler: {
    removeConsole: isProd,
  },

  experimental: {
    optimizePackageImports: ['shiki'],
  },

  env: {
    BULMA_SOCIAL_VERSION: rootPackage.version,
    BASE_PATH: basePath,
  },
};

export default nextConfig;

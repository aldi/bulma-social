import rootPackage from '../package.json' with { type: 'json' };
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/bulma-social' : '';
const docsRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  reactStrictMode: true,

  turbopack: {
    root: docsRoot,
  },

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

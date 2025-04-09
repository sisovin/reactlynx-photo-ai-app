import { defineConfig } from 'lynx';

export default defineConfig({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_API_ENDPOINT: process.env.CUSTOM_API_ENDPOINT,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

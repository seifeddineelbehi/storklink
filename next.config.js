/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the experimental.appDir - it's not needed anymore
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);

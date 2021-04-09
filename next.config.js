const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production';

const baseUrl = '/nextjs-starter-boilerplate';

module.exports = withPlugins([
  [
    optimizedImages,
    {
      basePath: isProd ? baseUrl : '',
      assetPrefix: isProd ? baseUrl : '',
    },
  ],
]);

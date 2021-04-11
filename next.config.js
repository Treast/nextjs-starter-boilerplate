const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

const baseUrl = '/nextjs-starter-boilerplate';

const deleteAfield = (object, field) => {
  delete object[field];
  return object;
};

module.exports = withPlugins([optimizedImages, withBundleAnalyzer], {
  basePath: isProd ? baseUrl : '',
  assetPrefix: isProd ? baseUrl : '',
  webpack: (config, { dev, isServer }) => {
    console.log('Logs config: ', dev, isServer);
    if (!dev) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });

      // Rewrite all classes to shorter ones
      config.module.rules[1].oneOf.forEach((moduleLoader, i) => {
        Array.isArray(moduleLoader.use) &&
          moduleLoader.use.forEach((l) => {
            if (l.loader.includes('\\css-loader') && !l.loader.includes('postcss-loader')) {
              l.options = {
                ...l.options,
                modules: l.options.modules
                  ? {
                      ...deleteAfield(l.options.modules, 'getLocalIdent'),
                      localIdentName: '[sha1:hash:hex:5]',
                    }
                  : l.options.module,
              };
            }
          });
      });
    }

    return config;
  },
});

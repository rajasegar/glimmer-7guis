/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js'],
        transformOptions: {
          plugins: [
            '@glimmerx/babel-plugin-component-templates',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ],
    [
      'snowpack-plugin-terser',
      {
        terserOptions: {
          compress: {
            arguments: true,
            passes: 2,
            unsafe_arrows: true,
          },
        },
      },
    ],
  ],
  install: ['@glimmer/core'],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/animations.scss";
        `,
      },
    },
  },
  configureWebpack: {
    output: {
      filename: `js/[name].[${this.mode === 'production' ? 'contenthash:10' : 'hash:10'}].js`,
    },
    plugins: [
      new webpack.DefinePlugin({
        __ARGV__: JSON.stringify(process.argv),
      }),
    ],
  },
  // https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Flyleaf Studios';
      return args;
    });
  },
  publicPath: '/',
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};

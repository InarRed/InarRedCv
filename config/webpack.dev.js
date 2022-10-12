const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) =>
  merge(common(env), {
    output: {
      publicPath: '/',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: 'only',
      port: 8080,
    },
    plugins: [new ReactRefreshPlugin()],
    module: {
      rules: [
        {
          test: /\.(sass|scss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: true, importLoaders: 1, modules: true },
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        },
      ],
    },
  });

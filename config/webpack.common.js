const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    app: './src/index.tsx',
  },
  // Where webpack outputs the assets and bundles
  output: {
    filename: '[name].bundle.js',
    path: paths.build,
    clean: true,
  },

  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: 'Production',
      favicon: paths.src + '/assets/favicon.ico',
      template: paths.src + '/index.html',
      filename: 'index.html',
    }),
    //Eslint
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      // emitWarning: process.env.NODE_ENV !== 'production',
      //Screen about all warnings after every save is VERY ANNOYING, and I couldn't find how to disable it without disabling messages in console
      emitWarning: process.env.NODE_ENV === 'production',
    }),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

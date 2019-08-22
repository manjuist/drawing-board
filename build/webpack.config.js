const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SelfPlugin = require('./plugins')

const ROOT_PATH = path.resolve(__dirname, '..');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/app.tsx',
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    alias: {
      common: path.resolve(ROOT_PATH, 'src/common'),
    },
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      // loader: 'ts-loader',
      loader: 'awesome-typescript-loader',
    }, {
      test: /\.js?$/,
      loader: 'source-map-loader',
      enforce: 'pre',
    }, {
      test: /\.(sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.join(ROOT_PATH, 'src/common/styles/_variable.scss'),
            ],
          },
        },

      ],
    }, {
      test: /\.(woff|woff2|otf|ttf|eot|svg)$/,
      loader: 'url-loader',
    }],
  },
  // externals: {
  // "react": "React",
  // "react-dom":"ReactDOM"
  // },
  devServer: {
    contentBase: DIST_PATH,
    compress: true,
    port: 9000,
  },
  plugins: [
    // new SelfPlugin(),
    new HtmlWebpackPlugin({
      title: 'index',
      inject: true,
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};

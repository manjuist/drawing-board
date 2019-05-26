const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SelfPlugin = require('./plugins')

//const distPath = path.resolve(__dirname, '..','dist')
const distPath = path.resolve(__dirname, '..','dist')

module.exports = {
  // Change to your "entry-point".
  devtool: 'source-map',
  entry: {
    app: './src/app.tsx',
  },
  output: {
    path: distPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }, {
      test: /\.js?$/,
      loader: 'source-map-loader',
      enforce: "pre",
    },{
      test: /\.(sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  //externals: {
    //"react": "React",
    //"react-dom":"ReactDOM"
  //},
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      inject: true,
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new SelfPlugin()
  ],
};

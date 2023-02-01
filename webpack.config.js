const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
      {
        test: /.(ttf|otf|eot|woff(2)?)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'To-do list',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '.src/'),
    },
    extensions: ['.js', '.jsx', '.scss'],
  },
};
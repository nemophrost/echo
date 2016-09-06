'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, '/src')
const dfltPort = 8008;

module.exports = {
  port: dfltPort,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    // template: 'template.html'
  })],
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: dfltPort,
    publicPath: '/assets/',
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + dfltPort,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      include: srcPath,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: srcPath
    }]
  }
}

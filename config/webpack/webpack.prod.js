const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const common = require('./webpack.common')
const projectPaths = require('../projectPaths')

module.exports = merge(common, {
  devtool: 'none',
  output: {
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: projectPaths.distDir
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(projectPaths.viewsDir, 'index.html'),
      filename: path.join(projectPaths.distDir, 'index.html'),
      favicon: './favicon.png',
      inject: true,
    }),
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: true,
      exclude: /node_modules/
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      deleteOriginalAssets: true,
    }),
  ]
})




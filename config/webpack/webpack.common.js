const webpack = require('webpack')
const WebpackChunkHash = require('webpack-chunk-hash')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const projectPaths = require('../projectPaths')

module.exports = {
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'babel-polyfill',
      projectPaths.clientEntry,
    ],
    vendor: [
      'react',
      'react-dom',
      'react-loadable',
      'react-helmet',
      'react-fontawesome',
      'react-hot-loader',
      'react-router-dom',
      'react-stonecutter',
      'react-scroll-up',
      'styled-components',
      'slug',
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { root: projectPaths.rootDir }),
    new HtmlWebpackPlugin({
      template: path.join(projectPaths.viewsDir, 'index.html'),
      favicon: './favicon.png',
      inject: true,
    }),
    new webpack.NamedModulesPlugin(),
    new WebpackChunkHash(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: projectPaths.sourceDir,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|ttf)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
    ]
  }
}

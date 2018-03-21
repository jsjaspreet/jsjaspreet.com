const merge = require('webpack-merge');
const common = require('./webpack.common');
const projectPaths = require('../projectPaths');

module.exports = merge(common, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: projectPaths.distDir
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: projectPaths.distDir,
    publicPath: '/',
  },
});

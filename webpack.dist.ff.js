const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const minify = require('babel-minify-webpack-plugin')
const webpack = require('webpack')

const path = require('path')

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist-ff'),
    filename: 'dist.gmailquicklinks.bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: './manifest.dist.json',
        to: './manifest.json'
      },{
        from: './src/assets/icon16.png',
        to: './assets/icon16.png'
      },{
        from: './src/assets/icon48.png',
        to: './assets/icon48.png'
      }
    ]),
    // new minify()
    new webpack.optimize.UglifyJsPlugin()
  ]
})

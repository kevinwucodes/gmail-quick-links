const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dev-ff'),
    filename: 'dev.gmailquicklinks.bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './manifest.dev.ff.json',
        to: './manifest.json'
      },{
        from: './src/assets/icon16.png',
        to: './assets/icon16.png'
      },{
        from: './src/assets/icon48.png',
        to: './assets/icon48.png'
      }
    ]),
  ]
})

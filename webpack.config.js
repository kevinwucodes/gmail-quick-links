const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),

    new CopyWebpackPlugin([
      {
        from: './manifest.json',
        to: './manifest.json'
      },{
        from: './src/assets/icon16.png',
        to: './assets/icon16.png'
      },{
        from: './src/assets/icon48.png',
        to: './assets/icon48.png'
      }
    ]),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = config

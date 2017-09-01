const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// the path(s) that should be cleaned
let pathsToClean = [
  'dev',
  'dev-ff',
  'dev-chrome',

  'dist',
  'dist-ff',
  'dist-chrome'
]

const config = {
  entry: './src/index.js',
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
    new CleanWebpackPlugin(pathsToClean),

    // new webpack.optimize.UglifyJsPlugin()

    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = config

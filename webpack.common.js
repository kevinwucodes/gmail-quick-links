const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// the path(s) that should be cleaned
let pathsToClean = ['dev', 'dist']

const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
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

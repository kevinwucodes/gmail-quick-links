const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

module.exports = args => {
  const outputDir =
    args && args.env && args.env == 'development' ? 'dev' : 'dist'
  const manifestFile =
    args && args.env && args.env == 'development'
      ? './manifest.dev.json'
      : './manifest.dist.json'
  const bundleType =
    args && args.env && args.env == 'development' ? 'dev' : 'dist'

  return merge(common, {
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, outputDir),
      filename: `${bundleType}.gmailquicklinks.bundle.js`
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: manifestFile,
          to: './manifest.json'
        },
        {
          from: './src/assets/icon16.png',
          to: './assets/icon16.png'
        },
        {
          from: './src/assets/icon48.png',
          to: './assets/icon48.png'
        },
        {
          from: './src/default.css',
          to: './default.css'
        },
        {
          from: './node_modules/react/dist/react.js',
          to: './react.js'
        },
        {
          from: './node_modules/react-dom/dist/react-dom.js',
          to: './react-dom.js'
        }
      ])
    ]
  })
}

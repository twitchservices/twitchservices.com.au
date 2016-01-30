var webpack = require('webpack')
var classy = require('markdown-it-classy')

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    resolve: {
      extensions: ['', '.js', '.styl']
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test:   /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url',
      },
      { 
        test: /\.md$/,
        loader: 'vue-html!markdown-it'
      },
    ]
  },
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  vue: {
    postcss: [
      require('lost')(),
      require('postcss-responsive-type')()
    ]
  },
  'markdown-it': {
    use: [classy]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}

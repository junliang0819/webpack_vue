const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../')//项目根路径 ___dirName表示当前文件所在路径
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: path.resolve(__dirname, '../src/app.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  vue: {
    // loaders: utils.cssLoaders(),
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin("没有版权，随便你用"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index_temp.html')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

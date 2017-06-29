const path = require('path')
const webpack = require('webpack')
const projectRoot = path.resolve(__dirname, '../')//项目根路径 ___dirName表示当前文件所在路径
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: ['webpack-hot-middleware/client',path.resolve(__dirname, '../src/app.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    // fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    // fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: path.posix.join(__dirname, '../dist/assets/images/[name].[ext]')
          }
        }]
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin("没有版权，随便你用"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
}

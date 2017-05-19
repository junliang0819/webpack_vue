const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const opn = require('opn')//自动打开浏览器
const path = require('path')
const proxyMiddleware = require('http-proxy-middleware')
const port = '8080'
const app = express()
const compiler = webpack(webpackConfig)

app.get('/index', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../', 'index_temp.html'))
})
app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      stats: {
        colors: true,
        chunks: false
      }
    }))
app.use(require('webpack-hot-middleware')(compiler))
app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(`服务已启动，监听端口号:${port}`)
  opn(`http://localhost:${port}`)
})
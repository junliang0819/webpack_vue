const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const opn = require('opn')//自动打开浏览器
const path = require('path')
const proxyMiddleware = require('http-proxy-middleware')//http代理
const port = '8080'
const app = express()
const compiler = webpack(webpackConfig)


app.use('/static',express.static(path.resolve(__dirname,'../static')))//托管静态资源
app.use('/dist',express.static(path.resolve(__dirname,'../dist')))//托管静态资源
app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      stats: {
        colors: true,
        chunks: false
      }
    }))
app.use(require('webpack-hot-middleware')(compiler))

// app.use(require('connect-history-api-fallback')({
//   index: path.resolve(__dirname,'../dist/index.html')}))
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log(`服务已启动，监听端口号:${port}`)
  opn(`http://localhost:${port}/index`)
})
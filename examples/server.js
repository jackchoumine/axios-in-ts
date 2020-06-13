/*
 * @Description: express 服务器入口
 * @Date: 2020-06-11 23:55:50
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 05:48:39
 * @LastEditors: JackChouMine
 */
const express = require('express')
const bodyParse = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false
    }
  })
)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

const router = express.Router()

router.get('/simple/test', (req, res) => {
  res.json({
    data: 'hello ts'
  })
})
router.get('/base/test', (req, res) => {
  res.json(req.query)
})
router.post('/base/post', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})
router.post('/base/buffer', (req, res) => {
  const data = []
  req.on('data', chunk => {
    if (chunk) data.push(chunk)
  })
  req.on('end', () => {
    const buf = Buffer.concat(data)
    res.json(buf.toJSON())
  })
})

router.post('/error/timeout', (req, res) => {
  setTimeout(() => {
    res.json(req.body)
  }, 3000)
})

router.post('/error/timeout', (req, res) => {
  setTimeout(() => {
    res.json(req.body)
  }, 3000)
})
router.post('/error/net-error', (req, res) => {
  res.json(req.body)
})
router.post('/error/500', (req, res) => {
  res.status(500)
  res.json('500')
})

app.use(router)

const port = process.env.PORT || 8080
const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port},Ctrl + C to Stop`)
})
module.exports = server

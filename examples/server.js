/*
 * @Description: express 服务器入口
 * @Date: 2020-06-11 23:55:50
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 02:25:20
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

app.use(router)

const port = process.env.PORT || 8080
const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port},Ctrl + C to Stop`)
})
module.exports = server

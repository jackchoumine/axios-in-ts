/*
 * @Description: webpack 配置文件
 * @Date: 2020-06-11 23:56:21
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-12 01:40:20
 * @LastEditors: JackChouMine
 */
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  /**
   * examples 目录下创建多个目录，放置不同的demo
   * 每个目录创建一个 app.ts，作为 webpack 入口文件
   * 具有多个入口，每个入口引入了用于热更新的文件
   * entry 是一个对象，key 作为目录名
   */
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    const entry = path.join(fullDir, 'app.ts')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client', entry]
    }
    return entries
  }, {}),
  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    publicPath: '/__build__/' // 静态资源路径
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

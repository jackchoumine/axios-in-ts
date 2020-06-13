/*
 * @Description: 请求方法
 * @Date: 2020-06-11 23:36:07
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 02:35:53
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig } from './types'
export default function xhr(config: AxiosRequestConfig): void {
  // 默认 GET 方法
  const { path, data = null, method = 'get', headers = {} } = config
  const request = new XMLHttpRequest()
  // NOTE xhr 要求方法大写
  request.open(method.toUpperCase(), path, true) // 异步
  // 设置请求头，必须在 open 之后
  Object.keys(headers).forEach(key => {
    if (data === null && key.toUpperCase() === 'content-type') {
      delete headers[key]
    } else {
      request.setRequestHeader(key, headers[key])
    }
  })
  request.send(data)
}

/*
 * @Description: 请求方法
 * @Date: 2020-06-11 23:36:07
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 04:24:17
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig, HttpPromise, HttpResponse } from './types'
import { parseHeaders } from './helpers/headers'
export default function xhr(config: AxiosRequestConfig): HttpPromise {
  return new Promise(resolve => {
    // 默认 GET 方法
    const { path, data = null, method = 'get', headers = {}, responseType } = config

    const request = new XMLHttpRequest()
    // 设置 responseType // todo 作用是啥 和 content-type 有何区别
    if (responseType) {
      request.responseType = responseType
    }

    // NOTE xhr 要求方法大写
    request.open(method.toUpperCase(), path, true) // 异步

    // 请求返回 resolve
    request.onload = () => {
      const responseHeaders = request.getAllResponseHeaders()
      const responseData = responseType === 'text' ? request.responseText : request.response
      const response: HttpResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: parseHeaders(responseHeaders),
        config,
        request
      }
      resolve(response)
    }
    // 设置请求头，必须在 open 之后
    Object.keys(headers).forEach(key => {
      if (data === null && key.toUpperCase() === 'content-type') {
        delete headers[key]
      } else {
        request.setRequestHeader(key, headers[key])
      }
    })
    // 发送 xhr
    request.send(data)
  })
}

/*
 * @Description: 请求方法
 * @Date: 2020-06-11 23:36:07
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 06:06:36
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig, HttpPromise, HttpResponse } from './types'
import { parseHeaders } from './helpers/headers'
export default function xhr(config: AxiosRequestConfig): HttpPromise {
  return new Promise((resolve, reject) => {
    // 默认 GET 方法
    const { path, data = null, method = 'get', headers = {}, responseType, timeout } = config

    const request = new XMLHttpRequest()
    // 设置 responseType // todo 作用是啥 和 content-type 有何区别
    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      // 不设置 就为 0 不会超时
      request.timeout = timeout
    }

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

    // 发送 xhr
    request.send(data)

    // 接受数据完毕，可能成功，可能失败
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
      handleResponse(response)
    }

    // 错误处理，网络错误 或者非法url
    request.onerror = () => {
      reject(new Error(`Request error with ${request.status}`))
    }

    request.ontimeout = () => {
      reject(new Error(`Timeout of ${timeout}`))
    }

    /**
     * @param res
     */
    function handleResponse(res: HttpResponse): void {
      if (res.status >= 200 && res.status < 300) {
        resolve(res)
      } else {
        reject(new Error(`Request failed with status ${res.status}`))
      }
    }
  })
}

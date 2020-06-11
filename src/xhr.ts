/*
 * @Description: 请求方法
 * @Date: 2020-06-11 23:36:07
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-11 23:41:51
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig } from './types'
export default function xhr(config: AxiosRequestConfig): void {
  // 默认 GET 方法
  const { url, data = null, method = 'get' } = config
  const request = new XMLHttpRequest()
  // NOTE xhr 要求方法大写
  request.open(method.toUpperCase(), url, true) // 异步
  request.send(data)
}

/*
 * @Description: 处理请求 header
 * @Date: 2020-06-14 01:57:38
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 02:37:30
 * @LastEditors: JackChouMine
 */
import { isPlainObject } from './util'
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  // TODO 为何这样处理？
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}
export function processHeaders(headers: any, data: any): any {
  // TODO 为何只处理 一个请求头
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

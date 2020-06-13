/*
 * @Description: 处理请求 header
 * @Date: 2020-06-14 01:57:38
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 04:06:07
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

export function parseHeaders(headers: string): any {
  const parsed = Object.create(null)
  if (!headers) return parsed
  /*
"content-length: 19
content-type: application/json; charset=utf-8
date: Sat, 13 Jun 2020 19:50:41 GMT
etag: W/"13-TX+xb7OzJwZAikuaUCZSM+UEgD8"
x-powered-by: Express"
*/
  headers.split('\r\n').forEach(header => {
    let [key, value] = header.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    parsed[key] = value ? value.trim() : value
  })
  return parsed
}

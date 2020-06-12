/*
 * @Description: 处理 url
 * @Date: 2020-06-13 00:34:36
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 02:39:22
 * @LastEditors: JackChouMine
 */

import { isDate, isObject } from './util'

/**
 * 编码 url
 * @param val
 */
function encode(val: string): string {
  const encodeStr = encodeURIComponent(val)
    .replace(/%40/g, '@') //替换特殊字符
    .replace(/%24/g, '$')
    // .replace(/%22/g, '"')//NOTE URL"不合法
    .replace(/%20/g, '+')
    .replace(/%3A/gi, ':')
    .replace(/%2C/gi, ',')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
    .replace(/%7B/gi, '{')
    .replace(/%7D/gi, '}')
  return encodeStr
}

/**
 * 处理路径
 * @param path 请求 path
 * @param params 查询参数
 */
export function buildPath(path: string, params?: any): string {
  if (!params) {
    return path
  }
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || val === undefined) return // NOTE 进入下一次循环
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString() //TODO 为何是这个函数？
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  const serializedParams = parts.join('&')
  if (serializedParams) {
    const index = path.indexOf('#')
    if (index !== -1) {
      // path 有哈希 path#hash
      path = path.slice(0, index)
    }
    //path? or path
    path += (path.includes('?') ? '&' : '?') + serializedParams
  }
  return path
}

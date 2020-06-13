/*
 * @Description: 转化POST发送的数据
 * @Date: 2020-06-14 01:05:28
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 04:25:00
 * @LastEditors: JackChouMine
 */
import { isPlainObject } from './util'
export function transformRequest(data: any): any {
  if (isPlainObject(data)) return JSON.stringify(data)
  return data
}
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (error) {
      // parse failed
    }
  }
  return data
}

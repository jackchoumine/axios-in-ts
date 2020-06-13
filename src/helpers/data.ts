/*
 * @Description: 转化POST发送的数据
 * @Date: 2020-06-14 01:05:28
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 02:35:31
 * @LastEditors: JackChouMine
 */
import { isPlainObject, getType } from './util'
export function transformRequest(data: any): any {
  if (isPlainObject(data)) return JSON.stringify(data)
  return data
}

/*
 * @Description: 入口文件
 * @Date: 2020-06-11 22:39:49
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 02:18:46
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { transformRequest } from './helpers/data'
import { buildPath } from './helpers/path'
import { processHeaders } from './helpers/headers'
function http(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {
  config.path = transformPath(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}
function transformPath(config: AxiosRequestConfig): string {
  const { path, params } = config
  return buildPath(path, params)
}
function transformRequestData(config: AxiosRequestConfig): string {
  return transformRequest(config.data)
}
function transformHeaders(config: AxiosRequestConfig): any {
  const { data, headers = {} } = config
  return processHeaders(headers, data)
}
export default http

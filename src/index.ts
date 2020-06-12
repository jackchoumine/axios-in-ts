/*
 * @Description: 入口文件
 * @Date: 2020-06-11 22:39:49
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 02:04:22
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig } from './types'
import http from './xhr'
import { buildPath } from './helpers/path'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  http(config)
}
function processConfig(config: AxiosRequestConfig): void {
  config.path = transformPath(config)
}
function transformPath(config: AxiosRequestConfig): string {
  const { path, params } = config
  return buildPath(path, params)
}
export default axios

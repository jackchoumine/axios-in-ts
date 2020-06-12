/*
 * @Description: 入口文件
 * @Date: 2020-06-11 22:39:49
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 02:12:12
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildPath } from './helpers/path'
function http(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {
  config.path = transformPath(config)
}
function transformPath(config: AxiosRequestConfig): string {
  const { path, params } = config
  return buildPath(path, params)
}
export default http

/*
 * @Description: 发送请求
 * @Date: 2020-06-14 23:02:30
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 23:09:21
 * @LastEditors: JackChouMine
 */

import { AxiosRequestConfig, HttpPromise, HttpResponse } from '../types'
import xhr from './xhr'
import { transformRequest, transformResponse } from '../helpers/data'
import { buildPath } from '../helpers/path'
import { processHeaders } from '../helpers/headers'

export default function sendHttp(config: AxiosRequestConfig): HttpPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.path = transformPath(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformPath(config: AxiosRequestConfig): string {
  const { path, params } = config
  // NOTE path 可选之后，值肯能为 undefined，而 buildPath 的path 参数是必选的，可确保运行时，path 一定有值，使用 ! 声明s
  return buildPath(path!, params)
}

function transformRequestData(config: AxiosRequestConfig): string {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { data, headers = {} } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: HttpResponse): HttpResponse {
  res.data = transformResponse(res.data)
  return res
}

/*
 * @Description:
 * @Date: 2020-06-14 07:10:24
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 07:11:06
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig, HttpPromise, HttpResponse } from './types'
import xhr from './xhr'
import { transformRequest, transformResponse } from './helpers/data'
import { buildPath } from './helpers/path'
import { processHeaders } from './helpers/headers'

function http(config: AxiosRequestConfig): HttpPromise {
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
  return buildPath(path, params)
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

export default http

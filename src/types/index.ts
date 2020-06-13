import { inflate } from 'zlib'
import { isMainThread } from 'worker_threads'

/*
 * @Description: 类型定义入口
 * @Date: 2020-06-11 23:27:45
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 03:12:28
 * @LastEditors: JackChouMine
 */
export type Method = 'get' | 'GET' | 'post' | 'delete' | 'put' | 'options' | 'head' | 'patch'
export interface AxiosRequestConfig {
  path: string
  method?: Method // 是字符串字面量类型约定值的范围
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType // todo 为何要这样定义
}
/**
 * HTTP 响应
 */
export interface HttpResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

// TODO Promise 是泛型接口吗？
/**
 *
 */
export interface HttpPromise extends Promise<HttpResponse> {}

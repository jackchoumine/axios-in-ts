/*
 * @Description: 类型定义入口
 * @Date: 2020-06-11 23:27:45
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 22:59:03
 * @LastEditors: JackChouMine
 */
export type Method = 'get' | 'GET' | 'post' | 'delete' | 'put' | 'options' | 'head' | 'patch'
export interface AxiosRequestConfig {
  path?: string // path 可单独拿出来以后，不再是必需属性
  method?: Method // 是字符串字面量类型约定值的范围
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType // todo 为何要这样定义
  timeout?: number
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

export interface HttpRequestError extends Error {
  isHttpError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: HttpResponse
}

export interface Http {
  request(config: AxiosRequestConfig): HttpPromise
  get(path: string, config?: AxiosRequestConfig): HttpPromise
  delete(path: string, config?: AxiosRequestConfig): HttpPromise
  head(path: string, config?: AxiosRequestConfig): HttpPromise
  options(path: string, config?: AxiosRequestConfig): HttpPromise
  post(path: string, data?: any, config?: AxiosRequestConfig): HttpPromise
  put(path: string, data?: any, config?: AxiosRequestConfig): HttpPromise
  patch(path: string, data?: any, config?: AxiosRequestConfig): HttpPromise
}

/**
 * 使用接口定义了函数类型，继承了 Http 使其具备了方法成为一个（混合）对象。
 */
export interface HttpInstance extends Http {
  (config: AxiosRequestConfig): HttpPromise
}

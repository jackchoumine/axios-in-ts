/*
 * @Description: Http 类
 * @Date: 2020-06-14 23:00:01
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-15 02:00:13
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig, HttpPromise, Method } from '../types'
import sendHttp from './sendHttp'
export default class Http {
  // implements HttpInstance {
  request(path: any, config?: any): HttpPromise {
    // FIX 这个实现有问题
    if (typeof path === 'string') {
      if (!config) {
        config = {}
      }
      config.path = path
    } else {
      // 第一个参数不是字符串，那么就是 config
      config = path
    }
    return sendHttp(config)
  }
  get(path: string, config: AxiosRequestConfig): HttpPromise {
    return this._requestWidthoutData('get', path, config)
  }
  delete(path: string, config: AxiosRequestConfig): HttpPromise {
    return this._requestWidthoutData('delete', path, config)
  }
  head(path: string, config: AxiosRequestConfig): HttpPromise {
    return this._requestWidthoutData('head', path, config)
  }
  options(path: string, config: AxiosRequestConfig): HttpPromise {
    return this._requestWidthoutData('options', path, config)
  }
  post(path: string, data: any, config: AxiosRequestConfig): HttpPromise {
    return this._requestWidthData('post', path, data, config)
  }
  put(path: string, data: any, config: AxiosRequestConfig): HttpPromise {
    return this._requestWidthData('put', path, data, config)
  }
  patch(path: string, data: any, config: AxiosRequestConfig): HttpPromise {
    return this._requestWidthData('patch', path, data, config)
  }
  private _requestWidthoutData(
    method: Method,
    path: string,
    config: AxiosRequestConfig
  ): HttpPromise {
    return this.request(Object.assign({ method, path }, config || {}))
  }
  private _requestWidthData(
    method: Method,
    path: string,
    data: any,
    config: AxiosRequestConfig
  ): HttpPromise {
    return this.request(Object.assign({ method, path, data }, config || {}))
  }
}

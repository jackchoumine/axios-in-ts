/*
 * @Description: 错误
 * @Date: 2020-06-14 06:12:15
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 06:59:40
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig, HttpResponse } from '../types'
export class HttpError extends Error {
  isHttpError: boolean
  config: AxiosRequestConfig
  request?: any
  code?: string | null
  response?: HttpResponse
  constructor(
    message: string,
    isHttpError: boolean,
    code: string | null,
    config: AxiosRequestConfig,
    request?: any,
    response?: HttpResponse
  ) {
    super(message)
    this.config = config
    this.response = response
    this.request = request
    this.code = code
    this.isHttpError = isHttpError

    Object.setPrototypeOf(this, HttpError.prototype) // todo why
  }
}
export function createError(
  message: string,
  isHttpError: boolean,
  code: string | null,
  config: AxiosRequestConfig,
  request?: any,
  response?: HttpResponse
) {
  console.log(message)
  console.log(isHttpError, code, config, request, response)

  return new HttpError(message, isHttpError, code, config, request, response)
}

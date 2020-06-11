/*
 * @Description: 入口文件
 * @Date: 2020-06-11 22:39:49
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-11 23:42:29
 * @LastEditors: JackChouMine
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  xhr(config)
}
export default axios

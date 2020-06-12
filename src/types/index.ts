/*
 * @Description: 类型定义入口
 * @Date: 2020-06-11 23:27:45
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 00:39:51
 * @LastEditors: JackChouMine
 */
export type Method = 'get' | 'GET' | 'post' | 'delete' | 'put' | 'options' | 'head' | 'patch'
export interface AxiosRequestConfig {
  path: string
  method?: Method // 是字符串字面量类型约定值的范围
  data?: any
  params?: any
}

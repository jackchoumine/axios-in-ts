/*
 * @Description:
 * @Date: 2020-06-14 07:10:24
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-15 00:58:49
 * @LastEditors: JackChouMine
 */
import { HttpInstance } from './types'
import { extend } from './helpers/util'
import Http from './core/Http'
function createIntance(): HttpInstance {
  const http = new Http()
  // 绑定 this
  const instance = Http.prototype.request.bind(http)

  extend(instance, http)

  return instance as HttpInstance
}
const http = createIntance()
export default http

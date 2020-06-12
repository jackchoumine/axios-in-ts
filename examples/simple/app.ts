/*
 * @Description:
 * @Date: 2020-06-11 23:54:10
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 02:12:25
 * @LastEditors: JackChouMine
 */
import http from '../../src/index'
http({
  method: 'get',
  path: '/simple/test',
  params: {
    a: 1,
    b: 2
  }
})

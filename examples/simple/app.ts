/*
 * @Description:
 * @Date: 2020-06-11 23:54:10
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 03:53:24
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
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

http({
  method: 'get',
  path: '/simple/test',
  responseType: 'json',
  params: {
    a: 1,
    b: 2
  }
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

http({
  method: 'post',
  path: '/base/post',
  responseType: 'json', // 设置为 json ，返回数据会解析为对象，否则为字符串
  data: { name: 'jack' }
})
  .then(res => {
    console.log(res.data)
  })
  .catch(e => {
    console.log(e)
  })

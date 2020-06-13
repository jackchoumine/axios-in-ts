/*
 * @Description: 错误请求
 * @Date: 2020-06-14 04:50:03
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 05:50:52
 * @LastEditors: JackChouMine
 */
import http from '../../src/index'
http({
  path: '/error/404',
  method: 'post',
  data: { test: '404' }
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

// 模拟网络错误
setTimeout(() => {
  http({
    path: '/error/net-error',
    method: 'post',
    data: { type: 'timeout' }
  })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
}, 4000)

// 模拟超时
http({
  path: '/error/timeout',
  method: 'post',
  data: 'timeout',
  timeout: 1000
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

http({
  path: '/error/500',
  method: 'post',
  data: '500'
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

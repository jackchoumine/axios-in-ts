/*
 * @Description: 错误请求
 * @Date: 2020-06-14 04:50:03
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 07:17:04
 * @LastEditors: JackChouMine
 */
import http, { HttpRequestError } from '../../src/index'
http({
  path: '/error/404',
  method: 'post',
  data: { test: '404' }
})
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log('**********', JSON.stringify(e, [], 1))
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
  .catch((e: HttpRequestError) => {
    console.log('message', e.message)
    console.log('isHttpError', e.isHttpError)
    console.log('code', e.code)
    console.log('config', e.config)
    console.log('request', e.request)
    console.log('response', e.response)
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

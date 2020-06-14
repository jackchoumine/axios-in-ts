/*
 * @Description: 基础Demo
 * @Date: 2020-06-13 02:07:49
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-15 01:16:03
 * @LastEditors: JackChouMine
 */
import http from '../../src'

const date = new Date()
http({
  path: '/base/test#hash',
  params: {
    date
  }
})
  .then(res => {
    console.log('http(get)', res.data)
  })
  .catch(e => {
    console.log(e)
  })

// 发送二进制数据
http
  .request({
    path: '/base/buffer',
    method: 'post',
    data: new Int32Array([1, 10])
  })
  .then(res => {
    console.log('http.request(post)', res.data)
  })
  .catch(e => {
    console.log(e)
  })

// 发送 application/x-www-form-urlencoded
const searchParams = new URLSearchParams('name=jack&age=23')

http
  .post('/base/post', undefined, { data: searchParams })
  .then(res => {
    console.log('http.post', res.data)
  })
  .catch(e => {
    console.log(e)
  })

http
  .get('/extend/get#hase?', {
    params: {
      foo: '@:$, ', // 含有空格
      bar: [1, 'foo']
    }
  })
  .then(res => {
    console.log('http.get', res.data)
  })
  .catch(e => {
    console.log(e)
  })

http
  .delete('/extend/delete', { params: { method: 'delete' } })
  .then(res => {
    console.log('http.delete', res.data)
  })
  .catch(e => {
    console.log(e)
  })
http
  .head('/extend/head', { params: { method: 'delete' } })
  .then(res => {
    console.log('http.head', res.data)
  })
  .catch(e => {
    console.log(e)
  })
http
  .options('/extend/options', { params: { method: 'options' } })
  .then(res => {
    console.log('http.options', res.data)
  })
  .catch(e => {
    console.log(e)
  })

/*
 * @Description: 基础Demo
 * @Date: 2020-06-13 02:07:49
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-14 02:57:54
 * @LastEditors: JackChouMine
 */
import http from '../../src/index'
import { FORMERR } from 'dns'
http({
  path: '/base/test',
  params: {
    students: ['jack', '小明']
  }
})
http({
  path: '/base/test?test=test',
  params: {
    student: {
      studentId: '123',
      name: '小胡'
    }
  }
})
const date = new Date()
http({
  path: '/base/test#hash',
  params: {
    date
  }
})
http({
  path: '/base/test#hase?',
  params: {
    foo: '@:$, ', // 含有空格
    bar: [1, 'foo']
  }
})
http({
  path: '/base/post',
  method: 'post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json,text/plain,*/*' // 可接受多种格式
  },
  data: {
    a: 'a',
    b: [1, 2, 3, 4]
  }
})

// 发送 application/x-www-form-urlencoded
const searchParams = new URLSearchParams('name=jack&age=23') // todo 这是什么
http({
  path: '/base/post',
  method: 'post',
  data: searchParams
})

// 发送二进制数据
http({
  path: '/base/buffer',
  method: 'post',
  data: new Int32Array([1, 10])
})
// 发送 multipart/form-data 格式的数据，
const formData = new FormData() // TODO
formData.append('name', 'jack')
formData.append('age', '24')
const content = '<a id="a"><b id="b">hey!</b></a>' // 新文件的正文...
const blob = new Blob([content], { type: 'text/xml' }) // TODO Blod 对象
formData.append('webmasterfile', blob)

http({
  path: '/base/buffer',
  method: 'post',
  data: formData
})

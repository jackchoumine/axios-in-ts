/*
 * @Description: 基础Demo
 * @Date: 2020-06-13 02:07:49
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 02:25:12
 * @LastEditors: JackChouMine
 */
import http from '../../src/index'
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
    foo: '@:$, ', //含有空格
    bar: [1, 'foo']
  }
})

/*
 * @Description:工具函数
 * @Date: 2020-06-13 00:47:18
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-15 01:02:15
 * @LastEditors: JackChouMine
 */
// 缓存该方法，多次调用，减少输入
const toString = Object.prototype.toString
/**
 * 判断一个值是否为日期对象
 * @param val 待判断的值
 */
export function isDate(val: any): val is Date {
  // note 返回值使用`类型谓词`，方便调用方法，编辑器提供智能提示
  return toString.call(val) === '[object Date]'
}
/**
 * 判断一个值是否为对象
 * @param val 待判断的值
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
/**
 * 判断 JS 普通对象，比如 {}
 * @param val
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
export function getType(val: any): string {
  const strType = toString.call(val)
  const startIndex = strType.indexOf(' ')
  const endIndex = strType.lastIndexOf(']')
  return strType.substring(startIndex, endIndex)
}

/**
 * 扩展对象
 * @param to
 * @param from
 */
export function extend<T, U>(to: T, from: U): T & U {
  // NOTE to 是一个函数，这样基于无法合并，不能遍历函数的属性
  // const end: any = {}
  // for (let key in to) {
  //   end[key] = to[key]
  // }
  // for (let key in from) {
  //   end[key] = from[key]
  // }
  // return end as T & U
  // TODO 如何再函数上添加属性 可把一个属性添加到函数上
  for (let key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

/*
 * @Description:工具函数
 * @Date: 2020-06-13 00:47:18
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-13 01:44:05
 * @LastEditors: JackChouMine
 */
//缓存该方法，多次调用，减少输入
const toString = Object.prototype.toString
/**
 * 判断一个值是否为日期对象
 * @param val 待判断的值
 */
export function isDate(val: any): val is Date {
  //note 返回值使用`类型谓词`，方便调用方法，编辑器提供智能提示
  return toString.call(val) === '[object Date]'
}
/**
 * 判断一个值是否为对象
 * @param val 待判断的值
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

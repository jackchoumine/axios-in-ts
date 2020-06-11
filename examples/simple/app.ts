/*
 * @Description:
 * @Date: 2020-06-11 23:54:10
 * @Author: JackChouMine
 * @LastEditTime: 2020-06-12 00:54:43
 * @LastEditors: JackChouMine
 */
import axios from "../../src/index";
axios({
  method: 'get',
  url: '/simple/test',
  params: {
    a: 1,
    b: 2
  }
})

/**
 * @desc axios请求统一配置和处理
 */

import Vue from "vue"
import axios from "axios"
import devConfig from "*/dev.config"
import { Message } from "element-ui"

const options = {
  timeout: 9000,
  // 发送请求时带上cookie
  withCredentials: true,
  // api请求统一前缀
  baseURL: devConfig.apiPrefix
}
const Axios = axios.create(options)

// request请求拦截处理
Axios.interceptors.request.use(req => {
  // 给所有请求加uuid
  if (req.params) {
    req.uuid = localStorage.getItem('userId')
  } else {
    req.params = {
      uuid: localStorage.getItem('userId')
    }
  }
  // 给所有get请求加时间戳
  if (req.method === "get") {
    if (req.params) {
      req.params.t = Date.now()
      req.uuid = localStorage.getItem('userId')
    } else {
      req.params = {
        t: Date.now(),
        uuid: localStorage.getItem('userId')
      }
    }
  }
  return req
})

// response响应拦截处理
Axios.interceptors.response.use(
  res => {
    // 请求成功，但是操作不成功时显示后端返回的错误信息
    // 请求成功条件根据接口规范来设置
    if (res.data.status !== 0) {
      // 统一错误处理
      Message.error(res.data.Message || "接口请求出错了！")
    }
    // 返回接口数据
    return res.data
  },
  err => {
    // 统一错误处理
    Message.error(err.message || "接口请求出错了！")
    return Promise.reject(err)
  }
)

// 将axios实例挂载到vue，方便需要时使用
// 不过推荐统一使用api.js来定义所有接口，方便统一管理维护
Vue.prototype.$axios = Axios

export default Axios

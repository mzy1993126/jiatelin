/**
 * @desc 后台api统一管理
 */

import axios from "./axios"
import qs from "qs"
import utils from "@/utils"

// 集中管理Api
const Api = {
  // 登录接口
  login(environment) {
    return axios.get('user/login?env=' + environment + '&type=userForActivity&token=' + utils.getRequest().token)
  },
}

export default Api

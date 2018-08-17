/**
 * @desc 公共filters
 */

import Vue from "vue"
import address from "*/address.config"

// 过滤器数组
const filters = {
  // 图片拼接cdn过滤器
  imgCdn(val) {
    return address.IMG_ADDRESS + val
  },
  // 字符串截取过滤器
  cutStr(str = "", L = 8) {
    if (!(typeof str === "string") || !str) {
      return ""
    }
    let result = ""
    const strlen = str.length // 字符串长度
    const chrlen = str.replace(/[^\x00-\xff]/g, "**").length // 字节长度
    if (chrlen <= L) {
      return str
    }

    for (let i = 0, j = 0; i < strlen; i++) {
      const chr = str.charAt(i)
      if (/[\x00-\xff]/.test(chr)) {
        j++ // ascii码为0-255，一个字符就是一个字节的长度
      } else {
        j += 2 // ascii码为0-255 以外，一个字符就是两个字节的长度
      }
      if (j <= L) {
        // 当加上当前字符以后，如果总字节长度小于等于L，则将当前字符真实的+在result后
        result += chr
      } else {
        // 反之则说明result已经是不拆分字符的情况下最接近L的值了，直接返回
        const strItem = result.trim().split(" ")
        if (strItem.length > 1) {
          strItem.pop()
        }
        result = strItem.join(" ")
        return `${result}...`
      }
    }
  }
}

export default filters

/**
 * @desc 公共工具
 */

const Util = {
  /**
   * 设置Cookie
   * @param {string} name 设置的Cookie属性
   * @param {string} val  设置的Cookie值
   * @param {string} path 设置的Cookie的路径
   * @param {number} date 设置的Cookie的过期时间(天数)
   */
  setCookie(name, val, path, date) {
    const oDate = new Date()
    oDate.setDate(oDate.getDate() + (date || 30))
    const sDate = `;expires=${oDate}`
    const Path = `;path=${path || "/"}`
    document.cookie = `${name}=${val}${sDate}${Path}`
  },

  /**
   * 获取Cookie
   * @param   {string} name 需要获取的Cookie属性
   * @returns {string} 获取到的Cookie值
   */
  getCookie(name) {
    const sCookies = document.cookie
    const arr = sCookies.split("; ")

    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[i].split("=")
      if (arr2[0] === name) {
        return arr2[1]
      }
    }

    return ""
  },

  /**
   * 删除Cookie
   * @param {string} name 需要删除的Cookie
   */
  delCookie(name) {
    this.setCookie(name, "", "", -1)
  },

  /**
   * 获取Cookie的个数
   * @returns {number} Cookie的个数
   */
  cookieLength() {
    const sCookie = document.cookie
    const arr = sCookie.split("; ")
    if (!sCookie) {
      return 0
    }
    return arr.length
  },

  /**
   * 获取url参数
   * @returns {json} 参数对象
   */
  getRequest() {
    let url = window.location.search;
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
      let str = url.substr(1);
      let strs = str.split("&");
      for(let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  },
}

export default Util

// 用户模块
const User = {
  state: {
    isLogin: false, // 用户是否登录
    userInfo: {} // 用户信息
  },

  // 特别注意，子模块的mutations和getters、actions都是注册在全局store上的
  mutations: {
    // 改变登录状态
    CHANGE_LOGIN_STATUS(state, payload) {
      state.isLogin = payload
    },

    // 更新用户信息
    UPDATE_USER_INFO(state, payload) {
      state.userInfo = payload
    }
  },
  getters: {}
}

export default User

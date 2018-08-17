/**
 * @desc 配置本地开发配置，包括api、代理等配置
 */
const address = require("./address.config")
module.exports = {
  // api统一前缀，axios中的baseURL
  apiPrefix: "/api/",
  // 前台api代理规则，项目部署时需要在服务器配置相同的反向代理
  apiProxy: {
    "/api": {
      target: address.API_ADDRESS,
      // 重写路径，去掉/api
      pathRewrite: { "^/api": "/" },
      changeOrigin: true,
      secure: false
    }
  }
}

/**
 * @desc 根据不同环境配置服务器
 */
var addressConfig = {
  // 开发环境
  dev: {
    // 环境类型，vue组件中使用this.$address.ENV获取
    ENV: "dev",
    // 静态资源CDN服务器
    CDN_ADDRESS: "/",
    // 数据接口API服务器
    API_ADDRESS: "http://snstest.geely.com/api",
    // 单点认证服务器
    USERCENTER_ADDRESS: "http://snstest.geely.com/api",
    // 图片上传服务器
    UPLOAD_ADDRESS: "http://snstest.geely.com/api",
    // 图片服务器
    IMG_ADDRESS: "http://snstest.geely.com/api"
  },
  // 测试环境
  test: {
    ENV: "test",
    CDN_ADDRESS: "/",
    API_ADDRESS: "/",
    USERCENTER_ADDRESS: "/",
    UPLOAD_ADDRESS: "/",
    IMG_ADDRESS: "/"
  },
  // 预发环境
  pre: {
    ENV: "pre",
    CDN_ADDRESS: "/",
    API_ADDRESS: "/",
    USERCENTER_ADDRESS: "/",
    UPLOAD_ADDRESS: "/",
    IMG_ADDRESS: "/"
  },
  // 正式环境
  prod: {
    ENV: "prod",
    CDN_ADDRESS: "/",
    API_ADDRESS: "https://supersns.geely.com/api",
    USERCENTER_ADDRESS: "https://supersns.geely.com/api",
    UPLOAD_ADDRESS: "https://supersns.geely.com/api",
    IMG_ADDRESS: "https://supersns.geely.com/api"
  }
}

// 根据不同环境读取不同配置
var config = addressConfig[process.env.NODE_CONFIG || "dev"]

module.exports = config

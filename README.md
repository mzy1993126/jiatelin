# PC WebApp template

> pc 端 webapp 基础脚手架

## 简介

```bash
1、接口api集中管理并挂载到vue实例，方便使用和维护( eg: vm.$apis.getUserInfo() )
2、接口请求和返回拦截，参数和错误统一处理
3、区分测试、预发、正式环境服务器配置，并分别构建上线代码
4、统一配置api请求前缀和跨域代理
5、使用sass预处理器，并共享全局变量
6、统一管理filter并挂载到vue实例( eg: vm.$filters.filterName() )
7、统一管理公共函数并挂载到vue实例( eg: vm.$utils.setCookie() )
8、路由懒加载分别打包并命名处理
```

## 快速开始

```bash
# 安装依赖
yarn

# 启动开发环境，通过localhost:8080或ip:8080访问
yarn dev

# 不同环境代码构建
yarn build:test   // 测试环境构建
yarn build:pre    // 预发环境构建
yarn build:prod   // 正式环境构建

# 构建项目并显示包分析图表
npm run build:test --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

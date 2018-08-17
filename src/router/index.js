import Vue from "vue"
import Router from "vue-router"

// 懒加载路由并命名 chunk 文件
const home = () => import("@/pages/home")
const page404 = () => import("@/pages/page404")
const list = () => import("@/pages/list")
const Initiating = () => import("@/pages/Initiating")
const table = () => import("@/pages/table")
const details = () => import("@/pages/details")
Vue.use(Router)

const router = new Router({
  // 使用h5模式
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home/:id",
      component: home,
      children: [
      	{
      		path: '/list',
      		component: list
      	},
      	{
      		path: '/Initiating',
      		component: Initiating
      	},
      	{
      		path: '/table',
      		component: table
      	},
      	{	
      		path: '/details',
      		component: details
      	},
      	{
      		path: '/',
      		redirect: '/list'
      	}
      ]
    },
    // 404页面放在最后定义
    {
      path: "*",
      name: "page404",
      component: page404
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  	return { x: 0, y: 0 }
	}
})

// 路由控制
router.beforeEach((toRoute, fromRoute, next) => {
  // 登录控制逻辑，根据项目不同做修改
  // if (toRoute.name !== "login" && !localStorage.Token) {
  //   next({path: "/login"})
  // } else {
  //   next()
  // }
  next()
})

export default router

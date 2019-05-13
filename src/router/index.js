import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from "../pages/Home";
export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: "/Home",
      component: Home,
      title: "首页"
    },
  ]
})

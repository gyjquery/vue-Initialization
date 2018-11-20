import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import OrganizationalManagement from "../pages/OrganizationalManagement";
export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrganizationalManagement',
      component: OrganizationalManagement
    },
    {
      path: "/organizationalManagement",
      component: OrganizationalManagement,
      title: "贷款管理平台"
    },
  ]
})

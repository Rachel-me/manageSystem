/**
 * 路由
 */
import Vue from 'vue'
import Router from 'vue-router'

import demo from '../compoments/demo.vue'
import login from '../pages/login'
import emp_attendance from '../pages/emp_attendance'
import emp_record from '../pages/emp_record'
import emp_remove from '../pages/emp_remove'
import job_discuss from '../pages/job_discuss'
import salary from '../pages/salary'
import manage from '../pages/manage'
import test from '../pages/test'
import home from '../pages/home.vue'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: login, name: "login", hidden: true },
  {
    path: '/manage', component: manage, name: "manage",
    children: [

      { path: '/manage/emp_attendance', component: emp_attendance, name: "emp_attendance" },
      { path: '/manage/emp_remove', component: emp_remove, name: "emp_remove" },
      { path: '/manage/emp_record', component: emp_record, name: "emp_record" },
      { path: '/manage/job_discuss', component: job_discuss, name: "job_discuss" },
      { path: '/manage/salary', component: salary, name: "salary" }


    ]
  },
  { path: '/test', component: test, name: "test", hidden: true },


  { path: '/demo', component: demo, hidden: true },
  { path: '/home', component: home, name: "home", hidden: true },
  { path: '/401', component: home, hidden: true }
]

export default new Router({
  // require service support
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

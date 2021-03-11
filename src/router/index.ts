import {
  createWebHashHistory,
  createWebHistory,
  createRouter,
} from 'vue-router'

import Layout from '@/layouts/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('views/todo-list.vue'),
      },
    ],
  }, //此处name不能与下面Home的 name相同否则页面报错
  {
    path: '/test',
    component: () => import('views/Test.vue'),
  },
  {
    path: '/helloWorld',
    component: () => import('comps/HelloWorld.vue'),
  },
]
export default createRouter({
  history: createWebHashHistory(),
  //createWebHistory 方法返回的是 History 模式,createWebHashHistory 方法返回的是 Hash 模式
  routes,
})

import { createWebHashHistory, createWebHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/',
    name: "Index",
    component: () => import("../views/Home.vue")
  }, //此处name不能与下面Home的 name相同否则页面报错
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  //createWebHistory 方法返回的是 History 模式,createWebHashHistory 方法返回的是 Hash 模式
  routes,
});

export default router;
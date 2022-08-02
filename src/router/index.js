// 需要先引入：
import Vue from "vue";
import VueRouter from "vue-router";

// 使用：
Vue.use(VueRouter);

// 配置路由映射关系：
const routes = [
  {
    path: "",
    redirect: "/TheHome",
  },

  {
    path: "/TheHome",
    component: () => import("@/pages/TheHome/index.vue"),
  },

  {
    path: "/SwitchVision",
    component: () => import("@/pages/SwitchVision/index.vue"),
  },

  {
    path: "/DataPage",
    component: () => import("@/pages/DataPage/index.vue"),
  },

  // {
  //   path: '/DetailMsg',
  //   component: () => import('@/pages/DetailMsg/index.vue')
  // }
];

// 创建路由对象 & 暴漏：
export const router = new VueRouter({
  // 抽出来写在了上面，也可以写在这里
  routes,
  mode: "hash",
});

// 需要先引入：
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用：
Vue.use(VueRouter);

// 配置路由映射关系：
const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   redirect: '/TheHome',
  //   component: TheHome,
  //   children: [
  //     {
  //       path: '/TheHome',
  //       name: 'TheHome',
  //       component: () => import('@/pages/TheHome/index.vue')
  //     },

  //     {
  //       path: '/TheVision/index',
  //       name: 'TheVision',
  //       component: () => import('@/pages/TheVision/index.vue')
  //     }
  //   ]
  // }

  {
    path: '',
    redirect: '/TheHome'
  },

  {
    path: '/TheHome',
    component: () => import('@/pages/TheHome/index.vue')
  },

  {
    path: '/TheVision',
    component: () => import('@/pages/TheVision/index.vue')
  },

  {
    path: '/DetailMsg',
    component: () => import('@/pages/DetailMsg/index.vue')
  }
];

// 创建路由对象 & 暴漏：
export const router = new VueRouter({
  // 抽出来写在了上面，也可以写在这里
  routes,
  mode: 'history'
});

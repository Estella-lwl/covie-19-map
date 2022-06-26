// 需要先引入：
import Vue from 'vue';
import VueRouter from 'vue-router';

// 懒加载方式导入：
const TheHome = () => import('@/pages/TheHome/index.vue');
const TheVision = () => import('@/pages/TheVision/index.vue');
// const TheHome = () => import('@/pages/TheHome');
// const TheHome = () => import('@/pages/TheHome');

// 使用：
Vue.use(VueRouter);

// 配置路由映射关系：
const routes = [
  {
    path: '',
    redirect: '/TheHome'
  },

  {
    path: '/TheHome',
    // redirect: '/TheHome',
    components: { TheHome }
  },

  {
    path: '/TheVision',
    components: { TheVision }
  }
];

// 创建路由对象 & 暴漏：
export const router = new VueRouter({
  // 抽出来写在了上面，也可以写在这里
  routes,
  mode: 'history'
});

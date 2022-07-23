import Vue from 'vue';
import App from './App.vue';
import echarts from '@/plugins/echarts';
import '../node_modules/echarts/map/js/china';
import '../node_modules/echarts/map/js/world';
import '@/assets/css/common.css';
import { router } from '@/router';

// import china from 'echarts/map/json/china.json';
// echarts.registerMap('china', china);

// 使用echarts： （且要在new Vue()启动应用前使用。）
Vue.use(echarts);

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: (h) => h(App),
  created() {
    // 实例创建完成后被立即调用rem换算方法,解决内容闪现问题
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      setRem();
      window.addEventListener('resize', setRem); //浏览器窗口大小改变时调用rem换算方法
    } else {
      setRemPC();
      window.addEventListener('resize', setRemPC); //浏览器窗口大小改变时调用rem换算方法
    }
  }
}).$mount('#app');

// rem适配：
// 手机端
function setRem() {
  var whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值
  var bodyWidth = document.body.clientWidth; // 当前窗口的宽度
  var rem = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
//pc端
function setRemPC() {
  var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
  var bodyWidth = document.body.clientWidth; // 当前窗口的宽度
  var rem = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}

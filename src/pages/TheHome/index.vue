<template>
  <div id="common-page">
    <!-- <TheHeader ref="headerRefs"></TheHeader> -->
    <!-- <router-view :key="$router.fullPath" v-if="routerAlive"></router-view> -->

    <div id="echarts-container"></div>
    <!-- 占位 -->
  </div>
</template>

<script>
import { getDiseaseData } from '@/api';
// import TheHeader from '@/components/Header';
import SideBar from '@/components/SideBar/SideBar.vue';
import SideBarItem from '@/components/SideBar/SideBarItem.vue';

export default {
  name: 'TheHome',
  components: {
    // TheHeader
    SideBar,
    SideBarItem
  },
  data() {
    return {
      data: {},
      isShowMap: true,
      isClick: false,
      routerAlive: true
    };
  },

  mounted() {
    this.$echarts.line('echarts-container');

    // const key = { key: '449d6762d7a0ef0bce89f7d25b2dad15' };
    // getDiseaseData(key)
    //   .then((res) => {
    //     console.log(res.data);
    //     this.data = Object.assign(res.data, {});
    //     console.log('data', this.data);
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
  },

  methods: {}
};
</script>

<style>
#echarts-container {
  position: absolute;
  z-index: 333;
  width: 7.5rem;
  height: 8rem;
}
</style>

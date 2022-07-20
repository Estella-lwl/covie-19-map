<template>
  <div>
    <div id="echarts-china-container"></div>
    <!-- <div id="echarts-world-container"></div> -->
  </div>
  <!-- <div id="echarts-china-container"></div> -->
</template>

<script>
// import { getCityData } from '@/api/index';

export default {
  name: 'EchartsChinaMap',
  data() {
    return {};
  },

  created() {
    // getCityData({ key: '62e34ad34025d5d5127135efa58d4ca' }).then((res) => {
    //   console.log('res:', res);
    // });
  },

  mounted() {
    this.$echarts.chinaMap('echarts-china-container');
  },

  methods: {}
};
</script>

<style>
#echarts-china-container {
  position: absolute;
  z-index: 333;
  width: 100%;
  height: 10rem;
}
</style>

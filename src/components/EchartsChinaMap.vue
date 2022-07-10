<template>
  <div>
    <div id="echarts-china-container"></div>
    <!-- <div id="echarts-world-container"></div> -->
  </div>
  <!-- <div id="echarts-china-container"></div> -->
</template>

<script>
import { getDiseaseData } from '@/api';

export default {
  name: 'EchartsChinaMap',
  data() {
    return {};
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

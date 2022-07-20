<template>
  <div id="echarts-world-container"></div>
</template>

<script>
import { getDiseaseData } from '@/api/index';

export default {
  name: 'EchartsWorldMap',
  data() {
    return {
      //
    };
  },

  mounted() {
    this.$echarts.worldMap('echarts-world-container');
  }
};
</script>

<style>
#echarts-world-container {
  position: absolute;
  z-index: 333;
  width: 100%;
  height: 10rem;
}
</style>

<template>
  <div id="common-page">
    <!-- <div id="echarts-container"></div> -->
    <EchartsChinaMap></EchartsChinaMap>
  </div>
</template>

<script>
import EchartsChinaMap from '@/components/EchartsChinaMap.vue';

export default {
  name: 'TheHome',
  components: {
    EchartsChinaMap
  },
  data() {
    return {
      data: {},
      isShowMap: true,
      isClick: false
    };
  },

  created() {
    //
  },

  mounted() {
    // this.$echarts.chinaMap('echarts-container');
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
  width: 100%;
  height: 10rem;
}
</style>

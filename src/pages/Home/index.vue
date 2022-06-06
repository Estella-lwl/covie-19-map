<template>
  <div class="home-page">
    {{ data.newList }}

    <!-- <Header ref="headerRefs"></Header> -->
    <div id="container"></div>
  </div>
</template>

<script>
import { getNcov } from '@/api';
import Header from '@/components/Header';

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      data: {}
    };
  },

  mounted() {
    this.$echarts.line('container');
    const key = { key: '449d6762d7a0ef0bce89f7d25b2dad15' };
    getNcov(key)
      .then((res) => {
        console.log(res.data);
        this.data = Object.assign(res.data, {});
        console.log('data', this.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  },

  methods: {
    //
  }
};
</script>

<style>
.home-page {
  position: relative;
  width: 7.5rem;
  height: 18rem;
  background: url('../../assets/1.jpg') no-repeat center;
  background-size: cover;
}

#container {
  position: absolute;
  width: 7.5rem;
  height: 8rem;
  z-index: 9999;
}
</style>

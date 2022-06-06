<template>
  <div class="header">
    <div id="container"></div>
  </div>
</template>

<script>
// import { getNcov } from '../api/index';

export default {
  name: 'Header',
  components: {},
  data() {
    return {
      data: {}
    };
  },

  // mounted() {
  //   const key = { key: '449d6762d7a0ef0bce89f7d25b2dad15' };
  //   getNcov(key)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.data = Object.assign(res, {});
  //       console.log('data', this.data);
  //     })
  //     .catch((err) => {
  //       console.log('err', err);
  //     });
  // },
  mounted() {
    this.$echarts.line('container');
  },

  methods: {
    //
  }
};
</script>

<style>
.header {
  position: relative;
  /* padding-top: 33.5%; */
  /* background: url('./1.jpg') no-repeat; */
  background: url('../assets/1.jpg') no-repeat;
  background-size: 100%, 100%;
  width: 7.5rem;
  height: 2rem;
  text-align: center;
  font-size: 0.28rem;
}

#container {
  width: 7.5rem;
  height: 8rem;
}
</style>

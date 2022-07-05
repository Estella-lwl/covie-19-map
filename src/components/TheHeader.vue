<template>
  <div id="header">
    <h2></h2>
  </div>
</template>

<script>
// import { getDiseaseData } from '../api/index';

export default {
  name: 'TheHeader',
  components: {},
  data() {
    return {
      data: {}
    };
  },

  // mounted() {
  //   const key = { key: '449d6762d7a0ef0bce89f7d25b2dad15' };
  //   getDiseaseData(key)
  //     .then((res) => {
  //       console.log(res.data);
  //       this.data = Object.assign(res, {});
  //       console.log('data', this.data);
  //     })
  //     .catch((err) => {
  //       console.log('err', err);
  //     });
  // },

  methods: {
    //
  }
};
</script>

<style>
.header {
  background-color: #fff;
  height: 2rem;
  text-align: center;
  font-size: 0.9rem;
}
</style>

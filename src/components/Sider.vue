<template>
  <div class="sider"></div>
</template>

<script>
import { getNcov } from '@/api/index';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sider',
  components: {},
  data() {
    return {
      //
    };
  },

  mounted() {
    const key = {};
    getNcov(key).then((res) => {
      console.log('res', res);
    });
  },

  methods: {
    //
  }
};
</script>

<style>
.sider {
}
</style>

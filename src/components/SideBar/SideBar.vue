<template>
  <div id="sider">
    <slot></slot>
  </div>
</template>

<script>
import { getDiseaseData } from '@/api/index';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SideBar',
  components: {},
  data() {
    return {
      isShowMap: true,
      isClick: false
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#sider {
  position: fixed;
  right: 0.2rem;
  top: 45%;
  transform: translateY(-50%);
  z-index: 444;
  /* display: flex;
  flex-direction: column; */
}
</style>

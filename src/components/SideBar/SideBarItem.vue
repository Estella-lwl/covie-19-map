<template>
  <div class="common-sider-btn" @click="switchView">
    <!-- 为了可复用，写为插槽的形式(活跃状态 & 非活跃)： -->
    <div v-if="!isActive">
      <slot name="item-icon" class="common-sider-btn"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active" class="common-sider-btn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: {
    link: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      //
    };
  },

  // TODO:找到路由的讲解，着重是父子组件，看数据传输对不对

  computed: {
    // 侧边栏切换
    isActive() {
      // $route：哪个路由处于活跃就是哪一个的对象， 判断是否对应当前路径
      return this.$route.path.indexOf(this.link) !== -1;
    }
  },

  methods: {
    // 侧边栏切换
    switchView() {
      // 避免重复跳转导致警告：
      const path = this.$route.path;
      if (path !== this.link) {
        this.$router.replace(this.link);
      } else {
        console.log('请勿重复点击');
      }
      // 跳转的路由不能写死，而是通过props获取外部传进来的值，动态改变：
      console.log('link: ', this.link);
    }
  }
};
</script>

<style>
.common-sider-btn {
  width: 0.7rem;
  height: 0.7rem;
  outline: none;
  border: none;
  background-color: transparent;
  margin-bottom: 0.3rem;
  /* cursor: pointer; */
}
</style>

<template>
  <div id="countBox" ref="countupRef">
    <span class="countSpan"></span>
  </div>
</template>

<script>
import { CountUp } from "countup.js";

export default {
  name: "CountUp",
  props: {
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      default: 100,
    },
    duration: {
      type: Number,
      default: 0,
    },
    options: {
      type: Object,
    },
  },

  data() {
    return {
      // numAnim: null,
    };
  },

  mounted() {
    console.log("props: ", this.start, this.end);
    this.initCountup();
  },

  methods: {
    initCountup() {
      this.numAnim = null;
      this.numAnim = new CountUp("countBox", this.start, this.end);
      this.numAnim.start();
    },
  },
};
</script>

<style>
#countBox {
  /* position: fix;
  left: 50%;
  bottom: 0;
  z-index: 99999999 !important;
  width: 100px;
  height: 100px; */
  background-color: cornflowerblue;
}

.countSpan {
  display: inline-block;
  width: 200px;
  height: 200px;
}
</style>

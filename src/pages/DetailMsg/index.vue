<template>
  <div></div>
</template>

<script>
export default {
  name: 'DetailMsg',
  data() {
    return {};
  }
};
</script>

<style>
.title {
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
}
.msgBox {
  margin: 0.3rem auto;
  margin-bottom: 0.9rem;
  width: 7rem;
  /* height: 5rem; */
  background-color: rgba(0, 0, 0, 0.22);
  /* background-color: rgba(5, 26, 48, 0.79); */
  /* box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5); */
  box-shadow: 0 3px 15px rgba(0, 0, 0, 1);
  border-radius: 0.15rem;
}
.msgList,
.msgList-block {
  flex-wrap: wrap;
  padding: 0.2rem;
}
.msgList li,
.msgList-block li {
  display: flex;
  text-align: center;
  /* 主轴子元素排列方式 */
  justify-content: center;
  /* 允许换行： */
  flex-wrap: wrap;
  /* margin: 0.2rem; */
  padding: 0.2rem;
  line-height: 0.7rem;
}
.msgList-block li p {
  width: 3rem;
}

.sortName {
  font-size: 0.3rem;
  font-weight: bold;
}
.personNum {
  display: inline-block;
  /* 文字对准基线： */
  vertical-align: middle;
  color: #fff;
  font-size: 0.5rem;
  /* baseline: bottom; */
}
</style>

<template>
  <div class="msg-page">
    <div class="title">
      <h2>Detail Page</h2>
      <p>
        <span>数据更新时间：</span>
        <span>{{ dateFormat(detailData.dataUpdateTime) }}</span>
      </p>
    </div>

    <div class="msgBox">
      <ul class="msgList">
        <li>
          <p>
            <span class="sortName">全球疫情数据</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内人数</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内人数</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内人数</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName"> </span>
            <span class="personNum" :style="{ color: numColorAssign }"> </span>
          </p>
        </li>
      </ul>
    </div>

    <div class="msgBox" style="margin-top: 0.9rem">
      <ul class="msgList">
        <li>
          <p>
            <span class="sortName">全球疫情数据</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内人数</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内人数</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内人数</span>
            <span class="personNum" :style="{ color: numColorAssign }">{{ detailData }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName"> </span>
            <span class="personNum" :style="{ color: numColorAssign }"> </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDiseaseData } from '@/api/index';

export default {
  name: 'DetailMsg',
  data() {
    return {
      detailData: {
        dataUpdateTime: '', // 数据更新时间
        globalStatistics: {} // 全球疫情统计数据
      },
      numType: '',
      // 数字动态颜色
      numColorAssign: ''
    };
  },

  created() {
    const key = { key: '449d6762d7a0ef0bce89f7d25b2dad15' };
    getDiseaseData(key)
      .then((res) => {
        if (res.status === 200) {
          console.log('res:', res.data);
          this.detailData = Object.assign(res.data, {});
          this.detailData.dataUpdateTime = res.data.newslist[0].desc.modifyTime;
        }
      })
      .catch((err) => {
        console.log('err', err);
      });

    // this.dateFormat();

    // 根据数字决定字体颜色：
    console.log('', typeof this.detailData);

    if (this.detailData > 10000) {
      this.numColorAssign = '#FF0000';
    } else if (this.detailData > 1000) {
      this.numColorAssign = '#FFA500';
    } else if (this.detailData > 100) {
      this.numColorAssign = '#87CEFA';
    } else if (this.detailData > 10) {
      this.numColorAssign = '#C71585';
    } else if (this.detailData > 0) {
      this.numColorAssign = '#fff';
    }
  },

  methods: {
    // 日期格式化：
    dateFormat() {
      const date = new Date(this.detailData.dataUpdateTime);
      const YY = date.getFullYear() + '-';
      // 小于10前面补0：
      const MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      const DD = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '  ';
      const hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

      return YY + MM + DD + hh + mm;
    }
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
  width: 7rem;
  height: 5rem;
  /* background-color: rgba(0, 0, 0, 0.22); */
  background-color: rgba(5, 26, 48, 0.79);
  /* box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5); */
  box-shadow: 0 3px 15px rgba(0, 0, 0, 1);
  border-radius: 0.15rem;
}
.msgList {
  display: flex;
  /* 主轴子元素排列方式 */
  justify-content: center;
  /* 允许换行： */
  flex-wrap: wrap;
  padding: 0.2rem;
}
.msgList li {
  /* margin: 0.2rem; */
  line-height: 0.9rem;
  width: 3rem;
  /* height: 0.9rem; */
}
.sortName {
  font-size: 0.3rem;
}
.personNum {
  color: #123;
  font-size: 0.5rem;
  /* baseline: bottom; */
}
</style>

<template>
  <div class="msg-page">
    <div class="title">
      <h2>Detail Page</h2>
      <p>
        <span>数据更新时间：</span>
        <span>{{ dateFormat(newsData.dataUpdateTime) }}</span>
      </p>
    </div>

    <div class="msgBox">
      <ul class="msgList">
        <li>
          <p class="sortName">新增境外输入人数</p>
          <p class="personNum" :style="{ color: setNumColor(descData.suspectedIncr) }">→{{ descData.suspectedIncr }}</p>
        </li>
        <li>
          <p>
            <span class="sortName">累计境外输入人数</span>
            <span class="personNum" :style="{ color: setNumColor(descData.suspectedCount) }">{{ descData.suspectedCount }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">现存确诊人数</span>
            <span class="personNum" :style="{ color: setNumColor(descData.currentConfirmedCount) }">{{ descData.currentConfirmedCount }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">现存无症状人数</span>
            <span class="personNum" :style="{ color: setNumColor(descData.seriousCount) }">{{ descData.seriousCount }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName"> </span>
            <span class="personNum" :style="{ color: setNumColor() }"> </span>
          </p>
        </li>
      </ul>
    </div>

    <div class="msgBox" style="margin-top: 0.9rem">
      <ul class="msgList">
        <li>
          <p>
            <span class="sortName">累计确诊人数</span>
            <span class="personNum" :style="{ color: setNumColor(descData.confirmedCount) }">{{ descData.confirmedCount }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">累计治愈人数</span>
            <span class="personNum" :style="{ color: setNumColor(descData.curedCount) }">{{ descData.curedCount }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">累计死亡人数</span>
            <span class="personNum" :style="{ color: setNumColor(descData.deadCount) }">{{ descData.deadCount }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内高风险地区个数</span>
            <span class="personNum" :style="{ color: setNumColor(descData.highDangerCount) }">{{ descData.highDangerCount }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName"> </span>
            <span class="personNum" :style="{ color: setNumColor() }"> </span>
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
      //  国内疫情资讯列表
      newsData: {
        dataUpdateTime: '', // 数据更新时间
        globalStatistics: {} // 全球疫情统计数据
      },
      // 国内外疫情综合数据
      descData: {
        suspectedIncr: '',
        suspectedCount: '',
        currentConfirmedCount: '',
        seriousCount: '',
        confirmedCount: '',
        curedCount: '',
        deadCount: '',
        highDangerCount: ''
      },
      // 风险地区对象
      riskAreaData: {},
      numType: ''
    };
  },

  created() {
    const key = { key: '449d6762d7a0ef0bce89f7d25b2dad15' };
    getDiseaseData(key)
      .then((res) => {
        if (res.status === 200) {
          console.log('res.data:', res.data);
          // this.data = Object.assign(res.data.newslist[0], {});
          this.descData = Object.assign(res.data.newslist[0].desc, {});
          this.newsData = Object.assign(res.data.newslist[0].news, {});
          this.riskAreaData = Object.assign(res.data.newslist[0].riskarea, {});

          this.newsData.dataUpdateTime = res.data.newslist[0].desc.modifyTime;
        }
      })
      .catch((err) => {
        console.log('err', err);
      });

    // this.dateFormat();
  },

  methods: {
    // 日期格式化：
    dateFormat() {
      const date = new Date(this.newsData.dataUpdateTime);
      const YY = date.getFullYear() + '-';
      // 小于10前面补0：
      const MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      const DD = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '  ';
      const hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

      return YY + MM + DD + hh + mm;
    },

    // 数字动态颜色：
    setNumColor(val) {
      if (val > 3000) {
        return '#FF0000';
      } else if (val > 1000) {
        return '#FFA500';
      } else if (val > 500) {
        return '#87CEFA';
      } else if (val > 0) {
        return '#C71585';
      }
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
  line-height: 0.7rem;
  width: 3rem;
}
.sortName {
  font-size: 0.3rem;
}
.personNum {
  display: inline-block;
  color: #fff;
  font-size: 0.5rem;
  /* baseline: bottom; */
}
</style>

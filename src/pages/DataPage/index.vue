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
          <p>
            <span class="sortName">新增境外输入人数 &nbsp;&nbsp;</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.suspectedIncr) }"
              >{{ descData.suspectedIncr }}</span
            >
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">累计境外输入人数 &nbsp;&nbsp;</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.suspectedCount) }"
              >{{ descData.suspectedCount }}</span
            >
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">国内高风险地区个数 &nbsp;&nbsp;</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.highDangerCount) }"
              >{{ descData.highDangerCount }}</span
            >
          </p>
        </li>
      </ul>
    </div>

    <div class="msgBox">
      <ul class="msgList-block">
        <li>
          <p>
            <span class="sortName">现存确诊人数</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.currentConfirmedCount) }"
              >{{ descData.currentConfirmedCount }}</span
            >
          </p>
          <p>
            <span>较昨日</span>
            <br />
            <span
              :style="{ color: setNumColor(descData.currentConfirmedIncr) }"
              >{{ numSign(descData.currentConfirmedIncr) }}</span
            >
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">现存无症状人数</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.seriousCount) }"
              >{{ descData.seriousCount }}</span
            >
          </p>
          <p>
            <span>较昨日</span>
            <br />
            <span :style="{ color: setNumColor(descData.seriousIncr) }">{{
              numSign(descData.seriousIncr)
            }}</span>
          </p>
        </li>
      </ul>
    </div>

    <div class="msgBox">
      <ul class="msgList-block">
        <li>
          <p>
            <span class="sortName">累计确诊人数</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.confirmedCount) }"
              >{{ descData.confirmedCount }}</span
            >
          </p>
          <p>
            <span>较昨日</span>
            <br />
            <span :style="{ color: setNumColor(descData.confirmedIncr) }">{{
              numSign(descData.confirmedIncr)
            }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">累计治愈人数</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.curedCount) }"
              >{{ descData.curedCount }}</span
            >
          </p>
          <p>
            <span>较昨日</span>
            <br />
            <span :style="{ color: setNumColor(descData.curedIncr) }">{{
              numSign(descData.curedIncr)
            }}</span>
          </p>
        </li>
        <li>
          <p>
            <span class="sortName">累计死亡人数</span>
            <span
              class="personNum"
              :style="{ color: setNumColor(descData.deadCount) }"
              >{{ descData.deadCount }}</span
            >
          </p>
          <p>
            <span>较昨日</span>
            <br />
            <span :style="{ color: setNumColor(descData.deadIncr) }">
              {{ numSign(descData.deadIncr) }}
            </span>
          </p>
        </li>
      </ul>
    </div>

    <!-- 当前城市详细数据： -->
    <!-- <div>
      <TheHeader>
        <div id="allMap"></div>
      </TheHeader>
    </div> -->
  </div>
</template>

<script
  type="text/javascript"
  src="//api.map.baidu.com/api?v=2.0&ak=03WWMsFh7PWtCdmgS91qnsWH4gRz57Ww"
></script>
<script>
import { getDiseaseData } from "@/api/index.js";
import {
  getProvinceOverall,
  getProvinceCity,
  getProvinceAreaData,
} from "@/api/province";

export default {
  name: "DataPage",
  components: {},
  data() {
    return {
      //  国内疫情资讯列表
      newsData: {
        dataUpdateTime: "", // 数据更新时间
        globalStatistics: {}, // 全球疫情统计数据
      },
      // 国内外疫情综合数据
      descData: {
        suspectedIncr: "", // 新增境外输入人数
        suspectedCount: "", // 累计境外输入人数
        currentConfirmedCount: "", // 现存确诊人数
        seriousCount: "", // 现存无症状人数
        confirmedCount: "", // 累计确诊人数
        curedCount: "", // 累计治愈人数
        deadCount: "", // 累计死亡人数
        highDangerCount: "", // 国内高风险地区个数
      },
      // 风险地区对象
      riskAreaData: {},
      numType: "",
    };
  },

  created() {
    // getProvinceOverall()
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    // getProvinceCity()
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    getProvinceAreaData()
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });

    const key = { key: "449d6762d7a0ef0bce89f7d25b2dad15" };
    getDiseaseData(key)
      .then((res) => {
        if (res.status === 200) {
          console.log("res.data:", res.data);
          // this.data = Object.assign(res.data.newslist[0], {});
          this.descData = Object.assign(res.data.newslist[0].desc, {});
          this.newsData = Object.assign(res.data.newslist[0].news, {});
          this.riskAreaData = Object.assign(res.data.newslist[0].riskarea, {});

          this.newsData.dataUpdateTime = res.data.newslist[0].desc.modifyTime;
        }
      })
      .catch((err) => {
        console.log("err", err);
      });

    // this.dateFormat();

    // // TODO: 解决样式渲染不及时的问题：
    // this.$nextTick(() => {
    //   this.numSign();
    // });
  },

  // mounted() {

  //   this.getLocation();
  //   getCurrentCity();
  //   // 百度地图API功能
  //   // GPS坐标
  //   var x = 116.32715863448607;
  //   var y = 39.990912172420714;
  //   var ggPoint = new BMap.Point(this.latitude, this.accuracy);
  //   console.log('---', ggPoint);
  //   //地图初始化
  //   var bm = new BMap.Map('allMap');
  //   bm.centerAndZoom(ggPoint, 15);
  //   bm.addControl(new BMap.NavigationControl());
  //   //添加gps marker和label
  //   var markergg = new BMap.Marker(ggPoint);
  //   bm.addOverlay(markergg); //添加GPS marker
  //   var labelgg = new BMap.Label('未转换的GPS坐标（错误）', { offset: new BMap.Size(20, -10) });
  //   markergg.setLabel(labelgg); //添加GPS label
  //   //坐标转换完之后的回调函数
  //   translateCallback = function (data) {
  //     if (data.status === 0) {
  //       var marker = new BMap.Marker(data.points[0]);
  //       bm.addOverlay(marker);
  //       var label = new BMap.Label('转换后的百度坐标（正确）', { offset: new BMap.Size(20, -10) });
  //       marker.setLabel(label); //添加百度label
  //       bm.setCenter(data.points[0]);
  //     }
  //   };
  //   setTimeout(function () {
  //     var convertor = new BMap.Convertor();
  //     var pointArr = [];
  //     pointArr.push(ggPoint);
  //     convertor.translate(pointArr, 1, 5, translateCallback);
  //   }, 1000);
  // },

  // methods: {
  //   // 获取用户当前地理位置：
  //   getLocation() {
  //     var options = {
  //       enableHighAccuracy: true,
  //       timeout: 5000,
  //       maximumAge: 0
  //     };

  //     function success(pos) {
  //       var crd = pos.coords;

  //       console.log('纬度 : ' + crd.latitude);
  //       console.log('经度 : ' + crd.longitude);
  //       console.log('更多More or less ' + crd.accuracy + ' meters.');
  //       this.latitude = crd.latitude;
  //       this.accuracy = crd.accuracy;
  //     }

  //     function error(err) {
  //       console.warn('ERROR(' + err.code + '): ' + err.message);
  //     }

  //     navigator.geolocation.getCurrentPosition(success, error, options);

  //     const query = { ak: '03WWMsFh7PWtCdmgS91qnsWH4gRz57Ww' };
  //     getCurrentCity(query).then((res) => {
  //       console.log('res', res);
  //     });
  //   },

  //   showLocation() {}
  // }
  methods: {
    // 日期格式化：
    dateFormat() {
      const date = new Date(this.newsData.dataUpdateTime);
      const YY = date.getFullYear() + "-";
      // 小于10前面补0：
      const MM =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      const DD =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "  ";
      const hh =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      const mm =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

      return YY + MM + DD + hh + mm;
    },

    // 数字动态颜色：
    setNumColor(val) {
      if (val > 3000) {
        // return '#FF0000';
        return "#af273e";
      } else if (val > 1000) {
        return "#fc5243";
      } else if (val > 500) {
        return "#FFA500";
      } else if (val > 100) {
        return "#87CEFA";
      } else if (val > 0) {
        return "#DDA0DD";
      }
    },

    // 判断数字对应使用的符号：
    numSign(val) {
      if (val >= 0) {
        return "↑ " + val;
      } else {
        return "↓ " + val;
      }
    },
  },
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

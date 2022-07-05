<template>
  <div class="msg-page">
    <!-- 当前城市详细数据： -->
    <h2>The Vision</h2>

    <div>
      <TheHeader>
        <div id="allMap"></div>
      </TheHeader>
    </div>
  </div>
</template>

<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=03WWMsFh7PWtCdmgS91qnsWH4gRz57Ww"></script>
<script>
import TheHeader from '@/components/TheHeader.vue';
import { getCurrentCity } from '@/api/location';

export default {
  name: 'TheVision',
  components: {
    TheHeader
  },

  data() {
    return {
      latitude: '', // 纬度
      accuracy: '' // 经度
    };
  },

  mounted() {
    // this.getLocation();
    // getCurrentCity()
    // 百度地图API功能
    //GPS坐标
    // var x = 116.32715863448607;
    // var y = 39.990912172420714;
    // var ggPoint = new BMap.Point(this.latitude, this.accuracy);
    // console.log('---', ggPoint);
    // //地图初始化
    // var bm = new BMap.Map('allMap');
    // bm.centerAndZoom(ggPoint, 15);
    // bm.addControl(new BMap.NavigationControl());
    // //添加gps marker和label
    // var markergg = new BMap.Marker(ggPoint);
    // bm.addOverlay(markergg); //添加GPS marker
    // var labelgg = new BMap.Label('未转换的GPS坐标（错误）', { offset: new BMap.Size(20, -10) });
    // markergg.setLabel(labelgg); //添加GPS label
    // //坐标转换完之后的回调函数
    // translateCallback = function (data) {
    //   if (data.status === 0) {
    //     var marker = new BMap.Marker(data.points[0]);
    //     bm.addOverlay(marker);
    //     var label = new BMap.Label('转换后的百度坐标（正确）', { offset: new BMap.Size(20, -10) });
    //     marker.setLabel(label); //添加百度label
    //     bm.setCenter(data.points[0]);
    //   }
    // };
    // setTimeout(function () {
    //   var convertor = new BMap.Convertor();
    //   var pointArr = [];
    //   pointArr.push(ggPoint);
    //   convertor.translate(pointArr, 1, 5, translateCallback);
    // }, 1000);
  },

  methods: {
    // 获取用户当前地理位置：
    // getLocation() {
    //   var options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0
    //   };

    //   function success(pos) {
    //     var crd = pos.coords;

    //     console.log('纬度 : ' + crd.latitude);
    //     console.log('经度 : ' + crd.longitude);
    //     console.log('更多More or less ' + crd.accuracy + ' meters.');
    //     this.latitude = crd.latitude;
    //     this.accuracy = crd.accuracy;
    //   }

    //   function error(err) {
    //     console.warn('ERROR(' + err.code + '): ' + err.message);
    //   }

    //   navigator.geolocation.getCurrentPosition(success, error, options);

    //   const query = { ak: '03WWMsFh7PWtCdmgS91qnsWH4gRz57Ww' };
    //   getCurrentCity(query).then((res) => {
    //     console.log('res', res);
    //   });
    // },

    showLocation() {}
  }
};
</script>

<style>
body,
html,
#allMap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: '微软雅黑';
}
</style>

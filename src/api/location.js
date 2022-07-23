import axios from 'axios';

const base = {
  baseUrl: 'http://api.map.baidu.com',
  // timeout: ''
  ncov: '/geoconv/v1'
};

/* 
百度地图-定位数据
 */
// const api = {
//   getCurrentCity(params) {
//     return axios.get(base.baseUrl + base.ncov, {
//       params
//     });
//   }
// };

// export default api;

export function getCurrentCity(params) {
  return axios.get(base.baseUrl + base.ncov, {
    params
  });
}

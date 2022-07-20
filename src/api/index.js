import { request } from '@/utils/request';

export function getDiseaseData(parameter) {
  return request({
    url: '/index',
    method: 'get',
    params: parameter
  });
}

// export function getCityData(parameter) {
//   return request({
//     url: '/txapi/ncovcity/index'
//     // method: 'get',
//     // params: parameter
//   });
// }

// 城市数据
// TODO: 该接口已下线，待改
// export function getCityData(params) {
//   return axios.get(base.baseUrl + base.covidCityData, {
//     params
//   });
// }

import axios from 'axios';

const base = {
  baseUrl: 'http://api.tianapi.com',
  // timeout: ''
  ncov: '/ncov/index'
};

/* 
疫情数据
 */
export const api = {
  getDiseaseData(params) {
    return axios.get(base.baseUrl + base.ncov, {
      params
    });
  }
};

// export default api;

export function getDiseaseData(params) {
  return axios.get(base.baseUrl + base.ncov, {
    params
  });
}

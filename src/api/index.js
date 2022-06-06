import axios from 'axios';

const base = {
  baseUrl: 'http://api.tianapi.com',
  // timeout: ''
  ncov: '/ncov/index'
};

/* 
疫情数据
 */
const api = {
  getNcov(params) {
    return axios.get(base.baseUrl + base.ncov, {
      params
    });
  }
};

export default api;

export function getNcov(params) {
  return axios.get(base.baseUrl + base.ncov, {
    params
  });
}

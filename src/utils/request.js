import axios from 'axios';

// export function requestCity(config) {
//   const instance = axios.create({
//     baseURL: 'api/nCoV/api',
//     timeout: '5000'
//   });

//   return instance(config);
// }

export function requestCity(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: '5000'
  });

  return instance(config);
}
export function request(config) {
  const instance = axios.create({
    baseURL: '/data/ncov',
    timeout: '5000'
  });

  return instance(config);
}

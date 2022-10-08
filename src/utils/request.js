import axios from "axios";

// export function requestCity(config) {
//   const instance = axios.create({
//     baseURL: 'api/nCoV/api',
//     timeout: '5000'
//   });

//   return instance(config);
// }

export function requestCity(config) {
  const service = axios.create({
    baseURL: "/api",
    // timeout: '5000'
  });

  return service(config);
}
export function request(config) {
  const service = axios.create({
    baseURL: "/data/ncov",
    // timeout: '5000'
  });

  // 请求拦截：
  service.interceptors.request.use((config) => {
    // 这里可以用作判断用户身份信息
    return config;
  });
  // 响应拦截:
  service.interceptors.response.use(
    // 成功回调：
    (res) => {
      return res.data;
    },

    // 失败回调：
    (err) => {
      console.log("error失败的回调", err);
      // 统一处理错误信息：
      alert(err);
      // 失败时需要返回Promise实例：
      return Promise.reject(err);
    }
  );

  return service(config);
}

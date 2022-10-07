import { router } from '@/router';
import { requestCity } from '@/utils/request';

/* 
省市疫情数据
 */

export function getProvinceOverall(parameter) {
  return requestCity({
    url: '/nCoV/api/overall',
    method: 'get',
    params: parameter
  });
}

export function getProvinceCity(parameter) {
  return requestCity({
    url: '/nCoV/api/provinceName',
    method: 'get',
    params: parameter
  });
}

export function getProvinceAreaData(parameter) {
  return requestCity({
    url: '/nCoV/api/area',
    method: 'get',
    params: parameter
  });
}

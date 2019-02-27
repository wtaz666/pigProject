import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function areaData(){
  return request('http://47.75.221.237:3000/one/worklog')
}

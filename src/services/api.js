import request from '../utils/request';

export function worklog(){
  return request('http://47.75.221.237:3000/one/worklog')
}

export function zhexianData(){
  return request('http://47.75.221.237:3000/one/zhexianData')
}

export function areaData(){
  return request('http://47.75.221.237:3000/one/AreaData')
}
export function zhuxingData(){
  return request('http://47.75.221.237:3000/one/zhuxingdata')
}

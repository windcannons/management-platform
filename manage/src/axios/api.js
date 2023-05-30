// 对请求接口进行封装

// 引入封装好的axios实例
import requests from './axios.js';

// 通知管理 start
let getType = (params={})=>{
  return requests.get('/type',params)
}
// 通知管理 end


export {getType}

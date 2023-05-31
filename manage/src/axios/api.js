// 对请求接口进行封装

// 引入封装好的axios实例
import requests from './axios.js';

// 通知管理 start
let notice = (params={})=>{
  return requests.get('/notice/page',params)
}

// 通知管理 end
// 登录start
let login = (params={})=>{
  return requests.post('/login',params)
}
// 登录end

export {notice,login}

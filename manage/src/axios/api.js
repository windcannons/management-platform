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

// 成绩管理start
let Transcript = (page=1,size=10)=>{
  return requests.get(`/course/studentTranscript?currentPage=${page}&size=${size}`)
}

// 成绩管理end
// 获取学生列表start
let page = (params={})=>{
  return requests.get('/page',params)
}
// 获取学生列表end
export {notice,login,Transcript,page}

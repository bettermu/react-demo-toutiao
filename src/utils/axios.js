/*
 * @Author: bettermu 
 * @Date: 2018-05-08 09:34:18 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-08 11:05:25
 * 
 * axios网络请求封装
 */

import axios from 'axios'
import qs from 'qs'
import { store } from '../store'
import { showAlert } from 'actions/common'

//下面配置是允许携带cookie
axios.defaults.withCredentials = true


//拦截器配置,可动态添加相关请求配置

//发送时
axios.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err)
})

//响应时
axios.interceptors.response.use(response=>response,err=>Promise.resolve(err.response))

//检查状态码 
function checkStatus(res){
  if(res.status===200 || res.status===304){
    return res.data
  }
  //如果未成功
  return {
    code:0,
    msg:res.data.msg || res.statusText,
    data:res.statusText
  }
  return res
}


//检查CODE值
function checkCode(res){
  if(res.code===0){
    store.dispatch(showAlert({
      content:res.msg
    }))
    throw new Error(res.msg)
  }
  return res
}

const baseURL='https://easy-mock.com/mock/5a6fe597a52f145df7e8a38a/apis/'

// 备用路径  
// const baseURL = 'https://easy-mock.com/mock/5a83160c948cfd365a524088/apis/'

//axios常用请求封装
export default {

  //  GET请求
  get(url,params){
    if(!url) return
    return axios({
      method:'get',
      url:baseURL+url,
      params,
      timeout:30000
    }).then(checkStatus).then(checkCode)
  },
  //POST请求
  post(url,data){
    if(!url) return
    return axios({
      method:'post',
      url:baseURL+url,
      data:qs.stringify(data),
      timeout:30000
    }).then(checkStatus).then(checkCode)
  }
}


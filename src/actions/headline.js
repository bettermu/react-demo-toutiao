/*
 * @Author: bettermu 
 * @Date: 2018-05-11 15:48:52 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-18 16:12:21
 * 微头条actions
 */
import { createAction } from 'redux-actions'
import axios from 'utils/axios'


//添加headlineList
export const addHeadlineList = (params) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.post('headline/add', params)
      .then(res => {
        const info = res.data
        dispatch(createAction('ADD_HEADLINE_LIST')(info))
        resolve(info)
      }).catch(err => {
        reject(err)
      })
  })
}

//获取headlineList
export const getHeadlineList = (params) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.get('headline/list', params)
      .then(res => {
        const list = res.data.list
        //console.log(res.data)
        dispatch(createAction('GET_HEADLINE_LIST')(list))
        resolve(list)
      }).catch(err => {
        reject(err)
      })
  })
}

//刷新当前headlineList的内容
export const refreshHeadlineList = (params) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.get('headline/list', params)
      .then(res => {
        const list = res.data.list
        dispatch(createAction('REFRESH_HEADLINE_LIST')(list))
        resolve(list)
      }).catch(err => {
        reject(err)
      })
  })
}

//重新渲染
export const renderHeadlineList=createAction('RENDER_HEADLINE_LIST')
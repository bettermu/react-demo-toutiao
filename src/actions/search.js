/*
 * @Author: bettermu 
 * @Date: 2018-05-17 09:40:16 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-17 09:52:39
 * search页面action
 */

import { createAction } from 'redux-actions'
import axios from 'utils/axios'

//添加searchList
export const getSearchList = (params) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.get('search', params)
      .then(res => {
        const list = res.data.list
        dispatch(createAction('GET_SEARCH_LIST')(list))
        resolve(list)
      }).catch(err => {
        reject(err)
      })
  })
}

//刷新当前searchList的内容
export const refreshSearchList = (params) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.get('search', params)
      .then(res => {
        const list = res.data.list
        dispatch(createAction('REFRESH_SEARCH_LIST')(list))
        resolve(list)
      }).catch(err => {
        reject(err)
      })
  })
}

//重新渲染
export const renderSearchList = createAction('RENDER_SEARCH_LIST')
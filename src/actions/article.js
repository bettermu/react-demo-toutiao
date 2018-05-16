/*
 * @Author: bettermu 
 * @Date: 2018-05-16 09:56:30 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 10:02:13
 * 文章页 actions
 */

import { createAction } from 'redux-actions'
import axios from 'utils/axios'

//添加文章数据
export const getArticle = params => dispatch => {
  return new Promise((resolve,reject)=>{
    axios.get('article/info',params)
      .then(res=>{
        dispatch(createAction('GET_ARTICLE')(res.data))
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
  })
}

//重新渲染文章数据
export const renderArticle=createAction('RENDER_ARTICLE')

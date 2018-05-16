/*
 * @Author: bettermu 
 * @Date: 2018-05-16 10:04:16 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 10:08:35
 * 文章详情页reducers
 */

 import {handleActions} from 'redux-actions'

 const state={
   articleInfo:{}
 }

 export const article = handleActions({
   GET_ARTICLE:(state,action)=>{
     state.articleInfo=action.payload
     return {...state}
   },
   RENDER_ARTICLE:(state)=>({...state})
 },state)

/*
 * @Author: bettermu 
 * @Date: 2018-05-17 15:21:21 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-18 16:01:35
 * home页reducer
 */

import { handleActions } from 'redux-actions'
import { Local } from 'utils/storage'
import { news } from './data'

const state = {
  newsList: JSON.parse(Local.get('react_newList')) || news.slice(0, 12),
  newsIndex: 0
}

export const home = handleActions({
  //添加news
  ADD_NEWS: (state, action) => {
    const news = action.payload
    if (state.newsList.every(tag => tag.title !== news.title)) {
      state.newsList.push(news)
      let newsList = state.newsList.map(({ list, ...other }) => ({ ...other }))
      Local.set('react_newList', JSON.stringify(newsList))
    }

    return { ...state }
  },
  //删除news
  DEL_NEWS: (state, action) => {
    const news = action.payload
    let index = state.newsList.findIndex(tag => tag.title === news.title)
    state.newsList.splice(index, 1)
    let newsList = state.newsList.map(({ list, ...other }) => ({ ...other })) //过滤掉list数据
    Local.set('react_newList', JSON.stringify(newsList))
    return { ...state }
  },

  //给news添加List
  GET_LIST_OF_NEWS: (state, action) => {
    const { list, newsIndex } = action.payload
    let news = state.newsList[newsIndex].list
    state.newsList[newsIndex].hasMore = list.length < 5 ? false : true
    state.newsList[newsIndex].list = news ? news.concat(list) : list
    return { ...state }
  },

  //刷新当前news的内容
  REFRESH_LIST_OF_NEWS: (state, actions) => {
    const { list, newsIndex } = action.payload
    state.newsList[newsIndex].list = list
    state.newsList[newsIndex].hasMore = true
    return { ...state }
  },

  //设置当前news下标
  SET_NEWS_INDEX: (state, action) => {
    state.newsIndex = action.payload
    return { ...state }
  }
}, state)
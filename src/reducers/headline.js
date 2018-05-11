/*
 * @Author: bettermu 
 * @Date: 2018-05-11 16:24:21 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-11 16:34:51
 * 微头条reducer
 */

import { handleActions } from 'redux-actions'

const state = {
  headlineList: [],
  hasMore: true
}

export const headline = handleActions({
  GET_HEADLINE_LIST: (state, action) => {
    let list = action.payload
    if (list.length < 5) {
      state.hasMore = false
    }
    state.headlineList = state.headlineList.concat(list)
    return { ...state }
  },
  ADD_HEADLINE_LIST: (state, action) => {
    state.headlineList.unshift(action.payload)
    return { ...state }
  },
  REFRESH_HEADLINE_LIST: (state, action) => {
    state.headlineList = action.payload
    state.hasMore = true
    return { ...state }
  },
  RENDER_HEADLINE_LIST: state => ({ ...state })
}, state)
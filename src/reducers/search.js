/*
 * @Author: bettermu 
 * @Date: 2018-05-17 09:53:38 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-17 10:04:09
 * search页面reducer
 */

import { handleActions } from 'redux-actions'

const state = {
  searchList: [],
  hasMore: true
}

export const search = handleActions({
  GET_SEARCH_LIST: (state, action) => {
    let list = action.payload
    if (list.length < 5) {
      state.hasMore = false
    }
    state.searchList = state.searchList.concat(list)
    return { ...state }
  },
  REFRESH_SEARCH_LIST: (state, action) => {
    state.searchList = action.payload
    state.hasMore = true
    return { ...state }
  },
  RENDER_SEARCH_LIST: state => ({ ...state })
}, state)

/*
 * @Author: bettermu 
 * @Date: 2018-05-16 14:09:31 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 14:17:32
 * 收藏历史record reducers
 */

import { handleActions } from 'redux-actions'

const state = {
  types: [
    { title: '我的收藏', list: [] },
    { title: '阅读历史', list: [] },
    { title: '推送历史', list: [] }
  ],
  index: 0,
  recordList: []
}

export const record = handleActions({
  GET_RECORD_LIST: (state, action) => {
    state.types[state.index].list = state.types[state.index].list.concat(action.payload)
    return { ...state }
  },
  REFRESH_RECORD_LIST: (state, action) => {
    state.types[state.index].list = action.payload
    return { ...state }
  },
  RENDER_RECORD_LIST: state => ({ ...state }),
  SET_TABS_INDEX: (state, action) => {
    state.index = action.payload
    return { ...state }
  }
}, state)

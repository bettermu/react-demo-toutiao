/*
 * @Author: bettermu 
 * @Date: 2018-05-08 10:11:13 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 10:03:52
 * 通用组件reducer
 */
//handleActions相当于switch
import { handleActions } from 'redux-actions'


//公用弹窗以及loading state
const state = {
  alert: {
    show: false,
    content: ''
  },
  loading: {
    show: false
  }
}

export const config = handleActions({
  SHOW_ALERT: (state, action) => {
    state.alert.show = true
    state.alert = Object.assign({}, state.alert, action.payload)
    return { ...state }
  },

  HIDE_ALERT: (state, action) => {
    state.alert = {
      show: false,
      content: ''
    }
    return { ...state }
  },

  SHOW_LOADING: state => {
    state.loading.show = true
    return { ...state }
  },

  HIDE_LOADING: state => {
    state.loading.show = false
    return { ...state }
  }
}, state)
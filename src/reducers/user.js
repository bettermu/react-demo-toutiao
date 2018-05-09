/*
 * @Author: bettermu 
 * @Date: 2018-05-09 10:23:33 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-09 11:04:26
 * user reducer 
 */

import { handleActions } from 'redux-actions'
import { Cookie } from 'utils/storage'

//底部栏列表以及用户相关state数据
const state = {
  isLogin: false,
  user: {
    name: Cookie.get('username') || '',
    avatar: Cookie.get('avatar') || ''
  },
  footerBarList: [
    { title: '首页', icon: 'home', path: '/' },
    { title: '西瓜视频', icon: 'video', path: '/video' },
    { title: '微头条', icon: 'comment', path: '/headline' },
    { title: `${Cookie.get('username') ? '我的' : '未登录'}`, icon: `${Cookie.get('username') ? 'account' : 'account1'}`, path: '/account' }
  ]
}

export const user = handleActions({
  LOGIN: (state, action) => {
    state.user = {
      name: action.payload.username,
      avatar: require('assets/images/avatar.png')
    }
    //存储到Cookie
    Cookie.set({
      username: action.payload.username,
      avatar: require('assets/images/avatar.png')
    })
    return { ...state }
  },

  SIGN_OUT: (state, action) => {
    state.user = {
      username: '',
      avatar: ''
    }
    //从Cookie域里删除用户数据
    Cookie.remove(['username', 'avatar'])
    return { ...state }
  },
  SHOW_LOGIN: state => {
    state.isLogin = true
    return { ...state }
  },

  //动态显示我的底部栏数据
  SET_FOOTER_LIST: (state, action) => {
    state.footerBarList[3] = action.payload
    return { ...state }
  }


}, state)

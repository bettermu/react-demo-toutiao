/*
 * @Author: bettermu 
 * @Date: 2018-05-08 10:10:36 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 16:02:38
 * 
 * 通用组件action
 */


import {createAction} from 'redux-actions'
import axios from 'utils/axios'

//显示Alert
export const showAlert = createAction('SHOW_ALERT')

//隐藏Alert
export const hideAlert=createAction('HIDE_ALERT')


//显示loading
export const showLoading=createAction('SHOW_LOADING')
//隐藏loading
export const hideLoading=createAction('HIDE_LOADING')
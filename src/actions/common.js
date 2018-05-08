/*
 * @Author: bettermu 
 * @Date: 2018-05-08 10:10:36 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-08 10:11:06
 * 
 * 通用组件action
 */


import {createAction} from 'redux-actions'
import axios from 'utils/axios'

//显示Alert
export const showAlert = createAction('SHOW_ALERT')
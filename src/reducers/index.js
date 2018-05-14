/*
 * @Author: bettermu 
 * @Date: 2018-05-08 21:44:08 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-14 16:17:00
 * reducer
 */

 import {combineReducers} from 'redux'
 import * as common from './common'
 import * as user from './user'
 import * as headline from './headline'

export default combineReducers({
  ...common,
  ...user,
  ...headline
})
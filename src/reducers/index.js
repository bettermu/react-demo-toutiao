/*
 * @Author: bettermu 
 * @Date: 2018-05-08 21:44:08 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 14:18:22
 * reducer
 */

 import {combineReducers} from 'redux'
 import * as common from './common'
 import * as user from './user'
 import * as headline from './headline'
 import * as article from './article'
 import * as record from './record'

export default combineReducers({
  ...common,
  ...user,
  ...headline,
  ...article,
  ...record
})
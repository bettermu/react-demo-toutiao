/*
 * @Author: bettermu 
 * @Date: 2018-05-08 21:44:08 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-08 21:46:00
 * reducer
 */

 import {combineReducers} from 'redux'
 import * as common from './common'

export default combineReducers({
  ...common
})
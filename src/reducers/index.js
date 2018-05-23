/*
 * @Author: bettermu 
 * @Date: 2018-05-08 21:44:08 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-23 10:41:11
 * reducer
 */

import { combineReducers } from 'redux'
import * as common from './common'
import * as user from './user'
import * as headline from './headline'
import * as article from './article'
import * as record from './record'
import * as search from './search'
import * as home from './home'
import * as video from './video'

export default combineReducers({
  ...common,
  ...user,
  ...headline,
  ...article,
  ...record,
  ...search,
  ...home,
  ...video
})
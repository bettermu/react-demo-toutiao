/*
 * @Author: bettermu 
 * @Date: 2018-05-09 09:56:19 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 14:08:44
 * action整体导出
 */


import * as common from './common'
import * as user from './user'
import * as headline from './headline'
import * as article from './article'
import * as record from './record'


export default Object.assign(
  {},
  common,
  user,
  headline,
  article,
  record
)
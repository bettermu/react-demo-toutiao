/*
 * @Author: bettermu 
 * @Date: 2018-05-09 09:56:19 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-23 10:22:13
 * action整体导出
 */


import * as common from './common'
import * as user from './user'
import * as headline from './headline'
import * as article from './article'
import * as record from './record'
import * as search from './search'
import * as home from './home'
import * as video from './video'


export default Object.assign(
  {},
  common,
  user,
  headline,
  article,
  record,
  search,
  home,
  video
)
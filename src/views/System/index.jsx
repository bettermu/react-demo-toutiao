/*
 * @Author: bettermu 
 * @Date: 2018-05-10 15:21:50 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-10 16:37:26
 * 系统设置页面
 */

import React from 'react'
import TitleBar from 'components/TitleBar'
import SwitchCheck from 'components/Switch'

export default class extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title="系统设置" />
        <SwitchCheck />
      </div>
    )
  }
}


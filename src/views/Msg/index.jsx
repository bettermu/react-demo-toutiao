/*
 * @Author: bettermu 
 * @Date: 2018-05-11 14:26:51 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-11 14:31:24
 * 消息通知页面
 */

import React from 'react'
import TitleBar from 'components/TitleBar'
import NoneData from 'components/NoneData/all-none'

export default class extends React.Component {
  render() {
    return (
      <div className="msg-wrapper">
        <TitleBar title="消息通知" />
        <NoneData />
      </div>
    )
  }
}
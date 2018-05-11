/*
 * @Author: bettermu 
 * @Date: 2018-05-11 14:33:35 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-11 14:47:18
 * 用户反馈
 */


import React from 'react'
import TitleBar from 'components/TitleBar'
import NoneData from 'components/NoneData/all-none'

export default class extends React.Component {
  render() {
    return (
      <div className="feedback-wrapper">
        <TitleBar title="用户反馈" />
        <NoneData />
      </div>
    )
  }
}
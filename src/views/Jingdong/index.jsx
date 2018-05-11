/*
 * @Author: bettermu 
 * @Date: 2018-05-11 14:47:52 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-11 14:56:11
 * 京东特供页面 
 */

import React from 'react'
import TitleBar from 'components/TitleBar'
import NoneData from 'components/NoneData/all-none'

export default class extends React.Component {
  render() {
    return (
      <div className="jd-wrapper">
        <TitleBar />
        <NoneData />
      </div>
    )
  }
}
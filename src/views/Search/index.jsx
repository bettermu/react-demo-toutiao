/*
 * @Author: bettermu 
 * @Date: 2018-05-11 15:01:03 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-17 13:55:28
 * 搜索页面
 */
import React from 'react'
import HeadComponent from './head'
import BodyComponent from './body'
import './index.less'

export default class extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <HeadComponent></HeadComponent>
        <BodyComponent></BodyComponent>
      </div>
    )
  }
}


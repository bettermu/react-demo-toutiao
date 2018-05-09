/*
 * @Author: bettermu 
 * @Date: 2018-05-09 14:42:12 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-09 14:50:27
 * 个人中心页面组件 
 */
import React from 'react'
import FooterBar from 'components/FooterBar'
import Head from './head/index'
import Body from './body/index'
import './index.less'

export default ()=>(
  <article>
    <div className="account-container">
      <Head></Head>
      <Body></Body>
    </div>
    <FooterBar></FooterBar>
  </article>
)
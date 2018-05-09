/*
 * @Author: bettermu 
 * @Date: 2018-05-09 14:43:07 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-09 16:51:49
 * 个人中心组件 body
 */

import React from 'react'
import Icon from 'components/Icon-svg'
import { withRouter } from 'react-router-dom'
import connect from 'connect'

@connect
@withRouter
export default class extends React.Component {

  //页面跳转
  skip = path => {
    const { state: { user: { user: { name } } }, showAlert, history } = this.props

    //判断是否登录
    if (!name) {
      //非登录逻辑 跳转到登录页面
    } else {
      //跳转页面
    }

  }
  render() {
    //console.log(this.props)
    return (
      <section className="body-wrapper border-half">
        <div className="li border-half" onClick={this.skip.bind(this, '/msg')}>
          <div>消息通知</div>
          <Icon iconName="arrow"></Icon>
        </div>
        <div className="li border-half-top" onClick={this.skip.bind(this, 'mall')}>
          <div>头条商城</div>
          <div className="df-c">
            <span>邀请好友得200元现金</span>
            <Icon iconName="arrow"></Icon>
          </div>
        </div>
        <div className="li border-half" onClick={this.skip.bind(this, '/jd')}>
          <div>京东特供</div>
          <div className="df-c">
            <span>新人领188红包</span>
            <Icon iconName="arrow"></Icon>
          </div>
        </div>

        <div className="li border-half-top" onClick={this.skip.bind(this, '/feedback')}>
          <div>用户反馈</div>
          <Icon iconName="arrow"></Icon>
        </div>
        <div className="li border-half-top" onClick={this.skip.bind(this, '/system')}>
          <div>系统设置</div>
          <Icon iconName="arrow"></Icon>
        </div>

      </section>
    )
  }
}

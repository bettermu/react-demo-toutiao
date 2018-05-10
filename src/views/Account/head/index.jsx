/*
 * @Author: bettermu 
 * @Date: 2018-05-09 14:44:12 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-10 09:24:55
 * 个人中心组件 head
 */
import React from 'react'
import { withRouter } from 'react-router-dom'
import Icon from 'components/Icon-svg'
import connect from 'connect'

@connect
@withRouter
export default class extends React.Component {
  state = {
    infoList: [
      { num: 0, title: '动态' },
      { num: 0, title: '关注' },
      { num: 0, title: '粉丝' }
    ],
    resList: [
      { icon: 'shoucang', title: '收藏' },
      { icon: '3lishi', title: '历史' },
      { icon: 'school', title: '推送' }
    ]
  }
  //跳转登录页
  login = () => {
    this.props.history.slideStatus='top'
    this.props.history.push('/login')
  }
  //跳转到收藏历史的tab页面
  skipRecord = (index) => {

  }

  render() {
    const { infoList, resList } = this.state
    //console.log(resList)
    const { user: { user } } = this.props.state


    return (
      <section className="head-wrapper">
        <div className="hd-t">
          <div className="info">
            <span className="avatar bg-cover-all" style={{ backgroundImage: `${user.name ? 'url(' + user.avatar + ')' : 'url(' + require('assets/images/account-circle.svg') + ')'}` }}></span>
            {
              user.name ? <span className="name">{user.name}</span> :
                <span className="login" onClick={this.login.bind(this)}>点击登录</span>
            }
          </div>
        </div>
        <div className="hd-m df-c">
          {
            infoList.map((v, i) => (
              <div key={i} className="hd-m-item df-c">
                <span>{v.num}</span>
                <div className="hd-m-t">{v.title}</div>
              </div>
            ))
          }
        </div>
        <div className="hd-b df-c border-half-bottom">
          {
            resList.map((v, i) => (
              <div className="hd-b-item df-c" key={i} onClick={e => { this.skipRecord.bind(this, i) }}>
                <Icon iconName={v.icon}></Icon>
                <div className="hd-b-t">{v.title}</div>
              </div>
            ))
          }
        </div>
      </section>
    )
  }

}
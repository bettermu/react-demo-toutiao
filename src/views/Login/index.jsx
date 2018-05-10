/*
 * @Author: bettermu 
 * @Date: 2018-05-10 09:17:22 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-10 14:12:32
 * Login 登录页面
 */

import React from 'react'
import Icon from 'components/Icon-svg'
import { withRouter, Redirect } from 'react-router-dom'
import './index.less'
import connect from 'connect'

@connect
@withRouter
export default class extends React.Component {

  state = {
    username: '',
    username_msg: '',
    password: '',
    password_msg: ''
  }

  //登录方法
  login = async () => {
    const { username, password } = this.state
    let username_msg,
      password_msg
    //如果用户名为空
    if (!username) {
      username_msg = '请输入用户名'
    }
    //显示用户名提示
    if (username_msg) {
      this.setState({ username_msg })
      return
    }

    //如果密码为空
    if (!password) {
      password_msg = '请输入密码'
    }
    //显示密码提示
    if (password_msg) {
      this.setState({ password_msg })
      return
    }

    //都填写了  则下一步
    //获取props里的state和dispatch
    const { login, history, setFooterList } = this.props
    try {
      //等待异步  设置用户名和密码
      await login({
        username,
        password
      })
      setFooterList({ title: '我的', icon: 'account1', path: '/account' })
      console.log(this.props)
      history.slideStatus = 'bottom'
      history.goBack()
      
    } catch (e) { }
  }

  //用户名以及密码的绑定
  handleInputUsername(value) {
    this.setState({
      username: value
    })
  }
  handleInputPassword(value) {
    this.setState({
      password: value
    })
  }

  //关闭登录页返回account页面
  closeAndBack(){
    const {history}=this.props
    history.slideStatus='bottom'
    history.goBack()
  }


  render() {
    const { username_msg, password_msg } = this.state

    return (
      <div className="login-wrapper">
        <div className="close" onClick={this.closeAndBack.bind(this)}>
          <Icon iconName="close" />
        </div>
        <h2>登录你的头条，精彩永不消失</h2>
        <div className="input username">
          <input type="text" placeholder="用户名随便填" value={this.state.username} onChange={e => { this.handleInputUsername(e.target.value) }} />
          <span className={username_msg ? 'animate' : ''}>{username_msg}</span>
        </div>
        <div className="input password">
          <input type="text" placeholder="密码：123456" value={this.state.password} onChange={e => { this.handleInputPassword(e.target.value) }} />
          <span className={password_msg ? 'animate' : ''}>{password_msg}</span>
        </div>
        <button className="login" onClick={this.login.bind(this)}>进入头条</button>
      </div>
    )
  }
}
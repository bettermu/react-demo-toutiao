/*
 * @Author: bettermu 
 * @Date: 2018-05-14 14:49:28 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-14 15:33:49
 * 微头条tab栏组件 
 */

import React from 'react'
import { withRouter } from 'react-router-dom'
import Icon from 'components/Icon-svg'
import TextComponent from '../text/index'
import connect from 'connect'
import Alert from 'components/Alert'

@connect
@withRouter
export default class extends React.Component {
  state = {
    list: [
      { title: '文字', icon: '24' },
      { title: '图片', icon: 'tupian' },
      { title: '上传视频', icon: 'shipin' },
    ],
    textBol: false
  }

  //弹窗逻辑
  show(text) {
    const { state: { user: { user } }, history, showAlert } = this.props

    //判断是否登录
    if (!user.name) {
      showAlert({
        content: '请先登录！',
        success: () => {
          history.slideStatus = top
          history.push('/login')
        }
      })
      return
    }
    if (text === '文字') {
      this.setState({
        textBol: true
      })
    } else if (text === '图片') {
      showAlert({
        content: '图片模块暂未完成!!!'
      })
    } else if (text = '上传视频') {
      showAlert({
        content: '上传视频模块暂未完成!!!'
      })
    }
  }

  //关闭评论弹窗
  onClose() {
    this.setState({
      textBol: false
    })
  }

  render() {
    const {list,textBol,content,show}=this.state
    return (
      <div className="headline-top-bar df-c">
        {
          list.map((item,index)=>(
            <div className="item border-half-right" key={index} onClick={this.show.bind(this,item.title)}>
              <Icon iconName={item.icon}></Icon>
              <span>{item.title}</span>
            </div>
          ))
        }
        <TextComponent className={textBol?'text-active':''} onClose={this.onClose.bind(this)}></TextComponent>
      </div>
    )
  }
}

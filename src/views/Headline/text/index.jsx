/*
 * @Author: bettermu 
 * @Date: 2018-05-14 15:34:31 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-14 16:21:49
 * 发表文字页面
 */

import React from 'react'
import Icon from 'components/Icon-svg'
import connect from 'connect'

@connect
export default class extends React.Component {
  state = {
    val: '',
    input: null
  }
  componentDidMount() {
    //输入框聚焦
    this.refs.text.focus()
  }

  handleChange(val) {
    this.setState({ val })
  }

  //异步发送信息
  async send() {
    const { onClose, addHeadlineList, showAlert, showLoading, hideLoading } = this.props
    const { val } = this.state
    if (!val) {
      showAlert({
        content: '请输入你的分享内容!'
      })
      return
    }
    //显示加载效果
    showLoading()

    //异步请求
    await addHeadlineList({
      intro: val,
      name: 'cd'
    })

    //隐藏加载
    hideLoading()

    //关闭
    onClose()
  }

  render() {
    const { val } = this.state
    return (
      <div className={`text-wrapper ${this.props.className}`}>
        <div className="title df-c border-half-bottom">
          <div className="t-l" onClick={this.props.onClose}>取消</div>
          <div className="t-r t-disable" className={val ? 't-active' : ''} onClick={this.send.bind(this)}>发布</div>
        </div>
        <div className="text-box">
          <textarea placeholder="分享新鲜事..." ref="text" value={val} onChange={e => { this.handleChange(e.target.value) }}></textarea>
        </div>
      </div>
    )
  }
}
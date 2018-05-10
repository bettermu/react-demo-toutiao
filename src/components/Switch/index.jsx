/*
 * @Author: bettermu 
 * @Date: 2018-05-10 15:57:20 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-10 16:33:14
 * 开关切换switch组件
 */

import React from 'react'
import './index.less'

export default class extends React.Component {
  state = {
    checked: false
  }

  //从父组件传入checked
  componentWillMount() {
    this.setState({
      checked: this.props.checked
    })
  }

  //点击切换
  toggle() {
    this.setState({
      checked:!this.state.checked
    },()=>{
      //回调函数里拿到数据异步更新后的state,再将数据通过父组件的回调传给父组件
      const {handleInput}=this.props
      handleInput && handleInput(this.state.checked)
    })
  }

  render() {
    return (
      <div className="switch-wrapper">
        <label>
          <input className="mui-switch mui-switch-anim" type="checkbox" checked={this.state.checked} ref="obj" readOnly onClick={this.toggle.bind(this)} />
        </label>
      </div>
    )
  }
}

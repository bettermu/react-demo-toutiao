/*
 * @Author: bettermu 
 * @Date: 2018-05-16 14:19:50 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 16:02:13
 * 历史收藏页面
 */

import React from 'react'
import { withRouter } from 'react-router-dom'
import TitleBar from 'components/TitleBar'
import Swiper from 'react-id-swiper'
import Content from './content'
import connect from 'connect'
import './index.less'

@connect
@withRouter
export default class extends React.Component {
  state = {
    swiper: null
  }

  //激活tab栏
  activeTabs(i) {
    const { setTabsIndex, getRecordList, state: { record: { types } } } = this.props
    this.state.swiper && this.state.swiper.slideTo(i)
  }

  //swiper切换回调函数
  slideChangeTransitionEnd() {
    
    this.getData(this.state.swiper.activeIndex)
  }

  componentWillMount() {
    const { match: { params: { type } }, state: { record: { index } } } = this.props
    this.getData(type * 1)  //显式转换为number类型
  }

  componentDidMount() {
    const swiper = this.refs['record-swiper'].swiper
  
    this.setState({
      swiper
    })
    swiper.slideTo(this.props.state.record.index)
  }
  //获取数据
  async getData(i) {
    const { showLoading, hideLoading, setTabsIndex, getRecordList, state: { record: { types } } } = this.props
    setTabsIndex(i)
    //if (types[i].list.length > 0) return
    const { title } = types[i]
    showLoading()
    await getRecordList({ title })

    
    hideLoading()
  }

  render() {
    const { types: recordTypes, index: recordIndex } = this.props.state.record
    
    return (
      <div className="record-wrapper">
        <TitleBar title="收藏/历史"></TitleBar>
        <div className="tabs df-c border-half-top">
          {
            recordTypes.map((type, i) => (
              <div className={`tab ${i === recordIndex ? 'tab-active' : ''}`} key={i} onClick={e => this.activeTabs(i)}>{type.title}</div>
            ))
          }
        </div>
        <div className="record-content">
          <Swiper ref="record-swiper" on={{
            slideChangeTransitionEnd: this.slideChangeTransitionEnd.bind(this)
          }}>
            {
              recordTypes.map((type, index) => (
                <Content key={index} type={type}></Content>
              ))
            }
          </Swiper>
        </div>
      </div>
    )
  }

}
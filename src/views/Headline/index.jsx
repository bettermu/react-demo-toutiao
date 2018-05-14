/*
 * @Author: bettermu 
 * @Date: 2018-05-14 13:56:54 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-14 16:28:12
 * 微头条页面
 */
import React from 'react'
import { withRouter } from 'react-router-dom'
import Icon from 'components/Icon-svg'
import TopBar from './topBar'
import connect from 'connect'
import './index.less'

@connect
export default class extends React.Component {

  state = {
    pageindex: 1   //分页索引
  }

  componentWillMount() {
    //初始化加载数据
    const { getHeadlineList, state: { headline: { hasMore } } } = this.props

    //如果没有更多数据 函数停止执行
    if (!hasMore) return

    //请求数据
    this.props.getHeadlineList({
      pageindex: this.state.pageindex
    })
  }

  //下拉刷新
  handleRefresh() {
    this.setState({
      pageindex:1
    })
    return this.props.refreshHeadlineList({
      pageindex: 1
    })
  }


  //上拉加载
  handleLoad(){
    let {pageindex}=this.state
    pageindex++
    this.setState({
      pageindex
    })

    return this.props.getHeadlineList({
      pageindex
    })
  }

  //点赞
  likeNum(item){
    item.islike=!item.islike
    if(item.islike){
      item.like_num++
    }else {
      item.like_num--
    }
    //重新渲染state
    this.props.renderHeadlineList()
  }

  //关注状态切换
  attrReverse(item,attr){
    item[attr]=!item[attr]
    this.props.renderHeadlineList()
  }

  render(){
    const {headline:{headlineList,hasMore}} = this.props.state

    return(
      <article className="headline-wrapper">
        <section>
          <TopBar></TopBar>
        </section>
      </article>
    )
  }

}

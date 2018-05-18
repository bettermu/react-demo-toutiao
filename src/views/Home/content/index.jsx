/*
 * @Author: bettermu 
 * @Date: 2018-05-18 14:42:36 
 * @Last Modified by:   bettermu 
 * @Last Modified time: 2018-05-18 14:42:36 \
 * home页面content组件
 */

import React from 'react'
import PullLoad from 'components/PullLoad'
import connect from 'connect'
import { withRouter } from 'react-router-dom'

//没有图片的时候显示组件
const NoneImages = ({ item }) => (
  <div>
    <h4>{item.title}</h4>
    <p className="wes-3">{item.intro}</p>
    <div className="df-sb">
      <div className="small-box">
        <span>{item.source}</span>
        <span>评论：{item.comment}</span>
        <span>{item.time}</span>
      </div>
    </div>
  </div>
)

//一张图片的时候显示组件
const ImagesOne = ({ item }) => (
  <div className="df-sb">
    <div className="item-l">
      <h4>{item.title}</h4>
      <p className="wes-2">{item.intro}</p>
      <div className="df-sb">
        <div className="small-box">
          <span>{item.source}</span>
          <span>评论：{item.comment}</span>
        </div>
      </div>
    </div>
    <div className="item-r">
      <img src={item.images[0]} alt="" />
    </div>
  </div>
)

//多张图片的时候显示组件

const ImagesMore = ({ item }) => (
  <div>
    <div className="item-t">
      <h4>{item.title}</h4>
      <p className="wes-1">{item.intro}</p>
    </div>
    <div className="item-b df-sb">
      {
        item.images.map((img, index) => (<img key={index} src={img} alt={img} style={{ width: item.images.length === 2 ? '40%' : '25%' }} />))
      }
    </div>
    <div className="df-sb">
      <div className="small-box">
        <span>{item.source}</span>
        <span>评论：{item.comment}</span>
      </div>
    </div>
  </div>
)

@connect
@withRouter
export default class extends React.Component {
  state = {
    hasMore: true
  }

  handleLoad() {
    const { getListOfNews, state: { home: { newsList, newsIndex } } } = this.props
    return getListOfNews(newsList[newsIndex], { newsList, newsIndex, hasMore: this.state.hasMore })
  }

  handleRefresh() {
    const { refreshListOfNews, state: { home: { newsList, newsIndex } } } = this.props
    return refreshListOfNews(newsList[newsIndex], newsIndex)
  }

  render() {
    const { news } = this.props
    return (
      <section className="swiper-box">
        <PullLoad handleLoad={this.handleLoad.bind(this)} handleRefresh={this.handleRefresh.bind(this)} hasMore={news.hasMore}>
          <ul>
            {
              news.list && news.list.map((item, index) => (
                <li key={index} className="item border-half-bottom" onClick={e => {
                  this.props.history.slideStatus = 'left'
                  this.props.history.push(`/article/${item.id}`)
                }}>
                  {
                    item.images.length === 0 ? <NoneImages item={item} /> :
                      item.images.length === 1 ? <ImagesOne item={item} /> : <ImagesMore item={item} />
                  }
                </li>
              ))
            }
          </ul>
        </PullLoad>
      </section>
    )
  }
}
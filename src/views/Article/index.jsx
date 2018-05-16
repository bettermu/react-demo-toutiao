/*
 * @Author: bettermu 
 * @Date: 2018-05-16 09:44:21 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-16 11:23:37
 * 文章详情页面
 */

import React from 'react'
import Icon from 'components/Icon-svg'
import CircleLoading from 'components/CircleLoading'
import connect from 'connect'
import './index.less'

@connect
export default class extends React.Component {
  state = {
    loading: false
  }

  //异步获取数据
  async componentWillMount() {
    const { match: { params: { id } }, getArticle, state: { article: { articleInfo } } } = this.props
    if (articleInfo.id === id) return
    this.setState({
      loading: true
    })

    //阻塞等待数据回来
    await getArticle({ id })

    //更新加载状态
    this.setState({
      loading: false
    })
  }

  //点赞
  likeNum(info) {
    info.islike = !info.islike
    if (info.islike) {
      info.like_num ++
    } else {
      info.like_num --
    }
    this.props.renderHeadlineList()
  }

  //属性置返
  attrReverse(info, attr) {
    info[attr] = !info[attr]
    this.props.renderArticle()
  }

  render() {
    const { articleInfo } = this.props.state.article

    return (
      <article className="article-wrapper">
        <div className="head df-sb border-half-bottom">
          <div onClick={e => { this.props.history.goBack() }}>
            <Icon iconName="jiantou"></Icon>
          </div>
          <Icon iconName="More"></Icon>
        </div>
        {
          !this.state.loading ? (
            <div>
              <h2>ID:{articleInfo.id}</h2>
              <h2>{articleInfo.title}</h2>
              <div className="info df-sb">
                <div className="info-a">
                  <div className="avatar bg-cover-all" style={{ backgroundImage: `url(${articleInfo.avatar})` }}></div>
                  <div>
                    <h6>{articleInfo.source}</h6>
                    <time>{articleInfo.time}小时前</time>
                  </div>
                </div>
                <div className="like-box" className={articleInfo.attention ? 'like-n border-half' : 'like-y'} onClick={e => { this.attrReverse(articleInfo, 'attention') }}>{articleInfo.attention ? '已关注' : '关注'}</div>
              </div>
              <p className="intro">{articleInfo.intro}</p>
              <div className="tags">
                {
                  articleInfo.tags && articleInfo.tags.map((tag, index) => (
                    <div className="tag" key={index}>{tag}</div>
                  ))
                }
              </div>
              <div className="like-container df-sa">
                <div className={`like df-c ${articleInfo.islike ? 'like-y' : ''}`} onClick={e => { this.likeNum(articleInfo) }}>
                  <Icon iconName="zan"></Icon>
                  <span>{articleInfo.like_num}</span>
                </div>
              </div>
            </div>
          ) : (
              <div className="loading-wrapper df-c">
                <CircleLoading />
              </div>
            )
        }
      </article>
    )
  }
}

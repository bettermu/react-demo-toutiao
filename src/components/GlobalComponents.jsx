/*
 * @Author: bettermu 
 * @Date: 2018-05-10 11:18:46 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-10 15:09:13
 * 全局弹窗提示容器container 
 */

import React from 'react'
import Alert from 'components/Alert'
import DefaultLoading from 'components/DefaultLoading'
import connect from 'connect'

@connect
export default class GlobalComponents extends React.Component {
  render() {
    const { alert, loading } = this.props.state.config
    return (
      <div>
        <Alert show={alert.show} content={alert.content} success={alert.success} />
        <DefaultLoading show={loading.show} />
      </div>
    )
  }
}
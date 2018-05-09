/*
 * @Author: bettermu 
 * @Date: 2018-05-08 15:11:32 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-09 15:06:26
 * 异步动态加载Component 
 */


import React from 'react'
import NProgress from 'nprogress'

export default loadComponent => (
  class AsyncComponent extends React.Component {
    state = {
      Component: null,
    }

    async componentDidMount() {
      if (this.state.Component !== null) return
      NProgress.start()
      try {
        const { default: Component } = await loadComponent()
        this.setState({Component})
      } catch (err) {
        console.error(`Cannot load component in <AsyncComponent />`);
        throw err
      }
      NProgress.done()
    }

    render() {
      const { Component } = this.state
      return (Component) ? <Component {...this.props} /> : null
    }
  }
)
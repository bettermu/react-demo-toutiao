import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

//引入依赖样式
import 'nprogress/nprogress.css'
import './styles/index.css'
import './styles/index.less'

//引入路由
import Router from './router'

//引入store
import store from './store'

import DevTools from './devTools'

//字体图标
import 'utils/iconfont'

//rem布局
import 'utils/rem'

//解决ios下 onclick事件无效、
import initReactFastClick from 'react-fastclick'

ReactDom.render(
  <Provider store={store}>
   <div>
    <Router />
   </div>
  </Provider>
  , document.getElementById('app')
)
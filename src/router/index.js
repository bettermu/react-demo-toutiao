import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import { routes, layoutRouterMap, notLayoutRouterMap } from './config'
import Layout from 'src/App'
import GlobalComponents from 'components/GlobalComponents'
import { css } from 'glamor'

const renderRouteComponent = routes => routes.map((route, index) => {
  return <Route key={index} {...route} />
})

const NotLayoutRouter = renderRouteComponent(notLayoutRouterMap)
const LayoutRouter = renderRouteComponent(layoutRouterMap)

const pageTransitionsFn = status => {
  //创建动画状态对象
  let obj = {}
  if (status === 'left' || status === 'top') {
    obj = {
      atEnter: { offset: 100, opacity: 0 },
      atLeave: { offset: -100, opacity: 0 },
      atActive: { offset: 0, opacity: 1 }
    }
  } else if (status === 'right' || status === 'bottom') {
    obj = {
      atEnter: { offset: -100, opacity: 0 },
      atLeave: { offset: 100, opacity: 0 },
      atActive: { offset: 0, opacity: 1 }
    }
  } else {
    obj = {
      atEnter: { offset: 0, opacity: 1 },
      atLeave: { offset: 0, opacity: 1 },
      atActive: { offset: 0, opacity: 1 }
    }
  }

  //返回状态对象
  return obj
}

const mapStyleFn = status => styles => {
  let obj = {}
  if (status === 'left' || status === 'right') {
    obj = { transform: `translateX(${styles.offset}%)`, opacity: styles.opacity }
  } else if (status === 'top' || status === 'bottom') {
    obj = { transform: `translateY(${styles.offset}%)`, opacity: styles.opacity }
  }
  return obj
}


//包裹层内联样式
const wrapperRule = css`
  width: '100%';
  height: '100%'; 
  position: 'absolute';
  left:0;
  top:0;
`

class Router extends React.Component {
  render() {
    return (
      <div className={wrapperRule}>
        <HashRouter>
          <Route render={({ location, history }) => {
            history.slideStatus = history.slideStatus || (history.action === 'POP' ? 'right' : history.slideStatus)
            const pageTransitions = pageTransitionsFn(history.slideStatus)
            const mapStyle = mapStyleFn(history.slideStatus)
            history.slideStatus = false
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <GlobalComponents />
                <AnimatedSwitch
                {...pageTransitions}
                runOnMount={location.pathname === '/'}
                mapStyles={mapStyle}
                className="animate-wrapper">
                {NotLayoutRouter}
                <Route render={ props => {
                    return <Layout {...props}>
                        <Route render={()=> {
                            return (
                                <Switch>
                                    {LayoutRouter}
                                    <Redirect from="*" to="/404" />
                                </Switch>
                            )
                        }}/>
                    </Layout>
                }} />
            </AnimatedSwitch>
              </div>
            )
          }} />
        </HashRouter>
      </div>
    )
  }
}
export default Router




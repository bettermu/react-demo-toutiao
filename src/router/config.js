/*
 * @Author: bettermu 
 * @Date: 2018-05-08 15:22:53 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-08 21:17:27
 * 路由跳转配置文件
 */

import asyncComponent from './asyncComponent'

//动态加载组件的适配器
const _import_components = file => asyncComponent(() => import(`components/${file}`))
const _import_views = file => asyncComponent(() => import(`views/${file}`))

import NotFound from 'views/Error/404'


//包含在layout里的视图
export const layoutRouterMap = [
  {
    path: '/',
    name: '首页',
    exact: true,
    component: _import_views('Home')
  },
  {
    path: '/video',
    name: '视频',
    component: _import_views('Video')
  },
  {
    path: '/headline',
    name: '微头条',
    component: _import_views('Headline')
  }
]
//不包含在layout里的视图
export const notLayoutRouterMap = [
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '/login',
    name: '登陆',
    component: _import_views('Login')
  },
  {
    path: '/article/:id',
    name: '文章',
    component: _import_views('Article')
  },
  {
    path: '/search',
    name: '搜索',
    component: _import_views('Search')
  },
  {
    path: '/account',
    name: '我的',
    component: _import_views('Account')
  },
  {
    path: '/record/:type',
    name: '收藏/历史',

    component: _import_views('Record')
  },
  {
    path: '/mall',
    name: '头条商城',
    component: _import_views('Mall')
  },
  {
    path: '/msg',
    name: '消息通知',
    component: _import_views('Msg')
  },
  {
    path: '/jd',
    name: '京东特供',
    component: _import_views('Jingdong')
  },
  {
    path: '/feedback',
    name: '用户反馈',

    component: _import_views('Feedback')
  },
  {
    path: '/system',
    name: '系统设置',

    component: _import_views('System')
  }
]




//导出所有视图
export const routes = layoutRouterMap.concat(notLayoutRouterMap)


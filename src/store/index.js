/*
 * @Author: bettermu 
 * @Date: 2018-05-08 14:18:39 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-08 21:41:01
 * 全局store
 */

import { createStore, compose, applyMiddleware } from 'redux'
import DevTools from '../devTools'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
)


export default configureStore()

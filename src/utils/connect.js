/*
 * @Author: bettermu 
 * @Date: 2018-05-08 13:32:17 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-08 21:21:02
 * 
 * 通用connect组件
 */

import actions from 'src/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default connect(
  state => ({ state }),  //相当于 mapStateToProps
  dispatch => bindActionCreators(actions, dispatch) //相当于mapDispatchToProps
)
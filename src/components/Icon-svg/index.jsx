/*
 * @Author: bettermu 
 * @Date: 2018-05-09 09:05:54 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-09 14:33:28
 * SVG图标组件
 */



import React from 'react'
import PropTypes from 'prop-types'

class IconSvg extends React.Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }
  render() {
    let { className, iconName, onClick } = this.props
    //console.log(className)
    return (
      <svg className={`icon ${className}`} aria-hidden="true" onClick={onClick}>
        <use xlinkHref={`#icon-${iconName}`}></use>
      </svg>
    )
  }
}

export default IconSvg